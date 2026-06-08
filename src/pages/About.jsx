import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'

const principles = [
  ['Systems before tools', 'AI transformation starts with workflows, data structures, and operating models — not isolated chatbot demos.'],
  ['Practical before theatrical', 'We focus on what can reduce manual work, improve visibility, or create repeatable capability.'],
  ['Business logic matters', 'Every company has hidden domain knowledge. The goal is to convert that knowledge into usable AI-native systems.'],
  ['Build the moat', 'The long-term value of AI comes from proprietary workflows, company-specific data, and operational learning.'],
]

export default function About() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <SectionHeader eyebrow="About" title="We believe AI transformation starts with systems, not tools." description="InfinTrend AI is a strategy and system design partner for businesses that want AI to become part of real operations. We help founders and teams move from scattered AI experiments to practical infrastructure." />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="soft-card rounded-[2rem] p-7">
            <h2 className="text-2xl font-semibold text-slate-950">Our position</h2>
            <p className="mt-4 leading-7 text-slate-600">We do not position AI as a magic layer that replaces business judgment. We position AI as an operating layer that helps businesses search knowledge, coordinate work, notice signals, and act with more clarity.</p>
            <p className="mt-4 leading-7 text-slate-600">That is why our work combines consulting, product thinking, workflow design, and implementation.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map(([title, text]) => <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></div>)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
