import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-aurora py-16">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#21062d] via-[#111744] to-[#052c3a] p-8 text-white shadow-2xl shadow-fuchsia-950/25 md:p-12">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-400/25 blur-3xl" />
          <div className="absolute -bottom-28 right-8 h-80 w-80 rounded-full bg-amber-400/25 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.5fr_0.8fr] md:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-200">Start Practical</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Ready to turn AI into real business infrastructure?</h2>
              <p className="mt-4 max-w-2xl text-slate-300">Start with a focused AI strategy call. We will discuss where AI can reduce manual work, improve knowledge access, and support better decisions.</p>
            </div>
            <div className="flex md:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-100">Book an AI Strategy Call <ArrowRight size={17} /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
