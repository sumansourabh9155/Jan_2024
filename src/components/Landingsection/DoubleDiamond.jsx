import { useState } from 'react';

const DoubleDiamond = () => {
   const [activeStage, setActiveStage] = useState('research');

   const discoveryStages = [
      {
         id: 'research',
         number: '01',
         label: 'Research',
         title: 'Understand',
         desc: 'Understand users, behaviours, needs, and the problem space before designing.',
         details: [
            'User Interviews',
            'Analytics',
            'Session Recordings',
            'Journey Mapping'
         ]
      },
      {
         id: 'identify',
         number: '02',
         label: 'Identify',
         title: 'Find the Opportunity',
         desc: 'Turn research into clear opportunities by identifying recurring pain points and patterns.',
         details: [
            'Pain Points',
            'Opportunity Mapping',
            'Jobs-to-be-Done',
            'User Needs'
         ]
      },
      {
         id: 'define',
         number: '03',
         label: 'Define',
         title: 'Frame the Problem',
         desc: 'Define the right problem, align stakeholders, and establish measurable outcomes.',
         details: [
            'Problem Statement',
            'Hypotheses',
            'Success Metrics',
            'Prioritization'
         ]
      },
      {
         id: 'validate',
         number: '04',
         label: 'Validate',
         title: 'Test the Direction',
         desc: 'Validate the riskiest assumptions before investing heavily in design and development.',
         details: [
            'Prototypes',
            'Usability Testing',
            'Concept Testing',
            'Feasibility'
         ]
      }
   ];

   const deliveryStages = [
      {
         id: 'design',
         number: '01',
         label: 'Design',
         title: 'Shape the Solution',
         desc: 'Turn validated opportunities into intuitive flows, interfaces, and experiences.',
         details: [
            'User Flows',
            'Wireframes',
            'UI Design',
            'Prototyping'
         ]
      },
      {
         id: 'build',
         number: '02',
         label: 'Build',
         title: 'Build the Product',
         desc: 'Work closely with engineering to create scalable and technically sound experiences.',
         details: [
            'Handoff',
            'React / Tailwind',
            'Components',
            'Design QA'
         ]
      },
      {
         id: 'test',
         number: '03',
         label: 'Test',
         title: 'Verify the Experience',
         desc: 'Make sure the product works across usability, functionality, accessibility, and design.',
         details: [
            'QA',
            'Usability',
            'Accessibility',
            'Regression'
         ]
      },
      {
         id: 'release',
         number: '04',
         label: 'Release',
         title: 'Ship & Learn',
         desc: 'Release, measure real behaviour, and use the results to inform the next cycle.',
         details: [
            'Release',
            'Analytics',
            'Adoption',
            'Outcome Tracking'
         ]
      }
   ];

   const allStages = [
      ...discoveryStages,
      ...deliveryStages
   ];

   const activeData =
      allStages.find((stage) => stage.id === activeStage) ||
      discoveryStages[0];

   const isDiscovery = discoveryStages.some(
      (stage) => stage.id === activeStage
   );

   return (
      <section
         aria-labelledby="methodology-heading"
         className="w-full bg-surface-2 text-ink py-20 px-4 relative overflow-hidden font-sans border-t border-line"
      >

         {/* =========================================================
             BACKGROUND
         ========================================================= */}

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

         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

         <div className="absolute top-[25%] left-[10%] w-[300px] h-[300px] bg-accent/15 blur-[120px] rounded-full pointer-events-none" />


         <div className="max-w-7xl mx-auto relative z-10">


            {/* =========================================================
                HEADER
            ========================================================= */}

            <div className="text-center mb-10">

               <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-ink tracking-widest uppercase mb-3">

                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />

                  [ How I Work ]

               </div>


               <h2
                  id="methodology-heading"
                  className="font-heading text-4xl md:text-5xl font-bold tracking-tight"
               >
                  Dual-Track Agile{' '}

                  <span className="text-ink-muted">Workflow</span>

               </h2>


               <p className="text-ink-muted mt-3 max-w-2xl mx-auto leading-relaxed">
                  Discovery and Delivery move together — continuously reducing
                  uncertainty while creating measurable product value.
               </p>

            </div>


            {/* =========================================================
                DESKTOP
            ========================================================= */}

            <div className="hidden lg:block max-w-6xl mx-auto">


               {/* =====================================================
                   DISCOVERY TRACK
               ===================================================== */}

               <div className="relative">

                  <div className="flex justify-center mb-5">

                     <div className="inline-flex items-center gap-3 border border-accent-ink/35 bg-accent/15 px-5 py-2 rounded-full">

                        <span className="w-2 h-2 bg-accent-ink rounded-full" />

                        <span className="text-accent-ink text-xs font-mono tracking-[0.2em] uppercase">
                           Discovery Track
                        </span>

                     </div>

                  </div>


                  <div className="relative">

                     {/* Main horizontal line */}

                     {/* Only the gaps between cards show this, so a 15% lime
                         tint rendered as nothing and the track read as four
                         loose cards rather than one line. */}
                     <div className="absolute top-1/2 left-[8%] right-[8%] h-px bg-accent-ink/25" />


                     {/* Animated flow */}

                     <div className="absolute top-1/2 left-[8%] right-[8%] h-px overflow-hidden">

                        <div
                           className="w-24 h-px bg-gradient-to-r from-transparent via-accent-ink/60 to-transparent"
                           style={{
                              animation: 'doubleDiamondFlow 2.5s linear infinite'
                           }}
                        />

                     </div>


                     {/* Cards */}

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
                                       h-full
                                       rounded-xl
                                       border
                                       bg-surface/95
                                       backdrop-blur-md
                                       p-5
                                       transition-all
                                       duration-300
                                       ${
                                          active
                                             ? 'border-accent-ink/50 -translate-y-2 shadow-[0_9px_35px_rgba(0,0,0,0.1)]'
                                             : 'border-line group-hover:border-accent-ink/35'
                                       }
                                    `}
                                 >

                                    <div className="flex justify-between items-start">

                                       <span className="text-accent-ink text-[10px] font-mono">
                                          {stage.number}
                                       </span>


                                       <span
                                          className={`
                                             w-2 h-2 rounded-full
                                             ${
                                                active
                                                   ? 'bg-accent-ink'
                                                   : 'bg-ink/15'
                                             }
                                          `}
                                       />

                                    </div>


                                    <div className="mt-4">

                                       <div className="text-ink-faint text-[9px] font-mono uppercase tracking-widest">
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


               {/* =====================================================
                   HANDOFF
               ===================================================== */}

               <div className="flex items-center justify-center gap-4 py-5">

                  <div className="w-32 h-px bg-gradient-to-r from-transparent to-accent-ink/40" />


                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-line bg-surface-3/60">

                     <span className="w-1.5 h-1.5 bg-accent rounded-full" />

                     <span className="text-[9px] font-mono text-ink-faint uppercase tracking-[0.2em]">
                        Validated → Ready to Build
                     </span>

                  </div>


                  <div className="w-32 h-px bg-gradient-to-l from-transparent to-accent-ink/40" />

               </div>


               {/* =====================================================
                   DELIVERY TRACK
               ===================================================== */}

               <div className="relative">

                  <div className="flex justify-center mb-5">

                     <div className="inline-flex items-center gap-3 border border-line bg-surface-3/70 px-5 py-2 rounded-full">

                        <span className="w-2 h-2 bg-ink/60 rounded-full" />

                        <span className="text-ink-soft text-xs font-mono tracking-[0.2em] uppercase">
                           Delivery Track
                        </span>

                     </div>

                  </div>


                  <div className="relative">

                     {/* Main horizontal line */}

                     <div className="absolute top-1/2 left-[8%] right-[8%] h-px bg-line" />


                     {/* Cards */}

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
                                       h-full
                                       rounded-xl
                                       border
                                       bg-surface/95
                                       backdrop-blur-md
                                       p-5
                                       transition-all
                                       duration-300
                                       ${
                                          active
                                             ? 'border-line-strong -translate-y-2 shadow-[0_8px_30px_rgba(0,0,0,0.1)]'
                                             : 'border-line group-hover:border-line-strong'
                                       }
                                    `}
                                 >

                                    <div className="flex justify-between items-start">

                                       <span className="text-ink-faint text-[10px] font-mono">
                                          {stage.number}
                                       </span>


                                       <span
                                          className={`
                                             w-2 h-2 rounded-full
                                             ${
                                                active
                                                   ? 'bg-ink'
                                                   : 'bg-ink/15'
                                             }
                                          `}
                                       />

                                    </div>


                                    <div className="mt-4">

                                       <div className="text-ink-faint text-[9px] font-mono uppercase tracking-widest">
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


               {/* =====================================================
                   FEEDBACK LOOP
               ===================================================== */}

               {/* The loop line and the "hover to explore" hint were two
                   stacked one-line rows costing ~75px between them. Same row:
                   the cycle centred, the affordance trailing it. */}
               <div className="relative flex justify-center mt-5">

                  <div className="flex items-center gap-3">

                     <div className="w-20 h-px bg-gradient-to-r from-transparent to-accent-ink/40" />

                     <div className="text-accent-ink text-[9px] font-mono uppercase tracking-widest">
                        Release → Measure → Learn → Discover
                     </div>

                     <div className="w-20 h-px bg-gradient-to-l from-transparent to-accent-ink/40" />

                  </div>

                  <span className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:inline text-[9px] font-mono text-ink-ghost uppercase tracking-[0.2em]">
                     Hover any step to explore
                  </span>

               </div>


               {/* =====================================================
                   DETAIL PANEL
               ===================================================== */}

               <div className="mt-6 min-h-[140px]">

                  <div
                     key={activeStage}
                     className="relative bg-surface border border-line rounded-xl p-5 overflow-hidden"
                  >

                     {/* Top glow */}

                     <div
                        className={`
                           absolute top-0 left-0 right-0 h-px
                           ${
                              isDiscovery
                                 ? 'bg-gradient-to-r from-transparent via-accent-ink/60 to-transparent'
                                 : 'bg-gradient-to-r from-transparent via-ink/25 to-transparent'
                           }
                        `}
                     />


                     <div className="flex items-start gap-8">


                        {/* Number */}

                        <div className="hidden md:block">

                           <span
                              className={`
                                 text-4xl font-mono font-bold
                                 ${
                                    isDiscovery
                                       ? 'text-accent-ink/70'
                                       : 'text-ink/35'
                                 }
                              `}
                           >
                              {activeData.number}
                           </span>

                        </div>


                        {/* Text */}

                        <div className="flex-1">

                           <div className="flex items-center gap-3">

                              <span
                                 className={`
                                    text-[10px] font-mono uppercase tracking-widest
                                    ${
                                       isDiscovery
                                          ? 'text-accent-ink'
                                          : 'text-ink-muted'
                                    }
                                 `}
                              >
                                 {isDiscovery
                                    ? 'Discovery'
                                    : 'Delivery'}
                              </span>


                              <span className="text-ink-ghost">
                                 /
                              </span>


                              <span className="text-ink-faint text-[10px] font-mono">
                                 {activeData.label}
                              </span>

                           </div>


                           <h3 className="text-xl font-bold mt-2">
                              {activeData.title}
                           </h3>


                           <p className="text-ink-muted text-sm mt-2 max-w-xl leading-relaxed">
                              {activeData.desc}
                           </p>

                        </div>


                        {/* Detail Tags */}

                        <div className="hidden md:flex flex-wrap gap-2 max-w-[430px] justify-end">

                           {activeData.details.map((detail) => (

                              <span
                                 key={detail}
                                 className="text-xs bg-surface-3/70 border border-line rounded-md px-3 py-1.5 text-ink-soft"
                              >
                                 {detail}
                              </span>

                           ))}

                        </div>

                     </div>

                  </div>

               </div>


            </div>


            {/* =========================================================
                MOBILE
            ========================================================= */}

            <div className="lg:hidden">

               <MobileTrack
                  title="Discovery Track"
                  stages={discoveryStages}
                  activeStage={activeStage}
                  setActiveStage={setActiveStage}
                  discovery
               />


               {/* Mobile Connector */}

               <div className="flex items-center gap-3 my-7">

                  <div className="flex-1 h-px bg-line" />

                  <span className="text-accent-ink text-[9px] font-mono uppercase tracking-widest">
                     Validated → Build
                  </span>

                  <div className="flex-1 h-px bg-line" />

               </div>


               <MobileTrack
                  title="Delivery Track"
                  stages={deliveryStages}
                  activeStage={activeStage}
                  setActiveStage={setActiveStage}
               />

            </div>


            {/* =========================================================
                FOOTER
            ========================================================= */}

            {/* Mobile only. On desktop this said the same thing as the feedback
                loop line sitting just above it — two cycle summaries ~100px
                apart. The mobile tracks have no loop line, so it stays there. */}
            <div className="text-center mt-10 lg:hidden">

               <div className="inline-flex items-center gap-3">

                  <span className="w-8 h-px bg-line" />

                  <span className="text-ink-ghost text-[9px] font-mono uppercase tracking-[0.25em]">
                     Discover → Validate → Deliver → Measure → Repeat
                  </span>

                  <span className="w-8 h-px bg-line" />

               </div>

            </div>

         </div>


         {/* =========================================================
             ANIMATION
         ========================================================= */}

         <style>{`
            @keyframes doubleDiamondFlow {
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
}) => {

   return (
      <div>


         {/* Track Header */}

         <div className="flex items-center gap-3 mb-5">

            <div
               className={`
                  w-9 h-9 rounded-lg border flex items-center justify-center
                  ${
                     discovery
                        ? 'border-accent-ink/35 bg-accent/15'
                        : 'border-line bg-surface'
                  }
               `}
            >

               <span
                  className={`
                     w-2 h-2 rounded-full
                     ${
                        discovery
                           ? 'bg-accent-ink'
                           : 'bg-ink/60'
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
                           ? 'text-accent-ink'
                           : 'text-ink-faint'
                     }
                  `}
               >
                  {discovery
                     ? 'Problem Space'
                     : 'Solution Space'}
               </div>


               <h3 className="text-lg font-bold">
                  {title}
               </h3>

            </div>

         </div>


         {/* Timeline */}

         <div className="relative">


            {/* Timeline Line */}

            <div
               className={`
                  absolute left-[6px] top-0 bottom-0 w-px opacity-30
                  ${
                     discovery
                        ? 'bg-gradient-to-b from-accent-ink to-transparent'
                        : 'bg-gradient-to-b from-ink to-transparent'
                  }
               `}
            />


            <div className="space-y-4">

               {stages.map((stage) => {

                  const active = activeStage === stage.id;

                  return (

                     <button
                        key={stage.id}
                        type="button"
                        onClick={() => setActiveStage(stage.id)}
                        className="relative pl-9 w-full text-left"
                     >


                        {/* Timeline Node */}

                        <div
                           className={`
                              absolute left-0 top-5 w-3 h-3 rounded-full
                              ${
                                 active
                                    ? discovery
                                       ? 'bg-accent-ink'
                                       : 'bg-ink'
                                    : 'bg-surface-3 border border-line-strong'
                              }
                           `}
                        />


                        {/* Card */}

                        <div
                           className={`
                              border rounded-xl p-4 transition-all duration-300
                              ${
                                 active
                                    ? discovery
                                       ? 'border-accent-ink/40 bg-accent/[0.03]'
                                       : 'border-line bg-surface-3/70'
                                    : 'border-line bg-surface-3/60'
                              }
                           `}
                        >


                           <div className="flex items-center justify-between">


                              <span
                                 className={`
                                    text-[10px] font-mono
                                    ${
                                       discovery
                                          ? 'text-accent-ink'
                                          : 'text-ink-faint'
                                    }
                                 `}
                              >
                                 {stage.number} / {stage.label}
                              </span>


                              <span className="text-ink-faint text-xs">
                                 {active ? '−' : '+'}
                              </span>

                           </div>


                           <h4 className="text-lg font-bold mt-2">
                              {stage.title}
                           </h4>


                           {active && (

                              <>

                                 <p className="text-ink-muted text-xs mt-2 leading-relaxed">
                                    {stage.desc}
                                 </p>


                                 <div className="flex flex-wrap gap-2 mt-4">

                                    {stage.details.map((detail) => (

                                       <span
                                          key={detail}
                                          className="text-[10px] border border-line bg-surface-3/70 px-2.5 py-1 rounded-full text-ink-muted"
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
