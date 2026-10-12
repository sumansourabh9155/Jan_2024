import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Smart Scroll Logic: Hides on scroll down, shows on scroll up.
  // rAF-throttled + passive listener + ref-based prev scroll so the
  // effect registers once (no re-bind on every scroll tick).
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > lastScrollY.current && y > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/#case-studies", text: "Case Studies" },
    { to: "/#design-gallery", text: "Design Work" },
    { to: "/resume", text: "About / Resume" },
    // { to: "/resume", text: "Profile" },        // Renamed from "About Me" (more professional)
  ];

  return (
    <div className="flex justify-center w-full">
      <div
        className={`fixed z-50 w-[95%] md:max-w-7xl transition-all duration-500 ease-in-out
          ${isVisible ? "translate-y-6 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        {/* The bar floats over whatever it is scrolling across, so it needs a
            real shadow to separate. 0.5 black was a dark-theme value — over a
            light page it read as a grey bruise rather than a lift. */}
        <header className="relative flex items-center justify-between px-6 py-3 bg-surface-2/95 backdrop-blur-xl border border-line rounded-full shadow-[0_6px_24px_rgba(0,0,0,0.10)]">

          {/* Left: Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            {/* Solid plate, not a tint: the olive mark only clears AA against
                a near-white backdrop, and this bar floats over whatever it is
                scrolling across. */}
            <div className={`relative flex items-center justify-center w-8 h-8 rounded-full bg-surface border transition-colors ${location.pathname === "/" ? "border-accent-ink/45" : "border-line group-hover:border-accent-ink/45"}`}>
              <span className={`font-mono font-bold text-xs transition-colors ${location.pathname === "/" ? "text-accent-ink" : "text-ink group-hover:text-accent-ink"}`}>S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-ink font-medium text-sm leading-none tracking-wide">Suman Sourabh</span>
              <span className={`text-[10px] font-mono mt-0.5 transition-colors ${location.pathname === "/" ? "text-accent-ink" : "text-ink-faint group-hover:text-accent-ink"}`}>Product Designer · AI-Native </span>
            </div>
          </Link>

          {/* Middle: Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 bg-surface-3/70 px-2 py-1 rounded-full border border-line-soft">
            {navLinks.map(({ to, text }) => {
              // Hash links all share the "/" path, so derive active state from the hash.
              const isActive = to.startsWith("/#")
                ? location.pathname === "/" && location.hash === to.slice(1)
                : location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300
                  ${isActive
                      ? "bg-accent text-ink shadow-[0_4px_15px_rgba(0,0,0,0.08)]"
                      : "text-ink-muted hover:text-ink hover:bg-surface-3/70"
                    }`}
                >
                  {text}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-5 py-2 text-xs font-semibold bg-ink text-surface border border-transparent rounded-full hover:bg-ink-soft transition-all active:scale-95"
            >
              Let&apos;s Work Together
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-ink-muted hover:text-ink transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full mt-2 bg-surface-2 border border-line rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 origin-top
            ${isMenuOpen ? "opacity-100 scale-100 max-h-96" : "opacity-0 scale-95 max-h-0 pointer-events-none"}
            `}
        >
          <div className="p-4 flex flex-col gap-2">
            {navLinks.map(({ to, text }) => {
              const isActive = to.startsWith("/#")
                ? location.pathname === "/" && location.hash === to.slice(1)
                : location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors
                    ${isActive
                      ? "bg-surface-3 text-accent-ink border border-accent-ink/30"
                      : "text-ink-muted hover:text-ink hover:bg-surface-3/70"
                    }`}
                >
                  {text}
                </Link>
              );
            })}

            <div className="h-px bg-surface-3 my-2"></div>

            <Link
              to="/contact"
              // Darken on hover. Dropping opacity blends the button toward the
              // page, which on white made it fade out instead of respond.
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold bg-accent text-ink rounded-xl hover:bg-accent-ink hover:text-surface transition-colors"
            >
              Let&apos;s Work Together <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
