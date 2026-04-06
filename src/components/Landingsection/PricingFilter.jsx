import { Target, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const PricingFilter = () => {
  return (
    <section id="engagement" aria-labelledby="engagement-heading" className="bg-[#050505] text-white py-24 px-4 border-t border-white/10 relative overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-4">
            [ Engagement ]
          </div>
          <h2 id="engagement-heading" className="font-heading text-5xl font-bold mt-4">
            Embedded PM.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Right-Sized for Your Stage.</span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a product strategy audit, a full MVP sprint, or an ongoing
            fractional PM — I embed into your team and operate like an internal hire,
            not a consultant who disappears after the deck.
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
              <h3 className="font-heading text-xl font-bold">Product Audit</h3>
            </div>
            <p className="font-heading text-3xl font-bold mb-1">1–2 Weeks</p>
            <p className="text-sm text-gray-400 mb-6">Fixed-scope engagement</p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Full funnel & activation audit</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Churn signal diagnosis</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Prioritized intervention backlog</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-blue-400 mt-1">✓</span>
                <span>GTM & positioning review</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Readout + strategy session</span>
              </li>
            </ul>

            <div className="bg-black/50 border border-blue-500/20 rounded-lg p-3">
              <p className="text-xs text-gray-400">BEST FOR:</p>
              <p className="text-xs text-gray-300 mt-1">Teams with a live product that&apos;s stuck — conversion isn&apos;t converting, activation isn&apos;t sticking, and you need clarity on what to fix first.</p>
            </div>
          </div>

          {/* Option 2: MVP Sprint — Most Popular */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 border-2 border-white/30 backdrop-blur-md rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-[#d6f928] to-green-400 text-black text-xs font-bold px-4 py-1 rounded-full">HIGHEST IMPACT</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#d6f928]/20 border border-[#d6f928]/30 rounded-xl flex items-center justify-center">
                <Target size={24} className="text-[#d6f928]" />
              </div>
              <h3 className="font-heading text-xl font-bold">MVP Sprint</h3>
            </div>
            <p className="font-heading text-3xl font-bold mb-1">2–4 Weeks</p>
            <p className="text-sm text-gray-400 mb-6">End-to-end product delivery</p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#d6f928] mt-1">✓</span>
                <span>PRD scoping + stakeholder alignment</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#d6f928] mt-1">✓</span>
                <span>Sprint planning in Jira/Linear</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#d6f928] mt-1">✓</span>
                <span>AI-assisted development (Claude/Gemini)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#d6f928] mt-1">✓</span>
                <span>Frontend delivery (React/Tailwind)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#d6f928] mt-1">✓</span>
                <span>Activation funnel instrumentation</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#d6f928] mt-1">✓</span>
                <span>Shipped &amp; iterated, not handed off</span>
              </li>
            </ul>

            <div className="bg-black/50 border border-[#d6f928]/20 rounded-lg p-3">
              <p className="text-xs text-gray-400">BEST FOR:</p>
              <p className="text-xs text-gray-300 mt-1">Pre-seed to Series A teams who need to go from &ldquo;we have an idea&rdquo; to &ldquo;we have a validated, working product&rdquo; — without building out a full PM hire yet.</p>
            </div>
          </div>

          {/* Option 3: Fractional PM */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:border-white/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center">
                <Clock size={24} className="text-purple-400" />
              </div>
              <h3 className="font-heading text-xl font-bold">Fractional PM</h3>
            </div>
            <p className="font-heading text-3xl font-bold mb-1">Ongoing</p>
            <p className="text-sm text-gray-400 mb-6">Embedded, part-time PM</p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-purple-400 mt-1">✓</span>
                <span>Roadmap ownership &amp; backlog management</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-purple-400 mt-1">✓</span>
                <span>Weekly sprint planning &amp; reviews</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-purple-400 mt-1">✓</span>
                <span>Cross-functional leadership (Design + Dev)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-purple-400 mt-1">✓</span>
                <span>AI feature scoping &amp; integration</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-purple-400 mt-1">✓</span>
                <span>Growth metric instrumentation</span>
              </li>
            </ul>

            <div className="bg-black/50 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs text-gray-400">BEST FOR:</p>
              <p className="text-xs text-gray-300 mt-1">Funded startups scaling fast who need a senior PM embedded in the team — without the full-time overhead of a VP Product hire yet.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-md rounded-2xl p-8 text-center">
          <h3 className="font-heading text-2xl font-bold mb-3">Not Sure Which Fits?</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-2xl mx-auto">
            Let&apos;s spend 30 minutes mapping your current product, your growth blockers,
            and the fastest path to the next metric milestone. No pitch. Just clarity.
          </p>
          <Link to="/contact">
            <button
              data-testid="book-strategy-call-btn"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-[#d6f928] transition-all shadow-lg"
            >
              Let&apos;s Talk (Free 30 Min)
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingFilter;
