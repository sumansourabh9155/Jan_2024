import { GitBranch, CheckCircle, Workflow, LayoutDashboard } from "lucide-react";

const TechProof = () => {
  return (
    <section className="bg-black text-white py-24 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-4">
            [ Builder PM ]
          </div>
          <h2 className="font-heading text-5xl font-bold mt-4">
            I Don&apos;t Just Spec It.{" "}
            <span className="text-gray-400">I Ship It.</span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg max-w-3xl leading-relaxed">
            Technical depth becomes a competitive advantage when it means I can{" "}
            <span className="font-semibold text-white">reduce the engineering queue—not add to it.</span>{" "}
            Here&apos;s what I build myself.
          </p>
        </div>

        {/* Two-Column Showcase */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left: Automated Data Pipelines (n8n) */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Workflow size={24} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Automated Data Pipelines</h3>
                <p className="text-sm text-gray-400">n8n · API Webhooks · No Engineering Required</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              End-to-end automated workflows using <span className="font-semibold text-white">n8n</span>—connecting lead
              sources, CRMs, and notification systems via API webhooks. Zero engineering tickets.
              Conditional logic, data enrichment, Slack/email triggers, all deployed autonomously.
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-400 mb-3">TECHNOLOGIES:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs">n8n</span>
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs">REST APIs</span>
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs">Webhook Routing</span>
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs">JSON Transforms</span>
              </div>
            </div>

            {/* Capabilities */}
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-3">WHAT IT DOES:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Lead capture → CRM routing via webhook, automated</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Multi-step pipeline with conditional branching logic</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Real-time Slack/email alerts on trigger events</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Zero infrastructure cost, zero DevOps dependency</span>
                </div>
              </div>
            </div>

            {/* Pipeline Diagram */}
            <div className="mt-6 bg-black/50 border border-white/5 rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-400 mb-3">PIPELINE FLOW:</p>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0">1</span>
                  <span className="text-gray-300">Webhook trigger: new lead captured</span>
                </div>
                <div className="pl-2 text-gray-600">↓</div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-yellow-500 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0">2</span>
                  <span className="text-gray-300">Conditional logic: score &amp; route</span>
                </div>
                <div className="pl-2 text-gray-600">↓</div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-500 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0">3</span>
                  <span className="text-gray-300">CRM update + Slack alert fired</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Serverless Internal Apps */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <LayoutDashboard size={24} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Serverless Internal Tools</h3>
                <p className="text-sm text-gray-400">React · Tailwind · Google Apps Script · Sheets</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Internal dashboards built and shipped without an engineer: expense trackers, CRM views,
              reporting dashboards. <span className="font-semibold text-white">React/Tailwind</span> frontend.{" "}
              <span className="font-semibold text-white">Google Apps Script + Sheets</span> as the lightweight
              serverless backend. Deployed without infrastructure overhead.
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-400 mb-3">TECHNOLOGIES:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs">React</span>
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs">Tailwind</span>
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs">Google Apps Script</span>
                <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs">Sheets API</span>
              </div>
            </div>

            {/* Capabilities */}
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-3">WHAT I&apos;VE SHIPPED:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Expense tracker with category analytics and charts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">CRM dashboard pulling live data from Google Sheets</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Automated reporting via Apps Script cron triggers</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">No server cost, no DevOps, no engineering queue</span>
                </div>
              </div>
            </div>

            {/* Architecture note */}
            <div className="mt-6 bg-black/50 border border-white/5 rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-400 mb-2">ARCHITECTURE PATTERN:</p>
              <pre className="text-xs text-blue-400 font-mono overflow-x-auto">
{`React (UI)
  → Apps Script (API layer)
    → Google Sheets (data store)
      → Cron trigger (automation)
// Zero infra. Fully operational.`}
              </pre>
            </div>
          </div>
        </div>

        {/* Bottom Signal */}
        <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-orange-500/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 text-center md:text-left">
              <GitBranch size={32} className="mx-auto md:mx-0 mb-4 text-orange-400" />
              <h3 className="font-heading text-2xl font-bold mb-2">The Signal to Hiring Managers</h3>
              <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
                My technical depth doesn&apos;t just make me a better PM.
                It means I can build the tools that remove bottlenecks from the engineering
                team&apos;s path—so they stay focused on the core product, not internal busywork.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Where This Is Going</p>
              <div className="flex items-start gap-3 bg-black/30 border border-white/5 rounded-lg px-4 py-3">
                <span className="text-[#d6f928] text-lg leading-none mt-0.5">↗</span>
                <div>
                  <p className="text-sm font-semibold text-white">Agentic AI Pipelines</p>
                  <p className="text-xs text-gray-400">PM demand for agentic AI product ownership is projected to exceed 25% of senior JDs by 2026. I&apos;m already building with these patterns.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black/30 border border-white/5 rounded-lg px-4 py-3">
                <span className="text-[#d6f928] text-lg leading-none mt-0.5">↗</span>
                <div>
                  <p className="text-sm font-semibold text-white">Product-Led Growth (PLG)</p>
                  <p className="text-xs text-gray-400">PLG motion now in 35%+ of SaaS JDs. Activation rate optimization, TTV engineering, and self-serve onboarding are core to how I scope every product.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechProof;
