import Icon from '../components/Icon';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Image from '../components/Image';
import SectionHeading from '../components/SectionHeading';
import { labCopy as lab } from '../data/content';

const MAILTO = 'mailto:ceed@uottawa.ca?subject=Advanced%20Manufacturing%20Startup%20Lab';

/**
 * Standalone preview page served at /lab.html for an Advanced Manufacturing
 * Startup Lab, modelled on the CENGN living-lab approach. It is NOT linked from
 * the live site; it exists so the concept and design can be evaluated. Aimed at
 * external startups and SMEs validating advanced manufacturing technology.
 */
export default function LabPage() {
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
            {lab.backLabel}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        {lab.heroImage && (
          <Image src={lab.heroImage} alt="" gradient="from-slate-800 to-slate-950" className="absolute inset-0 opacity-30" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/85 to-slate-900/60" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <Icon name="spark" className="h-4 w-4 text-indigo-300" />
            {lab.eyebrow}
          </span>
          <p className="mt-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">{lab.name}</p>
          <h1 className="mx-auto mt-2 max-w-3xl font-display text-4xl font-black leading-[1.07] text-balance sm:text-5xl">
            {lab.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">{lab.intro}</p>
          <a
            href={MAILTO}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-garnet-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-garnet-700"
          >
            {lab.ctaLabel}
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Why a living lab" title={lab.valueTitle} subtitle={lab.valueSubtitle} align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lab.value.map((v) => (
            <div key={v.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon name={v.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="Who it's for" title={lab.audienceTitle} subtitle={lab.audienceSubtitle} align="center" />
          <ul className="mx-auto mt-8 grid gap-3">
            {lab.audience.map((a) => (
              <li key={a} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <Icon name="checkCircle" className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                <span className="text-sm leading-relaxed text-slate-700">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Capabilities" title={lab.capabilitiesTitle} subtitle={lab.capabilitiesSubtitle} align="center" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lab.capabilities.map((c) => (
            <div
              key={c.name}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative">
                <Image src={c.image} alt="" gradient="from-indigo-500 to-violet-600" className="aspect-[16/9] w-full" />
                <span className="absolute -bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md ring-4 ring-white">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 pt-8">
                <h3 className="font-display text-base font-bold text-slate-900">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works — two tracks */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="How it works" title={lab.howTitle} subtitle={lab.howSubtitle} align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {lab.tracks.map((t) => (
              <div key={t.name} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <Icon name={t.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wide text-indigo-600">{t.forWhom}</span>
                    <h3 className="font-display text-lg font-bold text-slate-900">{t.name}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.body}</p>
                <ol className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  {t.steps.map((s, i) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-[11px] font-bold text-indigo-700">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the lab — photo gallery */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Inside the lab" title={lab.galleryTitle} subtitle={lab.gallerySubtitle} align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {lab.gallery.map((g) => (
            <figure key={g.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image src={g.src} alt={g.alt} gradient="from-slate-700 to-slate-900" className="aspect-[4/3] w-full" />
              {g.caption && (
                <figcaption className="px-4 py-3 text-xs font-medium text-slate-500">{g.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>

      {/* Support & ecosystem */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading eyebrow="Support" title={lab.supportTitle} subtitle={lab.supportBody} align="center" />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {lab.partners.map((p) => (
              <span key={p} className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600">
                {p}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400">{lab.supportNote}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-garnet-900 py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl font-black text-balance sm:text-3xl">{lab.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-garnet-100">{lab.ctaBody}</p>
          <a
            href={MAILTO}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-garnet-800 transition hover:bg-garnet-50"
          >
            {lab.ctaButton}
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
