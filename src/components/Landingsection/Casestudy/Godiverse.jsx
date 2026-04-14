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
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-10">
                        AI as an accelerator, not a replacement. Three optional touchpoints &mdash; each editable, each designed to get users from blank field to strong first draft in one click.
                    </p>

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
