import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarterDSL from "../../../assets/Project/CarterDSL.png";
import CarterRedesign from "../../../assets/Project/CarterRedesign.png";
import UVC from "../../../assets/Project/UVC.png";
import Raikar from "../../../assets/Project/raikar.webp";

const CaseStudy = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const projects = [
    {
      title: "Carter Design System",
      year: 2024,
      categories: ["Case Study", "UI/UX"],
      image: CarterDSL,
      locked: true,
      link: "/Projects/RaikarsGoodVibes",
      password: "1234",
    },
    {
      title: "Carter Redesign",
      year: 2024,
      categories: ["Design", "Branding"],
      image: CarterRedesign,
      locked: true,
      link: "/carter-redesign",
      password: "5678",
    },
    {
      title: "United Veterinary Care",
      year: 2024,
      categories: ["TV", "Marketing"],
      image: UVC,
      locked: true,
      link: "/uvc",
      password: "abcd",
    },
    {
      title: "Raikar",
      year: 2024,
      categories: ["Design", "Branding"],
      image: Raikar,
      locked: false,
      link: "/Projects/Raikar",
    },
  ];

  const handleProjectClick = (project) => {
    if (project.locked) {
      setSelectedProject(project);
      setShowModal(true);
      setPassword("");
      setError("");
    } else {
      navigate(project.link);
    }
  };

  const handlePasswordSubmit = () => {
    if (password === selectedProject.password) {
      setShowModal(false);
      navigate(selectedProject.link);
    } else {
      setError("Incorrect password!");
    }
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

      <div className="flex flex-col md:flex-row row-span-2 items-center md:items-start p-8 md:p-16 gap-12 max-w-6xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} />
          ))}
        </div>
      </div>

      {showModal && (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
       <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg w-full max-w-sm text-center">
         <h2 className="text-xl font-semibold text-white mb-3">Enter Password</h2>
         <input
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           className="w-full bg-black/30 border border-white/20 text-white text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30 transition"
           placeholder="••••••••"
         />
         {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
     
         <div className="flex justify-between mt-6 gap-4">
           <button
             onClick={() => setShowModal(false)}
             className="w-full py-2 rounded-md bg-white/10 text-white text-sm hover:bg-white/20 transition"
           >
             Cancel
           </button>
           <button
             onClick={handlePasswordSubmit}
             className="w-full py-2 rounded-md bg-white text-black text-sm font-medium hover:opacity-90 transition"
           >
             Submit
           </button>
         </div>
       </div>
     </div>
      )}
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
      {project.locked && (
        <div className="absolute top-0 left-0 w-full rounded-md bg-black opacity-60 h-36 sm:h-60 md:h-72 lg:h-[340px] flex justify-center items-center">
          <svg
            width="77"
            height="100"
            viewBox="0 0 77 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.5384 0C30.0348 0 22.6881 3.53065 18.1057 9.25481C13.5234 14.979 11.6154 22.4008 11.6154 30.4087V34.6154H23.1538V30.4087C23.1538 24.3389 24.6562 19.5613 27.1202 16.4663C29.5841 13.3714 32.9345 11.5385 38.5384 11.5385C44.1574 11.5385 47.4928 13.2662 49.9567 16.3462C52.4207 19.4261 53.9231 24.2638 53.9231 30.4087V34.6154H65.4615V30.4087C65.4615 22.3558 63.4333 14.8588 58.8509 9.13462C54.2686 3.41046 47.027 0 38.5384 0ZM11.6154 38.4615C5.24517 38.4615 0.0769043 43.6298 0.0769043 50V88.4615C0.0769043 94.8317 5.24517 100 11.6154 100H65.4615C71.8317 100 77 94.8317 77 88.4615V50C77 43.6298 71.8317 38.4615 65.4615 38.4615H11.6154Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </div>
  </div>
);

export default CaseStudy;