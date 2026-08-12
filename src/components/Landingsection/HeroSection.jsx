import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import suman from "../../assets/Img/suman.jpg";

const capabilities = ["Product Design", "Design Systems", "AI-Native UX", "Design-to-Code"];

const proof = [
  { value: "4.6/5", label: "usability · 0-to-1 platform" },
  { value: "850+", label: "Figma community copies" },
  { value: "2.5 yrs", label: "shipping 0-to-1 products" },
];

const HeroSection = () => {
  return (
    <header
      role="banner"
      data-testid="hero-section"
      className="relative w-full min-h-screen bg-[#050505] flex items-center overflow-hidden px-4 pt-28 pb-16"
    >
      {/* LAYER 1: Grid with radial spotlight fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 100%)",
        }}
      ></div>

      {/* LAYER 2: Gradient mesh atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 0%, rgba(214,249,40,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 20%, rgba(59,130,246,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 100%, rgba(168,85,247,0.08) 0%, transparent 50%)
          `,
        }}
      ></div>

      {/* LAYER 3: Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, transparent 45%, rgba(5,5,5,0.6) 100%)" }}
      ></div>

      {/* MAIN CONTENT — message left, photo right */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

        {/* LEFT: the pitch */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          {/* Availability badge — instant role clarity */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 rounded-full text-xs font-mono tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Product Designer · Open to roles
          </div>

          {/* Headline — what I do, in one glance */}
          <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            I Build 0-to-1 products {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              and ship development myself.
            </span>
          </h1>

          {/* One-line who-I-am */}
          <p className="text-base text-gray-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed mb-6">
            Product Designer with a <span className="text-white font-medium">CS/ML background</span>. I take AI
            products from <span className="text-white font-medium">user research to a launched, polished interface</span> —
            interaction, design systems, and the product build.
          </p>

          {/* Capability chips — scannable "what I do" */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
            {capabilities.map((c) => (
              <span
                key={c}
                className="text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full font-mono"
              >
                {c}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/#case-studies">
              <button className="group flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-bold text-base hover:bg-[#d6f928] hover:scale-105 transition-[transform,background-color,color] duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto">
                View Case Studies
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-white/5 border border-white/10 text-white px-7 py-3.5 rounded-full font-medium text-base hover:bg-white/10 hover:border-white/30 transition-[background-color,border-color] duration-200 backdrop-blur-md w-full sm:w-auto">
                Get in Touch
              </button>
            </Link>
          </div>

          {/* Proof row — quick credibility + curiosity */}
          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3">
            {proof.map((p) => (
              <div key={p.label} className="flex items-baseline gap-2 text-sm">
                <span className="font-heading font-bold text-white">{p.value}</span>
                <span className="text-gray-500">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: photo */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Ambient glow behind the portrait */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#d6f928]/20 via-blue-500/10 to-purple-500/20 blur-2xl rounded-[2rem] pointer-events-none" />
            <img
              src={suman}
              width="420"
              height="500"
              decoding="async"
              alt="Suman Sourabh — Product Designer"
              className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[500px] object-cover rounded-3xl border border-white/10 brightness-105 shadow-2xl"
            />
            {/* Small floating credential chip on the photo */}
            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 bg-[#0a0a0a]/90 border border-white/10 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#d6f928]" />
              <span className="text-xs text-gray-300">CS/ML · designs & ships</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
