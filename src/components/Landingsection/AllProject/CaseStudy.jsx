import { useNavigate } from "react-router-dom";


import Bannergodiverse from "../../../assets/Godiverse/Banner.png";
import Bannercarter from "../../../assets/CarterRedesign/Banner.png";
import Banneruvc from "../../../assets/uvc/Banner.png";

const CaseStudy = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Carter Redesign + New DSP Platform",
      year: "2024-2026",
      categories: ["Product Strategy", "0-to-1"],
      image: Bannercarter,
      link: "/Projects/Carter",
    },
    {
      title: "CMS Architecture + 0-to-1 Site Builder",
      year: "2025-2026",
      categories: ["Product Strategy", "Healthcare"],
      image: Banneruvc,
      link: "/Projects/UVC",
    },
    {
      title: "GoDiverse Resume Builder",
      year: "2025",
      categories: ["Web", "Education"],
      image: Bannergodiverse,
      link: "/Projects/GoDiverse",
    },
    // {
    //   title: &quot;Carter DSP Template",
    //   year: "2024-2026",
    //   categories: [&quot;Design&quot;, &quot;Strategy&quot;],
    //   image: Dsptemplate,
    //   link: "/Projects/CarterDSP",
    // },
    // {
    //   title: &quot;Carter Redesign&quot;,
    //   year: 2024,
    //   categories: [&quot;Design&quot;, "Branding"],
    //   image: Cartercampaign,
    //   link: "/Projects/Cartercampaign",
    // },

  ];

  const handleProjectClick = (project) => {
    navigate(project.link);
  };

  return (
    <div>
      <div className="text-center pt-32">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase px-3 py-1 rounded border border-[#d6f928]/20 bg-[#d6f928]/5 mb-4">
          [ Case Studies ]
        </div>
        <h1 className="font-heading text-4xl font-bold text-white">
          Real Products. <span className="text-gray-400">Real Decisions.</span>
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          Full breakdowns — the problem, the product calls, and the outcomes.
        </p>
      </div>

      <div className="items-center md:items-start max-w-6xl mx-auto">
        <div className="w-full gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => (
  <div className="space-y-2 pt-16 cursor-pointer" onClick={onClick}>
    <div className="relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full object-cover rounded-md"
      />
      <div className="pt-4 flex flex-wrap justify-between">
        <h3 className="font-heading text-2xl font-semibold text-white">
          {project.title}{" "}
          <span className="text-gray-400 text-sm">({project.year})</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.categories.map((category, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-full backdrop-blur"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CaseStudy;
