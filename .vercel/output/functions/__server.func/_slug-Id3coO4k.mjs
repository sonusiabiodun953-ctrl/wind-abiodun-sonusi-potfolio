import { a as projects, n as getProject } from "./_ssr/portfolio-CXYU2IOy.mjs";
import { x as require_jsx_runtime, y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowLeft, h as Download } from "./_libs/lucide-react.mjs";
import { n as Route } from "./_ssr/router-CsVg8r8R.mjs";
import { t as SiteShell } from "./_ssr/shell-G3hhfgFi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Id3coO4k.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudyPage() {
	const { slug } = Route.useParams();
	const project = getProject(slug);
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-5 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-4xl text-ink",
				children: "That project is not on this site."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: "The published case studies are the three below."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-2",
				children: projects.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/work/$slug",
					params: { slug: item.slug },
					className: "text-accent",
					children: item.title
				}) }, item.slug))
			})
		]
	}) });
	const images = [project.image, ...project.gallery];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-5 py-12 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				hash: "projects",
				className: "inline-flex items-center gap-2 text-sm text-muted hover:text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "size-4",
					"aria-hidden": "true"
				}), "All projects"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-xs tracking-[0.18em] text-accent uppercase",
				children: [
					project.category,
					" · ",
					project.year
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-5xl text-ink",
				children: project.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted",
				children: project.oneLiner
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 flex flex-wrap gap-2",
				children: project.tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted",
					children: tool
				}, tool))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "mt-8 overflow-hidden rounded-card border border-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image.src,
					alt: project.image.alt,
					width: project.image.width,
					height: project.image.height,
					className: "w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "bg-surface px-4 py-3 text-sm text-muted",
					children: project.image.caption
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: project.pdf,
					download: true,
					className: "tap inline-flex h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "size-4",
						"aria-hidden": "true"
					}), "View case study (PDF)"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Problem",
				children: project.problem
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Approach",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletList, { items: project.approach })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "What the data showed",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletList, { items: project.insights })
			}),
			images.slice(1).map((image) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "mt-8 overflow-hidden rounded-card border border-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image.src,
					alt: image.alt,
					width: image.width,
					height: image.height,
					className: "w-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "bg-surface px-4 py-3 text-sm text-muted",
					children: image.caption
				})]
			}, image.src)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl text-ink",
						children: "What I learned"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletList, { items: project.learned })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line bg-soft p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl text-ink",
						children: "Limitations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletList, { items: project.limitations })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "What I would do next",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletList, { items: project.recommendations })
			}),
			project.slug === "global-child-mortality" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm text-muted",
				children: [
					"Primary source: World Health Organization, Global Health Observatory,",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.who.int/data/gho",
						className: "text-accent underline underline-offset-4",
						children: "who.int/data/gho"
					}),
					". This page uses published open data. It is not an official WHO product."
				]
			}) : null
		]
	}) });
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-serif text-3xl text-ink",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 text-ink",
			children
		})]
	});
}
function BulletList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-3 space-y-3",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-3 text-sm leading-relaxed",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 size-1.5 shrink-0 rounded-full bg-accent",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
		}, item))
	});
}
//#endregion
export { CaseStudyPage as component };
