import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Zap, Target, Rocket, ArrowRight, Code, Layout, BarChart3 } from "lucide-react";

const DesignServices = () => {
  const services = [
    {
      title: "Retention & Churn",
      icon: <TrendingUp size={24} className="text-[#d6f928]" />,
      desc: "I apply behavioral psychology (Endowed Progress, Variable Rewards) to fix leaky buckets and keep users active.",
      color: "hover:border-[#d6f928]/50",
      visual: (
        <div className="mt-6 bg-[#111] border border-white/10 rounded-lg p-4 relative overflow-hidden">
          <div className="flex items-end justify-between gap-1 h-16">
            {[40, 65, 50, 80, 75, 95, 100].map((h, i) => (
              <div key={i} className="w-full bg-[#d6f928] opacity-20 hover:opacity-100 transition-all duration-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <div className="absolute top-2 left-2 text-[10px] font-mono text-[#d6f928] bg-[#d6f928]/10 px-2 py-0.5 rounded">churn_rate: -15%</div>
        </div>
      )
    },
    {
      title: "Product Logic & Strategy",
      icon: <Target size={24} className="text-blue-400" />,
      desc: "I don't design impossible features. I define MVP scope, handle edge cases, and ensure technical feasibility.",
      color: "hover:border-blue-400/50",
      visual: (
        <div className="mt-6 bg-[#111] border border-white/10 rounded-lg p-4 relative font-mono text-[10px] text-gray-400 leading-relaxed">
            <div className="text-blue-400">if (user.isChurning) {"{"}</div>
            <div className="pl-4">trigger(retention_flow);</div>
            <div className="pl-4">offer_discount(10%);</div>
            <div className="text-blue-400">{"}"} else {"{"}</div>
            <div className="pl-4 text-gray-600">// Standard flow</div>
            <div className="text-blue-400">{"}"}</div>
        </div>
      )
    },
    {
      title: "High-Intent Landing Pages",
      icon: <Layout size={24} className="text-purple-400" />,
      desc: "Optimized for conversion, not just aesthetics. Every headline and CTA placement is backed by data.",
      color: "hover:border-purple-400/50",
      visual: (
        <div className="mt-6 bg-[#111] border border-white/10 rounded-lg p-4 flex flex-col gap-2 items-center justify-center py-6">
            <div className="w-3/4 h-2 bg-white/20 rounded-full mb-1"></div>
            <div className="w-1/2 h-2 bg-white/10 rounded-full mb-4"></div>
            <div className="bg-purple-500 text-white text-[10px] px-4 py-1.5 rounded-md shadow-[0_0_15px_rgba(168,85,247,0.4)] animate-pulse">
                Start Free Trial
            </div>
        </div>
      )
    },
    {
      title: "Rapid MVP Deployment",
      icon: <Rocket size={24} className="text-orange-400" />,
      desc: "Ship fast. I cut fluff, prioritize core value, and hand off clean code-ready design systems.",
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
             <div className="flex-1 bg-white/5 h-16 rounded border border-green-500/30 p-2 relative">
                <div className="w-2 h-2 rounded-full bg-green-500 mb-1"></div>
                <div className="w-8 h-1 bg-white/10 rounded"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
            </div>
        </div>
      )
    }
  ];

  const tags = [
    "Behavioral Psychology", "SaaS Metrics", "React/Tailwind", "Design Systems", 
    "Framer Auth", "Churn Reduction", "Conversion Funnels", "Technical Feasibility"
  ];

  return (
    <section className="bg-[#050505] text-white py-32 px-6 relative overflow-hidden">
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-6">
               [ Capabilities ]
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Outcomes, <br/>
              <span className="text-gray-500">Not Just Deliverables.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              I don't sell "design." I sell retention, conversion, and clarity. 
              Every pixel I push is backed by a business metric.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, index) => (
                <div 
                    key={index} 
                    className={`bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${s.color}`}
                >
                    <div>
                        <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg border border-white/5">
                            {s.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{s.title}</h3>
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
            <p className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">Core Competencies</p>
            <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                    <span 
                        key={i} 
                        className="text-xs text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 hover:border-white/30 transition-colors cursor-default"
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