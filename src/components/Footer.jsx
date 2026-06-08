import { Link } from 'react-router-dom'

const columns = [
  { title: 'Company', links: [{ label: 'About', to: '/about' }, { label: 'Portfolio', to: '/portfolio' }, { label: 'Contact', to: '/contact' }] },
  { title: 'Solutions', links: [{ label: 'Workflow Automation', to: '/solutions' }, { label: 'Knowledge AI', to: '/solutions' }, { label: 'Management Intelligence', to: '/solutions' }] },
  { title: 'Services', links: [{ label: 'AI Audit', to: '/services' }, { label: 'AI Workflow Pilot', to: '/services' }, { label: 'Custom System Build', to: '/services' }] },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#fffaf3]/85">
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.4fr_2fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-700 via-fuchsia-600 to-amber-400 text-sm font-bold text-white">IF</div>
            <div>
              <div className="text-lg font-semibold text-slate-950">InfinTrend AI</div>
              <div className="text-sm text-slate-500">AI-native systems for real operations.</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">We help growing businesses turn AI from experiments into practical workflows, knowledge systems, and management intelligence.</p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-slate-950">{column.title}</h3>
              <div className="mt-4 space-y-3">
                {column.links.map((link) => <Link key={link.label} to={link.to} className="block text-sm text-slate-600 hover:text-fuchsia-700">{link.label}</Link>)}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-950">Contact</h3>
          <p className="mt-4 text-sm leading-6 text-slate-600">Suite 503, 12 Nelson Road<br />Box Hill, VIC 3128<br />Australia</p>
          <Link to="/contact" className="mt-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-violet-600 hover:text-fuchsia-700">Send enquiry</Link>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5">
        <div className="container-page flex flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} InfinTrend. All rights reserved.</span>
          <span>Melbourne · Global · AI Strategy & Systems</span>
        </div>
      </div>
    </footer>
  )
}
