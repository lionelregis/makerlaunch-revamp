// Starting-point finder logic (preview). Kept separate from the view so the
// routing rules can be reasoned about and tested on their own.
import type { StageId } from '../data/content';

export const ORDER: Record<StageId, number> = { explore: 1, validate: 2, build: 3, scale: 4 };
export const ID_BY_ORDER: Record<number, StageId> = { 1: 'explore', 2: 'validate', 3: 'build', 4: 'scale' };

export interface FinderResult {
  stage: StageId;
  /** True when MakerLaunch-grade proof was held back to Product Studio for lack of a committed founder. */
  capped: boolean;
}

/**
 * Decide the recommended stage from the three answers (keyed by question id:
 * `idea`, `evidence`, `team`).
 *
 * Your reach is the furthest stage your proof supports — the best of your idea
 * maturity and your evidence. Reaching MakerLaunch (the `build` stage) also needs
 * a founder ready to commit; without that we point you to Product Studio
 * (`validate`) to build first.
 *
 * This replaces the old rule, which recommended the *least*-advanced answer and
 * so sent MakerLaunch-ready founders back to Product Studio.
 */
export function decide(answers: Record<string, StageId>): FinderResult {
  const idea = ORDER[answers.idea] ?? 1;
  const evidence = ORDER[answers.evidence] ?? 1;
  const commit = ORDER[answers.team] ?? 1;
  const proof = Math.max(idea, evidence);

  let rec = proof;
  let capped = false;
  if (rec === ORDER.build && commit < ORDER.build) {
    rec = ORDER.validate;
    capped = true;
  }
  return { stage: ID_BY_ORDER[rec], capped };
}

/** A plain-language explanation of why a result was reached. */
export function reasonFor({ stage, capped }: FinderResult): string {
  switch (stage) {
    case 'explore':
      return 'Start here. Explore entrepreneurship, shape an idea, and find teammates before committing to a build.';
    case 'validate':
      return capped
        ? 'You have strong proof, but MakerLaunch needs a founder ready to commit. Product Studio is where you build it into a shipped product with a team.'
        : 'You have a validated idea. Product Studio is where you build, test, and ship it into a working product.';
    case 'build':
      return 'You have the proof MakerLaunch looks for and a founder ready to commit, so you can go straight to the accelerator.';
    case 'scale':
      return 'You are already incorporated with traction. The Founders Network connects you to the partners who can help you grow.';
  }
}
