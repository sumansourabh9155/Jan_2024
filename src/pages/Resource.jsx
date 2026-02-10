import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import Underlinebutton from "../components/elements/Underlinebutton";
import {
  BookOpen,
  Youtube,
  Users,
  Compass,
  Layers,
  LayoutDashboard,
} from "lucide-react";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const designSystems = [
  {
    title: "Branding Style Guides",
    description:
      "Apple’s first official design kit for Figma contains a comprehensive set of components, views, system interfaces, text styles, color styles, materials, and layout guides.",

    link: "https://brandingstyleguides.com/",
  },
  {
    title: "Atlassian Design System",
    description:
      "Atlassian Design System focuses on providing valuable assistance to teams worldwide by making collaboration seamless and easy.",

    link: "https://atlassian.design/",
  },
  {
    title: "IBM Design Language",
    description:
      "IBM’s design language offers principles, components, and guidelines to create consistent experiences across IBM products and platforms.",

    link: "https://www.ibm.com/design/language/",
  },
];

const otherResources = [
  {
    category: "UX Guidelines & Knowledge Base",
    icon: <Compass size={20} className="text-white/80" />,
    resources: [
      {
        title: "Human Interface Guidelines (Apple)",
        description:
          "Apple’s UI/UX principles focused on clarity, deference, and depth across platforms.",
        link: "https://developer.apple.com/design/human-interface-guidelines/",
      },
      {
        title: "Material Design (Google)",
        description:
          "Google's adaptable design system, backed by open-source components, for creating digital experiences.",
        link: "https://m3.material.io/",
      },
      {
        title: "UX Psychology Principles",
        description:
          "Explore psychological laws like Hick’s Law, Fitts’ Law and more that influence user behavior.",
        link: "https://lawsofux.com/",
      },
      {
        title: "UX Collective on Medium",
        description:
          "A leading publication on Medium for UX designers with stories, tips and insights.",
        link: "https://uxdesign.cc/",
      },
      {
        title: "Nielsen Norman Group Articles",
        description:
          "Trusted research-based UX articles to guide digital strategy and usability.",
        link: "https://www.nngroup.com/articles/",
      },
    ],
  },
  {
    category: "YouTube Picks",
    icon: <Youtube size={20} className="text-white/80" />,
    resources: [
      {
        title: "Design with Figma - Full Course",
        description:
          "A complete beginner-friendly course to learn Figma and essential UI skills.",
        link: "https://www.youtube.com/watch?v=jwCmIBJ8Jtc",
      },
      {
        title: "UX Design Process Explained",
        description:
          "Clear explanation of UX phases from research to testing, ideal for beginners.",
        link: "https://www.youtube.com/watch?v=9B1hF8H1lOg",
      },
    ],
  },
  {
    category: "Favorite Influencers",
    icon: <Users size={20} className="text-white/80" />,
    resources: [
      {
        title: "Steve Schoger (UI Tips)",
        description:
          "Designer well-known for practical UI tips shared through Twitter and Refactoring UI.",
        link: "https://twitter.com/steveschoger",
      },
      {
        title: "Charli Marie (Design & Career)",
        description:
          "YouTube channel focused on the design process and growing in creative careers.",
        link: "https://www.youtube.com/user/charlimarieTV",
      },
      {
        title: "Chris Do (Business + Design)",
        description:
          "Design entrepreneur sharing business strategy, branding, and client relationship tips.",
        link: "https://www.youtube.com/user/thefuturishere",
      },
    ],
  },
];

const books = [
  {
    title: "Don't Make Me Think - Steve Krug",
    description:
      "A classic on web usability principles, making design intuitive and obvious.",
  },
  {
    title: "The Design of Everyday Things - Don Norman",
    description:
      "Explores the cognitive science behind good design and usability.",
  },
  {
    title: "Hooked - Nir Eyal",
    description:
      "Understand how to build habit-forming products that users love.",
  },
  {
    title: "Atomic Habits - James Clear",
    description:
      "Behavioral insights that can help shape product and UX decisions.",
  },
];

const Resource = () => {
  return (
    <div className="container__wrapper bg-black text-white min-h-screen ">
      <SEO
        title="Resources - Suman Sourabh | Product Designer"
        description="Curated list of design resources, books, and tools that influence my design practice."
        keywords="design resources, ux guidelines, design systems, recommended books, ui tools"
        url="https://www.sumansourabh.com/resource"
      />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-40">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm bg-white/5 border border-white/10 backdrop-blur px-4 py-1 rounded-full mb-4">
            <Layers size={16} className="text-white/80" /> Design Resources
          </div>
          <h1 className="text-4xl font-light">
            Curated <span className="font-medium text-gray-400">Resources</span>
          </h1>
          <p className="text-sm text-gray-400 mt-2 max-w-xl mx-auto">
            Explore foundational tools, frameworks, and media that influence my
            design practice.
          </p>
        </div>

        {/* Design Systems Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <LayoutDashboard size={20} className="text-white/80" />
            <h2 className="text-2xl font-semibold">Design Systems</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {designSystems.map((item, index) => (
              <Link key={index} to={item.link} target="_blank">
                <div className="p-6 h-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-sm hover:shadow-md transition-all">
                  <h2 className="text-lg font-semibold mb-2 text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-5">
                    {item.description}
                  </p>
                  <Underlinebutton text1="Click to visit" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Sections */}
        {otherResources.map((section, i) => (
          <div className="mb-20" key={i}>
            <div className="flex items-center gap-3 mb-6">
              {section.icon}
              <h2 className="text-2xl font-semibold">{section.category}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.resources.map((res, idx) => (
                <Link key={idx} to={res.link} target="_blank">
                  <div className="p-6 h-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-sm hover:shadow-md transition-all">
                    <h3 className="text-base font-semibold mb-2 text-white">
                      {res.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {res.description}
                    </p>
                    <Underlinebutton text1="Click to visit" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Books Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={20} className="text-white/80" />
            <h2 className="text-2xl font-semibold">Recommended Books</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="p-6 h-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-base font-semibold mb-2 text-white">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-400">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resource;
