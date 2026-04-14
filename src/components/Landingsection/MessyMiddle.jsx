import { AlertTriangle, CheckCircle, XCircle, TrendingUp, Cpu } from "lucide-react";

const MessyMiddle = () => {
  return (
    <section className="bg-black text-white py-24 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-4">
            [ Decision Log ]
          </div>
          <h2 className="font-heading text-5xl font-bold mt-4">
            How I Actually{" "}
            <span className="text-gray-400">Make Product Calls</span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg max-w-3xl leading-relaxed">
            Four real decisions. The scope cuts, technical bets, and the times data overruled instinct.
          </p>
        </div>

        {/* Trade-off Grid — Flattened: title + story + result */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Decision 1 */}
          <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                <Cpu size={20} className="text-blue-400" />
              </div>
              <h3 className="font-heading text-lg font-bold">Which AI to Build With</h3>
            </div>
            {/* Concept: Model evaluation → selection */}
            <svg className="w-48 h-10 my-3 opacity-60" viewBox="0 0 200 40" fill="none">
              <rect x="0" y="8" width="50" height="24" rx="6" stroke="#3b82f6" strokeWidth="1" opacity="0.25" />
              <rect x="70" y="8" width="50" height="24" rx="6" stroke="#3b82f6" strokeWidth="1" opacity="0.25" />
              <rect x="140" y="4" width="56" height="32" rx="8" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" fill="#3b82f6" fillOpacity="0.08" />
              <path d="M160 18 L166 24 L176 14" stroke="#d6f928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Founder default was &ldquo;just use ChatGPT.&rdquo;
              I evaluated latency, cost-per-token, and output consistency per use case.
              Chose <span className="font-semibold text-white">Claude</span> for long-form content and <span className="font-semibold text-white">Gemini</span> for multimodal workflows.
              Product spec decision, not developer preference.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-green-400 font-semibold">Right model, right feature. Output quality matched user expectation from day one.</span>
            </div>
          </article>

          {/* Decision 2 */}
          <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                <XCircle size={20} className="text-red-400" />
              </div>
              <h3 className="font-heading text-lg font-bold">The Feature I Killed Before Sprint 1</h3>
            </div>
            {/* Concept: Scope cut — 3 cut features → 1 shipped */}
            <svg className="w-56 h-10 my-3 opacity-60" viewBox="0 0 232 40" fill="none">
              <rect x="0" y="8" width="36" height="24" rx="5" stroke="#ef4444" opacity="0.25" />
              <line x1="6" y1="12" x2="30" y2="28" stroke="#ef4444" opacity="0.35" strokeWidth="1.5" />
              <rect x="44" y="8" width="36" height="24" rx="5" stroke="#ef4444" opacity="0.25" />
              <line x1="50" y1="12" x2="74" y2="28" stroke="#ef4444" opacity="0.35" strokeWidth="1.5" />
              <rect x="88" y="8" width="36" height="24" rx="5" stroke="#ef4444" opacity="0.25" />
              <line x1="94" y1="12" x2="118" y2="28" stroke="#ef4444" opacity="0.35" strokeWidth="1.5" />
              <path d="M136 20 L152 20" stroke="white" opacity="0.1" />
              <path d="M148 16 L154 20 L148 24" stroke="white" opacity="0.15" fill="none" />
              <rect x="164" y="4" width="44" height="32" rx="7" stroke="#d6f928" opacity="0.5" fill="#d6f928" fillOpacity="0.06" />
              <path d="M180 16 L184 21 L193 12" stroke="#d6f928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Founder wanted custom reports, PDF exports, and scheduled emails in the MVP. Engineering estimate: 6+ weeks.
              I cut all of it. Shipped a basic stats view in 3 days.
              Post-launch: only <span className="font-semibold text-white">8% of users</span> ever requested exports. The feature that almost ate the roadmap was an edge case.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-green-400 font-semibold">Shipped 2 months early. PMF validated on real user data.</span>
            </div>
          </article>

          {/* Decision 3 */}
          <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow-500/20 border border-yellow-500/30 rounded-lg flex items-center justify-center">
                <AlertTriangle size={20} className="text-yellow-400" />
              </div>
              <h3 className="font-heading text-lg font-bold">Build It vs. Prompt It</h3>
            </div>
            {/* Concept: Effort comparison — long build vs short prompt */}
            <svg className="w-52 h-12 my-3 opacity-60" viewBox="0 0 220 48" fill="none">
              <rect x="0" y="4" width="196" height="16" rx="4" fill="#eab308" fillOpacity="0.06" stroke="#eab308" strokeOpacity="0.15" />
              <rect x="4" y="8" width="8" height="8" rx="1.5" fill="#eab308" fillOpacity="0.25" />
              <rect x="16" y="8" width="8" height="8" rx="1.5" fill="#eab308" fillOpacity="0.22" />
              <rect x="28" y="8" width="8" height="8" rx="1.5" fill="#eab308" fillOpacity="0.19" />
              <rect x="40" y="8" width="8" height="8" rx="1.5" fill="#eab308" fillOpacity="0.16" />
              <rect x="52" y="8" width="8" height="8" rx="1.5" fill="#eab308" fillOpacity="0.13" />
              <rect x="0" y="28" width="48" height="16" rx="4" fill="#d6f928" fillOpacity="0.1" stroke="#d6f928" strokeOpacity="0.3" />
              <rect x="4" y="32" width="8" height="8" rx="1.5" fill="#d6f928" fillOpacity="0.5" />
              <path d="M56 36 L68 36" stroke="#d6f928" strokeOpacity="0.4" />
              <path d="M64 32 L70 36 L64 40" stroke="#d6f928" strokeOpacity="0.4" fill="none" />
            </svg>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Team wanted a custom sentiment analysis module. 3-week sprint estimate.
              I replaced it with a <span className="font-semibold text-white">structured Claude API call</span>—same output, deployed in one day.
              Saved 3 weeks of sprint capacity that went into the core product.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-green-400 font-semibold">3-week sprint saved. Same quality. Zero maintenance debt.</span>
            </div>
          </article>

          {/* Decision 4 */}
          <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                <CheckCircle size={20} className="text-purple-400" />
              </div>
              <h3 className="font-heading text-lg font-bold">When the Data Overruled the Founder</h3>
            </div>
            {/* Concept: Before/after metric lift */}
            <svg className="w-40 h-12 my-3 opacity-60" viewBox="0 0 160 48" fill="none">
              <rect x="8" y="22" width="28" height="22" rx="4" fill="#a855f7" fillOpacity="0.12" stroke="#a855f7" strokeOpacity="0.2" />
              <rect x="48" y="6" width="28" height="38" rx="4" fill="#a855f7" fillOpacity="0.25" stroke="#a855f7" strokeOpacity="0.4" />
              <path d="M92 34 L106 22 L120 26 L140 8" stroke="#d6f928" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="140" cy="8" r="3" fill="#d6f928" fillOpacity="0.7" />
            </svg>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Founder wanted a &ldquo;clean&rdquo; onboarding. Activation rate: stuck at 34%.
              Session recordings showed users never reached the core value action.
              I replaced it with a <span className="font-semibold text-white">forced interactive tutorial</span>.
              Activation jumped from <span className="font-semibold text-white">34% to 58%</span>. The founder hated the look. The numbers ended the debate.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-green-400 font-semibold">+24% activation. Data won.</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MessyMiddle;
