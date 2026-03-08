import { useState } from "react";
import Anime from "../../../assets/Project/anime.webp";
import API from "../../../assets/Project/api.webp";
import Drink from "../../../assets/Project/drink.webp";
import Fashion from "../../../assets/Project/fashion.webp";
import Jewll from "../../../assets/Project/jewll.webp";
import Jobringer from "../../../assets/Project/jobringer.webp";
import Jwells from "../../../assets/Project/jwells.webp";
import Kploy from "../../../assets/Project/kploy.webp";
import NFT from "../../../assets/Project/nft.webp";
import Payment from "../../../assets/Project/payment.webp";
import Shopify from "../../../assets/Project/shopify.webp";
import Shopping from "../../../assets/Project/shopping.webp";

const DesignProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { title: "Anime", year: 2024, categories: ["Case Study", "UI/UX"], image: Anime },
    {
      title: "API", year: 2024, categories: ["Design", "Branding"], image: API
    },
    { title: "Drink", year: 2024, categories: ["TV", "Marketing"], image: Drink },
    { title: "Fashion", year: 2024, categories: ["Design", "Branding"], image: Fashion },
    { title: "Jewll", year: 2024, categories: ["Case Study", "UI"], image: Jewll },
    { title: "Jobringer", year: 2024, categories: ["Design", "Branding"], image: Jobringer },
    { title: "Jwells", year: 2024, categories: ["TV", "Marketing"], image: Jwells },
    { title: "Kploy", year: 2024, categories: ["Case Study", "UI/UX"], image: Kploy },
    { title: "NFT", year: 2024, categories: ["Design", "Branding"], image: NFT },
    { title: "Payment", year: 2024, categories: ["TV", "Marketing"], image: Payment },
    { title: "Shopify", year: 2024, categories: ["TV", "Marketing"], image: Shopify },
    { title: "Shopping", year: 2024, categories: ["Case Study", "UI/UX"], image: Shopping },
  ];

  return (
    <div className="bg-black text-white py-24 px-4">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full mb-4">
          ◎ UI Explorations
        </div>
        <h1 className="text-4xl font-light">
          Selected <span className="text-gray-400 font-medium">Designs</span>
        </h1>
        <p className="text-sm text-gray-400 mt-2 max-w-xl mx-auto">
          A curated visual archive of web and product design ideas from personal and client-based projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto p-8 md:p-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} onClick={() => setSelectedImage(project.image)} />
        ))}
      </div>

      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

const ProjectCard = ({ title, year, categories, image, onClick }) => (
  <div className="space-y-2 cursor-pointer" onClick={onClick}>
    <img src={image} alt={title} className="w-full object-cover h-72 rounded-xl" />
    <div>
      <h3 className="text-md font-medium text-white">
        {title} <span className="text-gray-400 text-sm">({year})</span>
      </h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {categories.map((category, idx) => (
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
);

const ImageModal = ({ image, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="relative max-w-4xl w-full p-4">
      <button
        className="absolute top-2 right-2 bg-white text-black p-2 rounded-full font-bold"
        onClick={onClose}
      >
        ✕
      </button>
      <img src={image} alt="Full Preview" className="w-full h-auto rounded-xl" />
    </div>
  </div>
);

export default DesignProjects;
