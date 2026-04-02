import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default for engagement

  const faqData = [
    {
      question: "What kind of PM work have you actually shipped?",
      answer:
        "Multiple AI-powered MVPs built using Claude and Gemini as co-development tools. Enterprise CMS rollout across 130+ locations (United Veterinary Care). E-commerce CRO audits. Internal automation pipelines using n8n. Serverless dashboards in React/Tailwind/Google Apps Script. I've owned the full cycle—PRD to backlog to shipped product—not just the strategy layer.",
    },
    {
      question: "What does 'technical PM' actually mean in your case?",
      answer:
        "It means I have a BTech in CS with an ML specialization and I've built real things with that background. I can read a codebase, evaluate technical tradeoffs, write a PRD that engineering doesn't have to translate, and integrate LLM APIs myself. It's not a credential claim—it's demonstrated in the work.",
    },
    {
      question: "Have you used AI tools (Claude, Gemini) in product development?",
      answer:
        "Extensively. I've used Claude for long-form content generation pipelines, structured output classification, and prompt-engineered feature logic. Gemini for multimodal workflows and Google Workspace integrations. These are product decisions—model selection, latency tradeoffs, output consistency requirements—not just 'using AI to write code.'",
    },
    {
      question: "What PM tools and frameworks do you work in?",
      answer:
        "Jira and Linear for sprint planning and backlog management. Notion and Confluence for PRDs and documentation. Amplitude and Mixpanel for funnel and retention analytics—I write SQL queries directly against product databases to pull cohort analysis, D1/D7/D30 retention, and funnel drop-off data without waiting on a data analyst. Figma for design review and wireframes. n8n for workflow automation. RICE and ICE for prioritization. AARRR for funnel framing. OKRs and North Star Metric for roadmap alignment. I adapt to the team's existing stack, not the other way around.",
    },
    {
      question: "Can you lead a cross-functional team?",
      answer:
        "Yes. I've led Design teams on activation and onboarding flows, Dev teams through sprint planning and technical scoping, and AI feature teams on model selection and prompt architecture. My CS/ML background means I can have technical credibility in the dev room and product clarity in the stakeholder room—without needing a translator in either.",
    },
    {
      question: "Tell me about a product you think is designed exceptionally well.",
      answer:
        "Linear. Not because it's beautiful—but because every design decision traces back to a clear user model: engineers who context-switch constantly and lose flow state to slow tools. Linear's speed isn't a feature. It's the product thesis made visible. Every interaction—keyboard shortcuts, instant load times, minimal modals—exists because the team understood what their user was losing when a tool was slow. That's the kind of product thinking I bring: start with what the user is experiencing, then work backward to what should be built.",
    },
    {
      question: "Tell me about a time you shipped the wrong thing.",
      answer:
        "Early in a SaaS dashboard build, I scoped a reporting feature based on a stakeholder assumption—'users will want to export their data.' We built it. Two sprints, clean delivery. Post-launch: 6% usage rate. The feature wasn't wrong—the validation process was. I had let internal conviction substitute for user signal. After that, I added a mandatory step to every PRD: at least one direct user interview or session recording that explicitly confirms the problem exists before a feature enters sprint planning. That failure is now a permanent checkpoint in how I work.",
    },
    {
      question: "Tell me about a time engineering pushed back on your roadmap.",
      answer:
        "I scoped an AI feature that required real-time inference on every user action. Engineering came back: latency would be 4–6 seconds, which would break the UX. My first instinct was to push back. Instead, I asked them to walk me through the constraint—and they were right. The architecture I'd assumed didn't match the actual API response times. We redesigned the feature together: async inference with a loading state, triggered on submit rather than keystroke. Same product value, technically viable. My CS/ML background meant I understood exactly what they were describing—and that made the conversation a collaboration, not a negotiation. The feature shipped on schedule.",
    },
    {
      question: "What types of companies are you targeting?",
      answer:
        "Early-to-mid-stage B2B SaaS and AI startups where the PM role is close to the product and the engineering team—not a layer of bureaucracy. I thrive in environments where speed of iteration matters, AI is part of the product (not just a tool), and the PM is expected to be an operator, not just a strategist.",
    },
    {
      question: "How do you prioritize what to build?",
      answer:
        "RICE scoring (Reach × Impact × Confidence ÷ Effort) as the baseline, filtered through the North Star Metric and current OKRs. What matters most: is this moving the metric that defines product-market fit right now? I also use explicit backlog categories—must-ship, high-confidence bets, and hypothesis-driven experiments—so we're not mixing validated work with speculative work in the same sprint. The most important prioritization decision is always what NOT to build.",
    },
    {
      question: "How do you define 'done' for an AI-powered feature?",
      answer:
        "This is one of the hardest PM questions in 2025. For LLM features, 'done' means: output quality meets the user's tolerance threshold at the target percentile (P90 or P95 depending on the use case), latency is within the activation flow's Time-to-Value budget, inference cost is within unit economics targets, and there's a feedback loop in place to catch degradation. I build evaluation rubrics before writing the PRD—because if you can't measure 'good enough,' you can't scope the feature.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-labelledby="faq-heading" className="bg-[#050505] py-32 px-6 relative overflow-hidden">


      <div className="max-w-3xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-6 bg-[#d6f928]/5 px-3 py-1 rounded border border-[#d6f928]/20">
            [ FAQ ]
          </div>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions Hiring Managers Actually Ask
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            The questions that actually come up. Answered directly, with specifics.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`group border rounded-2xl transition-all duration-300 overflow-hidden
                ${openIndex === index
                  ? "bg-[#0a0a0a] border-[#d6f928]/50 shadow-[0_0_20px_rgba(214,249,40,0.05)]"
                  : "bg-white/5 border-white/10 hover:border-white/20"
                }
              `}
            >
              <button
                className="flex items-center justify-between w-full text-left p-6"
                onClick={() => toggleFaq(index)}
              >
                <span className={`font-medium text-lg transition-colors ${openIndex === index ? "text-white" : "text-gray-300"}`}>
                  {faq.question}
                </span>
                <span className={`transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[#d6f928]" : "text-gray-500"}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="p-6 pt-0 text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/5 mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;