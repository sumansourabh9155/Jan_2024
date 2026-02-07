import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default for engagement

  const faqData = [
    {
      question: "Do you code what you design?",
      answer:
        "Yes. I am not just a Figma designer. I understand React, Tailwind, and component architecture. This means I design with 'Dev Feasibility' in mind—saving your engineering team hundreds of hours in back-and-forth fixes.",
    },
    {
      question: "My product is already live. Can you just fix the UX?",
      answer:
        "Yes. This is my 'Audit & Fix' engagement. I review your current flow, identify high-churn friction points, and provide a prioritized list of fixes (or redesigns) to improve retention immediately.",
    },
    {
      question: "How do you charge? Fixed price or Retainer?",
      answer:
        "For defined scopes (like an Audit or MVP Sprint), I charge a fixed fee ($2k - $5k). For ongoing growth and iteration, I work on a monthly retainer ($3.5k/mo), acting as your fractional Head of Product.",
    },
    {
      question: "Who is this NOT for?",
      answer:
        "I am not the right fit if you need a $500 logo, 'just some pretty screens,' or micromanagement. I work best with founders who trust me to own the product strategy and deliver business outcomes.",
    },
    {
      question: "What is the timeline for an MVP?",
      answer:
        "Typical MVP Sprints take 2-3 weeks. Week 1 is Strategy & Wireframes. Week 2 is High-Fidelity & Prototyping. Week 3 is Handoff & Documentation. We move fast.",
    },
    {
      question: "Do you work with existing design teams?",
      answer:
        "Absolutely. I often come in to build Design Systems or optimize specific flows that the internal team is too busy to handle. I document everything so your team can take over easily.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Common Questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know about the process.
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