import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { solutions, audiences } from '../data/solutions.js'

export default function Solutions() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <SectionHeader eyebrow="Solutions" title="AI solutions mapped to real business pain." description="We organize AI around the problems companies actually experience: repeated work, scattered knowledge, slow reporting, weak visibility, and lack of internal AI capability." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => <article key={item.pain} className="soft-card rounded-3xl p-6"><div className="text-sm font-semibold text-violet-700">{item.solution}</div><h2 className="mt-3 text-xl font-semibold text-slate-950">{item.pain}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p></article>)}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Who we help</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Built for growing businesses that need real systems.</h2>
            <p className="mt-4 leading-7 text-slate-300">Many companies know AI matters, but lack the internal team, architecture, or implementation path. We work with founders and operators to turn that uncertainty into practical build plans.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {audiences.map((audience) => <div key={audience} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-sm font-medium text-slate-100">{audience}</div>)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
