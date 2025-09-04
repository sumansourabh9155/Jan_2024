import React from "react";
import { useNavigate } from "react-router-dom";

import Cartercampaign from "../../../assets/Project/cartercampaign.png";
import CarterRedesign from "../../../assets/Project/CarterRedesign.png";
import UVC from "../../../assets/Project/UVC.png";
import Dsptemplate from "../../../assets/Project/CarterDSP.png";

const CaseStudy = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Carter Design System",
      year: 2024,
      categories: ["Case Study", "UI/UX"],
      image: CarterRedesign,
      link: "/Projects/CarterRedesign",
    },
    {
      title: "Carter DSP Template",
      year: 2024,
      categories: ["Design", "Strategy"],
      image: Dsptemplate,
      link: "/Projects/CarterDSP",
    },
     {
      title: "Carter Redesign",
      year: 2024,
      categories: ["Design", "Branding"],
      image: Cartercampaign,
      link: "/Projects/Cartercampaign",
    },
    {
      title: "United Veterinary Care",
      year: 2024,
      categories: ["Web", "Healthcare"],
      image: UVC,
      link: "/Projects/UVC",
    },
  ];

  const handleProjectClick = (project) => {
    navigate(project.link);
  };

  return (
    <div>
      <div className="text-center pt-32">
        <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full mb-4 text-white">
          ◎ My Case Study
        </div>
        <h1 className="text-4xl font-light text-white">
          Visual <span className="text-gray-400 font-medium">Showcase</span>
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          A curated selection of design explorations and experiments.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start p-8 md:p-16 gap-12 max-w-6xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
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
  <div className="space-y-2 cursor-pointer" onClick={onClick}>
    <div className="relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full object-cover h-36 sm:h-60 md:h-72 lg:h-[340px] rounded-md"
      />
      <div className="pt-2">
        <h3 className="text-md font-medium text-white">
          {project.title}{" "}
          <span className="text-gray-400 text-sm">({project.year})</span>
        </h3>
        <div className="mt-2 flex flex-wrap gap-2">
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
