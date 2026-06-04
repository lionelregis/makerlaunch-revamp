// Engineering Entrepreneurship Programming — content model
// ---------------------------------------------------------------------------
// Source of truth: "Engineering Entrepreneurship Programming Revamp —
// Executive Summary", Faculty of Engineering, University of Ottawa (Centre for
// Entrepreneurship and Engineering Design / CEED), Summer 2026.
//
// This is a FRONT-FACING preview of the proposed programming. It deliberately
// omits internal/administrative material from the source (budget, resourcing
// tables, milestone schedules, decision gates, space relocation, etc.) and
// presents only what a prospective founder or an advisor/alumnus would see and
// experience.
// ---------------------------------------------------------------------------

export type Role = 'founder' | 'advisor';
export type StageId = 'explore' | 'validate' | 'build' | 'scale';
export type Accent = 'amber' | 'emerald' | 'garnet' | 'indigo';

// ---------------------------------------------------------------------------
// Brand & chrome
// ---------------------------------------------------------------------------

export const brand = {
  short: 'CEED',
  programName: 'Engineering Entrepreneurship',
  faculty: 'Faculty of Engineering · University of Ottawa',
  centre: 'Centre for Entrepreneurship and Engineering Design',
};

// ---------------------------------------------------------------------------
// Landing copy & role selection
// ---------------------------------------------------------------------------

export const landing = {
  eyebrow: 'A connected pipeline · launching September 2026',
  title: 'Engineering ideas, carried all the way to a venture.',
  subtitle:
    'A connected four-stage pathway — Explore, Validate, Build, Scale — that turns engineering ideas into validated, incorporated ventures. Anchored by the MakerLaunch accelerator and built so no promising idea stalls at the end of a course.',
  roleQuestion: 'First, who are you?',
  roleHint: 'We’ll show you what matters for your path.',
  intentTitle: 'The idea behind the revamp',
  intentBody:
    'Engineering students generate ideas in design courses, hackathons, pitch competitions, and capstone projects — but until now nothing carried those ideas forward into validated ventures. This programming builds the missing middle: a validation pipeline that lets the accelerator work, and that develops more students into venture-ready founders across four connected stages.',
  principlesTitle: 'What guides every stage',
  pipelineTitle: 'One pathway, four stages',
  pipelineSubtitle:
    'CEED focuses its support on the first three stages and hands off to the broader ecosystem at Scale. Select a stage to see what it offers.',
};

export const roleCards: {
  role: Role;
  icon: string;
  title: string;
  body: string;
  cta: string;
}[] = [
  {
    role: 'founder',
    icon: 'rocket',
    title: 'I’m a potential founder',
    body:
      'An engineering student with an idea — or just the curiosity to start. See which programs fit where you are today and what your next step is.',
    cta: 'Find my starting point',
  },
  {
    role: 'advisor',
    icon: 'users',
    title: 'I’m an advisor or alumni',
    body:
      'An alumnus, mentor, or Professional Engineer of Ontario who wants to give back. See how you power the next generation of founders.',
    cta: 'See how to get involved',
  },
];

export interface Principle {
  icon: string;
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    icon: 'flow',
    title: 'A pipeline, not just a program',
    body:
      'Every touchpoint earns its place by what it feeds. Each stage hands committed teams to the next — so ideas keep moving instead of ending with a course.',
  },
  {
    icon: 'check',
    title: 'Advance on evidence',
    body:
      'Ventures progress on validated problems, not enthusiasm. Entry to the accelerator now has explicit criteria, so teams arrive ready to build.',
  },
  {
    icon: 'beaker',
    title: 'Lower the cost of exploring',
    body:
      'The Validation Program is non-competitive by design, with modest non-dilutive funding. The point is to make it cheap and safe to test an idea.',
  },
  {
    icon: 'users',
    title: 'Stronger with alumni & PEO',
    body:
      'The Faculty’s comparative advantage at Scale is its community — alumni founders and Professional Engineers of Ontario who return to build the next generation.',
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const heroStats: Stat[] = [
  { value: '4', label: 'connected pipeline stages' },
  { value: '6', label: 'core programming changes' },
  { value: '8', label: 'teams in the first Validation cohort' },
  { value: '$500–$2.5k', label: 'non-dilutive validation funding per team' },
];

// ---------------------------------------------------------------------------
// The four-stage pipeline
// ---------------------------------------------------------------------------

export interface Stage {
  id: StageId;
  order: number;
  accent: Accent;
  icon: string;
  name: string;
  tagline: string;
  purpose: string;
  /** What it takes to enter this stage (front-facing). */
  entry: string;
  /** What carries you to the next stage. */
  advance: string;
  owner: string;
}

export const stages: Stage[] = [
  {
    id: 'explore',
    order: 1,
    accent: 'amber',
    icon: 'compass',
    name: 'Explore',
    tagline: 'Generate ideas, form teams, and build exposure.',
    purpose:
      'Get exposed to entrepreneurial thinking, generate ideas, and form teams — through courses, hackathons, competitions, and speakers. No commitment to continue; the goal is to start.',
    entry: 'Enrolment in the Faculty of Engineering. Everyone is welcome.',
    advance: 'You decide to carry an idea forward past the course or event endpoint.',
    owner: 'Faculty & CEED',
  },
  {
    id: 'validate',
    order: 2,
    accent: 'emerald',
    icon: 'beaker',
    name: 'Validate',
    tagline: 'Turn an idea into a validated problem with a committed team.',
    purpose:
      'Convert ideas into validated problems with committed teams through customer discovery and early prototyping. This is the missing middle stage the revamp builds — between the classroom and the accelerator.',
    entry: 'A committed team and a problem worth testing. Entry to the Validation Program is non-competitive.',
    advance: 'Evidence of customer discovery, or a working prototype that solves a real user problem.',
    owner: 'CEED · the new Validation Program',
  },
  {
    id: 'build',
    order: 3,
    accent: 'garnet',
    icon: 'rocket',
    name: 'Build',
    tagline: 'Accelerate a validated venture toward incorporation and market entry.',
    purpose:
      'Accelerate validated ventures toward incorporation, capital, and market entry. MakerLaunch — the Faculty’s flagship accelerator — operates at this stage, now with explicit entry criteria.',
    entry: 'Evidence of customer discovery OR a working prototype, plus a founder ready to commit.',
    advance: 'An incorporated venture with traction, pilots, or committed funding — ready to engage external capital.',
    owner: 'CEED · MakerLaunch',
  },
  {
    id: 'scale',
    order: 4,
    accent: 'indigo',
    icon: 'globe',
    name: 'Scale',
    tagline: 'A warm handoff to the ecosystem — with the Faculty staying connected.',
    purpose:
      'A warm handoff to ecosystem partners with the resources to support growth. The Faculty stays connected through its alumni community and Professional Engineers of Ontario network — its comparative advantage at this stage.',
    entry: 'A venture that has graduated from the Build stage.',
    advance: 'Active engagement with ecosystem partners, and a path back as an alumni mentor.',
    owner: 'Ecosystem partners · alumni & PEO network',
  },
];

// ---------------------------------------------------------------------------
// Programs & touchpoints (the front-facing programming calendar)
// ---------------------------------------------------------------------------

export interface Program {
  id: string;
  stage: StageId;
  /** '' = established, 'new' = newly created, 'refreshed' = repositioned/refreshed. */
  status: '' | 'new' | 'refreshed';
  name: string;
  type: string;
  when: string;
  reach: string;
  summary: string;
  /** Longer detail shown when the card is expanded. */
  detail: string;
  flagship?: boolean;
}

export const programs: Program[] = [
  // --- Explore ---
  {
    id: 'gng4120',
    stage: 'explore',
    status: '',
    name: 'GNG 4120 — Engineering Design',
    type: 'Curricular',
    when: 'Fall & winter (small summer section)',
    reach: '~250 students / year',
    summary: 'The Faculty’s core classroom touchpoint, where engineering ideas begin.',
    detail:
      'The Faculty’s central design course and its highest-volume entry point to entrepreneurship. A new entrepreneurial stream gives teams whose projects show commercial trajectory an off-ramp into the Validate stage, instead of a course endpoint.',
  },
  {
    id: 'capstone',
    stage: 'explore',
    status: '',
    name: 'Engineering Capstone Projects',
    type: 'Curricular',
    when: 'Academic year (Sep–Apr)',
    reach: '5–6 existing streams',
    summary: 'Year-long projects across the engineering concentrations.',
    detail:
      'Capstone teams build real engineering solutions across five to six streams. From 2027, an optional entrepreneurial stream lets commercially promising teams continue past the course rather than shelve the work.',
  },
  {
    id: 'cases',
    stage: 'explore',
    status: '',
    name: 'Engineering Case Competitions',
    type: 'Co-curricular · Telfer partnership',
    when: 'Fall (internal) · Winter (EngComm)',
    reach: '12–16 students / year',
    summary: 'Engineering students compete out of faculty, alongside other disciplines.',
    detail:
      'In partnership with the Telfer School of Management, students build team-formation skills and cross-faculty exposure by competing outside engineering — a natural starting point for co-founder matching.',
  },
  {
    id: 'uohack',
    stage: 'explore',
    status: '',
    name: 'uOttawaHack',
    type: 'Co-curricular · Partnership',
    when: 'Annual',
    reach: 'Major team-formation event',
    summary: 'A major hackathon — and a key place to spot ideas with commercial trajectory.',
    detail:
      'A high-volume hackathon for meeting collaborators and turning a weekend build into the seed of a venture. One of the program’s key identification points for teams worth carrying forward.',
  },
  {
    id: 'pitch',
    stage: 'explore',
    status: '',
    name: 'Engineering Pitch Competition',
    type: 'Co-curricular',
    when: 'Annual',
    reach: '~16 teams / year',
    summary: 'A structured opportunity to articulate an idea publicly.',
    detail:
      'Sharpens problem framing and storytelling — useful preparation for customer discovery and for the Validation Program.',
  },
  {
    id: 'speaker',
    stage: 'explore',
    status: '',
    name: 'Professional Development Speaker Series',
    type: 'Co-curricular',
    when: 'Recurring through the year',
    reach: '~80 attendees / year',
    summary: 'Exposure to founder stories and industry, at the top of the funnel.',
    detail:
      'A low-commitment way to encounter what entrepreneurship looks like in practice, and to meet people building real ventures.',
  },
  {
    id: 'designday',
    stage: 'explore',
    status: '',
    name: 'Design Day',
    type: 'Co-curricular · Showcase',
    when: 'End of term',
    reach: '1,000+ students',
    summary: 'Hundreds of projects on display — a huge identification point for ventures.',
    detail:
      'More than a thousand students present hundreds of projects. A large showcase used to spot projects with commercial potential and invite the most promising teams into the pipeline.',
  },

  // --- Validate ---
  {
    id: 'validation-program',
    stage: 'validate',
    status: 'new',
    flagship: true,
    name: 'The Validation Program',
    type: 'New cohort · Non-competitive entry',
    when: 'Fall–winter cohort · 12–16 weeks',
    reach: 'First cohort: 8 teams',
    summary: 'The centrepiece of the revamp — the missing middle between classroom and accelerator.',
    detail:
      'A fall-to-winter cohort anchored in customer discovery and problem definition. Entry is non-competitive by design — the goal is to lower the cost of exploring, not to pick winners. Teams receive modest non-dilutive funding of $500–$2,500, released as they hit milestones, and arrive at MakerLaunch already qualified.',
  },
  {
    id: 'simon-nehme',
    stage: 'validate',
    status: 'refreshed',
    name: 'Simon Nehme Summer Entrepreneurship School',
    type: 'Co-curricular',
    when: 'Summer (May–Aug)',
    reach: '5–6 teams / year',
    summary: 'Repositioned as the summer entry point to Validate.',
    detail:
      'Teams spend the summer developing their ideas through customer discovery and problem definition, with milestones aligned to the Validation Program — so a strong team can move straight into the fall cohort.',
  },
  {
    id: 'gng-stream',
    stage: 'validate',
    status: 'new',
    name: 'GNG 4120 Entrepreneurial Stream',
    type: 'Curricular off-ramp',
    when: 'Co-designed summer 2026',
    reach: 'Pilots in the academic year',
    summary: 'A venture-continuation off-ramp built into the core design course.',
    detail:
      'Co-designed with the course professor so academic credibility is preserved, giving teams an explicit path from coursework into the Validate stage instead of a course endpoint.',
  },
  {
    id: 'capstone-stream',
    stage: 'validate',
    status: 'new',
    name: 'Capstone Entrepreneurial Stream',
    type: 'Curricular off-ramp',
    when: 'From September 2027',
    reach: 'Across capstone streams',
    summary: 'The same off-ramp, extended to capstone teams.',
    detail:
      'An optional track across the capstone streams for teams with entrepreneurial intent, with structured off-ramps into the Validation Program so promising projects continue.',
  },
  {
    id: 'ehub',
    stage: 'validate',
    status: 'new',
    name: 'uOttawa Entrepreneurship Hub Advisory',
    type: 'Inbound advisory relationship',
    when: 'Ongoing',
    reach: 'No-cost feeder',
    summary: 'Captures engineering-affiliated founders from the eHub into the Faculty pipeline.',
    detail:
      'CEED advises engineering-affiliated founders completing uOttawa Entrepreneurship Hub programming — a no-cost, high-leverage feeder that keeps engineering talent in the Faculty pipeline rather than losing it to the broader ecosystem.',
  },

  // --- Build ---
  {
    id: 'makerlaunch',
    stage: 'build',
    status: 'refreshed',
    flagship: true,
    name: 'MakerLaunch Accelerator',
    type: 'Accelerator · Competitive',
    when: 'One cohort / year (Sep–Apr)',
    reach: 'The Build-stage flagship',
    summary: 'The Faculty’s flagship accelerator, refreshed with explicit entry criteria.',
    detail:
      'Admission now requires evidence of customer discovery or a working prototype — so every team arrives ready to build. The program offers cohort sessions, one-to-one coaching, curated mentor introductions, non-dilutive funding, and in-kind legal, accounting, and IP services. Credit is available through existing mechanisms (directed studies, independent project, or co-op designation).',
  },
  {
    id: 'demoday',
    stage: 'build',
    status: '',
    name: 'Demo Day',
    type: 'Showcase',
    when: 'End of cohort (spring)',
    reach: 'Public showcase',
    summary: 'The public showcase that concludes the MakerLaunch cohort.',
    detail:
      'Ventures present their progress to mentors, alumni, ecosystem partners, and potential capital — the bridge from Build into Scale.',
  },

  // --- Scale ---
  {
    id: 'handoffs',
    stage: 'scale',
    status: '',
    name: 'Ecosystem Handoffs',
    type: 'Structured introductions',
    when: 'Year-round',
    reach: 'Regional & national partners',
    summary: 'Structured warm handoffs to partners with the resources to support growth.',
    detail:
      'The Faculty does not replicate services the ecosystem already provides — it connects ventures to them. Warm handoffs go to Invest Ottawa, the Capital Angel Network, L-SPARK, BDC Climate Tech, NRC IRAP, and other sector-specific accelerators and supports.',
  },
  {
    id: 'alumni-peo',
    stage: 'scale',
    status: '',
    name: 'Alumni & PEO Engagement',
    type: 'Community',
    when: 'Year-round',
    reach: 'The Faculty’s comparative advantage',
    summary: 'Alumni return as mentors and reviewers; PEO members support regulated-industry ventures.',
    detail:
      'Today’s founders come back as tomorrow’s mentors, reviewers, and case contributors. Professional Engineers of Ontario bring technical credibility and regulated-industry experience that general business mentors cannot — keeping the relationship with the Faculty alive well past graduation.',
  },
];

// ---------------------------------------------------------------------------
// Ecosystem partners (Scale stage)
// ---------------------------------------------------------------------------

export interface Partner {
  name: string;
  category: string;
}

export const partners: Partner[] = [
  { name: 'Invest Ottawa', category: 'Regional ecosystem' },
  { name: 'Capital Angel Network', category: 'Angel capital' },
  { name: 'L-SPARK', category: 'SaaS accelerator' },
  { name: 'BDC Climate Tech', category: 'Capital · Cleantech' },
  { name: 'NRC IRAP', category: 'Non-dilutive funding' },
];

// ---------------------------------------------------------------------------
// Founder journey — interactive stage finder
// ---------------------------------------------------------------------------

export interface FinderOption {
  label: string;
  stage: StageId;
}

export interface FinderQuestion {
  id: string;
  prompt: string;
  options: FinderOption[];
}

export const finderQuestions: FinderQuestion[] = [
  {
    id: 'idea',
    prompt: 'Where are you with your idea?',
    options: [
      { label: 'I’m curious, but I don’t have an idea yet', stage: 'explore' },
      { label: 'I have an idea I’d like to test', stage: 'validate' },
      { label: 'I’ve validated a real problem with users', stage: 'build' },
      { label: 'I’m already incorporated with traction', stage: 'scale' },
    ],
  },
  {
    id: 'team',
    prompt: 'Do you have a team?',
    options: [
      { label: 'Just me, for now', stage: 'explore' },
      { label: 'Two or more committed teammates', stage: 'validate' },
      { label: 'A team with a founder ready to commit', stage: 'build' },
    ],
  },
  {
    id: 'evidence',
    prompt: 'What evidence do you have so far?',
    options: [
      { label: 'None yet — I want to learn the basics', stage: 'explore' },
      { label: 'A few conversations or sketches', stage: 'validate' },
      { label: 'Customer discovery OR a working prototype', stage: 'build' },
      { label: 'Revenue, pilots, or committed funding', stage: 'scale' },
    ],
  },
];

export const founder = {
  eyebrow: 'For potential founders',
  title: 'A connected path from first idea to scaling venture.',
  intro:
    'Whatever stage you’re at, there’s a next step inside the Faculty — no more dead ends at the end of a course. Answer three quick questions and we’ll point you to where to begin.',
  finderTitle: 'Find your starting point',
  finderSubtitle: 'Three quick questions — no account needed.',
  finderResultTitle: 'We’d suggest starting at',
  finderRestart: 'Start over',
  finderRecommended: 'Programs at this stage',
  pipelineTitle: 'Explore the full pipeline',
  pipelineSubtitle:
    'Four stages, clear criteria, and a hand-off at every step. Select a stage to see what it offers and what it takes to move on.',
  readinessTitle: 'The one rule that matters most',
  readinessBody:
    'To enter MakerLaunch (the Build stage), you need just one of these — and the Validation Program is designed to help you get there.',
  readinessA: 'Evidence of customer discovery that validates a real market problem.',
  readinessOr: 'OR',
  readinessB: 'A working prototype that solves an articulated user problem.',
  stepsTitle: 'How to get involved',
  steps: [
    {
      title: 'Show up at Explore',
      body: 'Join GNG 4120, a pitch competition, uOttawaHack, Design Day, or the speaker series. No commitment required.',
    },
    {
      title: 'Validate your problem',
      body: 'Join the Validation Program (non-competitive) or the Simon Nehme Summer School and run customer discovery.',
    },
    {
      title: 'Build with MakerLaunch',
      body: 'Once you meet the entry criteria, apply to MakerLaunch for funding, coaching, mentors, and in-kind services.',
    },
    {
      title: 'Scale with the ecosystem',
      body: 'Graduate into warm handoffs with regional and national partners — and come back as an alumni mentor.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Advisor / Alumni journey
// ---------------------------------------------------------------------------

export interface InvolvementWay {
  icon: string;
  title: string;
  body: string;
}

export const advisor = {
  eyebrow: 'For advisors, alumni & PEO members',
  title: 'The flywheel that makes the program self-reinforcing.',
  intro:
    'The strongest entrepreneurship programs treat alumni and mentor engagement as a designed system — not an afterthought. At the Scale stage, your experience is the Faculty’s comparative advantage: not capital or services, but a community of engineers who have built ventures.',
  flywheelTitle: 'How the flywheel turns',
  flywheelSteps: [
    {
      title: 'You give back',
      body: 'Mentor a team, review at Demo Day, or contribute a case study from your own venture.',
    },
    {
      title: 'Founders get stronger',
      body: 'Each cohort gains real-world judgement that staff time alone cannot provide.',
    },
    {
      title: 'Ventures succeed',
      body: 'More qualified applicants, more incorporations, and a richer network of stories.',
    },
    {
      title: 'New alumni return',
      body: 'Today’s founders become tomorrow’s mentors — and the cycle compounds.',
    },
  ],
  waysTitle: 'Ways to get involved',
  ways: [
    {
      icon: 'compass',
      title: 'Mentor a team',
      body: 'Hold office hours for Validation Program teams, or take a curated match with a MakerLaunch venture in your sector.',
    },
    {
      icon: 'trophy',
      title: 'Review at Demo Day',
      body: 'Help mark progress and connect ventures to Scale-stage partners and capital at the cohort showcase.',
    },
    {
      icon: 'book',
      title: 'Contribute a case study',
      body: 'Turn your venture’s journey into teaching material that strengthens every future cohort.',
    },
    {
      icon: 'shield',
      title: 'Support as a P.Eng.',
      body: 'PEO-licensed engineers bring technical credibility and regulated-industry experience general business mentors can’t.',
    },
  ] as InvolvementWay[],
  peoTitle: 'The PEO advantage',
  peoBody:
    'Professional Engineers of Ontario are the program’s primary differentiated mentor channel. PEO-licensed alumni are positioned specifically to support ventures in regulated industries — connecting the alumni loop to deep technical credibility that only an engineering faculty can offer.',
  goalsTitle: 'The impact you help create',
  goalsSubtitle: 'Where the pipeline is designed to be by 2029.',
  goals: [
    { value: '8+', label: 'qualified MakerLaunch applicants per cycle (from 1 today)' },
    { value: '8–10', label: 'student-led ventures incorporated per year (from 3–5)' },
    { value: '20+', label: 'alumni returning annually as mentors and contributors' },
    { value: '16+', label: 'teams in the Validation Program cohort' },
  ] as Stat[],
  recognitionTitle: 'What you get back',
  recognition: [
    {
      title: 'Genuine recognition',
      body: 'Demo-day acknowledgement, an annual mentor appreciation touchpoint, and visible association with venture successes.',
    },
    {
      title: 'A continued connection',
      body: 'Stay part of a community of founders, engineers, and builders well past graduation.',
    },
    {
      title: 'A clear, bounded ask',
      body: 'Mentors get an explicit statement of expectations and time commitment — your contribution is respected and never open-ended.',
    },
  ],
  ctaTitle: 'Ready to give back?',
  ctaBody:
    'Mentor recruitment opens ahead of the inaugural Validation Program cohort. Register your interest and we’ll match you to where you can have the most impact.',
  ctaButton: 'Register your interest',
};

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const footer = {
  blurb:
    'A preview of the proposed Engineering Entrepreneurship programming. Figures and dates reflect the programming plan for September 2026 onward and are subject to change.',
  rights: '© 2026 Centre for Entrepreneurship and Engineering Design · University of Ottawa',
  contact: 'Contact CEED',
};
