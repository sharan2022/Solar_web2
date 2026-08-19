const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Why Aaryon", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="bg-gradient-aqua grid h-8 w-8 place-items-center rounded-md font-display text-sm font-bold text-accent-foreground">
            A
          </span>
          <span className="font-display text-base font-bold tracking-tight">
            Aaryon Energy
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
