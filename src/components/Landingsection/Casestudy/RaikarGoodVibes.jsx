import SEO from "../../SEO";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import raikarscreen from "../../../assets/raikargoodvibes/raikarscreen.png";
import persona from "../../../assets/raikargoodvibes/persona.png";
import raikardesign from "../../../assets/raikargoodvibes/raikardesign.webp";
import sam from "../../../assets/raikargoodvibes/sam.png";
import suman from "../../../assets/raikargoodvibes/suman.png";
import arihant from "../../../assets/raikargoodvibes/arihant.png";
import comptetor from "../../../assets/raikargoodvibes/comptetor.png";
import userflow from "../../../assets/raikargoodvibes/userflow.png";
import color from "../../../assets/raikargoodvibes/color.png";
import moodboard from "../../../assets/raikargoodvibes/moodboard.png";
import wireframe from "../../../assets/raikargoodvibes/wireframe.png";
import prototype from "../../../assets/raikargoodvibes/prototype.png";

const RaikarGoodVibes = () => {
  return (
    <div className="bg-black text-white">
      <SEO
        title="Raikars Good Vibes - Case Study"
        description="E-commerce platform design for Raikars Good Vibes, focusing on user-centric design and front-end development."
        keywords="case study, raikars, e-commerce, ui/ux design, frontend development"
        url="https://www.sumansourabh.com/Projects/Raikar"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-6 pt-32 bg-black">
        <div className="max-w-5xl w-full grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md text-white rounded-full text-sm mb-6">
              ◎ UI/UX & Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white">
              Raikars{" "}
              <span className="font-medium text-gray-300">Good Vibes</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl">
              An online platform offering a wide range of handcrafted metal
              creations — from decor and art to lifestyle products — built to
              serve both retail and wholesale customers globally.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:opacity-90 transition"
              >
                Visit Figma File →
              </a>
              <a
                href="https://raikarsgoodvibes.com"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white border border-white/10 rounded-full hover:bg-white/10 transition"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 hidden lg:flex justify-center">
            <div className="w-full max-w-md">
              <img
                src={raikarscreen}
                alt="Raikars Mockup"
                className="rounded-2xl border border-white/10 shadow-xl backdrop-blur-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* Project Intro */}
        <section className="bg-black px-4">
          <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-sm">
            {/* Label */}
            <div className="inline-flex items-center gap-2 text-sm bg-white/10 border border-white/10 backdrop-blur px-4 py-1 rounded-full text-white mb-4">
              ◎ Goal
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-light text-white">
              Project{" "}
              <span className="text-gray-400 font-medium">Information</span>
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-400 mt-4">
              I&apos;m a UI/UX designer and front-end developer tasked with creating
              an e-commerce site, focusing on user-centric design and front-end
              development for optimal user experience and business success.
            </p>
          </div>
        </section>

        {/* Role and Team */}
        <section>
          <SectionLabel text="Team" />
          <h2 className="text-3xl font-semibold text-white">
            My Role and Responsibility
          </h2>
          <p className="text-sm text-gray-400 mt-4">
            Led UI/UX design and front-end implementation, ensuring streamlined
            workflows and high-quality deliverables.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <TeamCard name="Samira Pujari" title="Founder" image={sam} />
            <TeamCard
              name="Suman Sourabh"
              title="UI/UX Designer"
              image={suman}
            />
            <TeamCard
              name="Arihant Jain"
              title="Full Stack Developer"
              image={arihant}
            />
          </div>
        </section>

        {/* User Problems */}
        <section>
          <SectionLabel text="Research" />
          <h2 className="text-3xl font-semibold text-white">Problems Faced</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 mt-4 space-y-2">
            <li>
              Limited reach, product availability, and product information.
            </li>
            <li>
              Inefficient order management and inadequate customer engagement.
            </li>
            <li>Lack of brand awareness among potential customers.</li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <SectionLabel text="Solution" />
          <h2 className="text-3xl font-semibold text-white">Our Approach</h2>
          <ul className="list-disc list-inside text-sm text-gray-400 mt-4 space-y-2">
            <li>Provide clear and accurate product information.</li>
            <li>
              Improve SEO and user engagement with strategic UI improvements.
            </li>
            <li>
              Competitive and user behavior analysis for product optimization.
            </li>
            <li>Developed robust admin panels and payment gateways.</li>
            <li>Established a strong and consistent brand identity.</li>
          </ul>
        </section>

        {/* Design Artifacts */}
        <ImageSection title="Business Needs" image={moodboard} />
        <ImageSection title="Persona" image={persona} />
        <ImageSection title="Competitor Analysis" image={comptetor} />
        <ImageSection title="User Flow" image={userflow} />
        <ImageSection title="Wireframe" image={wireframe} />
        <ImageSection title="UI Style Guide" image={color} />
        <ImageSection title="Prototype" image={prototype} />
        <ImageSection title="Final UI Design" image={raikardesign} />
      </main>

      <Footer />
    </div>
  );
};

const SectionLabel = ({ text }) => (
  <div className="inline-flex items-center gap-2 text-xs bg-white/5 border border-white/10 backdrop-blur px-3 py-1 rounded-full mb-4 uppercase tracking-widest text-gray-400">
    ◎ {text}
  </div>
);

const TeamCard = ({ name, title, image }) => (
  <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur">
    <img src={image} alt={name} className="w-14 h-14 rounded-full" />
    <div>
      <p className="font-medium text-white">{name}</p>
      <p className="text-sm text-gray-400">{title}</p>
    </div>
  </div>
);

const ImageSection = ({ title, image }) => (
  <section className="space-y-4 ">
    <SectionLabel text={title} />
    <img src={image} alt={title} className="rounded-xl w-full bg-white" />
  </section>
);

export default RaikarGoodVibes;
