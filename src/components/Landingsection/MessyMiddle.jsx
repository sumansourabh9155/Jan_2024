import React from "react";
import { AlertTriangle, CheckCircle, XCircle, TrendingUp } from "lucide-react";

const MessyMiddle = () => {
  return (
    <section className="bg-black text-white py-24 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full mb-4">
            <AlertTriangle size={14} className="text-yellow-400" />
            <span className="text-gray-400">The Messy Middle</span>
          </div>
          <h2 className="text-5xl font-bold mt-4">
            I Make{" "}
            <span className="text-gray-400">Strategic Business Decisions</span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg max-w-3xl leading-relaxed">
            Most portfolios only show the "perfect" final screens. That's fake. Real product work involves 
            <span className="font-semibold text-white"> trade-offs</span>,{" "}
            <span className="font-semibold text-white">constraints</span>, and{" "}
            <span className="font-semibold text-white">tough calls</span>. Here's the chaos I actually solve.
          </p>
        </div>

        {/* Trade-off Examples */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Trade-off 1 */}
          <article className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                <XCircle size={20} className="text-red-400" />
              </div>
              <h3 className="text-lg font-bold">The Feature We Cut</h3>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">PROJECT: SaaS Dashboard Redesign</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The founder wanted an "advanced analytics" module with custom report generation, 
                PDF exports, and scheduled email delivery.
              </p>
            </div>

            <div className="bg-black/50 border border-red-500/20 rounded-lg p-4 mb-4">
              <p className="text-xs font-semibold text-red-400 mb-2">THE PROBLEM:</p>
              <p className="text-xs text-gray-400">This feature would have required 6+ weeks of backend work, delaying MVP launch by 2 months.</p>
            </div>

            <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
              <p className="text-xs font-semibold text-green-400 mb-2">THE DECISION:</p>
              <p className="text-xs text-gray-300">
                We cut it entirely. Instead, we shipped a "basic stats" view that took 3 days to build. 
                <span className="font-semibold text-white"> We validated the core product 2 months earlier</span> and 
                added advanced analytics later based on actual user demand (turns out, only 8% of users wanted it).
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-green-400 font-semibold">Result: Launched 2 months early, validated PMF faster</span>
            </div>
          </div>

          {/* Trade-off 2 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow-500/20 border border-yellow-500/30 rounded-lg flex items-center justify-center">
                <AlertTriangle size={20} className="text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold">The UX We "Broke"</h3>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">PROJECT: E-commerce Checkout Optimization</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Best practice says "minimize form fields." But our analytics showed users abandoned at the 
                "shipping address" step because they didn't trust a "too simple" checkout.
              </p>
            </div>

            <div className="bg-black/50 border border-yellow-500/20 rounded-lg p-4 mb-4">
              <p className="text-xs font-semibold text-yellow-400 mb-2">THE HYPOTHESIS:</p>
              <p className="text-xs text-gray-400">
                Users expect e-commerce checkouts to "feel secure" with more fields (address verification, phone number).
              </p>
            </div>

            <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
              <p className="text-xs font-semibold text-green-400 mb-2">THE DECISION:</p>
              <p className="text-xs text-gray-300">
                We <span className="font-semibold text-white">added</span> an extra "verify address" field (not removed fields). 
                Cart abandonment dropped from 68% to 51%. Sometimes "good UX" isn't about fewer clicks—it's about 
                <span className="font-semibold text-white"> perceived trust</span>.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-green-400 font-semibold">Result: 17% reduction in cart abandonment</span>
            </div>
          </div>

          {/* Trade-off 3 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                <CheckCircle size={20} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-bold">The "Ugly" Design That Won</h3>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">PROJECT: SaaS Onboarding Flow</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The founder loved a "minimalist" onboarding with subtle animations and clean white space. 
                Users completed it—but didn't activate the core feature.
              </p>
            </div>

            <div className="bg-black/50 border border-blue-500/20 rounded-lg p-4 mb-4">
              <p className="text-xs font-semibold text-blue-400 mb-2">THE INSIGHT:</p>
              <p className="text-xs text-gray-400">
                Users were "completing" onboarding without understanding the product's value. 
                Beautiful ≠ Effective.
              </p>
            </div>

            <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
              <p className="text-xs font-semibold text-green-400 mb-2">THE DECISION:</p>
              <p className="text-xs text-gray-300">
                We replaced the "elegant" flow with a <span className="font-semibold text-white">bold, in-your-face tutorial</span> 
                {" "}(think bright colors, bigger text, forced tooltips). Activation rate jumped from 34% to 58%. 
                The founder hated it. The users loved it.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-green-400 font-semibold">Result: 24% increase in feature activation</span>
            </div>
          </div>

          {/* Trade-off 4 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                <AlertTriangle size={20} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-bold">The Accessibility "Compromise"</h3>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">PROJECT: B2B Dashboard for Data Analysts</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                We designed a complex data visualization tool. Full WCAG AA compliance would have required 
                simplifying the charts, which would reduce their analytical power.
              </p>
            </div>

            <div className="bg-black/50 border border-purple-500/20 rounded-lg p-4 mb-4">
              <p className="text-xs font-semibold text-purple-400 mb-2">THE CONSTRAINT:</p>
              <p className="text-xs text-gray-400">
                The primary user base (enterprise data analysts) needed dense, information-rich visuals. 
                Accessibility was important, but not at the cost of core functionality.
              </p>
            </div>

            <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
              <p className="text-xs font-semibold text-green-400 mb-2">THE DECISION:</p>
              <p className="text-xs text-gray-300">
                We prioritized <span className="font-semibold text-white">keyboard navigation and screen reader support</span> 
                {" "}for critical workflows, but kept the dense visualizations intact. We added an "accessible mode" toggle 
                for users who needed it (used by &lt;5% of users).
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-green-400 font-semibold">Result: Balanced accessibility with business needs</span>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">This Is Product Management, Not Just Design</h3>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            I don't just push pixels. I make <span className="font-semibold text-white">strategic business decisions</span> that balance 
            user needs, technical constraints, and business goals. If you need someone who can only make things "pretty," 
            I'm not your designer. If you need someone who can <span className="font-semibold text-white">ship products that make money</span>, let's talk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MessyMiddle;