import type { ReactNode } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Download } from "lucide-react";
import { SiteShell } from "@/components/site/shell";
import { getProject, projects } from "@/data/portfolio";

export const Route = createFileRoute("/work/$slug")({
  component: CaseStudyPage,
  head: ({ params }) => {
    const project = getProject(params.slug);
    return {
      meta: [
        {
          title: project
            ? `${project.title} — Sonusi Abiodun`
            : "Project — Sonusi Abiodun",
        },
      ],
    };
  },
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <SiteShell>
        <div className="mx-auto max-w-3xl px-5 py-20">
          <h1 className="font-serif text-4xl text-ink">That project is not on this site.</h1>
          <p className="mt-4 text-muted">The published case studies are the three below.</p>
          <ul className="mt-6 space-y-2">
            {projects.map((item) => (
              <li key={item.slug}>
                <Link to="/work/$slug" params={{ slug: item.slug }} className="text-accent">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SiteShell>
    );
  }

  const images = [project.image, ...project.gallery];

  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
          <ArrowLeft className="size-4" aria-hidden="true" />
          All projects
        </Link>
        <p className="mt-8 text-xs tracking-[0.18em] text-accent uppercase">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-3 font-serif text-5xl text-ink">{project.title}</h1>
        <p className="mt-4 text-lg text-muted">{project.oneLiner}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li key={tool} className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
              {tool}
            </li>
          ))}
        </ul>

        <figure className="mt-8 overflow-hidden rounded-card border border-line">
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            className="w-full object-cover"
          />
          <figcaption className="bg-surface px-4 py-3 text-sm text-muted">{project.image.caption}</figcaption>
        </figure>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.pdf}
            download
            className="tap inline-flex h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-ink"
          >
            <Download className="size-4" aria-hidden="true" />
            View case study (PDF)
          </a>
        </div>

        <Section title="Problem">{project.problem}</Section>
        <Section title="Approach">
          <BulletList items={project.approach} />
        </Section>
        <Section title="What the data showed">
          <BulletList items={project.insights} />
        </Section>

        {images.slice(1).map((image) => (
          <figure key={image.src} className="mt-8 overflow-hidden rounded-card border border-line">
            <img src={image.src} alt={image.alt} width={image.width} height={image.height} className="w-full" />
            <figcaption className="bg-surface px-4 py-3 text-sm text-muted">{image.caption}</figcaption>
          </figure>
        ))}

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-card border border-line bg-surface p-5">
            <h2 className="font-serif text-2xl text-ink">What I learned</h2>
            <BulletList items={project.learned} />
          </div>
          <div className="rounded-card border border-line bg-soft p-5">
            <h2 className="font-serif text-2xl text-ink">Limitations</h2>
            <BulletList items={project.limitations} />
          </div>
        </div>

        <Section title="What I would do next">
          <BulletList items={project.recommendations} />
        </Section>

        {project.slug === "global-child-mortality" ? (
          <p className="mt-8 text-sm text-muted">
            Primary source: World Health Organization, Global Health Observatory,{" "}
            <a href="https://www.who.int/data/gho" className="text-accent underline underline-offset-4">
              who.int/data/gho
            </a>
            . This page uses published open data. It is not an official WHO product.
          </p>
        ) : null}
      </article>
    </SiteShell>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-3xl text-ink">{title}</h2>
      <div className="mt-3 text-ink">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
