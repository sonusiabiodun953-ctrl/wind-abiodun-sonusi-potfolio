import { Database, LayoutDashboard, Palette, Sheet, Sigma, Workflow } from "lucide-react";
import { skills, softSkills } from "@/data/portfolio";

const icons = {
  layout: LayoutDashboard,
  sheet: Sheet,
  database: Database,
  workflow: Workflow,
  sigma: Sigma,
  palette: Palette,
};

export function Skills() {
  return (
    <section id="skills" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">02 / Skills</p>
          <h2 className="mt-3 font-serif text-4xl text-ink">Tools I use on the work, not a wishlist.</h2>
          <p className="mt-4 text-muted">
            Power BI carries the story. Excel, Power Query, SQL, and DAX are how the story stays
            attached to the rows.
          </p>
        </div>

        <div className="md:col-span-8">
          <ul className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = icons[skill.icon];
              return (
                <li key={skill.name} className="rounded-card border border-line bg-surface p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-soft text-accent">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="font-serif text-xl text-ink">{skill.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted">{skill.note}</p>
                  <div className="mt-4">
                    <p className="mb-2 text-xs text-quiet">{skill.mark}</p>
                    <div className="skill-bar" aria-hidden="true">
                      <span style={{ width: `${skill.weight}%` }} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 border-t border-line pt-6">
            <h3 className="font-serif text-2xl text-ink">How the work is framed</h3>
            <ul className="mt-4 grid gap-4 md:grid-cols-3">
              {softSkills.map((skill, index) => (
                <li key={skill.name}>
                  <p className="text-xs tracking-[0.16em] text-accent uppercase">0{index + 1}</p>
                  <p className="mt-2 font-medium text-ink">{skill.name}</p>
                  <p className="mt-1 text-sm text-muted">{skill.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
