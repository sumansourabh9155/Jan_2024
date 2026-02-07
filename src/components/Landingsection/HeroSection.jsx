import React from "react";
import { CircleDot, TrendingUp, Target, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <header role="banner" data-testid="hero-section" className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden px-6 pt-20">
      
      {/* --- LAYER 1: The Technical Grid (The Logic) --- */}
      {/* This draws a 1px white line every 40px using CSS gradients */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>

      {/* --- LAYER 2: The "Psychology" Glow (The Focus) --- */}
      {/* A subtle neon lime glow at the top center to highlight the headline */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#d6f928]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Secondary Blue Glow for depth (Bottom Right) */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* === LEFT COLUMN: THE PITCH (7 Cols) === */}
        <div className="lg:col-span-7 flex flex-col items-start text-left pt-10 lg:pt-0">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 rounded-full text-xs font-mono tracking-wide mb-8">
              <CircleDot size={12} className="text-[#d6f928]" />
              <span className="opacity-80">SaaS Product Strategist</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              SaaS Product Strategist <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                Reducing Churn
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                <br/> & Scaling Revenue.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-md text-gray-400 max-w-2xl font-light leading-relaxed mb-10  ">
              Moving beyond 'pixel-perfect' to <span className="text-white font-medium">profit-focused</span>. 
              I use <span className="text-white font-medium">Psychology-driven UX</span> and <span className="text-white font-medium">Technical Constraints</span> to build products that scale.
            </p>

            {/* Metrics (Value Props) */}
            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center gap-3 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                  <TrendingUp size={16} className="text-[#d6f928]" />
                  <span>Avg. <strong className="text-white">15-25%</strong> Retention Uplift</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                  <Target size={16} className="text-blue-400" />
                  <span><strong className="text-white">20-30%</strong> Less Abandonment</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/contact">
                  <button 
                  className="bg-white text-black px-8 py-4 rounded-full font-bold text-base hover:bg-[#d6f928] hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto"
                  >
                  Book Strategy Call
                  </button>
              </Link>
              <Link to="/projects">
                  <button 
                  className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-md w-full sm:w-auto"
                  >
                  See Case Studies
                  </button>
              </Link>
            </div>
        </div>


        {/* === RIGHT COLUMN: THE EVIDENCE STACK (5 Cols) === */}
        {/* Only visible on Desktop to preserve mobile hierarchy */}
        <div className="hidden lg:block lg:col-span-5 relative h-[600px] w-full">
            
            {/* Background Glow for the Stack */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

            {/* --- Card 1: Success Rate (Top Right) --- */}
            <div className="absolute top-10 right-0 z-30 hover:z-40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="backdrop-blur-xl bg-[#0a0a0a]/90 border border-white/10 p-6 rounded-2xl shadow-2xl w-56 group hover:border-blue-500/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors">Velocity</span>
                </div>
                 <div className="flex items-baseline gap-1">
                    <p className="text-5xl font-bold text-white tracking-tighter">25</p>
                    <span className="text-2xl text-gray-500 font-light">+</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 border-t border-white/5 pt-2">Products Shipped</p>
              </div>
            </div>

            {/* --- Card 2: Authority (Middle Left) --- */}
            <div className="absolute top-48 left-0 z-20 hover:z-40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="backdrop-blur-xl bg-[#0a0a0a]/90 border border-white/10 p-6 rounded-2xl shadow-2xl w-56 group hover:border-[#d6f928]/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d6f928] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d6f928]"></span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-[#d6f928] transition-colors">Client Satisfaction</span>
                </div>
                <div className="flex items-baseline gap-1">
                    <p className="text-5xl font-bold text-white tracking-tighter">85</p>
                    <span className="text-2xl text-gray-500 font-light">%</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 border-t border-white/5 pt-2">Repeat Hire Rate</p>
              </div>
            </div>
            
            {/* --- Card 3: Velocity (Bottom Right) --- */}
            <div className="absolute bottom-20 right-8 z-10 hover:z-40 transition-all duration-300 transform hover:-translate-y-2">
               <div className="backdrop-blur-xl bg-[#0a0a0a]/90 border border-white/10 p-6 rounded-2xl shadow-2xl w-56 group hover:border-purple-500/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-sm rotate-45"></div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-purple-400 transition-colors">Authority</span>
                </div>
                <div className="flex items-baseline gap-1">
                    <p className="text-5xl font-bold text-white tracking-tighter">3</p>
                    <span className="text-2xl text-gray-500 font-light">+</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 border-t border-white/5 pt-2">Public Speaking Events</p>
              </div>
              
            </div>

            {/* Connecting Lines (The Logic Visual) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                <line x1="70%" y1="20%" x2="30%" y2="45%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="30%" y1="60%" x2="60%" y2="80%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
            </svg>

        </div>

      </div>
    </div>
  );
};

export default HeroSection;