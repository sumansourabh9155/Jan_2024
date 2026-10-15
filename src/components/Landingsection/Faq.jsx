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
        "On Carter I designed an agentic AI campaign assistant on the Claude API that drafts a campaign from a brief, with human review of every section and per-network spec checks — the clarification, confirmation, and recovery patterns that decide whether an agent feels trustworthy or just fast. Campaign launch went from 1.5 hours to 30 minutes. On Poppins I designed a conversational finance assistant built on two depths of a single voice, each with separate jobs and an explicit list of what it never says, because the tone that works for \"you hit your savings goal\" is unbearable attached to \"you are overdrawn.\" The part I care most about is the unglamorous part: what the interface does when the model is wrong, uncertain, or slow.",
    },
    {
      question: "What design work have you actually shipped?",
      answer:
        "Carter (B2B ad-tech) — design across 12 DSP integrations as one of two designers, an agentic AI campaign assistant, and a multi-DSP launcher unifying 12 workflows into one form; 4.6/5 usability. Atlas (veterinary care) — a 130-clinic network unified under one relational CMS with 6 WCAG 2.1 AA templates and a 0-to-1 no-code site builder; booking conversion up 16%, organic traffic up 41%. Poppins (consumer iOS) — a conversational finance app taken from concept to hi-fi prototypes, then concluded before build when the business case didn't hold. Research, interaction design, and UI on all three.",
    },
    {
      question: "Why did Poppins get killed?",
      answer:
        "Because we couldn't defend the wedge. We'd bet on proactive delivery — money surfacing in the messaging thread people already read. Under scrutiny that didn't hold: a delivery channel is a feature, not a moat, and cheap for a funded incumbent to copy once it's proven. Everything genuinely differentiated lived in voice, sequencing, and interaction quality — real design value, but a fragile business defence. We concluded it before build, so no engineering was spent. What I'd change is the order: we validated the experience exhaustively and the wedge late. Now I go at the assumption that kills the project first.",
    },
    {
      question: "What level of role are you targeting?",
      answer:
        "Product Designer or Senior Product Designer, on scope rather than title. In two and a half years I've taken a 0-to-1 veterinary-care CMS across a 130-clinic network from nothing to launch, led design across 12 DSP integrations on a live retail-media platform as one of two designers, and built the company-wide design system now used by five products. I've also taken a stalled-draft problem to leadership with interviews, session recordings, and SQL rather than taste, and got it prioritised ahead of the roadmap. Read one case study and judge the decisions — that's a fairer test than the date on my CV.",
    },
    {
      question: "What kind of role are you looking for?",
      answer:
        "Product Designer or Senior Product Designer somewhere design owns the problem from research through shipped UI, and AI is part of the product rather than a bolt-on. Company size matters much less to me than that — I've worked small enough to talk to every user directly, and inside an 80+ person org. Bonus if I sit close to engineering.",
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
    <section aria-labelledby="faq-heading" className="bg-surface bg-dotfield py-24 px-6 relative overflow-hidden">


      {/* Same max-w-6xl measure and the same two-column split as Speaking, so
          this section's left edge lands on the page's margin like every other.
          It was max-w-3xl centred, which floated it inboard of everything and
          was the one block breaking the page's alignment. */}
      <div className="max-w-6xl mx-auto relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-start">

        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-5">
            FAQ
          </p>
          <h2 id="faq-heading" className="font-display text-4xl md:text-5xl font-normal text-ink leading-[1.1] mb-6 [text-wrap:balance]">
            Before you <span className="text-ink-faint italic">reach out.</span>
          </h2>
          <p className="text-ink-muted text-[0.9375rem] leading-[1.7] max-w-md">
            The questions recruiters and hiring managers usually ask first — answered up front, so we can skip straight to the work on our first call.
          </p>
        </div>

        <div>

        {/* Nine questions as hairline rows rather than nine bordered, filled,
            shadowed cards with gaps between them. Same content, a third less
            page, and it stops reading as a settings screen. */}
        <div className="border-b border-line">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={index} className="group border-t border-line">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex items-center justify-between gap-6 w-full text-left py-5"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`text-[1.0625rem] transition-colors ${isOpen ? "text-ink font-medium" : "text-ink-soft group-hover:text-ink"}`}>
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-ink" : "text-ink-faint"}`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
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
                    <p className="pb-6 pr-10 text-ink-muted leading-[1.7] text-[0.9375rem] max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Faq;