import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/**
 * Site header — shared by every page.
 *
 * Previously a floating pill: monospace job title, a lime capsule for the
 * active link, a circled "S" monogram and a heavy shadow. That vocabulary read
 * as a developer tool. This keeps the same behaviour (hide on scroll down,
 * show on scroll up) but states it as type: the name, a quiet set of links,
 * one control.
 */
// Outside the component so the scroll handler can read them without the
// effect re-running on every render.
const HEADER_H = 76;

const navLinks = [
  { to: "/#case-studies", text: "Case studies" },
  { to: "/#design-gallery", text: "Design" },
  { to: "/resume", text: "About" },
];

// A case study is the work, so reading one should light up Work. Without this
// the nav went blank the moment you followed a project link — the reader lost
// any sense of where they were in the site.
const CASE_STUDY_PATHS = ["/carter", "/poppins", "/atlas", "/simfluent", "/godiverse"];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  // One rAF-throttled scroll handler drives both the hide-on-scroll bar and
  // the active-section indicator.
  //
  // The indicator used to come from location.hash, which only changes when
  // someone clicks a link — so scrolling straight past a section never lit it
  // up, and the nav was wrong for most of the page.
  //
  // An IntersectionObserver would be the usual tool, but this reuses a handler
  // that already runs on every scroll, so the extra cost is two
  // getBoundingClientRect calls per frame, and unlike IO it is observable in
  // a headless browser, which is how it got tested.
  useEffect(() => {
    const onLanding = location.pathname === "/";
    const ids = navLinks.filter((l) => l.to.startsWith("/#")).map((l) => l.to.slice(2));

    const read = () => {
      const y = window.scrollY;
      if (y > lastScrollY.current && y > 100) setIsVisible(false);
      else setIsVisible(true);
      lastScrollY.current = y;

      if (!onLanding) {
        setActiveSection(null);
      } else {
        // A reading line a third of the way down the content area: a section
        // is "current" once it crosses that, not when its first pixel appears.
        const line = HEADER_H + (window.innerHeight - HEADER_H) * 0.35;
        let current = null;
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const r = el.getBoundingClientRect();
          if (r.top <= line && r.bottom > line) {
            current = id;
            break;
          }
        }
        // Identical state bails out of the re-render, so this is free on the
        // frames where nothing changed — which is most of them.
        setActiveSection((prev) => (prev === current ? prev : current));
      }
    };

    // Cancel-and-reschedule rather than a boolean lock. A lock that only
    // clears inside the rAF callback deadlocks whenever frames are throttled
    // — a hidden tab drops to roughly 2Hz, so one pending frame would swallow
    // every scroll until it finally ran. This also coalesces to the latest
    // scroll position per frame instead of the first.
    const onScroll = () => {
      cancelAnimationFrame(ticking.current);
      ticking.current = requestAnimationFrame(read);
    };

    read(); // set the correct state before the first scroll
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(ticking.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // A trailing slash is the same page. Both of these used to be exact string
  // comparisons, so "/carter/" lit nothing in the nav while "/carter" lit
  // "Case studies" — and a static host that serves /carter/index.html will
  // happily answer either spelling, so visitors really do arrive on both.
  //
  // It showed up as a hydration mismatch once the pages were pre-rendered: the
  // build rendered the link active and the browser rendered it inactive, so
  // React threw the pre-rendered markup away and re-rendered the page.
  const normalise = (p) => (p.replace(/\/+$/, "") || "/").toLowerCase();
  const here = normalise(location.pathname);
  const onCaseStudy = CASE_STUDY_PATHS.includes(here);

  const isActive = (to) => {
    if (!to.startsWith("/#")) return here === normalise(to);
    // On the landing page the scroll position decides; on a case study the
    // Case studies link stands in for the section the reader came from.
    if (to === "/#case-studies" && onCaseStudy) return true;
    return here === "/" && activeSection === to.slice(2);
  };

  // "page" is for a link to the current page. A link to a section within the
  // current page — or, on a case study, to the listing that page belongs to —
  // is "location".
  const currentFor = (to) =>
    !isActive(to) ? undefined : to.startsWith("/#") ? "location" : "page";

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Double rule above and below, so the header reads as a banded strip
          rather than as a bar with a single line under it. Letting it go
          transparent at the top left it with no edge at all. */}
      <div aria-hidden="true" className="rule-double bg-surface" />
      <header className="bg-surface px-6">
        {/* Gutter on the header, container inside it — same as every section,
            so the name sits on the page's own left margin instead of 21px
            inboard of it. */}
        <div className="max-w-6xl mx-auto py-4 flex items-center justify-between gap-6">

          <Link to="/" className="group shrink-0">
            <span className="block font-display text-[1.375rem] leading-none text-ink transition-colors group-hover:text-ink-muted">
              Suman Sourabh
            </span>
            <span className="block text-[8.5px] uppercase tracking-[0.22em] text-ink-faint mt-1.5">
              Product Designer · AI-Native
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, text }) => (
              <Link
                key={to}
                to={to}
                aria-current={currentFor(to)}
                // The active state is an underline, not a filled capsule —
                // weight and rule, no layout shift.
                className={`text-[0.9375rem] transition-colors pb-0.5 border-b ${isActive(to)
                    ? "text-ink border-ink"
                    : "text-ink-muted border-transparent hover:text-ink hover:border-line-strong"
                  }`}
              >
                {text}
              </Link>
            ))}
            {/* A text link, not a filled pill. The solid button was the
                heaviest thing in the bar and pulled the eye away from the
                work. Underlined so it still reads as the action — and it's a
                text-decoration, which distinguishes it from the border-b the
                nav links use for their active state. */}
            <Link
              to="/contact"
              className="text-[0.9375rem] text-ink underline underline-offset-[6px] decoration-line-strong hover:decoration-ink transition-colors"
            >
              Get in touch
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden -mr-2 p-2 text-ink"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      <div aria-hidden="true" className="rule-double bg-surface" />

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-surface border-b border-line transition-[max-height,opacity] duration-300
          ${isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav aria-label="Mobile navigation" className="px-6 py-4 flex flex-col">
          {navLinks.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              aria-current={currentFor(to)}
              className={`py-3 text-base border-b border-line last:border-b-0 ${isActive(to) ? "text-ink font-medium" : "text-ink-muted"
                }`}
            >
              {text}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 mb-2 text-center text-[0.9375rem] font-medium bg-ink text-surface px-5 py-3 rounded-full"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
