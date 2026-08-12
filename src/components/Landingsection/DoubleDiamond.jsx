import { useState } from 'react';

const DoubleDiamond = () => {
   const [activeStage, setActiveStage] = useState('research');

   const stages = {
      discovery: [
         {
            id: 'research',
            number: '01',
            label: 'Research',
            icon: '⌕',
            title: 'Understand',
            desc: 'Start with evidence. Understand users, behaviors, needs, and the problem space before designing.',
            details: [
               'User Interviews',
               'Analytics Review',
               'Session Recordings',
               'Journey Mapping',
               'Competitor Research'
            ]
         },
         {
            id: 'identify',
            number: '02',
            label: 'Identify',
            icon: '◎',
            title: 'Find the Opportunity',
            desc: 'Turn research into meaningful opportunities by identifying recurring pain points and behavioral patterns.',
            details: [
               'Pain Points',
               'Opportunity Mapping',
               'Jobs-to-be-Done',
               'Behavior Analysis',
               'User Needs'
            ]
         },
         {
            id: 'define',
            number: '03',
            label: 'Define',
            icon: '□',
            title: 'Frame the Problem',
            desc: 'Define the right problem, align stakeholders, establish hypotheses, and decide what matters most.',
            details: [
               'Problem Statement',
               'Hypotheses',
               'Success Metrics',
               'Prioritization',
               'Scope Definition'
            ]
         },
         {
            id: 'validate',
            number: '04',
            label: 'Validate',
            icon: '◇',
            title: 'Prove the Direction',
            desc: 'Test the riskiest assumptions before committing significant design and engineering effort.',
            details: [
               'Prototype Testing',
               'Usability Testing',
               'Concept Validation',
               'Technical Feasibility',
               'Go / No-Go'
            ]
         }
      ],

      delivery: [
         {
            id: 'design',
            number: '01',
            label: 'Design',
            icon: '✦',
            title: 'Shape the Solution',
            desc: 'Translate validated problems into intuitive experiences, flows, interfaces, and systems.',
            details: [
               'User Flows',
               'Wireframes',
               'Hi-Fi UI',
               'Prototyping',
               'Design System'
            ]
         },
         {
            id: 'build',
            number: '02',
            label: 'Build',
            icon: '</>',
            title: 'Turn Design into Product',
            desc: 'Collaborate closely with engineering to build scalable, accessible, and technically sound experiences.',
            details: [
               'Engineering Handoff',
               'React / Tailwind',
               'Component Systems',
               'Technical QA',
               'Accessibility'
            ]
         },
         {
            id: 'test',
            number: '03',
            label: 'Test',
            icon: '△',
            title: 'Verify the Experience',
            desc: 'Check whether the product works as intended across functionality, usability, accessibility, and performance.',
            details: [
               'QA Testing',
               'Usability Testing',
               'Design QA',
               'Accessibility',
               'Regression Testing'
            ]
         },
         {
            id: 'release',
            number: '04',
            label: 'Release',
            icon: '↗',
            title: 'Ship & Learn',
            desc: 'Release incrementally, observe real-world behavior, and measure whether the product creates meaningful value.',
            details: [
               'Gradual Rollout',
               'Analytics',
               'Adoption',
               'Retention',
               'Outcome Tracking'
            ]
         }
      ]
   };

   const allStages = [
      ...stages.discovery,
      ...stages.delivery
   ];

   const activeData =
      allStages.find((stage) => stage.id === activeStage) ||
      stages.discovery[0];

   const isDiscovery = stages.discovery.some(
      (stage) => stage.id === activeStage
   );

   return (
      <section
         aria-labelledby="methodology-heading"
         className="w-full bg-[#050505] text-white py-24 px-4 relative overflow-hidden font-sans border-t border-white/10"
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

         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

         <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] bg-[#d6f928]/5 blur-[120px] rounded-full pointer-events-none" />

         <div className="max-w-7xl mx-auto relative z-10">


            {/* =========================================================
                HEADER
            ========================================================= */}

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
                  Two parallel tracks — Discovery and Delivery — working
                  together to solve the right problem and build the right
                  solution.
               </p>

            </div>


            {/* =========================================================
                DESKTOP DIAGRAM
            ========================================================= */}

            <div className="hidden lg:block">

               <div className="relative max-w-6xl mx-auto">

                  {/* SVG CONNECTOR SYSTEM */}

                  <svg
                     className="absolute inset-0 w-full h-full pointer-events-none"
                     viewBox="0 0 1200 570"
                     preserveAspectRatio="none"
                  >

                     <defs>

                        <linearGradient
                           id="limeFlow"
                           x1="0%"
                           y1="0%"
                           x2="100%"
                           y2="0%"
                        >
                           <stop
                              offset="0%"
                              stopColor="#d6f928"
                              stopOpacity="0.15"
                           />

                           <stop
                              offset="50%"
                              stopColor="#d6f928"
                              stopOpacity="0.8"
                           />

                           <stop
                              offset="100%"
                              stopColor="#d6f928"
                              stopOpacity="0.15"
                           />
                        </linearGradient>

                     </defs>


                     {/* Discovery flow */}

                     <path
                        d="M90 135 H1110"
                        fill="none"
                        stroke="#d6f928"
                        strokeOpacity="0.08"
                        strokeWidth="2"
                     />

                     <path
                        d="M90 135 H1110"
                        fill="none"
                        stroke="url(#limeFlow)"
                        strokeWidth="1.5"
                        strokeDasharray="6 10"
                     >
                        <animate
                           attributeName="stroke-dashoffset"
                           from="0"
                           to="-40"
                           dur="2s"
                           repeatCount="indefinite"
                        />
                     </path>


                     {/* Delivery flow */}

                     <path
                        d="M90 350 H1110"
                        fill="none"
                        stroke="#ffffff"
                        strokeOpacity="0.08"
                        strokeWidth="2"
                     />

                     <path
                        d="M90 350 H1110"
                        fill="none"
                        stroke="#ffffff"
                        strokeOpacity="0.18"
                        strokeWidth="1.5"
                        strokeDasharray="6 10"
                     >
                        <animate
                           attributeName="stroke-dashoffset"
                           from="0"
                           to="-40"
                           dur="2.5s"
                           repeatCount="indefinite"
                        />
                     </path>


                     {/* Discovery → Delivery */}

                     <path
                        d="M250 135 C250 190 250 290 250 350"
                        fill="none"
                        stroke="#d6f928"
                        strokeOpacity="0.15"
                        strokeDasharray="4 8"
                     />

                     <path
                        d="M600 135 C600 190 600 290 600 350"
                        fill="none"
                        stroke="#d6f928"
                        strokeOpacity="0.12"
                        strokeDasharray="4 8"
                     />

                     <path
                        d="M950 135 C950 190 950 290 950 350"
                        fill="none"
                        stroke="#d6f928"
                        strokeOpacity="0.12"
                        strokeDasharray="4 8"
                     />


                     {/* Feedback loop */}

                     <path
                        d="
                           M1110 350
                           C1160 350 1160 450 1080 450
                           H120
                           C40 450 40 350 90 350
                        "
                        fill="none"
                        stroke="#d6f928"
                        strokeOpacity="0.2"
                        strokeWidth="1.5"
                        strokeDasharray="5 8"
                     />

                  </svg>


                  {/* =====================================================
                      DISCOVERY TRACK
                  ===================================================== */}

                  <div className="relative">

                     {/* Track label */}

                     <div className="flex justify-center mb-6">

                        <div className="inline-flex items-center gap-3 border border-[#d6f928]/30 bg-[#d6f928]/5 px-5 py-2 rounded-full">

                           <span className="w-2 h-2 bg-[#d6f928] rounded-full shadow-[0_0_10px_#d6f928]" />

                           <span className="text-[#d6f928] text-xs font-mono tracking-[0.2em] uppercase">
                              Discovery Track
                           </span>

                           <span className="text-gray-600 text-xs font-mono">
                              / Problem Space
                           </span>

                        </div>

                     </div>


                     {/* Cards */}

                     <div className="grid grid-cols-4 gap-5">

                        {stages.discovery.map((stage) => (

                           <StageCard
                              key={stage.id}
                              stage={stage}
                              active={activeStage === stage.id}
                              discovery
                              onHover={() =>
                                 setActiveStage(stage.id)
                              }
                           />

                        ))}

                     </div>

                  </div>


                  {/* =====================================================
                      CENTER HANDOFF
                  ===================================================== */}

                  <div className="flex justify-center items-center gap-4 py-7">

                     <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d6f928]/30" />

                     <div className="flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-[#0b0b0b]">

                        <span className="w-1.5 h-1.5 bg-[#d6f928] rounded-full" />

                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                           Continuous Learning
                        </span>

                     </div>

                     <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d6f928]/30" />

                  </div>


                  {/* =====================================================
                      DELIVERY TRACK
                  ===================================================== */}

                  <div className="relative">

                     {/* Track label */}

                     <div className="flex justify-center mb-6">

                        <div className="inline-flex items-center gap-3 border border-white/15 bg-white/[0.03] px-5 py-2 rounded-full">

                           <span className="w-2 h-2 bg-white/60 rounded-full" />

                           <span className="text-gray-300 text-xs font-mono tracking-[0.2em] uppercase">
                              Delivery Track
                           </span>

                           <span className="text-gray-600 text-xs font-mono">
                              / Solution Space
                           </span>

                        </div>

                     </div>


                     <div className="grid grid-cols-4 gap-5">

                        {stages.delivery.map((stage) => (

                           <StageCard
                              key={stage.id}
                              stage={stage}
                              active={activeStage === stage.id}
                              onHover={() =>
                                 setActiveStage(stage.id)
                              }
                           />

                        ))}

                     </div>

                  </div>


                  {/* =====================================================
                      DETAIL PANEL
                  ===================================================== */}

                  <div className="mt-10 min-h-[150px]">

                     <div
                        key={activeStage}
                        className="
                           relative
                           bg-[#111]
                           border
                           border-white/10
                           rounded-xl
                           p-6
                           overflow-hidden
                           transition-all
                           duration-300
                        "
                     >

                        {/* Top glow */}

                        <div
                           className={`
                              absolute
                              top-0
                              left-0
                              right-0
                              h-px
                              ${
                                 isDiscovery
                                    ? 'bg-gradient-to-r from-transparent via-[#d6f928] to-transparent'
                                    : 'bg-gradient-to-r from-transparent via-white/40 to-transparent'
                              }
                           `}
                        />


                        <div className="flex items-start gap-8">

                           {/* Number */}

                           <div className="hidden md:block">

                              <div
                                 className={`
                                    text-4xl
                                    font-mono
                                    font-bold
                                    ${
                                       isDiscovery
                                          ? 'text-[#d6f928]/30'
                                          : 'text-white/20'
                                    }
                                 `}
                              >
                                 {activeData.number}
                              </div>

                           </div>


                           {/* Main information */}

                           <div className="flex-1">

                              <div className="flex items-center gap-3">

                                 <span
                                    className={`
                                       text-[10px]
                                       font-mono
                                       uppercase
                                       tracking-widest
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


                           {/* Detail tags */}

                           <div className="hidden md:flex flex-wrap gap-2 max-w-[420px] justify-end">

                              {activeData.details.map(
                                 (detail, index) => (

                                    <span
                                       key={index}
                                       className="
                                          text-xs
                                          bg-white/[0.03]
                                          border
                                          border-white/10
                                          rounded-md
                                          px-3
                                          py-1.5
                                          text-gray-300
                                       "
                                    >
                                       {detail}
                                    </span>

                                 )
                              )}

                           </div>

                        </div>

                     </div>

                  </div>


                  {/* Hover hint */}

                  <div className="flex justify-center mt-5">

                     <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">
                        Hover over any step to explore
                     </span>

                  </div>

               </div>

            </div>


            {/* =========================================================
                MOBILE
            ========================================================= */}

            <div className="lg:hidden">

               <div className="space-y-14">


                  {/* Discovery */}

                  <MobileTrack
                     title="Discovery Track"
                     subtitle="Problem Space"
                     stages={stages.discovery}
                     activeStage={activeStage}
                     setActiveStage={setActiveStage}
                     discovery
                  />


                  {/* Divider */}

                  <div className="flex items-center gap-4">

                     <div className="flex-1 h-px bg-white/10" />

                     <span className="text-[#d6f928] text-[9px] font-mono uppercase tracking-widest">
                        Continuous Learning
                     </span>

                     <div className="flex-1 h-px bg-white/10" />

                  </div>


                  {/* Delivery */}

                  <MobileTrack
                     title="Delivery Track"
                     subtitle="Solution Space"
                     stages={stages.delivery}
                     activeStage={activeStage}
                     setActiveStage={setActiveStage}
                  />

               </div>


               {/* Mobile detail */}

               <div className="mt-12">

                  <div className="bg-[#111] border border-white/10 rounded-xl p-5">

                     <div className="text-[#d6f928] text-[10px] font-mono uppercase tracking-widest">
                        {activeData.label}
                     </div>

                     <h3 className="text-xl font-bold mt-2">
                        {activeData.title}
                     </h3>

                     <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                        {activeData.desc}
                     </p>

                     <div className="flex flex-wrap gap-2 mt-5">

                        {activeData.details.map(
                           (detail, index) => (

                              <span
                                 key={index}
                                 className="text-[10px] border border-white/10 bg-white/5 px-3 py-1.5 rounded-full text-gray-300"
                              >
                                 {detail}
                              </span>

                           )
                        )}

                     </div>

                  </div>

               </div>

            </div>


            {/* =========================================================
                FOOTER
            ========================================================= */}

            <div className="text-center mt-16">

               <div className="inline-flex items-center gap-3">

                  <span className="w-8 h-px bg-white/10" />

                  <span className="text-gray-600 text-[9px] font-mono uppercase tracking-[0.25em]">
                     Discover → Validate → Deliver → Measure → Repeat
                  </span>

                  <span className="w-8 h-px bg-white/10" />

               </div>

            </div>

         </div>

      </section>
   );
};


/* =============================================================
   DESKTOP STAGE CARD
============================================================= */

const StageCard = ({
   stage,
   active,
   discovery = false,
   onHover
}: {
   stage: any;
   active: boolean;
   discovery?: boolean;
   onHover: () => void;
}) => {

   return (
      <button
         type="button"
         onMouseEnter={onHover}
         onFocus={onHover}
         className="
            relative
            w-full
            h-[145px]
            text-left
            group
            focus:outline-none
         "
      >

         <div
            className={`
               absolute
               inset-0
               rounded-xl
               border
               bg-[#111]/90
               backdrop-blur-md
               transition-all
               duration-300
               ${
                  active
                     ? discovery
                        ? 'border-[#d6f928]/60 shadow-[0_0_35px_rgba(214,249,40,0.10)] -translate-y-2'
                        : 'border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.05)] -translate-y-2'
                     : 'border-white/10 group-hover:border-white/20'
               }
            `}
         />


         <div className="relative p-5 h-full flex flex-col justify-between">

            <div className="flex items-center justify-between">

               <span
                  className={`
                     text-[10px]
                     font-mono
                     ${
                        discovery
                           ? 'text-[#d6f928]'
                           : 'text-gray-500'
                     }
                  `}
               >
                  {stage.number}
               </span>

               <span
                  className={`
                     text-lg
                     font-mono
                     ${
                        active && discovery
                           ? 'text-[#d6f928]'
                           : 'text-gray-400'
                     }
                  `}
               >
                  {stage.icon}
               </span>

            </div>


            <div>

               <div className="text-gray-500 text-[9px] font-mono uppercase tracking-widest">
                  {discovery
                     ? 'Discovery'
                     : 'Delivery'}
               </div>

               <h3 className="text-base font-bold mt-1">
                  {stage.label}
               </h3>

            </div>

         </div>

      </button>
   );
};


/* =============================================================
   MOBILE TRACK
============================================================= */

const MobileTrack = ({
   title,
   subtitle,
   stages,
   activeStage,
   setActiveStage,
   discovery = false
}: {
   title: string;
   subtitle: string;
   stages: any[];
   activeStage: string;
   setActiveStage: (id: string) => void;
   discovery?: boolean;
}) => {

   return (
      <div>

         {/* Track header */}

         <div className="flex items-center gap-3 mb-7">

            <div
               className={`
                  w-9
                  h-9
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  border
                  ${
                     discovery
                        ? 'border-[#d6f928]/30 bg-[#d6f928]/5'
                        : 'border-white/10 bg-white/5'
                  }
               `}
            >

               <span
                  className={`
                     w-2
                     h-2
                     rounded-full
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
                     text-[9px]
                     font-mono
                     uppercase
                     tracking-widest
                     ${
                        discovery
                           ? 'text-[#d6f928]'
                           : 'text-gray-500'
                     }
                  `}
               >
                  {subtitle}
               </div>

               <h3 className="text-lg font-bold">
                  {title}
               </h3>

            </div>

         </div>


         {/* Timeline */}

         <div className="relative">

            <div
               className={`
                  absolute
                  left-[6px]
                  top-0
                  bottom-0
                  w-px
                  ${
                     discovery
                        ? 'bg-gradient-to-b from-[#d6f928] to-transparent'
                        : 'bg-gradient-to-b from-white/30 to-transparent'
                  }
                  opacity-30
               `}
            />


            <div className="space-y-6">

               {stages.map((stage) => {

                  const active = activeStage === stage.id;

                  return (

                     <button
                        type="button"
                        key={stage.id}
                        onClick={() =>
                           setActiveStage(stage.id)
                        }
                        className="relative pl-9 w-full text-left"
                     >

                        {/* Node */}

                        <div
                           className={`
                              absolute
                              left-0
                              top-5
                              w-3
                              h-3
                              rounded-full
                              ${
                                 active
                                    ? discovery
                                       ? 'bg-[#d6f928] shadow-[0_0_12px_#d6f928]'
                                       : 'bg-white shadow-[0_0_12px_white]'
                                    : 'bg-[#222] border border-white/20'
                              }
                           `}
                        />


                        {/* Card */}

                        <div
                           className={`
                              border
                              rounded-xl
                              p-4
                              transition-all
                              duration-300
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
                                    text-[10px]
                                    font-mono
                                    ${
                                       discovery
                                          ? 'text-[#d6f928]'
                                          : 'text-gray-500'
                                    }
                                 `}
                              >
                                 {stage.number} / {stage.label}
                              </span>

                              <span className="text-gray-500 font-mono">
                                 {stage.icon}
                              </span>

                           </div>

                           <h4 className="text-lg font-bold mt-2">
                              {stage.title}
                           </h4>

                           <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                              {stage.desc}
                           </p>

                           {active && (

                              <div className="flex flex-wrap gap-2 mt-4">

                                 {stage.details.map(
                                    (detail: string, index: number) => (

                                       <span
                                          key={index}
                                          className="text-[10px] border border-white/10 bg-white/5 px-2.5 py-1 rounded-full text-gray-400"
                                       >
                                          {detail}
                                       </span>

                                    )
                                 )}

                              </div>

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


export default DualTrackAgile;
