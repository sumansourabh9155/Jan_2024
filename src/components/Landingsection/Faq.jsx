import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default for engagement

  const faqData = [
    {
      question: "How soon can you join?",
      answer:
        "30 days. I'm on a standard notice period and I'll honor it — clean handover matters. If the role is right, I can start knowledge-transfer conversations immediately.",
    },
    {
      question: "You're a designer by title — why should I hire you as a PM?",
      answer:
        "Because I've already operated as one. At Carter & Atlas I was titled Designer but owned product decisions: wrote every PRD, ran sprint planning, prioritized the backlog, and made the trade-off calls. BTech in CS/ML — I read codebases, evaluate architecture trade-offs, and ship UI myself. The title is catching up to the work.",
    },
    {
      question: "What kind of role are you looking for?",
      answer:
        "PM or Senior PM at a seed-to-Series-B SaaS or AI company. Ideally a team where the PM owns outcomes end-to-end — strategy, spec, ship, measure — without a 4-layer approval chain. Bonus if the product touches LLMs.",
    },
    {
      question: "Remote, hybrid, or on-site?",
      answer:
        "All three are on the table. Currently based in India and open to relocation for the right role. Happy to overlap with US or EU time zones — I've run distributed pods before.",
    },
    {
      question: "What PM work have you actually shipped?",
      answer:
        "Carter (B2B ad-tech) — redesigned activation funnel, 40% lift, 300% enterprise client growth. UVC (healthcare) — unified 130+ clinic sites under one CMS, launched 0-to-1 no-code builder. GoDiverse (SaaS) — 1-page resume builder with Claude-powered assist, under 8 min to first share. Full cycle on each: PRD to shipped.",
    },
    {
      question: "Are you open to consulting or contract work?",
      answer:
        "Yes — for short, scoped engagements: product audits, 0-to-1 scoping sprints, AI feature design, or UX-to-PM transition coaching. For full-time I'm selective, so consulting is a good way to work together first if you're unsure.",
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
            Before you <span className="text-gray-500 font-light">reach out.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            The questions recruiters and founders usually ask first — answered up front, so we can skip straight to the work on our first call.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`group border rounded-2xl transition-[background-color,border-color,box-shadow] duration-300 overflow-hidden
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