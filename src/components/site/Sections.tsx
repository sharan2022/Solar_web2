import heroImg from "@/assets/hero-rooftop-solar.jpg";
import industrialImg from "@/assets/industrial-solar.jpg";
import evImg from "@/assets/ev-charging.jpg";

export function Hero() {
  return (
    <section id="top" className="bg-gradient-deep text-deep-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow text-solar">Rooftop Solar · EV Charging</p>
          <h1 className="mt-5 text-4xl leading-[1.05] font-bold md:text-6xl">
            Turn your rooftop into a power plant.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-deep-foreground/75">
            Clean energy, smarter tomorrow. Aaryon Energy designs, installs and maintains solar systems for
            homes, businesses and factories across Tamil Nadu — plus turnkey EV
            charging stations built to last 25 years.
          </p>
          <a
            href="#contact"
            className="bg-gradient-solar mt-9 inline-flex rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift"
          >
            Get a free site assessment
          </a>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-deep-foreground/15 pt-8">
            {[
              ["25 yr", "Panel warranty"],
              ["Up to 90%", "Bill reduction"],
              ["Turnkey", "Design to grid sync"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-xl font-bold text-solar">{k}</dt>
                <dd className="mt-1 text-xs text-deep-foreground/65">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="overflow-hidden rounded-xl shadow-lift">
          <img
            src={heroImg}
            alt="Rooftop solar panel array on a modern home at sunset"
            width={1600}
            height={1008}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Residential Rooftops",
    copy: "Grid-tied and hybrid systems from 1 kW to 20 kW, sized to your bill and roof, with net-metering handled end to end.",
    points: ["Subsidy paperwork", "Hybrid + battery ready", "App-based monitoring"],
  },
  {
    title: "Commercial Rooftops",
    copy: "Offices, showrooms, schools and hospitals — cut peak tariff costs with systems engineered around your load profile.",
    points: ["CAPEX & OPEX models", "Load study included", "Fast payback design"],
  },
  {
    title: "Industrial Rooftops",
    copy: "High-capacity installations on sheet-metal and RCC factory roofs, with structural surveys and HT-side integration.",
    points: ["100 kW – MW scale", "Structural assessment", "SCADA integration"],
  },
  {
    title: "EV Charging Stations",
    copy: "AC and DC fast-charging setups for housing societies, fleets and commercial parking — solar-powered where possible.",
    points: ["AC 7.4 kW to DC 60 kW", "Solar carport canopies", "AMC & support"],
  },
];

export function Services() {
  return (
    <section id="solutions" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <p className="eyebrow text-accent">What we build</p>
      <h2 className="mt-4 max-w-2xl text-3xl font-bold md:text-4xl">
        Four solutions, one accountable installer
      </h2>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.title}
            className="rounded-xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lift"
          >
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {s.copy}
            </p>
            <ul className="mt-5 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Showcase() {
  return (
    <section id="why" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-accent">Why Aaryon</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Engineering-first, not panel-selling
            </h2>
            <div className="mt-8 space-y-6">
              {[
                [
                  "Site-specific design",
                  "Shadow analysis, roof orientation and load study before a single quote is issued.",
                ],
                [
                  "Tier-1 components only",
                  "Mono PERC / TOPCon modules, certified inverters and galvanised mounting structures.",
                ],
                [
                  "Compliance handled",
                  "TANGEDCO approvals, net-metering and subsidy documentation managed by our team.",
                ],
                [
                  "Lifetime service",
                  "Scheduled cleaning, performance audits and annual maintenance contracts.",
                ],
              ].map(([t, d]) => (
                <div key={t} className="border-l-2 border-accent pl-5">
                  <h3 className="text-base font-semibold">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <img
              src={industrialImg}
              alt="Industrial factory rooftop covered with solar panel rows"
              width={1200}
              height={900}
              loading="lazy"
              className="h-64 w-full rounded-xl object-cover shadow-soft"
            />
            <img
              src={evImg}
              alt="Solar-powered EV charging canopy with a car plugged in"
              width={1200}
              height={900}
              loading="lazy"
              className="h-64 w-full rounded-xl object-cover shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  ["01", "Site survey", "Roof measurement, shadow study and consumption analysis."],
  ["02", "System design", "Layout, yield simulation and a transparent fixed quote."],
  ["03", "Installation", "Structure, modules, inverter and safety wiring by in-house crews."],
  ["04", "Sync & service", "Net-meter approval, commissioning and ongoing maintenance."],
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <p className="eyebrow text-accent">How it works</p>
      <h2 className="mt-4 text-3xl font-bold md:text-4xl">
        From survey to switch-on in weeks
      </h2>
      <ol className="mt-12 grid gap-6 md:grid-cols-4">
        {steps.map(([n, t, d]) => (
          <li key={n} className="border-t border-border pt-5">
            <span className="font-display text-sm font-bold text-accent">{n}</span>
            <h3 className="mt-3 text-base font-semibold">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-gradient-deep text-deep-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow text-solar">Talk to us</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Tell us about your roof
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-deep-foreground/75">
            Share your monthly bill and roof area — we'll come back with an
            expected system size, generation estimate and payback period.
          </p>
        </div>
        <div className="rounded-xl border border-deep-foreground/15 bg-deep-foreground/5 p-7">
          <a
            href="tel:+919150864777"
            className="font-display text-2xl font-bold text-solar"
          >
            +91 91508 64777
          </a>
          <address className="mt-5 text-sm leading-relaxed text-deep-foreground/75 not-italic">
            Aaryon Energy
            <br />
            10, Ponmani Nagar, Ariyamangalam Zone
            <br />
            Trichy, Tamil Nadu – 620002
          </address>
          <a
            href="tel:+919150864777"
            className="bg-gradient-solar mt-7 inline-flex rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Call for a free assessment
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Aaryon Energy, Trichy.</span>
        <span>Rooftop solar · EV charging infrastructure</span>
      </div>
    </footer>
  );
}
