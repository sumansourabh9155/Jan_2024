import { useState } from 'react';

const DoubleDiamond = () => {
   const [activeStage, setActiveStage] = useState(1);

   // The PM Sprint Framework
   const stages = [
      {
         id: 1,
         title: "Discovery & Diagnosis",
         subtitle: "Define the Right Problem",
         desc: "No PRD before the problem is validated. The constraint is the user's reality—not internal opinions.",
         details: ["User Interviews", "Session Recording", "SQL Cohort Analysis", "Churn Signal Mapping", "Competitor Audit"]
      },
      {
         id: 2,
         title: "Strategy & Scope",
         subtitle: "Place the Right Bet",
         desc: "What to build, what to cut, and why. Every scope decision is a hypothesis with a measurable outcome.",
         details: ["OKRs + North Star Metric", "RICE / ICE Prioritization", "MVP Hypothesis", "LTV:CAC Framing", "What NOT to Build"]
      },
      {
         id: 3,
         title: "Build & Ship",
         subtitle: "Execute Without Drift",
         desc: "PRD to sprint to shipped. Engineering trust comes from technical credibility in the room, not after the meeting.",
         details: ["PRD → Jira/Linear", "Technical Feasibility", "AI-Assisted Dev", "Sprint Planning", "Stakeholder Alignment"]
      },
      {
         id: 4,
         title: "Measure & Compound",
         subtitle: "Close the Loop",
         desc: "Shipped is not done. The metric has to move. If it doesn't, that's the next discovery sprint.",
         details: ["D1/D7/D30 Retention", "A/B Testing", "Amplitude / Mixpanel", "NRR + Churn", "OKR Retro"]
      }
   ];

   return (
      <section aria-labelledby="methodology-heading" className="w-full bg-[#050505] text-white py-24 px-4 relative overflow-hidden font-sans border-t border-white/10">
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
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-4">
                  [ How I Work ]
               </div>
               <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
                  From Signal to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Shipped</span>.
               </h2>
               <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                  Every product decision I make flows through four gates: validate the problem, commit to the bet, execute without drift, and close the loop on the metric.
                  I don&apos;t write a PRD until I can show you the user signal that proves the problem is real.
                  I don&apos;t call a sprint done until the retention or conversion number moves.
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
                     onMouseLeave={() => setActiveStage(1)}
                  >
                     <div className="bg-[#111] border border-white/10 p-4 rounded-xl backdrop-blur-md group-hover:border-[#d6f928]/50 transition-all duration-300 transform group-hover:-translate-y-2">
                        <div className="text-[#d6f928] font-mono text-xs mb-1">01. Diagnose</div>
                        <h3 className="font-heading text-lg font-bold">Discovery</h3>
                     </div>
                  </div>

                  {/* Phase 2: Strategy */}
                  <div
                     className="w-[225px] h-[200px] flex flex-col justify-center items-center group cursor-pointer"
                     onMouseEnter={() => setActiveStage(2)}
                     onMouseLeave={() => setActiveStage(1)}
                  >
                     <div className="bg-[#111] border border-white/10 p-4 rounded-xl backdrop-blur-md group-hover:border-[#d6f928]/50 transition-all duration-300 transform group-hover:-translate-y-2">
                        <div className="text-[#d6f928] font-mono text-xs mb-1">02. Prioritize</div>
                        <h3 className="font-heading text-lg font-bold">Strategy</h3>
                     </div>
                  </div>

                  {/* Phase 3: Logic */}
                  <div
                     className="w-[225px] h-[200px] flex flex-col justify-center items-center group cursor-pointer"
                     onMouseEnter={() => setActiveStage(3)}
                     onMouseLeave={() => setActiveStage(1)}
                  >
                     <div className="bg-[#111] border border-white/10 p-4 rounded-xl backdrop-blur-md group-hover:border-[#d6f928]/50 transition-all duration-300 transform group-hover:-translate-y-2">
                        <div className="text-[#d6f928] font-mono text-xs mb-1">03. Execute</div>
                        <h3 className="font-heading text-lg font-bold">Build</h3>
                     </div>
                  </div>

                  {/* Phase 4: Execution */}
                  <div
                     className="w-[225px] h-[200px] flex flex-col justify-center items-center group cursor-pointer"
                     onMouseEnter={() => setActiveStage(4)}
                     onMouseLeave={() => setActiveStage(1)}
                  >
                     <div className="bg-[#111] border border-white/10 p-4 rounded-xl backdrop-blur-md group-hover:border-[#d6f928]/50 transition-all duration-300 transform group-hover:-translate-y-2">
                        <div className="text-[#d6f928] font-mono text-xs mb-1">04. Measure</div>
                        <h3 className="font-heading text-lg font-bold">Compound</h3>
                     </div>
                  </div>
               </div>

               {/* Dynamic Details Box (Appears on Hover) */}
               <div className="h-24 flex justify-center">
                  {activeStage && (
                     <div className="animate-fade-in-up bg-[#1a1a1a] border border-[#d6f928]/30 rounded-lg px-8 py-4 flex items-center gap-8 shadow-[0_0_30px_rgba(214,249,40,0.1)]">
                        <div>
                           <h4 className="text-[#d6f928] font-bold">{stages[activeStage - 1].title}</h4>
                           <p className="text-gray-400 text-sm">{stages[activeStage - 1].desc}</p>
                        </div>
                        <div className="h-8 w-px bg-white/10"></div>
                        <div className="flex gap-3">
                           {stages[activeStage - 1].details.map((item, i) => (
                              <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300 border border-white/5">
                                 {item}
                              </span>
                           ))}
                        </div>
                     </div>
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
                           <h3 className="font-heading text-2xl font-bold text-white mb-1">{stage.title}</h3>
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
      </section>
   );
};

export default DoubleDiamond;