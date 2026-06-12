import { useState } from 'react';
import Icon from '../components/Icon';
import VentureBoard from '../components/VentureBoard';
import StudentBoard from '../components/StudentBoard';
import { navigate } from '../lib/router';
import { launchpadPage as copy, ui } from '../data/content';

type Side = 'ventures' | 'students';

export default function LaunchpadPage() {
  const [side, setSide] = useState<Side>('ventures');
  const onBack = () => navigate('home');

  const tab = (key: Side, text: string) => (
    <button
      type="button"
      onClick={() => setSide(key)}
      aria-pressed={side === key}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        side === key ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:text-slate-900'
      }`}
    >
      {text}
    </button>
  );

  return (
    <div>
      {/* Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-slate-800"
          >
            <Icon name="arrowLeft" className="h-4 w-4" />
            {ui.back.toHome}
          </button>
          <div className="mt-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              {copy.eyebrow}
            </span>
            <h1 className="mt-3 font-display text-3xl font-black leading-tight text-slate-900 text-balance sm:text-4xl">
              {copy.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">{copy.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {/* Side toggle */}
        <div className="inline-flex rounded-full border border-slate-200 bg-white p-1">
          {tab('ventures', copy.tabVentures)}
          {tab('students', copy.tabStudents)}
        </div>

        <div className="mt-8">
          {side === 'ventures' ? <VentureBoard /> : <StudentBoard />}
        </div>
      </section>
    </div>
  );
}
