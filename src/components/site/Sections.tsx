import heroImg from "@/assets/hero-rooftop-solar.jpg";
import industrialImg from "@/assets/industrial-solar.jpg";
import evImg from "@/assets/ev-charging.jpg";
import svcRooftop from "@/assets/svc-rooftop.jpg";
import svcGroundMount from "@/assets/svc-groundmount.jpg";
import svcPump from "@/assets/svc-pump.jpg";
import svcEv from "@/assets/svc-ev.jpg";
import svcOm from "@/assets/svc-om.jpg";
import svcConsult from "@/assets/svc-consult.jpg";
import sysOnGrid from "@/assets/sys-ongrid.jpg";
import sysOffGrid from "@/assets/sys-offgrid.jpg";
import sysHybrid from "@/assets/sys-hybrid.jpg";

export function Hero() {
  return (
    <section id="top" className="bg-gradient-deep text-deep-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow text-solar">Solar EPC · Powering a Sustainable Tomorrow</p>
          <h1 className="mt-5 text-4xl leading-[1.05] font-bold md:text-6xl">
            Smart solar solutions for a better tomorrow.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-deep-foreground/75">
            Aaryon Energy Solutions delivers end-to-end solar EPC for residential,
            commercial, industrial and agricultural customers — designed, engineered
            and commissioned with our Technical &amp; EPC Partner, SPC Solar Technology.
          </p>
          <a
            href="#contact"
            className="bg-gradient-solar mt-9 inline-flex rounded-md px-6 py-3 text-sm font-semibold text-deep shadow-lift"
          >
            Get a free site assessment
          </a>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-deep-foreground/15 pt-8">
            {[
              ["16+ yrs", "Solar experience"],
              ["12 MW+", "Rooftop commissioned"],
              ["1200+", "Homes powered"],
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
    title: "Rooftop Solar Solutions",
    copy: "On-grid, off-grid and hybrid rooftop systems for homes, businesses and factories — engineered around your roof and load profile.",
    points: ["Residential & commercial", "Industrial sheet-metal & RCC", "Net-metering handled"],
    img: svcRooftop,
    alt: "Rooftop solar panel array installed on residential buildings",
  },
  {
    title: "Ground Mount Solar Solutions",
    copy: "Utility-style ground-mounted plants on open land, with structural design, civil works and full grid integration.",
    points: ["Land feasibility study", "Galvanised structures", "HT-side integration"],
    img: svcGroundMount,
    alt: "Rows of ground mounted solar panels on open land",
  },
  {
    title: "Solar Water Pump Solutions",
    copy: "Solar-powered pumping for agriculture and remote sites — reliable irrigation without diesel or grid dependence.",
    points: ["AC & DC pump sets", "Ideal for farms", "Low running cost"],
    img: svcPump,
    alt: "Solar powered water pump irrigating a green farm field",
  },
  {
    title: "EV Charging Solutions",
    copy: "AC and DC charging setups for homes, societies, fleets and commercial parking — solar-powered where possible.",
    points: ["AC & DC fast charging", "Solar carport canopies", "AMC & support"],
    img: svcEv,
    alt: "Electric car charging under a solar carport canopy",
  },
  {
    title: "Operations & Maintenance",
    copy: "Scheduled cleaning, performance monitoring and preventive maintenance so your plant keeps generating at design yield.",
    points: ["Remote monitoring", "Preventive maintenance", "AMC contracts"],
    img: svcOm,
    alt: "Technician cleaning and inspecting rooftop solar panels",
  },
  {
    title: "Energy Consulting & Audit",
    copy: "Energy audits, load studies and savings modelling to right-size your system and shorten payback.",
    points: ["Consumption analysis", "Savings & ROI estimate", "Subsidy guidance"],
    img: svcConsult,
    alt: "Engineer reviewing energy audit charts and solar plant drawings",
  },
];

export function Models() {
  return (
    <section id="models" className="mx-auto max-w-6xl px-5 pt-20 md:pt-28">
      <p className="eyebrow text-accent">Investment models</p>
      <h2 className="mt-4 text-3xl font-bold md:text-4xl">
        Choose how you want to invest
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {[
          [
            "CAPEX Model",
            "You own the solar plant with a one-time investment — full savings, incentives and accelerated depreciation benefits.",
          ],
          [
            "RESCO Model",
            "Zero upfront investment — we build, own and maintain the plant, and you pay only for the units generated.",
          ],
        ].map(([t, d]) => (
          <div key={t} className="rounded-xl border border-accent/30 bg-card p-7 shadow-soft">
            <h3 className="text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="solutions" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <p className="eyebrow text-accent">Our services</p>
      <h2 className="mt-4 max-w-2xl text-3xl font-bold md:text-4xl">
        End-to-end solar EPC, under one accountable team
      </h2>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
          >
            <img
              src={s.img}
              alt={s.alt}
              width={800}
              height={600}
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="p-7">
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const systems = [
  {
    title: "On-Grid Solar",
    flow: "Solar Panels → Grid-Tie Inverter → Net Meter → Grid",
    points: [
      "Reduce electricity bills",
      "Net metering benefits",
      "Export excess power to the grid",
      "Ideal for homes, businesses and industries",
    ],
  },
  {
    title: "Off-Grid Solar",
    flow: "Solar Panels → Charge Controller → Battery Bank → Load",
    points: [
      "100% independent power",
      "Ideal for remote locations",
      "Battery backup for uninterrupted power",
      "Reliable and cost effective",
    ],
  },
  {
    title: "Hybrid Solar",
    flow: "Solar Panels → Hybrid Inverter → Battery → Grid / Load",
    points: [
      "Combines solar, battery and grid power",
      "Uninterrupted power supply",
      "Maximum savings and energy independence",
      "Smart energy management",
    ],
  },
];

export function Systems() {
  return (
    <section id="systems" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="eyebrow text-accent">System types</p>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          On-grid, off-grid or hybrid
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {systems.map((s) => (
            <article
              key={s.title}
              className="rounded-xl border border-border bg-card p-7 shadow-soft"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-xs font-medium tracking-wide text-accent">
                {s.flow}
              </p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {[
            [
              "CAPEX Model",
              "You own the solar plant with a one-time investment — full savings, incentives and accelerated depreciation benefits.",
            ],
            [
              "RESCO Model",
              "Zero upfront investment — we build, own and maintain the plant, and you pay only for the units generated.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-accent/30 bg-card p-7">
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  return (
    <section id="why">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-accent">Why Aaryon</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Why choose Aaryon Energy Solutions
            </h2>
            <div className="mt-8 space-y-6">
              {[
                [
                  "High quality solar products",
                  "Modules, inverters and structures sourced from trusted global brands.",
                ],
                [
                  "Expert engineering",
                  "Professional installation by certified teams working to strict safety standards.",
                ],
                [
                  "Customized solutions",
                  "Systems sized to your energy needs, with transparent pricing and timely delivery.",
                ],
                [
                  "After-sales support",
                  "AMC services, monitoring and maintenance for maximum generation and faster ROI.",
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
  ["01", "Site survey", "We analyse your energy needs and site feasibility."],
  ["02", "System design", "Customized system design for maximum efficiency."],
  ["03", "Engineering & approvals", "Engineering, documentation and statutory approvals."],
  ["04", "Supply & installation", "Quality products and professional installation by our experts."],
  ["05", "Testing & commissioning", "Rigorous testing and smooth commissioning."],
  ["06", "Operation & maintenance", "Ongoing support for optimum performance."],
];

export function Process() {
  return (
    <section id="process" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="eyebrow text-accent">How it works</p>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          From survey to switch-on
        </h2>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([n, t, d]) => (
            <li key={n} className="border-t border-border pt-5">
              <span className="font-display text-sm font-bold text-accent">{n}</span>
              <h3 className="mt-3 text-base font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const projects = [
  ["Residential project", "Coimbatore, Tamil Nadu", "5 kW · On-Grid", "Reduced monthly electricity bill by 80%"],
  ["Commercial project", "Chennai, Tamil Nadu", "50 kW · On-Grid", "Achieved 70% savings on energy costs"],
  ["Industrial project", "Hosur, Tamil Nadu", "250 kW · On-Grid", "Improved energy efficiency by 60%"],
  ["Institutional project", "Salem, Tamil Nadu", "100 kW · On-Grid", "Supporting a green campus initiative"],
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <p className="eyebrow text-accent">Our partner's projects</p>
      <h2 className="mt-4 text-3xl font-bold md:text-4xl">
        Delivered across Tamil Nadu
      </h2>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map(([t, loc, cap, impact]) => (
          <article key={t} className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-base font-semibold">{t}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{loc}</p>
            <p className="mt-4 font-display text-lg font-bold text-accent">{cap}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{impact}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 text-xs text-muted-foreground">
        Projects executed by our Technical &amp; EPC Partner, SPC Solar Technology.
      </p>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-gradient-deep text-deep-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow text-solar">Get in touch</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Let's build a sustainable future together
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-deep-foreground/75">
            Share your monthly bill and roof or land area — we'll come back with an
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
          <a
            href="mailto:info.aaryonenergies@gmail.com"
            className="mt-3 block text-sm text-deep-foreground/80 underline-offset-4 hover:underline"
          >
            info.aaryonenergies@gmail.com
          </a>
          <address className="mt-5 text-sm leading-relaxed text-deep-foreground/75 not-italic">
            Aaryon Energy Solutions
            <br />
            10, Ponmani Nagar, Ariyamangalam
            <br />
            Trichy — 620 002, Tamil Nadu, India
          </address>
          <a
            href="tel:+919150864777"
            className="bg-gradient-solar mt-7 inline-flex rounded-md px-6 py-3 text-sm font-semibold text-deep"
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
        <span>© {new Date().getFullYear()} Aaryon Energy Solutions, Trichy.</span>
        <span>Solar EPC · Rooftop · Ground mount · Pumps · EV charging</span>
      </div>
    </footer>
  );
}
