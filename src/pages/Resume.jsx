import { Link } from "react-router-dom";
import { Download, Layers, Sparkles, Code } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profilePic from "../assets/Img/suman.jpg";
import SeoHead from "../components/SeoHead";

const Resume = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <SeoHead
        title="Resume: Suman Sourabh — Product Designer | AI-Native & 0-to-1"
        description="Experience of Suman Sourabh, a Product Designer with a CS/ML background. End-to-end design of 0-to-1 AI products across AdTech and HealthTech, design systems, and shipping the UI in React."
        keywords="resume, product designer, ui/ux designer, shyftlabs, 0-to-1 products, design systems, AI-native design, experience"
        ogImage={profilePic}
        canonicalUrl="https://www.sumansourabh.com/resume"
      />
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-20">
        <section className="py-24">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm bg-white/10 border border-white/10 backdrop-blur-md mb-4">
              ◎ Product Designer
            </span>
            <h1 className="text-4xl font-light">
              Suman Sourabh,
              <span className="font-medium text-gray-400"> Product Designer</span>
            </h1>
            <p className="text-sm text-gray-400 mt-2 max-w-xl mx-auto">
              2.5 years designing 0-to-1 products across AdTech, HealthTech, and
              CMS — with the technical depth to ship what I design.
            </p>

            {/* Download resume PDF — the thing recruiters actually want */}
            <a
              href="/Suman_Sourabh_Product_Designer_Resume.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm
                hover:bg-[#d6f928] hover:scale-[1.02] active:scale-[0.99] transition-[transform,background-color] duration-200
                shadow-[0_0_20px_rgba(255,255,255,0.12)]"
            >
              <Download size={16} />
              Download Resume (PDF)
            </a>
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
                  Open to design roles
                </div>
              </div>
              <h2 className="text-lg font-semibold">Hello, I am Suman Sourabh</h2>
            </div>

            {/* RIGHT - About Content */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg flex flex-col justify-between">
              <div>
                <p className="text-md font-semibold text-gray-300 mt-4">
                  Product Designer — AI-Native & 0-to-1 Products, based in India.
                </p>
                <p className="text-sm text-gray-500">
                  B.Tech. Computer Science — Machine Learning specialization, Class of 2024
                </p>
                <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                  I design products end-to-end: discovery, user research,
                  interaction design, design systems, and launch. My CS/ML
                  background means I ship what I design — I read the codebase,
                  prototype in React and Tailwind, and design AI features with
                  engineering at eye level.
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {["UX Research", "Interaction Design", "Design Systems", "Prototyping", "Usability Testing", "Accessibility", "AI-Native UX", "Figma", "React / Tailwind"].map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-black/40 border border-white/10 px-3 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/contact">
                <button className="bg-white text-black w-full py-2 rounded-full mt-6 text-sm font-medium hover:opacity-90 transition">
                  Connect with me
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* About / How I Work — moved here from the landing page */}
        <section id="about" className="scroll-mt-24 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-12 shadow-md">
          <div className="inline-flex items-center gap-2 text-sm text-white mb-2">
            <span className="text-gray-400">◎</span> How I Work
          </div>
          <h2 className="text-2xl font-light mb-6 text-white">
            One Designer. <span className="text-gray-400">Every room in the building.</span>
          </h2>
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
            <p>
              I design from the problem, not the pixels — I kept watching teams build the wrong thing
              because nobody validated the problem first. My <span className="text-white font-medium">CS degree
              with an ML specialization</span> means I can read the codebase, prototype in React, and hand
              engineering designs they can actually ship.
            </p>
            <p>
              I don&apos;t design from opinions. I run user interviews, pull{" "}
              <span className="text-white font-medium">behavioral data via SQL</span>, and validate with
              usability testing. Nothing ships until the team can point to the research, the interview
              quote, or the usability finding behind it.
            </p>
            <p>
              I&apos;ve designed and shipped <span className="text-white font-medium">AI-native experiences</span>{" "}
              with Claude and Gemini, built design systems adopted across products, and closed the
              design-to-code loop myself in React and Tailwind. Craft and velocity — not one at the cost of the other.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/40 border border-white/10 rounded-lg p-4">
              <Layers size={22} className="text-blue-400 mb-2" />
              <h4 className="text-sm font-semibold text-white mb-1">End-to-End Design</h4>
              <p className="text-xs text-gray-400">Research, interaction, visual, and design systems — I own the full design lifecycle, not just the handoff.</p>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-lg p-4">
              <Sparkles size={22} className="text-green-400 mb-2" />
              <h4 className="text-sm font-semibold text-white mb-1">AI-Native UX</h4>
              <p className="text-xs text-gray-400">I design agentic and conversational experiences — clarification, confirmation, and recovery patterns that models can actually serve.</p>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-lg p-4">
              <Code size={22} className="text-yellow-400 mb-2" />
              <h4 className="text-sm font-semibold text-white mb-1">Design Engineer Edge</h4>
              <p className="text-xs text-gray-400">CS/ML degree. I prototype in React and Tailwind, so I ship what I design — zero design-to-code drift.</p>
            </div>
          </div>
        </section>

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
              title: "Shyftlabs – Product Designer (Product Management)",
              duration: "Jan 2024 – Present · Noida, India",
              points: [
                "Own end-to-end product management for the retail media and platforms portfolio: discovery, PRDs, OKRs, roadmap, launch",
                "Launched a 0-to-1 DSP (Carter): authored the PRD, defined OKRs, and led an 8-person cross-functional team from discovery to launch",
                "Designed and shipped an agentic AI campaign-creation assistant on the Claude API",
                "Led end-to-end delivery of a 0-to-1 healthcare CMS replacing a fragmented 130-clinic ecosystem",
                "Architected a centralized UI component library adopted across all company products"
              ]
            }, {
              title: "GoDiverse – UI/UX Consultant",
              duration: "Oct 2025 – Nov 2025 · UK (remote)",
              points: [
                "Designed a streamlined supplier onboarding flow for a UK supplier-diversity SaaS platform",
                "Scoped a one-page, AI-assisted profile builder used to pitch suppliers to corporate brands"
              ]
            }, {
              title: "Raikar – Product Consultant",
              duration: "Aug 2023 – Feb 2024 · E-commerce",
              points: [
                "Owned the full product scope for an e-commerce brand — branding, UX/UI, and development — leading a 5-person team from concept to launch",
                "Delivered the storefront and brand identity with an SEO-optimized site structure"
              ]
            }, {
              title: "KraftBase – Product Designer Intern",
              duration: "June 2023 – Aug 2023 · Punjab, India",
              points: [
                "Created mobile app wireframes with platform consistency",
                "Improved client websites resulting in higher engagement",
                "Ensured smooth design-to-dev transitions"
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
