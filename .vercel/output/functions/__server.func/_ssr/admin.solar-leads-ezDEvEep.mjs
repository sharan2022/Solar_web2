import { i as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Nav } from "./Nav-DfkTfEId.mjs";
import { i as getPricing, n as downloadCsv, r as formatCurrency, t as STORAGE_KEY } from "./solar-calculations-CL469tqE.mjs";
import { i as RefreshCw, n as ShieldCheck, o as ExternalLink, s as Download } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.solar-leads-ezDEvEep.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function readCalculations() {
	const stored = window.localStorage.getItem(STORAGE_KEY);
	return stored ? JSON.parse(stored) : [];
}
function SolarLeadsAdmin() {
	const [calculations, setCalculations] = (0, import_react.useState)([]);
	function refresh() {
		setCalculations(readCalculations());
	}
	(0, import_react.useEffect)(() => {
		refresh();
		window.addEventListener("storage", refresh);
		return () => window.removeEventListener("storage", refresh);
	}, []);
	const totalCapacity = calculations.reduce((sum, item) => sum + item.capacity, 0);
	const estimatedRevenue = calculations.reduce((sum, item) => sum + getPricing(item.capacity).afterSubsidy, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-5 py-12 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Internal workspace"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-3xl font-bold md:text-5xl",
							children: "Saved calculations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground",
							children: "Review submitted capacity estimates and download the saved calculations as a CSV for Google Sheets."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: refresh,
							className: "inline-flex h-11 items-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 16 }), " Refresh"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => downloadCsv(calculations),
							disabled: calculations.length === 0,
							className: "inline-flex h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 }), " Export CSV"]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Leads captured",
							value: calculations.length.toLocaleString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Total estimated capacity",
							value: `${totalCapacity.toFixed(1)} kW`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Approx. post-subsidy value",
							value: formatCurrency(estimatedRevenue)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-soft",
					children: calculations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 py-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-semibold",
								children: "No leads captured yet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Completed calculator submissions will appear here automatically."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/solar-calculator",
								className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline",
								children: ["Open calculator ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 15 })]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[900px] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-surface text-xs uppercase tracking-wide text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Phone"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Monthly units"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Capacity"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Total"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Subsidy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Approx. payable"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Submitted"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border",
								children: calculations.map((item) => {
									const pricing = getPricing(item.capacity);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "transition hover:bg-surface/70",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "whitespace-nowrap px-5 py-4 font-semibold",
												children: item.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "whitespace-nowrap px-5 py-4 text-muted-foreground",
												children: item.phone
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "whitespace-nowrap px-5 py-4",
												children: [item.units.toLocaleString(), " kWh"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "whitespace-nowrap px-5 py-4 font-semibold text-accent",
												children: [item.capacity.toFixed(2), " kW"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "whitespace-nowrap px-5 py-4",
												children: formatCurrency(pricing.total)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "whitespace-nowrap px-5 py-4",
												children: formatCurrency(pricing.subsidy)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "whitespace-nowrap px-5 py-4 font-semibold text-primary",
												children: formatCurrency(pricing.afterSubsidy)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "whitespace-nowrap px-5 py-4 text-xs text-muted-foreground",
												children: new Date(item.createdAt).toLocaleString("en-IN")
											})
										]
									}, item.id);
								})
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-xs leading-relaxed text-muted-foreground",
					children: "This browser-only admin view is not an authentication boundary. Connect the shared storage helper to a protected backend before using it for production customer data."
				})
			]
		})]
	});
}
function Metric({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-display text-2xl font-bold text-primary",
			children: value
		})]
	});
}
//#endregion
export { SolarLeadsAdmin as component };
