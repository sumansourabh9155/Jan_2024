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

const LandingPage = () => {
  return (
    <>
      {/* Hero + Navbar Section with Background */}
      <div
        className="relative bg-cover bg-no-repeat bg-center min-h-screen"
        style={{
          // backgroundImage: `url(${bg})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          backgroundColor: "#000000",
        }}
      >
        <Navbar />
        <HeroSection />
      </div>

      {/* Rest of the page */}
      <Projects />
      <AboutMe />
      <DesignServices />
      <Testimonial />
      {/* <Tools /> */}
      <DoubleDiamond />
      <MessyMiddle />
      <PricingFilter />
      <Faq />
      <Footer />
    </>
  );
};

export default LandingPage;