export default function SectionHeader({ eyebrow, title, description, center = false, tone = 'light' }) {
  const isDark = tone === 'dark'
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <div className={`mb-3 text-sm font-semibold uppercase tracking-[0.22em] ${isDark ? 'text-amber-200' : 'text-violet-700'}`}>{eyebrow}</div>}
      <h2 className={`text-3xl font-semibold tracking-tight md:text-4xl ${isDark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {description && <p className={`mt-4 text-lg leading-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>}
    </div>
  )
}
