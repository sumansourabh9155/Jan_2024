import Navbar from "../../Navbar";
import Footer from "../../Footer";
import SEO from "../../SEO";
import {
    FileText, Users, Target, Zap, Layers,
    Share2, Download, Printer, Search, Sparkles,
    BarChart2, Palette, Shield, Eye
} from "lucide-react";

// ================= ASSETS =================
import Banner from "../../../assets/Godiverse/Banner.png";

import { Badge, StatCard, MetaList, NextCase } from "./CaseStudyUI";

const Godiverse = () => {
    return (
        <div className="font-ui text-ink bg-surface">
            <SEO
                title="GoDiverse: 1-Page Profile Builder with AI — Product Design Case Study"
                description="How I scoped, designed, and integrated AI into a 1-page profile builder for a supplier-diversity platform — share by link, download PDF, or print, all in one flow."
                keywords="product design case study, GoDiverse, profile builder, supplier diversity, AI integration, UX design, interaction design, product scoping"
                url="https://www.sumansourabh.com/GoDiverse"
            />
            <Navbar />
            <main id="main">

            {/* ================= HERO ================= */}
            <section className="bg-surface bg-plusgrid pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Left-aligned, on the page's own margin — the rest of the
                        site never centres a column, and this was the one place a
                        reader's eye had to reset. */}
                    <div className="max-w-3xl mb-12">
                        <Badge>SaaS &middot; Resume Builder &middot; AI Integration</Badge>
                        <h1 className="font-display text-[3.25rem] md:text-7xl font-normal text-ink leading-[0.95] tracking-[-0.02em] mb-6">
                            GoDiverse{" "}
                            <span className="text-ink-faint">Resume Builder</span>
                        </h1>
                        <p className="text-ink-muted text-lg leading-[1.6] max-w-2xl">
                            A 1-page profile builder for suppliers on a supplier-diversity platform &mdash; create, share by link, download as PDF, or print. All in one flow. AI-assisted content generation built in.
                        </p>
                    </div>

                    {/* Hero Image */}
                    <img src={Banner} alt="GoDiverse Resume Builder" className="rounded-sm w-full border border-line" />

                    {/* Was four bordered boxes in a row. Same four facts, read as a
                        caption under the screen rather than as a dashboard above it. */}
                    <MetaList
                        className="mt-12"
                        items={[
                            { term: "Company", value: "GoDiverse" },
                            { term: "My role", value: "UI/UX Consultant → Design Lead" },
                            { term: "Platform", value: "Web, SaaS" },
                            { term: "Duration", value: "2 Months (Oct–Nov 2025)" },
                        ]}
                    />

                    {/* Team + Tools */}
                    <div className="mt-8 flex flex-col gap-2 text-[0.8125rem] text-ink-faint leading-[1.7] max-w-2xl">
                        <p className="flex items-center gap-2">
                            <Users size={14} className="text-ink-ghost shrink-0" />
                            <span>2 engineers, 1 designer (me), 1 content strategist &mdash; agile sprints</span>
                        </p>
                        <p>
                            <span className="text-ink-ghost">Tools &middot; </span>
                            {["Figma", "Jira", "React", "Tailwind CSS", "Puppeteer", "Claude API"].join(" · ")}
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= WHY I OWNED PRODUCT DECISIONS ================= */}
            <section className="bg-cream py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-16">
                        <Badge>Context</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight mb-6">
                            Hired as a designer.{" "}
                            <span className="text-ink-muted">Ended up scoping the product.</span>
                        </h2>
                        <p className="text-ink-muted text-base leading-relaxed">
                            GoDiverse had the brand and the audience &mdash; a UK supplier-diversity SaaS platform connecting underrepresented suppliers with global corporations.
                            What they didn&apos;t have was a clear product scope for the profile builder suppliers would use to pitch themselves.
                            I was brought in as a UI/UX consultant, but quickly took ownership of defining what to build, how AI should integrate, and the full user flow from creation to distribution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border-t border-line pt-5 flex gap-4">
                            <div className="text-ink-faint flex-shrink-0">
                                <Target size={18} className="text-ink-faint" />
                            </div>
                            <div>
                                <h4 className="text-ink font-semibold text-sm mb-1">Scoped the Product</h4>
                                <p className="text-ink-muted text-xs leading-relaxed">Defined the feature set, user flows, and technical constraints. Turned a vague brief into a buildable spec with clear acceptance criteria.</p>
                            </div>
                        </div>
                        <div className="border-t border-line pt-5 flex gap-4">
                            <div className="text-ink-faint flex-shrink-0">
                                <Search size={18} className="text-ink-faint" />
                            </div>
                            <div>
                                <h4 className="text-ink font-semibold text-sm mb-1">Industry Research</h4>
                                <p className="text-ink-muted text-xs leading-relaxed">Audited 12+ resume builders (Canva, Zety, Novoresume, Resume.io). Mapped feature gaps, pricing models, and distribution patterns.</p>
                            </div>
                        </div>
                        <div className="border-t border-line pt-5 flex gap-4">
                            <div className="text-ink-faint flex-shrink-0">
                                <Sparkles size={18} className="text-ink-faint" />
                            </div>
                            <div>
                                <h4 className="text-ink font-semibold text-sm mb-1">AI Integration Strategy</h4>
                                <p className="text-ink-muted text-xs leading-relaxed">Defined how AI should assist content creation &mdash; not replace the user, but accelerate first drafts of summaries, skills, and experience descriptions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PRODUCT STRATEGY ================= */}
            <section className="bg-surface py-24 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* The Problem */}
                    <div className="max-w-3xl mb-20">
                        <Badge>The Problem</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight mb-6">
                            Resume builders are either too complex{" "}
                            <span className="text-ink-muted">or too generic.</span>
                        </h2>

                        {/* Competitive Landscape Concept Vector */}
                        <div className="overflow-x-auto my-6">
<svg className="w-full h-auto max-w-3xl min-w-[560px]" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <rect x="30" y="12" width="70" height="8" rx="1" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.85" fill="#ef4444" fillOpacity="0.21" />
                            <rect x="30" y="23" width="70" height="8" rx="1" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.85" fill="#ef4444" fillOpacity="0.16" />
                            <rect x="30" y="34" width="70" height="8" rx="1" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.78" fill="#ef4444" fillOpacity="0.13" />
                            <rect x="30" y="45" width="70" height="8" rx="1" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.65" fill="#ef4444" fillOpacity="0.1" />
                            <rect x="30" y="56" width="70" height="8" rx="1" stroke="#ef4444" strokeWidth="0.8" strokeOpacity="0.52" fill="#ef4444" fillOpacity="0.08" />
                            <text x="65" y="76" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#101418" fillOpacity="0.82">COMPLEX</text>
                            {/* Gap indicator — center */}
                            <rect x="140" y="8" width="120" height="60" rx="4" fill="url(#gd-gap-grad)" />
                            <line x1="160" y1="38" x2="190" y2="38" stroke="#f97316" strokeWidth="0.6" strokeOpacity="0.78" strokeDasharray="3 3" />
                            <line x1="210" y1="38" x2="240" y2="38" stroke="#f97316" strokeWidth="0.6" strokeOpacity="0.78" strokeDasharray="3 3" />
                            <text x="200" y="42" textAnchor="middle" fontFamily="monospace" fontSize="18" fill="#101418" fillOpacity="0.85" filter="url(#gd-red-glow)">?</text>
                            <text x="200" y="76" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#101418" fillOpacity="0.82">GAP</text>
                            {/* Generic builder — single plain rectangle */}
                            <rect x="300" y="25" width="70" height="26" rx="2" stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.85" fill="#f97316" fillOpacity="0.13" />
                            <line x1="310" y1="33" x2="360" y2="33" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.39" />
                            <line x1="310" y1="39" x2="350" y2="39" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.31" />
                            <line x1="310" y1="45" x2="340" y2="45" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.26" />
                            <text x="335" y="76" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#101418" fillOpacity="0.82">GENERIC</text>
                        </svg>
</div>

                        <p className="text-ink-muted text-base leading-relaxed mb-5">
                            I audited 12+ resume builders (Canva, Zety, Novoresume, Resume.io). They fell into two camps:
                            enterprise-grade builders with 50+ templates and overwhelming UX,
                            or minimal tools that produced cookie-cutter output.
                        </p>
                        <p className="text-ink-muted text-base leading-relaxed">
                            Neither solved the core job-to-be-done:
                            create a <span className="text-ink font-medium">professional, distinctive 1-page profile in under 10 minutes</span>,
                            then share it instantly &mdash; by link, PDF, or print.
                        </p>
                    </div>

                    {/* Competitive Insight Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        <div className="border-t border-line pt-5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-ink-faint">
                                    <BarChart2 size={16} className="text-ink-faint" />
                                </div>
                                <h4 className="text-ink font-semibold text-sm">Complex Builders</h4>
                            </div>
                            <p className="text-ink-muted text-xs leading-relaxed">Multi-page templates, 20+ section types, drag-and-drop complexity. Average time-to-first-resume: 30+ minutes. High drop-off before PDF export.</p>
                        </div>
                        <div className="border-t border-line pt-5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-ink-faint">
                                    <Layers size={16} className="text-ink-faint" />
                                </div>
                                <h4 className="text-ink font-semibold text-sm">Generic Builders</h4>
                            </div>
                            <p className="text-ink-muted text-xs leading-relaxed">Fast but forgettable. Cookie-cutter templates, no brand personality, no share-by-link. Output looks identical across every user.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= PRODUCT DECISIONS + AI + DESIGN (SINGLE FLOW) ================= */}
            <section className="bg-cream py-24 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Strategic Bet */}
                    <div className="max-w-3xl mb-20">
                        <Badge>The Strategic Bet</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight mb-6">
                            One page. One flow.{" "}
                            <span className="text-ink-muted">Three distribution channels.</span>
                        </h2>

                        {/* Distribution flow vector */}
                        <div className="overflow-x-auto my-6">
<svg className="w-full h-auto max-w-3xl min-w-[560px]" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gd-doc-grad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#5E7000" stopOpacity="0.25" />
                                    <stop offset="100%" stopColor="#5E7000" stopOpacity="0.04" />
                                </linearGradient>
                                <filter id="gd-dist-glow">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>
                            </defs>
                            {/* Source: 1-page doc */}
                            <rect x="20" y="15" width="50" height="50" rx="4" fill="url(#gd-doc-grad)" stroke="#5E7000" strokeOpacity="0.85" strokeWidth="1.2" />
                            {[0, 1, 2, 3].map((i) => (
                                <line key={i} x1="30" y1={25 + i * 9} x2="60" y2={25 + i * 9}
                                    stroke="#5E7000" strokeOpacity={0.2 - i * 0.04} strokeWidth="0.8" />
                            ))}
                            <text x="45" y="77" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#5E7000" fillOpacity="1">1 PAGE</text>
                            {/* Diverging arrows to 3 outputs */}
                            <line x1="72" y1="40" x2="100" y2="40" stroke="#101418" strokeOpacity="0.31" strokeWidth="0.7" />
                            {[18, 40, 62].map((y, i) => (
                                <line key={i} x1="100" y1="40" x2="130" y2={y}
                                    stroke="#101418" strokeOpacity="0.31" strokeWidth="0.6" />
                            ))}
                            {/* Link output */}
                            <rect x="135" y="10" width="55" height="18" rx="3" fill="#3b82f6" fillOpacity="0.18" stroke="#3b82f6" strokeOpacity="0.78" strokeWidth="0.8" />
                            <text x="162" y="22" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#101418" fillOpacity="0.85">🔗 LINK</text>
                            {/* PDF output */}
                            <rect x="135" y="31" width="55" height="18" rx="3" fill="#a855f7" fillOpacity="0.18" stroke="#a855f7" strokeOpacity="0.78" strokeWidth="0.8" />
                            <text x="162" y="43" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#101418" fillOpacity="0.85">PDF</text>
                            {/* Print output */}
                            <rect x="135" y="52" width="55" height="18" rx="3" fill="#5E7000" fillOpacity="0.16" stroke="#5E7000" strokeOpacity="0.65" strokeWidth="0.8" />
                            <text x="162" y="64" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#101418" fillOpacity="0.85">PRINT</text>
                            {/* Arrow to TTV */}
                            <line x1="194" y1="40" x2="232" y2="40" stroke="#5E7000" strokeOpacity="0.65" strokeWidth="0.7" />
                            <polygon points="232,37 240,40 232,43" fill="#5E7000" fillOpacity="0.65" />
                            {/* TTV callout */}
                            <circle cx="290" cy="40" r="30" fill="#5E7000" fillOpacity="0.08" stroke="#5E7000" strokeOpacity="0.39" strokeWidth="0.7" />
                            <text x="290" y="36" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#5E7000" fillOpacity="1" filter="url(#gd-dist-glow)">&lt;8m</text>
                            <text x="290" y="49" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#101418" fillOpacity="0.82">TTV</text>
                            {/* Annotation */}
                            <text x="355" y="30" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#101418" fillOpacity="0.82">create</text>
                            <text x="355" y="40" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#101418" fillOpacity="0.82">once</text>
                            <text x="355" y="50" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#5E7000" fillOpacity="1">share 3x</text>
                        </svg>
</div>

                        <p className="text-ink-muted text-base leading-relaxed mb-5">
                            Instead of competing on template volume, I scoped the product around a single constraint:
                            <span className="text-ink font-medium"> everything fits on one page</span>.
                            One page forces clarity, forces prioritization, and makes the output instantly shareable.
                        </p>
                        <p className="text-ink-muted text-base leading-relaxed">
                            The distribution model was the real differentiator &mdash; every resume gets a unique shareable link,
                            a server-side PDF export, and print-optimized formatting. Create once, distribute everywhere.
                        </p>
                    </div>

                    {/* Distribution Triad */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        <div className="border-t border-line pt-5 space-y-3">
                            <div className="text-ink-faint">
                                <Share2 size={18} className="text-ink-faint" />
                            </div>
                            <h4 className="text-ink font-semibold text-sm">Share by Link</h4>
                            <p className="text-ink-muted text-xs leading-relaxed">Every resume gets a unique URL. Share on LinkedIn, in emails, or embed anywhere. Edit once, the link reflects changes instantly.</p>
                        </div>
                        <div className="border-t border-line pt-5 space-y-3">
                            <div className="text-ink-faint">
                                <Download size={18} className="text-ink-faint" />
                            </div>
                            <h4 className="text-ink font-semibold text-sm">Download as PDF</h4>
                            <p className="text-ink-muted text-xs leading-relaxed">Server-side PDF generation via Puppeteer. WYSIWYG &mdash; no layout shifts, no broken fonts. ATS-compatible output.</p>
                        </div>
                        <div className="border-t border-line pt-5 space-y-3">
                            <div className="text-ink-faint">
                                <Printer size={18} className="text-ink-faint" />
                            </div>
                            <h4 className="text-ink font-semibold text-sm">Print-Ready</h4>
                            <p className="text-ink-muted text-xs leading-relaxed">Print-optimized CSS renders perfectly on A4. Margins, typography, and spacing tuned for physical output.</p>
                        </div>
                    </div>

                    {/* Key Product Decisions */}
                    <h3 className="font-ui text-2xl font-medium text-ink mb-3">Key Product Decisions</h3>
                    <p className="text-ink-muted text-sm leading-relaxed max-w-2xl mb-10">
                        Every feature scoped against one question: does this help someone go from blank page to shared resume faster?
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        <div className="border-t border-line pt-5 flex gap-4">
                            <div className="text-ink-faint flex-shrink-0">
                                <FileText size={18} className="text-ink-faint" />
                            </div>
                            <div>
                                <h4 className="text-ink font-semibold text-sm mb-1">Structured Sections, Not Free-Form</h4>
                                <p className="text-ink-muted text-xs leading-relaxed">Fixed section types (Summary, Experience, Education, Skills) with flexible content inside. Prevents layout breakage while giving creative control.</p>
                            </div>
                        </div>
                        <div className="border-t border-line pt-5 flex gap-4">
                            <div className="text-ink-faint flex-shrink-0">
                                <Eye size={18} className="text-ink-faint" />
                            </div>
                            <div>
                                <h4 className="text-ink font-semibold text-sm mb-1">Live Preview</h4>
                                <p className="text-ink-muted text-xs leading-relaxed">Real-time preview as users type. No save-and-preview loop. What you see is exactly what the PDF and link show.</p>
                            </div>
                        </div>
                        <div className="border-t border-line pt-5 flex gap-4">
                            <div className="text-ink-faint flex-shrink-0">
                                <Palette size={18} className="text-ink-faint" />
                            </div>
                            <div>
                                <h4 className="text-ink font-semibold text-sm mb-1">Brand-First Templates</h4>
                                <p className="text-ink-muted text-xs leading-relaxed">Not 200 options &mdash; 5 curated templates, each optimized for readability, ATS parsing, and visual distinction.</p>
                            </div>
                        </div>
                        <div className="border-t border-line pt-5 flex gap-4">
                            <div className="text-ink-faint flex-shrink-0">
                                <Shield size={18} className="text-ink-faint" />
                            </div>
                            <div>
                                <h4 className="text-ink font-semibold text-sm mb-1">One-Page Constraint</h4>
                                <p className="text-ink-muted text-xs leading-relaxed">The system enforces a single page. Content overflow triggers smart truncation hints instead of spilling to page two.</p>
                            </div>
                        </div>
                    </div>

                    {/* AI Integration */}
                    <h3 className="font-ui text-2xl font-medium text-ink mb-3">AI Integration</h3>
                    <p className="text-ink-muted text-sm leading-relaxed max-w-2xl mb-6">
                        AI as an accelerator, not a replacement. Three optional touchpoints &mdash; each editable, each designed to get users from blank field to strong first draft in one click.
                    </p>

                    {/* AI assist flow vector */}
                    <div className="overflow-x-auto mb-10">
<svg className="w-full h-auto max-w-3xl min-w-[560px]" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <rect x="10" y="20" width="60" height="40" rx="3" fill="none" stroke="#101418" strokeOpacity="0.26" strokeWidth="0.8" strokeDasharray="3 3" />
                        <line x1="18" y1="32" x2="42" y2="32" stroke="#101418" strokeOpacity="0.21" strokeWidth="0.7" />
                        <line x1="18" y1="40" x2="38" y2="40" stroke="#101418" strokeOpacity="0.16" strokeWidth="0.7" />
                        <line x1="18" y1="48" x2="30" y2="48" stroke="#101418" strokeOpacity="0.1" strokeWidth="0.7" />
                        <text x="40" y="74" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#101418" fillOpacity="0.82">blank</text>
                        {/* Arrow in */}
                        <line x1="73" y1="40" x2="110" y2="40" stroke="#a855f7" strokeOpacity="0.65" strokeWidth="0.8" />
                        <polygon points="110,37 118,40 110,43" fill="#a855f7" fillOpacity="0.78" />
                        {/* AI node */}
                        <circle cx="150" cy="40" r="22" fill="url(#gd-ai-core)" stroke="#a855f7" strokeOpacity="0.85" strokeWidth="1.5" filter="url(#gd-ai-glow)" />
                        {/* Sparkle in center */}
                        <path d="M150 30 L152 37 L159 39 L152 41 L150 48 L148 41 L141 39 L148 37 Z" fill="#a855f7" fillOpacity="0.85" />
                        <text x="150" y="73" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#101418" fillOpacity="0.85">Claude API</text>
                        {/* Arrow out */}
                        <line x1="172" y1="40" x2="210" y2="40" stroke="#5E7000" strokeOpacity="0.78" strokeWidth="0.8" />
                        <polygon points="210,37 218,40 210,43" fill="#5E7000" fillOpacity="0.78" />
                        {/* Strong draft — right */}
                        <rect x="222" y="14" width="80" height="52" rx="3" fill="#5E7000" fillOpacity="0.1" stroke="#5E7000" strokeOpacity="0.65" strokeWidth="0.8" />
                        {[0, 1, 2, 3, 4].map((i) => (
                            <line key={i} x1="232" y1={23 + i * 9} x2={270 + i * 5} y2={23 + i * 9}
                                stroke="#5E7000" strokeOpacity={0.2 - i * 0.02} strokeWidth="0.7" />
                        ))}
                        <text x="262" y="75" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#5E7000" fillOpacity="1">first draft</text>
                        {/* Editable badge */}
                        <rect x="315" y="28" width="62" height="24" rx="3" fill="#101418" fillOpacity="0.08" stroke="#101418" strokeOpacity="0.26" strokeWidth="0.6" />
                        <text x="346" y="38" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#101418" fillOpacity="0.82">always</text>
                        <text x="346" y="48" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#5E7000" fillOpacity="1">editable</text>
                    </svg>
</div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        <div className="border-t border-line pt-5 space-y-3">
                            <div className="text-ink-faint">
                                <Sparkles size={18} className="text-ink-faint" />
                            </div>
                            <h4 className="text-ink font-semibold text-sm">Professional Summary</h4>
                            <p className="text-ink-muted text-xs leading-relaxed">User inputs role + experience. AI generates a tailored 3-line summary. Editable, regenerable, always the user&apos;s call.</p>
                        </div>
                        <div className="border-t border-line pt-5 space-y-3">
                            <div className="text-ink-faint">
                                <Sparkles size={18} className="text-ink-faint" />
                            </div>
                            <h4 className="text-ink font-semibold text-sm">Experience Bullets</h4>
                            <p className="text-ink-muted text-xs leading-relaxed">Plain language in, achievement-oriented bullets out. &ldquo;Managed a team&rdquo; becomes &ldquo;Led a cross-functional team of 8.&rdquo;</p>
                        </div>
                        <div className="border-t border-line pt-5 space-y-3">
                            <div className="text-ink-faint">
                                <Sparkles size={18} className="text-ink-faint" />
                            </div>
                            <h4 className="text-ink font-semibold text-sm">Skills Suggestions</h4>
                            <p className="text-ink-muted text-xs leading-relaxed">AI suggests relevant hard and soft skills based on role. Users pick or add their own. No guesswork.</p>
                        </div>
                    </div>

                    {/* What didn't work + What I said no to */}
                    <div className="flex flex-col md:flex-row gap-6 mb-20">
                        <div className="flex-1 border-l-2 border-line-strong pl-5">
                            <p className="text-ink-ghost text-[11px] uppercase tracking-[0.18em] mb-2">What didn&apos;t work first</p>
                            <p className="text-ink-muted text-sm leading-relaxed">
                                First version auto-generated the entire resume from a job title. Users didn&apos;t trust it &mdash; the output didn&apos;t feel &ldquo;theirs.&rdquo;
                                Iterated: <span className="text-ink font-medium">section-level AI assists users trigger manually</span>. Trust went up, completion followed.
                            </p>
                        </div>
                        <div className="flex-1 border-l-2 border-line-strong pl-5">
                            <p className="text-ink-ghost text-[11px] uppercase tracking-[0.18em] mb-2">What I Said No To</p>
                            <div className="space-y-2 text-ink-muted text-sm">
                                <div className="flex items-start gap-2">
                                    <span className="text-ink-faint mt-0.5">&times;</span>
                                    <span>Multi-page resumes &mdash; kills the core value prop</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-ink-faint mt-0.5">&times;</span>
                                    <span>Cover letter builder &mdash; v2 feature, not v1</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-ink-faint mt-0.5">&times;</span>
                                    <span>Template marketplace &mdash; quality over quantity</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Product */}
                    <h3 className="font-ui text-2xl font-medium text-ink mb-3">The Product</h3>
                    <p className="text-ink-muted text-sm leading-relaxed max-w-2xl">
                        UX built around reducing time-to-value. No onboarding tour. Users land on the builder, see their profile taking shape in real time, and hit share.
                    </p>
                </div>
            </section>

            {/* ================= OUTCOMES ================= */}
            <section className="bg-surface py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="border-t border-line pt-10">
                        <Badge>Outcomes</Badge>
                        <p className="text-ink-muted text-sm mb-10 max-w-2xl">
                            Scoped and designed in a 2-month engagement. The constraint-driven approach &mdash; one page, three distribution channels, AI-assisted content &mdash; produced a focused product that solved a real job-to-be-done.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard value="< 8 min" label="Design target: signup to first shared profile." icon={<Zap size={18} className="text-ink-faint" />} />
                            <StatCard value="3-in-1" label="Distribution — link, PDF, and print from a single build." icon={<Share2 size={18} className="text-ink-faint" />} />
                            <StatCard value="3" label="Optional AI touchpoints — summary, bullets, skills — each editable by the user." icon={<Sparkles size={18} className="text-ink-faint" />} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CLOSING ================= */}
            <section className="bg-cream py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl">
                        <Badge>The Real Story</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight mb-8">
                            Constraints are product decisions.{" "}
                            <span className="text-ink-muted">Not compromises.</span>
                        </h2>
                        <p className="text-ink-muted text-base leading-relaxed mb-5">
                            The one-page constraint wasn&apos;t a limitation &mdash; it was the design strategy.
                            It forced every design decision toward clarity and speed.
                            Combined with AI-assisted content and three distribution channels,
                            it turned a profile builder into a share-first pitching tool for suppliers.
                        </p>
                        <p className="text-ink-muted text-base leading-relaxed">
                            I scoped the product, ran the industry research, defined the AI integration points,
                            and designed every screen &mdash; a 2-month consulting engagement from blank brief to buildable spec.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= NEXT CASE STUDY ================= */}
            <NextCase to="/carter" title="Carter: Ad Platform Redesign" />
            </main>
            <Footer />
        </div>
    );
};

export default Godiverse;
