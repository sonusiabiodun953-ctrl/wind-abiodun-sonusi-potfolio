import { useState, type FormEvent } from "react";
import { Linkedin, Mail, Phone } from "lucide-react";
import { z } from "zod";
import { profile } from "@/data/portfolio";

const schema = z.object({
  name: z.string().trim().min(2, "Please add your name."),
  email: z.string().trim().email("Use a valid email so I can reply."),
  message: z.string().trim().min(12, "A sentence or two is enough."),
});

type Fields = z.infer<typeof schema>;

export function Contact() {
  const [values, setValues] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof Fields, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (key === "name" || key === "email" || key === "message") next[key] = issue.message;
      }
      setErrors(next);
      setSent(false);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio enquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `${parsed.data.message}\n\n— ${parsed.data.name}\n${parsed.data.email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">05 / Contact</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Let’s turn the numbers into a decision.
          </h2>
          <p className="mt-4 text-muted">
            A data analytics role, or a dashboard that is not being used. I read every note.
          </p>
          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="tap inline-flex h-12 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-accent-ink"
              >
                <Mail className="mr-2 size-4" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="tap inline-flex h-12 items-center rounded-full border border-line bg-surface px-5 text-sm font-medium text-ink"
              >
                <Linkedin className="mr-2 size-4 text-accent" aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-3 text-quiet">
                <Phone className="size-4" aria-hidden="true" />
                <span>
                  <span className="block text-xs tracking-[0.14em] uppercase">Direct line</span>
                  <span className="tabular-nums">{profile.phoneDisplay}</span>
                </span>
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-muted">
            {profile.location} · {profile.availability}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-card border border-line border-l-4 border-l-accent bg-surface p-5 md:col-span-7 md:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-muted">
              Name
              <input
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
                className="mt-2 h-12 w-full rounded-xl border border-line bg-bg px-3 text-base text-ink"
              />
              {errors.name ? <span className="mt-1 block text-sm text-accent">{errors.name}</span> : null}
            </label>
            <label className="block text-sm text-muted">
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
                className="mt-2 h-12 w-full rounded-xl border border-line bg-bg px-3 text-base text-ink"
              />
              {errors.email ? <span className="mt-1 block text-sm text-accent">{errors.email}</span> : null}
            </label>
          </div>
          <label className="mt-4 block text-sm text-muted">
            Message
            <textarea
              name="message"
              rows={5}
              value={values.message}
              onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
              className="mt-2 w-full rounded-xl border border-line bg-bg px-3 py-3 text-base text-ink"
            />
            {errors.message ? (
              <span className="mt-1 block text-sm text-accent">{errors.message}</span>
            ) : null}
          </label>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="tap inline-flex h-12 items-center rounded-full bg-ink px-5 text-sm font-medium text-bg"
            >
              Send message
            </button>
            {sent ? (
              <p className="text-sm text-muted" role="status">
                Your email app should open with this note. If it does not, write to {profile.email}.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
