import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import GP from "../../../assets/atlas/GP.png";
import ER from "../../../assets/atlas/ER.png";
import Spec from "../../../assets/atlas/Spec.png";
import SpecEr from "../../../assets/atlas/SpecEr.png";
import Mobile from "../../../assets/atlas/Mobile.png";

const templateData = [
  {
    id: "mobile",
    title: "Multi-Location Template",
    description: "Fully responsive mobile-first design optimized for on-the-go pet owners. Prioritizes click-to-call, directions, and fast-loading content.",
    image: Mobile,
    accentColor: "border-line-strong",
    tag: "Mobile + Spec + ER"
  },
  {
    id: "spec",
    title: "Specialty Clinic",
    description: "Designed to highlight advanced medical capabilities, doctor credentials, and referral forms for other veterinarians.",
    image: Spec,
    accentColor: "border-line-strong",
    tag: "Specialty"
  },
  {
    id: "er",
    title: "Emergency Clinic (ER)",
    description: "High-contrast, action-oriented design. Prioritizes 'Call Now' and 'Get Directions' functionalities for high-stress triage situations.",
    image: ER,
    accentColor: "border-line-strong",
    tag: "ER"
  },
  {
    id: "specer",
    title: "Specialty + Emergency Hybrid",
    description: "A complex dual-funnel architecture that seamlessly routes urgent cases to the ER while allowing specialty clients to research chronic care.",
    image: SpecEr,
    accentColor: "border-line-strong",
    tag: "Spec + ER"
  },
  {
    id: "gp",
    title: "General Practice (GP)",
    description: "Standardized layout optimized for wellness, preventive care, and routine checkups. Focuses on easy booking flows and localized SEO.",
    image: GP,
    accentColor: "border-line-strong",
    tag: "GP"
  }
];

const AtlasTemplates = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleSelect = (index) => {
    if (index === activeIndex) return;
    setFade(false);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(true);
    }, 200);
  };

  const activeTemplate = templateData[activeIndex];

  return (
    <div className="w-full bg-surface-2 rounded-sm border border-line p-8 md:p-12 font-ui text-ink my-12">
      <style>{`
        .atlas-browser-scroll::-webkit-scrollbar { width: 11px; }
        .atlas-browser-scroll::-webkit-scrollbar-track { background: #363636; }
        .atlas-browser-scroll::-webkit-scrollbar-thumb {
          background-color: #90A4AE;
          border-radius: 6px;
          border: 3px solid #363636;
        }
      `}</style>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

        {/* Left Side: Content & Accordion */}
        <div className="flex-1 w-full">
          {/* Five of the six — the sixth is the parent brand site, a different job
              entirely, so it isn't one of the clinic archetypes shown here. */}
          <div className="mb-10">
            <h4 className="text-ink-muted uppercase tracking-widest text-xs font-semibold mb-2">The Architecture</h4>
            <h2 className="font-display text-2xl md:text-4xl font-normal tracking-tight">
              The 6 Templates
            </h2>
            <p className="text-ink-faint text-sm mt-3 max-w-md">
              <span className="text-ink-soft">Five clinic archetypes</span> &mdash; shown here, every
              clinic maps to one of them &mdash; plus a sixth for the parent brand site, which
              introduces the group rather than converting a local visit.
            </p>
          </div>

          <div className="space-y-1">
            {templateData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(index)}
                  className={`border-b border-line last:border-0 py-5 cursor-pointer transition-all duration-200 rounded-sm px-4 -mx-4 ${isActive ? 'bg-surface-3/80' : 'hover:bg-surface-3/60'}`}
                >
                  <div className="flex gap-4 items-start">
                    <div className="mt-0.5 shrink-0">
                      <CheckCircle2 className={`w-6 h-6 transition-all duration-300 ${isActive ? 'fill-[#d6f928] text-ink' : 'text-ink-ghost'}`} />
                    </div>
                    <div className="flex-1 -mt-0.5">
                      <div className="flex items-center gap-3">
                        <h3 className={`text-xl font-bold transition-all duration-300 ${isActive ? 'text-ink' : 'text-ink-muted'}`}>
                          {item.title}
                        </h3>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.accentColor} text-ink-muted`}>
                          {item.tag}
                        </span>
                      </div>
                      <div className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <p className="text-ink-muted leading-relaxed text-[15px] pt-1 pb-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Mac Browser Mockup */}
        <div className={`flex-[0.9] w-full transition-opacity duration-200 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          {/* Browser chrome */}
          <div className="rounded-sm overflow-hidden border border-line bg-surface-3">
            {/* Title bar */}
            <div className="flex items-center gap-3 px-4 py-3 bg-surface-3 border-b border-line">
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d6a01d]"></span>
                <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]"></span>
              </div>

              {/* URL bar */}
              <div className="flex-1 flex items-center gap-2 bg-surface-3 rounded-md px-3 py-1.5 mx-4">
                {/* Lock icon */}
                <svg className="w-3 h-3 text-ink-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="text-ink-muted text-xs font-mono truncate">
                  atlas.vet/{activeTemplate.title.toLowerCase()}
                </span>
              </div>
            </div>

            {/* Scrollable viewport — fixed height, image scrolls inside */}
            <div
              className="atlas-browser-scroll h-[520px] overflow-y-auto overflow-x-hidden"
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#90A4AE #363636ff' }}
            >
              <img
                src={activeTemplate.image}
                alt={activeTemplate.title}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AtlasTemplates;