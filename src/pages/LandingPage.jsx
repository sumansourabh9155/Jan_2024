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
const Faq = lazy(() => import("../components/Landingsection/Faq"));
const Footer = lazy(() => import("../components/Footer"));

// Minimal height placeholder so scroll position doesn't jump when a chunk streams in
const SectionFallback = () => <div className="min-h-[400px] bg-surface" />;

const LandingPage = () => {
  return (
    // `font-ui` scopes the editorial pairing to this page. Inner pages keep
    // IBM Plex until the rest of the site is brought across.
    <div className="font-ui">
      <SeoHead
        title="Suman Sourabh | Product Designer — AI-Native UX, Design Systems, 0-to-1"
        description="Product Designer with a CS/ML background. I bring AI-native UX, design systems, and end-to-end product design—research to shipped UI—to early-to-mid-stage SaaS teams."
        canonicalUrl="https://www.sumansourabh.com/"
      />

      {/* Lets a keyboard or screen-reader user jump the header, which is
          otherwise five stops before the first word of content. */}
      {/* Parked above the viewport and slid down on focus. The sr-only /
          focus:not-sr-only pair fought this one over `position` and left the
          link clipped to 1px even while focused — a transform has nothing to
          argue with. */}
      <a
        href="#main"
        className="fixed top-3 left-3 z-[60] -translate-y-[300%] focus:translate-y-0 transition-transform
          bg-ink text-surface px-5 py-2.5 rounded-full text-sm font-medium"
      >
        Skip to content
      </a>

      <Navbar />

      {/* One <main> per page, so the boundary between chrome and content is
          explicit. There was none — and the hero was a second role="banner"
          alongside the header's implicit one, which is invalid. */}
      <main id="main" className="relative bg-surface">
        <HeroSection />

        <Suspense fallback={<SectionFallback />}>
          {/* The work leads, and takes the most room. */}
          <Projects />
          <DesignShowcase />

          {/* Then the person: what a client said, what he teaches. */}
          <Testimonial />
          <Speaking />

          <Faq />
        </Suspense>
      </main>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default LandingPage;
