import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { categories, projects, type FilterId } from "@/data/portfolio";
import { cn } from "@/lib/cn";

export function Projects() {
  const [filter, setFilter] = useState<FilterId>("All");
  const visible = projects.filter((project) => filter === "All" || project.category === filter);

  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
              03 / Projects
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink">Three projects, read as decisions.</h2>
            <p className="mt-4 text-muted">
              Hover a dashboard for the short read. Every case study is also a PDF you can keep.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {categories.map((category) => {
              const selected = filter === category;
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((project) => project.category === category).length;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(category)}
                  className={cn(
                    "tap inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm",
                    selected
                      ? "border-accent bg-accent text-accent-ink"
                      : "border-line bg-surface text-ink hover:border-accent",
                  )}
                >
                  {category}
                  <span className={selected ? "text-accent-ink" : "text-muted"}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 space-y-6" key={filter}>
          {visible.map((project) => (
            <article
              key={project.slug}
              className="rise overflow-hidden rounded-card border border-line bg-surface transition-colors hover:border-accent md:grid md:grid-cols-12"
            >
              <a
                href={`/work/${project.slug}`}
                className="group relative block md:col-span-5"
              >
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  className="shot-img aspect-video h-full w-full object-cover object-top"
                />
                <div className="shot-veil pointer-events-none absolute inset-0 flex items-end p-5 opacity-0 transition duration-200 group-hover:opacity-100 max-md:hidden">
                  <p className="text-sm text-band-ink">{project.hover}</p>
                </div>
              </a>

              <div className="flex flex-col gap-4 p-5 md:col-span-7 md:p-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-[0.14em] text-accent uppercase">
                  <span>{project.category}</span>
                  <span className="text-line" aria-hidden="true">
                    /
                  </span>
                  <span className="text-muted normal-case tracking-normal">{project.year}</span>
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-ink">
                    <a href={`/work/${project.slug}`} className="hover:text-accent">
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-muted">{project.oneLiner}</p>
                  <p className="mt-3 text-sm text-ink md:sr-only">{project.hover}</p>
                </div>
                <dl className="grid grid-cols-3 gap-3 border-y border-line py-3">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="text-xs text-muted">{stat.label}</dt>
                      <dd className="mt-1 font-serif text-xl text-ink">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-muted"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm text-ink">
                  {project.bullets.slice(0, 3).map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <a
                    href={`/work/${project.slug}`}
                    className="tap inline-flex h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-ink"
                  >
                    <FileText className="size-4" aria-hidden="true" />
                    Read write-up
                  </a>
                  <a
                    href={project.pdf}
                    download
                    className="tap inline-flex h-11 items-center gap-2 rounded-full border border-line bg-bg px-4 text-sm font-medium text-ink"
                  >
                    <Download className="size-4" aria-hidden="true" />
                    View case study (PDF)
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
