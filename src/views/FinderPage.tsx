import Icon from '../components/Icon';
import StageFinder from '../components/StageFinder';
import { navigate } from '../lib/router';
import { founder, ui } from '../data/content';

export default function FinderPage() {
  const onBack = () => navigate('founder');
  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-ember-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-slate-800"
          >
            <Icon name="arrowLeft" className="h-4 w-4" />
            {ui.back.toFounder}
          </button>
          <div className="mt-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-ember-700">
              {founder.eyebrow}
            </span>
            <h1 className="mt-3 font-display text-3xl font-black leading-tight text-slate-900 text-balance sm:text-4xl">
              {founder.finderTitle}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">{founder.finderSubtitle}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <StageFinder />
      </section>
    </div>
  );
}
