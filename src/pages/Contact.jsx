import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHead from "../components/SeoHead";
import { Mail, Linkedin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus(null);
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "6dedb7c3-a069-4cfc-a71f-b28dc83fee6c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      });
      const result = await res.json();
      if (result.success) {
        setFormStatus({ type: "success", message: "Message sent. I'll get back to you within 24 hours." });
        event.target.reset();
      } else {
        setFormStatus({ type: "error", message: "Something went wrong. Please try again." });
      }
    } catch {
      setFormStatus({ type: "error", message: "Network error. Please check your connection." });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 w-full " +
    "focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-colors duration-200";

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <SeoHead
        title="Contact Suman Sourabh | Hire a SaaS Product Strategist"
        description="Get in touch with Suman Sourabh for SaaS product strategy consulting, UX audits, rapid MVP design, or full-time opportunities."
        keywords="contact, hire saas product strategist, ux consultant, freelance product designer, collaboration"
        canonicalUrl="https://www.sumansourabh.com/contact"
      />
      <Navbar />

      {/* ── Page wrapper ── */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4">

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient atmosphere */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d6f928]/8 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/8 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* ── LEFT: Context panel ── */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase px-3 py-1 rounded border border-[#d6f928]/20 bg-[#d6f928]/5 mb-6">
                [ Let's Connect ]
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                Let's build <span className="text-gray-500 font-light">something.</span>
              </h1>
              <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-sm">
                Whether it's a full-time role, a consulting project, or you just want to talk product — I'm here.
              </p>

              {/* Contact tiles */}
              <div className="space-y-3 mb-10">
                <a
                  href="mailto:sumansourabh099@gmail.com"
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 group hover:border-white/25 hover:bg-white/[0.07] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[#d6f928]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-sm text-white truncate">sumansourabh099@gmail.com</p>
                  </div>
                  <ArrowRight size={14} className="text-gray-600 group-hover:text-[#d6f928] group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
                </a>

                <a
                  href="https://www.linkedin.com/in/suman-sourabh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 group hover:border-white/25 hover:bg-white/[0.07] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Linkedin size={16} className="text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-0.5">LinkedIn</p>
                    <p className="text-sm text-white">linkedin.com/in/suman-sourabh</p>
                  </div>
                  <ArrowRight size={14} className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
                </a>
              </div>

              {/* Availability badge */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-0.5">Availability</p>
                  <p className="text-sm text-white">Open to full-time & consulting roles</p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Available
                </span>
              </div>
            </div>

            {/* ── RIGHT: Form card ── */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h2 className="font-heading text-xl font-bold text-white mb-1">Send a message</h2>
              <p className="text-sm text-gray-500 mb-6">I respond within 24 hours.</p>

              {/* Status alert */}
              {formStatus && (
                <div className={`mb-6 p-4 rounded-xl text-sm border ${
                  formStatus.type === "success"
                    ? "bg-[#d6f928]/5 border-[#d6f928]/20 text-[#d6f928]"
                    : "bg-red-500/5 border-red-500/20 text-red-400"
                }`}>
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    className={inputClass}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className={inputClass}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Phone (optional)"
                    className={inputClass}
                  />
                  <select
                    name="subject"
                    className={inputClass + " appearance-none"}
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select a subject*</option>
                    <option value="hire">Hire — Full Time</option>
                    <option value="project">Consulting Project</option>
                    <option value="guidance">Career Guidance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <textarea
                  name="issue"
                  placeholder="Describe your project or message*"
                  className={inputClass + " resize-none"}
                  rows="5"
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    loading
                      ? "bg-white/10 text-white/40 cursor-not-allowed"
                      : "bg-white/10 border border-white/10 text-white hover:bg-[#d6f928] hover:text-black hover:border-[#d6f928] hover:shadow-[0_0_20px_rgba(214,249,40,0.2)] hover:scale-[1.01] active:scale-[0.99]"
                  }`}
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
