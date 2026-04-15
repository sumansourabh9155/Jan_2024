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
            <svg className="w-full h-20 my-3" viewBox="0 0 360 70" fill="none">
              <defs>
                <filter id="mm1-glow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              {/* Model A - dimmed/rejected */}
              <rect x="10" y="12" width="80" height="46" rx="8" stroke="#3b82f6" strokeOpacity="0.15" fill="#3b82f6" fillOpacity="0.03" />
              <rect x="22" y="24" width="32" height="3" rx="1.5" fill="#3b82f6" fillOpacity="0.12" />
              <rect x="22" y="31" width="50" height="3" rx="1.5" fill="#3b82f6" fillOpacity="0.08" />
              <rect x="22" y="38" width="24" height="3" rx="1.5" fill="#3b82f6" fillOpacity="0.06" />
              <line x1="10" y1="12" x2="90" y2="58" stroke="#ef4444" strokeOpacity="0.15" strokeWidth="1" />
              {/* Model B - dimmed/rejected */}
              <rect x="108" y="12" width="80" height="46" rx="8" stroke="#3b82f6" strokeOpacity="0.15" fill="#3b82f6" fillOpacity="0.03" />
              <rect x="120" y="24" width="40" height="3" rx="1.5" fill="#3b82f6" fillOpacity="0.12" />
              <rect x="120" y="31" width="52" height="3" rx="1.5" fill="#3b82f6" fillOpacity="0.08" />
              <rect x="120" y="38" width="30" height="3" rx="1.5" fill="#3b82f6" fillOpacity="0.06" />
              <line x1="108" y1="12" x2="188" y2="58" stroke="#ef4444" strokeOpacity="0.15" strokeWidth="1" />
              {/* Arrow */}
              <path d="M200 35 L225 35" stroke="white" strokeOpacity="0.1" strokeDasharray="3 3" />
              <path d="M220 30 L228 35 L220 40" stroke="white" strokeOpacity="0.15" fill="none" />
              {/* Model C - chosen with glow */}
              <rect x="240" y="6" width="100" height="58" rx="10" stroke="#3b82f6" strokeOpacity="0.5" fill="#3b82f6" fillOpacity="0.06" />
              <rect x="255" y="20" width="44" height="3" rx="1.5" fill="#3b82f6" fillOpacity="0.3" />
              <rect x="255" y="27" width="62" height="3" rx="1.5" fill="#3b82f6" fillOpacity="0.25" />
              <rect x="255" y="34" width="36" height="3" rx="1.5" fill="#3b82f6" fillOpacity="0.2" />
              <path d="M310 42 L316 48 L328 36" stroke="#d6f928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#mm1-glow)" />
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
            <svg className="w-full h-20 my-3" viewBox="0 0 360 70" fill="none">
              <defs>
                <filter id="mm2-glow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              {/* Feature 1 — cut */}
              <rect x="8" y="12" width="62" height="46" rx="7" stroke="#ef4444" strokeOpacity="0.2" fill="#ef4444" fillOpacity="0.03" />
              <rect x="18" y="24" width="30" height="2.5" rx="1" fill="#ef4444" fillOpacity="0.12" />
              <rect x="18" y="30" width="40" height="2.5" rx="1" fill="#ef4444" fillOpacity="0.08" />
              <line x1="8" y1="14" x2="70" y2="56" stroke="#ef4444" strokeOpacity="0.35" strokeWidth="1.5" />
              <text x="22" y="50" fill="#ef4444" fillOpacity="0.3" fontSize="7" fontFamily="monospace">6wk</text>
              {/* Feature 2 — cut */}
              <rect x="82" y="12" width="62" height="46" rx="7" stroke="#ef4444" strokeOpacity="0.2" fill="#ef4444" fillOpacity="0.03" />
              <rect x="92" y="24" width="34" height="2.5" rx="1" fill="#ef4444" fillOpacity="0.12" />
              <rect x="92" y="30" width="42" height="2.5" rx="1" fill="#ef4444" fillOpacity="0.08" />
              <line x1="82" y1="14" x2="144" y2="56" stroke="#ef4444" strokeOpacity="0.35" strokeWidth="1.5" />
              <text x="96" y="50" fill="#ef4444" fillOpacity="0.3" fontSize="7" fontFamily="monospace">4wk</text>
              {/* Feature 3 — cut */}
              <rect x="156" y="12" width="62" height="46" rx="7" stroke="#ef4444" strokeOpacity="0.2" fill="#ef4444" fillOpacity="0.03" />
              <rect x="166" y="24" width="28" height="2.5" rx="1" fill="#ef4444" fillOpacity="0.12" />
              <rect x="166" y="30" width="38" height="2.5" rx="1" fill="#ef4444" fillOpacity="0.08" />
              <line x1="156" y1="14" x2="218" y2="56" stroke="#ef4444" strokeOpacity="0.35" strokeWidth="1.5" />
              <text x="170" y="50" fill="#ef4444" fillOpacity="0.3" fontSize="7" fontFamily="monospace">3wk</text>
              {/* Arrow */}
              <path d="M230 35 L258 35" stroke="white" strokeOpacity="0.1" strokeDasharray="3 3" />
              <path d="M253 30 L261 35 L253 40" stroke="white" strokeOpacity="0.15" fill="none" />
              {/* Shipped — the one that mattered */}
              <rect x="272" y="6" width="78" height="58" rx="10" stroke="#d6f928" strokeOpacity="0.5" fill="#d6f928" fillOpacity="0.04" />
              <rect x="286" y="22" width="50" height="3" rx="1.5" fill="#d6f928" fillOpacity="0.25" />
              <rect x="286" y="29" width="50" height="3" rx="1.5" fill="#d6f928" fillOpacity="0.2" />
              <path d="M304 42 L310 48 L322 36" stroke="#d6f928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#mm2-glow)" />
              <text x="286" y="58" fill="#d6f928" fillOpacity="0.35" fontSize="7" fontFamily="monospace">3 days</text>
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
            <svg className="w-full h-20 my-3" viewBox="0 0 360 70" fill="none">
              <defs>
                <linearGradient id="mm3-long" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#eab308" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#eab308" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="mm3-short" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#d6f928" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#d6f928" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              {/* Label */}
              <text x="12" y="14" fill="white" fillOpacity="0.15" fontSize="8" fontFamily="monospace">BUILD</text>
              {/* Long bar — 3 week custom build */}
              <rect x="12" y="20" width="290" height="18" rx="5" fill="url(#mm3-long)" stroke="#eab308" strokeOpacity="0.15" />
              {/* Sprint blocks inside */}
              <rect x="18" y="24" width="42" height="10" rx="3" fill="#eab308" fillOpacity="0.12" stroke="#eab308" strokeOpacity="0.08" />
              <rect x="64" y="24" width="42" height="10" rx="3" fill="#eab308" fillOpacity="0.1" stroke="#eab308" strokeOpacity="0.06" />
              <rect x="110" y="24" width="42" height="10" rx="3" fill="#eab308" fillOpacity="0.08" stroke="#eab308" strokeOpacity="0.05" />
              <rect x="156" y="24" width="42" height="10" rx="3" fill="#eab308" fillOpacity="0.06" stroke="#eab308" strokeOpacity="0.04" />
              <rect x="202" y="24" width="42" height="10" rx="3" fill="#eab308" fillOpacity="0.05" stroke="#eab308" strokeOpacity="0.03" />
              <rect x="248" y="24" width="42" height="10" rx="3" fill="#eab308" fillOpacity="0.04" stroke="#eab308" strokeOpacity="0.03" />
              <text x="310" y="33" fill="#eab308" fillOpacity="0.35" fontSize="8" fontFamily="monospace">3 wk</text>
              {/* Label */}
              <text x="12" y="52" fill="white" fillOpacity="0.15" fontSize="8" fontFamily="monospace">PROMPT</text>
              {/* Short bar — 1 day API call */}
              <rect x="12" y="56" width="52" height="18" rx="5" fill="url(#mm3-short)" stroke="#d6f928" strokeOpacity="0.4" />
              <rect x="18" y="60" width="40" height="10" rx="3" fill="#d6f928" fillOpacity="0.2" stroke="#d6f928" strokeOpacity="0.15" />
              <text x="72" y="69" fill="#d6f928" fillOpacity="0.5" fontSize="8" fontFamily="monospace">1 day</text>
              {/* Savings callout */}
              <path d="M80 65 L110 65" stroke="#d6f928" strokeOpacity="0.15" strokeDasharray="2 3" />
              <text x="116" y="68" fill="#d6f928" fillOpacity="0.3" fontSize="7" fontFamily="monospace">same output</text>
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
            <svg className="w-full h-20 my-3" viewBox="0 0 360 70" fill="none">
              <defs>
                <linearGradient id="mm4-bar1" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="mm4-bar2" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#d6f928" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#d6f928" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient id="mm4-curve" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#d6f928" stopOpacity="0.7" />
                </linearGradient>
                <filter id="mm4-glow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              {/* Baseline */}
              <line x1="30" y1="60" x2="330" y2="60" stroke="white" strokeOpacity="0.05" />
              {/* Before bar — 34% */}
              <rect x="50" y="32" width="50" height="28" rx="5" fill="url(#mm4-bar1)" stroke="#a855f7" strokeOpacity="0.25" />
              <text x="60" y="50" fill="#a855f7" fillOpacity="0.5" fontSize="10" fontFamily="monospace">34%</text>
              <text x="55" y="72" fill="white" fillOpacity="0.12" fontSize="7" fontFamily="monospace">before</text>
              {/* After bar — 58% */}
              <rect x="120" y="12" width="50" height="48" rx="5" fill="url(#mm4-bar2)" stroke="#d6f928" strokeOpacity="0.4" />
              <text x="127" y="38" fill="#d6f928" fillOpacity="0.6" fontSize="10" fontFamily="monospace">58%</text>
              <text x="127" y="72" fill="white" fillOpacity="0.12" fontSize="7" fontFamily="monospace">after</text>
              {/* Trend line with data points */}
              <path d="M200 52 C220 48, 240 40, 260 30 S300 14, 330 8" stroke="url(#mm4-curve)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="200" cy="52" r="3" fill="#a855f7" fillOpacity="0.4" />
              <circle cx="230" cy="42" r="3" fill="#a855f7" fillOpacity="0.4" />
              <circle cx="260" cy="30" r="3.5" fill="#d6f928" fillOpacity="0.5" />
              <circle cx="295" cy="18" r="3.5" fill="#d6f928" fillOpacity="0.6" />
              <circle cx="330" cy="8" r="5" fill="#d6f928" fillOpacity="0.7" filter="url(#mm4-glow)" />
              {/* +24% callout */}
              <text x="305" y="8" fill="#d6f928" fillOpacity="0.5" fontSize="9" fontFamily="monospace">+24%</text>
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
