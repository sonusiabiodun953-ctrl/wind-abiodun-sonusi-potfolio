import { i as __toESM } from "../_runtime.mjs";
import { a as projects, i as profile, o as skills, r as process, s as softSkills, t as categories } from "./portfolio-CXYU2IOy.mjs";
import { q as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sigma, c as Palette, d as MapPin, f as Mail, g as Database, h as Download, m as FileText, n as Workflow, o as Sheet, p as LayoutDashboard, s as Phone } from "../_libs/lucide-react.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { t as SiteShell } from "./shell-G3hhfgFi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C17qtNcV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().trim().min(2, "Please add your name."),
	email: string().trim().email("Use a valid email so I can reply."),
	message: string().trim().min(12, "A sentence or two is enough.")
});
function Contact() {
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(event) {
		event.preventDefault();
		const parsed = schema.safeParse(values);
		if (!parsed.success) {
			const next = {};
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
		const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name}\n${parsed.data.email}`);
		window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.22em] text-accent uppercase",
						children: "05 — Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-serif text-4xl text-ink",
						children: "Tell me the decision you need made."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "A role, a dataset, or a dashboard that is not being used. I read every note."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${profile.email}`,
							className: "inline-flex items-center gap-3 text-ink hover:text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "size-4 text-accent",
								"aria-hidden": "true"
							}), profile.email]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${profile.phone}`,
							className: "inline-flex items-center gap-3 text-quiet",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-4",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs tracking-[0.14em] uppercase",
								children: "Direct line"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: profile.phoneDisplay
							})] })]
						}) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-muted",
						children: [
							profile.location,
							" · ",
							profile.availability
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				noValidate: true,
				className: "rounded-card border border-line border-l-4 border-l-accent bg-surface p-5 md:col-span-7 md:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm text-muted",
							children: [
								"Name",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "name",
									autoComplete: "name",
									value: values.name,
									onChange: (event) => setValues((current) => ({
										...current,
										name: event.target.value
									})),
									className: "mt-2 h-12 w-full rounded-xl border border-line bg-bg px-3 text-base text-ink"
								}),
								errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-accent",
									children: errors.name
								}) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm text-muted",
							children: [
								"Email",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "email",
									type: "email",
									autoComplete: "email",
									value: values.email,
									onChange: (event) => setValues((current) => ({
										...current,
										email: event.target.value
									})),
									className: "mt-2 h-12 w-full rounded-xl border border-line bg-bg px-3 text-base text-ink"
								}),
								errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-accent",
									children: errors.email
								}) : null
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block text-sm text-muted",
						children: [
							"Message",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								rows: 5,
								value: values.message,
								onChange: (event) => setValues((current) => ({
									...current,
									message: event.target.value
								})),
								className: "mt-2 w-full rounded-xl border border-line bg-bg px-3 py-3 text-base text-ink"
							}),
							errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-accent",
								children: errors.message
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "tap inline-flex h-12 items-center rounded-full bg-ink px-5 text-sm font-medium text-bg",
							children: "Send message"
						}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							role: "status",
							children: [
								"Your email app should open with this note. If it does not, write to ",
								profile.email,
								"."
							]
						}) : null]
					})
				]
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "border-b border-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:items-end md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.22em] text-accent uppercase",
						children: "Portfolio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-serif text-5xl text-ink sm:text-6xl",
						children: profile.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-lg text-muted",
						children: profile.stackLine
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 max-w-xl space-y-4 text-base text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I build dashboards that make an uneven result obvious: where the burden sits, which accounts or regions carry it, and what a team should do next. Recent work covers WHO child-survival data, a 14-table logistics operation, and a multi-table sales book." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I am looking for analyst roles and project work where the brief is a real decision — a model that holds up, visuals people will actually open, and recommendations that stay inside the evidence." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "size-4 text-accent",
									"aria-hidden": "true"
								}), profile.location]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-line",
								"aria-hidden": "true",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.availability })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#projects",
							className: "tap inline-flex h-12 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-ink",
							children: "View projects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "tap inline-flex h-12 items-center rounded-full border border-line bg-surface px-5 text-sm font-medium text-ink",
							children: "Contact"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "md:col-span-5 md:justify-self-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "portrait portrait-wash relative mx-auto w-full max-w-64 overflow-hidden rounded-card border border-line bg-soft md:mx-0 md:max-w-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full flex-col items-center justify-end px-6 pb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-7xl text-ink",
							children: "SA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 w-full border-t border-line pt-4 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs tracking-[0.18em] text-muted uppercase",
								children: "Headshot"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-ink",
								children: profile.name
							})]
						})]
					})
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-3",
				children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "bg-bg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `/work/${project.slug}`,
						className: "block px-5 py-5 hover:bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs tracking-[0.16em] text-accent uppercase",
							children: [
								"0",
								index + 1,
								" · ",
								project.category
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block font-serif text-xl text-ink",
							children: project.title
						})]
					})
				}, project.slug))
			})
		})]
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.22em] text-accent uppercase",
					children: "04 — How I work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-xl font-serif text-4xl text-ink",
					children: "From the business question to a recommendation someone can use."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-6 md:grid-cols-5",
					children: process.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t-2 border-accent pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-2xl text-accent",
								children: item.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-serif text-xl text-ink",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: item.text
							})
						]
					}, item.step))
				})
			]
		})
	});
}
function cn(...parts) {
	return parts.filter(Boolean).join(" ");
}
function Projects() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const visible = projects.filter((project) => filter === "All" || project.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-[0.22em] text-accent uppercase",
							children: "03 — Selected work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-serif text-4xl text-ink",
							children: "Three projects, read as decisions."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: "Hover a dashboard for the short read. Every case study is also a PDF you can keep."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					role: "group",
					"aria-label": "Filter projects",
					children: categories.map((category) => {
						const selected = filter === category;
						const count = category === "All" ? projects.length : projects.filter((project) => project.category === category).length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": selected,
							onClick: () => setFilter(category),
							className: cn("tap inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm", selected ? "border-accent bg-accent text-accent-ink" : "border-line bg-surface text-ink hover:border-accent"),
							children: [category, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: selected ? "text-accent-ink" : "text-muted",
								children: count
							})]
						}, category);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-6",
				children: visible.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rise overflow-hidden rounded-card border border-line bg-surface md:grid md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `/work/${project.slug}`,
						className: "group relative block md:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.image.src,
							alt: project.image.alt,
							width: project.image.width,
							height: project.image.height,
							className: "shot-img aspect-video h-full w-full object-cover object-top"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shot-veil pointer-events-none absolute inset-0 flex items-end p-5 opacity-0 transition duration-200 group-hover:opacity-100 max-md:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-band-ink",
								children: project.hover
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 p-5 md:col-span-7 md:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-[0.14em] text-accent uppercase",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.category }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-line",
										"aria-hidden": "true",
										children: "/"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted normal-case tracking-normal",
										children: project.year
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-3xl text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `/work/${project.slug}`,
										className: "hover:text-accent",
										children: project.title
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-muted",
									children: project.oneLiner
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-ink md:sr-only",
									children: project.hover
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "flex flex-wrap gap-2",
								children: project.tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-full border border-line bg-bg px-3 py-1 text-xs text-muted",
									children: tool
								}, tool))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2 text-sm text-ink",
								children: project.bullets.slice(0, 3).map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 size-1.5 shrink-0 rounded-full bg-accent",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bullet })]
								}, bullet))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto flex flex-wrap gap-3 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `/work/${project.slug}`,
									className: "tap inline-flex h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-accent-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
										className: "size-4",
										"aria-hidden": "true"
									}), "Read write-up"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: project.pdf,
									download: true,
									className: "tap inline-flex h-11 items-center gap-2 rounded-full border border-line bg-bg px-4 text-sm font-medium text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										className: "size-4",
										"aria-hidden": "true"
									}), "View case study (PDF)"]
								})]
							})
						]
					})]
				}, project.slug))
			}, filter)]
		})
	});
}
var icons = {
	layout: LayoutDashboard,
	sheet: Sheet,
	database: Database,
	workflow: Workflow,
	sigma: Sigma,
	palette: Palette
};
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.22em] text-accent uppercase",
						children: "02 — Skills"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-serif text-4xl text-ink",
						children: "Tools I use on the work, not a wishlist."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Power BI carries the story. Excel, Power Query, SQL, and DAX are how the story stays attached to the rows."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3 sm:grid-cols-2",
					children: skills.map((skill) => {
						const Icon = icons[skill.icon];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-card border border-line bg-surface p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-10 place-items-center rounded-xl bg-soft text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-4",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-xl text-ink",
									children: skill.name
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: skill.note
							})]
						}, skill.name);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 border-t border-line pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-2xl text-ink",
						children: "How the work is framed"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-4 md:grid-cols-3",
						children: softSkills.map((skill, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-[0.16em] text-accent uppercase",
								children: ["0", index + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-medium text-ink",
								children: skill.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: skill.note
							})
						] }, skill.name))
					})]
				})]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
//#endregion
export { Home as component };
