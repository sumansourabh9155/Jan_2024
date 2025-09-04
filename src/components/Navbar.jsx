import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(
        prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 0
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    { to: "/projects", text: "Projects" },
    { to: "/Resource", text: "Resource" },
    { to: "/resume", text: "About Me" },
  ];

  const renderNavLinks = (extraClasses = "") =>
    navLinks.map(({ to, text }) => (
      <NavLink
        key={to}
        to={to}
        className={({ isActive }) =>
          isActive
            ? `text-white ${extraClasses}`
            : `text-gray-400 hover:text-white transition ${extraClasses}`
        }
      >
        {text}
      </NavLink>
    ));

  return (
    <div className="flex justify-center">
      <div
        className={`fixed z-50 w-full md:w-[90%] md:max-w-6xl transition-transform duration-300
          ${isScrolled ? "translate-y-0" : "-translate-y-24"}
          top-0 md:top-6
        `}
      >
        <header className="flex items-center justify-between px-6 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-none md:rounded-full shadow-md">

          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-white font-medium text-base"
            >
              <span className="w-4 h-4 rounded-full bg-gradient-to-br from-white to-gray-500 flex items-center justify-center text-black text-sm font-bold">
                ⬤
              </span>
              Suman Sourabh
            </Link>
          </div>

          {/* Middle: Nav Links */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {renderNavLinks()}
          </nav>

          {/* Right: Button */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium bg-black text-white border border-white/20 rounded-full hover:bg-white/10 transition-all"
            >
              Contact
              <span className="bg-[#d6f928] text-black px-2 py-0.5 text-[10px] rounded-md font-semibold">
                pro
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </header>

        {/* Mobile Dropdown responsive */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 p-4 backdrop-blur-md border  border-white/20 rounded-xl text-white text-sm space-y-4 shadow-md bg-black/40">
            {renderNavLinks("block")}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md"
            >
              <Sparkles className="w-4 h-4" />
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
