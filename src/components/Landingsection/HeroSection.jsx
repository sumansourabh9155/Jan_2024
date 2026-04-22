import { CircleDot, Target, Sparkles, TrendingUp, Users, Code, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const capabilities = [
    { icon: <Target size={22} className="text-blue-400" />, label: "Product Strategy" },
    { icon: <PenTool size={22} className="text-pink-400" />, label: "Design" },
    { icon: <Sparkles size={22} className="text-[#d6f928]" />, label: "AI Integration" },
    { icon: <TrendingUp size={22} className="text-green-400" />, label: "Growth & CRO" },
    { icon: <Users size={22} className="text-purple-400" />, label: "Sprint Leadership" },
    { icon: <Code size={22} className="text-orange-400" />, label: "Technical Build" },
  ];

  return (
    <header role="banner" data-testid="hero-section" className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden px-4 pt-24 pb-16">

      {/* --- LAYER 1: Grid with radial spotlight fade --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
        }}
      ></div>

      {/* --- LAYER 2: Gradient mesh atmosphere --- */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(214,249,40,0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 0% 100%, rgba(59,130,246,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 100% 30%, rgba(168,85,247,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 80%, rgba(214,249,40,0.06) 0%, transparent 40%)
        `
      }}></div>

      {/* --- LAYER 3: Vignette for depth & focus --- */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(5,5,5,0.6) 100%)' }}></div>

      {/* --- LAYER 4: Geometric accents --- */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <circle cx="75%" cy="18%" r="120" stroke="white" strokeWidth="0.5" opacity="0.04" fill="none" strokeDasharray="4 8" />
        <circle cx="12%" cy="55%" r="80" stroke="white" strokeWidth="0.5" opacity="0.03" fill="none" strokeDasharray="3 6" />
        <circle cx="85%" cy="35%" r="2" fill="#d6f928" opacity="0.15" />
        <circle cx="8%" cy="22%" r="1.5" fill="#3b82f6" opacity="0.12" />
        <circle cx="92%" cy="72%" r="1.5" fill="#a855f7" opacity="0.1" />
        <line x1="72%" y1="14%" x2="85%" y2="34%" stroke="white" strokeWidth="0.5" opacity="0.03" strokeDasharray="4 8" />
      </svg>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-5xl w-full text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 rounded-full text-xs font-mono tracking-wide mb-8">
          <CircleDot size={12} className="text-[#d6f928]" />
          <span className="opacity-80">25+ Products Shipped</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
          PM + Engineer.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            <br />Rare by Design.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-md text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-8">
          BTech in CSE/ML. Shipped AI-powered products with <span className="text-white font-medium">Claude and Gemini</span>.{" "}
          Led cross-functional teams across design, engineering, and product—from{" "}
          <span className="text-white font-medium">user research to launch</span>.
        </p>

        {/* Capability Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col items-center gap-3 cursor-default"
            >
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                {cap.icon}
              </div>
              <span className="text-sm text-gray-300 font-medium">{cap.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/projects">
            <button
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-base hover:bg-[#d6f928] hover:scale-105 transition-[transform,background-color,color] duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto"
            >
              View Product Case Studies
            </button>
          </Link>
          <Link to="/contact">
            <button
              className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/10 hover:border-white/30 transition-[background-color,border-color] duration-200 backdrop-blur-md w-full sm:w-auto"
            >
              Let&apos;s Talk Strategy
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default HeroSection;