import React, { useState } from 'react';

const DoubleDiamond = () => {
  const [activeStage, setActiveStage] = useState(null);

  // The "Product Strategist" Data Structure
  const stages = [
    {
      id: 1,
      title: "Audit & Discovery",
      subtitle: "The Problem Space",
      desc: "We don't guess. We audit.",
      details: ["User Interviews", "Churn Analysis", "Heatmap Review", "Competitor Audit"]
    },
    {
      id: 2,
      title: "Strategy & Scope",
      subtitle: "The Pivot Point",
      desc: "Defining the high-value bet.",
      details: ["KPI Definition", "User Personas", "Feature Prioritization", "ROI Projection"]
    },
    {
      id: 3,
      title: "Architecture & Logic",
      subtitle: "The Solution Space",
      desc: "Building systems, not just screens.",
      details: ["Information Arch.", "Low-Fi Wireframes", "Edge Case Logic", "Dev Feasibility Check"]
    },
    {
      id: 4,
      title: "Execution & Handoff",
      subtitle: "The Final Asset",
      desc: "Pixel-perfect & code-ready.",
      details: ["High-Fidelity UI", "Interactive Prototypes", "Design System", "Dev Handoff"]
    }
  ];

  return (
    <div className="w-full bg-[#050505] text-white py-24 px-6 relative overflow-hidden font-sans">
      {/* Background Grid - The "Technical" Vibe */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono text-[#d6f928] tracking-widest uppercase mb-4">
            Methodology
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            From Chaos to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Clarity</span>.
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I don't just "design." I use a divergent-convergent framework to ensure we are solving the right problem before we build the solution.
          </p>
        </div>

        {/* --- DESKTOP VIEW (The Diamond) --- */}
        <div className="hidden lg:block relative w-full h-[400px]">
          <svg viewBox="0 0 1000 300" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#333" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#d6f928" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#333" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* The Diamond Paths */}
            <path 
              d="M50 150 L275 50 L500 150 L725 50 L950 150 L725 250 L500 150 L275 250 Z" 
              fill="url(#diamondGradient)"
              stroke="#333" 
              strokeWidth="1"
            />
            
            {/* The "Flow" Line - Animated/Highlighted */}
            <path 
              d="M50 150 L275 50 L500 150 L725 50 L950 150" 
              fill="none" 
              stroke="white" 
              strokeWidth="2"
              strokeOpacity="0.1"
            />
             <path 
              d="M50 150 L275 250 L500 150 L725 250 L950 150" 
              fill="none" 
              stroke="white" 
              strokeWidth="2"
              strokeOpacity="0.1"
            />

            {/* Vertical Dividers (Milestones) */}
            <line x1="50" y1="50" x2="50" y2="250" stroke="#333" strokeDasharray="4" />
            <line x1="500" y1="50" x2="500" y2="250" stroke="#d6f928" strokeWidth="2" strokeDasharray="4" opacity="0.5" />
            <line x1="950" y1="50" x2="950" y2="250" stroke="#333" strokeDasharray="4" />
          </svg>

          {/* Overlay Interactive Areas */}
          <div className="absolute inset-0 flex justify-between items-center px-[50px]">
             {/* Phase 1: Audit */}
             <div 
                className="w-[225px] h-[200px] flex flex-col justify-center items-center group cursor-pointer"
                onMouseEnter={() => setActiveStage(1)}
                onMouseLeave={() => setActiveStage(null)}
             >
                <div className="bg-[#111] border border-white/10 p-4 rounded-xl backdrop-blur-md group-hover:border-[#d6f928]/50 transition-all duration-300 transform group-hover:-translate-y-2">
                   <div className="text-[#d6f928] font-mono text-xs mb-1">01. Diverge</div>
                   <h3 className="text-lg font-bold">Audit</h3>
                </div>
             </div>

             {/* Phase 2: Strategy */}
             <div 
                className="w-[225px] h-[200px] flex flex-col justify-center items-center group cursor-pointer"
                onMouseEnter={() => setActiveStage(2)}
                onMouseLeave={() => setActiveStage(null)}
             >
                <div className="bg-[#111] border border-white/10 p-4 rounded-xl backdrop-blur-md group-hover:border-[#d6f928]/50 transition-all duration-300 transform group-hover:-translate-y-2">
                   <div className="text-[#d6f928] font-mono text-xs mb-1">02. Converge</div>
                   <h3 className="text-lg font-bold">Strategy</h3>
                </div>
             </div>

             {/* Phase 3: Logic */}
             <div 
                className="w-[225px] h-[200px] flex flex-col justify-center items-center group cursor-pointer"
                onMouseEnter={() => setActiveStage(3)}
                onMouseLeave={() => setActiveStage(null)}
             >
                <div className="bg-[#111] border border-white/10 p-4 rounded-xl backdrop-blur-md group-hover:border-[#d6f928]/50 transition-all duration-300 transform group-hover:-translate-y-2">
                   <div className="text-[#d6f928] font-mono text-xs mb-1">03. Diverge</div>
                   <h3 className="text-lg font-bold">Logic</h3>
                </div>
             </div>

             {/* Phase 4: Execution */}
             <div 
                className="w-[225px] h-[200px] flex flex-col justify-center items-center group cursor-pointer"
                onMouseEnter={() => setActiveStage(4)}
                onMouseLeave={() => setActiveStage(null)}
             >
                <div className="bg-[#111] border border-white/10 p-4 rounded-xl backdrop-blur-md group-hover:border-[#d6f928]/50 transition-all duration-300 transform group-hover:-translate-y-2">
                   <div className="text-[#d6f928] font-mono text-xs mb-1">04. Converge</div>
                   <h3 className="text-lg font-bold">Execution</h3>
                </div>
             </div>
          </div>

          {/* Dynamic Details Box (Appears on Hover) */}
          <div className="h-24 flex justify-center">
             {activeStage && (
                <div className="animate-fade-in-up bg-[#1a1a1a] border border-[#d6f928]/30 rounded-lg px-8 py-4 flex items-center gap-8 shadow-[0_0_30px_rgba(214,249,40,0.1)]">
                   <div>
                      <h4 className="text-[#d6f928] font-bold">{stages[activeStage-1].title}</h4>
                      <p className="text-gray-400 text-sm">{stages[activeStage-1].desc}</p>
                   </div>
                   <div className="h-8 w-px bg-white/10"></div>
                   <div className="flex gap-3">
                      {stages[activeStage-1].details.map((item, i) => (
                         <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300 border border-white/5">
                            {item}
                         </span>
                      ))}
                   </div>
                </div>
             )}
             {!activeStage && (
                <p className="text-gray-500 text-sm italic mt-6">Hover over a stage to see my process</p>
             )}
          </div>
        </div>

        {/* --- MOBILE VIEW (Vertical Timeline) --- */}
        <div className="block lg:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#d6f928] to-transparent opacity-30"></div>
          
          <div className="space-y-12">
            {stages.map((stage) => (
              <div key={stage.id} className="relative pl-16">
                {/* Node */}
                <div className="absolute left-[20px] top-1 w-3 h-3 bg-[#d6f928] rounded-full shadow-[0_0_10px_#d6f928]"></div>
                
                {/* Content */}
                <div className="flex flex-col items-start">
                   <span className="text-[#d6f928] text-xs font-mono mb-2">Phase 0{stage.id}</span>
                   <h3 className="text-2xl font-bold text-white mb-1">{stage.title}</h3>
                   <p className="text-gray-400 text-sm mb-4">{stage.desc}</p>
                   
                   <div className="flex flex-wrap gap-2">
                      {stage.details.map((detail, idx) => (
                         <span key={idx} className="text-xs border border-white/10 bg-white/5 px-3 py-1 rounded-full text-gray-300">
                            {detail}
                         </span>
                      ))}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DoubleDiamond;