import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition ${isActive ? 'text-fuchsia-700' : 'text-slate-600 hover:text-violet-950'}`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/82 backdrop-blur-xl">
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-700 via-fuchsia-600 to-amber-400 text-sm font-bold text-white shadow-lg shadow-fuchsia-900/20">ITS</div>
          <div>
            <div className="font-semibold tracking-tight text-slate-950">InfinTrend AI</div>
            <div className="text-xs text-slate-500">Strategy · Systems · Automation</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>{item.label}</NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="rounded-full bg-gradient-to-r from-violet-800 via-fuchsia-700 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-900/20 transition hover:scale-[1.02]">Book a Call</Link>
        </div>

        <button className="rounded-full border border-slate-200 p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-page flex flex-col gap-4 py-5">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)}>{item.label}</NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-gradient-to-r from-violet-800 via-fuchsia-700 to-orange-500 px-5 py-3 text-center text-sm font-semibold text-white">Book a Call</Link>
          </div>
        </div>
      )}
    </header>
  )
}
