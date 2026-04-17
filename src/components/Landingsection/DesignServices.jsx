import { Link } from "react-router-dom";
import { TrendingUp, Target, Cpu } from "lucide-react";

const DesignServices = () => {
  const services = [
    {
      title: "Product Strategy & GTM",
      icon: <Target size={24} className="text-blue-400" />,
      desc: "Took products from first user interview to launch. Wrote PRDs, prioritized roadmaps, and aligned GTM to what the product actually delivered—grounded in technical feasibility, not slide logic.",
      color: "hover:border-blue-400/50",
      visual: (
        <div className="mt-6 bg-[#111] border border-white/10 rounded-lg p-4 relative font-mono text-[10px] text-gray-400 leading-relaxed">
          <div className="text-blue-400">// PRD: Onboarding Sprint</div>
          <div className="pl-4 text-gray-300">goal: time_to_value &lt; 90s</div>
          <div className="pl-4">scope: MVP (3 features)</div>
          <div className="pl-4 text-[#d6f928]">gtm: aligned_to_ltv_cac</div>
          <div className="text-blue-400">status: shipped ✓</div>
        </div>
      )
    },
    {
      title: "Growth & Unit Economics",
      icon: <TrendingUp size={24} className="text-[#d6f928]" />,
      desc: "Diagnosed activation bottlenecks via SQL, ran A/B tests, and instrumented funnels in Amplitude. Improved activation rates by restructuring onboarding around data—not assumptions. Every sprint tied to a revenue or retention number.",
      color: "hover:border-[#d6f928]/50",
      visual: (
        <div className="mt-6 bg-[#111] border border-white/10 rounded-lg p-4 relative overflow-hidden">
          <div className="flex items-end justify-between gap-1 h-16">
            {[40, 65, 50, 80, 75, 95, 100].map((h, i) => (
              <div key={i} className="w-full bg-[#d6f928] opacity-20 hover:opacity-100 transition-all duration-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <div className="absolute top-2 left-2 text-[10px] font-mono text-[#d6f928] bg-[#d6f928]/10 px-2 py-0.5 rounded">activation_rate: +22%</div>
        </div>
      )
    },
    {
      title: "AI & Technical Execution",
      icon: <Cpu size={24} className="text-orange-400" />,
      desc: "Built LLM pipelines with Claude and Gemini, wired API/webhook integrations, and deployed n8n automation. Replaced a 3-week custom build with a 1-day Claude API call that delivered the same output quality.",
      color: "hover:border-orange-400/50",
      visual: (
        <div className="mt-6 bg-[#111] border border-white/10 rounded-lg p-4 flex gap-2">
          <div className="flex-1 bg-white/5 h-16 rounded border border-white/5 p-2">
            <div className="w-2 h-2 rounded-full bg-red-500 mb-1"></div>
            <div className="w-8 h-1 bg-white/10 rounded"></div>
          </div>
          <div className="flex-1 bg-white/5 h-16 rounded border border-white/5 p-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500 mb-1"></div>
            <div className="w-8 h-1 bg-white/10 rounded"></div>
          </div>
          <div className="flex-1 bg-white/5 h-16 rounded border border-orange-500/30 p-2 relative">
            <div className="w-2 h-2 rounded-full bg-orange-400 mb-1"></div>
            <div className="w-8 h-1 bg-white/10 rounded"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
          </div>
        </div>
      )
    }
  ];

  const tags = [
    "PRD Authoring", "Product Roadmapping", "OKRs", "RICE / ICE", "GTM Strategy", "0-to-1 Building",
    "SQL", "Amplitude / Mixpanel", "A/B Testing", "LTV:CAC", "CRO",
    "Agile / Scrum", "Jira / Linear", "User Research",
    "LLM Integration", "AI Feature Scoping", "React / Tailwind", "n8n Automation"
  ];

  return (
    <section className="bg-[#050505] text-white py-24 px-4 relative overflow-hidden">
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. The Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* 2. The Atmosphere Glow (Centered but offset) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>



      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-4">
              [ Core Competencies ]
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-4">
              The Full Stack. <br />
              <span className="text-gray-500">Product Manager Edition.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Most PMs bring strategy. I bring strategy, cross-functional leadership,
              technical execution, and AI integration—in one hire.
            </p>
          </div>

          <Link to="/contact">
            <button
              className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg"
            >
              Book Strategy Call
            </button>
          </Link>
        </div>

        {/* The Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, index) => (
            <div
              key={index}
              className={`bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${s.color}`}
            >
              <div>
                <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg border border-white/5">
                  {s.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>
              {/* The "Abstract" Visual */}
              <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                {s.visual}
              </div>
            </div>
          ))}
        </div>

        {/* The "Tech Stack" Ticker */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <p className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">Skills & Tools</p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DesignServices;