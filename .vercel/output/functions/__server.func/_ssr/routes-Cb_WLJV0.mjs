import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cb_WLJV0.js
var import_jsx_runtime = require_jsx_runtime();
var Aaryon_Logo_default = "/assets/Aaryon%20Logo-CXUlSVTL.png";
var links = [
	{
		label: "Solutions",
		href: "#solutions"
	},
	{
		label: "Why Aaryon",
		href: "#why"
	},
	{
		label: "Process",
		href: "#process"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex min-h-24 max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Aaryon_Logo_default,
						alt: "Aaryon Energy Solutions",
						width: 220,
						height: 148,
						className: "h-20 w-auto object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "order-3 flex w-full items-center justify-center gap-5 overflow-x-auto md:order-none md:w-auto md:gap-8",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-muted-foreground transition-colors hover:text-accent",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "tel:+919150864777",
					className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
					children: "+91 91508 64777"
				})
			]
		})
	});
}
var hero_rooftop_solar_default = "/assets/hero-rooftop-solar-CIqKA7qp.jpg";
var industrial_solar_default = "/assets/industrial-solar-Rf9MikOK.jpg";
var ev_charging_default = "/assets/ev-charging-C_M-8kvP.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "bg-gradient-deep text-deep-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-solar",
					children: "Rooftop Solar · EV Charging"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 text-4xl leading-[1.05] font-bold md:text-6xl",
					children: "Turn your rooftop into a power plant."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-lg text-base leading-relaxed text-deep-foreground/75",
					children: "Clean energy, smarter tomorrow. Aaryon Energy designs, installs and maintains solar systems for homes, businesses and factories across Tamil Nadu — plus turnkey EV charging stations built to last 25 years."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "bg-gradient-solar mt-9 inline-flex rounded-md px-6 py-3 text-sm font-semibold text-deep shadow-lift",
					children: "Get a free site assessment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-deep-foreground/15 pt-8",
					children: [
						["25 yr", "Panel warranty"],
						["Up to 90%", "Bill reduction"],
						["Turnkey", "Design to grid sync"]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-xl font-bold text-solar",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-xs text-deep-foreground/65",
						children: v
					})] }, v))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl shadow-lift",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_rooftop_solar_default,
					alt: "Rooftop solar panel array on a modern home at sunset",
					width: 1600,
					height: 1008,
					className: "h-full w-full object-cover"
				})
			})]
		})
	});
}
var services = [
	{
		title: "Residential Rooftops",
		copy: "Grid-tied and hybrid systems from 1 kW to 20 kW, sized to your bill and roof, with net-metering handled end to end.",
		points: [
			"Subsidy paperwork",
			"Hybrid + battery ready",
			"App-based monitoring"
		]
	},
	{
		title: "Commercial Rooftops",
		copy: "Offices, showrooms, schools and hospitals — cut peak tariff costs with systems engineered around your load profile.",
		points: [
			"CAPEX & OPEX models",
			"Load study included",
			"Fast payback design"
		]
	},
	{
		title: "Industrial Rooftops",
		copy: "High-capacity installations on sheet-metal and RCC factory roofs, with structural surveys and HT-side integration.",
		points: [
			"100 kW – MW scale",
			"Structural assessment",
			"SCADA integration"
		]
	},
	{
		title: "EV Charging Stations",
		copy: "AC and DC fast-charging setups for housing societies, fleets and commercial parking — solar-powered where possible.",
		points: [
			"AC 7.4 kW to DC 60 kW",
			"Solar carport canopies",
			"AMC & support"
		]
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "solutions",
		className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-accent",
				children: "What we build"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 max-w-2xl text-3xl font-bold md:text-4xl",
				children: "Four solutions, one accountable installer"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: s.copy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-2",
							children: s.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }), p]
							}, p))
						})
					]
				}, s.title))
			})
		]
	});
}
function Showcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-accent",
						children: "Why Aaryon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-bold md:text-4xl",
						children: "Engineering-first, not panel-selling"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-6",
						children: [
							["Site-specific design", "Shadow analysis, roof orientation and load study before a single quote is issued."],
							["Tier-1 components only", "Mono PERC / TOPCon modules, certified inverters and galvanised mounting structures."],
							["Compliance handled", "TANGEDCO approvals, net-metering and subsidy documentation managed by our team."],
							["Lifetime service", "Scheduled cleaning, performance audits and annual maintenance contracts."]
						].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l-2 border-accent pl-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
								children: d
							})]
						}, t))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: industrial_solar_default,
						alt: "Industrial factory rooftop covered with solar panel rows",
						width: 1200,
						height: 900,
						loading: "lazy",
						className: "h-64 w-full rounded-xl object-cover shadow-soft"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: ev_charging_default,
						alt: "Solar-powered EV charging canopy with a car plugged in",
						width: 1200,
						height: 900,
						loading: "lazy",
						className: "h-64 w-full rounded-xl object-cover shadow-soft"
					})]
				})]
			})
		})
	});
}
var steps = [
	[
		"01",
		"Site survey",
		"Roof measurement, shadow study and consumption analysis."
	],
	[
		"02",
		"System design",
		"Layout, yield simulation and a transparent fixed quote."
	],
	[
		"03",
		"Installation",
		"Structure, modules, inverter and safety wiring by in-house crews."
	],
	[
		"04",
		"Sync & service",
		"Net-meter approval, commissioning and ongoing maintenance."
	]
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "process",
		className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-accent",
				children: "How it works"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl font-bold md:text-4xl",
				children: "From survey to switch-on in weeks"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 grid gap-6 md:grid-cols-4",
				children: steps.map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-border pt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-bold text-accent",
							children: n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-base font-semibold",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: d
						})
					]
				}, n))
			})
		]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-gradient-deep text-deep-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-20 md:py-24 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-solar",
					children: "Talk to us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-bold md:text-4xl",
					children: "Tell us about your roof"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-sm leading-relaxed text-deep-foreground/75",
					children: "Share your monthly bill and roof area — we'll come back with an expected system size, generation estimate and payback period."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-deep-foreground/15 bg-deep-foreground/5 p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+919150864777",
						className: "font-display text-2xl font-bold text-solar",
						children: "+91 91508 64777"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
						className: "mt-5 text-sm leading-relaxed text-deep-foreground/75 not-italic",
						children: [
							"Aaryon Energy",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"10, Ponmani Nagar, Ariyamangalam Zone",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Trichy, Tamil Nadu – 620002"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+919150864777",
						className: "bg-gradient-solar mt-7 inline-flex rounded-md px-6 py-3 text-sm font-semibold text-deep",
						children: "Call for a free assessment"
					})
				]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Aaryon Energy, Trichy."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rooftop solar · EV charging infrastructure" })]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Showcase, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
