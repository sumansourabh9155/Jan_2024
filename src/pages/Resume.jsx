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

const SectionCard = ({ eyebrow, title, subtitle, children, id }) => (
  <section
    id={id}
    className="scroll-mt-24 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-12 shadow-md"
  >
    <div className="inline-flex items-center gap-2 text-sm text-white mb-2">
      <span className="text-gray-400">◎</span> {eyebrow}
    </div>
    <h2 className={`text-2xl font-light text-white ${subtitle ? "mb-2" : "mb-6"}`}>
      {title}
    </h2>
    {subtitle && <p className="text-sm text-gray-400 mb-6 max-w-3xl">{subtitle}</p>}
    {children}
  </section>
);

const Resume = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <SeoHead
        title="Resume: Suman Sourabh — Product Designer | B2B SaaS & AI Products"
        description="Product Designer with 2.5+ years of end-to-end design, from 0-to-1 builds to scaling live platforms, across B2B SaaS, agentic AI, and conversational products in AdTech, HealthTech, and CMS."
        keywords="resume, product designer, interaction designer, ui/ux designer, shyftlabs, 0-to-1 products, design systems, AI-native design, agentic UX, React, experience"
        /* profilePic is a hashed bundle path — social crawlers need an absolute
           URL, so fall back to the site-wide OG card. */
        canonicalUrl="https://www.sumansourabh.com/resume"
      />
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-20">
        <section className="pt-24 pb-16">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm bg-white/10 border border-white/10 backdrop-blur-md mb-4">
              ◎ Product Designer
            </span>
            <h1 className="text-4xl font-light">
              Suman Sourabh,
              <span className="font-medium text-gray-400"> Product Designer</span>
            </h1>
            <p className="text-sm text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
              B2B SaaS &amp; AI Products. 2.5+ years of end-to-end design, from 0-to-1
              builds to scaling live platforms, across AdTech, HealthTech, and CMS.
              Rare edge:{" "}
              <span className="text-white">I ship what I design.</span>
            </p>

            {/* Download resume PDF — the thing recruiters actually want */}
            <a
              href={RESUME_PDF}
              download
              onClick={trackDownload}
              className="mt-6 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm
                hover:bg-[#d6f928] hover:scale-[1.02] active:scale-[0.99] transition-[transform,background-color] duration-200
                shadow-[0_0_20px_rgba(255,255,255,0.12)]"
            >
              <Download size={16} />
              Download Resume (PDF)
            </a>
          </div>

          {/* Proof strip — the four numbers, each linked to the case study it came from */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {PROOF.map((p) => (
              <Link
                key={p.label}
                to={p.to}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <div className="text-2xl font-semibold text-[#d6f928]">{p.value}</div>
                <div className="text-xs text-gray-300 mt-1">{p.label}</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mt-1">
                  {p.where}
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT - Profile Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg">
              <div className="relative rounded-xl overflow-hidden mb-4 aspect-square">
                <img
                  src={profilePic}
                  alt="Suman Sourabh"
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 text-xs text-white bg-black/50 backdrop-blur px-2 py-0.5 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Open to design roles
                </div>
              </div>
              <h2 className="text-lg font-semibold">Hello, I am Suman Sourabh</h2>
              {/* py-1 on each row rather than space-y on the parent — it keeps the
                  same visual rhythm while lifting the links to a 26px tap target. */}
              <div className="mt-3 text-sm text-gray-400">
                <p className="flex items-center gap-2 py-1">
                  <MapPin size={14} className="text-gray-500 shrink-0" /> Noida, India
                </p>
                <a
                  href="mailto:sumansourabh9155@gmail.com"
                  className="flex items-center gap-2 py-1 hover:text-white transition-colors break-all"
                >
                  <Mail size={14} className="text-gray-500 shrink-0" />{" "}
                  sumansourabh9155@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/sumansourabh9155/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-1 hover:text-white transition-colors"
                >
                  <Linkedin size={14} className="text-gray-500 shrink-0" />{" "}
                  linkedin.com/in/sumansourabh9155
                </a>
              </div>
            </div>

            {/* RIGHT - Summary */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg flex flex-col justify-between">
              <div>
                <p className="text-md font-semibold text-gray-300">
                  Product Designer — B2B SaaS &amp; AI Products.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  B.Tech. Computer Science Engineering — Machine Learning specialization
                </p>
                <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                  I design across the full arc: discovery and user research through user
                  flows, wireframes, interaction design, high-fidelity prototypes, design
                  systems, and post-launch iteration.
                </p>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  My CS + ML degree is the edge — I build in React and Tailwind, and I
                  design agentic, conversational AI experiences that engineers can
                  implement and models can actually serve.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link to="/contact" className="flex-1">
                  <button className="bg-white text-black w-full py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
                    Connect with me
                  </button>
                </Link>
                <Link to="/#case-studies" className="flex-1">
                  <button className="border border-white/20 text-white w-full py-2 rounded-full text-sm font-medium hover:bg-white/10 transition">
                    See the work
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About / How I Work — moved here from the landing page */}
        <SectionCard
          id="about"
          eyebrow="How I Work"
          title={
            <>
              One Designer.{" "}
              <span className="text-gray-400">Every room in the building.</span>
            </>
          }
        >
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
            <p>
              I design from the problem, not the pixels — I kept watching teams build the wrong thing
              because nobody validated the problem first. My <span className="text-white font-medium">CS degree
              with an ML specialization</span> means I can read the codebase, prototype in React, and hand
              engineering designs they can actually ship.
            </p>
            <p>
              I don&apos;t design from opinions. I run user interviews, pull{" "}
              <span className="text-white font-medium">behavioral data via SQL</span>, and validate with
              usability testing. Nothing ships until the team can point to the research, the interview
              quote, or the usability finding behind it.
            </p>
            <p>
              I&apos;ve designed and shipped <span className="text-white font-medium">AI-native experiences</span>{" "}
              with Claude and Gemini, built design systems adopted across products, and closed the
              design-to-code loop myself in React and Tailwind. Craft and velocity — not one at the cost of the other.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/40 border border-white/10 rounded-lg p-4">
              <Layers size={22} className="text-blue-400 mb-2" />
              <h4 className="text-sm font-semibold text-white mb-1">End-to-End Design</h4>
              <p className="text-xs text-gray-400">Research, interaction, visual, and design systems — I own the full design lifecycle, not just the handoff.</p>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-lg p-4">
              <Sparkles size={22} className="text-green-400 mb-2" />
              <h4 className="text-sm font-semibold text-white mb-1">AI-Native UX</h4>
              <p className="text-xs text-gray-400">I design agentic and conversational experiences — clarification, confirmation, and recovery patterns that models can actually serve.</p>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-lg p-4">
              <Code size={22} className="text-yellow-400 mb-2" />
              <h4 className="text-sm font-semibold text-white mb-1">Design Engineer Edge</h4>
              <p className="text-xs text-gray-400">CS/ML degree. I prototype in React and Tailwind, so I ship what I design — zero design-to-code drift.</p>
            </div>
          </div>
        </SectionCard>

        {/* Experience */}
        <SectionCard eyebrow="Work Experience" title="Where I’ve Worked">
          {/* Current role, broken out by product track */}
          <div className="border-l border-white/10 pl-5 md:pl-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
              <h3 className="text-lg font-semibold text-white">
                {SHYFTLABS.role} · {SHYFTLABS.company}
              </h3>
              <p className="text-xs font-mono uppercase tracking-widest text-gray-500 whitespace-nowrap">
                {SHYFTLABS.duration}
              </p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-3xl mb-6">
              {SHYFTLABS.intro}
            </p>

            <div className="space-y-6">
              {SHYFTLABS.tracks.map((track) => (
                <div
                  key={track.name}
                  className="bg-black/40 border border-white/10 rounded-xl p-5"
                >
                  {/* items-center, not items-baseline: the link carries py-2 for a
                      28px tap target, and centring keeps that padding symmetric. */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                    <h4 className="text-sm font-semibold text-white">{track.name}</h4>
                    <span className="text-xs text-gray-500">{track.context}</span>
                    {track.to && (
                      <Link
                        to={track.to}
                        className="text-xs text-[#d6f928] hover:underline ml-auto whitespace-nowrap py-2"
                      >
                        Read the case study →
                      </Link>
                    )}
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {track.points.map((point) => (
                      <li key={point} className="flex gap-2.5 leading-relaxed">
                        <span className="text-gray-600 shrink-0 mt-[3px]">—</span>
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
        <SectionCard
          eyebrow="Freelance & Early Experience"
          title="Before and alongside"
          subtitle="Consulting and studio work — where I learned to own scope end to end with no one above me to catch it."
        >
          <div className="space-y-8 border-l border-white/10 pl-5 md:pl-6">
            {EARLY.map((job) => (
              <div key={job.company}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <h3 className="text-base font-semibold text-white">
                    {job.role} · {job.company}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-500 whitespace-nowrap">
                    {job.duration}
                  </p>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-gray-400">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2.5 leading-relaxed">
                      <span className="text-gray-600 shrink-0 mt-[3px]">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Skills */}
        <SectionCard eyebrow="Capabilities" title="What I actually do">
          <div className="space-y-6">
            {SKILLS.map((s) => (
              <div key={s.group}>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#d6f928] mb-3">
                  {s.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-gray-300 bg-black/40 border border-white/10 px-3 py-1 rounded-md"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-md">
            <div className="inline-flex items-center gap-2 text-sm text-white mb-2">
              <span className="text-gray-400">◎</span> Education
            </div>
            <h2 className="text-2xl font-light mb-6 text-white">Where I trained</h2>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-[#d6f928]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white leading-snug">
                  B.Tech Computer Science Engineering
                </h3>
                <p className="text-sm text-gray-400 mt-0.5">
                  Machine Learning specialization
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Lovely Professional University · Jalandhar, Punjab
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mt-6 pt-6 border-t border-white/10">
              The degree is why I can read a codebase, write the SQL behind my own research,
              and design AI features with engineering at eye level.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-md">
            <div className="inline-flex items-center gap-2 text-sm text-white mb-2">
              <span className="text-gray-400">◎</span> Community &amp; Achievements
            </div>
            <h2 className="text-2xl font-light mb-6 text-white">
              Outside the day job
            </h2>
            <ul className="space-y-4">
              {ACHIEVEMENTS.map((a) => (
                <li key={a} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                  <Trophy size={14} className="text-[#d6f928] shrink-0 mt-1" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/#speaking"
              className="inline-block text-xs text-[#d6f928] hover:underline mt-6 pt-6 border-t border-white/10 w-full"
            >
              See photos from the seminars →
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
