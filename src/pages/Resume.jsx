import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Instagram, Dribbble, X } from "lucide-react";
import TechProof from "../components/Landingsection/TechProof";
import profilePic from "../assets/Img/suman.jpg";
import DesignProcess from "../components/Landingsection/DesignProcess";

const Resume = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-20">
        <section className="py-24">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm bg-white/10 border border-white/10 backdrop-blur-md mb-4">
              ◎ Product Designer
            </span>
            <h1 className="text-4xl font-light">
              Suman Sourabh,
              <span className="font-medium text-gray-400"> Your Designer</span>
            </h1>
            <p className="text-sm text-gray-400 mt-2 max-w-xl mx-auto">
              A brief personal overview and journey through my experiences as a
              designer, developer, and thinker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT - Profile Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg">
              <div className="relative rounded-xl overflow-hidden mb-4 aspect-square">
                <img
                  src={profilePic}
                  alt="Suman Sourabh"
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 text-xs text-white bg-black/50 backdrop-blur px-2 py-0.5 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Available for work
                </div>
              </div>
              <h2 className="text-lg font-semibold">Hello I am Suman Sourabh</h2>
            </div>

            {/* RIGHT - About Content */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg flex flex-col justify-between">
              <div>
                <p className="text-md font-semibold text-gray-300 mt-4">
                  UI/UX & Product Designer based in India.
                </p>
                <p className="text-sm text-gray-500">
                  B.Tech in Computer Science & Engineering, Class of 2024
                </p>
                <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                  I craft functional, scalable, and elegant user experiences
                  that drive business value. With strong foundations in UX, UI,
                  and strategy—I bridge gaps between product thinking and
                  execution. From atomic design systems to responsive
                  interfaces, I design with intent, usability, and impact in
                  mind.
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {["UX Research", "UI Design", "Prototyping", "Design Systems", "Webflow", "Framer", "Figma"].map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-black/40 border border-white/10 px-3 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button className="bg-white text-black w-full py-2 rounded-full mt-6 text-sm font-medium hover:opacity-90 transition">
                Connect with me
              </button>
            </div>
          </div>
        </section>


        {/* my way of working */}
        <TechProof />

        <DesignProcess />

        {/* Experience Section */}
        <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 shadow-md">
          <div className="inline-flex items-center gap-2 text-sm text-white mb-2">
            <span className="text-gray-400">◎</span> Work Experience
          </div>
          <h2 className="text-2xl font-light mb-6 text-white">
            Where I’ve Worked
          </h2>

          <div className="space-y-10">
            {[{
              title: "Shyftlabs – Product Designer",
              duration: "Jan 2024 – Present · Noida, India",
              points: [
                "Currently leading the Product Carter (RMN)",
                "Collaborated cross-functionally across lifecycle, aligning design vision with performance goals",
                "Maintained scalable design systems with reusable UI components",
                "Conducted user research and developed accessible, intuitive interfaces",
                "Mentored fellow designers and documented key processes"
              ]
            }, {
              title: "KraftBase – Product Designer Intern",
              duration: "June 2023 – Aug 2023 · Punjab, India",
              points: [
                "Created mobile app wireframes with platform consistency",
                "Improved client websites resulting in higher engagement",
                "Ensured smooth design-to-dev transitions"
              ]
            }, {
              title: "RaikarsGoodVibes – UI Consultant",
              duration: "Nov 2022 – Feb 2023 · Punjab, India",
              points: [
                "Redesigned app flows to enhance usability",
                "Analyzed feedback to drive continuous UI improvements",
                "Led client workshops and implemented direct feedback"
              ]
            }].map((exp, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-400 space-y-1">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 shadow-md">
          <div className="inline-flex items-center gap-2 text-sm text-white mb-2">
            <span className="text-gray-400">◎</span> Public Speaking
          </div>
          <h2 className="text-2xl font-light mb-6 text-white">
            Talks & Workshops
          </h2>

          <div className="space-y-6 text-sm text-gray-400">
            {[{
              title: "Psychology of Colors in Graphic Design (Sep 2023)",
              place: "Lovely Professional University",
              points: ["Led a hands-on Figma workshop for 150+ attendees"]
            }, {
              title: "Intro to UI/UX (Dec 2022)",
              place: "Lovely Professional University",
              points: ["Designed a shoe brand landing page, 500+ Figma copies"]
            }, {
              title: "UI/UX Design with Figma (Nov 2022)",
              place: "Lovely Professional University",
              points: ["Conducted seminar, design gained 850+ Figma Community copies"]
            }].map((event, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-white">{event.title}</h3>
                <p>{event.place}</p>
                <ul className="list-disc list-inside mt-1">
                  {event.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;