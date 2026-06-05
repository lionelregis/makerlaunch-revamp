// Static site generator for the Engineering Entrepreneurship Programming site.
//
// Zero dependencies. Reads the two markdown source files in ./content, renders
// a clean two-tier site (the strategy is the spine; Product Studio is a section
// you drill into), and writes static HTML + CSS to ./dist.
//
// Run:  node build.mjs
//
// Design notes are in README.md. The program name "Product Studio" lives only
// in the source markdown, so renaming is a single find-and-replace there.

import { readFileSync, writeFileSync, copyFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = dirname(fileURLToPath(import.meta.url));
const CONTENT = join(ROOT, 'content');
const DIST = join(ROOT, 'dist');
const SRC = join(ROOT, 'src');

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeAttr = (s) => escapeHtml(s).replace(/"/g, '&quot;');

/** Inline markdown: links, bold, italic. Input is raw markdown text. */
function inline(s) {
  let t = escapeHtml(s);
  t = t.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (_, txt, url) => `<a href="${escapeAttr(url)}">${txt}</a>`,
  );
  t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  t = t.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return t;
}

/** Strip inline markdown to plain text (for table data-labels and slugs). */
function toText(s) {
  return s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .trim();
}

function slugify(s) {
  return toText(s)
    .toLowerCase()
    .replace(/^\d+\.\s*/, '') // drop leading "2. "
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function splitRow(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim());
}

const isSeparator = (s) =>
  s.includes('|') && s.includes('-') && /^[\s|:-]+$/.test(s.trim());

// Friendlier on-this-page nav labels, keyed by section slug. Section headings
// themselves keep their full document text; only the nav uses these.
const NAV_LABELS = {
  // Strategy
  'the-strategic-case': 'Overview',
  'strategic-intent': 'The pipeline',
  'key-programming-changes': 'Programming changes',
  'key-activities-and-calendar': 'Calendar',
  'proposed-resources': 'Resources & budget',
  'timeline-and-phasing': 'Timeline',
  'milestones-and-deliverables': 'Milestones',
  'intended-outcomes': 'Outcomes',
  recommendation: 'Recommendation',
  // Product Studio
  overview: 'Overview',
  'how-product-studio-fits': 'How it fits',
  'target-audience': 'Audience',
  'curriculum-and-competencies': 'Curriculum',
  'program-architecture-three-formats': 'Formats',
  'delivery-calendar': 'Calendar',
  'pedagogy-and-delivery-model': 'Pedagogy',
  'readiness-gate-and-makerlaunch-handoff': 'Readiness gate',
  'facilitation-and-resourcing': 'Resourcing',
  metrics: 'Metrics',
  'risks-and-mitigations': 'Risks',
  'implementation-roadmap': 'Roadmap',
  appendices: 'Appendices',
};

// ---------------------------------------------------------------------------
// Frontmatter
// ---------------------------------------------------------------------------

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const data = {};
  let body = raw;
  if (m) {
    for (const line of m[1].split('\n')) {
      const idx = line.indexOf(':');
      if (idx === -1) continue;
      data[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
    }
    body = raw.slice(m[0].length);
  }
  return { data, body };
}

// ---------------------------------------------------------------------------
// Responsive table rendering
// ---------------------------------------------------------------------------

function renderTable(headerLine, bodyLines) {
  const header = splitRow(headerLine);
  const headerText = header.map(toText);
  const n = header.length;
  const rows = bodyLines.map(splitRow);

  const thead = `<thead><tr>${header
    .map((h) => `<th>${inline(h)}</th>`)
    .join('')}</tr></thead>`;

  const body = rows
    .map((cells) => {
      // A "section row": first cell filled, the rest empty (used to group the
      // calendar by stage). Render as a full-width band that also stacks well.
      const isSection =
        n > 2 && cells[0] !== '' && cells.slice(1).every((c) => c === '');
      if (isSection) {
        return `<tr class="t-section"><th colspan="${n}">${inline(
          cells[0],
        )}</th></tr>`;
      }
      const tds = cells
        .map((c, i) => {
          if (i === 0) return `<td class="cell-head">${inline(c)}</td>`;
          const label = headerText[i];
          const attr = label ? ` data-label="${escapeAttr(label)}"` : '';
          return `<td${attr}>${inline(c)}</td>`;
        })
        .join('');
      return `<tr>${tds}</tr>`;
    })
    .join('');

  return `<div class="table-wrap"><table>${thead}<tbody>${body}</tbody></table></div>`;
}

// ---------------------------------------------------------------------------
// Markdown body -> hero + sections
// ---------------------------------------------------------------------------

function renderBody(body) {
  const lines = body.replace(/\r\n/g, '\n').split('\n');
  let i = 0;

  let h1 = '';
  const heroBlocks = [];
  const sections = [];
  let cur = null;

  const target = () => (cur ? cur.blocks : heroBlocks);

  while (i < lines.length) {
    const line = lines[i];

    // Blank line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Table
    if (
      /^\s*\|/.test(line) &&
      i + 1 < lines.length &&
      isSeparator(lines[i + 1])
    ) {
      const headerLine = line;
      i += 2; // skip header + separator
      const bodyLines = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) {
        bodyLines.push(lines[i]);
        i++;
      }
      target().push(renderTable(headerLine, bodyLines));
      continue;
    }

    // Heading
    const h = line.match(/^(#{1,6})\s+(.+)$/);
    if (h) {
      const level = h[1].length;
      const text = h[2].trim();
      if (level === 1) {
        h1 = text;
        i++;
        continue;
      }
      if (level === 2) {
        if (cur) sections.push(cur);
        cur = {
          id: slugify(text),
          label: toText(text).replace(/^\d+\.\s*/, ''),
          heading: text,
          blocks: [],
        };
        i++;
        continue;
      }
      // h3+
      target().push(
        `<h${level} id="${slugify(text)}">${inline(text)}</h${level}>`,
      );
      i++;
      continue;
    }

    // Unordered list
    if (/^\s*-\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*-\s+/, ''));
        i++;
      }
      target().push(
        `<ul>${items.map((it) => `<li>${inline(it)}</li>`).join('')}</ul>`,
      );
      continue;
    }

    // Ordered list
    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ''));
        i++;
      }
      target().push(
        `<ol>${items.map((it) => `<li>${inline(it)}</li>`).join('')}</ol>`,
      );
      continue;
    }

    // Paragraph (gather consecutive plain lines)
    const para = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^\s*\|/.test(lines[i]) &&
      !/^#{1,6}\s/.test(lines[i]) &&
      !/^\s*-\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i])
    ) {
      para.push(lines[i].trim());
      i++;
    }
    const text = para.join(' ');
    const trimmed = text.trim();
    const isNote =
      trimmed.startsWith('*') &&
      !trimmed.startsWith('**') &&
      trimmed.endsWith('*');
    target().push(
      `<p${isNote ? ' class="note"' : ''}>${inline(text)}</p>`,
    );
  }

  if (cur) sections.push(cur);
  return { h1, heroBlocks, sections };
}

// ---------------------------------------------------------------------------
// Page assembly
// ---------------------------------------------------------------------------

function tierNav(current) {
  const tiers = [
    { key: 'strategy', label: 'Strategy', href: 'index.html' },
    { key: 'studio', label: 'Product Studio', href: 'product-studio.html' },
  ];
  return tiers
    .map(
      (t) =>
        `<a class="tier${t.key === current ? ' is-current' : ''}" href="${
          t.href
        }">${t.label}</a>`,
    )
    .join('');
}

function tocNav(sections, idPrefix) {
  const items = sections
    .map(
      (s) =>
        `<li><a href="${idPrefix}#${s.id}">${escapeHtml(s.label)}</a></li>`,
    )
    .join('');
  return items;
}

function shell({ title, tier, hero, main, sections, idPrefix }) {
  const tocItems = tocNav(sections, idPrefix);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="topflag"></div>
<header class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="index.html">
      <span class="brand-eyebrow">Faculty of Engineering · CEED</span>
      <span class="brand-name">Engineering Entrepreneurship Programming</span>
    </a>
    <nav class="tiers" aria-label="Sections">${tierNav(tier)}</nav>
  </div>
</header>

<main class="layout">
  <aside class="toc" aria-label="On this page">
    <div class="toc-title">On this page</div>
    <nav><ul>${tocItems}</ul></nav>
  </aside>

  <article class="content">
    ${hero}
    <details class="toc-mobile">
      <summary>On this page</summary>
      <nav><ul>${tocItems}</ul></nav>
    </details>
    ${main}
  </article>
</main>

<footer class="site-footer">
  <div class="site-footer-inner">
    <p>Faculty of Engineering · Centre for Entrepreneurship and Engineering Design (CEED), University of Ottawa</p>
    <p>Prepared by Lionel Regis, Program Manager · Summer 2026 · <span class="badge">Draft for review</span></p>
    <p class="fine">All figures are illustrative and to be confirmed against CEED and Faculty finance records before submission. "Product Studio" is a working title pending the Program Director's confirmation.</p>
  </div>
</footer>
</body>
</html>
`;
}

// Callouts injected after specific sections, by section id.
const CALLOUTS = {
  // Strategy: drill down into the Product Studio operating design.
  'strategic-intent': `
<aside class="callout drill">
  <p class="callout-k">Drill down</p>
  <p><strong>Product Studio</strong> is the new program at the Validate stage. Its curriculum, three delivery formats, pedagogy, and readiness gate are set out in its operating design.</p>
  <p><a class="btn" href="product-studio.html">Open the Product Studio operating design</a></p>
</aside>`,
  // Product Studio: single source of truth, link back to the strategy.
  overview: `
<aside class="callout linkback">
  <p class="callout-k">Part of the strategy</p>
  <p>This is the operating design for one stage of the pipeline. For the strategic case, the four-stage pipeline, the consolidated budget, and the pipeline-level targets, see the programming revamp.</p>
  <p><a href="index.html">Engineering Entrepreneurship Programming Revamp</a></p>
</aside>`,
  'facilitation-and-resourcing': `
<aside class="callout linkback">
  <p class="callout-k">Single source: budget</p>
  <p>Product Studio does not carry a separate budget. The consolidated Year 1 figure lives in the strategy, so it is not repeated here.</p>
  <p><a href="index.html#proposed-resources">See Resources and budget in the strategy</a></p>
</aside>`,
  metrics: `
<aside class="callout linkback">
  <p class="callout-k">Single source: targets</p>
  <p>These program metrics feed the pipeline-level targets. The targets table lives in the strategy, so it is not repeated here.</p>
  <p><a href="index.html#intended-outcomes">See Outcomes in the strategy</a></p>
</aside>`,
};

function renderSections(sections) {
  return sections
    .map((s) => {
      const extra = s.id === 'recommendation' ? ' section-cta' : '';
      const callout = CALLOUTS[s.id] || '';
      return `<section id="${s.id}" class="doc-section${extra}">
<h2 id="${s.id}-h">${inline(s.heading)}</h2>
${s.blocks.join('\n')}
${callout}
</section>`;
    })
    .join('\n');
}

function buildPage(file, { tier, idPrefix, askCallout, breadcrumb }) {
  const raw = readFileSync(join(CONTENT, file), 'utf8');
  const { data, body } = parseFrontmatter(raw);
  const { h1, heroBlocks, sections } = renderBody(body);
  for (const s of sections) if (NAV_LABELS[s.id]) s.label = NAV_LABELS[s.id];

  const draft =
    (data.status || '').toLowerCase() === 'draft'
      ? '<span class="badge">Draft</span>'
      : '';

  const hero = `<header class="doc-hero">
  ${breadcrumb || ''}
  <p class="eyebrow">${escapeHtml(data.faculty || '')}</p>
  <h1>${escapeHtml(data.title || h1)}</h1>
  ${data.subtitle ? `<p class="subtitle">${escapeHtml(data.subtitle)}</p>` : ''}
  <p class="byline">${[data.author, data.date, draft, data.doc_role]
    .filter(Boolean)
    .join(' &middot; ')}</p>
  ${heroBlocks.join('\n')}
  ${askCallout || ''}
</header>`;

  const main = renderSections(sections);
  const title =
    tier === 'strategy'
      ? data.title
      : `${data.title} · Engineering Entrepreneurship Programming`;

  return { html: shell({ title, tier, hero, main, sections, idPrefix }), data };
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

mkdirSync(DIST, { recursive: true });

const askCallout = `
<aside class="callout ask">
  <p class="callout-k">The ask</p>
  <p>Approve a Year 1 operating budget of about <strong>$52,600</strong> above baseline, with no new staff, and endorse a September 2026 launch.</p>
  <p><a href="#recommendation">See the recommendation</a></p>
</aside>`;

const strategy = buildPage('01-programming-revamp.md', {
  tier: 'strategy',
  idPrefix: '',
  askCallout,
});

const studio = buildPage('02-product-studio.md', {
  tier: 'studio',
  idPrefix: '',
  breadcrumb:
    '<nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Programming Revamp</a> <span aria-hidden="true">›</span> <span>Product Studio</span></nav>',
});

writeFileSync(join(DIST, 'index.html'), strategy.html);
writeFileSync(join(DIST, 'product-studio.html'), studio.html);
copyFileSync(join(SRC, 'styles.css'), join(DIST, 'styles.css'));
writeFileSync(join(DIST, '.nojekyll'), '');

console.log('Built dist/index.html and dist/product-studio.html');
