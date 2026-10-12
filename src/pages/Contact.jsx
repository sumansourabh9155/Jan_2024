import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHead from "../components/SeoHead";
import { Mail, Linkedin, Clock, ArrowRight, ChevronDown } from "lucide-react";

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

  // A field is a line to write on, not a filled capsule. The underline keeps
  // the form on the same hairline grammar as the rest of the site.
  const inputClass =
    "bg-transparent border-0 border-b border-line rounded-none px-0 py-3 text-[0.9375rem] text-ink placeholder-ink-ghost w-full " +
    "focus:outline-none focus:border-ink transition-colors duration-200";

  return (
    <div className="font-ui bg-surface min-h-screen text-ink">
      <SeoHead
        title="Contact Suman Sourabh | Product Designer — AI & 0-to-1 Products"
        description="Get in touch with Suman Sourabh about product design roles, AI-native design work, or design questions."
        keywords="contact, product designer, hire product designer, ui/ux designer, AI-native design"
        canonicalUrl="https://www.sumansourabh.com/contact"
      />
      <Navbar />
            <main id="main">

      {/* ── Page wrapper ──
          The three blurred colour blobs and the white 40px grid that used to
          sit here were dark-theme leftovers: white lines at 3% are invisible
          on a white page, and the blobs were the only gradients left on the
          site. The plus grid is the one the hero and footer already use. */}
      <section className="relative bg-surface bg-plusgrid overflow-hidden pt-32 pb-24 px-6">

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* ── LEFT: Context panel ── */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-5">
                Let&apos;s connect
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-normal text-ink leading-[1.05] tracking-[-0.02em] mb-5">
                Let&apos;s build <span className="text-ink-faint italic">something.</span>
              </h1>
              <p className="text-ink-muted text-[0.9375rem] leading-[1.7] mb-12 max-w-sm">
                Whether it&apos;s a full-time role, a project, or you just want to talk design — I&apos;m here.
              </p>

              {/* Contact lines. The address is the affordance — same as the
                  footer — rather than a tile that hides it behind an icon. */}
              <div className="space-y-6 mb-12">
                <a
                  href="mailto:sumansourabh9155@gmail.com"
                  className="group block border-t border-line pt-5"
                >
                  <p className="text-[11px] text-ink-faint uppercase tracking-[0.18em] mb-2 flex items-center gap-2">
                    <Mail size={13} className="text-ink-faint" /> Email
                  </p>
                  <p className="text-[0.9375rem] text-ink inline-flex items-center gap-2 border-b border-line-strong group-hover:border-ink transition-colors pb-0.5">
                    sumansourabh9155@gmail.com
                    <ArrowRight size={14} className="text-ink-ghost group-hover:text-ink group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                  </p>
                </a>

                <a
                  href="https://www.linkedin.com/in/sumansourabh9155/"
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="group block border-t border-line pt-5"
                >
                  <p className="text-[11px] text-ink-faint uppercase tracking-[0.18em] mb-2 flex items-center gap-2">
                    <Linkedin size={13} className="text-ink-faint" /> LinkedIn
                  </p>
                  <p className="text-[0.9375rem] text-ink inline-flex items-center gap-2 border-b border-line-strong group-hover:border-ink transition-colors pb-0.5">
                    linkedin.com/in/sumansourabh9155
                    <ArrowRight size={14} className="text-ink-ghost group-hover:text-ink group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                  </p>
                </a>
              </div>

              {/* Availability */}
              <div className="border-t border-line pt-5">
                <p className="text-[11px] text-ink-faint uppercase tracking-[0.18em] mb-2 flex items-center gap-2">
                  <Clock size={13} className="text-ink-faint" /> Availability
                </p>
                <p className="text-[0.9375rem] text-ink flex items-center gap-2.5">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-ink/40 shrink-0" />
                  Open to full-time &amp; consulting roles
                </p>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div className="border-t border-line pt-8">
              <h2 className="font-display text-[1.75rem] font-normal text-ink mb-1 leading-tight">Send a message</h2>
              <p className="text-[0.8125rem] text-ink-faint mb-8">I respond within 24 hours.</p>

              {/* Status alert */}
              {formStatus && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mb-6 pl-4 py-1 text-[0.875rem] border-l-2 ${
                    formStatus.type === "success"
                      ? "border-ink text-ink"
                      : "border-red-700 text-red-700"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Phone (optional)"
                    className={inputClass}
                  />
                  {/* `appearance-none` strips the native arrow. On the old
                      filled field the box itself still read as a control; on a
                      bare underline nothing would have said "this opens", so
                      the chevron is drawn back in. */}
                  <div className="relative">
                    <select
                      name="subject"
                      className={inputClass + " appearance-none pr-7 cursor-pointer"}
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select a subject*</option>
                      <option value="hire">Hire — Full Time</option>
                      <option value="project">Project / Contract</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown
                      size={15}
                      aria-hidden="true"
                      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-ink-faint"
                    />
                  </div>
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
                  className={`inline-flex items-center gap-2 px-7 py-3.5 text-[0.9375rem] font-medium rounded-full transition-colors duration-200 ${
                    loading
                      ? "bg-surface-3 text-ink-faint cursor-not-allowed"
                      // The primary action on this page, so it reads as one:
                      // solid ink, lightening a step on hover — the same
                      // control as "Read the case study" on the landing page.
                      // It was a pale chip that went lime, and my first pass at
                      // removing the lime left dark text on a dark fill.
                      : "bg-ink text-surface hover:bg-ink-soft active:scale-[0.99]"
                  }`}
                >
                  {loading ? "Sending…" : "Send Message"}
                  {!loading && <ArrowRight size={16} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
            </main>
            <Footer />
    </div>
  );
};

export default Contact;
