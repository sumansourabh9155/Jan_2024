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
    "bg-surface-3/70 border border-line rounded-xl px-4 py-3 text-sm text-ink placeholder-gray-500 w-full " +
    "focus:outline-none focus:border-line-strong focus:bg-surface-3 transition-colors duration-200";

  return (
    <div className="bg-surface-2 min-h-screen text-ink">
      <SeoHead
        title="Contact Suman Sourabh | Product Designer — AI & 0-to-1 Products"
        description="Get in touch with Suman Sourabh about product design roles, AI-native design work, or design questions."
        keywords="contact, product designer, hire product designer, ui/ux designer, AI-native design"
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/8 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/8 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* ── LEFT: Context panel ── */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-ink tracking-widest uppercase px-3 py-1 rounded border border-accent-ink/30 bg-accent/15 mb-6">
                [ Let&apos;s Connect ]
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-ink leading-tight mb-4">
                Let&apos;s build <span className="text-ink-faint font-light">something.</span>
              </h1>
              <p className="text-ink-muted text-base leading-relaxed mb-10 max-w-sm">
                Whether it&apos;s a full-time role, a project, or you just want to talk design — I&apos;m here.
              </p>

              {/* Contact tiles */}
              <div className="space-y-3 mb-10">
                <a
                  href="mailto:sumansourabh9155@gmail.com"
                  className="flex items-center gap-4 bg-surface-3/70 border border-line rounded-2xl p-4 group hover:border-line-strong hover:bg-surface-3 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/25 border border-accent-ink/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-accent-ink" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-ink-faint font-mono uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-sm text-ink truncate">sumansourabh9155@gmail.com</p>
                  </div>
                  <ArrowRight size={14} className="text-ink-ghost group-hover:text-accent-ink group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
                </a>

                <a
                  href="https://www.linkedin.com/in/sumansourabh9155/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-surface-3/70 border border-line rounded-2xl p-4 group hover:border-line-strong hover:bg-surface-3 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Linkedin size={16} className="text-blue-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-ink-faint font-mono uppercase tracking-widest mb-0.5">LinkedIn</p>
                    <p className="text-sm text-ink">linkedin.com/in/sumansourabh9155</p>
                  </div>
                  <ArrowRight size={14} className="text-ink-ghost group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
                </a>
              </div>

              {/* Availability badge */}
              <div className="flex items-center gap-3 bg-surface-3/70 border border-line rounded-2xl p-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-green-800" />
                </div>
                <div>
                  <p className="text-xs text-ink-faint font-mono uppercase tracking-widest mb-0.5">Availability</p>
                  <p className="text-sm text-ink">Open to full-time & consulting roles</p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-green-800 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                  Available
                </span>
              </div>
            </div>

            {/* ── RIGHT: Form card ── */}
            <div className="bg-surface-3/70 border border-line rounded-2xl p-8 backdrop-blur-md">
              <h2 className="font-heading text-xl font-bold text-ink mb-1">Send a message</h2>
              <p className="text-sm text-ink-faint mb-6">I respond within 24 hours.</p>

              {/* Status alert */}
              {formStatus && (
                <div className={`mb-6 p-4 rounded-xl text-sm border ${
                  formStatus.type === "success"
                    ? "bg-accent/15 border-accent-ink/30 text-accent-ink"
                    : "bg-red-500/5 border-red-500/20 text-red-700"
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
                    <option value="project">Project / Contract</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <textarea
                  name="issue"
                  placeholder="Your message — role, opportunity, or question*"
                  className={inputClass + " resize-none"}
                  rows="5"
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    loading
                      ? "bg-surface-3 text-ink/40 cursor-not-allowed"
                      : "bg-surface-3 border border-line text-ink hover:bg-accent hover:text-ink hover:border-accent-ink hover:shadow-[0_5px_20px_rgba(0,0,0,0.08)] hover:scale-[1.01] active:scale-[0.99]"
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
