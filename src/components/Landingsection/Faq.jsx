import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default for engagement

  // Ordered strongest-first: what I do, then the proof, then the objections,
  // then logistics. Availability sits last on purpose — it only matters to
  // someone the first six answers already convinced.
  const faqData = [
    {
      question: "What kind of designer are you?",
      answer:
        "End-to-end product designer. I run discovery and user research, design the interaction and visual layers, build and maintain the design system, and ship the front-end in React/Tailwind. AI-native design is my focus — agentic and conversational UX that models can actually serve.",
    },
    {
      question: "What's your AI work, specifically?",
      answer:
        "On Carter I designed the conversational UX for an agentic campaign assistant on the Claude API — the clarification, confirmation, and recovery patterns that decide whether an agent feels trustworthy or just fast. Campaign launch went from 2.5 hours to 30 minutes. On Poppins I designed a conversational finance assistant built on two depths of a single voice, each with separate jobs and an explicit list of what it never says, because the tone that works for \"you hit your savings goal\" is unbearable attached to \"you are overdrawn.\" The part I care most about is the unglamorous part: what the interface does when the model is wrong, uncertain, or slow.",
    },
    {
      question: "What design work have you actually shipped?",
      answer:
        "Carter (B2B ad-tech) — redesigned the campaign activation funnel and built the component library adopted across every product; campaign abandonment down 68% from a 27% baseline, measured over ~6 months post-rollout. Atlas (veterinary healthcare) — unified 130–150 clinic sites under one relational CMS with a 6-template system and a 0-to-1 no-code site builder; booking conversion up 29%. Poppins (consumer iOS) — a conversational finance app taken from whiteboard to interactive prototype, then killed at v1 when the wedge didn't hold. Research, interaction design, and UI on all three — and on Atlas I shipped the flows in code myself.",
    },
    {
      question: "Why did Poppins get killed?",
      answer:
        "Because we couldn't defend the wedge. We'd bet on proactive delivery — money surfacing in the messaging thread people already read. Under scrutiny that didn't hold: a delivery channel is a feature, not a moat, and cheap for a funded incumbent to copy once it's proven. Everything genuinely differentiated lived in voice, sequencing, and interaction quality — real design value, but a fragile business defence. We stopped at the end of v1 scope, before engineering investment. What I'd change is the order: we validated the experience exhaustively and the wedge late. Now I go at the assumption that kills the project first.",
    },
    {
      question: "Only three years — are you senior enough?",
      answer:
        "Three-plus by date, and the scope has been wider than the tenure suggests: two 0-to-1 launches, one 1-to-100 scaling programme, the company-wide design system, and a 130–150 site network with around 25 engineers on the other side of the handoff. I've also had to win a prioritisation argument against a VP of Sales using funnel data rather than taste. If a role asks for four years, read one case study and judge from the work — that's a fairer test than the date on my CV.",
    },
    {
      question: "What kind of role are you looking for?",
      answer:
        "Product Designer or Senior Product Designer somewhere design owns the problem from research through shipped UI, and AI is part of the product rather than a bolt-on. Company size matters much less to me than that — I've worked small enough to talk to every user directly, and on a network serving 130–150 locations. Bonus if I sit close to engineering.",
    },
    {
      question: "Remote, hybrid, or on-site?",
      answer:
        "All three are on the table. Based in Noida, India, and open to relocation for the right role. Happy to overlap with US or EU hours — the GoDiverse engagement ran fully remote with a UK team.",
    },
    {
      question: "Do you need visa sponsorship?",
      answer:
        "I'm an Indian citizen based in Noida, so roles in India need no sponsorship. For the US, UK, or EU I would need it — better to raise that in the first conversation than to find it at offer stage.",
    },
    {
      question: "How soon can you join?",
      answer:
        "30 days. I'm on a standard notice period and I'll honour it — a clean handover matters. If the role is right, I can start knowledge-transfer conversations immediately.",
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
            The questions recruiters and hiring managers usually ask first — answered up front, so we can skip straight to the work on our first call.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div
                key={index}
                className={`group border rounded-2xl transition-[background-color,border-color,box-shadow] duration-300 overflow-hidden
                ${isOpen
                    ? "bg-[#0a0a0a] border-[#d6f928]/50 shadow-[0_0_20px_rgba(214,249,40,0.05)]"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                  }
              `}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex items-center justify-between w-full text-left p-6"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`font-medium text-lg transition-colors ${isOpen ? "text-white" : "text-gray-300"}`}>
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[#d6f928]" : "text-gray-500"}`}
                  >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                {/* `invisible` when closed, not just opacity-0 — otherwise a screen
                    reader reads every answer straight through with no sense of
                    which panel is actually open. */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 invisible"}`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/5 mt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;