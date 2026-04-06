import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default for engagement

  const faqData = [
    {
      question: "What PM work have you actually shipped?",
      answer:
        "AI-powered MVPs with Claude and Gemini. Enterprise CMS across 130+ locations (UVC). E-commerce CRO audits. Automation pipelines in n8n. Serverless dashboards in React/Tailwind. Full cycle—PRD to shipped product.",
    },
    {
      question: "What does 'technical PM' mean in your case?",
      answer:
        "BTech in CS/ML. I read codebases, evaluate architecture tradeoffs, integrate LLM APIs, and write PRDs that engineering ships without translation. It's in the work, not just the resume.",
    },
    {
      question: "How have you used Claude and Gemini in production?",
      answer:
        "Claude for long-form content pipelines and structured classification. Gemini for multimodal workflows and Google Workspace integrations. These were product spec decisions—model selection based on latency, cost, and output quality, not developer preference.",
    },
    {
      question: "Tell me about a time you shipped the wrong thing.",
      answer:
        "Scoped a reporting feature based on a stakeholder assumption. Built it in two sprints. Post-launch: 6% usage. I'd let conviction substitute for user signal. Now every PRD requires a direct user interview or session recording before a feature enters sprint. That miss became a permanent process change.",
    },
    {
      question: "Tell me about a time engineering pushed back.",
      answer:
        "Scoped an AI feature needing real-time inference. Engineering said latency would be 4-6 seconds—UX breaker. I asked them to walk me through it. They were right. We redesigned together: async inference on submit, not keystroke. Same value, technically viable, shipped on schedule.",
    },
    {
      question: "How do you define 'done' for an AI feature?",
      answer:
        "Output quality at P90/P95, latency within the activation flow's time-to-value budget, inference cost within unit economics, and a feedback loop to catch degradation. I write the evaluation rubric before the PRD—if you can't measure 'good enough,' you can't scope the feature.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-labelledby="faq-heading" className="bg-[#050505] py-24 px-4 relative overflow-hidden border-t border-white/10">


      <div className="max-w-3xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-6 bg-[#d6f928]/5 px-3 py-1 rounded border border-[#d6f928]/20">
            [ FAQ ]
          </div>
          <h2 id="faq-heading" className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
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