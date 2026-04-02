import { AlertTriangle, CheckCircle, XCircle, TrendingUp, Cpu } from "lucide-react";

const MessyMiddle = () => {
  return (
    <section className="bg-black text-white py-24 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full mb-4">
            <AlertTriangle size={14} className="text-yellow-400" />
            <span className="text-gray-400">PM Decision Log</span>
          </div>
          <h2 className="text-5xl font-bold mt-4">
            How I Actually{" "}
            <span className="text-gray-400">Make Product Calls</span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg max-w-3xl leading-relaxed">
            Most portfolios show finished products. This shows the{" "}
            <span className="font-semibold text-white">decisions that shaped them</span>—
            the scope cuts, the technical bets, the times data overruled instinct.
            Each decision is tagged with the PM competency it demonstrates.
          </p>
        </div>

        {/* Trade-off Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Decision 1: AI Tool Selection for MVP */}
          <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                  <Cpu size={20} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-bold">Which AI to Build With</h3>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">CONTEXT: Multiple AI-Powered MVP Builds</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Across multiple product builds, I needed to choose between Claude, Gemini, and GPT-4
                for core LLM features. The founder default was &ldquo;just use ChatGPT.&rdquo;
              </p>
            </div>

            <div className="bg-black/50 border border-blue-500/20 rounded-lg p-4 mb-4">
              <p className="text-xs font-semibold text-blue-400 mb-2">THE PM QUESTION:</p>
              <p className="text-xs text-gray-400">
                Which model fits the use case, the latency requirement, the cost-per-token budget,
                and the output consistency we need for the activation funnel?
              </p>
            </div>

            <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
              <p className="text-xs font-semibold text-green-400 mb-2">THE DECISION:</p>
              <p className="text-xs text-gray-300">
                Used <span className="font-semibold text-white">Claude</span> for long-form content generation (better instruction-following, lower hallucination rate on structured tasks).
                Used <span className="font-semibold text-white">Gemini</span> for multimodal inputs and Google Workspace integrations where latency mattered more than depth.
                This model selection was a <span className="font-semibold text-white">product spec decision</span>, not a developer preference.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-green-400 font-semibold">Result: Right model in the right feature — output quality matched user expectation</span>
            </div>
          </article>

          {/* Decision 2: Scope Cut to Ship Faster */}
          <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-10 h-10 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                <XCircle size={20} className="text-red-400" />
              </div>
              <h3 className="text-lg font-bold">The Feature We Killed Before Sprint 1</h3>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">PROJECT: SaaS Dashboard MVP</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The founder wanted custom report generation, PDF exports, and scheduled email delivery
                baked into the MVP. The engineering estimate was 6+ weeks.
              </p>
            </div>

            <div className="bg-black/50 border border-red-500/20 rounded-lg p-4 mb-4">
              <p className="text-xs font-semibold text-red-400 mb-2">THE RISK:</p>
              <p className="text-xs text-gray-400">
                Building this would delay the launch by 2 months and burn runway on a feature
                that had zero validated demand from real users.
              </p>
            </div>

            <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
              <p className="text-xs font-semibold text-green-400 mb-2">THE PM CALL:</p>
              <p className="text-xs text-gray-300">
                Cut entirely from V1. Shipped a basic stats view that took 3 days.
                <span className="font-semibold text-white"> Validated core PMF 2 months earlier.</span>{" "}
                Post-launch data confirmed only 8% of users ever requested advanced exports.
                The feature that almost ate the roadmap served a minority edge case.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-green-400 font-semibold">Result: Shipped 2 months early, PMF validated on real data</span>
            </div>
          </article>

          {/* Decision 3: Build vs Buy vs Prompt */}
          <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-10 h-10 bg-yellow-500/20 border border-yellow-500/30 rounded-lg flex items-center justify-center">
                <AlertTriangle size={20} className="text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold">Build It vs. Prompt It</h3>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">CONTEXT: Internal Tooling Decision</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The team wanted a custom sentiment analysis module built from scratch.
                Estimated 3-week engineering sprint. The use case: flag negative user feedback in real-time.
              </p>
            </div>

            <div className="bg-black/50 border border-yellow-500/20 rounded-lg p-4 mb-4">
              <p className="text-xs font-semibold text-yellow-400 mb-2">THE ALTERNATIVE:</p>
              <p className="text-xs text-gray-400">
                A well-structured Claude API call with a system prompt could deliver the same output
                in 2 hours of integration work—at a fraction of the maintenance cost.
              </p>
            </div>

            <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
              <p className="text-xs font-semibold text-green-400 mb-2">THE DECISION:</p>
              <p className="text-xs text-gray-300">
                Shipped the <span className="font-semibold text-white">LLM-powered version in a day</span>—
                prompt-engineered the classification logic, wrapped it in a webhook, routed to Slack.
                Saved 3 weeks of sprint capacity that went directly into the core product.
                Build vs. prompt is now a standing PRD checklist item.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-green-400 font-semibold">Result: 3-week sprint saved, same output quality, zero maintenance debt</span>
            </div>
          </article>

          {/* Decision 4: Activation over aesthetics */}
          <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                <CheckCircle size={20} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-bold">When the Data Overruled the Founder</h3>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">PROJECT: SaaS Onboarding Activation</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The founder wanted a minimal, &ldquo;clean&rdquo; onboarding flow.
                Users completed it—but activation rate (feature usage within 48hrs) was stuck at 34%.
              </p>
            </div>

            <div className="bg-black/50 border border-purple-500/20 rounded-lg p-4 mb-4">
              <p className="text-xs font-semibold text-purple-400 mb-2">THE FINDING:</p>
              <p className="text-xs text-gray-400">
                Session recording data showed users were exiting without ever triggering
                the core value action. The flow looked good—but it never connected
                the user to the product&apos;s &ldquo;Aha!&rdquo; moment.
              </p>
            </div>

            <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
              <p className="text-xs font-semibold text-green-400 mb-2">THE PM CALL:</p>
              <p className="text-xs text-gray-300">
                Replaced the &ldquo;clean&rdquo; flow with a{" "}
                <span className="font-semibold text-white">forced interactive tutorial</span>—
                mandatory steps, highlighted CTAs, progress indicators.
                Activation rate jumped from <span className="font-semibold text-white">34% to 58%</span>.
                The founder hated the look. The retention numbers ended the debate.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-green-400 font-semibold">Result: +24% activation rate. Data won the argument.</span>
            </div>
          </article>
        </div>

        {/* Bottom Signal */}
        <div className="mt-12 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 border border-yellow-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">The Decisions Are the Work</h3>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Scope cuts that saved two months. AI tool bets grounded in product requirements, not hype.
            Data that overruled founder instinct. These are the calls that determine whether a product ships or stalls—
            and they happen before a single line of code is written.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MessyMiddle;
