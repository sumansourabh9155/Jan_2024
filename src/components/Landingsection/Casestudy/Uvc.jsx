import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import SEO from "../../SEO";
import {
    Search, Users, Target, TrendingUp, Zap, Layers,
    BarChart2, AlertTriangle, FileText, Shield,
    Database, Globe, Blocks, CheckCircle2, GitBranch, Palette,
    Sparkles, Bot, PenLine, ExternalLink
} from "lucide-react";

// Assets
import Banner from "../../../assets/uvc/Banner.png";
import Charcount from "../../../assets/uvc/charcount.png";
import Sitebuilder from "../../../assets/uvc/Sitebuilder.png";
import Templatemanager from "../../../assets/uvc/Templatemanager.png";
import UvcTaxonomy from "./UvcTaxonomy";
import UvcTemplates from "./UvcTemplates";

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

const UvcEcosystem = () => {
    const [showFloating, setShowFloating] = useState(false);
    const previewRef = useRef(null);
    const [previewScale, setPreviewScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            setShowFloating(scrollPercent > 0.55 && scrollPercent < 0.95);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scale iframe to fit container at MacBook Pro resolution (1440×900)
    useEffect(() => {
        const updateScale = () => {
            if (previewRef.current) {
                const containerWidth = previewRef.current.offsetWidth;
                setPreviewScale(containerWidth / 1440);
            }
        };
        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);

    return (
        <div className="text-white bg-[#050505]">
            <SEO
                title="UVC: CMS Architecture & 0-to-1 Site Builder — PM Case Study"
                description="How I owned product strategy for a 130+ clinic veterinary network — standardizing digital infrastructure, building a relational CMS, and launching a 0-to-1 no-code site builder."
                keywords="product management case study, UVC, veterinary, CMS architecture, site builder, multi-location, healthcare, product strategy, phased rollout"
                url="https://www.sumansourabh.com/Projects/uvc"
            />
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="bg-[#050505] pt-32 pb-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <Badge>[ Healthcare &middot; Multi-Location &middot; 0-to-1 Builder ]</Badge>
                        <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
                            United Veterinary <span className="text-gray-500 font-light">Care</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
                            Transformed 130+ disconnected clinic websites into a unified digital ecosystem — standardized architecture, relational CMS, and a 0-to-1 no-code builder.
                        </p>
                    </div>

                    <img src={Banner} alt="UVC Digital Ecosystem" className="rounded-2xl w-full object-cover border border-white/10" />

                    {/* Snapshot Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Company</p>
                            <p className="text-white font-medium">United Veterinary Care</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">My Role</p>
                            <p className="text-white font-medium">Designer &rarr; Acting PM</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Platform</p>
                            <p className="text-white font-medium">Web, CMS, SaaS Builder</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Duration</p>
                            <p className="text-white font-medium">12+ Months, 4 Phases</p>
                        </div>
                    </div>

                    {/* Tools Stack */}
                    <div className="flex flex-wrap gap-2 mt-8 justify-center">
                        {["Jira", "Figma", "Google Analytics", "Hotjar", "WordPress Audit", "React", "Tailwind CSS"].map((tool) => (
                            <span key={tool} className="text-xs px-3 py-1 bg-white/5 text-gray-500 border border-white/10 rounded-full">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHY I OWNED PRODUCT DECISIONS ================= */}
            <section className="bg-black py-24 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-20">
                        <Badge>[ Why I Owned Product Decisions ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            130 clinics. 3 phases.{" "}
                            <span className="text-gray-400">One product owner driving all three.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed">
                            UVC needed someone who could understand the <span className="text-white font-medium">data architecture, design the user experience, and coordinate engineering delivery</span> — simultaneously.
                            I owned the product roadmap across all three phases: standardization, CMS architecture, and the 0-to-1 site builder.
                            Ran a cross-functional pod — <span className="text-white font-medium">3 engineers, 1 designer, 1 SEO specialist</span> — in 2-week sprints.
                        </p>
                    </div>

                    {/* What I Owned — Icon Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                <FileText size={18} className="text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">PRDs &amp; Phased Roadmap</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Wrote PRDs for each phase. Defined scope, acceptance criteria, and rollout strategy for 130+ locations.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center flex-shrink-0">
                                <Database size={18} className="text-[#d6f928]" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Data Architecture</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Designed the relational taxonomy — services, specialists, locations as connected nodes, not static pages.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                                <Blocks size={18} className="text-orange-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">0-to-1 Product</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Scoped, spec&apos;d, and shipped the no-code site builder from scratch. Zero engineering tickets for custom pages.</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-white border-l-4 border-[#d6f928]/40 pl-6 italic font-light text-base max-w-3xl">
                        &ldquo;We&apos;re acquiring clinics faster than we can bring them into the network properly. Our digital infrastructure is a bottleneck to growth.&rdquo;
                        <span className="text-gray-500 not-italic block mt-2 text-sm">&mdash; UVC Leadership</span>
                    </p>
                </div>
            </section>

            {/* ================= PHASE 1 ================= */}
            <section className="bg-[#050505] py-24 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">

                    {/* Phase Divider */}
                    <div className="flex items-center gap-6 mb-20">
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Phase 01</div>
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Standardization</div>
                    </div>

                    {/* Concept Vector — Consolidation: chaos → order */}
                    <svg className="w-full h-20 my-6" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="uvc-lime-grad-01" x1="0" y1="40" x2="400" y2="40" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#d6f928" stopOpacity="0.3" />
                                <stop offset="1" stopColor="#d6f928" stopOpacity="0.05" />
                            </linearGradient>
                            <filter id="uvc-glow-lime-01">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>
                        {/* Scattered dots — 130 clinics */}
                        {[
                            [15,12],[22,58],[35,30],[42,65],[50,18],[28,42],[60,50],[18,38],[45,8],[55,62],
                            [10,52],[38,20],[48,45],[25,70],[58,35],[32,55],[12,25],[52,28],[40,72],[20,48],
                            [65,15],[30,10],[8,60],[46,38],[55,5],[36,48],[14,34],[50,55],[22,15],[42,32]
                        ].map(([cx, cy], i) => (
                            <circle key={i} cx={cx} cy={cy} r="1.5" fill="#d6f928" fillOpacity={0.15 + Math.random() * 0.25} />
                        ))}
                        {/* Funnel shape */}
                        <path d="M100 5 L160 30 L160 50 L100 75 Z" stroke="#d6f928" strokeOpacity="0.2" strokeWidth="0.5" fill="#d6f928" fillOpacity="0.03" />
                        <line x1="80" y1="40" x2="160" y2="40" stroke="#d6f928" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="3 3" />
                        {/* Arrow */}
                        <line x1="160" y1="40" x2="210" y2="40" stroke="#d6f928" strokeOpacity="0.3" strokeWidth="0.5" filter="url(#uvc-glow-lime-01)" />
                        <polygon points="210,37 218,40 210,43" fill="#d6f928" fillOpacity="0.3" />
                        {/* 5 organized template boxes */}
                        {[0, 1, 2, 3, 4].map((i) => (
                            <rect key={i} x={235 + i * 32} y={25} width="24" height="30" rx="3" stroke="#d6f928" strokeOpacity="0.35" strokeWidth="0.5" fill="#d6f928" fillOpacity="0.05" />
                        ))}
                        {/* Labels */}
                        <text x="30" y="78" fontFamily="monospace" fontSize="7" fill="#d6f928" fillOpacity="0.25">130 clinics</text>
                        <text x="125" y="78" fontFamily="monospace" fontSize="7" fill="#d6f928" fillOpacity="0.25">funnel</text>
                        <text x="270" y="78" fontFamily="monospace" fontSize="7" fill="#d6f928" fillOpacity="0.25">5 templates</text>
                    </svg>

                    {/* Strategic Bet */}
                    <div className="max-w-3xl mb-20">
                        <Badge>[ The Strategic Bet ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            130 clinics wanted custom.{" "}
                            <span className="text-gray-400">I standardized to 5 templates.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            The instinct was to move fast &mdash; pick one template, deploy everywhere. I pushed back.
                            A General Practice clinic in rural Montana and a Specialty oncology center in Chicago serve fundamentally different users under different emotional states.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            But 130 custom designs was equally unsustainable. The product call: <span className="text-white font-medium">map every clinic to one of 5 strategic archetypes</span> &mdash;
                            GP, Specialty, ER, Hybrid, Multi-Location. Any newly acquired clinic onboarded in days, not months. No custom design work, no IT bottleneck.
                        </p>
                    </div>

                    {/* Discovery */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-4xl mb-20 flex flex-col md:flex-row gap-4 md:gap-6">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                            <Search size={20} className="text-purple-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-3">Discovery</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Weeks of auditing &mdash; categorizing clinic types, mapping user journeys, running heuristic evaluations on worst-performing sites.
                                Key insight: <span className="text-white font-medium">the most engaged ER users were elderly pet owners</span>.
                                A 70-year-old whose dog collapsed at 2am can&apos;t parse cluttered navigation.
                                That grounded every decision in <span className="text-white font-medium">WCAG 2.1 AA as a non-negotiable baseline</span> &mdash;
                                high-contrast palettes, generous typography, time-critical info above the fold on every template.
                            </p>
                        </div>
                    </div>

                    {/* Audit Findings */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        <div className="bg-red-950/20 border border-red-500/15 rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                                <Globe size={18} className="text-red-400" />
                            </div>
                            <h4 className="font-heading text-2xl font-bold text-white mb-2">Zero</h4>
                            <p className="text-white text-sm font-medium mb-2">SEO Governance</p>
                            <p className="text-gray-400 text-xs leading-relaxed">Duplicate content across sister clinics. Missing schema markup. Google penalizing UVC for same doctor bios on 40+ pages.</p>
                        </div>
                        <div className="bg-red-950/20 border border-red-500/15 rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                                <AlertTriangle size={18} className="text-red-400" />
                            </div>
                            <h4 className="font-heading text-2xl font-bold text-white mb-2">Critical</h4>
                            <p className="text-white text-sm font-medium mb-2">Emergency Abandonment</p>
                            <p className="text-gray-400 text-xs leading-relaxed">Pet owners in crisis couldn&apos;t find hours, address, or phone. Low-contrast text, no mobile optimization. UI as an obstacle.</p>
                        </div>
                        <div className="bg-red-950/20 border border-red-500/15 rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                                <Shield size={18} className="text-red-400" />
                            </div>
                            <h4 className="font-heading text-2xl font-bold text-white mb-2">Days</h4>
                            <p className="text-white text-sm font-medium mb-2">IT as Gatekeeper</p>
                            <p className="text-gray-400 text-xs leading-relaxed">Updating clinic hours or adding staff required an IT ticket and days of wait. Local teams had zero autonomy.</p>
                        </div>
                    </div>

                    {/* Taxonomy */}
                    <UvcTaxonomy />

                    {/* Template Architecture */}
                    <div className="mt-20 mb-10 max-w-3xl">
                        <Badge>[ Product Decision &mdash; Template Architecture ]</Badge>
                        <h3 className="font-heading text-3xl font-bold text-white mb-4">
                            Not one template. <span className="text-gray-400">Five clinical realities.</span>
                        </h3>
                        <p className="text-gray-400 text-base leading-relaxed">
                            After mapping every clinic type, we landed on 5 strategic templates covering the entire UVC universe.
                            Any newly acquired clinic maps to an archetype within the first week. The templates weren&apos;t rigid &mdash;
                            they were a shared structural skeleton with intentional flex points at the local level.
                        </p>
                    </div>

                    <UvcTemplates />

                    {/* Phase 1 Outcomes */}
                    <div className="mt-20 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10">
                        <Badge>[ Phase 1 &mdash; Business Outcomes ]</Badge>
                        <p className="text-gray-400 text-sm mb-10 max-w-2xl">
                            Standardization wasn&apos;t glamorous. But better structure meant better crawlability, better UX, and a data model that could scale.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <StatCard value="&uarr; 41%" label="Organic search traffic increase within 6 months." icon={<TrendingUp size={18} className="text-green-400" />} />
                            <StatCard value="&uarr; 29%" label="Booking conversion rate improvement." icon={<Target size={18} className="text-blue-400" />} />
                            <StatCard value="&uarr; 74%" label="Pages successfully indexed by Google." icon={<Globe size={18} className="text-purple-400" />} />
                            <StatCard value="100+" label="Clinics launched under the new architecture." icon={<Zap size={18} className="text-yellow-400" />} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PHASE 2 ================= */}
            <section className="bg-black py-24 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">

                    {/* Phase Divider */}
                    <div className="flex items-center gap-6 mb-20">
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Phase 02</div>
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Relational CMS</div>
                    </div>

                    {/* Phase 02 Vector — relational data model: nodes → connected graph */}
                    <svg className="w-full h-20 my-6" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient id="uvc-node-center" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </radialGradient>
                            <filter id="uvc-cms-glow">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>
                        {/* Isolated copies — before */}
                        {[0, 1, 2].map((i) => (
                            <circle key={i} cx={18 + i * 22} cy={35} r="9"
                                fill="#ef4444" fillOpacity="0.06" stroke="#ef4444" strokeOpacity="0.25" strokeWidth="0.8" />
                        ))}
                        <text x="14" y="55" fontFamily="monospace" fontSize="6" fill="white" fillOpacity="0.2">3 copies</text>
                        <line x1="80" y1="15" x2="80" y2="60" stroke="white" strokeOpacity="0.06" strokeWidth="0.5" strokeDasharray="2 3" />
                        {/* Arrow */}
                        <line x1="88" y1="35" x2="120" y2="35" stroke="#3b82f6" strokeOpacity="0.3" strokeWidth="0.8" />
                        <polygon points="120,32 128,35 120,38" fill="#3b82f6" fillOpacity="0.3" />
                        {/* Central record */}
                        <circle cx="160" cy="35" r="14" fill="url(#uvc-node-center)" stroke="#3b82f6" strokeOpacity="0.5" strokeWidth="1.5" filter="url(#uvc-cms-glow)" />
                        <circle cx="160" cy="35" r="4" fill="#3b82f6" fillOpacity="0.5" />
                        <text x="160" y="64" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.3">1 RECORD</text>
                        {/* Lines to leaf nodes */}
                        {[[210, 15], [230, 35], [210, 55]].map(([nx, ny], i) => (
                            <line key={i} x1="174" y1="35" x2={nx} y2={ny}
                                stroke="#d6f928" strokeOpacity="0.2" strokeWidth="0.7" />
                        ))}
                        {/* Leaf nodes */}
                        {[[210, 15], [230, 35], [210, 55]].map(([nx, ny], i) => (
                            <circle key={i} cx={nx} cy={ny} r="8"
                                fill="#d6f928" fillOpacity="0.05" stroke="#d6f928" strokeOpacity="0.3" strokeWidth="0.8" />
                        ))}
                        <text x="220" y="72" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#d6f928" fillOpacity="0.25">cascades</text>
                        {/* Label stack */}
                        {[["SPEC", 260, 22], ["LOC", 292, 35], ["SVC", 260, 48]].map(([label, lx, ly]) => (
                            <text key={label} x={lx} y={ly} textAnchor="middle" fontFamily="monospace" fontSize="6" fill="white" fillOpacity="0.2">{label}</text>
                        ))}
                        {/* Benefit callout */}
                        <text x="350" y="28" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#d6f928" fillOpacity="0.5" filter="url(#uvc-cms-glow)">0</text>
                        <text x="350" y="40" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="white" fillOpacity="0.2">duplicates</text>
                    </svg>

                    {/* Strategic Bet */}
                    <div className="max-w-3xl mb-20">
                        <Badge>[ The Strategic Bet ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Build vs. Buy.{" "}
                            <span className="text-gray-400">Every off-the-shelf CMS failed the test.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            Templates were live. But keeping them accurate across 130+ clinics was impossible. Dr. Sarah Chen operates at three Boston clinics &mdash;
                            under the old system, her bio existed as three separate copy-paste entries. One email change meant three manual updates. Multiplied across hundreds of specialists, this was an SEO crisis &mdash; Google detected near-duplicate content at scale and penalized the entire domain.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            WordPress, Contentful, Webflow &mdash; none handled the relational complexity of a multi-tenant healthcare network.
                            The product call: <span className="text-white font-medium">build a proprietary headless CMS</span> engineered for UVC&apos;s operational model.
                        </p>
                    </div>

                    {/* What I Said No To */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-4xl mb-20 flex flex-col md:flex-row gap-4 md:gap-6">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle size={20} className="text-orange-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-3">What I Said No To</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Stakeholders wanted <span className="text-white font-medium">per-clinic custom workflows</span> (unsustainable at 130+ scale),
                                <span className="text-white font-medium"> real-time chat integration</span> (6-month build, unclear adoption),
                                and <span className="text-white font-medium">patient portal login</span> (compliance risk, out of scope for Phase 2).
                                Every cut documented in the PRD with trigger conditions for revisiting.
                            </p>
                        </div>
                    </div>

                    <img loading="lazy" decoding="async" src={Charcount} alt="UVC Content Architecture" className="rounded-2xl w-full border border-white/10 mb-20" />

                    {/* CMS Architecture Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                <Database size={18} className="text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Singular Sources of Truth</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Every specialist, service, and location as a single data record. Update centrally, cascade instantly to every linked clinic page.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                                <GitBranch size={18} className="text-purple-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Relational Content Linking</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">CMS mapped relationships &mdash; specialists to certifications, services to locations. Google&apos;s schema finally understood UVC as an interconnected ecosystem.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center flex-shrink-0">
                                <Blocks size={18} className="text-[#d6f928]" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Block-Level Architecture</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Modular block system instead of rigid page forms. Clinics assemble pages from pre-approved blocks &mdash; doctor spotlights, service cards &mdash; without code.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                                <Layers size={18} className="text-orange-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Parent-Child Hierarchy</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Multi-location groups get parent-child pages. Parent presents unified narrative; child locations inherit brand elements automatically.</p>
                            </div>
                        </div>
                    </div>

                    {/* Branding System */}
                    <div className="max-w-3xl mb-10">
                        <Badge>[ Product Decision &mdash; Branding System ]</Badge>
                        <h3 className="font-heading text-3xl font-bold text-white mb-4">
                            Clinic-level theme customization.{" "}
                            <span className="text-gray-400">Identity without chaos.</span>
                        </h3>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Newly acquired clinics wanted to keep their legacy identity. The product call: let clinics adjust primary/secondary color palettes within the CMS.
                            The design system auto-mapped choices to WCAG-compliant shades &mdash; <span className="text-white font-medium">branding freedom without breaking accessibility</span>.
                        </p>
                    </div>

                    <img loading="lazy" decoding="async" src={Sitebuilder} alt="UVC Branding System" className="rounded-2xl w-full border border-white/10 mb-20" />

                    {/* Phase 2 Outcomes */}
                    <div className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10">
                        <Badge>[ Phase 2 &mdash; Business Outcomes ]</Badge>
                        <p className="text-gray-400 text-sm mb-10 max-w-2xl">
                            The relational CMS collapsed an operational nightmare into a manageable workflow and gave Google the structured data it needed.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard value="45%" label="Reduction in user navigational friction via session analysis." icon={<TrendingUp size={18} className="text-green-400" />} />
                            <StatCard value="Zero" label="Duplicate content penalties after canonicalization." icon={<CheckCircle2 size={18} className="text-blue-400" />} />
                            <StatCard value="Hours" label="Time to integrate a newly acquired clinic." icon={<Zap size={18} className="text-yellow-400" />} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PHASE 3 ================= */}
            <section className="bg-[#050505] py-24 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">

                    {/* Phase Divider */}
                    <div className="flex items-center gap-6 mb-20">
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Phase 03</div>
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">0-to-1 Site Builder</div>
                    </div>

                    {/* Phase 03 Vector — sprint backlog clogged → self-serve builder */}
                    <svg className="w-full h-20 my-6" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="uvc-p3-bar" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
                            </linearGradient>
                            <linearGradient id="uvc-p3-win" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#d6f928" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#d6f928" stopOpacity="0.05" />
                            </linearGradient>
                            <filter id="uvc-p3-glow">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>
                        {/* Engineering queue — stacked tickets */}
                        {[0, 1, 2, 3, 4].map((i) => (
                            <rect key={i} x={8} y={8 + i * 13} width={70 - i * 5} height={9} rx="2"
                                fill="url(#uvc-p3-bar)" stroke="#ef4444" strokeOpacity={0.3 - i * 0.04} strokeWidth="0.7" />
                        ))}
                        <text x="40" y="76" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.2">eng queue</text>
                        {/* Arrow */}
                        <line x1="88" y1="40" x2="130" y2="40" stroke="white" strokeOpacity="0.2" strokeWidth="0.8" strokeDasharray="4 3" />
                        <polygon points="130,37 138,40 130,43" fill="white" fillOpacity="0.15" />
                        {/* Builder canvas */}
                        <rect x="145" y="12" width="110" height="56" rx="4" fill="none" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="0.8" />
                        {/* Drag blocks inside */}
                        {[[150, 18, 40, 10], [196, 18, 52, 10], [150, 32, 60, 10], [150, 46, 45, 10]].map(([x, y, w, h], i) => (
                            <rect key={i} x={x} y={y} width={w} height={h} rx="2"
                                fill="#3b82f6" fillOpacity="0.07" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="0.5" />
                        ))}
                        <text x="200" y="76" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.2">no-code builder</text>
                        {/* Arrow to outcome */}
                        <line x1="258" y1="40" x2="292" y2="40" stroke="#d6f928" strokeOpacity="0.3" strokeWidth="0.8" />
                        <polygon points="292,37 300,40 292,43" fill="#d6f928" fillOpacity="0.3" />
                        {/* Outcome: 0 tickets */}
                        <circle cx="330" cy="40" r="22" fill="url(#uvc-p3-win)" stroke="#d6f928" strokeOpacity="0.35" strokeWidth="1.2" filter="url(#uvc-p3-glow)" />
                        <text x="330" y="37" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#d6f928" fillOpacity="0.6">0</text>
                        <text x="330" y="49" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="white" fillOpacity="0.25">tickets</text>
                        <text x="330" y="76" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#d6f928" fillOpacity="0.3">100% reduction</text>
                    </svg>

                    {/* Strategic Bet */}
                    <div className="max-w-3xl mb-20">
                        <Badge>[ The Strategic Bet ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Templates handled 90%.{" "}
                            <span className="text-gray-400">The 10% was killing engineering.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            Phase 2 gave clinic teams content independence. But as UVC grew, so did requests outside the framework &mdash;
                            community vaccination drives, new specialist landing pages, holiday hours. Every request landed in the engineering sprint queue.
                            Turnaround was days, sometimes weeks.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            The product call: build a <span className="text-white font-medium">0-to-1 drag-and-drop site builder</span> natively integrated with the CMS.
                            Regional managers could build and publish custom pages &mdash; zero IT approval required. The design system enforced brand and accessibility rules invisibly.
                        </p>
                    </div>

                    <img loading="lazy" decoding="async" src={Sitebuilder} alt="UVC No-Code Site Builder" className="rounded-2xl w-full border border-white/10 mb-20" />

                    {/* Builder Product Decisions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center flex-shrink-0">
                                <Shield size={18} className="text-[#d6f928]" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Invisible Constraints</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Every block pre-governed by the design system. Managers choose layout and content &mdash; not colors, not typography. Creative freedom with zero brand violations.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                                <Database size={18} className="text-purple-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Relational Components</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Drop in a &ldquo;Doctor Card&rdquo; &mdash; photo, bio, credentials auto-populate from the central record. Same relational layer powering the ecosystem.</p>
                            </div>
                        </div>
                    </div>

                    <img loading="lazy" decoding="async" src={Templatemanager} alt="UVC Template Manager" className="rounded-2xl w-full border border-white/10 mb-20" />

                    {/* What didn't work */}
                    <div className="mb-20 bg-white/[0.02] border border-dashed border-white/10 rounded-xl p-5 max-w-3xl">
                        <p className="text-gray-600 text-xs uppercase tracking-widest mb-2 font-mono">What didn&apos;t work first</p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            First version of the builder gave managers full section reordering. Result: pages with CTAs buried below the fold and hero sections mid-page.
                            Iterated: switched to <span className="text-white font-medium">fixed structural zones with flexible content blocks inside them</span>. Layout integrity preserved, creative freedom maintained.
                        </p>
                    </div>

                    {/* Phase 3 Outcomes */}
                    <div className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10">
                        <Badge>[ Phase 3 &mdash; Business Outcomes ]</Badge>
                        <p className="text-gray-400 text-sm mb-10 max-w-2xl">
                            The site builder changed the power dynamic between central IT and local clinic teams. Marketing finally moved at the speed of marketing.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard value="100%" label="Reduction in engineering tickets for custom pages." icon={<CheckCircle2 size={18} className="text-green-400" />} />
                            <StatCard value="Hours" label="Time to launch a custom marketing campaign." icon={<Zap size={18} className="text-yellow-400" />} />
                            <StatCard value="Zero" label="Brand or accessibility breakages across 50+ pages." icon={<Shield size={18} className="text-blue-400" />} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PHASE 4: CMS 2.0 ================= */}
            <section className="bg-black py-24 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">

                    {/* Phase Divider */}
                    <div className="flex items-center gap-6 mb-20">
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Phase 04</div>
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">CMS 2.0 &mdash; AI-Native Rebuild</div>
                    </div>

                    {/* Strategic Bet */}
                    <div className="max-w-3xl mb-20">
                        <Badge>[ The Strategic Bet ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            CMS 1.0 solved infrastructure.{" "}
                            <span className="text-gray-400">CMS 2.0 solved velocity.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            Phases 1&ndash;3 gave 130+ clinics a standardized CMS, relational taxonomy, and a site builder.
                            But content creation was still slow &mdash; clinic managers struggled with copy,
                            SEO was inconsistent across locations, there was no approval chain for published content,
                            and every template tweak still needed design intervention.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            The product call: rebuild the CMS with{" "}
                            <span className="text-white font-medium">AI at the core &mdash; not as a bolt-on feature, but as the operating layer</span>.
                            Claude-powered content generation, automated SEO, intelligent approval workflows,
                            and full template customization &mdash; all shipped without adding engineering headcount.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            I built CMS 2.0 myself using Claude. Not just the PRD &mdash;{" "}
                            <span className="text-white font-medium">the actual product</span>.
                            Planned, architected, and deployed on Vercel.
                            This is what a builder PM looks like at the edge of AI tooling.
                        </p>
                    </div>

                    {/* UX Overhaul */}
                    <div className="mb-20 max-w-3xl">
                        <h3 className="font-heading text-2xl font-bold text-white mb-3">Complete UX Overhaul</h3>
                        <p className="text-gray-400 text-base leading-relaxed">
                            CMS 1.0 worked &mdash; but it wasn&apos;t fast. Too many clicks to publish,
                            unclear content status, no visibility into who changed what.
                            CMS 2.0 redesigned every core flow from scratch &mdash;
                            reducing time-to-publish, surfacing content health at a glance,
                            and making the system feel like a product teams actually want to use.
                        </p>
                    </div>

                    {/* Live CMS 2.0 Preview */}
                    <div className="mb-20">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-heading text-2xl font-bold text-white mb-1">Live Product Preview</h3>
                                <p className="text-gray-400 text-sm">Interact with CMS 2.0 below &mdash; or open it in a new tab.</p>
                            </div>
                            <a
                                href="https://atlas2-sable.vercel.app/dashboard"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:inline-flex items-center gap-2 text-[#d6f928] text-sm font-medium border border-[#d6f928]/20 bg-[#d6f928]/5 px-5 py-2.5 rounded-full hover:bg-[#d6f928]/10 transition-colors whitespace-nowrap"
                            >
                                Open CMS 2.0 <ExternalLink size={14} />
                            </a>
                        </div>

                        {/* Browser Chrome */}
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1e1e1e]">
                            {/* Title Bar */}
                            <div className="flex items-center gap-3 px-4 py-3 bg-[#2a2a2a] border-b border-white/10">
                                <div className="flex items-center gap-1.5 shrink-0">
                                    <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></span>
                                    <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d6a01d]"></span>
                                    <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]"></span>
                                </div>
                                <div className="flex-1 flex items-center gap-2 bg-[#3a3a3a] rounded-md px-3 py-1.5 mx-4">
                                    <svg className="w-3 h-3 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <rect x="3" y="11" width="18" height="11" rx="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                    <span className="text-gray-400 text-xs font-mono truncate">atlas2-sable.vercel.app/dashboard</span>
                                </div>
                                <a
                                    href="https://atlas2-sable.vercel.app/dashboard"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    title="Open in new tab"
                                >
                                    <ExternalLink size={14} />
                                </a>
                            </div>

                            {/* Iframe Viewport — renders at 1440×900 (MacBook Pro) and scales to fit */}
                            <div
                                ref={previewRef}
                                className="relative bg-white overflow-hidden"
                                style={{ height: `${900 * previewScale}px` }}
                            >
                                <iframe
                                    src="https://atlas2-sable.vercel.app/dashboard"
                                    title="UVC CMS 2.0 Live Preview"
                                    className="border-0 origin-top-left"
                                    style={{
                                        width: "1440px",
                                        height: "900px",
                                        transform: `scale(${previewScale})`,
                                    }}
                                    loading="lazy"
                                    allow="clipboard-read; clipboard-write"
                                />
                            </div>
                        </div>

                        {/* Mobile fallback CTA */}
                        <div className="mt-4 md:hidden">
                            <a
                                href="https://atlas2-sable.vercel.app/dashboard"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 text-[#d6f928] text-sm font-medium border border-[#d6f928]/20 bg-[#d6f928]/5 px-5 py-3 rounded-full hover:bg-[#d6f928]/10 transition-colors w-full"
                            >
                                Open CMS 2.0 Live <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Feature Architecture */}
                    <div className="mb-20">
                        <h3 className="font-heading text-2xl font-bold text-white mb-3">The Feature Stack</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-10">
                            Seven capabilities that turned a content management system into a content operating system.
                            Each one scoped, built, and shipped with Claude as the engineering partner.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* AI Content Writing */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center">
                                    <Sparkles size={18} className="text-[#d6f928]" />
                                </div>
                                <h4 className="text-white font-semibold text-sm">AI Content Writing</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Claude-powered content generation built into the editor.
                                    Clinic managers input context &mdash; the AI drafts service descriptions, doctor bios,
                                    and marketing copy that matches brand voice.
                                    First draft to publish-ready in minutes, not days.
                                </p>
                            </div>

                            {/* Automated SEO */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                    <Search size={18} className="text-blue-400" />
                                </div>
                                <h4 className="text-white font-semibold text-sm">Automated SEO</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    AI-generated meta titles, descriptions, schema markup, and keyword optimization &mdash;
                                    applied automatically on every publish. No SEO specialist needed per location.
                                    Consistent search performance across 130+ sites.
                                </p>
                            </div>

                            {/* Approval Workflow */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                                    <GitBranch size={18} className="text-orange-400" />
                                </div>
                                <h4 className="text-white font-semibold text-sm">Approval Workflow</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Multi-tier content governance. Clinic managers draft, regional leads review,
                                    central marketing approves. Content status visible at every stage &mdash;
                                    no more rogue pages going live without oversight.
                                </p>
                            </div>

                            {/* User Management */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                    <Users size={18} className="text-purple-400" />
                                </div>
                                <h4 className="text-white font-semibold text-sm">User Management</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Role-based access control across the entire CMS. Clinic staff, regional managers,
                                    marketing leads, and admins &mdash; each with scoped permissions.
                                    No accidental overwrites, no unauthorized publishes.
                                </p>
                            </div>

                            {/* Editable Templates */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <PenLine size={18} className="text-emerald-400" />
                                </div>
                                <h4 className="text-white font-semibold text-sm">Editable Templates</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Full template customization without breaking the design system.
                                    Clinic teams modify section content, reorder blocks, and adjust layouts &mdash;
                                    all within governed constraints. Design flexibility that scales.
                                </p>
                            </div>

                            {/* Navigation Customization */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                    <Blocks size={18} className="text-cyan-400" />
                                </div>
                                <h4 className="text-white font-semibold text-sm">Navigation Customization</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Per-clinic navigation control. Each location surfaces the services and pages
                                    most relevant to their market &mdash; without deviating from the global IA.
                                    Local relevance, network consistency.
                                </p>
                            </div>

                        </div>

                        {/* Chatbot — full width standalone */}
                        <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                            <div className="w-10 h-10 rounded-xl bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center flex-shrink-0">
                                <Bot size={18} className="text-[#d6f928]" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Chatbot & AI Integration</h4>
                                <p className="text-gray-400 text-xs leading-relaxed max-w-3xl">
                                    AI-powered chatbot deployed across clinic sites &mdash; handling appointment inquiries,
                                    service questions, and emergency triage routing. Connected to the relational taxonomy
                                    so responses are always location-aware and medically accurate.
                                    Reduced front-desk call volume while improving patient experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Builder PM Signal */}
                    <div className="mb-20 bg-[#d6f928]/5 border border-[#d6f928]/20 rounded-2xl p-8">
                        <p className="text-[#d6f928] text-xs uppercase tracking-widest mb-3 font-mono font-semibold">Builder PM Signal</p>
                        <p className="text-white text-base leading-relaxed max-w-2xl">
                            I didn&apos;t spec CMS 2.0 and hand it to engineering. I built it &mdash;
                            using Claude as my engineering partner. AI content writing, automated SEO,
                            approval workflows, user management &mdash; all shipped by one PM
                            who understands both the product and the code.
                        </p>
                    </div>

                    {/* Phase 4 Outcomes */}
                    <div className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10">
                        <Badge>[ Phase 4 &mdash; Business Outcomes ]</Badge>
                        <p className="text-gray-400 text-sm mb-10 max-w-2xl">
                            CMS 2.0 didn&apos;t just add features &mdash; it eliminated the operational bottlenecks
                            that were slowing every clinic&apos;s digital output.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard value="7" label="New platform capabilities shipped without adding engineering headcount." icon={<Sparkles size={18} className="text-[#d6f928]" />} />
                            <StatCard value="~70%" label="Reduction in content creation time with AI-assisted writing." icon={<Zap size={18} className="text-yellow-400" />} />
                            <StatCard value="Zero" label="Rogue publishes since approval workflow launch." icon={<Shield size={18} className="text-blue-400" />} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CLOSING ================= */}
            <section className="bg-[#050505] py-24 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <Badge>[ The Real Story ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                            Systems thinking.{" "}
                            <span className="text-gray-400">Then I built the system.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            The most impactful decision wasn&apos;t a layout &mdash; it was the data architecture.
                            Making every specialist, service, and location a relational node instead of a static page
                            is what made the CMS possible, what gave the site builder its power,
                            and what CMS 2.0 turned into an AI-native content operating system.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Four phases. I wrote the PRDs, defined the phased rollout, coordinated engineering sprints,
                            and shipped across all of them. Then in Phase 4, I built CMS 2.0 myself &mdash;
                            using Claude to ship seven new capabilities without adding headcount.
                            One product owner who could bridge architecture, experience, and AI execution &mdash;
                            that&apos;s what made 130 clinics feel like one ecosystem.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= NEXT CASE STUDY ================= */}
            <section className="bg-[#050505] py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-2">Next Case Study</p>
                        <p className="font-heading text-2xl font-bold text-white">GoDiverse: Resume Builder</p>
                    </div>
                    <Link to="/Projects/GoDiverse" className="text-[#d6f928] font-medium text-sm border border-[#d6f928]/20 bg-[#d6f928]/5 px-6 py-3 rounded-full hover:bg-[#d6f928]/10 transition-colors whitespace-nowrap">
                        View Case Study &rarr;
                    </Link>
                </div>
            </section>

            <Footer />

            {/* Floating CTA — CMS 2.0 Live */}
            <a
                href="https://atlas2-sable.vercel.app/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#d6f928] text-black text-sm font-bold px-5 py-3 rounded-full shadow-[0_0_30px_rgba(214,249,40,0.3)] hover:shadow-[0_0_40px_rgba(214,249,40,0.5)] hover:scale-105 transition-all duration-300 ${showFloating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
            >
                <Sparkles size={16} />
                Try CMS 2.0 Live
                <ExternalLink size={14} />
            </a>
        </div>
    );
};
export default UvcEcosystem;
