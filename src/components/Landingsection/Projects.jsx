import React from "react";
import Anime from "../../assets/Project/anime.webp";
import API from "../../assets/Project/api.webp";
import Drink from "../../assets/Project/drink.webp";
import Health from "../../assets/Project/health.webp";
import Fashion from "../../assets/Project/fashion.webp";
import Glamor from "../../assets/Project/glamor.webp";
import Jewll from "../../assets/Project/jewll.webp";
import Jobringer from "../../assets/Project/jobringer.webp";
import Jwells from "../../assets/Project/jwells.webp";
import Kploy from "../../assets/Project/kploy.webp";
import NFT from "../../assets/Project/nft.webp";
import Payment from "../../assets/Project/payment.webp";
import Pizza from "../../assets/Project/pizza.webp";
import Raikar from "../../assets/Project/raikar.webp";
import Shopify from "../../assets/Project/shopify.webp";
import Shopping from "../../assets/Project/shopping.webp";
import { TrendingUp, Users, ShoppingCart, Zap } from "lucide-react";

const projectData = [
  // {
  //   image: Raikar,
  //   title: "Increasing Daily Active Users by 18%",
  //   category: "Healthcare SaaS",

  //   icon: <Users size={16} className="text-green-400" />,
  // },
  {
    image: Shopping,
    title: "Reducing Cart Abandonment by 25%",
    category: "E-commerce Platform",

    icon: <ShoppingCart size={16} className="text-blue-400" />,
  },
  // {
  //   image: Payment,
  //   title: "Optimizing Checkout Flow for Speed",
  //   category: "Payment Gateway",

  //   icon: <Zap size={16} className="text-yellow-400" />,
  // },
  // {
  //   image: Health,
  //   title: "Improving User Retention by 22%",
  //   category: "Wellness App",

  //   icon: <TrendingUp size={16} className="text-purple-400" />,
  // },
   {
    image: NFT,
    title: "Simplifying NFT Minting Experience",
    category: "Web3 Platform",

    icon: <Zap size={16} className="text-pink-400" />,
  },
  {
    image: Jobringer,
    title: "Streamlining Job Application Flow",
    category: "Job Marketplace",

    icon: <Users size={16} className="text-green-400" />,
  },
  // {
  //   image: Kploy,
  //   title: "Reducing Onboarding Drop-off by 30%",
  //   category: "B2B SaaS",

  //   icon: <TrendingUp size={16} className="text-blue-400" />,
  // },
 
  // {
  //   image: Pizza,
  //   title: "Increasing Order Frequency by 28%",
  //   category: "Food Delivery",

  //   icon: <ShoppingCart size={16} className="text-red-400" />,
  // },
  {
    image: Fashion,
    title: "Boosting Add-to-Cart Rate by 35%",
    category: "Fashion E-commerce",

    icon: <ShoppingCart size={16} className="text-purple-400" />,
  },
  // {
  //   image: Glamor,
  //   title: "Optimizing Product Discovery Flow",
  //   category: "Beauty & Cosmetics",

  //   icon: <Users size={16} className="text-pink-400" />,
  // },
  // {
  //   image: Jewll,
  //   title: "Reducing Search-to-Purchase Time",
  //   category: "Jewelry E-commerce",

  //   icon: <TrendingUp size={16} className="text-yellow-400" />,
  // },
  {
    image: Shopify,
    title: "Improving Merchant Onboarding",
    category: "E-commerce Platform",

    icon: <Zap size={16} className="text-green-400" />,
  },
  {
    image: API,
    title: "Simplifying Developer Documentation",
    category: "API Platform",

    icon: <Users size={16} className="text-blue-400" />,
  },
  // {
  //   image: Drink,
  //   title: "Increasing Subscription Sign-ups by 26%",
  //   category: "Beverage Subscription",

  //   icon: <TrendingUp size={16} className="text-green-400" />,
  // },
  // {
  //   image: Anime,
  //   title: "Reducing Playback Errors by 40%",
  //   category: "Streaming Platform",

  //   icon: <Zap size={16} className="text-red-400" />,
  // },
  // {
  //   image: Jwells,
  //   title: "Optimizing Mobile Checkout Experience",
  //   category: "Luxury Retail",

  //   icon: <ShoppingCart size={16} className="text-purple-400" />,
  // },
];

const Projects = () => {
  return (
    <div className="py-24 mx-auto overflow-hidden bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full mb-4">
          <span className="text-gray-400">◎</span> Case Studies
        </div>
        <h2 className="text-5xl font-bold text-white">
          Real Projects. <span className="text-gray-400">Real Results.</span>
        </h2>
        <p className="text-gray-300 mt-4 text-md max-w-3xl">
          Every project title below includes a{" "}
          <span className="font-semibold text-white">business outcome</span>,
          not just "I redesigned an app." This is how I think—and how your
          customers will see ROI.
        </p>
        <div className="w-full mt-8">
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projectData.slice(0, 6).map((project, i) => (
      <li key={i} className="w-full">
        <div className="flex flex-col h-full w-full bg-white/5 border-2 border-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:border-white/40 transition-all group">
          {/* Relative Image Container */}
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
            />
            {/* Metric Badge */}
            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-2">
              {project.icon}
            </div>
          </div>

          <div className="p-5 flex flex-col flex-grow justify-between">
            <div>
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                {project.category}
              </p>
              <h3 className="text-base font-bold text-white leading-tight">
                {project.title}
              </h3>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-400">
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full whitespace-nowrap">
                UX Strategy
              </span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full whitespace-nowrap">
                A/B Testing
              </span>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>
      </div>

      {/* <div className="w-full inline-flex flex-nowrap">
        {[...Array(2)].map((_, index) => (
         <ul
            key={index}
            className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll"
            style={{ animationDuration: '80s' }} // SLOWER SPEED (60s instead of default fast)
            aria-hidden={index === 1}
          >
            {projectData.map((project, i) => (
              <li key={i}>
                <div className="h-80 w-[380px] bg-white/5 border-2 border-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:border-white/40 transition-all group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-2">
                      {project.icon}
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {project.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                      <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full">
                        UX Strategy
                      </span>
                      <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full">
                        A/B Testing
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div> */}

      {/* Bottom CTA */}
      <div className="max-w-6xl mx-auto px-4 mt-16 text-center">
        <p className="text-gray-400 text-sm mb-4">
          Want to see detailed case studies with psychological annotations?
        </p>
        <a
          href="/projects"
          data-testid="view-full-case-studies-link"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg"
        >
          View Full Case Studies
        </a>
      </div>
    </div>
  );
};

export default Projects;
