import { Zap, BarChart2, ShoppingCart } from "lucide-react";

const projectData = [
  {
    title: "Abun.com: GTM & Activation for an AI Content Platform",
    category: "AI Content Platform",
    alt: "GTM strategy and activation funnel redesign for an AI content platform",
    icon: <Zap size={16} className="text-[#d6f928]" />,
    badge: "AI/LLM · GTM · Activation",
    user: "SMB content marketers who signed up expecting instant blog posts—got a config screen instead.",
    problem: "Users churned before experiencing the AI output. Value was hidden behind setup friction.",
    decision: "Redesigned onboarding to generate real AI content within 90 seconds of signup.",
    impact: "Acquisition funnel rebuilt around the 'Aha!' moment. Conversion signal improved in the first sprint.",
  },
  {
    title: "UVC: CMS Rollout Across 130+ Clinic Locations",
    category: "Enterprise CMS · Healthcare",
    alt: "Phased CMS product rollout across 130+ clinic locations",
    icon: <BarChart2 size={16} className="text-blue-400" />,
    badge: "Scale · Roadmap · Tech Debt",
    user: "Clinic admins manually updating fragmented sites—hours lost per location per update.",
    problem: "130+ locations, no standardized CMS. Each new clinic added a new point of failure.",
    decision: "Phased rollout (5 → 20 → all) instead of big-bang. Contained risk while maintaining uptime.",
    impact: "Reduced per-location deployment overhead. Unified digital presence network-wide.",
  },
  {
    title: "Rosso Brunello: CRO Audit & Revenue Recovery",
    category: "E-Commerce · CRO",
    alt: "CRO audit and checkout funnel optimization for cart abandonment and AOV",
    icon: <ShoppingCart size={16} className="text-orange-400" />,
    badge: "CRO · AOV · Funnel",
    user: "High-intent buyers adding premium items to cart, then abandoning at the shipping cost reveal.",
    problem: "Cart abandonment high, AOV below category benchmarks. Checkout optimized for simplicity, not conversion.",
    decision: "Audited every funnel drop-off. Ranked interventions by revenue impact vs. effort—nothing without data.",
    impact: "Shipped trust signals, upsell placement, and checkout restructuring. Every change tied to a metric.",
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
          the call I made, and what it produced. No case study padding. Just what happened and why.
        </p>
        <div className="w-full mt-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, i) => (
              <li key={i} className="w-full">
                <article className="flex flex-col h-full w-full bg-white/5 border-2 border-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:border-white/40 transition-all group">
                  {/* Category + Icon Header */}
                  <div className="px-5 pt-5 pb-0 flex items-center justify-between">
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <div className="bg-black/60 border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-2">
                      {project.icon}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div className="space-y-3">
                      <h3 className="font-heading text-base font-bold text-white leading-tight">
                        {project.title}
                      </h3>

                      <div>
                        <span className="text-blue-400 uppercase tracking-wider text-[10px] font-semibold block mb-1">The User</span>
                        <p className="text-xs text-gray-400 leading-relaxed">{project.user}</p>
                      </div>

                      <div>
                        <span className="text-gray-500 uppercase tracking-wider text-[10px] font-semibold block mb-1">The Problem</span>
                        <p className="text-xs text-gray-400 leading-relaxed">{project.problem}</p>
                      </div>

                      <div>
                        <span className="text-orange-400 uppercase tracking-wider text-[10px] font-semibold block mb-1">The PM Decision</span>
                        <p className="text-xs text-gray-300 leading-relaxed">{project.decision}</p>
                      </div>

                      <div>
                        <span className="text-[#d6f928] uppercase tracking-wider text-[10px] font-semibold block mb-1">Outcome</span>
                        <p className="text-xs text-gray-300 leading-relaxed">{project.impact}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-400">
                      {project.badge.split(" · ").map((tag, j) => (
                        <span key={j} className="px-2 py-1 bg-white/5 border border-white/10 rounded-full whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="w-full inline-flex flex-nowrap">
        {[...Array(2)].map((_, index) => (
         <ul
            key={index}
            className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll"
            style={{ animationDuration: '80s&apos; }} // SLOWER SPEED (60s instead of default fast)
            aria-hidden={index === 1}
          >
            {projectData.map((project, i) => (
              <li key={i}>
                <div className="h-80 w-[380px] bg-white/5 border-2 border-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:border-white/40 transition-all group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-2">
                      {project.icon}
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="font-heading text-base font-bold text-white leading-tight">
                      {project.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                      <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full">
                        UX Strategy
                      </span>
                      <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full">
                        A/B Testing
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div> */}

      {/* Bottom CTA */}
      <div className="max-w-6xl mx-auto px-4 mt-16 text-center">
        <p className="text-gray-400 text-sm mb-4">
          Want the full breakdown — problem, decisions, and results — for each project?
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
