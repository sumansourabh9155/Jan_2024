import React from "react";
import { Quote, ArrowRight } from "lucide-react";
// Keep your existing imports
import rgv from "../../assets/Img/rgv.png";
import sam from "../../assets/Img/sam.png";

const Testimonial = () => {
  return (
    <section className="bg-[#050505] py-32 px-6 relative overflow-hidden flex justify-center">
       {/* Background Elements */}
       <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* The Glow behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d6f928]/5 blur-[120px] rounded-full pointer-events-none"></div>


      <div className="max-w-7xl w-full relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-6">
               [ Social Proof ]
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Trusted by Founders <br />
              <span className="text-gray-500">Who Demand Excellence.</span>
            </h1>
          </div>
          
          <div className="text-right">
             <div className="text-3xl font-bold text-white mb-1">$250M+</div>
             <p className="text-sm text-gray-500 font-mono uppercase tracking-wide">Client Revenue Generated</p>
          </div>
        </div>

        {/* The Feature Testimonial Card */}
        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden group">
            
            {/* Giant Watermark Quote Icon */}
            <Quote className="absolute top-10 left-10 text-white/5 w-48 h-48 -rotate-12 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                
                {/* Image Section (Left) */}
                <div className="w-full lg:w-1/3 relative">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img 
                            src={sam} 
                            alt="Samira Pujari" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" // Subtle zoom on hover
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        
                        {/* Name on Image (Mobile/Tablet view mostly, or artistic choice) */}
                        <div className="absolute bottom-6 left-6 text-left">
                            <p className="text-white font-bold text-lg">Samira Pujari</p>
                            <p className="text-gray-300 text-xs uppercase tracking-wider">Founder, RaikarsGoodVibes</p>
                        </div>
                    </div>
                    
                    {/* Brand Logo Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 w-32 bg-[#dab853] p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                         <img src={rgv} alt="Brand Logo" className="w-full h-auto object-contain mix-blend-multiply" />
                    </div>
                </div>

                {/* Content Section (Right) */}
                <div className="w-full lg:w-2/3 text-left">
                    {/* The "Hook" Headline */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug mb-8">
                        "He is the person who, if he commits, <span className="text-[#d6f928] border-b border-[#d6f928]/30 pb-1">delivers with utmost excellence.</span>"
                    </h2>
                    
                    {/* The Full Quote (Muted) */}
                    <div className="text-gray-400 text-sm md:text-base leading-relaxed space-y-4 max-w-2xl">
                        <p>
                            "Suman worked on our dream project as a Lead. His gift to perfect the designs was seen from the very beginning—from understanding the founder's vision to executing the minutest details."
                        </p>
                        <p>
                            "His sincerity and dedication to execute plans despite numerous hurdles is what makes him a true winner. I believe his grit will carve his mark in this industry."
                        </p>
                    </div>

                    {/* CTA within the card */}
                    <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center">
                        <a href="/contact" className="flex items-center gap-2 text-white hover:text-[#d6f928] transition-colors font-medium">
                            Start Your Project <ArrowRight size={18} />
                        </a>
                        <span className="text-gray-600 text-sm hidden md:inline">|</span>
                        <p className="text-gray-500 text-sm">
                            Art & Décor Brand Strategy
                        </p>
                    </div>
                </div>

            </div>
        </div>

        {/* Optional: Navigation Dots (Visual balance) */}
        <div className="flex justify-center gap-3 mt-8">
            <div className="w-12 h-1 bg-[#d6f928] rounded-full"></div>
            <div className="w-2 h-1 bg-white/10 rounded-full"></div>
            <div className="w-2 h-1 bg-white/10 rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;