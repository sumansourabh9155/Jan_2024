import { BarChart2, Layout, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const projectData = [
  {
    title: "Carter",
    subtitle: "Ad Platform Redesign & DSP Launch",
    category: "Ad-Tech · B2B · SaaS",
    link: "/Projects/carter",
    icon: <Layout size={16} className="text-blue-400" />,
    badge: "Activation · Design System · 0→1",
    summary: "No confidence signals in a complex ad activation funnel. Redesigned to a guided 5-stage flow. 40% activation lift, 300% enterprise client growth.",
    visual: (
      <svg className="w-full h-28 mt-4 mb-2" viewBox="0 0 400 110" fill="none">
        <defs>
          <linearGradient id="carter-bar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="carter-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#d6f928" stopOpacity="0.8" />
          </linearGradient>
          <filter id="carter-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Baseline */}
        <line x1="40" y1="95" x2="360" y2="95" stroke="white" strokeOpacity="0.06" />
        {/* 5 Rising bars */}
        <rect x="50" y="75" width="36" height="20" rx="4" fill="url(#carter-bar)" stroke="#3b82f6" strokeOpacity="0.15" />
        <rect x="110" y="60" width="36" height="35" rx="4" fill="url(#carter-bar)" stroke="#3b82f6" strokeOpacity="0.2" />
        <rect x="170" y="48" width="36" height="47" rx="4" fill="url(#carter-bar)" stroke="#3b82f6" strokeOpacity="0.25" />
        <rect x="230" y="33" width="36" height="62" rx="4" fill="url(#carter-bar)" stroke="#3b82f6" strokeOpacity="0.3" />
        <rect x="290" y="15" width="36" height="80" rx="4" fill="url(#carter-bar)" stroke="#3b82f6" strokeOpacity="0.5" />
        {/* Rising trend curve */}
        <path d="M68 72 C100 68, 120 58, 128 57 S160 46, 188 45 S220 32, 248 30 S280 16, 308 12" stroke="url(#carter-line)" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Data points on curve */}
        <circle cx="68" cy="72" r="3" fill="#3b82f6" fillOpacity="0.4" />
        <circle cx="128" cy="57" r="3" fill="#3b82f6" fillOpacity="0.5" />
        <circle cx="188" cy="45" r="3" fill="#3b82f6" fillOpacity="0.6" />
        <circle cx="248" cy="30" r="3.5" fill="#3b82f6" fillOpacity="0.7" />
        <circle cx="308" cy="12" r="5" fill="#d6f928" fillOpacity="0.8" filter="url(#carter-glow)" />
        {/* +40% label near peak */}
        <text x="322" y="10" fill="#d6f928" fillOpacity="0.6" fontSize="9" fontFamily="monospace">+40%</text>
        {/* Stage labels */}
        <text x="56" y="105" fill="white" fillOpacity="0.15" fontSize="7" fontFamily="monospace">S1</text>
        <text x="116" y="105" fill="white" fillOpacity="0.15" fontSize="7" fontFamily="monospace">S2</text>
        <text x="176" y="105" fill="white" fillOpacity="0.15" fontSize="7" fontFamily="monospace">S3</text>
        <text x="236" y="105" fill="white" fillOpacity="0.15" fontSize="7" fontFamily="monospace">S4</text>
        <text x="296" y="105" fill="white" fillOpacity="0.2" fontSize="7" fontFamily="monospace">S5</text>
      </svg>
    ),
  },
  {
    title: "UVC Clinics",
    subtitle: "CMS Rollout Across 130+ Locations",
    category: "Enterprise CMS · Healthcare",
    link: "/Projects/uvc",
    icon: <BarChart2 size={16} className="text-[#d6f928]" />,
    badge: "Scale · Roadmap · Tech Debt",
    summary: "130+ clinics, no unified CMS. Led phased rollout (5 → 20 → all) to unify digital presence without downtime.",
    visual: (
      <svg className="w-full h-28 mt-4 mb-2" viewBox="0 0 400 110" fill="none">
        <defs>
          <radialGradient id="uvc-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d6f928" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d6f928" stopOpacity="0" />
          </radialGradient>
          <filter id="uvc-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Central hub with pulse rings */}
        <circle cx="110" cy="55" r="30" fill="url(#uvc-hub)" />
        <circle cx="110" cy="55" r="22" stroke="#d6f928" strokeOpacity="0.15" strokeDasharray="3 5" fill="none" />
        <circle cx="110" cy="55" r="12" stroke="#d6f928" strokeOpacity="0.4" fill="#d6f928" fillOpacity="0.08" />
        <circle cx="110" cy="55" r="4" fill="#d6f928" fillOpacity="0.7" filter="url(#uvc-glow)" />
        <text x="102" y="59" fill="#d6f928" fillOpacity="0.5" fontSize="7" fontFamily="monospace">HQ</text>
        {/* Phase 1: 5 clinics - inner ring */}
        <line x1="122" y1="50" x2="170" y2="35" stroke="#d6f928" strokeOpacity="0.15" />
        <line x1="122" y1="60" x2="170" y2="65" stroke="#d6f928" strokeOpacity="0.15" />
        <line x1="120" y1="43" x2="165" y2="22" stroke="#d6f928" strokeOpacity="0.12" />
        <line x1="120" y1="67" x2="165" y2="82" stroke="#d6f928" strokeOpacity="0.12" />
        <line x1="122" y1="55" x2="175" y2="50" stroke="#d6f928" strokeOpacity="0.15" />
        <circle cx="170" cy="35" r="6" stroke="#d6f928" strokeOpacity="0.3" fill="#d6f928" fillOpacity="0.06" />
        <circle cx="170" cy="65" r="6" stroke="#d6f928" strokeOpacity="0.3" fill="#d6f928" fillOpacity="0.06" />
        <circle cx="165" cy="22" r="5" stroke="#d6f928" strokeOpacity="0.25" fill="#d6f928" fillOpacity="0.04" />
        <circle cx="165" cy="82" r="5" stroke="#d6f928" strokeOpacity="0.25" fill="#d6f928" fillOpacity="0.04" />
        <circle cx="175" cy="50" r="6" stroke="#d6f928" strokeOpacity="0.3" fill="#d6f928" fillOpacity="0.06" />
        {/* Phase 2: 20 clinics - mid ring */}
        <line x1="176" y1="35" x2="230" y2="20" stroke="#d6f928" strokeOpacity="0.1" />
        <line x1="176" y1="65" x2="230" y2="80" stroke="#d6f928" strokeOpacity="0.1" />
        <line x1="181" y1="50" x2="235" y2="45" stroke="#d6f928" strokeOpacity="0.1" />
        <line x1="176" y1="35" x2="235" y2="35" stroke="#d6f928" strokeOpacity="0.08" />
        <line x1="176" y1="65" x2="235" y2="60" stroke="#d6f928" strokeOpacity="0.08" />
        <circle cx="230" cy="20" r="4" stroke="#d6f928" strokeOpacity="0.2" fill="#d6f928" fillOpacity="0.04" />
        <circle cx="230" cy="80" r="4" stroke="#d6f928" strokeOpacity="0.2" fill="#d6f928" fillOpacity="0.04" />
        <circle cx="235" cy="45" r="4" stroke="#d6f928" strokeOpacity="0.2" fill="#d6f928" fillOpacity="0.04" />
        <circle cx="235" cy="35" r="3.5" stroke="#d6f928" strokeOpacity="0.18" fill="#d6f928" fillOpacity="0.03" />
        <circle cx="235" cy="60" r="3.5" stroke="#d6f928" strokeOpacity="0.18" fill="#d6f928" fillOpacity="0.03" />
        {/* Phase 3: 130+ clinics - outer scatter */}
        <circle cx="280" cy="15" r="2.5" fill="#d6f928" fillOpacity="0.12" />
        <circle cx="295" cy="30" r="2" fill="#d6f928" fillOpacity="0.1" />
        <circle cx="310" cy="18" r="2.5" fill="#d6f928" fillOpacity="0.14" />
        <circle cx="290" cy="50" r="2" fill="#d6f928" fillOpacity="0.1" />
        <circle cx="305" cy="42" r="2.5" fill="#d6f928" fillOpacity="0.12" />
        <circle cx="320" cy="55" r="2" fill="#d6f928" fillOpacity="0.08" />
        <circle cx="280" cy="70" r="2" fill="#d6f928" fillOpacity="0.1" />
        <circle cx="300" cy="78" r="2.5" fill="#d6f928" fillOpacity="0.12" />
        <circle cx="315" cy="68" r="2" fill="#d6f928" fillOpacity="0.08" />
        <circle cx="330" cy="35" r="1.5" fill="#d6f928" fillOpacity="0.06" />
        <circle cx="340" cy="50" r="1.5" fill="#d6f928" fillOpacity="0.06" />
        <circle cx="285" cy="90" r="2" fill="#d6f928" fillOpacity="0.08" />
        <circle cx="310" cy="88" r="1.5" fill="#d6f928" fillOpacity="0.06" />
        <circle cx="345" cy="70" r="1.5" fill="#d6f928" fillOpacity="0.05" />
        <circle cx="350" cy="25" r="1.5" fill="#d6f928" fillOpacity="0.05" />
        {/* Phase labels */}
        <text x="155" y="100" fill="#d6f928" fillOpacity="0.2" fontSize="7" fontFamily="monospace">5</text>
        <text x="220" y="100" fill="#d6f928" fillOpacity="0.25" fontSize="7" fontFamily="monospace">20</text>
        <text x="295" y="100" fill="#d6f928" fillOpacity="0.35" fontSize="7" fontFamily="monospace">130+</text>
      </svg>
    ),
  },
  {
    title: "GoDiverse",
    subtitle: "1-Page Resume Builder with AI",
    category: "Product Strategy · SaaS",
    link: "/Projects/GoDiverse",
    icon: <FileText size={16} className="text-purple-400" />,
    badge: "0→1 · AI · Constraints",
    summary: "Builders were either too complex or too generic. Scoped a 1-page constraint with 3 distribution channels and AI-assisted content. Under 8 min to first shared resume.",
    visual: (
      <svg className="w-full h-28 mt-4 mb-2" viewBox="0 0 400 110" fill="none">
        <defs>
          <linearGradient id="gd-flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#d6f928" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d6f928" stopOpacity="0.3" />
          </linearGradient>
          <filter id="gd-glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="gd-ai" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d6f928" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#d6f928" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Input: messy document */}
        <rect x="30" y="15" width="70" height="85" rx="6" stroke="#a855f7" strokeOpacity="0.3" fill="#a855f7" fillOpacity="0.04" />
        <rect x="42" y="28" width="32" height="3" rx="1.5" fill="#a855f7" fillOpacity="0.25" />
        <rect x="42" y="36" width="46" height="3" rx="1.5" fill="#a855f7" fillOpacity="0.2" />
        <rect x="42" y="44" width="22" height="3" rx="1.5" fill="#a855f7" fillOpacity="0.15" />
        <rect x="42" y="52" width="40" height="3" rx="1.5" fill="#a855f7" fillOpacity="0.18" />
        <rect x="42" y="60" width="28" height="3" rx="1.5" fill="#a855f7" fillOpacity="0.12" />
        <rect x="42" y="68" width="36" height="3" rx="1.5" fill="#a855f7" fillOpacity="0.15" />
        <rect x="42" y="76" width="18" height="3" rx="1.5" fill="#a855f7" fillOpacity="0.1" />
        <text x="45" y="92" fill="#a855f7" fillOpacity="0.25" fontSize="7" fontFamily="monospace">draft</text>
        {/* Flow arrow 1 */}
        <path d="M110 55 L145 55" stroke="url(#gd-flow)" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M140 50 L148 55 L140 60" stroke="#a855f7" strokeOpacity="0.3" fill="none" />
        {/* AI Processing diamond */}
        <circle cx="200" cy="55" r="35" fill="url(#gd-ai)" />
        <path d="M200 22 L230 55 L200 88 L170 55 Z" stroke="#d6f928" strokeOpacity="0.4" fill="#d6f928" fillOpacity="0.04" strokeWidth="1" />
        <path d="M200 32 L220 55 L200 78 L180 55 Z" stroke="#d6f928" strokeOpacity="0.2" fill="#d6f928" fillOpacity="0.03" strokeWidth="0.5" />
        <circle cx="200" cy="55" r="6" fill="#d6f928" fillOpacity="0.3" filter="url(#gd-glow)" />
        {/* Sparkle particles */}
        <circle cx="182" cy="35" r="1.5" fill="#d6f928" fillOpacity="0.5" />
        <circle cx="218" cy="38" r="1" fill="#d6f928" fillOpacity="0.4" />
        <circle cx="175" cy="65" r="1" fill="#d6f928" fillOpacity="0.3" />
        <circle cx="225" cy="70" r="1.5" fill="#d6f928" fillOpacity="0.4" />
        <circle cx="190" cy="28" r="1" fill="#d6f928" fillOpacity="0.3" />
        <circle cx="212" cy="80" r="1" fill="#d6f928" fillOpacity="0.3" />
        <text x="189" y="58" fill="#d6f928" fillOpacity="0.5" fontSize="8" fontFamily="monospace">AI</text>
        {/* Flow arrow 2 */}
        <path d="M252 55 L287 55" stroke="url(#gd-flow)" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M282 50 L290 55 L282 60" stroke="#d6f928" strokeOpacity="0.3" fill="none" />
        {/* Output: polished document */}
        <rect x="300" y="15" width="70" height="85" rx="6" stroke="#d6f928" strokeOpacity="0.4" fill="#d6f928" fillOpacity="0.04" />
        <rect x="312" y="28" width="46" height="3" rx="1.5" fill="#d6f928" fillOpacity="0.35" />
        <rect x="312" y="36" width="46" height="3" rx="1.5" fill="#d6f928" fillOpacity="0.3" />
        <rect x="312" y="44" width="46" height="3" rx="1.5" fill="#d6f928" fillOpacity="0.25" />
        <rect x="312" y="52" width="46" height="3" rx="1.5" fill="#d6f928" fillOpacity="0.2" />
        <rect x="312" y="60" width="46" height="3" rx="1.5" fill="#d6f928" fillOpacity="0.18" />
        <rect x="312" y="68" width="46" height="3" rx="1.5" fill="#d6f928" fillOpacity="0.15" />
        <rect x="312" y="76" width="30" height="3" rx="1.5" fill="#d6f928" fillOpacity="0.12" />
        <text x="313" y="92" fill="#d6f928" fillOpacity="0.35" fontSize="7" fontFamily="monospace">ready</text>
        {/* Time label */}
        <text x="162" y="106" fill="white" fillOpacity="0.12" fontSize="7" fontFamily="monospace">&lt; 8 min</text>
      </svg>
    ),
  },
];

const Projects = () => {
  return (
    <section aria-labelledby="case-studies-heading" data-testid="projects-section" className="py-24 mx-auto overflow-hidden bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-4">
          [ Case Studies ]
        </div>
        <h2 id="case-studies-heading" className="font-heading text-5xl font-bold text-white">
          Real Products. <span className="text-gray-400">Real Decisions.</span>
        </h2>
        <p className="text-gray-300 mt-4 text-md max-w-3xl">
          Three products across AI, healthcare, and e-commerce.
          Each one starts with{" "}
          <span className="font-semibold text-white">the user who was struggling</span>—then the business problem,
          the call I made, and what it produced.
        </p>

        <div className="w-full mt-10">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectData.map((project, i) => (
              <li key={i} className="w-full">
                <Link to={project.link} className="block h-full">
                  <article className="flex flex-col h-full w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:border-white/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/40 transition-[transform,box-shadow,border-color] duration-300 will-change-transform group cursor-pointer">
                    {/* Header */}
                    <div className="px-6 pt-6 pb-0 flex items-center justify-between">
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono transition-colors duration-200 group-hover:text-gray-300">
                        {project.category}
                      </p>
                      <div className="bg-white/5 border border-white/10 rounded-full p-2 flex items-center justify-center transition-colors duration-200 group-hover:bg-white/10 group-hover:border-white/25">
                        {project.icon}
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-4 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-white leading-tight group-hover:text-[#d6f928] transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1 transition-colors duration-200 group-hover:text-gray-300">{project.subtitle}</p>

                        <div className="transition-transform duration-300 group-hover:scale-[1.02] origin-bottom">
                          {project.visual}
                        </div>

                        <p className="text-sm text-gray-300 leading-relaxed mt-3">
                          {project.summary}
                        </p>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center gap-2">
                        {project.badge.split(" · ").map((tag, j) => (
                          <span key={j} className="text-[10px] text-gray-400 px-2.5 py-1 bg-white/5 border border-white/10 rounded-full whitespace-nowrap font-mono transition-colors duration-200 group-hover:border-white/30 group-hover:text-white group-hover:bg-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-6xl mx-auto px-4 mt-16 text-center">
        <p className="text-gray-400 text-sm mb-4">
          Want the full breakdown — problem, decisions, and results?
        </p>
        <a
          href="/projects"
          data-testid="view-full-case-studies-link"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg"
        >
          View All Case Studies
        </a>
      </div>
    </section>
  );
};

export default Projects;