import React from 'react';

// --- 1. Icons (SVG Components) ---
const ArrowUpRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-emerald-400"
  >
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

// --- 2. Dummy Data ---
const projectData = [
  {
    title: "Fintech Dashboard Redesign",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    icon: <ChartIcon />,
    tags: ["UX Research", "Design System"],
  },
  {
    title: "E-Commerce Mobile App",
    category: "Mobile Application",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    icon: <ArrowUpRight />,
    tags: ["Prototyping", "User Testing"],
  },
  {
    title: "SaaS Analytics Platform",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    icon: <ChartIcon />,
    tags: ["Data Viz", "Dashboard"],
  },
  {
    title: "Health & Wellness Tracker",
    category: "iOS Design",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
    icon: <ArrowUpRight />,
    tags: ["Interaction", "Visual Design"],
  },
  {
    title: "Corporate Banking Portal",
    category: "Enterprise UX",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
    icon: <ChartIcon />,
    tags: ["B2B", "Strategy"],
  },
  {
    title: "Smart Home Controller",
    category: "IoT Interface",
    image: "https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=2670&auto=format&fit=crop",
    icon: <ArrowUpRight />,
    tags: ["IoT", "App Design"],
  },
];

// --- 3. Main Component ---
export default function ProjectsGrid() {
  return (
    <section className="bg-black min-h-screen p-8 flex justify-center">
      <div className="w-full max-w-7xl mt-12">
        
        {/* Header (Optional context) */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Selected Work</h2>
          <p className="text-neutral-500">A selection of projects focusing on product strategy and UI engineering.</p>
        </div>

        {/* Grid Container */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.slice(0, 6).map((project, i) => (
            <li key={i} className="w-full">
              <div className="flex flex-col h-full w-full bg-[#0A0A0A] border border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:border-neutral-600 hover:-translate-y-1 transition-all duration-500 ease-out group cursor-pointer">
                
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform duration-300">
                    <span className="text-xs font-medium text-white/90">View</span>
                    {project.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <p className="text-[10px] text-neutral-500 mb-3 uppercase tracking-[0.2em] font-medium">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold text-neutral-200 leading-snug tracking-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2.5 py-1 text-[10px] font-medium text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-md whitespace-nowrap uppercase tracking-wider group-hover:border-neutral-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}