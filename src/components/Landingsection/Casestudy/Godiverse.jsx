import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import SEO from "../../SEO";
import {
    FileText, Users, Target, TrendingUp, Zap, Layers,
    Share2, Download, Printer, Search, Sparkles, Globe,
    CheckCircle2, BarChart2, Palette, Shield, GitBranch, Eye
} from "lucide-react";

// ================= ASSETS =================
import Banner from "../../../assets/Godiverse/Banner.png";

// Placeholder for screenshots — replace with real assets
const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='700' fill='%23111'%3E%3Crect width='1200' height='700' fill='%23111' stroke='%23333' stroke-width='2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23444' font-family='monospace' font-size='18'%3EScreenshot Placeholder%3C/text%3E%3C/svg%3E";

// ================= REUSABLE COMPONENTS =================

const Badge = ({ children }) => (
    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-6 bg-[#d6f928]/5 px-3 py-1 rounded border border-[#d6f928]/20">
        {children}
    </div>
);

const StatCard = ({ value, label, icon }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
        {icon && <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">{icon}</div>}
        <p className="font-heading text-3xl font-bold text-white">{value}</p>
        <p className="text-sm text-gray-400 leading-snug">{label}</p>
    </div>
);

const Godiverse = () => {
    return (
        <div className="text-white bg-[#050505]">
            <SEO
                title="GoDiverse: 1-Page Resume Builder — PM Case Study"
                description="How I scoped, designed, and integrated AI into a 1-page resume builder that lets brands share by link, download PDF, or print — all in one flow."
                keywords="product management case study, GoDiverse, resume builder, AI integration, PDF export, link sharing, product scoping, industry research"
                url="https://www.sumansourabh.com/Projects/GoDiverse"
            />
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="bg-[#050505] pt-32 pb-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <Badge>[ SaaS &middot; Resume Builder &middot; AI Integration ]</Badge>
                        <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white leading-none mb-6">
                            GoDiverse{" "}
                            <span className="text-gray-500">Resume Builder</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            A 1-page resume builder for brands &mdash; create, share by link, download as PDF, or print. All in one flow. AI-assisted content generation built in.
                        </p>
                    </div>

                    {/* Hero Image */}
                    <img src={Banner} alt="GoDiverse Resume Builder" className="rounded-2xl w-full border border-white/10 mb-12" />

                    {/* Snapshot Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Company</p>
                            <p className="text-white font-medium">GoDiverse</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">My Role</p>
                            <p className="text-white font-medium">Designer &rarr; Product Lead</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Platform</p>
                            <p className="text-white font-medium">Web, SaaS</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Duration</p>
                            <p className="text-white font-medium">3 Months</p>
                        </div>
                    </div>

                    {/* Team + Tools */}
                    <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Users size={14} className="text-gray-600" />
                            <span>2 engineers, 1 designer (me), 1 content strategist &mdash; agile sprints</span>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {["Figma", "Jira", "React", "Tailwind CSS", "Puppeteer", "Claude API"].map((t) => (
                                <span key={t} className="text-xs font-mono text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY I OWNED PRODUCT DECISIONS ================= */}
            <section className="bg-black py-24 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-16">
                        <Badge>[ Context ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Hired as a designer.{" "}
                            <span className="text-gray-400">Ended up scoping the product.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed">
                            GoDiverse had the brand and the audience &mdash; a recruitment platform focused on diversity and inclusion.
                            What they didn&apos;t have was a clear product scope for the resume builder.
                            I was brought in to design the UI, but quickly took ownership of defining what to build, how AI should integrate, and the full user flow from creation to distribution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center flex-shrink-0">
                                <Target size={18} className="text-[#d6f928]" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Scoped the Product</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Defined the feature set, user flows, and technical constraints. Turned a vague brief into a buildable spec with clear acceptance criteria.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                                <Search size={18} className="text-purple-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Industry Research</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Audited 12+ resume builders (Canva, Zety, Novoresume, Resume.io). Mapped feature gaps, pricing models, and distribution patterns.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                <Sparkles size={18} className="text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">AI Integration Strategy</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Defined how AI should assist content creation &mdash; not replace the user, but accelerate first drafts of summaries, skills, and experience descriptions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PRODUCT STRATEGY ================= */}
            <section className="bg-[#050505] py-24 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">

                    {/* The Problem */}
                    <div className="max-w-3xl mb-20">
                        <Badge>[ The Problem ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Resume builders are either too complex{" "}
                            <span className="text-gray-400">or too generic.</span>
                        </h2>

                        {/* Competitive Landscape Concept Vector */}
                        <svg className="w-full h-24 my-6" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="gd-red-glow">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>
                                <linearGradient id="gd-gap-grad" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                                    <stop offset="50%" stopColor="#f97316" stopOpacity="0.05" />
                                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
                                </linearGradient>
                            </defs>
                            {/* Complex builder — stacked rectangles */}
                            <rect x="30" y="12" width="70" height="8" rx="1" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.4" fill="#ef4444" fillOpacity="0.08" />
                            <rect x="30" y="23" width="70" height="8" rx="1" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.35" fill="#ef4444" fillOpacity="0.06" />
                            <rect x="30" y="34" width="70" height="8" rx="1" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.3" fill="#ef4444" fillOpacity="0.05" />
                            <rect x="30" y="45" width="70" height="8" rx="1" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.25" fill="#ef4444" fillOpacity="0.04" />
                            <rect x="30" y="56" width="70" height="8" rx="1" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.2" fill="#ef4444" fillOpacity="0.03" />
                            <text x="65" y="76" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.25">COMPLEX</text>
                            {/* Gap indicator — center */}
                            <rect x="140" y="8" width="120" height="60" rx="4" fill="url(#gd-gap-grad)" />
                            <line x1="160" y1="38" x2="190" y2="38" stroke="#f97316" strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="3 3" />
                            <line x1="210" y1="38" x2="240" y2="38" stroke="#f97316" strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="3 3" />
                            <text x="200" y="42" textAnchor="middle" fontFamily="monospace" fontSize="18" fill="#f97316" fillOpacity="0.35" filter="url(#gd-red-glow)">?</text>
                            <text x="200" y="76" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.25">GAP</text>
                            {/* Generic builder — single plain rectangle */}
                            <rect x="300" y="25" width="70" height="26" rx="2" stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.35" fill="#f97316" fillOpacity="0.05" />
                            <line x1="310" y1="33" x2="360" y2="33" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.15" />
                            <line x1="310" y1="39" x2="350" y2="39" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.12" />
                            <line x1="310" y1="45" x2="340" y2="45" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.1" />
                            <text x="335" y="76" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.25">GENERIC</text>
                        </svg>

                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            I audited 12+ resume builders (Canva, Zety, Novoresume, Resume.io). They fell into two camps:
                            enterprise-grade builders with 50+ templates and overwhelming UX,
                            or minimal tools that produced cookie-cutter output.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Neither solved the core job-to-be-done:
                            create a <span className="text-white font-medium">professional, distinctive 1-page resume in under 10 minutes</span>,
                            then share it instantly &mdash; by link, PDF, or print.
                        </p>
                    </div>

                    {/* Competitive Insight Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                    <BarChart2 size={16} className="text-red-400" />
                                </div>
                                <h4 className="text-white font-semibold text-sm">Complex Builders</h4>
                            </div>
                            <p className="text-gray-400 text-xs leading-relaxed">Multi-page templates, 20+ section types, drag-and-drop complexity. Average time-to-first-resume: 30+ minutes. High drop-off before PDF export.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                                    <Layers size={16} className="text-orange-400" />
                                </div>
                                <h4 className="text-white font-semibold text-sm">Generic Builders</h4>
                            </div>
                            <p className="text-gray-400 text-xs leading-relaxed">Fast but forgettable. Cookie-cutter templates, no brand personality, no share-by-link. Output looks identical across every user.</p>
                        </div>
                    </div>

                    {/* Research Screenshot Placeholder */}
                    <img src={PLACEHOLDER} alt="Competitive Research" className="rounded-2xl w-full border border-white/10" />
                </div>
            </section>

            {/* ================= PRODUCT DECISIONS + AI + DESIGN (SINGLE FLOW) ================= */}
            <section className="bg-black py-24 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">

                    {/* Strategic Bet */}
                    <div className="max-w-3xl mb-20">
                        <Badge>[ The Strategic Bet ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            One page. One flow.{" "}
                            <span className="text-gray-400">Three distribution channels.</span>
                        </h2>

                        {/* Distribution flow vector */}
                        <svg className="w-full h-20 my-6" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gd-doc-grad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#d6f928" stopOpacity="0.25" />
                                    <stop offset="100%" stopColor="#d6f928" stopOpacity="0.04" />
                                </linearGradient>
                                <filter id="gd-dist-glow">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>
                            </defs>
                            {/* Source: 1-page doc */}
                            <rect x="20" y="15" width="50" height="50" rx="4" fill="url(#gd-doc-grad)" stroke="#d6f928" strokeOpacity="0.4" strokeWidth="1.2" />
                            {[0, 1, 2, 3].map((i) => (
                                <line key={i} x1="30" y1={25 + i * 9} x2="60" y2={25 + i * 9}
                                    stroke="#d6f928" strokeOpacity={0.2 - i * 0.04} strokeWidth="0.8" />
                            ))}
                            <text x="45" y="77" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#d6f928" fillOpacity="0.4">1 PAGE</text>
                            {/* Diverging arrows to 3 outputs */}
                            <line x1="72" y1="40" x2="100" y2="40" stroke="white" strokeOpacity="0.12" strokeWidth="0.7" />
                            {[18, 40, 62].map((y, i) => (
                                <line key={i} x1="100" y1="40" x2="130" y2={y}
                                    stroke="white" strokeOpacity="0.12" strokeWidth="0.6" />
                            ))}
                            {/* Link output */}
                            <rect x="135" y="10" width="55" height="18" rx="3" fill="#3b82f6" fillOpacity="0.07" stroke="#3b82f6" strokeOpacity="0.3" strokeWidth="0.8" />
                            <text x="162" y="22" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.35">🔗 LINK</text>
                            {/* PDF output */}
                            <rect x="135" y="31" width="55" height="18" rx="3" fill="#a855f7" fillOpacity="0.07" stroke="#a855f7" strokeOpacity="0.3" strokeWidth="0.8" />
                            <text x="162" y="43" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.35">PDF</text>
                            {/* Print output */}
                            <rect x="135" y="52" width="55" height="18" rx="3" fill="#d6f928" fillOpacity="0.06" stroke="#d6f928" strokeOpacity="0.25" strokeWidth="0.8" />
                            <text x="162" y="64" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.35">PRINT</text>
                            {/* Arrow to TTV */}
                            <line x1="194" y1="40" x2="232" y2="40" stroke="#d6f928" strokeOpacity="0.25" strokeWidth="0.7" />
                            <polygon points="232,37 240,40 232,43" fill="#d6f928" fillOpacity="0.25" />
                            {/* TTV callout */}
                            <circle cx="290" cy="40" r="30" fill="#d6f928" fillOpacity="0.03" stroke="#d6f928" strokeOpacity="0.15" strokeWidth="0.7" />
                            <text x="290" y="36" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#d6f928" fillOpacity="0.55" filter="url(#gd-dist-glow)">&lt;8m</text>
                            <text x="290" y="49" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="white" fillOpacity="0.2">TTV</text>
                            {/* Annotation */}
                            <text x="355" y="30" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="white" fillOpacity="0.15">create</text>
                            <text x="355" y="40" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="white" fillOpacity="0.15">once</text>
                            <text x="355" y="50" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#d6f928" fillOpacity="0.3">share 3x</text>
                        </svg>

                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            Instead of competing on template volume, I scoped the product around a single constraint:
                            <span className="text-white font-medium"> everything fits on one page</span>.
                            One page forces clarity, forces prioritization, and makes the output instantly shareable.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            The distribution model was the real differentiator &mdash; every resume gets a unique shareable link,
                            a server-side PDF export, and print-optimized formatting. Create once, distribute everywhere.
                        </p>
                    </div>

                    {/* Distribution Triad */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center">
                                <Share2 size={18} className="text-[#d6f928]" />
                            </div>
                            <h4 className="text-white font-semibold text-sm">Share by Link</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">Every resume gets a unique URL. Share on LinkedIn, in emails, or embed anywhere. Edit once, the link reflects changes instantly.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <Download size={18} className="text-blue-400" />
                            </div>
                            <h4 className="text-white font-semibold text-sm">Download as PDF</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">Server-side PDF generation via Puppeteer. WYSIWYG &mdash; no layout shifts, no broken fonts. ATS-compatible output.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                <Printer size={18} className="text-purple-400" />
                            </div>
                            <h4 className="text-white font-semibold text-sm">Print-Ready</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">Print-optimized CSS renders perfectly on A4. Margins, typography, and spacing tuned for physical output.</p>
                        </div>
                    </div>

                    {/* Builder Screenshot Placeholder */}
                    <img src={PLACEHOLDER} alt="Resume Builder Interface" className="rounded-2xl w-full border border-white/10 mb-20" />

                    {/* Key Product Decisions */}
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">Key Product Decisions</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-10">
                        Every feature scoped against one question: does this help someone go from blank page to shared resume faster?
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                <FileText size={18} className="text-emerald-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Structured Sections, Not Free-Form</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Fixed section types (Summary, Experience, Education, Skills) with flexible content inside. Prevents layout breakage while giving creative control.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                                <Eye size={18} className="text-cyan-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Live Preview</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Real-time preview as users type. No save-and-preview loop. What you see is exactly what the PDF and link show.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center flex-shrink-0">
                                <Palette size={18} className="text-[#d6f928]" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Brand-First Templates</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Not 200 options &mdash; 5 curated templates, each optimized for readability, ATS parsing, and visual distinction.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                                <Shield size={18} className="text-orange-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">One-Page Constraint</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">The system enforces a single page. Content overflow triggers smart truncation hints instead of spilling to page two.</p>
                            </div>
                        </div>
                    </div>

                    {/* AI Integration */}
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">AI Integration</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-6">
                        AI as an accelerator, not a replacement. Three optional touchpoints &mdash; each editable, each designed to get users from blank field to strong first draft in one click.
                    </p>

                    {/* AI assist flow vector */}
                    <svg className="w-full h-20 mb-10" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient id="gd-ai-core" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                            </radialGradient>
                            <filter id="gd-ai-glow">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>
                        {/* Blank input — left */}
                        <rect x="10" y="20" width="60" height="40" rx="3" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="0.8" strokeDasharray="3 3" />
                        <line x1="18" y1="32" x2="42" y2="32" stroke="white" strokeOpacity="0.08" strokeWidth="0.7" />
                        <line x1="18" y1="40" x2="38" y2="40" stroke="white" strokeOpacity="0.06" strokeWidth="0.7" />
                        <line x1="18" y1="48" x2="30" y2="48" stroke="white" strokeOpacity="0.04" strokeWidth="0.7" />
                        <text x="40" y="74" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.18">blank</text>
                        {/* Arrow in */}
                        <line x1="73" y1="40" x2="110" y2="40" stroke="#a855f7" strokeOpacity="0.25" strokeWidth="0.8" />
                        <polygon points="110,37 118,40 110,43" fill="#a855f7" fillOpacity="0.3" />
                        {/* AI node */}
                        <circle cx="150" cy="40" r="22" fill="url(#gd-ai-core)" stroke="#a855f7" strokeOpacity="0.4" strokeWidth="1.5" filter="url(#gd-ai-glow)" />
                        {/* Sparkle in center */}
                        <path d="M150 30 L152 37 L159 39 L152 41 L150 48 L148 41 L141 39 L148 37 Z" fill="#a855f7" fillOpacity="0.5" />
                        <text x="150" y="73" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#a855f7" fillOpacity="0.4">Claude API</text>
                        {/* Arrow out */}
                        <line x1="172" y1="40" x2="210" y2="40" stroke="#d6f928" strokeOpacity="0.3" strokeWidth="0.8" />
                        <polygon points="210,37 218,40 210,43" fill="#d6f928" fillOpacity="0.3" />
                        {/* Strong draft — right */}
                        <rect x="222" y="14" width="80" height="52" rx="3" fill="#d6f928" fillOpacity="0.04" stroke="#d6f928" strokeOpacity="0.25" strokeWidth="0.8" />
                        {[0, 1, 2, 3, 4].map((i) => (
                            <line key={i} x1="232" y1={23 + i * 9} x2={270 + i * 5} y2={23 + i * 9}
                                stroke="#d6f928" strokeOpacity={0.2 - i * 0.02} strokeWidth="0.7" />
                        ))}
                        <text x="262" y="75" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#d6f928" fillOpacity="0.35">first draft</text>
                        {/* Editable badge */}
                        <rect x="315" y="28" width="62" height="24" rx="3" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.1" strokeWidth="0.6" />
                        <text x="346" y="38" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="white" fillOpacity="0.25">always</text>
                        <text x="346" y="48" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#d6f928" fillOpacity="0.4">editable</text>
                    </svg>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center">
                                <Sparkles size={18} className="text-[#d6f928]" />
                            </div>
                            <h4 className="text-white font-semibold text-sm">Professional Summary</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">User inputs role + experience. AI generates a tailored 3-line summary. Editable, regenerable, always the user&apos;s call.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                <Sparkles size={18} className="text-purple-400" />
                            </div>
                            <h4 className="text-white font-semibold text-sm">Experience Bullets</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">Plain language in, achievement-oriented bullets out. &ldquo;Managed a team&rdquo; becomes &ldquo;Led a cross-functional team of 8.&rdquo;</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <Sparkles size={18} className="text-blue-400" />
                            </div>
                            <h4 className="text-white font-semibold text-sm">Skills Suggestions</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">AI suggests relevant hard and soft skills based on role. Users pick or add their own. No guesswork.</p>
                        </div>
                    </div>

                    {/* AI Screenshot Placeholder */}
                    <img src={PLACEHOLDER} alt="AI Content Generation Flow" className="rounded-2xl w-full border border-white/10 mb-20" />

                    {/* What didn't work + What I said no to */}
                    <div className="flex flex-col md:flex-row gap-6 mb-20">
                        <div className="flex-1 bg-white/[0.02] border border-dashed border-white/10 rounded-xl p-5">
                            <p className="text-gray-600 text-xs uppercase tracking-widest mb-2 font-mono">What didn&apos;t work first</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                First version auto-generated the entire resume from a job title. Users didn&apos;t trust it &mdash; the output didn&apos;t feel &ldquo;theirs.&rdquo;
                                Iterated: <span className="text-white font-medium">section-level AI assists users trigger manually</span>. Trust went up, completion followed.
                            </p>
                        </div>
                        <div className="flex-1 bg-white/[0.02] border border-dashed border-white/10 rounded-xl p-5">
                            <p className="text-gray-600 text-xs uppercase tracking-widest mb-2 font-mono">What I Said No To</p>
                            <div className="space-y-2 text-gray-400 text-sm">
                                <div className="flex items-start gap-2">
                                    <span className="text-red-400 mt-0.5">&times;</span>
                                    <span>Multi-page resumes &mdash; kills the core value prop</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-red-400 mt-0.5">&times;</span>
                                    <span>Cover letter builder &mdash; v2 feature, not v1</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-red-400 mt-0.5">&times;</span>
                                    <span>Template marketplace &mdash; quality over quantity</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Design Screenshots Placeholders */}
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">The Product</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-10">
                        UX built around reducing time-to-value. No onboarding tour. Users land on the builder, see their resume taking shape in real time, and hit share.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img src={PLACEHOLDER} alt="Editor View" className="rounded-2xl w-full border border-white/10" />
                        <img src={PLACEHOLDER} alt="Template Selection" className="rounded-2xl w-full border border-white/10" />
                    </div>
                </div>
            </section>

            {/* ================= OUTCOMES ================= */}
            <section className="bg-[#050505] py-24 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10">
                        <Badge>[ Business Outcomes ]</Badge>
                        <p className="text-gray-400 text-sm mb-10 max-w-2xl">
                            Shipped in 3 months. The constraint-driven approach &mdash; one page, three distribution channels, AI-assisted content &mdash; produced a focused product that solved a real job-to-be-done.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard value="< 8 min" label="Average time from signup to first shared resume." icon={<Zap size={18} className="text-yellow-400" />} />
                            <StatCard value="3-in-1" label="Distribution — link, PDF, and print from a single build." icon={<Share2 size={18} className="text-[#d6f928]" />} />
                            <StatCard value="40%" label="Of users used AI-assisted content generation on first resume." icon={<Sparkles size={18} className="text-purple-400" />} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CLOSING ================= */}
            <section className="bg-black py-24 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <Badge>[ The Real Story ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                            Constraints are product decisions.{" "}
                            <span className="text-gray-400">Not compromises.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            The one-page constraint wasn&apos;t a limitation &mdash; it was the product strategy.
                            It forced every design decision toward clarity and speed.
                            Combined with AI-assisted content and three distribution channels,
                            it turned a resume builder into a share-first career tool.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            I scoped the product, ran the industry research, defined the AI integration points,
                            and designed every screen. From blank brief to shipped SaaS in 3 months.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= NEXT CASE STUDY ================= */}
            <section className="bg-[#050505] py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-2">Next Case Study</p>
                        <p className="font-heading text-2xl font-bold text-white">Carter: Ad Platform Redesign</p>
                    </div>
                    <Link to="/Projects/carter" className="text-[#d6f928] font-medium text-sm border border-[#d6f928]/20 bg-[#d6f928]/5 px-6 py-3 rounded-full hover:bg-[#d6f928]/10 transition-colors whitespace-nowrap">
                        View Case Study &rarr;
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Godiverse;
