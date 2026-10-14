import { MapPin } from "lucide-react";
import { profile, projects, ticker, education } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:items-start md:py-20">
        <div className="md:col-span-7">
          <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">01 / About</p>
          <h1 className="mt-4 font-serif text-5xl text-ink sm:text-6xl">{profile.name}</h1>
          <p className="mt-4 max-w-xl text-lg text-muted">{profile.stackLine}</p>
          <div className="mt-8 max-w-xl space-y-4 text-base text-ink">
            <p>
              I build dashboards that make an <strong className="font-medium">uneven result</strong>{" "}
              obvious: where the burden sits, which accounts or regions carry it, and what a team
              should do next. Recent work covers WHO child-survival data, a 14-table logistics
              operation, and a multi-table sales book.
            </p>
            <p>
              I am looking for <strong className="font-medium">data analytics roles</strong> where
              the brief is a real decision — a model that holds up, visuals people will actually
              open, and recommendations that stay inside the evidence.
            </p>
          </div>
          <ul className="mt-8 max-w-xl divide-y divide-line border-y border-line">
            {education.map((item) => (
              <li key={item.place} className="flex items-baseline justify-between gap-4 py-3">
                <span>
                  <span className="block text-sm text-ink">{item.line}</span>
                  <span className="block text-sm text-muted">{item.place}</span>
                </span>
                <span className="shrink-0 text-xs tracking-[0.14em] text-accent uppercase">
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              {profile.location}
            </span>
            <span className="text-line" aria-hidden="true">
              /
            </span>
            <span>{profile.availability}</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="tap inline-flex h-12 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-ink"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="tap inline-flex h-12 items-center rounded-full border border-line bg-surface px-5 text-sm font-medium text-ink"
            >
              Contact
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="tap inline-flex h-12 items-center rounded-full border border-line bg-surface px-5 text-sm font-medium text-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <figure className="md:col-span-5 md:justify-self-end">
          <div className="portrait relative mx-auto w-full max-w-64 overflow-hidden rounded-card border border-line md:mx-0 md:max-w-sm">
            <img
              src="/portrait.jpg"
              alt="Portrait of Sonusi Abiodun"
              width={891}
              height={1066}
              className="h-full w-full object-cover"
            />
            <figcaption className="loc-pill absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs">
              <MapPin className="size-3.5 text-accent" aria-hidden="true" />
              {profile.location}
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <span key={copy} className={copy === 1 ? "ticker-dup contents" : "contents"}>
              {ticker.map((item) => (
                <span key={`${copy}-${item}`} className="inline-flex items-center gap-2 text-sm text-muted">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <p className="sr-only">Tools in regular use: {ticker.join(", ")}.</p>

      <div className="border-t border-line">
        <ol className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.slug} className="bg-bg">
              <a href={`/work/${project.slug}`} className="block px-5 py-5 hover:bg-surface">
                <span className="text-xs tracking-[0.16em] text-accent uppercase">
                  0{index + 1} · {project.category}
                </span>
                <span className="mt-2 block font-serif text-xl text-ink">{project.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
