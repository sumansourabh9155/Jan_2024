const DoubleDiamond = () => {
   const [activeStage, setActiveStage] = useState('research');

   const discoveryStages = [
      {
         id: 'research',
         number: '01',
         label: 'Research',
         title: 'Understand',
         desc: 'Understand users, behaviours, needs, and the problem space before designing.',
         details: ['User Interviews', 'Analytics', 'Session Recordings', 'Journey Mapping']
      },
      {
         id: 'identify',
         number: '02',
         label: 'Identify',
         title: 'Find the Opportunity',
         desc: 'Turn research into clear opportunities by identifying recurring pain points and patterns.',
         details: ['Pain Points', 'Opportunity Mapping', 'Jobs-to-be-Done', 'User Needs']
      },
      {
         id: 'define',
         number: '03',
         label: 'Define',
         title: 'Frame the Problem',
         desc: 'Define the right problem, align stakeholders, and establish measurable outcomes.',
         details: ['Problem Statement', 'Hypotheses', 'Success Metrics', 'Prioritization']
      },
      {
         id: 'validate',
         number: '04',
         label: 'Validate',
         title: 'Test the Direction',
         desc: 'Validate the riskiest assumptions before investing heavily in design and development.',
         details: ['Prototypes', 'Usability Testing', 'Concept Testing', 'Feasibility']
      }
   ];

   const deliveryStages = [
      {
         id: 'design',
         number: '01',
         label: 'Design',
         title: 'Shape the Solution',
         desc: 'Turn validated opportunities into intuitive flows, interfaces, and experiences.',
         details: ['User Flows', 'Wireframes', 'UI Design', 'Prototyping']
      },
      {
         id: 'build',
         number: '02',
         label: 'Build',
         title: 'Build the Product',
         desc: 'Work closely with engineering to create scalable and technically sound experiences.',
         details: ['Handoff', 'React / Tailwind', 'Components', 'Design QA']
      },
      {
         id: 'test',
         number: '03',
         label: 'Test',
         title: 'Verify the Experience',
         desc: 'Make sure the product works across usability, functionality, accessibility, and design.',
         details: ['QA', 'Usability', 'Accessibility', 'Regression']
      },
      {
         id: 'release',
         number: '04',
         label: 'Release',
         title: 'Ship & Learn',
         desc: 'Release, measure real behaviour, and use the results to inform the next cycle.',
         details: ['Release', 'Analytics', 'Adoption', 'Outcome Tracking']
      }
   ];

   const allStages = [...discoveryStages, ...deliveryStages];

   const activeData =
      allStages.find((stage) => stage.id === activeStage) ||
      discoveryStages[0];

   const isDiscovery = discoveryStages.some(
      (stage) => stage.id === activeStage
   );

   return (
      <section
         aria-labelledby="methodology-heading"
         className="w-full bg-[#050505] text-white py-24 px-4 relative overflow-hidden font-sans border-t border-white/10"
      >
         {/* Background Grid */}
         <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
               backgroundImage: `
                  linear-gradient(#ffffff 1px, transparent 1px),
                  linear-gradient(90deg, #ffffff 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
            }}
         />

         {/* Ambient Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

         <div className="absolute top-[25%] left-[10%] w-[300px] h-[300px] bg-[#d6f928]/5 blur-[120px] rounded-full pointer-events-none" />

         <div className="max-w-7xl mx-auto relative z-10">

            {/* Header */}
            <div className="text-center mb-16">

               <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-4">
                  <span className="w-1.5 h-1.5 bg-[#d6f928] rounded-full animate-pulse" />
                  [ How I Work ]
               </div>

               <h2
                  id="methodology-heading"
                  className="font-heading text-4xl md:text-5xl font-bold tracking-tight"
               >
                  Dual-Track Agile{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                     Workflow
                  </span>
               </h2>

               <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
                  Discovery and Delivery move together — continuously reducing
                  uncertainty while creating measurable product value.
               </p>
            </div>

            {/* Desktop */}
            <div className="hidden lg:block max-w-6xl mx-auto">

               {/* Discovery Track */}
               <div className="relative">

                  <div className="flex justify-center mb-7">
                     <div className="inline-flex items-center gap-3 border border-[#d6f928]/30 bg-[#d6f928]/5 px-5 py-2 rounded-full">
                        <span className="w-2 h-2 bg-[#d6f928] rounded-full shadow-[0_0_10px_#d6f928]" />
                        <span className="text-[#d6f928] text-xs font-mono tracking-[0.2em] uppercase">
                           Discovery Track
                        </span>
                     </div>
                  </div>

                  <div className="relative">

                     {/* Flow Line */}
                     <div className="absolute top-1/2 left-[8%] right-[8%] h-px bg-[#d6f928]/15" />

                     <div className="absolute top-1/2 left-[8%] right-[8%] h-px overflow-hidden">
                        <div
                           className="w-24 h-px bg-gradient-to-r from-transparent via-[#d6f928] to-transparent"
                           style={{
                              animation: 'flow 2.5s linear infinite'
                           }}
                        />
                     </div>

                     <div className="grid grid-cols-4 gap-6 relative">

                        {discoveryStages.map((stage) => {
                           const active = activeStage === stage.id;

                           return (
                              <button
                                 key={stage.id}
                                 type="button"
                                 onMouseEnter={() => setActiveStage(stage.id)}
                                 onFocus={() => setActiveStage(stage.id)}
                                 className="relative text-left focus:outline-none group"
                              >
                                 <div
                                    className={`
                                       h-[150px]
                                       rounded-xl
                                       border
                                       bg-[#111]/95
                                       backdrop-blur-md
                                       p-5
                                       transition-all
                                       duration-300
                                       ${
                                          active
                                             ? 'border-[#d6f928]/60 -translate-y-2 shadow-[0_0_35px_rgba(214,249,40,0.10)]'
                                             : 'border-white/10 group-hover:border-[#d6f928]/30'
                                       }
                                    `}
                                 >
                                    <div className="flex justify-between items-start">

                                       <span className="text-[#d6f928] text-[10px] font-mono">
                                          {stage.number}
                                       </span>

                                       <span
                                          className={`
                                             w-2 h-2 rounded-full
                                             ${
                                                active
                                                   ? 'bg-[#d6f928] shadow-[0_0_10px_#d6f928]'
                                                   : 'bg-white/20'
                                             }
                                          `}
                                       />

                                    </div>

                                    <div className="mt-7">

                                       <div className="text-gray-500 text-[9px] font-mono uppercase tracking-widest">
                                          Discovery
                                       </div>

                                       <h3 className="text-base font-bold mt-1">
                                          {stage.label}
                                       </h3>

                                    </div>
                                 </div>
                              </button>
                           );
                        })}

                     </div>
                  </div>
               </div>

               {/* Handoff */}
               <div className="flex items-center justify-center gap-4 py-8">

                  <div className="w-32 h-px bg-gradient-to-r from-transparent to-[#d6f928]/30" />

                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">

                     <span className="w-1.5 h-1.5 bg-[#d6f928] rounded-full" />

                     <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                        Validated → Ready to Build
                     </span>

                  </div>

                  <div className="w-32 h-px bg-gradient-to-l from-transparent to-[#d6f928]/30" />

               </div>

               {/* Delivery Track */}
               <div className="relative">

                  <div className="flex justify-center mb-7">
                     <div className="inline-flex items-center gap-3 border border-white/15 bg-white/[0.03] px-5 py-2 rounded-full">
                        <span className="w-2 h-2 bg-white/50 rounded-full" />

                        <span className="text-gray-300 text-xs font-mono tracking-[0.2em] uppercase">
                           Delivery Track
                        </span>
                     </div>
                  </div>

                  <div className="relative">

                     {/* Flow Line */}
                     <div className="absolute top-1/2 left-[8%] right-[8%] h-px bg-white/10" />

                     <div className="grid grid-cols-4 gap-6 relative">

                        {deliveryStages.map((stage) => {
                           const active = activeStage === stage.id;

                           return (
                              <button
                                 key={stage.id}
                                 type="button"
                                 onMouseEnter={() => setActiveStage(stage.id)}
                                 onFocus={() => setActiveStage(stage.id)}
                                 className="relative text-left focus:outline-none group"
                              >
                                 <div
                                    className={`
                                       h-[150px]
                                       rounded-xl
                                       border
                                       bg-[#111]/95
                                       backdrop-blur-md
                                       p-5
                                       transition-all
                                       duration-300
                                       ${
                                          active
                                             ? 'border-white/30 -translate-y-2 shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                                             : 'border-white/10 group-hover:border-white/20'
                                       }
                                    `}
                                 >
                                    <div className="flex justify-between items-start">

                                       <span className="text-gray-500 text-[10px] font-mono">
                                          {stage.number}
                                       </span>

                                       <span
                                          className={`
                                             w-2 h-2 rounded-full
                                             ${
                                                active
                                                   ? 'bg-white shadow-[0_0_10px_white]'
                                                   : 'bg-white/20'
                                             }
                                          `}
                                       />

                                    </div>

                                    <div className="mt-7">

                                       <div className="text-gray-500 text-[9px] font-mono uppercase tracking-widest">
                                          Delivery
                                       </div>

                                       <h3 className="text-base font-bold mt-1">
                                          {stage.label}
                                       </h3>

                                    </div>
                                 </div>
                              </button>
                           );
                        })}

                     </div>
                  </div>
               </div>

               {/* Feedback Loop */}
               <div className="flex justify-center mt-7">

                  <div className="flex items-center gap-3">

                     <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#d6f928]/30" />

                     <div className="text-[#d6f928] text-[9px] font-mono uppercase tracking-widest">
                        Release → Measure → Learn → Discover
                     </div>

                     <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#d6f928]/30" />

                  </div>

               </div>

               {/* Detail Panel */}
               <div className="mt-8 min-h-[150px]">

                  <div
                     key={activeStage}
                     className="relative bg-[#111] border border-white/10 rounded-xl p-6 overflow-hidden"
                  >

                     <div
                        className={`
                           absolute top-0 left-0 right-0 h-px
                           ${
                              isDiscovery
                                 ? 'bg-gradient-to-r from-transparent via-[#d6f928] to-transparent'
                                 : 'bg-gradient-to-r from-transparent via-white/40 to-transparent'
                           }
                        `}
                     />

                     <div className="flex items-start gap-8">

                        <div className="hidden md:block">
                           <span
                              className={`
                                 text-4xl font-mono font-bold
                                 ${
                                    isDiscovery
                                       ? 'text-[#d6f928]/20'
                                       : 'text-white/15'
                                 }
                              `}
                           >
                              {activeData.number}
                           </span>
                        </div>

                        <div className="flex-1">

                           <div className="flex items-center gap-3">

                              <span
                                 className={`
                                    text-[10px] font-mono uppercase tracking-widest
                                    ${
                                       isDiscovery
                                          ? 'text-[#d6f928]'
                                          : 'text-gray-400'
                                    }
                                 `}
                              >
                                 {isDiscovery
                                    ? 'Discovery'
                                    : 'Delivery'}
                              </span>

                              <span className="text-white/10">
                                 /
                              </span>

                              <span className="text-gray-500 text-[10px] font-mono">
                                 {activeData.label}
                              </span>

                           </div>

                           <h3 className="text-xl font-bold mt-2">
                              {activeData.title}
                           </h3>

                           <p className="text-gray-400 text-sm mt-2 max-w-xl leading-relaxed">
                              {activeData.desc}
                           </p>

                        </div>

                        <div className="hidden md:flex flex-wrap gap-2 max-w-[430px] justify-end">

                           {activeData.details.map((detail) => (
                              <span
                                 key={detail}
                                 className="text-xs bg-white/[0.03] border border-white/10 rounded-md px-3 py-1.5 text-gray-300"
                              >
                                 {detail}
                              </span>
                           ))}

                        </div>

                     </div>
                  </div>

               </div>

               <div className="text-center mt-5">

                  <span className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.2em]">
                     Hover over any step to explore
                  </span>

               </div>

            </div>


            {/* Mobile */}
            <div className="lg:hidden">

               <MobileTrack
                  title="Discovery Track"
                  stages={discoveryStages}
                  activeStage={activeStage}
                  setActiveStage={setActiveStage}
                  discovery
               />

               <div className="flex items-center gap-3 my-10">

                  <div className="flex-1 h-px bg-white/10" />

                  <span className="text-[#d6f928] text-[9px] font-mono uppercase tracking-widest">
                     Validated → Build
                  </span>

                  <div className="flex-1 h-px bg-white/10" />

               </div>

               <MobileTrack
                  title="Delivery Track"
                  stages={deliveryStages}
                  activeStage={activeStage}
                  setActiveStage={setActiveStage}
               />

            </div>

            {/* Footer */}
            <div className="text-center mt-14">

               <div className="inline-flex items-center gap-3">

                  <span className="w-8 h-px bg-white/10" />

                  <span className="text-gray-600 text-[9px] font-mono uppercase tracking-[0.25em]">
                     Discover → Validate → Deliver → Measure → Repeat
                  </span>

                  <span className="w-8 h-px bg-white/10" />

               </div>

            </div>

         </div>

         <style>{`
            @keyframes flow {
               from {
                  transform: translateX(-100px);
               }
               to {
                  transform: translateX(1100px);
               }
            }
         `}</style>

      </section>
   );
};


/* =============================================================
   MOBILE TRACK
============================================================= */

const MobileTrack = ({
   title,
   stages,
   activeStage,
   setActiveStage,
   discovery = false
}: {
   title: string;
   stages: any[];
   activeStage: string;
   setActiveStage: (id: string) => void;
   discovery?: boolean;
}) => {

   return (
      <div>

         <div className="flex items-center gap-3 mb-7">

            <div
               className={`
                  w-9 h-9 rounded-lg border flex items-center justify-center
                  ${
                     discovery
                        ? 'border-[#d6f928]/30 bg-[#d6f928]/5'
                        : 'border-white/10 bg-white/5'
                  }
               `}
            >
               <span
                  className={`
                     w-2 h-2 rounded-full
                     ${
                        discovery
                           ? 'bg-[#d6f928] shadow-[0_0_10px_#d6f928]'
                           : 'bg-white/50'
                     }
                  `}
               />
            </div>

            <div>

               <div
                  className={`
                     text-[9px] font-mono uppercase tracking-widest
                     ${
                        discovery
                           ? 'text-[#d6f928]'
                           : 'text-gray-500'
                     }
                  `}
               >
                  {discovery ? 'Problem Space' : 'Solution Space'}
               </div>

               <h3 className="text-lg font-bold">
                  {title}
               </h3>

            </div>

         </div>


         <div className="relative">

            <div
               className={`
                  absolute left-[6px] top-0 bottom-0 w-px opacity-30
                  ${
                     discovery
                        ? 'bg-gradient-to-b from-[#d6f928] to-transparent'
                        : 'bg-gradient-to-b from-white/40 to-transparent'
                  }
               `}
            />

            <div className="space-y-5">

               {stages.map((stage) => {

                  const active = activeStage === stage.id;

                  return (
                     <button
                        key={stage.id}
                        type="button"
                        onClick={() => setActiveStage(stage.id)}
                        className="relative pl-9 w-full text-left"
                     >

                        <div
                           className={`
                              absolute left-0 top-5 w-3 h-3 rounded-full
                              ${
                                 active
                                    ? discovery
                                       ? 'bg-[#d6f928] shadow-[0_0_12px_#d6f928]'
                                       : 'bg-white shadow-[0_0_12px_white]'
                                    : 'bg-[#222] border border-white/20'
                              }
                           `}
                        />

                        <div
                           className={`
                              border rounded-xl p-4 transition-all duration-300
                              ${
                                 active
                                    ? discovery
                                       ? 'border-[#d6f928]/40 bg-[#d6f928]/[0.03]'
                                       : 'border-white/25 bg-white/[0.03]'
                                    : 'border-white/10 bg-white/[0.02]'
                              }
                           `}
                        >

                           <div className="flex items-center justify-between">

                              <span
                                 className={`
                                    text-[10px] font-mono
                                    ${
                                       discovery
                                          ? 'text-[#d6f928]'
                                          : 'text-gray-500'
                                    }
                                 `}
                              >
                                 {stage.number} / {stage.label}
                              </span>

                              <span className="text-gray-500 text-xs">
                                 {active ? '−' : '+'}
                              </span>

                           </div>

                           <h4 className="text-lg font-bold mt-2">
                              {stage.title}
                           </h4>

                           {active && (
                              <>
                                 <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                                    {stage.desc}
                                 </p>

                                 <div className="flex flex-wrap gap-2 mt-4">

                                    {stage.details.map((detail) => (
                                       <span
                                          key={detail}
                                          className="text-[10px] border border-white/10 bg-white/5 px-2.5 py-1 rounded-full text-gray-400"
                                       >
                                          {detail}
                                       </span>
                                    ))}

                                 </div>
                              </>
                           )}

                        </div>

                     </button>
                  );
               })}

            </div>

         </div>

      </div>
   );
};

export default DoubleDiamond;
