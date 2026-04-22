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
            One PM.{" "}
            <span className="text-gray-400">Every Room in the Building.</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base">Design, engineering, product, and AI feature work.</p>
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
              alt="Suman Sourabh - Product Manager with CS/ML background leading cross-functional teams"
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
              alt="Suman Sourabh - Product Manager"
              className="block lg:hidden rounded-full shadow-xl mx-auto mt-4 h-32 w-32 object-cover"
            />



            {/* The Manifesto — 3 lines per paragraph max (Cracking PM: blobs 3+ lines aren't read) */}
            <div className="mt-8 space-y-5 text-gray-300 text-base leading-relaxed">

              <p>
                I became a PM because I kept watching great engineers build the wrong thing—nobody had validated the problem first.
                My <span className="font-semibold text-white">BTech in CS/ML</span> means I can read the codebase, challenge architecture, and tell scope creep from real complexity.
                That gives me credibility in the engineering room and keeps the team focused on what actually moves the metric.
              </p>

              <p>
                I don&apos;t write PRDs from opinions. I run user interviews, pull <span className="font-semibold text-white">cohort data via SQL</span>,
                and instrument funnels in <span className="font-semibold text-white">Amplitude/Mixpanel</span>.
                Nothing enters the sprint until I can point to the data, the interview quote, or the retention signal that justifies it.
              </p>

              <p>
                I&apos;ve shipped MVPs with <span className="font-semibold text-white">Claude and Gemini</span>,
                led Design and Dev through sprint planning, and owned AI features end-to-end.
                Backlogs in <span className="font-semibold text-white">Jira/Linear</span>. Every sprint task tied to a revenue or retention number.
              </p>
            </div>

           

            {/* Key Differentiators */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="bg-black/50 border border-white/10 rounded-lg p-4">
                <Code size={24} className="text-blue-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">Cross-Functional Lead</h4>
                <p className="text-xs text-gray-400">I lead Design, Dev, Product, and AI feature teams. I don&apos;t need a separate PM to bridge the gap.</p>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-lg p-4">
                <TrendingUp size={24} className="text-green-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">AI Feature Ownership</h4>
                <p className="text-xs text-gray-400">I scope, integrate, and ship AI features—model selection, prompt architecture, and output evaluation included.</p>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-lg p-4">
                <Zap size={24} className="text-yellow-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">Technical Depth</h4>
                <p className="text-xs text-gray-400">BTech CS/ML. I read codebases, challenge architecture, and write PRDs engineering actually ships.</p>
              </div>
            </div>


            {/* CTA */}

          </div>
        </div>
      </div>
    </section>
  );
};