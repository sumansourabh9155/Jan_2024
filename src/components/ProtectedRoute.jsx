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
    <div className="min-h-screen bg-surface-2 text-ink flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
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
          <div className="flex items-center justify-center">
            <Lock size={26} className="text-ink-faint" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-display text-3xl md:text-4xl font-normal text-center mb-3">
          This case study is protected
        </h2>
        <p className="text-ink-faint text-center text-sm mb-10">
          Enter the password to view the full breakdown.
        </p>
        {/* Hint card */}
        <div className="border-t border-line pt-6 mb-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-0.5">
              <FileText size={18} className="text-ink-faint" />
            </div>
            <div>
              <p className="text-sm text-ink-soft leading-relaxed">
                The password is available in my{" "}
                <span className="text-ink font-semibold">Doc</span>. If you have my Doc or Mail, you&apos;ll find it there.
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
              className="w-full px-5 py-4 rounded-xl bg-surface-3/70 border border-line text-ink placeholder-gray-600 font-mono tracking-wider text-center text-lg focus:outline-none focus:border-accent-ink/45 focus:ring-2 focus:ring-accent-ink/50 transition-all"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-ink text-surface py-4 rounded-xl font-bold text-base hover:bg-ink-soft transition-all shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
          >
            Unlock Case Study
          </button>
        </form>

        

        {/* Request access toggle */}
        {!showRequest && requestStatus !== "success" && (
          <button
            onClick={() => setShowRequest(true)}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-surface-3/70 border border-line text-ink-muted hover:text-ink hover:border-line-strong transition-all text-sm cursor-pointer"
          >
            <Mail size={16} />
            Don&apos;t have the password? Request access
          </button>
        )}

        {/* Request form */}
        {showRequest && requestStatus !== "success" && (
          <div className="bg-surface-3/70 border border-line rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Send size={14} className="text-blue-700" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink">Request Password</h3>
                <p className="text-xs text-ink-ghost">I&apos;ll get back to you shortly.</p>
              </div>
            </div>

            <form onSubmit={handleRequestSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-surface-3/70 border border-line text-ink text-sm placeholder-gray-600 focus:outline-none focus:border-line transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-surface-3/70 border border-line text-ink text-sm placeholder-gray-600 focus:outline-none focus:border-line transition-all"
              />
              <select
                name="context"
                required
                className="w-full px-4 py-3 rounded-lg bg-surface-3/70 border border-line text-sm text-ink-muted focus:outline-none focus:border-line transition-all appearance-none"
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
                className="w-full px-4 py-3 rounded-lg bg-surface-3/70 border border-line text-ink text-sm placeholder-gray-600 focus:outline-none focus:border-line transition-all resize-none"
              />
              <button
                type="submit"
                disabled={requestStatus === "loading"}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all ${
                  requestStatus === "loading"
                    ? "bg-surface-3 text-ink-faint cursor-not-allowed"
                    : "bg-surface-3 text-ink hover:bg-surface-2 border border-line hover:border-line-strong"
                }`}
              >
                {requestStatus === "loading" ? "Sending..." : "Send Request"}
              </button>
              {requestStatus === "error" && (
                <p className="text-xs text-red-700 text-center">Something went wrong. Try again.</p>
              )}
            </form>
          </div>
        )}

        {/* Success state */}
        {requestStatus === "success" && (
          <div className="bg-accent/15 border border-accent-ink/30 rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 rounded-full bg-accent/25 flex items-center justify-center">
                <CheckCircle size={20} className="text-accent-ink" />
              </div>
            </div>
            <p className="text-sm text-ink font-semibold mb-1">Request sent!</p>
            <p className="text-xs text-ink-muted">
              I&apos;ll review your request and share the password via email. Usually within a few hours.
            </p>
          </div>
        )}

        {/* Back link */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-ink-ghost hover:text-ink-muted text-sm mt-8 mx-auto transition-colors cursor-pointer"
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
