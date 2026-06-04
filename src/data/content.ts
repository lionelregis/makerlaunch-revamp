// Engineering Entrepreneurship Programming — content model
// Source: "Engineering Entrepreneurship Programming Revamp — Strategic Plan and
// Operating Playbook", Faculty of Engineering, University of Ottawa (CEED).
// All user-facing copy is bilingual (English / French) to honour the program's
// "bilingual by design, not by translation" guiding principle.

export type Lang = 'en' | 'fr';

/** A string available in both official languages. */
export type Localized = Record<Lang, string>;

/** Resolve a localized string for the active language. */
export function t(value: Localized, lang: Lang): string {
  return value[lang];
}

export type StageId = 'explore' | 'validate' | 'build' | 'scale';

export interface Stage {
  id: StageId;
  /** 1-based order in the pipeline. */
  order: number;
  name: Localized;
  tagline: Localized;
  purpose: Localized;
  entry: Localized;
  exit: Localized;
  /** Tailwind-friendly accent token used across the UI. */
  accent: 'amber' | 'emerald' | 'garnet' | 'indigo';
  icon: string;
}

export interface Program {
  id: string;
  name: Localized;
  stage: StageId;
  type: Localized;
  /** Lifecycle badge: 'new', 'refreshed', 'repositioned', or '' (established). */
  status: '' | 'new' | 'refreshed' | 'repositioned';
  reach: Localized;
  summary: Localized;
  details: Localized[];
  flagship?: boolean;
}

export interface Track {
  id: string;
  name: Localized;
  audience: Localized;
  summary: Localized;
  entersAt: Localized;
  icon: string;
}

export interface Principle {
  title: Localized;
  body: Localized;
  icon: string;
}

export interface Stat {
  value: Localized;
  label: Localized;
}

// ---------------------------------------------------------------------------
// Brand & chrome
// ---------------------------------------------------------------------------

export const brand = {
  short: { en: 'CEED', fr: 'CEED' } as Localized,
  programName: {
    en: 'Engineering Entrepreneurship',
    fr: 'Entrepreneuriat en génie',
  } as Localized,
  faculty: {
    en: 'Faculty of Engineering · University of Ottawa',
    fr: 'Faculté de génie · Université d’Ottawa',
  } as Localized,
  centre: {
    en: 'Centre for Entrepreneurship and Engineering Design',
    fr: 'Centre d’entrepreneuriat et de conception en génie',
  } as Localized,
};

export const ui = {
  navHome: { en: 'Home', fr: 'Accueil' } as Localized,
  navFounders: { en: 'For Founders', fr: 'Pour les fondateurs' } as Localized,
  navAdvisors: { en: 'For Advisors & Alumni', fr: 'Conseillers et diplômés' } as Localized,
  navPipeline: { en: 'The Pipeline', fr: 'Le parcours' } as Localized,
  backHome: { en: 'Back to start', fr: 'Retour à l’accueil' } as Localized,
  changeRole: { en: 'Change role', fr: 'Changer de rôle' } as Localized,
  learnMore: { en: 'Learn more', fr: 'En savoir plus' } as Localized,
  getStarted: { en: 'Get started', fr: 'Commencer' } as Localized,
  langToggle: { en: 'FR', fr: 'EN' } as Localized,
  langLabel: { en: 'Français', fr: 'English' } as Localized,
  entry: { en: 'Entry', fr: 'Entrée' } as Localized,
  exit: { en: 'Exit / Handoff', fr: 'Sortie / Transfert' } as Localized,
  annualReach: { en: 'Annual reach', fr: 'Portée annuelle' } as Localized,
  flagship: { en: 'Flagship', fr: 'Programme phare' } as Localized,
  statusNew: { en: 'New', fr: 'Nouveau' } as Localized,
  statusRefreshed: { en: 'Refreshed', fr: 'Renouvelé' } as Localized,
  statusRepositioned: { en: 'Repositioned', fr: 'Repositionné' } as Localized,
};

// ---------------------------------------------------------------------------
// Strategic foundation
// ---------------------------------------------------------------------------

export const vision: Localized = {
  en: 'To be Canada’s most productive engineering faculty for per-capita incorporation of student-led ventures — delivered bilingually by design, and sustained by an active cycle of alumni founders and Professional Engineers of Ontario returning to build the next generation.',
  fr: 'Devenir la faculté de génie la plus productive au Canada pour le taux d’incorporation par habitant d’entreprises dirigées par des étudiants — offerte en deux langues par conception et soutenue par un cycle actif de diplômés fondateurs et d’ingénieurs de l’Ordre des ingénieurs de l’Ontario qui reviennent bâtir la prochaine génération.',
};

export const mission: Localized = {
  en: 'CEED develops engineering students into venture founders through a connected pipeline of curricular, co-curricular, and accelerator programming — offered in English and French, anchored by MakerLaunch, and sustained by an engaged alumni and PEO network.',
  fr: 'Le CEED transforme les étudiants en génie en fondateurs d’entreprise grâce à un parcours connecté de programmes intégrés au cursus, parascolaires et d’accélération — offerts en français et en anglais, ancrés par MakerLaunch et soutenus par un réseau mobilisé de diplômés et de l’Ordre des ingénieurs de l’Ontario.',
};

export const principles: Principle[] = [
  {
    icon: 'flow',
    title: { en: 'Pipeline over program', fr: 'Le parcours avant le programme' },
    body: {
      en: 'Every touchpoint earns its place by what it feeds. A program that does not feed the next stage does not belong in the pathway.',
      fr: 'Chaque point de contact mérite sa place par ce qu’il alimente. Un programme qui ne nourrit pas l’étape suivante n’a pas sa place dans le parcours.',
    },
  },
  {
    icon: 'rocket',
    title: { en: 'Founder-first', fr: 'Le fondateur d’abord' },
    body: {
      en: 'Decisions are made in the interest of the venture’s trajectory, not administrative convenience.',
      fr: 'Les décisions sont prises dans l’intérêt de la trajectoire de l’entreprise, et non par commodité administrative.',
    },
  },
  {
    icon: 'language',
    title: { en: 'Bilingual by design', fr: 'Bilingue par conception' },
    body: {
      en: 'Francophone founders are served natively at every stage. Materials, mentorship, and delivery are bilingual from day one — not retrofitted after launch.',
      fr: 'Les fondateurs francophones sont servis dans leur langue à chaque étape. Le matériel, le mentorat et la prestation sont bilingues dès le premier jour — et non ajoutés après le lancement.',
    },
  },
  {
    icon: 'check',
    title: { en: 'Evidence-based progression', fr: 'Progression fondée sur des preuves' },
    body: {
      en: 'Ventures advance through stages on evidence of validation, not enthusiasm. Selection criteria, milestones, and exit conditions are explicit and consistently applied.',
      fr: 'Les entreprises franchissent les étapes sur preuve de validation, et non par enthousiasme. Les critères de sélection, les jalons et les conditions de sortie sont explicites et appliqués de façon constante.',
    },
  },
];

export const heroStats: Stat[] = [
  {
    value: { en: '4', fr: '4' },
    label: { en: 'connected pipeline stages', fr: 'étapes connectées du parcours' },
  },
  {
    value: { en: '16', fr: '16' },
    label: { en: 'MakerLaunch alumni companies since 2019', fr: 'entreprises diplômées de MakerLaunch depuis 2019' },
  },
  {
    value: { en: '~250', fr: '~250' },
    label: { en: 'students reached each year through GNG 4120', fr: 'étudiants rejoints chaque année par GNG 4120' },
  },
  {
    value: { en: '2', fr: '2' },
    label: { en: 'official languages, by design', fr: 'langues officielles, par conception' },
  },
];

// ---------------------------------------------------------------------------
// The four-stage pipeline
// ---------------------------------------------------------------------------

export const stages: Stage[] = [
  {
    id: 'explore',
    order: 1,
    accent: 'amber',
    icon: 'compass',
    name: { en: 'Explore', fr: 'Explorer' },
    tagline: {
      en: 'Discover entrepreneurial thinking. Generate ideas. Form teams.',
      fr: 'Découvrir la pensée entrepreneuriale. Générer des idées. Former des équipes.',
    },
    purpose: {
      en: 'Expose engineering students to entrepreneurial thinking, generate ideas, and form teams — with no commitment to continuation.',
      fr: 'Initier les étudiants en génie à la pensée entrepreneuriale, générer des idées et former des équipes — sans engagement à poursuivre.',
    },
    entry: { en: 'Faculty of Engineering enrolment.', fr: 'Inscription à la Faculté de génie.' },
    exit: {
      en: 'You choose to carry an idea forward past the course or event endpoint.',
      fr: 'Vous choisissez de faire avancer une idée au-delà de la fin du cours ou de l’activité.',
    },
  },
  {
    id: 'validate',
    order: 2,
    accent: 'emerald',
    icon: 'beaker',
    name: { en: 'Validate', fr: 'Valider' },
    tagline: {
      en: 'Turn ideas into validated problems with committed teams.',
      fr: 'Transformer les idées en problèmes validés avec des équipes engagées.',
    },
    purpose: {
      en: 'Convert ideas into validated problems with committed teams through customer discovery, problem definition, and early prototypes. This is the missing middle the revamp builds.',
      fr: 'Convertir les idées en problèmes validés avec des équipes engagées par la découverte client, la définition du problème et les premiers prototypes. C’est le maillon manquant que la refonte vient bâtir.',
    },
    entry: {
      en: 'A team of at least two committed members, a problem statement, and willingness to work outside class requirements.',
      fr: 'Une équipe d’au moins deux membres engagés, un énoncé de problème et la volonté de travailler en dehors des exigences du cours.',
    },
    exit: {
      en: 'Evidence of customer discovery (20+ conversations) OR a working prototype that solves an articulated user problem.',
      fr: 'Preuve de découverte client (20+ conversations) OU un prototype fonctionnel qui résout un problème d’utilisateur clairement formulé.',
    },
  },
  {
    id: 'build',
    order: 3,
    accent: 'garnet',
    icon: 'rocket',
    name: { en: 'Build', fr: 'Bâtir' },
    tagline: {
      en: 'Accelerate validated ventures toward incorporation and market entry.',
      fr: 'Accélérer les entreprises validées vers l’incorporation et l’entrée sur le marché.',
    },
    purpose: {
      en: 'Accelerate validated ventures toward incorporation, capital, and market entry. MakerLaunch operates at this stage.',
      fr: 'Accélérer les entreprises validées vers l’incorporation, le capital et l’entrée sur le marché. MakerLaunch œuvre à cette étape.',
    },
    entry: {
      en: 'Validate exit criteria met, plus a full-time or near-full-time commitment from at least one founder for the program duration.',
      fr: 'Critères de sortie de l’étape Valider remplis, ainsi qu’un engagement à temps plein ou quasi plein d’au moins un fondateur pour la durée du programme.',
    },
    exit: {
      en: 'Incorporated entity; defensible traction, pilot customers, or committed non-dilutive funding; ready to engage external capital.',
      fr: 'Entité incorporée; traction défendable, clients pilotes ou financement non dilutif confirmé; prêt à mobiliser du capital externe.',
    },
  },
  {
    id: 'scale',
    order: 4,
    accent: 'indigo',
    icon: 'globe',
    name: { en: 'Scale', fr: 'Croître' },
    tagline: {
      en: 'A warm handoff to the ecosystem — with the Faculty staying connected.',
      fr: 'Un transfert accompagné vers l’écosystème — la Faculté reste connectée.',
    },
    purpose: {
      en: 'A warm handoff to ecosystem actors with the resources to support scale. The Faculty retains the relationship through alumni engagement and PEO integration — not direct funding.',
      fr: 'Un transfert accompagné vers les acteurs de l’écosystème ayant les ressources pour soutenir la croissance. La Faculté maintient la relation par la mobilisation des diplômés et l’intégration de l’Ordre des ingénieurs — non par du financement direct.',
    },
    entry: { en: 'Build exit criteria met.', fr: 'Critères de sortie de l’étape Bâtir remplis.' },
    exit: {
      en: 'Active engagement with at least one external partner (Invest Ottawa, Bayview Yards, L-SPARK, BDC Climate Tech, NRC IRAP, or equivalent).',
      fr: 'Engagement actif avec au moins un partenaire externe (Investir Ottawa, Bayview Yards, L-SPARK, BDC Tech climatiques, PARI CNRC ou équivalent).',
    },
  },
];

// ---------------------------------------------------------------------------
// Programs & touchpoints
// ---------------------------------------------------------------------------

export const programs: Program[] = [
  // --- Explore ---
  {
    id: 'gng4120',
    stage: 'explore',
    status: '',
    name: { en: 'GNG 4120 — Engineering Design', fr: 'GNG 4120 — Conception en génie' },
    type: { en: 'Curricular', fr: 'Intégré au cursus' },
    reach: { en: '~250 students / year', fr: '~250 étudiants / an' },
    summary: {
      en: 'The Faculty’s core classroom touchpoint, where engineering ideas begin.',
      fr: 'Le point de contact en classe central de la Faculté, où naissent les idées en génie.',
    },
    details: [
      {
        en: 'A new entrepreneurial stream — co-designed with the course professor over summer 2026 — gives teams whose projects show commercial trajectory a venture-continuation off-ramp into the Validation Program instead of a course endpoint.',
        fr: 'Un nouveau volet entrepreneurial — coconçu avec le professeur du cours à l’été 2026 — offre aux équipes dont les projets ont une trajectoire commerciale une voie de continuation vers le Programme de validation plutôt qu’une fin de cours.',
      },
    ],
  },
  {
    id: 'capstone',
    stage: 'explore',
    status: 'new',
    name: { en: 'Capstone Entrepreneurial Stream', fr: 'Volet entrepreneurial du projet de fin d’études' },
    type: { en: 'Curricular', fr: 'Intégré au cursus' },
    reach: { en: '5–6 capstone streams', fr: '5 à 6 filières de projets de fin d’études' },
    summary: {
      en: 'An optional track for capstone teams with entrepreneurial intent.',
      fr: 'Un volet optionnel pour les équipes de fin d’études ayant une intention entrepreneuriale.',
    },
    details: [
      {
        en: 'Introduced in 2026–2027 across the existing capstone streams. CEED provides classroom visits and advisory support during the capstone cycle, with structured off-ramps into the Validation Program so promising projects continue past the course.',
        fr: 'Introduit en 2026-2027 dans les filières existantes. Le CEED offre des visites en classe et du soutien-conseil pendant le cycle, avec des voies structurées vers le Programme de validation pour que les projets prometteurs se poursuivent au-delà du cours.',
      },
    ],
  },
  {
    id: 'uohack',
    stage: 'explore',
    status: '',
    name: { en: 'uOttawaHack', fr: 'uOttawaHack' },
    type: { en: 'Co-curricular', fr: 'Parascolaire' },
    reach: { en: 'Major team-formation event', fr: 'Grande activité de formation d’équipes' },
    summary: {
      en: 'A major hackathon for idea generation and team formation.',
      fr: 'Un grand hackathon pour la génération d’idées et la formation d’équipes.',
    },
    details: [
      {
        en: 'A high-volume entry point to meet collaborators and turn a weekend build into the seed of a venture.',
        fr: 'Un point d’entrée à fort volume pour rencontrer des collaborateurs et transformer un projet de fin de semaine en germe d’entreprise.',
      },
    ],
  },
  {
    id: 'pitch',
    stage: 'explore',
    status: '',
    name: { en: 'Engineering Pitch Competition', fr: 'Concours de présentation en génie' },
    type: { en: 'Co-curricular', fr: 'Parascolaire' },
    reach: { en: '~16 teams / year', fr: '~16 équipes / an' },
    summary: {
      en: 'A structured opportunity to articulate an idea publicly.',
      fr: 'Une occasion structurée de présenter publiquement une idée.',
    },
    details: [
      {
        en: 'Sharpens problem framing and storytelling — useful preparation for customer discovery and the Validation Program.',
        fr: 'Affûte la formulation du problème et la narration — une bonne préparation à la découverte client et au Programme de validation.',
      },
    ],
  },
  {
    id: 'cases',
    stage: 'explore',
    status: '',
    name: { en: 'Engineering Case Competitions (Telfer)', fr: 'Concours de cas en génie (Telfer)' },
    type: { en: 'Co-curricular · Cross-faculty', fr: 'Parascolaire · Interfacultaire' },
    reach: { en: '12–16 students / year', fr: '12 à 16 étudiants / an' },
    summary: {
      en: 'Cross-faculty team formation in partnership with the Telfer School of Management.',
      fr: 'Formation d’équipes interfacultaire en partenariat avec l’École de gestion Telfer.',
    },
    details: [
      {
        en: 'Connects engineering students with business peers — a starting point for co-founder matching.',
        fr: 'Met en relation les étudiants en génie et leurs pairs en gestion — un point de départ pour le jumelage de cofondateurs.',
      },
    ],
  },
  {
    id: 'speaker',
    stage: 'explore',
    status: '',
    name: { en: 'Professional Development Speaker Series', fr: 'Série de conférences en développement professionnel' },
    type: { en: 'Co-curricular', fr: 'Parascolaire' },
    reach: { en: '~80 attendees / year', fr: '~80 participants / an' },
    summary: {
      en: 'Exposure to founder stories and industry, top-of-funnel.',
      fr: 'Exposition aux parcours de fondateurs et à l’industrie, en amont du parcours.',
    },
    details: [
      {
        en: 'A low-commitment way to encounter what entrepreneurship looks like in practice.',
        fr: 'Une façon peu engageante de découvrir ce qu’est l’entrepreneuriat en pratique.',
      },
    ],
  },

  // --- Validate ---
  {
    id: 'validation-program',
    stage: 'validate',
    status: 'new',
    flagship: true,
    name: { en: 'The Validation Program', fr: 'Le Programme de validation' },
    type: { en: 'New cohort · Non-competitive entry', fr: 'Nouvelle cohorte · Entrée non concurrentielle' },
    reach: { en: 'Fall–Winter · 12–16 weeks · 8 teams (Year 1)', fr: 'Automne-hiver · 12 à 16 semaines · 8 équipes (an 1)' },
    summary: {
      en: 'The new centrepiece of the revamp — the missing middle stage between the classroom and the accelerator.',
      fr: 'La pièce maîtresse de la refonte — le maillon manquant entre la salle de classe et l’accélérateur.',
    },
    details: [
      {
        en: 'A fall–winter cohort running parallel to classroom programming, anchored in customer discovery and problem definition.',
        fr: 'Une cohorte automne-hiver qui se déroule en parallèle des cours, ancrée dans la découverte client et la définition du problème.',
      },
      {
        en: 'Non-competitive entry by design (modelled on MIT Sandbox): the purpose is to lower the cost of exploration, not to select winners.',
        fr: 'Entrée non concurrentielle par conception (inspirée de MIT Sandbox) : l’objectif est d’abaisser le coût de l’exploration, non de désigner des gagnants.',
      },
      {
        en: 'Modest non-dilutive validation funding of $500–$2,500 per team, released against milestones.',
        fr: 'Financement de validation modeste et non dilutif de 500 à 2 500 $ par équipe, versé en fonction des jalons.',
      },
      {
        en: 'Weekly or bi-weekly cohort sessions, light-touch mentor office hours, and mid- and end-of-program reviews against the Validate exit criteria.',
        fr: 'Séances de cohorte hebdomadaires ou aux deux semaines, heures de bureau de mentorat légères, et bilans de mi-parcours et de fin de programme par rapport aux critères de sortie.',
      },
    ],
  },
  {
    id: 'simon-nehme',
    stage: 'validate',
    status: 'repositioned',
    name: { en: 'Simon Nehme Summer Entrepreneurship School', fr: 'École d’été en entrepreneuriat Simon Nehme' },
    type: { en: 'Co-curricular · CEWIL iHUB funded', fr: 'Parascolaire · Financé par CEWIL iHUB' },
    reach: { en: '5–6 teams / year', fr: '5 à 6 équipes / an' },
    summary: {
      en: 'Repositioned as the summer validation vehicle with aligned milestones.',
      fr: 'Repositionnée comme véhicule de validation estival aux jalons harmonisés.',
    },
    details: [
      {
        en: 'A summer counterpart to the Validation Program, aligned to the same customer-discovery milestones so a strong team arrives at MakerLaunch already qualified.',
        fr: 'Le pendant estival du Programme de validation, harmonisé aux mêmes jalons de découverte client pour qu’une équipe solide arrive à MakerLaunch déjà qualifiée.',
      },
    ],
  },
  {
    id: 'gng-stream',
    stage: 'validate',
    status: 'new',
    name: { en: 'GNG 4120 Entrepreneurial Stream', fr: 'Volet entrepreneurial de GNG 4120' },
    type: { en: 'Curricular off-ramp', fr: 'Voie de continuation au cursus' },
    reach: { en: 'Co-designed summer 2026', fr: 'Coconçu à l’été 2026' },
    summary: {
      en: 'A venture-continuation option built into the Faculty’s core design course.',
      fr: 'Une option de continuation d’entreprise intégrée au cours de conception central de la Faculté.',
    },
    details: [
      {
        en: 'Co-designed with the course professor so academic credibility is preserved, giving teams an explicit off-ramp from coursework into validation.',
        fr: 'Coconçu avec le professeur du cours pour préserver la crédibilité académique, offrant aux équipes une voie explicite des travaux de cours vers la validation.',
      },
    ],
  },
  {
    id: 'ehub',
    stage: 'validate',
    status: 'new',
    name: { en: 'uOttawa Entrepreneurship Hub Advisory', fr: 'Relation-conseil avec le Carrefour entrepreneurial d’uOttawa' },
    type: { en: 'Inbound advisory relationship', fr: 'Relation-conseil entrante' },
    reach: { en: 'Year 1 deliverable', fr: 'Livrable de l’an 1' },
    summary: {
      en: 'Captures engineering-affiliated founders completing eHub programming into the Faculty pipeline.',
      fr: 'Intègre au parcours de la Faculté les fondateurs affiliés au génie qui terminent les programmes du Carrefour.',
    },
    details: [
      {
        en: 'CEED serves as advisor to engineering-affiliated founders completing Hub programming — a low-cost, high-leverage feeder that keeps engineering talent in the Faculty pipeline.',
        fr: 'Le CEED agit comme conseiller auprès des fondateurs affiliés au génie qui terminent les programmes du Carrefour — un canal d’alimentation peu coûteux et à fort levier qui garde le talent en génie dans le parcours de la Faculté.',
      },
    ],
  },

  // --- Build ---
  {
    id: 'makerlaunch',
    stage: 'build',
    status: 'refreshed',
    flagship: true,
    name: { en: 'MakerLaunch Accelerator', fr: 'Accélérateur MakerLaunch' },
    type: { en: 'Accelerator · Competitive · Sept–April', fr: 'Accélérateur · Concurrentiel · Sept. à avril' },
    reach: { en: '~3 ventures / cohort · 1 cohort / year', fr: '~3 entreprises / cohorte · 1 cohorte / an' },
    summary: {
      en: 'The Build-stage flagship, refreshed with explicit entry criteria — 16 alumni companies since 2019.',
      fr: 'Le programme phare de l’étape Bâtir, renouvelé avec des critères d’entrée explicites — 16 entreprises diplômées depuis 2019.',
    },
    details: [
      {
        en: 'Explicit entry criteria, adopted from Georgia Tech CREATE-X: customer discovery validating a market problem (20+ conversations) OR a working prototype.',
        fr: 'Critères d’entrée explicites, adoptés de CREATE-X (Georgia Tech) : découverte client validant un problème de marché (20+ conversations) OU un prototype fonctionnel.',
      },
      {
        en: 'Program components: cohort sessions, one-to-one coaching, curated mentor introductions, non-dilutive funding, in-kind services (legal, accounting, IP), and a demo day.',
        fr: 'Composantes : séances de cohorte, accompagnement individuel, présentations ciblées de mentors, financement non dilutif, services en nature (juridique, comptabilité, PI) et une journée de démonstration.',
      },
      {
        en: 'Blended positioning: credit is available through existing mechanisms — directed studies, independent project, or co-op designation — without requiring new course codification.',
        fr: 'Positionnement hybride : des crédits sont disponibles par les mécanismes existants — études dirigées, projet indépendant ou désignation coop — sans nouvelle codification de cours.',
      },
    ],
  },

  // --- Scale ---
  {
    id: 'scale-handoff',
    stage: 'scale',
    status: '',
    name: { en: 'Ecosystem Warm Handoff', fr: 'Transfert accompagné vers l’écosystème' },
    type: { en: 'Structured introductions', fr: 'Présentations structurées' },
    reach: { en: 'On graduation from Build', fr: 'À la sortie de l’étape Bâtir' },
    summary: {
      en: 'Structured introductions to the regional and national ecosystem, with the Faculty staying connected through alumni and PEO networks.',
      fr: 'Présentations structurées à l’écosystème régional et national, la Faculté restant connectée par les réseaux des diplômés et de l’Ordre des ingénieurs.',
    },
    details: [
      {
        en: 'Warm handoffs to Invest Ottawa, Bayview Yards, L-SPARK, BDC Climate Tech Fund, NRC IRAP, Foresight Canada (cleantech), and NextAI.',
        fr: 'Transferts accompagnés vers Investir Ottawa, Bayview Yards, L-SPARK, le Fonds de technologies climatiques de BDC, le PARI CNRC, Foresight Canada (technologies propres) et NextAI.',
      },
      {
        en: 'The Faculty does not replicate services the ecosystem provides; it connects ventures to them and retains the relationship through alumni channels.',
        fr: 'La Faculté ne reproduit pas les services qu’offre l’écosystème; elle y connecte les entreprises et maintient la relation par les canaux des diplômés.',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Tracks
// ---------------------------------------------------------------------------

export const tracks: Track[] = [
  {
    id: 'primary',
    icon: 'users',
    name: { en: 'Primary Track', fr: 'Volet principal' },
    audience: { en: 'Engineering undergraduate & graduate students', fr: 'Étudiants de premier cycle et des cycles supérieurs en génie' },
    summary: {
      en: 'The default path through all four stages, and the majority of participant volume. Most enter at Explore or Validate.',
      fr: 'Le chemin par défaut à travers les quatre étapes, et la majorité des participants. La plupart entrent à Explorer ou Valider.',
    },
    entersAt: { en: 'Explore or Validate', fr: 'Explorer ou Valider' },
  },
  {
    id: 'francophone',
    icon: 'language',
    name: { en: 'Francophone Track', fr: 'Volet francophone' },
    audience: { en: 'Francophone & bilingual founders', fr: 'Fondateurs francophones et bilingues' },
    summary: {
      en: 'Not a separate program, but a commitment that every stage runs natively in French — with Francophone-led mentorship and French-language recruitment. Bilingual by design, not by translation.',
      fr: 'Non pas un programme distinct, mais l’engagement que chaque étape se déroule nativement en français — avec un mentorat mené en français et un recrutement en français. Bilingue par conception, non par traduction.',
    },
    entersAt: { en: 'Any stage', fr: 'Toute étape' },
  },
  {
    id: 'research',
    icon: 'beaker',
    name: { en: 'Research-Founder Track', fr: 'Volet chercheur-fondateur' },
    audience: { en: 'Graduate students, postdocs & faculty', fr: 'Étudiants des cycles supérieurs, stagiaires postdoctoraux et professeurs' },
    summary: {
      en: 'For those commercializing research. Typically enters at Validate with intellectual-property questions undergraduate founders do not face, supported by faculty research offices and uOttawa technology transfer.',
      fr: 'Pour ceux qui commercialisent leur recherche. Entre généralement à Valider avec des questions de propriété intellectuelle que les fondateurs de premier cycle ne rencontrent pas, avec l’appui des bureaux de recherche et du transfert technologique d’uOttawa.',
    },
    entersAt: { en: 'Validate', fr: 'Valider' },
  },
];

// ---------------------------------------------------------------------------
// Scale-stage ecosystem partners
// ---------------------------------------------------------------------------

export interface Partner {
  name: string;
  category: Localized;
}

export const partners: Partner[] = [
  { name: 'Invest Ottawa', category: { en: 'Regional ecosystem', fr: 'Écosystème régional' } },
  { name: 'Bayview Yards', category: { en: 'Regional ecosystem', fr: 'Écosystème régional' } },
  { name: 'L-SPARK', category: { en: 'SaaS accelerator', fr: 'Accélérateur SaaS' } },
  { name: 'BDC Climate Tech Fund', category: { en: 'Capital · Cleantech', fr: 'Capital · Technologies propres' } },
  { name: 'NRC IRAP', category: { en: 'Non-dilutive funding', fr: 'Financement non dilutif' } },
  { name: 'Foresight Canada', category: { en: 'Cleantech accelerator', fr: 'Accélérateur en technologies propres' } },
  { name: 'NextAI', category: { en: 'AI accelerator', fr: 'Accélérateur en IA' } },
  { name: 'FedDev Ontario', category: { en: 'Government programming', fr: 'Programmes gouvernementaux' } },
];

// ---------------------------------------------------------------------------
// Founder journey — interactive stage finder
// ---------------------------------------------------------------------------

export interface FinderOption {
  label: Localized;
  /** StageId this answer points toward. */
  stage: StageId;
}

export interface FinderQuestion {
  id: string;
  prompt: Localized;
  options: FinderOption[];
}

export const finderQuestions: FinderQuestion[] = [
  {
    id: 'idea',
    prompt: {
      en: 'Where are you with your idea?',
      fr: 'Où en êtes-vous avec votre idée ?',
    },
    options: [
      {
        label: { en: 'I’m curious, but I don’t have an idea yet', fr: 'Je suis curieux, mais je n’ai pas encore d’idée' },
        stage: 'explore',
      },
      {
        label: { en: 'I have an idea I’d like to test', fr: 'J’ai une idée que j’aimerais tester' },
        stage: 'validate',
      },
      {
        label: { en: 'I’ve validated a real problem with users', fr: 'J’ai validé un vrai problème auprès d’utilisateurs' },
        stage: 'build',
      },
      {
        label: { en: 'I’m already incorporated with traction', fr: 'Je suis déjà incorporé avec de la traction' },
        stage: 'scale',
      },
    ],
  },
  {
    id: 'team',
    prompt: {
      en: 'Do you have a team?',
      fr: 'Avez-vous une équipe ?',
    },
    options: [
      {
        label: { en: 'Just me, for now', fr: 'Juste moi, pour l’instant' },
        stage: 'explore',
      },
      {
        label: { en: 'Two or more committed teammates', fr: 'Deux coéquipiers engagés ou plus' },
        stage: 'validate',
      },
      {
        label: { en: 'A team with a founder ready to go (near) full-time', fr: 'Une équipe avec un fondateur prêt à s’engager (presque) à temps plein' },
        stage: 'build',
      },
    ],
  },
  {
    id: 'evidence',
    prompt: {
      en: 'What evidence do you have so far?',
      fr: 'Quelles preuves avez-vous accumulées jusqu’ici ?',
    },
    options: [
      {
        label: { en: 'None yet — I want to learn the basics', fr: 'Aucune pour l’instant — je veux apprendre les bases' },
        stage: 'explore',
      },
      {
        label: { en: 'A few conversations or sketches', fr: 'Quelques conversations ou esquisses' },
        stage: 'validate',
      },
      {
        label: { en: '20+ customer conversations OR a working prototype', fr: '20+ conversations clients OU un prototype fonctionnel' },
        stage: 'build',
      },
      {
        label: { en: 'Revenue, pilots, or committed funding', fr: 'Des revenus, des pilotes ou du financement confirmé' },
        stage: 'scale',
      },
    ],
  },
];

export const finderResearchQuestion: FinderQuestion = {
  id: 'research',
  prompt: {
    en: 'Are you commercializing research or IP as a grad student, postdoc, or faculty member?',
    fr: 'Commercialisez-vous de la recherche ou de la PI à titre d’étudiant des cycles supérieurs, de stagiaire postdoctoral ou de professeur ?',
  },
  options: [
    { label: { en: 'Yes', fr: 'Oui' }, stage: 'validate' },
    { label: { en: 'No', fr: 'Non' }, stage: 'explore' },
  ],
};

// ---------------------------------------------------------------------------
// Founder copy
// ---------------------------------------------------------------------------

export const founder = {
  eyebrow: { en: 'For potential founders', fr: 'Pour les fondateurs potentiels' },
  title: {
    en: 'A connected path from first idea to scaling venture.',
    fr: 'Un parcours connecté, de la première idée à l’entreprise en croissance.',
  },
  intro: {
    en: 'Whatever stage you’re at, there’s a next step inside the Faculty — no more dead ends at the end of a course. Answer three quick questions and we’ll point you to where to begin.',
    fr: 'Peu importe l’étape où vous en êtes, il y a une prochaine étape au sein de la Faculté — fini les impasses à la fin d’un cours. Répondez à trois courtes questions et nous vous indiquerons par où commencer.',
  },
  finderTitle: { en: 'Find your starting point', fr: 'Trouvez votre point de départ' },
  finderSubtitle: {
    en: 'Three quick questions — no account needed.',
    fr: 'Trois questions rapides — aucun compte requis.',
  },
  finderResultTitle: { en: 'We recommend starting at', fr: 'Nous vous recommandons de commencer à' },
  finderRestart: { en: 'Start over', fr: 'Recommencer' },
  finderRecommended: { en: 'Recommended programs', fr: 'Programmes recommandés' },
  finderResearchNote: {
    en: 'You’re a great fit for the Research-Founder Track, with added support for IP and technology transfer.',
    fr: 'Vous correspondez bien au volet chercheur-fondateur, avec un soutien supplémentaire pour la PI et le transfert technologique.',
  },
  pipelineTitle: { en: 'Explore the full pipeline', fr: 'Explorez le parcours complet' },
  pipelineSubtitle: {
    en: 'Four stages, explicit criteria, and a clear handoff at every step. Select a stage to see what it offers.',
    fr: 'Quatre étapes, des critères explicites et un transfert clair à chaque étape. Choisissez une étape pour voir ce qu’elle offre.',
  },
  tracksTitle: { en: 'Three tracks, one architecture', fr: 'Trois volets, une seule architecture' },
  tracksSubtitle: {
    en: 'Differentiated pathways that run through the same four stages.',
    fr: 'Des parcours différenciés qui traversent les mêmes quatre étapes.',
  },
  readinessTitle: { en: 'The one rule that matters most', fr: 'La règle qui compte le plus' },
  readinessBody: {
    en: 'To enter MakerLaunch (the Build stage), you need just one of these — and the Validation Program is designed to help you get there.',
    fr: 'Pour entrer à MakerLaunch (l’étape Bâtir), il vous suffit de l’un de ces éléments — et le Programme de validation est conçu pour vous y mener.',
  },
  readinessA: {
    en: 'Customer discovery: 20+ conversations validating a real market problem.',
    fr: 'Découverte client : 20+ conversations validant un véritable problème de marché.',
  },
  readinessOr: { en: 'OR', fr: 'OU' },
  readinessB: {
    en: 'A working prototype that solves an articulated user problem.',
    fr: 'Un prototype fonctionnel qui résout un problème d’utilisateur clairement formulé.',
  },
  stepsTitle: { en: 'How to get involved', fr: 'Comment vous lancer' },
  steps: [
    {
      title: { en: 'Show up at Explore', fr: 'Présentez-vous à Explorer' },
      body: {
        en: 'Join GNG 4120, a pitch competition, uOttawaHack, or the speaker series. No commitment required.',
        fr: 'Joignez GNG 4120, un concours de présentation, uOttawaHack ou la série de conférences. Aucun engagement requis.',
      },
    },
    {
      title: { en: 'Validate your problem', fr: 'Validez votre problème' },
      body: {
        en: 'Apply to the Validation Program (non-competitive) or the Simon Nehme Summer School and run customer discovery.',
        fr: 'Postulez au Programme de validation (non concurrentiel) ou à l’École d’été Simon Nehme et menez votre découverte client.',
      },
    },
    {
      title: { en: 'Build with MakerLaunch', fr: 'Bâtissez avec MakerLaunch' },
      body: {
        en: 'Once you meet the readiness criteria, apply to MakerLaunch for funding, mentorship, and in-kind services.',
        fr: 'Une fois les critères de maturité atteints, postulez à MakerLaunch pour du financement, du mentorat et des services en nature.',
      },
    },
    {
      title: { en: 'Scale with the ecosystem', fr: 'Croissez avec l’écosystème' },
      body: {
        en: 'Graduate into warm handoffs with regional and national partners — and come back as an alumni mentor.',
        fr: 'Accédez à des transferts accompagnés avec des partenaires régionaux et nationaux — puis revenez comme mentor diplômé.',
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Advisor / Alumni copy
// ---------------------------------------------------------------------------

export interface InvolvementWay {
  icon: string;
  title: Localized;
  body: Localized;
}

export const advisor = {
  eyebrow: { en: 'For advisors, alumni & PEO members', fr: 'Pour les conseillers, diplômés et membres de l’Ordre' },
  title: {
    en: 'The flywheel that makes the program self-reinforcing.',
    fr: 'Le volant d’inertie qui rend le programme autoportant.',
  },
  intro: {
    en: 'The strongest entrepreneurship programs treat alumni and mentor engagement as a designed system — not an afterthought. Your experience is the Faculty’s comparative advantage at the Scale stage.',
    fr: 'Les meilleurs programmes d’entrepreneuriat traitent la mobilisation des diplômés et des mentors comme un système conçu — non comme une réflexion après coup. Votre expérience est l’avantage comparatif de la Faculté à l’étape Croître.',
  },
  flywheelTitle: { en: 'How the flywheel turns', fr: 'Comment tourne le volant d’inertie' },
  flywheelSteps: [
    {
      title: { en: 'You give back', fr: 'Vous redonnez' },
      body: {
        en: 'Mentor a team, judge demo day, or contribute a case study from your own venture.',
        fr: 'Mentorez une équipe, jugez la journée de démonstration ou partagez une étude de cas tirée de votre entreprise.',
      },
    },
    {
      title: { en: 'Founders get stronger', fr: 'Les fondateurs se renforcent' },
      body: {
        en: 'Each cohort benefits from real-world judgement that staff time alone cannot provide.',
        fr: 'Chaque cohorte profite d’un jugement concret que le temps du personnel seul ne peut offrir.',
      },
    },
    {
      title: { en: 'Ventures succeed', fr: 'Les entreprises réussissent' },
      body: {
        en: 'More qualified applicants, more incorporations, and a richer network of stories.',
        fr: 'Plus de candidats qualifiés, plus d’incorporations et un réseau d’histoires plus riche.',
      },
    },
    {
      title: { en: 'New alumni return', fr: 'De nouveaux diplômés reviennent' },
      body: {
        en: 'Today’s founders become tomorrow’s mentors — and the cycle compounds.',
        fr: 'Les fondateurs d’aujourd’hui deviennent les mentors de demain — et le cycle s’amplifie.',
      },
    },
  ],
  waysTitle: { en: 'Ways to get involved', fr: 'Façons de vous impliquer' },
  ways: [
    {
      icon: 'compass',
      title: { en: 'Mentor a team', fr: 'Mentorer une équipe' },
      body: {
        en: 'Open office hours for Validation Program teams, or take a curated match with a MakerLaunch venture in your sector.',
        fr: 'Tenez des heures de bureau pour les équipes du Programme de validation, ou acceptez un jumelage ciblé avec une entreprise de MakerLaunch dans votre secteur.',
      },
    },
    {
      icon: 'trophy',
      title: { en: 'Judge demo day', fr: 'Juger la journée de démonstration' },
      body: {
        en: 'Help mark progress and connect ventures to Scale-stage partners and capital at the bilingual cohort showcase.',
        fr: 'Aidez à souligner les progrès et à connecter les entreprises aux partenaires et au capital de l’étape Croître lors de la vitrine bilingue de la cohorte.',
      },
    },
    {
      icon: 'book',
      title: { en: 'Contribute a case study', fr: 'Partager une étude de cas' },
      body: {
        en: 'Turn your venture’s journey into teaching material that strengthens every future cohort.',
        fr: 'Transformez le parcours de votre entreprise en matériel pédagogique qui renforce chaque cohorte future.',
      },
    },
    {
      icon: 'shield',
      title: { en: 'Support as a P.Eng.', fr: 'Soutenir à titre d’ing.' },
      body: {
        en: 'PEO-licensed engineers bring technical credibility and regulated-industry experience to ventures that general business mentors cannot.',
        fr: 'Les ingénieurs titulaires d’un permis de l’Ordre apportent une crédibilité technique et une expérience des industries réglementées que les mentors d’affaires généralistes ne peuvent offrir.',
      },
    },
  ] as InvolvementWay[],
  peoTitle: { en: 'The PEO advantage', fr: 'L’avantage de l’Ordre des ingénieurs' },
  peoBody: {
    en: 'Professional Engineers of Ontario are the program’s primary differentiated mentor channel. PEO-licensed alumni are positioned specifically to support ventures in regulated industries — connecting the alumni loop to deep technical credibility that an engineering faculty is uniquely placed to offer.',
    fr: 'L’Ordre des ingénieurs de l’Ontario est le principal canal de mentorat distinctif du programme. Les diplômés titulaires d’un permis sont placés spécifiquement pour soutenir les entreprises des industries réglementées — reliant la boucle des diplômés à une crédibilité technique profonde qu’une faculté de génie est particulièrement à même d’offrir.',
  },
  recognitionTitle: { en: 'What you get back', fr: 'Ce que vous y gagnez' },
  recognition: [
    {
      title: { en: 'Genuine recognition', fr: 'Une reconnaissance authentique' },
      body: {
        en: 'Demo-day acknowledgement, an annual mentor appreciation touchpoint, and visible association with venture successes.',
        fr: 'Reconnaissance à la journée de démonstration, rendez-vous annuel d’appréciation des mentors et association visible aux succès des entreprises.',
      },
    },
    {
      title: { en: 'A continued connection', fr: 'Un lien durable' },
      body: {
        en: 'Stay part of a community of founders, engineers, and builders through an alumni directory and periodic touchpoints.',
        fr: 'Demeurez membre d’une communauté de fondateurs, d’ingénieurs et de bâtisseurs grâce à un répertoire de diplômés et à des rendez-vous périodiques.',
      },
    },
    {
      title: { en: 'A clear, bounded ask', fr: 'Une demande claire et délimitée' },
      body: {
        en: 'Mentors receive an explicit statement of expectations and time commitment — your contribution is respected and never open-ended.',
        fr: 'Les mentors reçoivent un énoncé explicite des attentes et du temps requis — votre contribution est respectée et jamais sans limite.',
      },
    },
  ],
  statsTitle: { en: 'The impact you help create', fr: 'L’impact que vous aidez à créer' },
  stats: [
    {
      value: { en: '20+', fr: '20+' },
      label: { en: 'alumni returning annually as mentors by 2029', fr: 'diplômés revenant chaque année comme mentors d’ici 2029' },
    },
    {
      value: { en: '8–10', fr: '8 à 10' },
      label: { en: 'student-led ventures incorporated per year (target)', fr: 'entreprises dirigées par des étudiants incorporées par an (cible)' },
    },
    {
      value: { en: '3×', fr: '3×' },
      label: { en: 'qualified MakerLaunch applications versus today', fr: 'candidatures qualifiées à MakerLaunch par rapport à aujourd’hui' },
    },
    {
      value: { en: '5+', fr: '5+' },
      label: { en: 'PEO-licensed engineers supporting regulated-industry ventures', fr: 'ingénieurs de l’Ordre soutenant des entreprises en industries réglementées' },
    },
  ] as Stat[],
  ctaTitle: { en: 'Ready to give back?', fr: 'Prêt à redonner ?' },
  ctaBody: {
    en: 'Mentor recruitment opens ahead of the inaugural Validation Program cohort. Register your interest and we’ll match you to where you can have the most impact.',
    fr: 'Le recrutement des mentors s’ouvre avant la cohorte inaugurale du Programme de validation. Manifestez votre intérêt et nous vous jumellerons là où vous aurez le plus d’impact.',
  },
  ctaButton: { en: 'Register your interest', fr: 'Manifester votre intérêt' },
};

// ---------------------------------------------------------------------------
// Role selection (landing)
// ---------------------------------------------------------------------------

export type Role = 'founder' | 'advisor';

export const roleCards: { role: Role; icon: string; title: Localized; body: Localized; cta: Localized }[] = [
  {
    role: 'founder',
    icon: 'rocket',
    title: { en: 'I’m a potential founder', fr: 'Je suis un fondateur potentiel' },
    body: {
      en: 'An engineering student or researcher with an idea — or just the curiosity to start. See which programs fit where you are today.',
      fr: 'Un étudiant en génie ou un chercheur avec une idée — ou simplement la curiosité de commencer. Découvrez les programmes adaptés à votre situation actuelle.',
    },
    cta: { en: 'Find my starting point', fr: 'Trouver mon point de départ' },
  },
  {
    role: 'advisor',
    icon: 'users',
    title: { en: 'I’m an advisor or alumni', fr: 'Je suis conseiller ou diplômé' },
    body: {
      en: 'An alumnus, mentor, or Professional Engineer of Ontario who wants to give back. See how you can power the next generation of founders.',
      fr: 'Un diplômé, un mentor ou un ingénieur de l’Ordre qui souhaite redonner. Découvrez comment propulser la prochaine génération de fondateurs.',
    },
    cta: { en: 'See how to get involved', fr: 'Voir comment m’impliquer' },
  },
];

export const landing = {
  eyebrow: { en: 'A revamp for September 2026', fr: 'Une refonte pour septembre 2026' },
  title: {
    en: 'Engineering ideas, carried all the way to impact.',
    fr: 'Des idées en génie, portées jusqu’à l’impact.',
  },
  subtitle: {
    en: 'A connected pipeline — Explore, Validate, Build, Scale — that develops engineering students into venture founders. Built bilingually, anchored by MakerLaunch, and sustained by alumni who come back.',
    fr: 'Un parcours connecté — Explorer, Valider, Bâtir, Croître — qui transforme les étudiants en génie en fondateurs d’entreprise. Conçu en deux langues, ancré par MakerLaunch et soutenu par des diplômés qui reviennent.',
  },
  roleQuestion: { en: 'First, tell us who you are', fr: 'D’abord, dites-nous qui vous êtes' },
  roleHint: {
    en: 'We’ll tailor what you see to what matters for you.',
    fr: 'Nous adapterons ce que vous voyez à ce qui compte pour vous.',
  },
  visionTitle: { en: 'Our vision', fr: 'Notre vision' },
  missionTitle: { en: 'Our mission', fr: 'Notre mission' },
  principlesTitle: { en: 'Four principles guide every decision', fr: 'Quatre principes guident chaque décision' },
  pipelinePeek: { en: 'The four-stage pipeline', fr: 'Le parcours en quatre étapes' },
};

export const footer = {
  blurb: {
    en: 'A demonstration of the proposed Engineering Entrepreneurship programming revamp. Figures and dates reflect the Strategic Plan and Operating Playbook (Summer 2026).',
    fr: 'Une démonstration de la refonte proposée des programmes d’entrepreneuriat en génie. Les chiffres et dates reflètent le Plan stratégique et le Guide opérationnel (été 2026).',
  },
  rights: {
    en: '© 2026 Centre for Entrepreneurship and Engineering Design · University of Ottawa',
    fr: '© 2026 Centre d’entrepreneuriat et de conception en génie · Université d’Ottawa',
  },
  contact: { en: 'Contact CEED', fr: 'Communiquer avec le CEED' },
};
