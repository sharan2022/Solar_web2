import logo from "@/assets/Aaryon Logo.png";

const links = [
  { label: "Services", href: "/#solutions" },
  { label: "Solutions", href: "/#systems" },
  { label: "Why Aaryon", href: "/#why" },
  { label: "Process", href: "/#process" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex min-h-24 max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3">
        <a href="/#top" className="flex items-center">
          <img
            src={logo}
            alt="Aaryon Energy Solutions"
            width={220}
            height={148}
            className="h-20 w-auto object-contain"
          />
        </a>
        <div className="order-3 flex w-full items-center justify-center gap-5 overflow-x-auto md:order-none md:w-auto md:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="tel:+919150864777"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          +91 91508 64777
        </a>
      </nav>
    </header>
  );
}
