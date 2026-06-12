import { useMemo, useState } from 'react';
import Icon from './Icon';
import { accents } from '../lib/accents';
import { navigate } from '../lib/router';
import { decide } from '../lib/finder';
import {
  finderQuestions as questions,
  founder,
  programs,
  stages,
  ui,
} from '../data/content';
import type { StageId } from '../data/content';

/**
 * The founder starting-point finder. Your recommendation is the furthest stage
 * your proof supports (the best of your idea maturity and your evidence);
 * reaching MakerLaunch also needs a founder ready to commit, otherwise it points
 * you to Product Studio to build first. The routing rules live in lib/finder.
 */
export default function StageFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, StageId>>({});

  const done = step >= questions.length;
  const result = useMemo(() => decide(answers), [answers]);

  function choose(id: string, stage: StageId) {
    setAnswers((prev) => ({ ...prev, [id]: stage }));
    setStep((s) => s + 1);
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  const stage = stages.find((s) => s.id === result.stage)!;
  const a = accents[stage.accent];
  const recProgs = programs.filter((p) => p.stage === result.stage);
  const q = questions[step];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Progress bar */}
      <div className="h-1.5 w-full bg-slate-100">
        <div
          className="h-full bg-ember-600 transition-all duration-500"
          style={{ width: `${(Math.min(step, questions.length) / questions.length) * 100}%` }}
        />
      </div>

      <div className="p-6 sm:p-8">
        {!done ? (
          <div key={step} className="animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-ember-700">
                {founder.finderTitle}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                {step + 1} / {questions.length}
              </span>
            </div>
            <h3 className="mt-3 font-display text-xl font-bold text-slate-900 sm:text-2xl">{q.prompt}</h3>
            <div className="mt-5 grid gap-2.5">
              {q.options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => choose(q.id, opt.stage)}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-3.5 text-left text-sm font-medium text-slate-700 transition hover:border-ember-300 hover:bg-ember-50"
                >
                  {opt.label}
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-ember-600"
                  />
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-slate-800"
              >
                <Icon name="arrowLeft" className="h-4 w-4" />
                {ui.finder.back}
              </button>
            )}
          </div>
        ) : (
          <div className="animate-fade-in" role="status" aria-live="polite">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {founder.finderResultTitle}
            </span>
            <div className={`mt-3 flex items-center gap-4 rounded-2xl bg-gradient-to-br p-5 text-white ${a.gradient}`}>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15">
                <Icon name={stage.icon} className="h-8 w-8" />
              </span>
              <div>
                {stage.group === 'makerlaunch' && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                    A MakerLaunch track
                  </span>
                )}
                <h3 className="mt-1 font-display text-2xl font-black">{stage.name}</h3>
                <p className="text-sm text-white/90">{stage.tagline}</p>
              </div>
            </div>

            {/* Why this stage — makes the routing transparent. */}
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                {founder.finderReasonLabel}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">
                {ui.finder.reasons[result.reasonKey]}
              </p>
            </div>

            <button
              onClick={() => navigate('founder', { stage: result.stage })}
              className={`mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition ${a.solid} hover:opacity-90`}
            >
              {ui.finder.seeCta(stage.name)}
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>

            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-slate-500">
              {founder.finderRecommended}
            </p>
            <div className="mt-3 space-y-2.5">
              {recProgs.map((p) => (
                <div key={p.id} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${a.soft} ${a.text}`}>
                    <Icon name="checkCircle" className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-sm font-bold text-slate-900">{p.name}</span>
                      {p.flagship && (
                        <span className="rounded-full bg-ember-700 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                          {ui.program.flagship}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm text-slate-600">{p.summary}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={restart}
              className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Icon name="refresh" className="h-4 w-4" />
              {founder.finderRestart}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
