import React from "react";
import { ArrowUpRight, CircleDot, TrendingUp, Target } from "lucide-react";
import BlackButton from "../elements/BlackButton";
import OutlineButton from "../elements/OutlineButton";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full pt-36">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md text-white rounded-full text-sm mb-6">
          <CircleDot size={14} className="text-green-400" />
          SaaS Product Strategist
        </div>

        {/* Title - Bold and Impactful */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
          I Design SaaS Products<br />That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Retain Users
          </span>{" "}&{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Reduce Churn
          </span>
          <span className="inline-block align-middle ml-2">
            <ArrowUpRight className="w-8 h-8 inline-block" />
          </span>
        </h1>

        {/* Subtitle - Business Focused */}
        <p className="mt-8 text-lg sm:text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
          Moving beyond 'pixel-perfect' to <span className="font-semibold text-white">profit-focused</span>. I use{" "}
          <span className="font-semibold text-white">Psychology-driven UX</span> and{" "}
          <span className="font-semibold text-white">Technical Constraints</span> to build products that{" "}
          <span className="font-semibold text-white">scale</span>, not just screens that look nice.
        </p>

        {/* Value Props */}
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <TrendingUp size={16} className="text-green-400" />
            <span>Avg. 15-25% increase in user retention</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Target size={16} className="text-blue-400" />
            <span>20-30% reduction in cart abandonment</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact">
            <button 
              data-testid="audit-product-cta"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Audit My Product
            </button>
          </Link>
          <Link to="/projects">
            <button 
              data-testid="see-case-studies-btn"
              className="bg-white/5 border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition-all backdrop-blur-md"
            >
              See Case Studies
            </button>
          </Link>
        </div>

        {/* Social Proof - Results Focused */}
        <div className="hidden md:block absolute top-80 right-60 transform rotate-[-8deg] w-72 backdrop-blur-md bg-white/5 border border-white/10 text-white p-5 rounded-xl shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-xs font-semibold text-green-400">RESULT</span>
          </div>
          <p className="text-sm font-medium">
            "Cart abandonment dropped from 68% to 42% after Suman's checkout redesign."
          </p>
          <p className="text-right text-sm mt-3 text-gray-400">— SaaS Founder, E-commerce</p>
        </div>

        <div className="hidden md:block absolute bottom-40 right-60 transform rotate-[4deg] w-72 backdrop-blur-md bg-white/5 border border-white/10 text-white p-5 rounded-xl shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-xs font-semibold text-blue-400">IMPACT</span>
          </div>
          <p className="text-sm font-medium">
            "DAU increased by 22% within 3 months of implementing the retention-focused redesign."
          </p>
          <p className="text-right text-sm mt-3 text-gray-400">— VP Product, Fintech Startup</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;