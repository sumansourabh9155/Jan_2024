import { Link } from "react-router-dom";
import { BarChart2, Layout, FileText, ArrowRight } from "lucide-react";

// Banner imagery — same hero art the old /projects page used.
import BannerCarter from "../../assets/CarterRedesign/Banner.png";
import BannerUvc from "../../assets/uvc/Banner.png";
import BannerGodiverse from "../../assets/Godiverse/Banner.png";

const projectData = [
  {
    title: "Carter",
    subtitle: "Ad Platform Redesign & 0-to-1 DSP Launch",
    category: "Ad-Tech · B2B · SaaS",
    link: "/Projects/carter",
    image: BannerCarter,
    icon: <Layout size={16} className="text-blue-400" />,
    accent: "blue",
    summary:
      "Advertisers stalled in a dense, single-screen setup. The call: split it into a guided 5-stage flow — trading more steps for fewer decisions each, betting completion mattered more than speed.",
    stats: [
      { value: "4.6/5", label: "Usability score" },
      { value: "+40%", label: "Activation" },
    ],
  },
  {
    title: "UVC Clinics",
    subtitle: "CMS Architecture Across 130+ Locations",
    category: "Enterprise CMS · Healthcare",
    link: "/Projects/uvc",
    image: BannerUvc,
    icon: <BarChart2 size={16} className="text-[#d6f928]" />,
    accent: "lime",
    summary:
      "130 clinics each wanted a bespoke site. The call: standardize to 5 archetypes instead — the trade-off that made the whole network maintainable without gutting local identity.",
    stats: [
      { value: "+41%", label: "Organic traffic" },
      { value: "+29%", label: "Bookings" },
    ],
  },
  {
    title: "GoDiverse",
    subtitle: "1-Page Profile Builder with AI Assist",
    category: "SaaS · AI Integration",
    link: "/Projects/GoDiverse",
    image: BannerGodiverse,
    icon: <FileText size={16} className="text-purple-400" />,
    accent: "purple",
    summary:
      "Every builder was bloated or generic. The call: scope the whole product around one hard constraint — a single page — to force clarity over feature-count.",
    stats: [
      { value: "< 8 min", label: "To first share" },
      { value: "3-in-1", label: "Distribution" },
    ],
  },
];

const accentMap = {
  blue: { border: "hover:border-blue-400/40", glow: "hover:shadow-blue-500/10", text: "group-hover:text-blue-300" },
  lime: { border: "hover:border-[#d6f928]/40", glow: "hover:shadow-[#d6f928]/10", text: "group-hover:text-[#d6f928]" },
  purple: { border: "hover:border-purple-400/40", glow: "hover:shadow-purple-500/10", text: "group-hover:text-purple-300" },
};

const Projects = () => {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      data-testid="projects-section"
      className="scroll-mt-24 py-24 px-4 bg-black border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-4">
            [ Case Studies ]
          </div>
          <h2
            id="case-studies-heading"
            className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Real Products. <span className="text-gray-500">Real Decisions.</span>
          </h2>
          <p className="text-gray-300 mt-4 text-base leading-relaxed">
            Three products across ad-tech, healthcare, and AI — the user problem,
            the design call I made, and what it produced.
          </p>
          <p className="text-gray-600 mt-3 text-xs">
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
                className={`group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm
                  transition-[transform,box-shadow,border-color] duration-300 will-change-transform
                  hover:-translate-y-1 hover:shadow-xl ${accent.glow} ${accent.border}`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:min-h-[260px]
                    ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Image side */}
                  <Link
                    to={p.link}
                    className="block overflow-hidden bg-black/40 h-48 sm:h-56 lg:h-full"
                    aria-label={`${p.title} case study`}
                  >
                    <img
                      src={p.image}
                      alt={`${p.title} — ${p.subtitle}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] will-change-transform"
                    />
                  </Link>

                  {/* Content side */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    {/* Meta */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="bg-white/5 border border-white/10 rounded-full p-1.5 flex items-center justify-center">
                        {p.icon}
                      </div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        {p.category}
                      </span>
                    </div>

                    <h3 className={`font-heading text-2xl md:text-3xl font-bold text-white leading-tight transition-colors duration-200 ${accent.text}`}>
                      {p.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{p.subtitle}</p>

                    <p className="text-gray-300 text-sm leading-relaxed mt-3">{p.summary}</p>

                    {/* Outcome stats + CTA on one row to keep the card compact */}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        {p.stats.map((s) => (
                          <div key={s.label}>
                            <span className="font-heading text-lg font-bold text-white">{s.value}</span>
                            <span className="text-[11px] text-gray-500 ml-1.5">{s.label}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={p.link}
                        className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm
                          hover:bg-[#d6f928] hover:scale-[1.02] active:scale-[0.99] transition-[transform,background-color] duration-200
                          shadow-[0_0_20px_rgba(255,255,255,0.12)] w-full sm:w-fit whitespace-nowrap"
                      >
                        Read case study
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
