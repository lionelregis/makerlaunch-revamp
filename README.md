# Engineering Entrepreneurship — Programming Demonstrator

An interactive, bilingual website that demonstrates the **Engineering
Entrepreneurship programming revamp** for the University of Ottawa Faculty of
Engineering (Centre for Entrepreneurship and Engineering Design — CEED).

It opens by asking visitors **who they are** — a *potential founder* or an
*advisor / alumni* — and then presents the information that is relevant to that
role across the four-stage entrepreneurial pipeline: **Explore → Validate →
Build → Scale**.

> This is a demonstration of the *proposed* programming. Figures, dates, and
> program details follow the **Strategic Plan and Operating Playbook**
> (Summer 2026).

## Highlights

- **Role-based entry.** Choose *Founder* or *Advisor / Alumni* and the site
  tailors what you see.
- **Founder journey.**
  - A 4-step **stage finder** that recommends where to start based on your idea,
    team, evidence, and whether you're commercializing research.
  - An **interactive pipeline explorer** with explicit entry/exit criteria and
    the programs at every stage (the new *Validation Program*, the refreshed
    *MakerLaunch* accelerator, the *Simon Nehme* summer school, GNG 4120 and
    capstone streams, and the eHub advisory relationship).
  - The three **tracks** (Primary, Francophone, Research-Founder) and the
    explicit MakerLaunch **readiness criteria**.
- **Advisor / alumni journey.** The mentorship **flywheel**, concrete ways to
  get involved (mentor, demo-day judge, case contributor, P.Eng. support), the
  **PEO** advantage, recognition, and the impact targets.
- **Bilingual by design.** Every string is available in English and French with
  a one-click language toggle — honouring the program's *"bilingual by design,
  not by translation"* principle. The choice is remembered across visits.
- **Accessible & responsive.** Semantic markup, keyboard-friendly controls,
  `prefers-reduced-motion` support, and a mobile-first layout.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite 8](https://vite.dev) (Rolldown)
- [Tailwind CSS v4](https://tailwindcss.com) (theme tokens via `@theme`)
- No runtime UI dependencies beyond React — icons and the language layer are
  hand-rolled.

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
  data/
    content.ts        All bilingual copy + the program/stage/track data model
  lib/
    i18n.tsx          Language context + provider (EN/FR), persisted to storage
    accents.ts        Stage → Tailwind class maps (kept static for the JIT)
  components/
    Nav, Footer, Logo
    Icon              Inline icon set keyed by name
    Reveal            Scroll-triggered fade-in wrapper
    SectionHeading
    Pipeline          PipelineStrip (overview) + PipelineExplorer (interactive)
    ProgramCard       Expandable program card
    StageFinder       The founder stage-finder wizard
  views/
    Landing           Hero + role selection + vision/mission + principles
    FounderView       Stage finder, pipeline explorer, tracks, readiness, steps
    AdvisorView       Flywheel, ways to help, PEO, recognition, impact, CTA
  App.tsx             View routing (home / founder / advisor)
  main.tsx            Entry point (wraps App in the language provider)
```

## Content source

All copy is drawn from the *Engineering Entrepreneurship Programming Revamp —
Strategic Plan and Operating Playbook* (Faculty of Engineering, University of
Ottawa, CEED, Summer 2026) and lives in a single typed module
(`src/data/content.ts`), so it can be reviewed and edited without touching the
components.
