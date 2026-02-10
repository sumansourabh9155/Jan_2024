import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        setFormStatus({ type: "success", message: "Form submitted successfully!" });
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

  return (
    <div className="bg-black min-h-screen text-white">
      <SEO
        title="Contact - Suman Sourabh | Product Designer"
        description="Get in touch with Suman Sourabh for product design collaborations, hiring, or guidance."
        keywords="contact, hire product designer, collaboration, guidance"
        url="https://www.sumansourabh.com/contact"
      />
      <Navbar />
      <div className="flex justify-center items-center pt-40 px-4 pb-20">
        <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm bg-white/10 border border-white/10 px-4 py-1 rounded-full mb-4">
              ◎ Contact
            </div>
            <h1 className="text-4xl font-light text-white">Let’s <span className="font-medium text-gray-300">Talk</span></h1>
            <p className="text-sm text-gray-400 mt-2">I’d love to hear from you. Whether you have a project idea or just want to say hi.</p>
          </div>

          {/* Status Alert */}
          {formStatus && (
            <div className={`mt-6 p-4 rounded text-sm ${formStatus.type === "success" ? "bg-green-500/10 text-green-300" : "bg-red-500/10 text-red-300"
              }`}>
              {formStatus.message}
            </div>
          )}

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className="bg-white/5 border border-white/10 rounded-md p-3 text-sm placeholder-gray-400 w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="bg-white/5 border border-white/10 rounded-md p-3 text-sm placeholder-gray-400 w-full"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="tel"
                placeholder="Phone"
                className="bg-white/5 border border-white/10 rounded-md p-3 text-sm placeholder-gray-400 w-full"
              />
              <select
                name="subject"
                className="bg-white/5 border border-white/10 rounded-md p-3 text-sm text-gray-400 w-full"
                required
              >
                <option value="" disabled selected>Select a subject*</option>
                <option value="hire">Hire</option>
                <option value="project">Exciting Project</option>
                <option value="guidance">Guidance</option>
                <option value="other">Other</option>
              </select>
            </div>

            <textarea
              name="issue"
              placeholder="Describe your project or message*"
              className="bg-white/5 border border-white/10 rounded-md p-3 text-sm placeholder-gray-400 w-full resize-none"
              rows="5"
              required
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-sm font-semibold text-white rounded-md transition-all ${loading
                ? "bg-white/20 cursor-not-allowed"
                : "bg-white/10 hover:bg-white/20"
                }`}
            >
              {loading ? "Submitting..." : "Submit Form"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
