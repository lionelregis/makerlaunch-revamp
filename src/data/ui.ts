// UI strings that live in components (not in the content markdown). Selected by
// language in content.ts and exported as `ui`. Keep the two shapes identical.
import type { Lang } from '../lib/lang';

const en = {
  nav: {
    founders: 'Founders',
    advisors: 'Advisors & alumni',
    mentors: 'Mentors',
    launchpad: 'Launchpad',
    home: 'Home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchAria: 'Passer en français',
  },
  footer: {
    explore: 'Explore the program',
    founders: 'For founders',
    advisors: 'For advisors & alumni',
    mentors: 'Mentors',
    launchpad: 'Launchpad',
  },
  titles: {
    founder: 'For founders',
    advisor: 'For advisors & alumni',
    mentors: 'Mentors',
    launchpad: 'Launchpad',
    finder: 'Find your starting point',
  },
  explorer: {
    stagesAria: 'Pipeline stages',
    gettingIn: 'Getting in',
    movingOn: 'Moving on',
    chooseTrack: 'Choose a track:',
    show: 'Show:',
    psTitle: 'What you’ll learn in Product Studio',
    psSubtitle: 'The six phases, plus the frameworks and tools the curriculum teaches.',
    accTitle: 'Inside the Accelerator',
    accSubtitle: 'The cohort journey, and everything you get along the way.',
  },
  map: { twoTracks: 'two tracks', or: 'or' },
  program: {
    statusNew: 'New',
    statusRefreshed: 'Refreshed',
    flagship: 'Flagship',
    whoFor: 'Who it’s for: ',
    offers: 'What it offers',
    takeaway: 'You walk away with: ',
  },
  finder: {
    back: 'Back',
    seeCta: (name: string) => `See ${name} on your path`,
    reasons: {
      explore: 'Start here. Explore entrepreneurship, shape an idea, and find a team before joining MakerLaunch.',
      validate: 'Join MakerLaunch through Product Studio to build and ship your validated idea into a working product.',
      validateCapped:
        'You have strong proof, but the Accelerator needs a founder ready to commit. Join MakerLaunch through Product Studio to build it into a shipped product with a team first.',
      build: 'You have the proof and a founder ready to commit, so you can join MakerLaunch straight through the Accelerator.',
      scale: 'You have graduated MakerLaunch. The Founders Network connects you to the partners who can help you grow.',
    },
  },
  founder: { fullPath: 'Your full path', seconds: '· 30 seconds' },
  productStudio: {
    leadNote: 'It works for software, a service, or hardware, and assumes your discovery is already done.',
    phasesHeader: 'From a validated idea to a shipped product',
    toolsLabel: 'Tools you’ll use',
    formatLabel: 'The format: ',
  },
  advisor: {
    howItWorks: 'How it works',
    partnersLine: 'Where ventures go next: the partners we introduce them to',
  },
  back: {
    toAdvisors: 'Back to advisors & alumni',
    toHome: 'Back to home',
    toFounder: 'Back to the founder path',
  },
  mentors: { seeAll: (n: number) => `See all ${n} mentors & advisors` },
};

const fr: typeof en = {
  nav: {
    founders: 'Fondateurs',
    advisors: 'Conseillers et anciens',
    mentors: 'Mentors',
    launchpad: 'Launchpad',
    home: 'Accueil',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    switchAria: 'Switch to English',
  },
  footer: {
    explore: 'Explorer le programme',
    founders: 'Pour les fondateurs',
    advisors: 'Pour les conseillers et anciens',
    mentors: 'Mentors',
    launchpad: 'Launchpad',
  },
  titles: {
    founder: 'Pour les fondateurs',
    advisor: 'Pour les conseillers et anciens',
    mentors: 'Mentors',
    launchpad: 'Launchpad',
    finder: 'Trouvez votre point de départ',
  },
  explorer: {
    stagesAria: 'Étapes du parcours',
    gettingIn: 'Pour y accéder',
    movingOn: 'Pour avancer',
    chooseTrack: 'Choisissez un parcours :',
    show: 'Afficher :',
    psTitle: 'Ce que vous apprendrez à Product Studio',
    psSubtitle: 'Les six phases, ainsi que les méthodes et les outils enseignés dans le programme.',
    accTitle: 'À l’intérieur de l’Accelerator',
    accSubtitle: 'Le parcours de la cohorte, et tout ce que vous y gagnez en chemin.',
  },
  map: { twoTracks: 'deux parcours', or: 'ou' },
  program: {
    statusNew: 'Nouveau',
    statusRefreshed: 'Actualisé',
    flagship: 'Programme phare',
    whoFor: 'Pour qui : ',
    offers: 'Ce que ça offre',
    takeaway: 'Vous en repartez avec : ',
  },
  finder: {
    back: 'Retour',
    seeCta: (name: string) => `Voir « ${name} » dans votre parcours`,
    reasons: {
      explore: 'Commencez ici. Explorez l’entrepreneuriat, précisez une idée et formez une équipe avant de joindre MakerLaunch.',
      validate: 'Joignez MakerLaunch par Product Studio pour bâtir et livrer votre idée validée sous la forme d’un produit fonctionnel.',
      validateCapped:
        'Vous avez de bonnes preuves, mais l’Accelerator exige un fondateur prêt à s’engager. Joignez MakerLaunch par Product Studio pour en faire d’abord un produit livré, en équipe.',
      build: 'Vous avez les preuves et un fondateur prêt à s’engager : vous pouvez joindre MakerLaunch directement par l’Accelerator.',
      scale: 'Vous êtes diplômé de MakerLaunch. Le Founders Network vous met en lien avec les partenaires qui peuvent vous aider à grandir.',
    },
  },
  founder: { fullPath: 'Votre parcours complet', seconds: '· 30 secondes' },
  productStudio: {
    leadNote: 'Cela fonctionne pour un logiciel, un service ou un produit matériel, et suppose que votre découverte est déjà faite.',
    phasesHeader: 'D’une idée validée à un produit livré',
    toolsLabel: 'Outils que vous utiliserez',
    formatLabel: 'Le format : ',
  },
  advisor: {
    howItWorks: 'Comment ça marche',
    partnersLine: 'Là où vont les entreprises ensuite : les partenaires que nous leur présentons',
  },
  back: {
    toAdvisors: 'Retour aux conseillers et anciens',
    toHome: 'Retour à l’accueil',
    toFounder: 'Retour au parcours des fondateurs',
  },
  mentors: { seeAll: (n: number) => `Voir les ${n} mentors et conseillers` },
};

export const UI: Record<Lang, typeof en> = { en, fr };
