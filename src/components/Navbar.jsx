import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, CircleDot } from "lucide-react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Smart Scroll Logic: Hides on scroll down, shows on scroll up
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false); // Hide
        } else {
          setIsVisible(true); // Show
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/projects", text: "Case Studies" }, // Renamed for Business Impact
    // { to: "/resources", text: "Resources" },
    // { to: "/resume", text: "Profile" },        // Renamed from "About Me" (more professional)
  ];

  return (
    <div className="flex justify-center w-full">
      <div
        className={`fixed z-50 w-[95%] md:max-w-7xl transition-all duration-500 ease-in-out
          ${isVisible ? "translate-y-6 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <header className="relative flex items-center justify-between px-6 py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

          {/* Left: Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className={`relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border transition-colors ${location.pathname === "/" ? "border-[#d6f928]/50" : "border-white/10 group-hover:border-[#d6f928]/50"}`}>
               <span className={`font-mono font-bold text-xs transition-colors ${location.pathname === "/" ? "text-[#d6f928]" : "text-white group-hover:text-[#d6f928]"}`}>S</span>
            </div>
            <div className="flex flex-col">
                <span className="text-white font-medium text-sm leading-none tracking-wide">Suman Sourabh</span>
                <span className={`text-[10px] font-mono mt-0.5 transition-colors ${location.pathname === "/" ? "text-[#d6f928]" : "text-gray-500 group-hover:text-[#d6f928]"}`}>Product Designer + Strategist</span>
            </div>
          </Link>

          {/* Middle: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full border border-white/5">
            {navLinks.map(({ to, text }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300
                  ${isActive 
                    ? "bg-[#d6f928] text-black shadow-[0_0_15px_rgba(214,249,40,0.4)]" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {text}
              </NavLink>
            ))}
          </nav>

          {/* Right: CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-5 py-2 text-xs font-semibold bg-white text-black border border-transparent rounded-full hover:bg-gray-200 transition-all active:scale-95"
            >
              Book Strategy Call
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Mobile Menu Dropdown */}
        <div 
            className={`md:hidden absolute top-full left-0 w-full mt-2 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 origin-top
            ${isMenuOpen ? "opacity-100 scale-100 max-h-96" : "opacity-0 scale-95 max-h-0 pointer-events-none"}
            `}
        >
            <div className="p-4 flex flex-col gap-2">
                {navLinks.map(({ to, text }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition-colors
                    ${isActive 
                        ? "bg-white/10 text-[#d6f928] border border-[#d6f928]/20" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`
                    }
                >
                    {text}
                </NavLink>
                ))}
                
                <div className="h-px bg-white/10 my-2"></div>
                
                <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold bg-[#d6f928] text-black rounded-xl hover:opacity-90 transition-opacity"
                >
                Book Strategy Call <ArrowRight size={16} />
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;