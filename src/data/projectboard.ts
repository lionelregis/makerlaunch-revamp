// Course Project Board — standalone content model
// ---------------------------------------------------------------------------
// This module backs the standalone /projectboard.html page and is deliberately
// independent of the main site's content module, so the page shares nothing
// with the rest of the project beyond its URL. Edit the wording and the seeded
// projects in src/content/projectboard.md.
// ---------------------------------------------------------------------------

import yaml from 'js-yaml';
import boardRaw from '../content/projectboard.md?raw';

/** Read the YAML data block (the part between the leading --- fences). */
function frontmatter(raw: string): Record<string, unknown> {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return (m ? yaml.load(m[1]) : {}) as Record<string, unknown>;
}

export interface ProjectPost {
  id: string;
  title: string;
  /** Course the project belongs to (drives the board filter). */
  course: string;
  /** Semester the project runs in, e.g. "Fall 2026". */
  semester: string;
  professor: string;
  /** Industry partner backing the project. */
  partner: string;
  description: string;
  /** Required skill sets. */
  skills: string[];
  /** Professor's contact email (the Contact professor button). */
  contact: string;
  /** Runtime-only: true for posts a visitor created in their browser. */
  local?: boolean;
}

export interface BoardCopy {
  eyebrow: string;
  title: string;
  subtitle: string;
  countLabel: string;
  filterLabel: string;
  filterAll: string;
  emptyLabel: string;
  note: string;
  // Post toggle + form
  postButton: string;
  postCancel: string;
  formTitle: string;
  formIntro: string;
  titleLabel: string;
  titlePlaceholder: string;
  courseLabel: string;
  coursePlaceholder: string;
  semesterLabel: string;
  semesterPlaceholder: string;
  professorLabel: string;
  professorPlaceholder: string;
  partnerLabel: string;
  partnerPlaceholder: string;
  descriptionLabel: string;
  descriptionPlaceholder: string;
  skillsLabel: string;
  skillsHint: string;
  skillsPlaceholder: string;
  contactLabel: string;
  contactPlaceholder: string;
  submitButton: string;
  formError: string;
  // Card
  partnerHeading: string;
  skillsHeading: string;
  contactButton: string;
  mailtoSubject: string;
  yourPostBadge: string;
  removeLabel: string;
  footerLine: string;
}

const fm = frontmatter(boardRaw);
export const boardCopy = fm.board as BoardCopy;
export const seededProjects = fm.projects as ProjectPost[];
