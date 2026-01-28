import React from "react";

export const DesignProcess = () => {
  const timelineData = [
    {
      title: "Discovery Problem Statement",
      step: "Step 1",
      description:
        "Understanding the product's purpose, pain points, and core requirements from both business and user perspectives.",
    },
    {
      title: "Research & Analysis",
      step: "Step 2",
      description:
        "Conducting competitor audits, surveys, and stakeholder interviews to gather insights and validate assumptions.",
    },
    {
      title: "Wireframing & User Flows",
      step: "Step 3",
      description:
        "Designing wireframes and user flows that map out journeys clearly and effectively to solve real user tasks.",
    },
    {
      title: "UI Design & Visual Systems",
      step: "Step 4",
      description:
        "Creating consistent, pixel-perfect interfaces that are beautiful, functional, and on-brand.",
    },
    {
      title: "Prototyping & Testing",
      step: "Step 5",
      description:
        "Building interactive prototypes and conducting usability tests to validate interactions and flow.",
    },
    {
      title: "Handoff & Optimization",
      step: "Step 6",
      description:
        "Collaborating with developers for implementation and continuously optimizing based on feedback and analytics.",
    },
  ];

  return (
    <section className="bg-black py-32 px-6 overflow-hidden pb-0">
      
      <div className="max-w-6xl mx-auto grid gap-20 lg:grid-cols-12">
        {/* Left Title Section */}
        <div className="col-span-12 lg:col-span-4">
          <div className="inline-flex items-center gap-2 text-sm bg-white/5 text-white px-4 py-1 rounded-full border border-white/10 backdrop-blur-md mb-4">
            ⭘ Design process
          </div>
          <h1 className="text-4xl font-light text-white leading-snug break-words">
            My <span className="font-medium text-gray-400">Approach</span>
          </h1>
          <p className="text-sm text-gray-400 mt-4 break-words">
            A step-by-step journey I follow to translate ideas into user-first
            designs.
          </p>
        </div>
        {/* Right Timeline */}
        <div className="col-span-12 lg:col-span-8 space-y-10 relative w-full min-w-0">
          <div className="before:absolute before:top-0 before:bottom-0 before:left-4 lg:before:left-[21px] before:w-0.5 before:bg-white/10 before:backdrop-blur-sm">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col sm:pl-12 pl-10 w-full min-w-0"
              >
                <div className="absolute top-0 left-4 w-3 h-3 rounded-full bg-white shadow-md" />
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  {item.step}
                </time>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-5 mt-2 shadow-sm transition-all w-4/12 sm:w-6/12 md:w-7/12 lg:w-full lg:max-w-full ">
                  <h3 className="text-md font-semibold text-white leading-snug break-words">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed break-words">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default DesignProcess;