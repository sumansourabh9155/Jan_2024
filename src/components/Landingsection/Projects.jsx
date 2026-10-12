// import { ArrowRight, BarChart2, FileText, Layout } from "lucide-react";

import { ArrowRight, BarChart2, Layout, Smartphone } from "lucide-react";

import BannerAtlas from "../../assets/atlas/Banner.png";
// Banner imagery — same hero art the old /projects page used.
import BannerCarter from "../../assets/CarterRedesign/Banner.png";
import BannerPoppins from "../../assets/poppins/cover.png";
import { Link } from "react-router-dom";

const projectData = [
  {
    title: "Carter",
    subtitle: "Retail-Media DSP — Scaling a Live Platform",
    category: "Ad-Tech · B2B · SaaS",
    link: "/carter",
    image: BannerCarter,
    icon: <Layout size={16} className="text-blue-700" />,
    accent: "blue",
    summary:
      "Advertisers stalled in a dense, single-screen setup. The call: rebuild it as a short guided flow — trading more steps for fewer decisions each, betting completion mattered more than speed.",
    stats: [
      { value: "4.6/5", label: "Usability score" },
      { value: "3×", label: "Faster campaign launch" },
    ],
  },
  {
    title: "Poppins",
    subtitle: "Conversational Finance App for iOS",
    category: "iOS · Consumer Fintech",
    link: "/poppins",
    image: BannerPoppins,
    icon: <Smartphone size={16} className="text-emerald-800" />,
    accent: "emerald",
    badge: "Concluded",
    summary:
      "Finance apps lead with net worth — a number that answers nothing about today. The call: one Safe to Spend figure that always shows its arithmetic, and two named voices so reassurance and opportunity never sound the same.",
    stats: [
      { value: "Full process", label: "whiteboard → hi-fi" },
      { value: "Concluded", label: "stopped before build" },
    ],
  },
  {
    title: "Atlas",
    subtitle: "0-to-1 CMS + Booking Across a 130-Clinic Network",
    category: "Enterprise CMS · Veterinary Care",
    link: "/atlas",
    image: BannerAtlas,
    icon: <BarChart2 size={16} className="text-accent-ink" />,
    accent: "lime",
    summary:
      "A 130-clinic network each wanting a bespoke site. The call: standardize to 6 templates instead — the trade-off that made the whole network maintainable without gutting local identity.",
    stats: [
      { value: "+41%", label: "Organic traffic" },
      { value: "+16%", label: "Booking conversion" },
    ],
  },
];

// Per-card accent. Only the border and the heading carry colour on hover —
// the lift itself is a neutral shadow. A tinted shadow was a dark-theme glow:
// blue-500 at 10% over white is invisible, and the lime one read as a smudge.
const accentMap = {
  blue: { border: "hover:border-blue-500/50", text: "group-hover:text-blue-700" },
  lime: { border: "hover:border-accent-ink/50", text: "group-hover:text-accent-ink" },
  purple: { border: "hover:border-purple-500/50", text: "group-hover:text-purple-700" },
  violet: { border: "hover:border-violet-500/50", text: "group-hover:text-violet-700" },
  emerald: { border: "hover:border-emerald-600/50", text: "group-hover:text-emerald-800" },
};

const Projects = () => {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      data-testid="projects-section"
      className="scroll-mt-24 py-24 px-4 bg-surface border-t border-line"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-ink tracking-widest uppercase mb-4">
            [ Case Studies ]
          </div>
          <h2
            id="case-studies-heading"
            className="font-heading text-4xl md:text-5xl font-bold text-ink leading-tight"
          >
            Real Products. <span className="text-ink-faint">Real Decisions.</span>
          </h2>
          <p className="text-ink-soft mt-4 text-base leading-relaxed">
            Three products across ad-tech, consumer fintech, and veterinary care — the user
            problem, the design call I made, and what it produced.
          </p>
          <p className="text-ink-ghost mt-3 text-xs">
            Figures are internal metrics measured post-launch.
          </p>
        </div>

        {/* Compact feature rows — alternating image side */}
        <div className="space-y-6">
          {projectData.map((p, i) => {
            const accent = accentMap[p.accent];
            const flip = i % 2 === 1;

            return (
              <article
                key={p.title}
                className={`group relative bg-surface-3/70 border border-line rounded-2xl overflow-hidden backdrop-blur-sm
                  transition-[transform,box-shadow,border-color] duration-300 will-change-transform
                  hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)] ${accent.border}
                  focus-within:ring-2 focus-within:ring-accent-ink/60`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:min-h-[260px]
                    ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Image side — the whole card is the link, so this isn't interactive itself */}
                  <div className="block overflow-hidden bg-surface-3/70 h-48 sm:h-56 lg:h-full">
                    <img
                      src={p.image}
                      alt={`${p.title} — ${p.subtitle}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] will-change-transform"
                    />
                  </div>

                  {/* Content side */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    {/* Meta */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="bg-surface border border-line rounded-full p-1.5 flex items-center justify-center">
                        {p.icon}
                      </div>
                      <span className="text-[10px] font-mono text-ink-faint uppercase tracking-widest">
                        {p.category}
                      </span>
                      {p.badge && (
                        // Live work pulses; concluded work reads as a quiet, factual status.
                        <span
                          className={`inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full border ${p.badgeLive
                              ? "text-violet-700 bg-violet-500/10 border-violet-400/30"
                              : "text-ink-muted bg-surface-3/70 border-line"
                            }`}
                        >
                          <span
                            className={`w-1 h-1 rounded-full ${p.badgeLive ? "bg-violet-400 animate-pulse" : "bg-ink-faint"
                              }`}
                          />
                          {p.badge}
                        </span>
                      )}
                    </div>

                    <h3 className={`font-heading text-2xl md:text-3xl font-bold text-ink leading-tight transition-colors duration-200 ${accent.text}`}>
                      {p.title}
                    </h3>
                    <p className="text-ink-muted text-sm mt-1">{p.subtitle}</p>

                    <p className="text-ink-soft text-sm leading-relaxed mt-3">{p.summary}</p>

                    {/* Outcome stats + CTA on one row to keep the card compact */}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        {p.stats.map((s) => (
                          <div key={s.label}>
                            <span className="font-heading text-lg font-bold text-ink">{s.value}</span>
                            <span className="text-[11px] text-ink-faint ml-1.5">{s.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Visual affordance only — the real link is the card-wide overlay below */}
                      <span
                        aria-hidden="true"
                        // The text has to invert with the fill. Lime is a light
                        // colour: leaving the label white on hover dropped it to
                        // ~1.4:1 — the CTA went blank under the cursor.
                        className="inline-flex items-center justify-center gap-2 bg-ink text-surface px-5 py-2.5 rounded-full font-bold text-sm
                          group-hover:bg-accent group-hover:text-ink transition-colors duration-200
                          shadow-[0_6px_20px_rgba(0,0,0,0.14)] w-full sm:w-fit whitespace-nowrap"
                      >
                        Read case study
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card-wide link — one link per card, covering the whole surface.
                    Kept transform-free so it can't re-anchor and flicker on hover. */}
                <Link
                  to={p.link}
                  aria-label={`Read the ${p.title} case study — ${p.subtitle}`}
                  className="absolute inset-0 z-10 focus:outline-none"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
