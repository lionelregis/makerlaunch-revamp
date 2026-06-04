import { useState } from 'react';
import { useI18n } from '../lib/i18n';
import {
  finderQuestions,
  finderResearchQuestion,
  founder,
  programs,
  stages,
  ui,
} from '../data/content';
import type { StageId } from '../data/content';
import { ACCENTS } from '../lib/accents';
import Icon from './Icon';
import ProgramCard from './ProgramCard';

const STAGE_INDEX: Record<StageId, number> = { explore: 0, validate: 1, build: 2, scale: 3 };
const STAGE_BY_INDEX: StageId[] = ['explore', 'validate', 'build', 'scale'];

const RECOMMENDED: Record<StageId, string[]> = {
  explore: ['gng4120', 'uohack', 'pitch'],
  validate: ['validation-program', 'simon-nehme', 'gng-stream'],
  build: ['makerlaunch'],
  scale: ['scale-handoff'],
};

// All steps: the three readiness questions plus the research-founder check.
const STEPS = [...finderQuestions, finderResearchQuestion];

interface Answers {
  idea?: StageId;
  team?: StageId;
  evidence?: StageId;
  research?: boolean;
}

function recommend(answers: Answers): { stage: StageId; research: boolean } {
  const ideaIdx = answers.idea ? STAGE_INDEX[answers.idea] : 0;
  const evidenceIdx = answers.evidence ? STAGE_INDEX[answers.evidence] : 0;
  let idx = Math.min(ideaIdx, evidenceIdx);

  // Team constraints reflect explicit entry criteria.
  if (answers.team === 'explore') {
    idx = 0; // Solo: form a team first via Explore-stage events.
  } else if (answers.team === 'validate' && idx > 1) {
    idx = 1; // 2+ members but no (near) full-time founder yet -> Validate.
  }

  // Research-founders typically enter at Validate.
  if (answers.research && idx < 1) idx = 1;

  return { stage: STAGE_BY_INDEX[idx], research: !!answers.research };
}

export default function StageFinder({ onSeeInPipeline }: { onSeeInPipeline: (stage: StageId) => void }) {
  const { t } = useI18n();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const done = step >= STEPS.length;
  const result = done ? recommend(answers) : null;

  function answer(question: (typeof STEPS)[number], stage: StageId) {
    const next: Answers = { ...answers };
    if (question.id === 'idea') next.idea = stage;
    else if (question.id === 'team') next.team = stage;
    else if (question.id === 'evidence') next.evidence = stage;
    else if (question.id === 'research') next.research = stage === 'validate'; // "Yes" => validate
    setAnswers(next);
    setStep((s) => s + 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  if (result) {
    const stage = stages.find((s) => s.id === result.stage)!;
    const a = ACCENTS[stage.accent];
    const recs = RECOMMENDED[result.stage]
      .map((id) => programs.find((p) => p.id === id))
      .filter((p): p is NonNullable<typeof p> => Boolean(p));

    return (
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className={`bg-gradient-to-br p-8 text-white ${a.gradient}`}>
          <p className="text-sm font-semibold text-white/80">{t(founder.finderResultTitle)}</p>
          <div className="mt-2 flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
              <Icon name={stage.icon} className="h-9 w-9" />
            </span>
            <div>
              <h3 className="text-3xl font-black">{t(stage.name)}</h3>
              <p className="text-sm text-white/85">{t(stage.tagline)}</p>
            </div>
          </div>
          {result.research && (
            <div className="mt-5 flex gap-3 rounded-xl bg-white/15 p-4 text-sm">
              <Icon name="beaker" className="h-5 w-5 shrink-0" />
              <span>{t(founder.finderResearchNote)}</span>
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500">
            {t(founder.finderRecommended)}
          </h4>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {recs.map((p, i) => (
              <ProgramCard key={p.id} program={p} defaultOpen={i === 0} />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => onSeeInPipeline(result.stage)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition ${a.solid} ${a.solidHover}`}
            >
              {t(ui.learnMore)}
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              {t(founder.finderRestart)}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = STEPS[step];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      {/* Progress */}
      <div className="mb-6 flex items-center gap-2">
        {STEPS.map((s, i) => (
          <span
            key={s.id}
            className={`h-1.5 flex-1 rounded-full transition ${
              i < step ? 'bg-garnet-600' : i === step ? 'bg-garnet-400' : 'bg-slate-200'
            }`}
          />
        ))}
      </div>

      <p className="text-xs font-bold uppercase tracking-wide text-garnet-700">
        {step + 1} / {STEPS.length}
      </p>
      <h3 className="mt-2 text-2xl font-bold text-slate-900 text-balance">{t(question.prompt)}</h3>

      <div className="mt-6 grid gap-3">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => answer(question, opt.stage)}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left transition hover:border-garnet-400 hover:bg-garnet-50 hover:shadow-sm"
          >
            <span className="text-sm font-medium text-slate-700 group-hover:text-garnet-900">
              {t(opt.label)}
            </span>
            <Icon
              name="arrowRight"
              className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-garnet-600"
            />
          </button>
        ))}
      </div>

      {step > 0 && (
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-slate-800"
        >
          <Icon name="arrowLeft" className="h-4 w-4" /> {t(ui.backHome).split(' ')[0]}
        </button>
      )}
    </div>
  );
}
