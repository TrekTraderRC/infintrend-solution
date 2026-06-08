import SectionHeader from '../components/SectionHeader.jsx'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xykawppj'

export default function Contact() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeader eyebrow="Contact" title="Let’s discuss where AI can create real operational value." description="Whether you need an AI audit, workflow automation, internal knowledge AI, or a custom AI system, we can help you map the opportunity and design the first practical step." />
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white/75 p-6 text-sm leading-6 text-slate-600 shadow-sm">
            <div className="font-semibold text-slate-950">InfinTrend AI</div>
            <p className="mt-3">Suite 503, 12 Nelson Road<br />Box Hill, VIC 3128<br />Australia</p>
            <p className="mt-6 text-slate-600">Share your business challenge, and we will help map the first practical AI opportunity.</p>
          </div>
        </div>

        <form action={FORMSPREE_ENDPOINT} method="POST" className="soft-card rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Name</span>
              <input name="name" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-4 focus:ring-teal-100" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Work Email</span>
              <input name="email" type="email" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-4 focus:ring-teal-100" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Company</span>
              <input name="company" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-4 focus:ring-teal-100" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Role / Position</span>
              <input name="role" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-4 focus:ring-teal-100" />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-medium text-slate-700">Interested In</span>
            <select name="interest" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-4 focus:ring-teal-100">
              <option>AI Opportunity Audit</option>
              <option>AI Workflow Automation</option>
              <option>Internal Knowledge AI</option>
              <option>AI Management Layer</option>
              <option>Custom AI System Build</option>
              <option>Partnership / Portfolio Project</option>
              <option>Other</option>
            </select>
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-medium text-slate-700">Message</span>
            <textarea name="message" rows="6" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-fuchsia-500 focus:ring-4 focus:ring-teal-100" />
          </label>

          <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />
          <button type="submit" className="mt-6 w-full rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-950/18 transition hover:bg-violet-800">Send Enquiry</button>
          <p className="mt-4 text-xs leading-5 text-slate-500">By submitting this form, you agree to be contacted about your enquiry.</p>
        </form>
      </div>
    </section>
  )
}
