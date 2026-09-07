import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Nav-Cg8O-Obt.js
var import_jsx_runtime = require_jsx_runtime();
var Aaryon_Logo_default = "/assets/Aaryon%20Logo-DlslZa1j.png";
var links = [
	{
		label: "Services",
		href: "/#solutions"
	},
	{
		label: "Solutions",
		href: "/#systems"
	},
	{
		label: "Why Aaryon",
		href: "/#why"
	},
	{
		label: "Process",
		href: "/#process"
	},
	{
		label: "Projects",
		href: "/#projects"
	},
	{
		label: "Contact",
		href: "/#contact"
	}
];
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex min-h-24 max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#top",
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
//#endregion
export { Nav as t };
