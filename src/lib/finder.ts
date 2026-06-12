// Starting-point finder logic. Kept separate from the view so the routing rules
// can be reasoned about and tested on their own.
import type { StageId } from '../data/content';

export const ORDER: Record<StageId, number> = { explore: 1, validate: 2, build: 3, scale: 4 };
export const ID_BY_ORDER: Record<number, StageId> = { 1: 'explore', 2: 'validate', 3: 'build', 4: 'scale' };

export type ReasonKey = 'explore' | 'exploreTeam' | 'validate' | 'validateCapped' | 'build' | 'scale';

export interface FinderResult {
  stage: StageId;
  /** Which explanation to show (covers the two team-gated cases too). */
  reasonKey: ReasonKey;
}

/**
 * Decide the recommended stage from the three answers (keyed by question id:
 * `idea`, `evidence`, `team`).
 *
 * Your reach is the furthest stage your proof supports — the best of your idea
 * maturity and your evidence. Two team gates then apply, because the program
 * runs in teams:
 *   - The Accelerator (`build`) needs a founder ready to commit; without one we
 *     point you to Product Studio (`validate`) to build with a team first.
 *   - Product Studio runs as committed teams; a solo founder with a validated
 *     idea forms a team in Explore first.
 *
 * Note on the model: customer discovery happens in Explore, so discovery proof
 * (without a built product) recommends Product Studio (build it), and only a
 * working product reaches the Accelerator directly.
 */
export function decide(answers: Record<string, StageId>): FinderResult {
  const idea = ORDER[answers.idea] ?? 1;
  const evidence = ORDER[answers.evidence] ?? 1;
  const commit = ORDER[answers.team] ?? 1;
  const proof = Math.max(idea, evidence);

  if (proof === ORDER.build && commit < ORDER.build) {
    return { stage: 'validate', reasonKey: 'validateCapped' };
  }
  if (proof === ORDER.validate && commit === ORDER.explore) {
    return { stage: 'explore', reasonKey: 'exploreTeam' };
  }
  const stage = ID_BY_ORDER[proof];
  return { stage, reasonKey: stage };
}
