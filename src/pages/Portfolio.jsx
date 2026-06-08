import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ExternalLink, ListFilter } from 'lucide-react'
import { portfolio, projectArchive } from '../data/portfolio'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(portfolio[0])
  const detailRef = useRef(null)

  const handleSelectProject = (project) => {
    setSelectedProject(project)

    setTimeout(() => {
      detailRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 80)
  }

  useEffect(() => {
    if (!selectedProject && portfolio.length > 0) {
      setSelectedProject(portfolio[0])
    }
  }, [selectedProject])

  return (
    <main className="min-h-screen bg-[#fbf7ff] bg-[linear-gradient(to_right,rgba(124,58,237,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.08)_1px,transparent_1px)] bg-[size:32px_32px]">
      {/* Hero */}
      <section className="px-6 pb-10 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-violet-600">
            Portfolio
          </p>

          <div className="max-w-5xl">
            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Systems, products, and prototypes that show how we build.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Our portfolio combines internal products, venture concepts, AI workflow modules, and experimental systems that demonstrate how AI can move from idea to operational infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Systems */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-violet-600">
              Featured Systems
            </p>
            <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Six selected examples of what we can design and build.
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectProject(item)}
                className={`group flex h-full flex-col overflow-hidden rounded-[28px] border bg-white text-left shadow-[0_22px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(88,28,135,0.16)] ${
                  selectedProject?.id === item.id
                    ? 'border-violet-300 ring-2 ring-violet-200'
                    : 'border-slate-200/80'
                }`}
              >
                {/* Image area */}
                <div className="relative h-[230px] w-full shrink-0 overflow-hidden bg-[#050816]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 block h-full w-full object-cover object-center"
                    draggable="false"
                  />
                </div>

                {/* Content area */}
                <div className="flex flex-1 flex-col bg-white p-7">
                  <div className="mb-4 flex items-start justify-between gap-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-violet-700">
                      {item.category}
                    </p>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-base leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {item.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Detail */}
      {selectedProject && (
        <section
          ref={detailRef}
          className="scroll-mt-28 px-6 py-12 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-violet-600">
                  Selected System Detail
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                  {selectedProject.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="hidden rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-violet-200 hover:text-violet-700 md:inline-flex"
              >
                Collapse
                <span className="ml-2">⌃</span>
              </button>
            </div>

            <div className="overflow-hidden rounded-[32px] bg-[#050816] shadow-[0_32px_120px_rgba(15,23,42,0.22)]">
              <div className="grid lg:grid-cols-[670px_minmax(0,1fr)]">
                {/* Detail Image */}
                <div className="relative h-[420px] overflow-hidden bg-[#050816] md:h-[520px] lg:h-[650px]">
                  <img
                    src={selectedProject.detailImage || selectedProject.image}
                    alt={`${selectedProject.title} detail`}
                    className="absolute inset-0 block h-full w-full object-cover object-center"
                  />
                </div>

                {/* Detail Content */}
                <div className="relative bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.22),transparent_34%),linear-gradient(135deg,#261044_0%,#0b1224_62%,#02141c_100%)] p-8 text-white md:p-10 lg:p-12">
                  <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                    <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur">
                      {selectedProject.status}
                    </span>

                    <a
                      href={selectedProject.link || '#'}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-100"
                    >
                      Project link
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <p className="text-xl leading-9 text-white/90">
                    {selectedProject.description}
                  </p>

                  <ul className="mt-8 space-y-5">
                    {selectedProject.details?.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-4 text-base leading-8 text-white/80"
                      >
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-yellow-300" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9 flex flex-wrap gap-3">
                    {selectedProject.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="mt-9 inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white hover:text-slate-950 md:hidden"
                  >
                    Collapse
                    <span className="ml-2">⌃</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Archive */}
      <section className="px-6 pb-24 pt-10 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-slate-200/80 bg-white/80 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur md:p-10">
          <div className="mb-9 grid gap-6 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.32em] text-violet-600">
                <ListFilter size={16} />
                All Projects & Experiments
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                A scalable archive for future work.
              </h2>
            </div>

            <p className="text-base leading-7 text-slate-600">
              Featured systems stay visual and selective. The archive can grow over time without making the portfolio page heavy or difficult to navigate.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="hidden grid-cols-[1.1fr_1.1fr_1fr_1.4fr_0.35fr] border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-500 lg:grid">
              <div>Project</div>
              <div>Category</div>
              <div>Status</div>
              <div>Capabilities</div>
              <div>Link</div>
            </div>

            <div className="divide-y divide-slate-100">
              {projectArchive.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-4 px-6 py-6 lg:grid-cols-[1.1fr_1.1fr_1fr_1.4fr_0.35fr] lg:items-center"
                >
                  <div>
                    <p className="text-base font-semibold text-slate-950">
                      {item.title}
                    </p>
                  </div>

                  <div className="text-sm text-slate-600">
                    {item.category}
                  </div>

                  <div className="text-sm text-slate-600">
                    {item.status}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.capabilities?.map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>

                  <div>
                    <a
                      href={item.link || '#'}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-violet-700 hover:text-violet-950"
                    >
                      Details
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}