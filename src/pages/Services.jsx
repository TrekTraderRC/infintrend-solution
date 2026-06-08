import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { services, workModels } from '../data/services.js'

export default function Services() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <SectionHeader eyebrow="Services" title="AI services designed for implementation, not theatre." description="Each service is structured around concrete deliverables: use-case mapping, workflow automation, internal knowledge systems, management intelligence, and custom system build." />
        <div className="mt-12 space-y-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="soft-card rounded-[2rem] p-6 md:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-violet-800"><Icon size={24} /></div>
                    <h2 className="mt-5 text-2xl font-semibold text-slate-950">{service.title}</h2>
                    <p className="mt-3 leading-7 text-slate-600">{service.summary}</p>
                    <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600"><strong className="text-slate-900">Fit:</strong> {service.fit}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Typical deliverables</h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {service.deliverables.map((deliverable) => <div key={deliverable} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">{deliverable}</div>)}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/60 py-20">
        <div className="container-page">
          <SectionHeader center eyebrow="Engagement models" title="Start small, validate quickly, then scale what works." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workModels.map((model) => <div key={model.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="text-sm font-semibold text-violet-700">{model.period}</div><h3 className="mt-3 text-lg font-semibold text-slate-950">{model.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{model.description}</p></div>)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
