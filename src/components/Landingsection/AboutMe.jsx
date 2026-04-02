import suman from "../../assets/Img/suman.jpg";
import { Code, TrendingUp, Zap } from "lucide-react";

export const AboutMe = () => {
  return (
    <section aria-labelledby="about-heading" data-testid="about-section" className="bg-black flex justify-center items-center py-24 px-4 border-t border-white/10">
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full mb-4">
            <span className="text-gray-400">◎</span> About
          </div>
          <h2 id="about-heading" className="text-5xl font-bold text-white">
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
              className="object-cover rounded-xl h-[400px] w-[400px] brightness-110"
              alt="Suman Sourabh - Product Manager with CS/ML background leading cross-functional teams"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Mobile Image */}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto mt-4 h-32 w-32 bg-cover bg-center"
              style={{ backgroundImage: `url(${suman})` }}
            ></div>



            {/* The Manifesto */}
            <div className="mt-8 space-y-6 text-gray-300 text-base leading-relaxed">

              {/* Para 1: Why PM? — The Origin Story */}
              <p>
                Most product failures aren&apos;t engineering failures—they&apos;re decision failures.
                I watched technically brilliant teams spend months building exactly the wrong thing,
                because nobody had validated the problem before the sprint started. That observation is what
                drove me into Product Management. I wanted to be the person who prevents it.
                My <span className="font-semibold text-white">BTech in CS/ML</span> wasn&apos;t just a credential—it gave me the
                standing to operate in an engineering room with real authority. I can read the codebase,
                evaluate model tradeoffs, and tell the difference between genuine technical risk and scope creep
                disguised as complexity. When engineering says something is &ldquo;complex,&rdquo; I already know why.
                That eliminates an entire layer of friction—and keeps the team anchored to
                <span className="font-semibold text-white"> OKRs and the North Star metric</span>, not just the sprint board.
              </p>

              {/* Para 2: The User Signal Discipline */}
              <p>
                I then built the other side of the equation: <span className="font-semibold text-white">user research, discovery, and frontend execution</span>.
                React, Tailwind, and building actual interfaces. Not because I wanted to be a designer—but because
                I realized a PRD written without direct user signal is just an educated guess with a deadline.
                I conduct user interviews, run session recording analysis, pull
                <span className="font-semibold text-white"> cohort data directly via SQL</span>, and build activation flows
                that guide users to their &ldquo;Aha!&rdquo; moment in under 90 seconds.
                I don&apos;t ask engineering to build something until I can point to the
                <span className="font-semibold text-white"> funnel data, the interview quote, or the D7 retention signal</span> that justifies it.
                That discipline is what keeps a roadmap from becoming a feature graveyard.
              </p>

              {/* Para 3: The PM Multiplier — What You Get */}
              <p>
                Now I work as a <span className="font-semibold text-white">Product Manager</span>—and the two sides compound.
                I&apos;ve shipped multiple MVPs using <span className="font-semibold text-white">Claude and Gemini</span> as co-development tools,
                led Design on onboarding flows, led Dev through sprint planning,
                and owned AI feature work end-to-end—model selection, prompt architecture,
                output evaluation rubrics. I run backlogs in <span className="font-semibold text-white">Jira/Linear</span>,
                write PRDs that engineering trusts because they&apos;re technically grounded, and connect
                every sprint task back to a revenue or retention metric. I&apos;ve also shipped the wrong thing once—
                and it permanently changed how I validate before I build.
                The result: one PM who can lead every function, speak credibly in technical discussions,
                and keep the user&apos;s reality in every sprint decision.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
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