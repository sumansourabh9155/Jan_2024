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

const UvcTaxonomy = () => {
  const [activeCatId, setActiveCatId] = useState("general");
  const [activeTypeId, setActiveTypeId] = useState("g1");

  const activeCat = taxonomyData.find(c => c.id === activeCatId);
  const activeType = activeCat.types.find(t => t.id === activeTypeId) || activeCat.types[0];

  return (
    <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden font-sans relative">
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
            <h3 className="text-sm font-mono text-[#4ade80] tracking-widest uppercase mb-2">Relational Taxonomy</h3>
            <h3 className="text-3xl font-bold text-white">
              Building the taxonomy that connects<br />
              <span className="text-gray-400 font-light">services, specialists, and locations.</span>
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Static pages were dead. The moment a doctor joined or left a clinic, or a service was added or discontinued, a static page became wrong. And with 130+ clinics, wrong pages at scale meant hundreds of broken user journeys and Google penalties.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              We redesigned the data model from the ground up — turning every service, specialist, and location into a relational node rather than a static page. The taxonomy we built had four levels: Service Category → Service Type → Detailed Offering → Metadata Attributes. This meant a search for &ldquo;Oncology&rdquo; could automatically surface the right specialists, their certifications, and the specific clinics equipped to handle chemotherapy — without any manual linking per clinic.
            </p>
          </div>
        </div>

        {/* Interactive Flow Diagram */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 min-h-[400px]">

          {/* Level 1: Categories */}
          <div className="flex-1 flex flex-col justify-center gap-4 relative">
            <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Level 1: Category</div>
            {taxonomyData.map(cat => (
              <div
                key={cat.id}
                onMouseEnter={() => {
                  setActiveCatId(cat.id);
                  setActiveTypeId(cat.types[0].id);
                }}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border backdrop-blur-md relative ${activeCatId === cat.id
                  ? "bg-[#111] border-[#4ade80]/50 shadow-[0_0_20px_rgba(74,222,128,0.1)] translate-x-2"
                  : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                  }`}
              >
                <h4 className={`text-lg font-medium ${activeCatId === cat.id ? "text-white" : "text-gray-400"}`}>
                  {cat.category}
                </h4>
                {/* Connecting Line Anchor */}
                {activeCatId === cat.id && (
                  <div className="absolute top-1/2 -right-6 w-6 h-px bg-[#4ade80]/50 hidden md:block"></div>
                )}
              </div>
            ))}
          </div>

          {/* Connective Line visual for desktop (CSS approx) */}
          <div className="hidden md:flex w-8 items-center justify-center relative">
            <div className="w-px h-[80%] bg-gradient-to-b from-transparent via-[#4ade80]/30 to-transparent"></div>
          </div>

          {/* Level 2: Types */}
          <div className="flex-[1.2] flex flex-col justify-center gap-3 relative">
            <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Level 2: Service Type</div>
            {activeCat.types.map(type => (
              <div
                key={type.id}
                onMouseEnter={() => setActiveTypeId(type.id)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border backdrop-blur-md relative ${activeTypeId === type.id
                  ? "bg-[#111] border-[#4ade80]/40 shadow-[0_0_15px_rgba(74,222,128,0.05)] translate-x-1"
                  : "bg-white/5 border-transparent hover:border-white/10"
                  }`}
              >
                <div className="flex justify-between items-center">
                  <h5 className={`text-base font-medium ${activeTypeId === type.id ? "text-white" : "text-gray-400"}`}>
                    {type.name}
                  </h5>
                  {type.details.length > 0 && (
                    <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-400">Has Ext. Details</span>
                  )}
                </div>
                {activeTypeId === type.id && type.details.length > 0 && (
                  <div className="absolute top-1/2 -right-8 w-8 h-px bg-[#4ade80]/40 hidden md:block"></div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex w-8 items-center justify-center relative">
            {activeType.details.length > 0 && (
              <div className="w-px h-[60%] bg-gradient-to-b from-transparent via-[#4ade80]/20 to-transparent"></div>
            )}
          </div>

          {/* Level 3: Details */}
          <div className="flex-1 flex flex-col justify-center gap-3">
            <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider h-4">
              {activeType.details.length > 0 ? "Level 3: Offerings" : ""}
            </div>

            {activeType.details.length > 0 ? (
              activeType.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-3 pl-5 border-l-2 border-[#4ade80]/30 bg-gradient-to-r from-[#4ade80]/5 to-transparent rounded-r-lg"
                >
                  <p className="text-sm text-gray-200">{detail}</p>
                </div>
              ))
            ) : (
              <div className="p-4 border border-white/5 bg-white/[0.02] rounded-xl text-center flex items-center justify-center h-full min-h-[100px] text-gray-500 text-sm">
                Inherits standard details <br />from {activeType.name}
              </div>
            )}
          </div>

        </div>

        {/* Level 4: Metadata Tags */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-wider">Level 4: Global Attributes</div>
          <div className="flex flex-wrap gap-6">
            {metadata.map((meta, idx) => (
              <div key={idx} className="flex-1 min-w-[200px] bg-[#1a1a1a] border border-white/5 rounded-lg p-4">
                <div className="text-[#4ade80] text-xs font-semibold mb-3">{meta.label}</div>
                <div className="flex flex-wrap gap-2">
                  {meta.values.map((val, vIdx) => (
                    <span key={vIdx} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-md text-gray-300">
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

export default UvcTaxonomy;
