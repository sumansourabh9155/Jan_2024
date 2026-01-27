import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    explore: [
      { name: "Case Studies", url: "/projects" },
      { name: "Services", url: "/services" },
      { name: "About", url: "/resume" },
      { name: "Resources", url: "/resources" },
    ],
    social: [
      { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: <Linkedin size={16} /> },
      { name: "Twitter / X", url: "https://twitter.com/yourhandle", icon: <Twitter size={16} /> },
      { name: "GitHub", url: "https://github.com/yourrepo", icon: <Github size={16} /> },
    ],
    legal: [
      { name: "Privacy Policy", url: "/privacy" },
      { name: "Terms of Service", url: "/terms" },
    ]
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 relative overflow-hidden pt-20 pb-10">
       {/* Background Grid (Consistent with Hero) */}
       <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: The Final CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 border-b border-white/10 pb-16">
            <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to stop guessing and start <span className="text-[#d6f928]">scaling?</span>
                </h2>
                <p className="text-gray-400 font-light">
                    I take on a limited number of clients per quarter to ensure high-focus delivery. 
                    Let's see if we're a fit.
                </p>
            </div>
            <div>
                <Link to="/contact">
                    <button className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d6f928] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2">
                        Book a Strategy Call
                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </Link>
            </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            
            {/* Column 1: Brand (4 Cols) */}
            <div className="md:col-span-5">
                <Link to="/" className="inline-block text-2xl font-bold text-white mb-4">
                    Suman <span className="text-gray-500">Sourabh</span>
                </Link>
                <p className="text-sm text-gray-500 mb-6 max-w-sm">
                    SaaS Product Strategist. I build systems that turn confused users into loyal customers.
                </p>
                <a 
                    href="mailto:hello@sumansourabh.com" 
                    className="flex items-center gap-2 text-white hover:text-[#d6f928] transition-colors"
                >
                    <Mail size={16} /> hello@sumansourabh.com
                </a>
            </div>

            {/* Column 2: Explore (3 Cols) */}
            <div className="md:col-span-3">
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Explore</h4>
                <ul className="space-y-4">
                    {links.explore.map((link) => (
                        <li key={link.name}>
                            <Link to={link.url} className="text-sm text-gray-400 hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Social (2 Cols) */}
            <div className="md:col-span-2">
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Connect</h4>
                <ul className="space-y-4">
                    {links.social.map((link) => (
                        <li key={link.name}>
                            <a 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#d6f928] transition-colors"
                            >
                                {link.icon} {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 4: Legal (2 Cols) */}
            <div className="md:col-span-2">
                 <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Legal</h4>
                <ul className="space-y-4">
                    {links.legal.map((link) => (
                        <li key={link.name}>
                            <Link to={link.url} className="text-sm text-gray-400 hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
            <p className="text-xs text-gray-600">
                © {currentYear} Suman Sourabh. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-600 mt-2 md:mt-0 flex items-center gap-1">
                Designed in <span className="text-white">Figma</span>. Built with <span className="text-[#61DAFB]">React</span>.
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;