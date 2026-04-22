import { useNavigate } from "react-router-dom";
import Bannergodiverse from "../../../assets/Godiverse/Banner.png";
import Bannercarter from "../../../assets/CarterRedesign/Banner.png";
import Banneruvc from "../../../assets/uvc/Banner.png";

const projects = [
  {
    title: "Carter Redesign + New DSP Platform",
    subtitle: "Ad-Tech · B2B · SaaS",
    year: "2024–2026",
    categories: ["Product Strategy", "0-to-1"],
    image: Bannercarter,
    link: "/Projects/Carter",
    outcome: "40% activation lift. 300% enterprise client growth. 0-to-1 DSP launched in 3 months.",
    accentColor: "blue",
  },
  {
    title: "CMS Architecture + 0-to-1 Site Builder",
    subtitle: "Healthcare · Enterprise CMS",
    year: "2025–2026",
    categories: ["Product Strategy", "Healthcare"],
    image: Banneruvc,
    link: "/Projects/UVC",
    outcome: "130+ clinic sites unified. Phased rollout with zero downtime. No-code builder shipped.",
    accentColor: "lime",
  },
  {
    title: "GoDiverse: 1-Page Resume Builder",
    subtitle: "SaaS · AI Integration",
    year: "2025",
    categories: ["Product Strategy", "SaaS"],
    image: Bannergodiverse,
    link: "/Projects/GoDiverse",
    outcome: "Under 8 min to first shared resume. 3 distribution channels. Claude-powered AI assist.",
    accentColor: "purple",
  },
];

const accentMap = {
  blue: { dot: "bg-blue-400", border: "group-hover:border-blue-400/40", glow: "group-hover:shadow-blue-500/10" },
  lime: { dot: "bg-[#d6f928]", border: "group-hover:border-[#d6f928]/40", glow: "group-hover:shadow-[#d6f928]/10" },
  purple: { dot: "bg-purple-400", border: "group-hover:border-purple-400/40", glow: "group-hover:shadow-purple-500/10" },
};

const CaseStudy = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#050505] pt-32 pb-24 px-4">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Gradient atmosphere */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#d6f928]/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase px-3 py-1 rounded border border-[#d6f928]/20 bg-[#d6f928]/5 mb-5">
            [ Case Studies ]
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                Real Products. <span className="text-gray-500 font-light">Real Decisions.</span>
              </h1>
              <p className="text-gray-400 mt-3 text-base max-w-2xl leading-relaxed">
                Full breakdowns — the user problem, the product calls I made, and the measurable outcomes.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d6f928] animate-pulse" />
              {projects.length} case studies
            </div>
          </div>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const accent = accentMap[project.accentColor];
            return (
              <div
                key={index}
                className={`group cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm
                  hover:-translate-y-1 hover:shadow-2xl ${accent.glow} ${accent.border}
                  transition-[transform,box-shadow,border-color] duration-300 will-change-transform`}
                onClick={() => navigate(project.link)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-hover:brightness-105"
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      {/* Meta row */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{project.subtitle}</span>
                        <span className="ml-auto text-xs font-mono text-gray-600">{project.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-2xl font-bold text-white mb-3 leading-tight transition-colors duration-200 group-hover:text-[#d6f928]">
                        {project.title}
                      </h3>

                      {/* Outcome */}
                      <p className="text-sm text-gray-400 leading-relaxed mb-6">
                        {project.outcome}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 bg-white/5 text-gray-400 border border-white/10 rounded-full font-mono transition-colors duration-200 group-hover:border-white/25 group-hover:text-white"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#d6f928] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                      <span>View full case study</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
