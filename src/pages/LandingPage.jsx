import "../App.css";
import HeroSection from "../components/Landingsection/HeroSection";
import Navbar from "../components/Navbar";
import SeoHead from "../components/SeoHead";

// These were code-split, so the initial payload was Navbar + Hero and each
// section streamed in on scroll.
//
// They are static imports now, because the page is pre-rendered to HTML at
// build time and `renderToString` cannot resolve a `React.lazy` boundary — it
// emits the Suspense fallback instead. Pre-rendering a lazy landing page gives
// crawlers an empty grey box where the case studies should be, which is the
// exact problem the pre-render exists to fix.
//
// The cost is about 10 KB gzipped added to the first load. The gain is that
// the page arrives complete, with no request waterfall behind it — so this is
// very likely faster in practice as well as readable without JavaScript.
import Projects from "../components/Landingsection/Projects";
import DesignShowcase from "../components/Landingsection/DesignShowcase";
import Testimonial from "../components/Landingsection/Testimonial";
import Speaking from "../components/Landingsection/Speaking";
import Faq from "../components/Landingsection/Faq";
import Footer from "../components/Footer";

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

        {/* The work leads, and takes the most room. */}
        <Projects />
        <DesignShowcase />

        {/* Then the person. */}
        <Testimonial />

        {/* FAQ before the talks. The FAQ answers what a recruiter came to find
            out — remote or on-site, notice period, what he actually owned.
            Speaking is good signal but nobody is hired for it, so it stops
            standing between the testimonial and the questions. */}
        <Faq />
        <Speaking />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
