import suman from "../../assets/Img/suman.jpg";
import { Code, TrendingUp, Zap } from "lucide-react";

export const AboutMe = () => {
  return (
    <section aria-labelledby="about-heading" data-testid="about-section" className="bg-black flex justify-center items-center py-24 px-4 border-t border-white/10">
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-4">
            [ About ]
          </div>
          <h2 id="about-heading" className="font-heading text-5xl font-bold text-white">
            One Designer.{" "}
            <span className="text-gray-400">Every Room in the Building.</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base">Research, interaction, systems, and shipping the UI myself.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-md p-8 md:p-12">
          {/* Desktop Image */}
          <div className="hidden lg:block flex-shrink-0">
            <img
              src={suman}
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
              className="object-cover rounded-xl h-[400px] w-[400px] brightness-110"
              alt="Suman Sourabh - Product Designer specializing in AI-native product design and design systems"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Mobile Image */}
            <img
              src={suman}
              loading="lazy"
              decoding="async"
              width="128"
              height="128"
              alt="Suman Sourabh - Product Designer"
              className="block lg:hidden rounded-full shadow-xl mx-auto mt-4 h-32 w-32 object-cover"
            />



            {/* The Manifesto — 3 lines per paragraph max (Cracking PM: blobs 3+ lines aren't read) */}
            <div className="mt-8 space-y-5 text-gray-300 text-base leading-relaxed">

              <p>
                I design from the problem, not the pixels—I kept watching teams build the wrong thing because nobody validated the problem first.
                My <span className="font-semibold text-white">CS degree with an ML specialization</span> means I can read the codebase, prototype in React, and hand engineering designs they can actually ship.
                Design that ignores technical reality just becomes rework.
              </p>

              <p>
                I don&apos;t design from opinions. I run user interviews, pull <span className="font-semibold text-white">behavioral data via SQL</span>,
                and validate with <span className="font-semibold text-white">usability testing</span>.
                Nothing ships until the team can point to the research, the interview quote, or the usability finding behind it.
              </p>

              <p>
                I&apos;ve designed and shipped AI-native experiences with <span className="font-semibold text-white">Claude and Gemini</span>,
                built <span className="font-semibold text-white">design systems</span> adopted across products, and closed the design-to-code loop myself in React and Tailwind.
                Craft and velocity—not one at the cost of the other.
              </p>
            </div>

           

            {/* Key Differentiators */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="bg-black/50 border border-white/10 rounded-lg p-4">
                <Code size={24} className="text-blue-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">End-to-End Design</h4>
                <p className="text-xs text-gray-400">Research, interaction, visual, and design systems—I own the full design lifecycle, not just the handoff.</p>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-lg p-4">
                <TrendingUp size={24} className="text-green-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">AI-Native UX</h4>
                <p className="text-xs text-gray-400">I design agentic and conversational experiences—clarification, confirmation, and recovery patterns that models can actually serve.</p>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-lg p-4">
                <Zap size={24} className="text-yellow-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">Design Engineer Edge</h4>
                <p className="text-xs text-gray-400">CS/ML degree. I prototype in React and Tailwind, so I ship what I design—zero design-to-code drift.</p>
              </div>
            </div>


            {/* CTA */}

          </div>
        </div>
      </div>
    </section>
  );
};