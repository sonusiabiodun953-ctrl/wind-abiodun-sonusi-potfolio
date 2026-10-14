import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("sa-theme", next);
  } catch {
    /* private mode */
  }
  const theme = document.querySelector('meta[name="theme-color"]');
  if (theme) theme.setAttribute("content", next === "dark" ? "#0c141c" : "#102433");
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-bar sticky top-0 z-40 border-b border-t-4 border-line border-t-accent">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="live-dot shrink-0" aria-hidden="true" />
          <span className="truncate leading-tight">
            <span className="font-serif text-base text-ink">Sonusi A.</span>
            <span className="text-muted"> / </span>
            <span className="text-sm text-muted">data-analyst</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-muted hover:bg-soft hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="tap hidden h-10 items-center rounded-full border border-line bg-surface px-4 text-sm text-ink hover:border-accent sm:inline-flex"
          >
            Say hello
          </a>
          <button
            type="button"
            className="tap grid size-11 place-items-center rounded-full border border-line bg-surface text-ink"
            onClick={toggleTheme}
            aria-label="Toggle colour theme"
          >
            <Sun className="when-dark size-4" aria-hidden="true" />
            <Moon className="when-light size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="tap grid size-11 place-items-center rounded-full border border-line bg-surface text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-line px-5 py-3 md:hidden" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-xl px-3 py-3 text-base text-ink hover:bg-soft"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
