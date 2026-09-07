import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { o as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Nav-D_PIGIkW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-5 md:min-h-24 md:py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#top",
					className: "flex min-w-0 items-center",
					onClick: () => setMenuOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Aaryon_Logo_default,
						alt: "Aaryon Energy Solutions",
						width: 220,
						height: 148,
						className: "h-14 w-auto object-contain sm:h-16 md:h-20"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-expanded": menuOpen,
					"aria-controls": "primary-navigation",
					"aria-label": menuOpen ? "Close navigation menu" : "Open navigation menu",
					onClick: () => setMenuOpen((open) => !open),
					className: "inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-border text-primary md:hidden",
					children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "primary-navigation",
					className: `${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border-b border-border bg-background px-4 py-3 shadow-soft md:static md:flex md:flex-row md:items-center md:justify-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`,
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						onClick: () => setMenuOpen(false),
						className: "rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-accent md:px-0 md:py-2 md:hover:bg-transparent",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "tel:+919150864777",
					className: "hidden shrink-0 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex sm:px-4 sm:text-sm",
					children: "+91 91508 64777"
				})
			]
		})
	});
}
//#endregion
export { Nav as t };
