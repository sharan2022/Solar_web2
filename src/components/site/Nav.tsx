import logoAsset from "@/assets/aaryon-logo.png.asset.json";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Why Aaryon", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex h-24 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center">
          <img
            src={logoAsset.url}
            alt="Aaryon Energy Solutions — clean energy, smarter tomorrow"
            width={220}
            height={148}
            className="h-20 w-auto"
          />
        </a>
        <div className="hidden items-center gap-8 md:flex">
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
