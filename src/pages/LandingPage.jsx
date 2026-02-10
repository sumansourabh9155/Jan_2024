import "../App.css";
import Footer from "../components/Footer";
import { DesignProcess } from "../components/Landingsection/DesignProcess";
import DesignServices from "../components/Landingsection/DesignServices";
import DoubleDiamond from "../components/Landingsection/DoubleDiamond";
import Faq from "../components/Landingsection/Faq";
import HeroSection from "../components/Landingsection/HeroSection";
import Projects from "../components/Landingsection/Projects";
import Testimonial from "../components/Landingsection/Testimonial";
import Tools from "../components/Landingsection/Tools";
import Navbar from "../components/Navbar";
import bg from "../assets/Img/bg.png";
import TechProof from "../components/Landingsection/TechProof";
import MessyMiddle from "../components/Landingsection/MessyMiddle";
import PricingFilter from "../components/Landingsection/PricingFilter";
import { AboutMe } from "../components/Landingsection/AboutMe";
import SeoHead from "../components/SeoHead";

import SEO from "../components/SEO";

const LandingPage = () => {
  return (
    <>
      <SEO
        title="Suman Sourabh - SaaS Product Strategist | Retention & Conversion Design"
        description="Suman Sourabh is a SaaS Product Strategist specializing in retention-focused design, conversion optimization, and rapid MVP deployment."
        keywords="SaaS product designer, UX strategist, retention design, conversion optimization, product management, startup design, MVP design"
        image="/android-chrome-512x512.png"
        url="https://www.sumansourabh.com/"
      />
      {/* Hero + Navbar Section with Background */}
      <div
        className="relative bg-cover bg-no-repeat bg-center min-h-screen"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <Navbar />
        <HeroSection />
      </div>

      {/* Case Studies Section */}
      <Projects />

      {/* About Section */}
      <aside aria-label="About Suman Sourabh">
        <AboutMe />
      </aside>

      {/* Services Section */}
      <DesignServices />

      {/* Social Proof */}
      <Testimonial />

      {/* Methodology */}
      <DoubleDiamond />

      {/* Messy Middle Case Studies */}
      <MessyMiddle />

      {/* Pricing */}
      <PricingFilter />

      {/* FAQ */}
      <Faq />

      <Footer />
    </>
  );
};

export default LandingPage;