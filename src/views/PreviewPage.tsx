import Icon from '../components/Icon';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import StageMap from '../components/StageMap';
import StageFinderV2 from '../components/StageFinderV2';
import { previewCopy } from '../data/content';

/**
 * Standalone experimental page served at /preview.html. It is NOT linked from the
 * live site; it exists so the new branching stage map and the revised finder can
 * be evaluated before either is adopted into the main design.
 */
export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <a
            href="./"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-slate-800"
          >
            <Icon name="arrowLeft" className="h-4 w-4" />
            {previewCopy.backLabel}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-garnet-50 to-white">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-garnet-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-garnet-700">
            <Icon name="spark" className="h-4 w-4" />
            {previewCopy.eyebrow}
          </span>
          <h1 className="mt-4 font-display text-3xl font-black leading-tight text-slate-900 text-balance sm:text-4xl">
            {previewCopy.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">{previewCopy.intro}</p>
        </div>
      </section>

      {/* Branching stage map */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading eyebrow="New layout" title={previewCopy.mapTitle} subtitle={previewCopy.mapSubtitle} align="center" />
        <div className="mt-10">
          <StageMap />
        </div>
      </section>

      {/* Revised finder */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="Revised finder" title={previewCopy.finderTitle} subtitle={previewCopy.finderSubtitle} align="center" />
          <div className="mt-8">
            <StageFinderV2 />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
