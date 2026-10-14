import { profile, projects } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-band text-band-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl">{profile.name}</p>
          <p className="mt-2 text-sm text-band-muted">{profile.stackLine}</p>
          <p className="mt-4 max-w-sm text-sm text-band-muted">
            {profile.location} · {profile.availability}. Public-health work on this site uses
            published WHO open data and is not an official WHO product.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.16em] text-accent uppercase">Navigate</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/#about" className="hover:text-accent">
                About
              </a>
            </li>
            <li>
              <a href="/#projects" className="hover:text-accent">
                Projects
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-accent">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs tracking-[0.16em] text-accent uppercase">Case studies</p>
          <ul className="mt-3 space-y-2 text-sm">
            {projects.map((project) => (
              <li key={project.slug}>
                <a href={project.pdf} download className="hover:text-accent">
                  {project.pdfLabel}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm">
            <a href={`mailto:${profile.email}`} className="hover:text-accent">
              {profile.email}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
              LinkedIn
            </a>
          </p>
          <p className="mt-1 text-sm text-band-muted">{profile.phoneDisplay}</p>
        </div>
      </div>
      <div className="band-rule">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-band-muted">
          © {new Date().getFullYear()} {profile.name}. All project write-ups describe work already
          completed.
        </p>
      </div>
    </footer>
  );
}
