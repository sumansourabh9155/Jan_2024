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

      {/* --- LAYER 1: The Technical Grid --- */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* --- LAYER 2: Glow Effects --- */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#d6f928]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

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
          BTech in CS/ML. Shipped AI-powered products with <span className="text-white font-medium">Claude and Gemini</span>.{" "}
          Led cross-functional teams across design, engineering, and product—from{" "}
          <span className="text-white font-medium">user research to launch</span>.
        </p>

        {/* Capability Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col items-center gap-3 hover:border-white/25 hover:-translate-y-1 transition-all duration-300 cursor-default group"
            >
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
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
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-base hover:bg-[#d6f928] hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto"
            >
              View Product Case Studies
            </button>
          </Link>
          <Link to="/contact">
            <button
              className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-md w-full sm:w-auto"
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