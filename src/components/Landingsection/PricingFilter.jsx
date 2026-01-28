import React from "react";
import { DollarSign, Clock, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const PricingFilter = () => {
  return (
    // FIX 1: Added bg-[#050505] relative overflow-hidden to the section
    <section className="bg-[#050505] text-white py-24 px-4 border-t border-white/10 relative overflow-hidden">
      
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. The Technical Grid - Now visible because of bg-[#050505] */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* 2. The Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>


      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full mb-4">
            <DollarSign size={14} className="text-green-400" />
            <span className="text-gray-400">Investment & Engagement</span>
          </div>
          <h2 className="text-5xl font-bold mt-4">
            Minimum Engagement:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">$2,000</span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            I work with <span className="font-semibold text-white">serious founders</span> who understand that good design is an investment, not an expense. 
            If you're looking for a $500 logo, this isn't the right fit.
          </p>
        </div>

        {/* Engagement Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Option 1: Product Audit */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:border-white/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center">
                <Target size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Product Audit</h3>
            </div>
            <p className="text-3xl font-bold mb-2">$2,000</p>
            <p className="text-sm text-gray-400 mb-6">One-time engagement</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>Comprehensive UX/UI audit report</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>Conversion & retention analysis</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>Actionable recommendations (prioritized)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>1-hour strategy call</span>
              </li>
            </ul>

            <div className="bg-black/50 border border-blue-500/20 rounded-lg p-3">
              <p className="text-xs text-gray-400">BEST FOR:</p>
              <p className="text-xs text-gray-300 mt-1">Early-stage founders who need a roadmap before committing to a full redesign.</p>
            </div>
          </div>

          {/* Option 2: MVP Design */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 border-2 border-white/30 backdrop-blur-md rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-black text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center">
                <Zap size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold">MVP Design Sprint</h3>
            </div>
            <p className="text-3xl font-bold mb-2">$5,000</p>
            <p className="text-sm text-gray-400 mb-6">2-3 week sprint</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>Full MVP design (3-5 core screens)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>User flows & wireframes</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>High-fidelity prototypes (Figma)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>Design system basics</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>Developer handoff & 1 revision round</span>
              </li>
            </ul>

            <div className="bg-black/50 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs text-gray-400">BEST FOR:</p>
              <p className="text-xs text-gray-300 mt-1">Pre-seed startups ready to ship their first product and validate PMF.</p>
            </div>
          </div>

          {/* Option 3: Ongoing Retainer */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:border-white/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center">
                <Clock size={24} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold">Monthly Retainer</h3>
            </div>
            <p className="text-3xl font-bold mb-2">$3,500/mo</p>
            <p className="text-sm text-gray-400 mb-6">Ongoing partnership</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>~80 hours/month design work</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>Feature design & iteration</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>A/B testing & optimization</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>Weekly sync calls</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>Priority support & fast turnarounds</span>
              </li>
            </ul>

            <div className="bg-black/50 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs text-gray-400">BEST FOR:</p>
              <p className="text-xs text-gray-300 mt-1">Funded startups that need continuous design support as they scale.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-md rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Not Sure Which Fits Your Needs?</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. I'll help you figure out the right engagement model based on 
            your stage, budget, and goals.
          </p>
          <Link to="/contact">
            <button 
              data-testid="book-strategy-call-btn"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-100 transition-all shadow-lg"
            >
              Book a Strategy Call (Free)
            </button>
          </Link>
        </div>

        {/* Trust Signals */}
        {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-white">15+</p>
            <p className="text-sm text-gray-400 mt-1">SaaS Products Shipped</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">$2M+</p>
            <p className="text-sm text-gray-400 mt-1">Revenue Impact</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">22%</p>
            <p className="text-sm text-gray-400 mt-1">Avg. Retention Increase</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="text-sm text-gray-400 mt-1">Client Satisfaction</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PricingFilter;