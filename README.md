# Engineering Entrepreneurship — Programming Preview

An interactive, front-facing website that previews the proposed **Engineering
Entrepreneurship programming revamp** for the University of Ottawa Faculty of
Engineering (Centre for Entrepreneurship and Engineering Design — CEED).

It opens by asking visitors **who they are** — a *potential founder* or an
*advisor / alumni* — and then presents the information relevant to that role
across the four-stage entrepreneurial pipeline: **Explore → Validate → Build →
Scale**.

> This is a preview of the *proposed* programming. Figures and dates reflect the
> programming plan for September 2026 onward and are subject to change. It is a
> front-facing demonstration only — internal/administrative material (budgets,
> resourcing, milestone schedules, decision gates) is intentionally excluded.

## What it shows

- **Role-based entry.** Choose *Founder* or *Advisor / Alumni* and the site
  tailors what you see.
- **Founder journey.**
  - A 3-step **stage finder** that recommends where to start based on your idea,
    team, and evidence.
  - An **interactive pipeline explorer** with each stage's purpose, how you get
    in, how you move on, and the programs at every stage (the new *Validation
    Program*, the refreshed *MakerLaunch* accelerator, the *Simon Nehme* summer
    school, GNG 4120 and capstone entrepreneurial streams, the eHub advisory,
    and the Explore-stage events — Design Day, uOttawaHack, pitch and case
    competitions, the speaker series).
  - The explicit **MakerLaunch readiness criteria**.
- **Advisor / alumni journey.** The mentorship **flywheel**, concrete ways to
  get involved (mentor, Demo Day reviewer, case contributor, P.Eng. support),
  the **PEO advantage**, recognition, the ecosystem partners ventures hand off
  to, and the 2029 impact goals.

## Content source

All copy is drawn from the *Engineering Entrepreneurship Programming Revamp —
Executive Summary* (Faculty of Engineering, University of Ottawa, CEED, Summer
2026) and lives in a single typed module (`src/data/content.ts`), so it can be
reviewed and edited without touching the components.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite 8](https://vite.dev) (Rolldown)
- [Tailwind CSS v4](https://tailwindcss.com) (theme tokens via `@theme`)
- No runtime UI dependencies beyond React — icons are a hand-rolled inline set.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check (tsc -b) and produce a production build in dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project structure

```
src/
  data/content.ts     All copy + the program/stage/finder data model
  lib/accents.ts      Stage → Tailwind class maps (kept static for the JIT)
  components/
    Nav, Footer, Logo
    Icon              Inline icon set keyed by name
    Reveal            Scroll-triggered fade-in wrapper
    SectionHeading
    Pipeline          PipelineStrip (overview) + PipelineExplorer (interactive)
    ProgramCard       Expandable program card
    StageFinder       The founder stage-finder wizard
  views/
    Landing           Hero + role selection + intent + pipeline + principles
    FounderView       Stage finder, pipeline explorer, readiness, steps
    AdvisorView       Flywheel, ways to help, PEO, impact, partners, CTA
  App.tsx             View routing (home / founder / advisor)
  main.tsx            Entry point
```

## Deployment

The site deploys to GitHub Pages via `.github/workflows/deploy.yml` on pushes to
`main`. The build sets `VITE_BASE` to `/<repo>/` so it serves correctly from the
project subpath.
