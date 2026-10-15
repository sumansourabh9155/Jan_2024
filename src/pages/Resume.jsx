import { Link } from "react-router-dom";
import {
  Download,
  Layers,
  Sparkles,
  Code,
  GraduationCap,
  Trophy,
  MapPin,
  Mail,
  Linkedin,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profilePic from "../assets/Img/suman.jpg";
import SeoHead from "../components/SeoHead";

const RESUME_PDF = "/Suman_Sourabh_Product_Designer_Resume.pdf";

// The four numbers the resume leads with. Each one traces back to a case study
// on this site, so a reviewer can click through instead of taking it on faith.
const PROOF = [
  { value: "4.6/5", label: "Usability score", where: "Carter", to: "/carter" },
  { value: "3×", label: "Faster campaign launch", where: "Carter", to: "/carter" },
  { value: "+16%", label: "Booking conversion", where: "Atlas", to: "/atlas" },
  { value: "+30%", label: "Shipping velocity", where: "Design system", to: "/carter" },
];

// Grouped rather than a flat chip cloud — recruiters scan for a category first,
// then the specifics inside it.
const SKILLS = [
  {
    group: "Product Design",
    items: [
      "End-to-end product design", "Interaction design", "Information architecture",
      "User research", "Usability testing", "Journey mapping", "User flows & flow diagrams",
      "Wireframing", "Storyboarding", "Rapid prototyping", "High-fidelity prototyping",
      "Visual design", "Responsive design", "Accessibility (WCAG)",
    ],
  },
  {
    group: "Design Systems",
    items: [
      "Component library architecture", "Design tokens", "Figma advanced variables",
      "Documentation & governance", "Design-to-code parity",
    ],
  },
  {
    group: "AI-Native Design",
    items: [
      "Agentic & conversational UX", "Human-AI interaction patterns", "Prompt design",
      "AI-assisted design workflows",
    ],
  },
  {
    group: "Development — design-engineer edge",
    items: ["React", "Tailwind CSS", "HTML/CSS", "Python & SQL for research analytics", "REST API literacy"],
  },
  {
    group: "Tools",
    items: ["Figma", "Sketch", "Miro", "Jira", "Linear", "Claude Code", "Cursor", "Lovable"],
  },
];

// Shyftlabs is split by product rather than listed as one bullet pile — the
// three tracks are genuinely different problems and read that way.
const SHYFTLABS = {
  role: "Product Designer",
  company: "Shyftlabs",
  duration: "Jan 2024 – Present · Noida, India",
  intro:
    "Own end-to-end design for the retail media and platforms portfolio — research, flows, systems, and launch — embedded with engineering through implementation.",
  tracks: [
    {
      name: "Design System",
      context: "Carter, Atlas, Simfluent, Tonal, SkipTheGroomer",
      points: [
        "Architected the company-wide component library — tokens, variables, states, and documentation — adopted across every product; increased shipping velocity 30% and reduced design-code drift.",
      ],
    },
    {
      name: "Carter",
      context: "Retail-media DSP · scaling a live platform",
      to: "/carter",
      points: [
        "Led design across 12 DSP integrations as 1 of 2 designers in an 80+ person org (12-person core team); scored 4.6/5 in usability testing.",
        "Designed an agentic AI campaign assistant (Claude API) that drafts campaigns from a brief, with human review of every section and per-network spec checks; cut launch time 3× (1.5 hrs → 30 min).",
        "Found why campaigns stalled in draft via interviews, session recordings, and SQL funnel analysis; got leadership to prioritize the fix and rebuilt the form as a short guided flow, cutting draft abandonment 8%.",
        "Designed a multi-DSP launcher unifying 12 workflows into one form, with one master creative auto-adapted per network; cross-network launch now takes one campaign's time.",
      ],
    },
    {
      name: "Atlas",
      context: "0-to-1 healthcare CMS + booking · 130-clinic network · 8-person team, 2 PMs",
      to: "/atlas",
      points: [
        "Solo-designed 6 WCAG 2.1 AA templates; +16% booking conversion, +41% organic traffic; reused for a larger network.",
        "Designed a relational B2B CMS — edit content, SEO, and reviews once, update everywhere — plus a 0-to-1 no-code site builder, and prototyped data flows as Claude artifacts from schemas and PRDs to confirm feasibility before Figma.",
      ],
    },
  ],
};

const EARLY = [
  {
    role: "UI/UX Consultant",
    company: "GoDiverse",
    duration: "Oct 2025 – Nov 2025 · UK (remote)",
    points: [
      "Designed the supplier onboarding flow for a UK supplier-diversity SaaS platform, and a one-page sales brochure used to pitch corporate brands.",
    ],
  },
  {
    role: "Product Consultant",
    company: "Raikar",
    duration: "Aug 2023 – Feb 2024 · E-commerce",
    points: [
      "Owned brand identity, UX/UI, and development (React, PHP, Oracle SQL) for an e-commerce launch, leading a 5-person team from concept to live storefront.",
    ],
  },
  {
    role: "UI/UX Design Intern",
    company: "Kraftbase",
    duration: "Jun 2023 – Aug 2023 · Design studio, remote",
    points: [
      "Shipped 20+ designs across client brands: mobile-app wireframes and mockups, marketing websites, and design-to-development handoffs.",
    ],
  },
];

const ACHIEVEMENTS = [
  "Figma Community designs copied 1,200+ times; one landing-page design replicated 500+ times.",
  "Led 3 public design seminars at LPU, 150–200 attendees each, including hands-on Figma practice sessions.",
  "Won the Kotlin Hackathon conducted by Google for students.",
  "Founded a profitable D2C bedsheet business — ₹60,000 profit in the first month.",
];

// The resume download is the highest-intent action on this site and was
// previously untracked. Guarded so it is a no-op in dev, where GA never loads.
const trackDownload = () => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "resume_download", {
      file_name: "Suman_Sourabh_Product_Designer_Resume.pdf",
    });
  }
};

// Each section was a raised glass card — `bg-surface-3/70` + `backdrop-blur` +
// `shadow-md`, a dark-theme idiom that on a white page reads as five grey
// rectangles stacked down the screen. They are bands now, like every other
// page on the site: a rule, an eyebrow, a serif head.
//
// `bandIndex` alternates white and cream in the same rhythm as the landing
// page, so the resume reads as the same document as the rest of the site.
const SectionCard = ({ eyebrow, title, subtitle, children, id, band = 0 }) => (
  <section
    id={id}
    className={`scroll-mt-24 px-6 py-20 ${band % 2 ? "bg-cream" : "bg-surface"}`}
  >
    <div className="max-w-6xl mx-auto">
      <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-5">
        {eyebrow}
      </p>
      <h2
        className={`font-display font-normal text-ink text-4xl md:text-5xl leading-[1.1] tracking-[-0.01em] [text-wrap:balance] ${subtitle ? "mb-3" : "mb-10"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[0.9375rem] text-ink-muted leading-[1.7] mb-10 max-w-3xl">{subtitle}</p>
      )}
      {children}
    </div>
  </section>
);

const Resume = () => {
  return (
    <div className="bg-surface text-ink min-h-screen">
      <SeoHead
        title="Resume: Suman Sourabh — Product Designer | B2B SaaS & AI Products"
        description="Product Designer with 2.5+ years of end-to-end design, from 0-to-1 builds to scaling live platforms, across B2B SaaS, agentic AI, and conversational products in AdTech, veterinary healthcare, and CMS."
        keywords="resume, product designer, interaction designer, ui/ux designer, shyftlabs, 0-to-1 products, design systems, AI-native design, agentic UX, React, experience"
        /* profilePic is a hashed bundle path — social crawlers need an absolute
           URL, so fall back to the site-wide OG card. */
        canonicalUrl="https://www.sumansourabh.com/resume"
      />
      <Navbar />
      <main id="main">
        <section className="bg-surface bg-plusgrid px-6 pt-36 pb-20">
          <div className="max-w-6xl mx-auto">
          {/* Left-aligned, on the page's own margin, like every other page. */}
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-5">
              Product Designer
            </p>
            <h1 className="font-display text-[3rem] md:text-[4rem] font-normal leading-[0.98] tracking-[-0.02em]">
              Suman Sourabh,
              <span className="text-ink-faint italic"> Product Designer</span>
            </h1>
            <p className="text-[0.9375rem] text-ink-muted mt-6 max-w-2xl leading-[1.7]">
              B2B SaaS &amp; AI Products. 2.5+ years of end-to-end design, from 0-to-1
              builds to scaling live platforms, across AdTech, veterinary healthcare, and CMS.
              Rare edge:{" "}
              <span className="text-ink">I ship what I design.</span>
            </p>

            {/* Download resume PDF — the thing recruiters actually want */}
            <a
              href={RESUME_PDF}
              download
              onClick={trackDownload}
              className="mt-8 inline-flex items-center gap-2 bg-ink text-surface px-6 py-3 rounded-full font-medium text-[0.9375rem]
                hover:bg-ink-soft active:scale-[0.99] transition-[transform,background-color,color] duration-200"
            >
              <Download size={16} />
              Download Resume (PDF)
            </a>
          </div>

          {/* Proof strip — the four numbers, each linked to the case study it
              came from. Figures in sans and tabular so the column compares. */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 mb-16">
            {PROOF.map((p) => (
              // These four are the most recruiter-facing numbers on the site —
              // the first thing someone scanning the resume should hit. Same
              // display register as the case studies' outcome figures.
              <Link
                key={p.label}
                to={p.to}
                className="group border-t-2 border-ink pt-6"
              >
                <div className="text-[2.75rem] sm:text-[3.25rem] font-medium text-ink leading-[0.9] tracking-[-0.035em] tabular">{p.value}</div>
                <div className="text-[0.8125rem] text-ink-soft mt-4 leading-[1.6]">{p.label}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink-faint mt-2 group-hover:text-ink transition-colors">
                  {p.where}
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* LEFT - Profile */}
            <div className="border-t border-line pt-8">
              <div className="relative overflow-hidden mb-6 aspect-square rounded-sm">
                <img
                  src={profilePic}
                  alt="Suman Sourabh"
                  className="rounded-sm w-full h-full object-cover"
                />
              </div>
              <p className="text-[0.8125rem] text-ink-faint flex items-center gap-2.5 mb-5">
                <span aria-hidden="true" className="w-1.5 h-1.5 bg-ink/40 rounded-full shrink-0" />
                Open to design roles
              </p>
              <h2 className="font-display text-[1.5rem] font-normal leading-tight">Hello, I am Suman Sourabh</h2>
              {/* py-1 on each row rather than space-y on the parent — it keeps the
                  same visual rhythm while lifting the links to a 26px tap target. */}
              <div className="mt-3 text-sm text-ink-muted">
                <p className="flex items-center gap-2 py-1">
                  <MapPin size={14} className="text-ink-faint shrink-0" /> Noida, India
                </p>
                <a
                  href="mailto:sumansourabh9155@gmail.com"
                  className="flex items-center gap-2 py-1 hover:text-ink transition-colors break-all"
                >
                  <Mail size={14} className="text-ink-faint shrink-0" />{" "}
                  sumansourabh9155@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/sumansourabh9155/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-1 hover:text-ink transition-colors"
                >
                  <Linkedin size={14} className="text-ink-faint shrink-0" />{" "}
                  linkedin.com/in/sumansourabh9155
                </a>
              </div>
            </div>

            {/* RIGHT - Summary */}
            <div className="border-t border-line pt-8 flex flex-col justify-between">
              <div>
                <p className="text-[0.9375rem] font-medium text-ink">
                  Product Designer — B2B SaaS &amp; AI Products.
                </p>
                <p className="text-[0.8125rem] text-ink-faint mt-1.5">
                  B.Tech. Computer Science Engineering — Machine Learning specialization
                </p>
                <p className="text-[0.9375rem] text-ink-muted mt-6 leading-[1.7]">
                  I design across the full arc: discovery and user research through user
                  flows, wireframes, interaction design, high-fidelity prototypes, design
                  systems, and post-launch iteration.
                </p>
                <p className="text-[0.9375rem] text-ink-muted mt-4 leading-[1.7]">
                  My CS + ML degree is the edge — I build in React and Tailwind, and I
                  design agentic, conversational AI experiences that engineers can
                  implement and models can actually serve.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-7 gap-y-3 mt-8">
                {/* Two underlined text actions rather than two pills. The one
                    filled control on this page is the resume download, which is
                    the thing a recruiter is here for. */}
                <Link
                  to="/contact"
                  className="text-[0.9375rem] text-ink border-b border-line-strong hover:border-ink transition-colors pb-0.5"
                >
                  Connect with me
                </Link>
                <Link
                  to="/#case-studies"
                  className="text-[0.9375rem] text-ink border-b border-line-strong hover:border-ink transition-colors pb-0.5"
                >
                  See the work
                </Link>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* About / How I Work — moved here from the landing page */}
        <SectionCard band={1}
          id="about"
          eyebrow="How I Work"
          title={
            <>
              One Designer.{" "}
              <span className="text-ink-muted">Every room in the building.</span>
            </>
          }
        >
          <div className="space-y-4 text-sm text-ink-soft leading-relaxed max-w-3xl">
            <p>
              I design from the problem, not the pixels — I kept watching teams build the wrong thing
              because nobody validated the problem first. My <span className="text-ink font-medium">CS degree
              with an ML specialization</span> means I can read the codebase, prototype in React, and hand
              engineering designs they can actually ship.
            </p>
            <p>
              I don&apos;t design from opinions. I run user interviews, pull{" "}
              <span className="text-ink font-medium">behavioral data via SQL</span>, and validate with
              usability testing. Nothing ships until the team can point to the research, the interview
              quote, or the usability finding behind it.
            </p>
            <p>
              I&apos;ve designed and shipped <span className="text-ink font-medium">AI-native experiences</span>{" "}
              with Claude and Gemini, built design systems adopted across products, and closed the
              design-to-code loop myself in React and Tailwind. Craft and velocity — not one at the cost of the other.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-t border-line pt-5">
              <Layers size={22} className="text-ink-faint mb-3" />
              <h4 className="text-[0.9375rem] font-medium text-ink mb-2">End-to-End Design</h4>
              <p className="text-[0.8125rem] text-ink-muted leading-[1.7]">Research, interaction, visual, and design systems — I own the full design lifecycle, not just the handoff.</p>
            </div>
            <div className="border-t border-line pt-5">
              <Sparkles size={22} className="text-ink-faint mb-3" />
              <h4 className="text-[0.9375rem] font-medium text-ink mb-2">AI-Native UX</h4>
              <p className="text-[0.8125rem] text-ink-muted leading-[1.7]">I design agentic and conversational experiences — clarification, confirmation, and recovery patterns that models can actually serve.</p>
            </div>
            <div className="border-t border-line pt-5">
              <Code size={22} className="text-ink-faint mb-3" />
              <h4 className="text-[0.9375rem] font-medium text-ink mb-2">Design Engineer Edge</h4>
              <p className="text-[0.8125rem] text-ink-muted leading-[1.7]">CS/ML degree. I prototype in React and Tailwind, so I ship what I design — zero design-to-code drift.</p>
            </div>
          </div>
        </SectionCard>

        {/* Experience */}
        <SectionCard band={2} eyebrow="Work Experience" title="Where I’ve Worked">
          {/* Current role, broken out by product track */}
          <div className="border-l border-line pl-5 md:pl-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
              <h3 className="text-[1.125rem] font-medium text-ink">
                {SHYFTLABS.role} · {SHYFTLABS.company}
              </h3>
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint whitespace-nowrap tabular">
                {SHYFTLABS.duration}
              </p>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed max-w-3xl mb-6">
              {SHYFTLABS.intro}
            </p>

            <div className="space-y-6">
              {SHYFTLABS.tracks.map((track) => (
                <div
                  key={track.name}
                  className="border-t border-line pt-5"
                >
                  {/* items-center, not items-baseline: the link carries py-2 for a
                      28px tap target, and centring keeps that padding symmetric. */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                    <h4 className="text-[0.9375rem] font-medium text-ink">{track.name}</h4>
                    <span className="text-xs text-ink-faint">{track.context}</span>
                    {track.to && (
                      <Link
                        to={track.to}
                        className="text-[0.8125rem] text-ink-faint hover:text-ink transition-colors ml-auto whitespace-nowrap py-2 border-b border-line-strong"
                      >
                        Read the case study →
                      </Link>
                    )}
                  </div>
                  <ul className="space-y-2 text-sm text-ink-muted">
                    {track.points.map((point) => (
                      <li key={point} className="flex gap-2.5 leading-relaxed">
                        <span className="text-ink-ghost shrink-0 mt-[3px]">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        {/* Freelance & early experience */}
        <SectionCard band={3}
          eyebrow="Freelance & Early Experience"
          title="Before and alongside"
          subtitle="Consulting and studio work — where I learned to own scope end to end with no one above me to catch it."
        >
          <div className="space-y-8 border-l border-line pl-5 md:pl-6">
            {EARLY.map((job) => (
              <div key={job.company}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <h3 className="text-[1.0625rem] font-medium text-ink">
                    {job.role} · {job.company}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint whitespace-nowrap tabular">
                    {job.duration}
                  </p>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-ink-muted">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2.5 leading-relaxed">
                      <span className="text-ink-ghost shrink-0 mt-[3px]">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Skills */}
        <SectionCard band={4} eyebrow="Capabilities" title="What I actually do">
          <div className="space-y-6">
            {SKILLS.map((s) => (
              <div key={s.group}>
                <h3 className="text-[11px] uppercase tracking-[0.18em] text-ink-faint mb-3">
                  {s.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="text-[0.8125rem] text-ink-soft border-b border-line pb-0.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Education + Community, side by side to keep the page tight */}
        <div className="bg-cream px-6 py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <section>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-5">
              Education
            </p>
            <h2 className="font-display text-[2rem] font-normal mb-8 text-ink leading-tight">Where I trained</h2>
            <div className="flex gap-4 border-t border-line pt-6">
              <GraduationCap size={18} className="text-ink-faint shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-ink leading-snug">
                  B.Tech Computer Science Engineering
                </h3>
                <p className="text-sm text-ink-muted mt-0.5">
                  Machine Learning specialization
                </p>
                <p className="text-xs text-ink-faint mt-2">
                  Lovely Professional University · Jalandhar, Punjab
                </p>
              </div>
            </div>
            <p className="text-xs text-ink-faint leading-relaxed mt-6 pt-6 border-t border-line">
              The degree is why I can read a codebase, write the SQL behind my own research,
              and design AI features with engineering at eye level.
            </p>
          </section>

          <section>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-5">
              Community &amp; Achievements
            </p>
            <h2 className="font-display text-[2rem] font-normal mb-8 text-ink leading-tight">
              Outside the day job
            </h2>
            <ul className="space-y-4 border-t border-line pt-6">
              {ACHIEVEMENTS.map((a) => (
                <li key={a} className="flex gap-3 text-[0.9375rem] text-ink-muted leading-[1.7]">
                  <Trophy size={14} className="text-ink-faint shrink-0 mt-1.5" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/#speaking"
              className="inline-block text-[0.8125rem] text-ink border-b border-line-strong hover:border-ink transition-colors mt-8 pb-0.5"
            >
              See photos from the seminars →
            </Link>
          </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
