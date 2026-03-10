import { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const templateData = [
  {
    id: "gp",
    title: "General Practice (GP)",
    description: "Standardized layout optimized for wellness, preventive care, and routine checkups. Focuses on easy booking flows and localized SEO.",
    statValue: "40%",
    statLabel: "of Network",
    bottomLabel: "Routine Care",
    color: "bg-emerald-500",
    strokeClass: "stroke-emerald-500",
    gradient: "from-emerald-500/20 to-emerald-900/20",
    border: "border-emerald-500/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    id: "specialty",
    title: "Specialty Clinic",
    description: "Designed to highlight advanced medical capabilities, doctor credentials, and referral forms for other veterinarians.",
    statValue: "Advanced",
    statLabel: "Medicine",
    bottomLabel: "Specialized Care",
    color: "bg-purple-500",
    strokeClass: "stroke-purple-500",
    gradient: "from-purple-500/20 to-purple-900/20",
    border: "border-purple-500/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    id: "er",
    title: "Emergency Clinic (ER)",
    description: "High-contrast, action-oriented design. Prioritizes 'Call Now' and 'Get Directions' functionalities for high-stress triage situations.",
    statValue: "24/7",
    statLabel: "Availability",
    bottomLabel: "Triage Ready",
    color: "bg-red-500",
    strokeClass: "stroke-red-500",
    gradient: "from-red-500/20 to-red-900/20",
    border: "border-red-500/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    )
  },
  {
    id: "hybrid",
    title: "Specialty + Emergency Hybrid",
    description: "A complex dual-funnel architecture that seamlessly routes urgent cases to the ER while allowing specialty clients to research chronic care.",
    statValue: "Dual",
    statLabel: "Funnel",
    bottomLabel: "Comprehensive",
    color: "bg-orange-500",
    strokeClass: "stroke-orange-500",
    gradient: "from-orange-500/20 to-orange-900/20",
    border: "border-orange-500/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    )
  },
  {
    id: "multi",
    title: "Multi-Location Clinic",
    description: "Built for parent brands with several physical locations. Features a centralized doctor directory mapped dynamically to specific facilities.",
    statValue: "Scalable",
    statLabel: "Architecture",
    bottomLabel: "Enterprise",
    color: "bg-blue-500",
    strokeClass: "stroke-blue-500",
    gradient: "from-blue-500/20 to-blue-900/20",
    border: "border-blue-500/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    )
  }
];

const UvcTemplates = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTemplate = templateData[activeIndex];

  return (
    <div className="w-full bg-[#0a0a0a] rounded-3xl border border-white/10 p-8 md:p-12 font-sans text-white my-12">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left Side: Content & Accordion */}
        <div className="flex-1 w-full relative z-10">
          <div className="mb-10">
            <h4 className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-2">The Architecture</h4>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The 5 Core Templates</h2>
          </div>

          <div className="space-y-2">
            {templateData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`border-b border-white/10 last:border-0 py-5 cursor-pointer transition-all duration-300 ${isActive ? '' : 'hover:bg-white/[0.02] -mx-4 px-4 rounded-xl'}`}
                >
                  <div className="flex gap-4 items-start">
                    <div className={`mt-0.5 shrink-0 transition-colors duration-300`}>
                      <CheckCircle2 className={`w-6 h-6 ${isActive ? 'fill-[#4ade80] text-[#0a0a0a]' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1 -mt-0.5">
                      <h3 className={`text-xl font-bold transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                        {item.title}
                      </h3>
                      {/* Expanded Content */}
                      <div className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <p className="text-gray-400 leading-relaxed text-[15px] pt-1 pb-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Visual Display */}
        <div className="flex-[0.85] w-full relative min-h-[450px] md:min-h-[550px] flex items-center justify-center">
          
          {/* Main Card Wrapper */}
          <div className={`absolute w-full max-w-[360px] aspect-[3/4] rounded-2xl md:rounded-3xl border bg-gradient-to-br ${activeTemplate.gradient} ${activeTemplate.border} backdrop-blur-sm transition-all duration-700 ease-in-out flex flex-col items-center justify-center p-8 overflow-hidden shadow-2xl z-0`}>
             {/* Abstract grid/pattern in the background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
            
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 text-center space-y-6 px-4">
              <div className="w-16 h-16 mx-auto bg-white/10 border border-white/20 rounded-full flex items-center justify-center mb-6 shadow-inner">
                 <div className={`text-white transition-opacity duration-500`}>
                   {activeTemplate.icon}
                 </div>
              </div>
              <h3 className="text-3xl font-bold text-white leading-tight drop-shadow-md">{activeTemplate.title}</h3>
              <div className="h-0.5 w-12 bg-white/20 mx-auto rounded-full"></div>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest">{activeTemplate.bottomLabel}</p>
            </div>
          </div>

          {/* Overlapping Top-Left Stats Circle */}
          <div className="absolute top-4 left-0 md:-left-12 -mt-4 w-36 h-36 md:w-[170px] md:h-[170px] rounded-full bg-white text-black shadow-2xl flex flex-col items-center justify-center border-[8px] md:border-[10px] border-[#0a0a0a] z-20 transition-transform duration-500 hover:scale-105 group">
             {/* Progress ring abstract */}
            <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
              <circle cx="50%" cy="50%" r="42%" className="fill-none stroke-gray-200" strokeWidth="12%" />
              <circle 
                cx="50%" cy="50%" r="42%" 
                className={`fill-none ${activeTemplate.strokeClass} transition-all duration-1000 ease-in-out`} 
                strokeWidth="12%" 
                strokeDasharray="264" 
                strokeDashoffset="60" 
              />
            </svg>
            <div className="relative z-10 text-center flex flex-col items-center justify-center transform group-hover:scale-110 transition-transform">
               <span className="text-2xl md:text-3xl font-black tracking-tight leading-none text-gray-900">{activeTemplate.statValue}</span>
               <span className="text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-wider mt-1">{activeTemplate.statLabel}</span>
            </div>
          </div>

          {/* Overlapping Top-Right Icon Box (Decorative) */}
          <div className={`absolute top-16 -right-2 md:-right-8 w-16 h-16 rounded-2xl ${activeTemplate.color} shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center text-white z-20 border-[6px] border-[#0a0a0a] transition-all duration-500 transform hover:scale-110 hover:rotate-6`}>
             <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
             </svg>
          </div>

          {/* Overlapping Bottom-Right Pill (Action/Label) */}
          <div className={`absolute bottom-8 right-2 md:-right-6 px-6 py-3.5 rounded-full bg-[#111] border border-gray-800 text-white shadow-2xl flex items-center gap-3 z-20 transition-all duration-300 hover:bg-white hover:text-black group cursor-pointer hover:border-white/50 backdrop-blur-md`}>
             <span className="font-semibold text-sm">{activeTemplate.bottomLabel}</span>
             <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default UvcTemplates;
