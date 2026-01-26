import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Zap, Target, Rocket } from "lucide-react";
import ux from "../../assets/Img/ux.png";
import strategy from "../../assets/Img/strategy.png";

const DesignServices = () => {
  const features = [
    "Retention Optimization",
    "Conversion Funnels",
    "Design Systems",
    "Behavioral Psychology",
    "Rapid Prototyping",
    "User Research & Testing",
    "MVP Strategy",
    "Interaction Design",
    "Product-Market Fit",
    "Churn Reduction",
    "Usability Testing",
    "A/B Testing Setup",
    "Technical Feasibility",
    "Scalable Architecture",
    "Metrics-Driven Design",
  ];

  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full mb-4">
              <span className="text-gray-400">◎</span> What I Actually Do
            </div>
            <h1 className="text-5xl font-bold">
              Outcomes,{" "}
              <span className="text-gray-400">Not Just Deliverables</span>
            </h1>
            <p className="text-gray-400 mt-4 text-base max-w-2xl leading-relaxed">
              I don't sell "design." I sell retention, conversion, and revenue growth. 
              Every engagement is measured by business impact, not Dribbble likes.
            </p>
          </div>

          <Link
            to="/contact"
            data-testid="services-contact-btn"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition shadow-lg"
          >
            Start a Project
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Retention & Conversion Design */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4 text-white">
                <TrendingUp size={20} />
                <h2 className="text-lg font-bold">Retention & Conversion Design</h2>
              </div>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                I don't just make interfaces "pretty." I design experiences that keep users coming back. 
                By applying behavioral psychology (Loss Aversion, Endowed Progress Effect, Variable Rewards), 
                I build products that reduce churn by 15-30%.
              </p>
              <div className="bg-black/30 border border-white/5 rounded-lg p-4 mt-4">
                <p className="text-xs text-gray-400 mb-2">TYPICAL IMPACT:</p>
                <p className="text-sm font-semibold text-white">↑ 20-25% increase in DAU (Daily Active Users)</p>
                <p className="text-sm font-semibold text-white">↓ 15-30% reduction in user churn</p>
              </div>
              <img
                src={ux}
                alt="Retention Design"
                className="w-full rounded-md object-cover mt-4"
              />
            </div>

            {/* Product Strategy & Logic */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 text-white">
                <Target size={20} />
                <h2 className="text-lg font-bold">Product Strategy & Logic</h2>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                I don't design "impossible" features. I understand technical constraints, API limitations, 
                and backend logic. I facilitate UX workshops to align stakeholders, define MVP scope, 
                and build product roadmaps that ship on time.
              </p>
              <div className="mt-4 p-4 bg-black/30 border border-white/5 rounded-lg">
                <p className="text-xs font-mono text-green-400">// I speak Product Manager</p>
                <p className="text-xs text-gray-400 mt-2">"By cutting Feature X, we shipped 2 weeks early and validated our core hypothesis with real users."</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* High-Intent Landing Pages */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 text-white">
                <Zap size={20} />
                <h2 className="text-lg font-bold">High-Intent Landing Pages</h2>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                I build landing pages optimized for conversion, not just aesthetics. 
                Every CTA placement, color choice, and headline is backed by conversion psychology. 
                Built with Framer, Webflow, or custom React—whatever converts best.
              </p>
              <div className="bg-black/30 border border-white/5 rounded-lg p-4 mt-4">
                <p className="text-xs text-gray-400 mb-2">PROVEN RESULTS:</p>
                <p className="text-sm font-semibold text-white">↑ 30-45% increase in sign-up conversions</p>
                <p className="text-sm font-semibold text-white">↓ 20-35% reduction in bounce rate</p>
              </div>
            </div>

            {/* Rapid MVP Deployment */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4 text-white">
                <Rocket size={20} />
                <h2 className="text-lg font-bold">Rapid MVP Deployment</h2>
              </div>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                I help founders ship MVPs fast. I prioritize ruthlessly, cutting features that delay launch. 
                I design within technical constraints and work directly with developers to ensure 
                what I design can actually be built.
              </p>
              <img
                src={strategy}
                alt="MVP Strategy"
                className="w-full rounded-md object-cover"
              />
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full">Tech-Literate</span>
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full">Ship Fast</span>
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full">No Fluff</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-xs bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/10 transition"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignServices;