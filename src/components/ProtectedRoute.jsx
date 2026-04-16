import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Lock, FileText, ArrowLeft, Send, CheckCircle, Mail } from "lucide-react";

const ProtectedRoute = ({ children, correctPassword }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [shake, setShake] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [requestStatus, setRequestStatus] = useState(null); // null | "loading" | "success" | "error"
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setPassword("");
    }
  };

  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    setRequestStatus("loading");

    const formData = new FormData(e.target);
    formData.append("access_key", "6dedb7c3-a069-4cfc-a71f-b28dc83fee6c");
    formData.append("subject", `Case Study Access Request — ${location.pathname}`);
    formData.append("from_name", "Portfolio Password Request");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await res.json();
      if (result.success) {
        setRequestStatus("success");
        e.target.reset();
      } else {
        setRequestStatus("error");
      }
    } catch {
      setRequestStatus("error");
    }
  };

  if (isAuthenticated) return children;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 40%, rgba(214,249,40,0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 30% 70%, rgba(59,130,246,0.06) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Lock icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
            <Lock size={28} className="text-[#d6f928]" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2">
          This case study is protected
        </h2>
        <p className="text-gray-500 text-center text-sm mb-10">
          Enter the password to view the full breakdown.
        </p>
        {/* Hint card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-md mb-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center mt-0.5">
              <FileText size={18} className="text-[#d6f928]" />
            </div>
            <div>
              <p className="text-sm text-gray-300 leading-relaxed">
                The password is available in my{" "}
                <span className="text-white font-semibold">Doc</span>. If you have my Doc or Mail, you&apos;ll find it there.
              </p>
            </div>
          </div>
        </div>

        {/* Password form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div className={`relative transition-transform ${shake ? "animate-[shake_0.4s_ease-in-out]" : ""}`}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              autoFocus
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 font-mono tracking-wider text-center text-lg focus:outline-none focus:border-[#d6f928]/50 focus:ring-1 focus:ring-[#d6f928]/20 transition-all"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-xl font-bold text-base hover:bg-[#d6f928] transition-all shadow-[0_0_20px_rgba(255,255,255,0.08)]"
          >
            Unlock Case Study
          </button>
        </form>

        

        {/* Request access toggle */}
        {!showRequest && requestStatus !== "success" && (
          <button
            onClick={() => setShowRequest(true)}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all text-sm cursor-pointer"
          >
            <Mail size={16} />
            Don&apos;t have the password? Request access
          </button>
        )}

        {/* Request form */}
        {showRequest && requestStatus !== "success" && (
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Send size={14} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Request Password</h3>
                <p className="text-xs text-gray-600">I&apos;ll get back to you shortly.</p>
              </div>
            </div>

            <form onSubmit={handleRequestSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/25 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/25 transition-all"
              />
              <select
                name="context"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 focus:outline-none focus:border-white/25 transition-all appearance-none"
              >
                <option value="" disabled selected>How did you find me?</option>
                <option value="linkedin">LinkedIn</option>
                <option value="referral">Referral</option>
                <option value="hiring">Hiring / Recruiting</option>
                <option value="search">Google / Search</option>
                <option value="other">Other</option>
              </select>
              <textarea
                name="message"
                placeholder="Quick note (optional)"
                rows="2"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/25 transition-all resize-none"
              />
              <button
                type="submit"
                disabled={requestStatus === "loading"}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all ${
                  requestStatus === "loading"
                    ? "bg-white/10 text-gray-500 cursor-not-allowed"
                    : "bg-white/10 text-white hover:bg-white/15 border border-white/10 hover:border-white/20"
                }`}
              >
                {requestStatus === "loading" ? "Sending..." : "Send Request"}
              </button>
              {requestStatus === "error" && (
                <p className="text-xs text-red-400 text-center">Something went wrong. Try again.</p>
              )}
            </form>
          </div>
        )}

        {/* Success state */}
        {requestStatus === "success" && (
          <div className="bg-[#d6f928]/5 border border-[#d6f928]/20 rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 rounded-full bg-[#d6f928]/10 flex items-center justify-center">
                <CheckCircle size={20} className="text-[#d6f928]" />
              </div>
            </div>
            <p className="text-sm text-white font-semibold mb-1">Request sent!</p>
            <p className="text-xs text-gray-400">
              I&apos;ll review your request and share the password via email. Usually within a few hours.
            </p>
          </div>
        )}

        {/* Back link */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-400 text-sm mt-8 mx-auto transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} />
          Go back
        </button>
      </div>

      {/* Shake animation */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
};

export default ProtectedRoute;
