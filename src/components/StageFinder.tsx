import { useMemo, useState } from 'react';
import Icon from './Icon';
import { accents } from '../lib/accents';
import {
  finderQuestions,
  founder,
  programs,
  stages,
} from '../data/content';
import type { StageId } from '../data/content';

const ORDER: Record<StageId, number> = { explore: 1, validate: 2, build: 3, scale: 4 };

export default function StageFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<StageId[]>([]);

  const done = step >= finderQuestions.length;

  // A founder is only as ready as their least-advanced answer, so recommend the
  // earliest stage any answer points to.
  const recommended = useMemo<StageId>(() => {
    if (answers.length === 0) return 'explore';
    return answers.reduce((earliest, s) =>
      ORDER[s] < ORDER[earliest] ? s : earliest,
    );
  }, [answers]);

  function choose(stage: StageId) {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = stage;
      return next;
    });
    setStep((s) => s + 1);
  }

  function restart() {
    setAnswers([]);
    setStep(0);
  }

  const stage = stages.find((s) => s.id === recommended)!;
  const a = accents[stage.accent];
  const recProgs = programs.filter((p) => p.stage === recommended);
  const q = finderQuestions[step];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Progress bar */}
      <div className="h-1.5 w-full bg-slate-100">
        <div
          className="h-full bg-garnet-600 transition-all duration-500"
          style={{
            width: `${(Math.min(step, finderQuestions.length) / finderQuestions.length) * 100}%`,
          }}
        />
      </div>

      <div className="p-6 sm:p-8">
        {!done ? (
          <div key={step} className="animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-garnet-700">
                {founder.finderTitle}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                {step + 1} / {finderQuestions.length}
              </span>
            </div>
            <h3 className="mt-3 font-display text-xl font-bold text-slate-900 sm:text-2xl">
              {q.prompt}
            </h3>
            <div className="mt-5 grid gap-2.5">
              {q.options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => choose(opt.stage)}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-3.5 text-left text-sm font-medium text-slate-700 transition hover:border-garnet-300 hover:bg-garnet-50"
                >
                  {opt.label}
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-garnet-600"
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
                Back
              </button>
            )}
          </div>
        ) : (
          <div className="animate-fade-in">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {founder.finderResultTitle}
            </span>
            <div className={`mt-3 flex items-center gap-4 rounded-2xl bg-gradient-to-br p-5 text-white ${a.gradient}`}>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15">
                <Icon name={stage.icon} className="h-8 w-8" />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Stage {stage.order}
                </div>
                <h3 className="font-display text-2xl font-black">{stage.name}</h3>
                <p className="text-sm text-white/90">{stage.tagline}</p>
              </div>
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-wide text-slate-500">
              {founder.finderRecommended}
            </p>
            <div className="mt-3 space-y-2.5">
              {recProgs.map((p) => (
                <div
                  key={p.id}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${a.soft} ${a.text}`}>
                    <Icon name="checkCircle" className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-sm font-bold text-slate-900">{p.name}</span>
                      {p.flagship && (
                        <span className="rounded-full bg-garnet-700 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                          Flagship
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
