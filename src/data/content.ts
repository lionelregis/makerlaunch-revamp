// Engineering Entrepreneurship Programming — content model
// ---------------------------------------------------------------------------
// Front-facing copy for the Engineering Entrepreneurship programs at the
// University of Ottawa Faculty of Engineering (Centre for Entrepreneurship and
// Engineering Design / CEED).
//
// Sources (front-facing material only — internal/administrative content such as
// budgets, resourcing, milestone schedules and decision gates is deliberately
// excluded):
//   • "Engineering Entrepreneurship Programming Revamp — Executive Summary"
//   • "Product Studio — A Year-Round Product Development Training Program"
//
// The copy is written for the people who would actually visit the site —
// prospective founders and advisors/alumni — and avoids internal jargon.
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
  eyebrow: 'A connected path from idea to venture · starting September 2026',
  title: 'Engineering ideas, carried all the way to a venture.',
  subtitle:
    'A connected path — Explore, Validate, Build, Scale — that helps engineering and computer science students turn an idea into a real, incorporated venture. Anchored by the MakerLaunch accelerator and built so no promising idea stalls at the end of a course.',
  roleQuestion: 'First, who are you?',
  roleHint: 'We’ll show you what matters for your path.',
  intentTitle: 'The idea, in one breath',
  intentBody:
    'Engineering and computer science students generate ideas in design courses, hackathons, pitch competitions, and capstone projects — but until now, nothing carried those ideas forward. So we built the missing step: Product Studio, a year-round program that teaches you how to find a real problem, build a product, and prove it works — then hands you to MakerLaunch ready to accelerate.',
  principlesTitle: 'What guides every step',
  pipelineTitle: 'One path, four stages',
  pipelineSubtitle:
    'CEED supports you through the first three stages, then introduces you to the wider ecosystem to scale. Select a stage to see what it offers.',
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
      'An engineering or computer science student with an idea — or just the curiosity to start. See which programs fit where you are today and what your next step is.',
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
    title: 'Built as one connected path',
    body:
      'Each step leads to the next, so a good idea never hits a dead end at the end of a course. You always know what comes next.',
  },
  {
    icon: 'check',
    title: 'You move forward on proof',
    body:
      'You progress by showing real evidence — conversations with customers, a working prototype — not just enthusiasm. The bar is clear and the same for everyone.',
  },
  {
    icon: 'beaker',
    title: 'Made to lower the risk of trying',
    body:
      'Joining the Studio Cohort is open to everyone, with small grants and no equity taken. The point is to make it safe and cheap to test an idea.',
  },
  {
    icon: 'users',
    title: 'Powered by people who’ve done it',
    body:
      'Alumni founders and Professional Engineers of Ontario come back to mentor the next generation — the Faculty’s greatest strength.',
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const heroStats: Stat[] = [
  { value: '4', label: 'stages from first idea to launched venture' },
  { value: '6', label: 'phases of building a product, taught end to end' },
  { value: '3', label: 'ways in: drop-in workshops, sprints, or the full cohort' },
  { value: '$500–$2.5k', label: 'micro-funding per team — no equity taken' },
];

// ---------------------------------------------------------------------------
// The four stages
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
    tagline: 'Generate ideas, meet teammates, and learn the craft.',
    purpose:
      'Get a feel for entrepreneurship, come up with ideas, and find teammates — through workshops, hackathons, competitions, and speakers. No commitment to continue; the goal is simply to start.',
    entry: 'You’re a student in the Faculty of Engineering or computer science. Everyone is welcome.',
    advance: 'You decide to carry an idea forward, past the end of a course or event.',
    owner: 'Faculty & CEED',
  },
  {
    id: 'validate',
    order: 2,
    accent: 'emerald',
    icon: 'beaker',
    name: 'Validate',
    tagline: 'Turn an idea into a proven problem with a committed team.',
    purpose:
      'Turn an idea into a proven problem with a committed team, through customer conversations and early prototypes. This is the stage that makes an idea worth accelerating — the bridge between the classroom and the accelerator, and the heart of Product Studio.',
    entry: 'A committed team and a problem worth testing. Joining the Studio Cohort is open — there’s no competition to get in.',
    advance: 'Proof from customer conversations, or a working prototype that solves a real user problem.',
    owner: 'CEED · Product Studio',
  },
  {
    id: 'build',
    order: 3,
    accent: 'garnet',
    icon: 'rocket',
    name: 'Build',
    tagline: 'Accelerate a proven venture toward launch and first customers.',
    purpose:
      'Accelerate a proven venture toward incorporation, funding, and first customers. MakerLaunch — the Faculty’s flagship accelerator — runs at this stage, with clear entry criteria so every team arrives ready to build.',
    entry: 'Proof from customer conversations OR a working prototype, plus a founder ready to commit.',
    advance: 'An incorporated venture with traction, pilots, or committed funding — ready to raise outside money.',
    owner: 'CEED · MakerLaunch',
  },
  {
    id: 'scale',
    order: 4,
    accent: 'indigo',
    icon: 'globe',
    name: 'Scale',
    tagline: 'Personal introductions to the wider ecosystem — staying connected.',
    purpose:
      'Personal introductions to the partners with the resources to help you grow. The Faculty stays connected through its community of alumni founders and Professional Engineers of Ontario — the help it’s best placed to give at this stage.',
    entry: 'A venture that has graduated from the Build stage.',
    advance: 'Active relationships with ecosystem partners — and a way back to mentor the next generation.',
    owner: 'Ecosystem partners · alumni & mentor community',
  },
];

// ---------------------------------------------------------------------------
// Programs & opportunities (the front-facing catalogue)
// ---------------------------------------------------------------------------

export interface Program {
  id: string;
  stage: StageId;
  /** '' = established, 'new' = newly created, 'refreshed' = refreshed/repositioned. */
  status: '' | 'new' | 'refreshed';
  name: string;
  /** Short descriptor of what kind of thing this is. */
  kind: string;
  when: string;
  /** Who it's for. */
  forWhom: string;
  /** One-line summary. */
  summary: string;
  /** What it offers / what you do — shown as bullets. */
  offers: string[];
  /** What you walk away with. */
  takeaway: string;
  flagship?: boolean;
}

export const programs: Program[] = [
  // --- Explore ---
  {
    id: 'foundations',
    stage: 'explore',
    status: 'new',
    flagship: true,
    name: 'Product Studio — Foundations Series',
    kind: 'Open workshop series · part of Product Studio',
    when: 'Fall & winter · drop-in',
    forWhom: 'Any engineering or computer science student — no idea or experience needed',
    summary: 'Open, drop-in workshops that teach the craft of building a product, one piece at a time.',
    offers: [
      'No application and no obligation — come to one workshop or all of them',
      'Each session covers one part of building a product, from finding a real problem to launching',
      'Hands-on: every workshop ends with something concrete you take away and act on',
      'Often led by alumni founders and working industry practitioners',
    ],
    takeaway: 'The core skills to take an idea seriously — and a clear sense of whether you want to go further.',
  },
  {
    id: 'sprints',
    stage: 'explore',
    status: 'new',
    name: 'Product Studio — Build Sprints',
    kind: 'Short intensives · part of Product Studio',
    when: 'Weekends & reading weeks',
    forWhom: 'Students who want to make fast, real progress on an idea',
    summary: 'Short, intensive bursts that turn casual interest into real progress.',
    offers: [
      'One phase of building a product, compressed into a weekend or reading-week intensive',
      'Formats like a Discovery Sprint, a Prototyping Sprint, an MVP Build Weekend, or a Launch Sprint',
      'A real deadline and a finished artifact to show for it',
      'A great way to test-drive the work before committing to the full cohort',
    ],
    takeaway: 'Momentum, a concrete result, and proof to yourself that you can do this.',
  },
  {
    id: 'gng4120',
    stage: 'explore',
    status: '',
    name: 'GNG 4120 — Engineering Design',
    kind: 'Course',
    when: 'Fall & winter',
    forWhom: 'Students in the Faculty’s core engineering design course',
    summary: 'The Faculty’s core design course, where many engineering ideas first take shape.',
    offers: [
      'Build a real engineering solution as part of your studies',
      'Teams whose projects show commercial promise are invited to keep going after the course ends',
      'A natural on-ramp into Product Studio and the rest of the path',
    ],
    takeaway: 'A finished design project — and, if you want it, a way to carry it forward instead of shelving it.',
  },
  {
    id: 'capstone',
    stage: 'explore',
    status: '',
    name: 'Engineering Capstone Projects',
    kind: 'Course',
    when: 'Academic year (Sep–Apr)',
    forWhom: 'Final-year students across the engineering concentrations',
    summary: 'Year-long projects that solve real engineering problems.',
    offers: [
      'Tackle a substantial engineering project across five to six concentrations',
      'From 2027, an optional entrepreneurial track lets commercially promising teams continue past the course',
      'A structured way to turn a strong capstone into the start of a venture',
    ],
    takeaway: 'A demonstrated, real-world project — and an option to keep building if there’s something there.',
  },
  {
    id: 'cases',
    stage: 'explore',
    status: '',
    name: 'Engineering Case Competitions',
    kind: 'Competition · with Telfer',
    when: 'Fall & winter',
    forWhom: 'Students who want to compete and meet teammates outside engineering',
    summary: 'Compete alongside students from other disciplines, in partnership with the Telfer School of Management.',
    offers: [
      'Sharpen how you think on your feet and work under pressure',
      'Meet business-minded students — a natural place to find a co-founder',
      'Get comfortable presenting and defending your ideas',
    ],
    takeaway: 'New teammates, sharper instincts, and experience competing beyond your own faculty.',
  },
  {
    id: 'uohack',
    stage: 'explore',
    status: '',
    name: 'uOttawaHack',
    kind: 'Hackathon · partnership',
    when: 'Annual',
    forWhom: 'Anyone who wants to build something in a weekend and meet collaborators',
    summary: 'A major hackathon for meeting people and turning a weekend build into the seed of a venture.',
    offers: [
      'Build a working idea from scratch in a single weekend',
      'Meet potential teammates and co-founders fast',
      'One of the best places to spot an idea worth carrying forward',
    ],
    takeaway: 'A weekend prototype, new collaborators, and maybe the seed of something bigger.',
  },
  {
    id: 'pitch',
    stage: 'explore',
    status: '',
    name: 'Engineering Pitch Competition',
    kind: 'Competition',
    when: 'Annual',
    forWhom: 'Students with an idea they want to put into words',
    summary: 'A friendly stage to put an idea into words and get it in front of people.',
    offers: [
      'Practice framing your idea clearly and telling its story',
      'Get feedback from judges and peers',
      'Good preparation for talking to customers and for the Studio Cohort',
    ],
    takeaway: 'A tighter story for your idea — and the confidence to tell it.',
  },
  {
    id: 'speaker',
    stage: 'explore',
    status: '',
    name: 'Professional Development Speaker Series',
    kind: 'Talks',
    when: 'Throughout the year',
    forWhom: 'Anyone curious about what building a company is really like',
    summary: 'Founder stories and industry talks — a low-key way to see what this is all about.',
    offers: [
      'Hear honest stories from founders and people working in industry',
      'No commitment — just show up and listen',
      'Meet people who are building real things',
    ],
    takeaway: 'A clearer, more realistic picture of entrepreneurship — and a bit of inspiration.',
  },
  {
    id: 'designday',
    stage: 'explore',
    status: '',
    name: 'Design Day',
    kind: 'Showcase',
    when: 'End of term',
    forWhom: 'Students presenting projects, and anyone who wants to see what’s being built',
    summary: 'Hundreds of student projects on display — a showcase of what the Faculty is building.',
    offers: [
      'Present your project to peers, faculty, and visitors',
      'See what hundreds of other teams are working on',
      'A place where promising projects get noticed and invited to keep going',
    ],
    takeaway: 'Visibility for your work — and, for the strongest projects, an invitation into the path.',
  },

  // --- Validate ---
  {
    id: 'studio-cohort',
    stage: 'validate',
    status: 'new',
    flagship: true,
    name: 'Product Studio — Studio Cohort',
    kind: 'Term-long cohort · the Validation Program',
    when: 'Fall–winter · milestone by milestone',
    forWhom: 'Committed students and teams ready to work on an idea outside class',
    summary: 'The full Product Studio experience — a term-long cohort that takes your idea to the point where MakerLaunch will take you.',
    offers: [
      'Work through all six phases of building a product against clear milestones',
      'Direct mentorship from the program lead, plus alumni and industry mentors',
      'Micro-funding of $500–$2,500 per team, with no equity taken',
      'Open to join — the goal is to make it safe and cheap to test an idea, not to pick winners',
      'Ends right at the MakerLaunch entry bar, with documented proof of your progress',
    ],
    takeaway: 'A proven problem or a working prototype — and a direct, evidence-backed introduction to MakerLaunch.',
  },
  {
    id: 'simon-nehme',
    stage: 'validate',
    status: 'refreshed',
    name: 'Simon Nehme Summer Entrepreneurship School',
    kind: 'Summer program',
    when: 'Summer (May–Aug)',
    forWhom: 'Teams who want to use the summer to push an idea forward',
    summary: 'The summer way into the Validate stage, aligned with Product Studio.',
    offers: [
      'Spend the summer on customer conversations and early prototypes',
      'Milestones that line up with the Studio Cohort, so you can flow straight into the fall',
      'A head start toward being MakerLaunch-ready',
    ],
    takeaway: 'A summer of real progress — and a strong position heading into the fall cohort.',
  },
  {
    id: 'gng-stream',
    stage: 'validate',
    status: 'new',
    name: 'GNG 4120 Entrepreneurial Stream',
    kind: 'Course continuation',
    when: 'Pilots in the academic year',
    forWhom: 'GNG 4120 teams whose projects show commercial promise',
    summary: 'A way to continue a promising design-course project instead of shelving it.',
    offers: [
      'Designed with the course professor, so it counts and keeps its academic credibility',
      'A clear path from coursework into the Validate stage',
      'Keeps your momentum going past the end of the term',
    ],
    takeaway: 'A bridge from a great course project into a real venture path.',
  },
  {
    id: 'capstone-stream',
    stage: 'validate',
    status: 'new',
    name: 'Capstone Entrepreneurial Stream',
    kind: 'Course continuation',
    when: 'From September 2027',
    forWhom: 'Capstone teams with entrepreneurial intent',
    summary: 'The same continuation option, extended to capstone teams.',
    offers: [
      'An optional track across the capstone streams for teams who want to keep going',
      'Structured support to move from capstone into the Studio Cohort',
      'A way to turn a final-year project into something lasting',
    ],
    takeaway: 'A route from capstone to venture, without losing a year of momentum.',
  },
  {
    id: 'ehub',
    stage: 'validate',
    status: 'new',
    name: 'uOttawa Entrepreneurship Hub',
    kind: 'Campus-wide programming · coordinated',
    when: 'Year-round',
    forWhom: 'Engineering founders who want broader, campus-wide programming too',
    summary: 'The campus-wide hub, coordinated with Product Studio rather than competing with it.',
    offers: [
      'Access to entrepreneurship programming open to all faculties',
      'Coordinated with Product Studio so the two complement each other',
      'CEED stays your advisor as an engineering founder along the way',
    ],
    takeaway: 'The best of both: engineering-focused support, plus the wider campus community.',
  },

  // --- Build ---
  {
    id: 'makerlaunch',
    stage: 'build',
    status: 'refreshed',
    flagship: true,
    name: 'MakerLaunch Accelerator',
    kind: 'Accelerator',
    when: 'One cohort a year (Sep–Apr)',
    forWhom: 'Validated teams ready to commit and build for real',
    summary: 'The Faculty’s flagship accelerator — now with a clear bar to get in, so every team arrives ready.',
    offers: [
      'Join by showing proof from customer conversations or a working prototype',
      'Cohort sessions and one-to-one coaching',
      'Personal introductions to mentors matched to your sector',
      'Funding with no equity taken, plus in-kind legal, accounting, and design help',
      'Course credit available through existing options (directed study, independent project, or co-op)',
    ],
    takeaway: 'An incorporated, accelerating venture — with the support to reach your first customers.',
  },
  {
    id: 'demoday',
    stage: 'build',
    status: '',
    name: 'Demo Day',
    kind: 'Showcase',
    when: 'End of the cohort (spring)',
    forWhom: 'MakerLaunch teams, and the mentors, alumni, and partners who support them',
    summary: 'The public showcase that caps off the MakerLaunch cohort.',
    offers: [
      'Present your venture to mentors, alumni, and ecosystem partners',
      'Get in front of people who can open doors and write cheques',
      'The bridge from building into scaling',
    ],
    takeaway: 'Exposure to the people who can help you take the next step.',
  },

  // --- Scale ---
  {
    id: 'introductions',
    stage: 'scale',
    status: '',
    name: 'Ecosystem Introductions',
    kind: 'Personal introductions',
    when: 'Year-round',
    forWhom: 'Graduating ventures ready to grow beyond the Faculty',
    summary: 'Personal introductions to the partners with the resources to help you grow.',
    offers: [
      'Introductions to partners like Invest Ottawa, the Capital Angel Network, L-SPARK, BDC Climate Tech, and NRC IRAP',
      'The Faculty connects you to the ecosystem rather than duplicating it',
      'A relationship that continues through the alumni community',
    ],
    takeaway: 'A running start with the partners who can fund and support real growth.',
  },
  {
    id: 'alumni-community',
    stage: 'scale',
    status: '',
    name: 'Alumni & Mentor Community',
    kind: 'Community',
    when: 'Year-round',
    forWhom: 'Founders past and present, and the engineers who support them',
    summary: 'Alumni come back as mentors and reviewers; Professional Engineers support ventures in regulated fields.',
    offers: [
      'Stay connected to a community of founders, engineers, and builders',
      'Professional Engineers of Ontario lend technical credibility in regulated industries',
      'Today’s founders become tomorrow’s mentors',
    ],
    takeaway: 'A lasting community that keeps supporting you — and that you can give back to.',
  },
];

// ---------------------------------------------------------------------------
// Product Studio — the dedicated programme deep-dive
// ---------------------------------------------------------------------------

export interface StudioFormat {
  icon: string;
  name: string;
  commitment: string;
  body: string;
}

export interface StudioPhase {
  n: number;
  icon: string;
  name: string;
  can: string;
  produces: string;
}

export const productStudio = {
  eyebrow: 'The skills program at the heart of it all',
  name: 'Product Studio',
  tagline: 'Learn to take an idea from a real problem to a launched product.',
  intro:
    'Product Studio is a year-round program that teaches engineering and computer science students how to build products people actually want — and gets you ready for the MakerLaunch accelerator. Start with a single drop-in workshop and go as far as a full venture, at your own pace.',
  forWhom:
    'Open to all engineering and computer science students, undergraduate and graduate. No business background needed — it’s built for people who can build things, but haven’t yet learned what to build, or how to bring it to people.',
  formatsTitle: 'Three ways to take part',
  formatsSubtitle: 'Enter at whichever one fits, and move between them as you go.',
  formats: [
    {
      icon: 'spark',
      name: 'Foundations Series',
      commitment: 'Low commitment · drop-in',
      body: 'Open workshops across the year, each covering one part of building a product. No application, no obligation — come to one or come to all.',
    },
    {
      icon: 'rocket',
      name: 'Build Sprints',
      commitment: 'Medium · short & intensive',
      body: 'Short, hands-on bursts — a weekend or reading-week intensive — that turn casual interest into real progress. Think Discovery Sprint, MVP Build Weekend, or Launch Sprint.',
    },
    {
      icon: 'trophy',
      name: 'Studio Cohort',
      commitment: 'High · term-long · open to join',
      body: 'The full experience: a committed team takes one idea through every phase against clear milestones, ending ready for MakerLaunch. This is the Validation Program — and your direct route into the accelerator.',
    },
  ] as StudioFormat[],
  phasesTitle: 'What you’ll learn — the six phases of building a product',
  phasesSubtitle: 'The same journey runs through every format. Master one phase at a time, or all six end to end.',
  phases: [
    {
      n: 1,
      icon: 'compass',
      name: 'Discover',
      can: 'Find and confirm a real problem worth solving, through conversations with customers and users.',
      produces: 'Findings from 20+ conversations and a proven problem statement.',
    },
    {
      n: 2,
      icon: 'flow',
      name: 'Define',
      can: 'Turn what you learned into a clear value proposition and the smallest version worth building.',
      produces: 'A value proposition and a defined first version to build.',
    },
    {
      n: 3,
      icon: 'spark',
      name: 'Design',
      can: 'Shape a solution you can put in front of users — from paper sketches to digital prototypes.',
      produces: 'A testable design or prototype.',
    },
    {
      n: 4,
      icon: 'rocket',
      name: 'Build',
      can: 'Make a working version, with a software track and a hardware track running side by side.',
      produces: 'A working product (software) or functional prototype (hardware).',
    },
    {
      n: 5,
      icon: 'beaker',
      name: 'Validate',
      can: 'Test with real users and decide whether to continue, change course, or stop.',
      produces: 'Usability or pilot results, and a clear continue-or-change decision.',
    },
    {
      n: 6,
      icon: 'globe',
      name: 'Launch',
      can: 'Get your product to its first users and gather early signs of traction.',
      produces: 'A launch plan and first traction — often the point you’re ready for MakerLaunch.',
    },
  ] as StudioPhase[],
  gateNote:
    'Two of these phases — Discover and Build — are exactly what MakerLaunch looks for. Reach either one with real evidence, and you’ve met the bar to join the accelerator.',
};

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
  { name: 'NRC IRAP', category: 'Grants & funding' },
];

// ---------------------------------------------------------------------------
// Founder journey — interactive starting-point finder
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
      { label: 'I’ve proven a real problem with users', stage: 'build' },
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
    prompt: 'What do you have to show so far?',
    options: [
      { label: 'Nothing yet — I want to learn the basics', stage: 'explore' },
      { label: 'A few conversations or sketches', stage: 'validate' },
      { label: '20+ customer conversations OR a working prototype', stage: 'build' },
      { label: 'Revenue, pilots, or committed funding', stage: 'scale' },
    ],
  },
];

export const founder = {
  eyebrow: 'For potential founders',
  title: 'A connected path from first idea to growing venture.',
  intro:
    'Wherever you’re starting from, there’s a next step inside the Faculty — no more dead ends at the end of a course. Answer three quick questions and we’ll point you to where to begin.',
  finderTitle: 'Find your starting point',
  finderSubtitle: 'Three quick questions — no account needed.',
  finderResultTitle: 'We’d suggest starting at',
  finderRestart: 'Start over',
  finderRecommended: 'Programs at this stage',
  pipelineTitle: 'See the whole path, stage by stage',
  pipelineSubtitle:
    'Four stages, clear steps, and an introduction to what’s next at every point. Select a stage to see what it offers and what it takes to move on.',
  readinessTitle: 'The one rule that matters most',
  readinessBody:
    'To get into MakerLaunch (the Build stage), you need just one of these — and Product Studio is built to get you there.',
  readinessA: 'Proof from customer conversations that a real problem exists.',
  readinessOr: 'OR',
  readinessB: 'A working prototype that solves a real user problem.',
  stepsTitle: 'How to get started',
  steps: [
    {
      title: 'Start with Product Studio',
      body: 'Drop in to a Foundations workshop or a Build Sprint — or join a pitch competition, uOttawaHack, or Design Day. No commitment required.',
    },
    {
      title: 'Join the Studio Cohort',
      body: 'When you’re ready to commit, the term-long Studio Cohort takes your idea through every phase to a proven problem or a working prototype.',
    },
    {
      title: 'Get into MakerLaunch',
      body: 'Once you’ve met the bar, MakerLaunch gives you funding, coaching, mentors, and in-kind legal, accounting, and design help.',
    },
    {
      title: 'Grow with the ecosystem',
      body: 'Graduate into personal introductions with regional and national partners — then come back as a mentor yourself.',
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
  title: 'When you give back, it comes full circle.',
  intro:
    'The strongest entrepreneurship programs are powered by their alumni and mentors. At the final stage, your experience is what the Faculty can offer that no one else can: not capital or services, but a community of engineers who have built ventures themselves.',
  flywheelTitle: 'How giving back comes full circle',
  flywheelSteps: [
    {
      title: 'You give back',
      body: 'Mentor a team, review at Demo Day, or share a story from your own venture.',
    },
    {
      title: 'Founders get stronger',
      body: 'Each cohort gains real-world judgement that staff time alone can’t provide.',
    },
    {
      title: 'Ventures succeed',
      body: 'More qualified applicants, more companies launched, and a richer network of stories.',
    },
    {
      title: 'New alumni return',
      body: 'Today’s founders become tomorrow’s mentors — and it keeps coming around.',
    },
  ],
  waysTitle: 'Ways to get involved',
  ways: [
    {
      icon: 'compass',
      title: 'Mentor a team',
      body: 'Hold office hours for Studio Cohort teams, or take a curated match with a MakerLaunch venture in your sector.',
    },
    {
      icon: 'trophy',
      title: 'Review at Demo Day',
      body: 'Help mark progress and connect ventures to partners and capital at the cohort showcase.',
    },
    {
      icon: 'book',
      title: 'Share your story',
      body: 'Turn your venture’s journey into teaching material that strengthens every future cohort.',
    },
    {
      icon: 'shield',
      title: 'Support as a P.Eng.',
      body: 'PEO-licensed engineers bring technical credibility and regulated-industry experience that general business mentors can’t.',
    },
    {
      icon: 'spark',
      title: 'Lead a workshop or sprint',
      body: 'Run a Foundations workshop or a Build Sprint — a low-lift, high-impact way to teach the craft you know best.',
    },
    {
      icon: 'funding',
      title: 'Open doors',
      body: 'Make introductions, share leads, and help connect graduating ventures to the wider ecosystem.',
    },
  ] as InvolvementWay[],
  peoTitle: 'The P.Eng. advantage',
  peoBody:
    'Professional Engineers of Ontario are the mentors who set this program apart. PEO-licensed alumni are uniquely placed to support ventures in regulated industries — pairing the alumni community with deep technical credibility that only an engineering faculty can offer.',
  goalsTitle: 'The impact you help create',
  goalsSubtitle: 'Where we’re aiming to be by 2029.',
  goals: [
    { value: '8+', label: 'qualified MakerLaunch applicants per cycle (from 1 today)' },
    { value: '8–10', label: 'student-led ventures launched per year (from 3–5)' },
    { value: '20+', label: 'alumni returning each year as mentors and contributors' },
    { value: '16+', label: 'teams in the Studio Cohort each year' },
  ] as Stat[],
  recognitionTitle: 'What you get back',
  recognition: [
    {
      title: 'Genuine recognition',
      body: 'Demo-day acknowledgement, an annual mentor appreciation event, and a visible link to the ventures you help.',
    },
    {
      title: 'A continued connection',
      body: 'Stay part of a community of founders, engineers, and builders well past graduation.',
    },
    {
      title: 'A clear, bounded ask',
      body: 'Mentors get an explicit statement of what’s expected and how much time it takes — your contribution is respected and never open-ended.',
    },
  ],
  mentorsTitle: 'Meet some of the mentors',
  mentorsSubtitle: 'Alumni founders and Professional Engineers who come back to build the next generation.',
  mentorsNote: 'Mentor profiles shown here are illustrative examples.',
  ctaTitle: 'Ready to give back?',
  ctaBody:
    'Mentor recruitment opens ahead of the first Studio Cohort. Register your interest and we’ll match you to where you can have the most impact.',
  ctaButton: 'Register your interest',
};

// ---------------------------------------------------------------------------
// Mentors & advisors (illustrative profiles)
// ---------------------------------------------------------------------------

export interface Mentor {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  quote: string;
}

export const mentors: Mentor[] = [
  {
    name: 'Priya Nair, P.Eng.',
    role: 'Co-founder & CTO, Northwind Robotics · MakerLaunch ’20',
    bio: 'A mechanical engineering grad who built Northwind’s first warehouse robot in the CEED makerspace. She now leads a 30-person hardware team and has raised two rounds of venture funding.',
    expertise: ['Hardware prototyping', 'Manufacturing & supply chain', 'Fundraising'],
    quote: 'The makerspace is where I learned that a rough prototype beats a perfect pitch. I mentor so the next team can skip the mistakes that cost me a year.',
  },
  {
    name: 'Marc-André Bélanger',
    role: 'Founder & CEO, Rivière Health',
    bio: 'A software engineering alumnus building tools for community clinics across Eastern Ontario. He runs customer-discovery sessions in both French and English.',
    expertise: ['Customer discovery', 'Product strategy', 'Digital health'],
    quote: 'Someone took the time to listen when I had nothing but an idea. I give back so every founder — in either official language — feels at home here.',
  },
  {
    name: 'Dr. Aïsha Mohamed',
    role: 'Co-founder, Helios Materials · spun out of uOttawa research',
    bio: 'A chemical engineering PhD who turned her lab’s battery-coating research into a company. She guides graduate students through the messy early days of commercializing research and navigating IP.',
    expertise: ['Deep tech & cleantech', 'Research commercialization', 'Intellectual property'],
    quote: 'Turning a paper into a product is its own skill, and nobody teaches it. I mentor research founders so that brilliant science doesn’t die in a drawer.',
  },
  {
    name: 'Daniel Okafor',
    role: 'Product lead & angel investor · early Shopify engineer',
    bio: 'A computer science alumnus who spent a decade shipping products at fast-growing Ottawa software companies before turning to angel investing. He coaches teams on going from a prototype to real users.',
    expertise: ['Software MVPs', 'Go-to-market', 'Early-stage metrics'],
    quote: 'Engineers can build almost anything — knowing what to build is the hard part. I give back because this Faculty gave me my first real shot.',
  },
  {
    name: 'Catherine Tremblay, P.Eng.',
    role: 'VP Engineering, regulated medical devices · PEO mentor',
    bio: 'A biomedical engineering grad and licensed Professional Engineer who has brought Class II and III medical devices to market. She helps founders in regulated fields build credibly and safely.',
    expertise: ['Medical devices', 'Quality & regulatory', 'Engineering leadership'],
    quote: 'In regulated industries, credibility is everything — and that’s exactly what a P.Eng. can lend a young team. Demo day reminds me why I became an engineer.',
  },
  {
    name: 'Liam Chen',
    role: 'Two-time founder · Demo Day judge',
    bio: 'An electrical engineering alumnus who founded and sold an IoT startup, then started again in climate hardware. He’s blunt about what works and what doesn’t, and teams love him for it.',
    expertise: ['Hardware startups', 'Fundraising', 'Storytelling & pitching'],
    quote: 'My first company failed because I never talked to customers. I judge demo day to make sure these teams hear that lesson before it costs them.',
  },
];

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const footer = {
  blurb:
    'Engineering Entrepreneurship at the University of Ottawa — programs that take engineering and computer science students from a first idea to a launched venture. Dates and details may change as programs roll out.',
  rights: '© 2026 Centre for Entrepreneurship and Engineering Design · University of Ottawa',
  contact: 'Contact CEED',
};
