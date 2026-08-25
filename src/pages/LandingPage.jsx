import { lazy, Suspense } from "react";
import "../App.css";
import HeroSection from "../components/Landingsection/HeroSection";
import Navbar from "../components/Navbar";
import SeoHead from "../components/SeoHead";

// Below-the-fold sections — code-split so the initial landing payload only
// ships Navbar + Hero. Each chunk streams in as the user scrolls.
const Projects = lazy(() => import("../components/Landingsection/Projects"));
const DesignShowcase = lazy(() => import("../components/Landingsection/DesignShowcase"));
const Testimonial = lazy(() => import("../components/Landingsection/Testimonial"));
const Speaking = lazy(() => import("../components/Landingsection/Speaking"));
const DoubleDiamond = lazy(() => import("../components/Landingsection/DoubleDiamond"));
const Faq = lazy(() => import("../components/Landingsection/Faq"));
const Footer = lazy(() => import("../components/Footer"));

// Minimal height placeholder so scroll position doesn't jump when a chunk streams in
const SectionFallback = () => <div className="min-h-[400px] bg-[#050505]" />;

const LandingPage = () => {
  return (
    <>
      <SeoHead
        title="Suman Sourabh | Product Designer — AI-Native UX, Design Systems, 0-to-1"
        description="Product Designer with a CS/ML background. I bring AI-native UX, design systems, and end-to-end product design—research to shipped UI—to early-to-mid-stage SaaS teams."
        canonicalUrl="https://www.sumansourabh.com/"
      />
      {/* Hero + Navbar — eager, above the fold */}
      <div
        className="relative bg-cover bg-no-repeat bg-center min-h-screen"
        style={{ backgroundColor: "#000000" }}
      >
        <Navbar />
        <HeroSection />
      </div>

      <Suspense fallback={<SectionFallback />}>
        {/* Case Studies */}
        <Projects />

        {/* Visual design work */}
        <DesignShowcase />

        {/* Methodology — how the work gets made */}
        <DoubleDiamond />

        {/* Proof about the person, grouped: what others say, then what I teach */}
        <Testimonial />
        <Speaking />

        {/* FAQ */}
        <Faq />

        <Footer />
      </Suspense>
    </>
  );
};

export default LandingPage;
