import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Layers, Network, Radar, Sparkles } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { services, workModels } from '../data/services.js'
import { solutions } from '../data/solutions.js'
import { portfolio } from '../data/portfolio.js'

function SystemDiagram() {
  const nodes = ['Business Inputs', 'Knowledge Layer', 'Workflow Agents', 'Management Intelligence', 'Business Outcomes']
  return (
    <div className="soft-card relative overflow-hidden rounded-[2rem] p-6">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-fuchsia-300/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-950">AI Operating Layer</div>
            <div className="text-xs text-slate-500">From scattered work to coordinated action</div>
          </div>
          <Network className="text-violet-700" size={24} />
        </div>
        <div className="space-y-3">
          {nodes.map((node, index) => (
            <div key={node}>
              <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/72 px-4 py-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">{index + 1}</div>
                  <span className="text-sm font-medium text-slate-800">{node}</span>
                </div>
                <span className="text-xs text-violet-700">active</span>
              </div>
              {index < nodes.length - 1 && <div className="ml-8 h-4 w-px bg-slate-300" />}
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-slate-600">
          <div className="rounded-xl bg-slate-50 p-3">Automate</div>
          <div className="rounded-xl bg-slate-50 p-3">Coordinate</div>
          <div className="rounded-xl bg-slate-50 p-3">Improve</div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="section-aurora grid-glow">
        <div className="container-page grid gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/72 px-4 py-2 text-sm font-medium text-violet-800 shadow-sm">
            <Sparkles size={16} /> AI strategy · workflow automation · custom systems
          </div>
          <h1 className="mt-7 text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            AI systems for businesses ready to move beyond <span className="gradient-text">experiments.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We help growing companies identify, design, and deploy practical AI systems across operations, knowledge workflows, customer engagement, and management decision-making.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/18 transition hover:bg-violet-800">Book an AI Strategy Call <ArrowRight size={17} /></Link>
            <Link to="/solutions" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-fuchsia-500 hover:text-violet-700">Explore Solutions</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            {['Real systems', 'Operational workflows', 'Measurable outcomes', 'Internal knowledge'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-violet-700" />{item}</span>
            ))}
          </div>
        </div>
        <SystemDiagram />
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/75 backdrop-blur">
        <div className="container-page grid gap-4 py-6 text-sm font-semibold text-slate-600 sm:grid-cols-2 lg:grid-cols-5">
          {['Strategy', 'Automation', 'Knowledge AI', 'Management Intelligence', 'Custom Systems'].map((item) => <div key={item} className="rounded-full bg-white px-4 py-3 text-center shadow-sm">{item}</div>)}
        </div>
      </section>

      <section className="section-mist py-20">
        <div className="container-page">
        <SectionHeader eyebrow="What we solve" title="Practical AI transformation starts with operational pain points." description="We do not begin with generic AI workshops. We begin with the work your team repeats, the knowledge they cannot find, and the decisions that need better signals." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <div key={item.pain} className="soft-card rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-sm font-semibold text-violet-700">{item.solution}</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.pain}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="section-ink py-20 text-white">
        <div className="container-page">
          <SectionHeader center tone="dark" eyebrow="Core services" title="From AI opportunity to deployed systems." description="Our service model combines strategy, workflow redesign, AI implementation, and long-term capability building." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="dark-card rounded-3xl p-6 transition hover:-translate-y-1 hover:bg-white/[0.10]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-400/15 text-amber-200"><Icon size={24} /></div>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{service.summary}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-warm py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader eyebrow="Differentiation" title="AI should not only answer questions. It should help the business notice, coordinate, and act." description="The AI Management Layer is our key point of difference: automated reports, exception detection, task summaries, KPI comparisons, and decision support built around how your business actually operates." />
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-800">View services <ArrowRight size={17} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[{ icon: Radar, title: 'Notice', text: 'Surface anomalies, gaps, and repeated operational issues earlier.' }, { icon: Layers, title: 'Coordinate', text: 'Connect documents, reports, tasks, emails, and workflows into usable systems.' }, { icon: CheckCircle2, title: 'Act', text: 'Generate next-step recommendations, summaries, and follow-up actions.' }, { icon: Network, title: 'Learn', text: 'Turn your own data and processes into proprietary AI capability.' }].map((item) => {
              const Icon = item.icon
              return <div key={item.title} className="soft-card rounded-3xl p-6"><Icon className="text-violet-700" /><h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p></div>
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/70 py-20 backdrop-blur">
        <div className="container-page">
          <SectionHeader center eyebrow="How we work" title="Choose the engagement model that matches your stage." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workModels.map((model) => <div key={model.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="text-sm font-semibold text-violet-700">{model.period}</div><h3 className="mt-3 text-lg font-semibold text-slate-950">{model.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{model.description}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-mist py-20">
        <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow="Portfolio" title="We do not only advise. We build." description="Selected internal products and venture-style systems that demonstrate our ability to design AI beyond simple chatbots." />
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 hover:text-violet-950">View portfolio <ArrowRight size={17} /></Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.slice(0, 6).map((item) => (
            <Link to="/portfolio" key={item.id} className="soft-card group overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-violet-900 via-fuchsia-700 to-amber-500 leading-none"><img src={item.image} alt={`${item.title} cover`} className="absolute inset-0 block h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">{item.category}</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
