import { useState } from 'react';

const taxonomyData = [
  {
    id: "general",
    category: "General Practice",
    types: [
      { id: "g1", name: "Wellness & Preventive Care", details: ["Vaccinations", "Parasite Prevention", "Nutritional Advice"] },
      { id: "g2", name: "Diagnostics & Lab Testing", details: [] },
      { id: "g3", name: "Dental Health checkup", details: [] }
    ]
  },
  {
    id: "speciality",
    category: "Speciality",
    types: [
      { id: "s1", name: "Advanced Diagnostics", details: [] },
      { id: "s2", name: "Chronic Illness Management", details: [] },
      { id: "s3", name: "Dermatology & Cardiology", details: [] },
      { id: "s4", name: "Oncology", details: ["Cancer Screenings", "Chemotherapy"] }
    ]
  },
  {
    id: "emergency",
    category: "Emergency",
    types: [
      { id: "e1", name: "24/7 Availability", details: [] },
      { id: "e2", name: "Trauma Response", details: [] },
      { id: "e3", name: "Emergency Surgery", details: [] } // User put "Emergency Services", replaced with Surgery to avoid repetition
    ]
  },
  {
    id: "additional",
    category: "Additional Services",
    types: [
      { id: "a1", name: "Grooming", details: ["Coat conditioning", "Ear Cleaning"] },
      { id: "a2", name: "Boarding", details: ["Standard Boarding", "Medical Boarding"] },
      { id: "a3", name: "Training", details: [] }
    ]
  }
];

const metadata = [
  { label: "Service Type", values: ["Preventive", "Diagnostic", "Treatment"] },
  { label: "Species", values: ["Dogs", "Cats", "Exotic Pets"] },
  { label: "Complexity", values: ["Routine", "Advanced", "Emergency"] }
];

const AtlasTaxonomy = () => {
  const [activeCatId, setActiveCatId] = useState("general");
  const [activeTypeId, setActiveTypeId] = useState("g1");

  const activeCat = taxonomyData.find(c => c.id === activeCatId);
  const activeType = activeCat.types.find(t => t.id === activeTypeId) || activeCat.types[0];

  return (
    <div className="w-full bg-surface-2 border border-line rounded-2xl overflow-hidden font-sans relative">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>

      <div className="p-8 md:p-12 relative z-10">
        <div className="space-y-8">
          <div className="space-y-3 max-w-3xl">
            <h3 className="text-sm font-mono text-accent-ink tracking-widest uppercase mb-2">Relational Taxonomy</h3>
            <h3 className="font-heading text-3xl font-bold text-ink">
              Building the taxonomy that connects<br />
              <span className="text-ink-muted font-light">services, specialists, and locations.</span>
            </h3>
            <p className="text-ink-muted text-base leading-relaxed">
              Static pages were dead. The moment a doctor joined or left a clinic, or a service was added or discontinued, a static page became wrong. And across a network that size, wrong pages at scale meant hundreds of broken user journeys and Google penalties.
            </p>
            <p className="text-ink-muted text-base leading-relaxed">
              We redesigned the data model from the ground up — turning every service, specialist, and location into a relational node rather than a static page. The taxonomy we built had four levels: Service Category → Service Type → Detailed Offering → Metadata Attributes. This meant a search for &ldquo;Oncology&rdquo; could automatically surface the right specialists, their certifications, and the specific clinics equipped to handle chemotherapy — without any manual linking per clinic.
            </p>
          </div>
        </div>

        {/* Interactive Flow Diagram */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 min-h-[400px]">

          {/* Level 1: Categories */}
          <div className="flex-1 flex flex-col justify-center gap-4 relative">
            <div className="text-xs font-mono text-ink-faint mb-2 uppercase tracking-wider">Level 1: Category</div>
            {taxonomyData.map(cat => (
              <div
                key={cat.id}
                onMouseEnter={() => {
                  setActiveCatId(cat.id);
                  setActiveTypeId(cat.types[0].id);
                }}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border backdrop-blur-md relative ${activeCatId === cat.id
                  ? "bg-surface border-accent-ink/45 shadow-[0_5px_20px_rgba(0,0,0,0.08)] translate-x-2"
                  : "bg-surface-3/70 border-line hover:border-line-strong hover:bg-surface-3"
                  }`}
              >
                <h4 className={`text-lg font-medium ${activeCatId === cat.id ? "text-ink" : "text-ink-muted"}`}>
                  {cat.category}
                </h4>
                {/* Connecting Line Anchor */}
                {activeCatId === cat.id && (
                  <div className="absolute top-1/2 -right-6 w-6 h-px bg-accent-ink/50 hidden md:block"></div>
                )}
              </div>
            ))}
          </div>

          {/* Connective Line visual for desktop (CSS approx) */}
          <div className="hidden md:flex w-8 items-center justify-center relative">
            <div className="w-px h-[80%] bg-gradient-to-b from-transparent via-accent-ink/45 to-transparent"></div>
          </div>

          {/* Level 2: Types */}
          <div className="flex-[1.2] flex flex-col justify-center gap-3 relative">
            <div className="text-xs font-mono text-ink-faint mb-2 uppercase tracking-wider">Level 2: Service Type</div>
            {activeCat.types.map(type => (
              <div
                key={type.id}
                onMouseEnter={() => setActiveTypeId(type.id)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border backdrop-blur-md relative ${activeTypeId === type.id
                  ? "bg-surface border-accent-ink/40 shadow-[0_4px_15px_rgba(0,0,0,0.08)] translate-x-1"
                  : "bg-surface-3/70 border-transparent hover:border-line-strong"
                  }`}
              >
                <div className="flex justify-between items-center">
                  <h5 className={`text-base font-medium ${activeTypeId === type.id ? "text-ink" : "text-ink-muted"}`}>
                    {type.name}
                  </h5>
                  {type.details.length > 0 && (
                    <span className="text-[10px] bg-surface-3 px-2 py-1 rounded text-ink-muted">Has Ext. Details</span>
                  )}
                </div>
                {activeTypeId === type.id && type.details.length > 0 && (
                  <div className="absolute top-1/2 -right-8 w-8 h-px bg-accent/40 hidden md:block"></div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex w-8 items-center justify-center relative">
            {activeType.details.length > 0 && (
              <div className="w-px h-[60%] bg-gradient-to-b from-transparent via-accent-ink/45 to-transparent"></div>
            )}
          </div>

          {/* Level 3: Details */}
          <div className="flex-1 flex flex-col justify-center gap-3">
            <div className="text-xs font-mono text-ink-faint mb-2 uppercase tracking-wider h-4">
              {activeType.details.length > 0 ? "Level 3: Offerings" : ""}
            </div>

            {activeType.details.length > 0 ? (
              activeType.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-3 pl-5 border-l-2 border-accent-ink/35 bg-gradient-to-r from-accent/25 to-transparent rounded-r-lg"
                >
                  <p className="text-sm text-ink-soft">{detail}</p>
                </div>
              ))
            ) : (
              <div className="p-4 border border-line-soft bg-surface-3/60 rounded-xl text-center flex items-center justify-center h-full min-h-[100px] text-ink-faint text-sm">
                Inherits standard details <br />from {activeType.name}
              </div>
            )}
          </div>

        </div>

        {/* Level 4: Metadata Tags */}
        <div className="mt-12 pt-8 border-t border-line">
          <div className="text-xs font-mono text-ink-faint mb-4 uppercase tracking-wider">Level 4: Global Attributes</div>
          <div className="flex flex-wrap gap-6">
            {metadata.map((meta, idx) => (
              // Was a near-black panel left over from the dark build — a black
              // card mid-page, and accent-ink on it measured 3.1:1, under AA.
              <div key={idx} className="flex-1 min-w-[200px] bg-surface-3 border border-line rounded-lg p-4">
                <div className="text-accent-ink text-xs font-semibold mb-3">{meta.label}</div>
                <div className="flex flex-wrap gap-2">
                  {meta.values.map((val, vIdx) => (
                    <span key={vIdx} className="text-xs bg-surface-3/70 border border-line px-2 py-1 rounded-md text-ink-soft">
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AtlasTaxonomy;
