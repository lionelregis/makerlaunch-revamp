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
  - A 3-step **starting-point finder** that recommends where to begin based on
    your idea, team, and evidence.
  - A **Product Studio** deep-dive: its three formats (Foundations Series, Build
    Sprints, Studio Cohort) and the six phases of building a product
    (Discover → Define → Design → Build → Validate → Launch), each with what you
    can do and what you produce.
  - A **clearly readable program catalogue** — every program expands to show
    *who it's for*, *what it offers*, and *what you walk away with*, across all
    four stages (Product Studio, the refreshed *MakerLaunch* accelerator, the
    *Simon Nehme* summer school, GNG 4120 and capstone continuation tracks, the
    eHub, and the Explore-stage events — Design Day, uOttawaHack, pitch and case
    competitions, the speaker series).
  - The **MakerLaunch entry bar** (customer discovery *or* a working prototype).
- **Advisor / alumni journey.** How giving back comes full circle, concrete
  ways to get involved, the **P.Eng. advantage**, a featured **mentor preview**,
  recognition, the ecosystem partners, and the 2029 impact goals.
- **Mentors & Advisors directory.** A dedicated page with the full catalogue of
  (illustrative) mentor profiles — each with an avatar, bio, areas of expertise,
  and a quote on why they give back — filterable by field. Avatars are
  illustrated portraits with a graceful coloured-monogram fallback.

All copy is written to be genuinely front-facing — internal/strategic jargon
(pipeline, flywheel, etc.) is deliberately avoided.

## Content source

Copy is drawn from two front-facing source documents and lives in a single
typed module (`src/data/content.ts`), so it can be reviewed and edited without
touching the components:

- *Engineering Entrepreneurship Programming Revamp — Executive Summary*
- *Product Studio — A Year-Round Product Development Training Program*

Internal/administrative material (budgets, resourcing, milestone schedules,
decision gates) is intentionally excluded.

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
    Pipeline          Stage overview strip + interactive stage explorer
    ProgramCard       Expandable program card (who it's for / offers / takeaway)
    ProductStudio     Product Studio deep-dive (formats + six phases)
    StageFinder       The founder starting-point finder
    Avatar            Illustrated mentor avatar with monogram fallback
    MentorCard        A single mentor/advisor profile card
    Mentors           Featured mentor preview (links to the directory)
  views/
    Landing           Hero + role selection + the idea + the path + principles
    FounderView       Finder, Product Studio, full path, entry bar, steps
    AdvisorView       Full circle, ways to help, P.Eng., mentors, impact, CTA
    MentorsPage       Full mentors & advisors directory, filterable by field
  App.tsx             View routing (home / founder / advisor / mentors)
  main.tsx            Entry point
```

## Deployment

The site deploys to GitHub Pages (source: GitHub Actions) via
`.github/workflows/deploy.yml` on pushes to `main`. The build uses a relative
base (`./`), so it serves correctly from the Pages project subpath.
