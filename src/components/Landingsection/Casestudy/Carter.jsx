import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import SEO from "../../SEO";
import {
    Search, Users, Target, TrendingUp, Zap, Layers,
    BarChart2, AlertTriangle, Scissors, CheckCircle2,
    Layout, Cpu, Split, Eye, FileText, Bug, Clock
} from "lucide-react";

// ================= ASSETS =================
import Carterimg from "../../../assets/CarterRedesign/carter.png";
import DSL from "../../../assets/CarterRedesign/dsl.png";
import Aditem from "../../../assets/cartercampigh/aditem.png";
import Oldaditem from "../../../assets/cartercampigh/oldaditem.png";
import CampaignCreationImg from "../../../assets/cartercampigh/campaign.png";
import dsp from "../../../assets/dsp/dsp.png";
import CampaignDSP from "../../../assets/dsp/campaign.png";
import mediaplan from "../../../assets/dsp/mediaplan.png";
import campaigndetail from "../../../assets/dsp/campaigndetail.png";
import v1 from "../../../assets/dsp/1.mp4";
import v3 from "../../../assets/dsp/3.mp4";

// ================= REUSABLE COMPONENTS =================

const BeforeAfterSlider = ({ beforeSrc, afterSrc, beforeAlt, afterAlt }) => {
    const [pos, setPos] = useState(50);
    const containerRef = useRef(null);
    const dragging = useRef(false);

    const updatePos = useCallback((clientX) => {
        const rect = containerRef.current.getBoundingClientRect();
        const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
        setPos(pct);
    }, []);

    const onMouseDown = () => { dragging.current = true; };
    const onMouseMove = (e) => { if (dragging.current) updatePos(e.clientX); };
    const onMouseUp = () => { dragging.current = false; };

    return (
        <div
            ref={containerRef}
            className="relative w-full rounded-2xl overflow-hidden select-none cursor-ew-resize border border-white/10"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchMove={(e) => updatePos(e.touches[0].clientX)}
            onTouchStart={(e) => updatePos(e.touches[0].clientX)}
        >
            {/* BEFORE image — base layer (sets container height) */}
            <img src={beforeSrc} alt={beforeAlt} className="w-full h-auto block" draggable={false} />

            {/* AFTER image — clipped to right of slider */}
            <img
                src={afterSrc} alt={afterAlt}
                className="absolute top-0 left-0 w-full"
                style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
                draggable={false}
            />

            {/* Divider line */}
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-lg pointer-events-none"
                style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
                {/* Handle circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center">
                    <span className="text-black text-xs font-bold select-none">⇔</span>
                </div>
            </div>

            {/* Labels */}
            <span className="absolute top-3 left-3 text-xs font-mono uppercase tracking-widest text-white/70 bg-black/50 px-2 py-0.5 rounded pointer-events-none">Before</span>
            <span className="absolute top-3 right-3 text-xs font-mono uppercase tracking-widest text-[#d6f928] bg-black/50 px-2 py-0.5 rounded pointer-events-none">After</span>
        </div>
    );
};

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

const MetricRow = ({ label, before, after, delta }) => (
    <div className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
        <span className="text-white text-sm font-medium w-2/5">{label}</span>
        <span className="text-gray-500 text-sm w-1/5 text-center">{before}</span>
        <span className="text-green-400 text-sm w-1/5 text-center">{after}</span>
        <span className="text-green-400 text-sm font-semibold w-1/5 text-right">{delta}</span>
    </div>
);

const CarterEcosystem = () => {
    return (
        <div className="text-white bg-[#050505]">
            <SEO
                title="Carter Ecosystem: Platform Redesign & 0-to-1 DSP — PM Case Study"
                description="How I owned product strategy end-to-end at a B2B ad-tech startup — from fixing a broken activation funnel to launching a 0-to-1 Demand-Side Platform."
                keywords="product management case study, carter, platform redesign, DSP, retail media network, ad tech, product strategy, PRD, cross-functional leadership"
                url="https://www.sumansourabh.com/Projects/CarterEcosystem"
            />
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="bg-[#050505] pt-32 pb-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <Badge>[ B2B SaaS &middot; Ad Tech &middot; Retail Media ]</Badge>
                        <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
                            Carter <span className="text-gray-500 font-light">Ecosystem</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
                            Owned product strategy end-to-end. Fixed a broken activation funnel, then launched a 0-to-1 DSP.
                        </p>
                    </div>

                    <img src={Carterimg} alt="Carter Platform Overview" className="rounded-2xl w-full object-cover border border-white/10" />

                    {/* Snapshot Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Company</p>
                            <p className="text-white font-medium">Shyftlabs</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">My Role</p>
                            <p className="text-white font-medium">Designer → Acting PM</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Platform</p>
                            <p className="text-white font-medium">Desktop Web</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Duration</p>
                            <p className="text-white font-medium">12 Months, 2 Phases</p>
                        </div>
                    </div>

                    {/* Tools Stack */}
                    <div className="flex flex-wrap gap-2 mt-8 justify-center">
                        {["Jira", "Figma", "Hotjar", "Amplitude", "Storybook", "React", "Tailwind CSS"].map((tool) => (
                            <span key={tool} className="text-xs px-3 py-1 bg-white/5 text-gray-500 border border-white/10 rounded-full">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHY I HAD PM AUTHORITY ================= */}
            <section className="bg-black py-24 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-20">
                        <Badge>[ Why I Owned Product Decisions ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Titled Designer.{" "}
                            <span className="text-gray-400">Operated as the Product Owner.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Carter had product-market fit but a product that was quietly breaking people.
                            The Product Head gave me ownership because I could
                            <span className="text-white font-medium"> read the codebase, run user research, and ship the UI myself</span>.
                            I ran a cross-functional pod — <span className="text-white font-medium">4 engineers, 2 designers, 1 QA lead</span> — in 2-week sprints.
                        </p>
                    </div>

                    {/* What I Owned — Icon Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                <FileText size={18} className="text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">PRDs & Roadmap</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Wrote every PRD. Prioritized the backlog. Defined what shipped and what didn&apos;t.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center flex-shrink-0">
                                <Users size={18} className="text-[#d6f928]" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">Cross-Functional Lead</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Ran sprint planning. Coordinated design, engineering, and QA in one room.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                                <Bug size={18} className="text-orange-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">QA & Jira Process</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">Structured acceptance criteria, expected behavior, and edge cases for every ticket.</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-white border-l-4 border-[#d6f928]/40 pl-6 italic font-light text-base max-w-3xl">
                        &ldquo;The platform works, but nobody outside the team knows how to use it confidently.&rdquo;
                        <span className="text-gray-500 not-italic block mt-2 text-sm">— Internal Stakeholder Interview</span>
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
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Fix the Foundation</div>
                    </div>

                    {/* Phase 01 Roadmap Timeline SVG */}
                    <svg className="w-full h-20 my-6" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="p1GlowRed" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                            <filter id="p1GlowLime" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>
                        {/* Dashed connecting line */}
                        <line x1="50" y1="35" x2="350" y2="35" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="6 4" />
                        {/* Node 1 — Broken (red) */}
                        <circle cx="50" cy="35" r="10" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeOpacity="0.5" strokeWidth="1.5" filter="url(#p1GlowRed)" />
                        <circle cx="50" cy="35" r="3" fill="#ef4444" fillOpacity="0.6" />
                        <text x="50" y="62" textAnchor="middle" fill="white" fillOpacity="0.3" fontFamily="monospace" fontSize="7">BROKEN</text>
                        {/* Node 2 — Audit (blue) */}
                        <circle cx="150" cy="35" r="10" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeOpacity="0.4" strokeWidth="1.5" />
                        <circle cx="150" cy="35" r="3" fill="#3b82f6" fillOpacity="0.5" />
                        <text x="150" y="62" textAnchor="middle" fill="white" fillOpacity="0.3" fontFamily="monospace" fontSize="7">AUDIT</text>
                        {/* Node 3 — Redesign (blue) */}
                        <circle cx="250" cy="35" r="10" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeOpacity="0.4" strokeWidth="1.5" />
                        <circle cx="250" cy="35" r="3" fill="#3b82f6" fillOpacity="0.5" />
                        <text x="250" y="62" textAnchor="middle" fill="white" fillOpacity="0.3" fontFamily="monospace" fontSize="7">REDESIGN</text>
                        {/* Node 4 — Launch (lime) */}
                        <circle cx="350" cy="35" r="10" fill="#d6f928" fillOpacity="0.15" stroke="#d6f928" strokeOpacity="0.5" strokeWidth="1.5" filter="url(#p1GlowLime)" />
                        <circle cx="350" cy="35" r="3" fill="#d6f928" fillOpacity="0.6" />
                        <text x="350" y="62" textAnchor="middle" fill="white" fillOpacity="0.3" fontFamily="monospace" fontSize="7">SHIPPED</text>
                        {/* Arrow tips between nodes */}
                        <polygon points="95,35 88,31 88,39" fill="#3b82f6" fillOpacity="0.3" />
                        <polygon points="195,35 188,31 188,39" fill="#3b82f6" fillOpacity="0.3" />
                        <polygon points="295,35 288,31 288,39" fill="#d6f928" fillOpacity="0.3" />
                    </svg>

                    {/* Strategic Bet */}
                    <div className="max-w-3xl mb-20">
                        <Badge>[ The Strategic Bet ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            The team wanted features.{" "}
                            <span className="text-gray-400">I pushed to fix activation first.</span>
                        </h2>

                        {/* RICE Prioritization Visual */}
                        <svg className="w-full h-24 my-6" viewBox="0 0 400 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="riceWinGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#d6f928" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#d6f928" stopOpacity="0.05" />
                                </linearGradient>
                                <filter id="riceGlow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="4" result="blur" />
                                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>
                            </defs>
                            {/* Baseline */}
                            <line x1="40" y1="72" x2="360" y2="72" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
                            {/* R bar */}
                            <rect x="60" y="42" width="40" height="30" rx="3" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeOpacity="0.25" strokeWidth="1" />
                            <text x="80" y="82" textAnchor="middle" fill="white" fillOpacity="0.25" fontFamily="monospace" fontSize="8">R</text>
                            <text x="80" y="38" textAnchor="middle" fill="white" fillOpacity="0.2" fontFamily="monospace" fontSize="7">HIGH</text>
                            {/* I bar — tallest, the winner */}
                            <rect x="140" y="14" width="40" height="58" rx="3" fill="url(#riceWinGrad)" stroke="#d6f928" strokeOpacity="0.5" strokeWidth="1.5" filter="url(#riceGlow)" />
                            <text x="160" y="82" textAnchor="middle" fill="#d6f928" fillOpacity="0.4" fontFamily="monospace" fontSize="8" fontWeight="bold">I</text>
                            <text x="160" y="10" textAnchor="middle" fill="#d6f928" fillOpacity="0.35" fontFamily="monospace" fontSize="7">4x REV</text>
                            {/* C bar */}
                            <rect x="220" y="36" width="40" height="36" rx="3" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeOpacity="0.25" strokeWidth="1" />
                            <text x="240" y="82" textAnchor="middle" fill="white" fillOpacity="0.25" fontFamily="monospace" fontSize="8">C</text>
                            <text x="240" y="32" textAnchor="middle" fill="white" fillOpacity="0.2" fontFamily="monospace" fontSize="7">90%</text>
                            {/* E bar */}
                            <rect x="300" y="48" width="40" height="24" rx="3" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="1" />
                            <text x="320" y="82" textAnchor="middle" fill="white" fillOpacity="0.25" fontFamily="monospace" fontSize="8">E</text>
                            <text x="320" y="44" textAnchor="middle" fill="white" fillOpacity="0.2" fontFamily="monospace" fontSize="7">2 SPRINTS</text>
                        </svg>

                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            I scored the backlog using RICE — reach, impact, confidence, effort — and the data was clear:
                            fixing campaign activation had 4x the revenue impact of any new feature.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            The VP of Sales pushed back — &ldquo;we need feature X for the Kroger deal.&rdquo; I walked leadership through the churn correlation:
                            27% abandonment meant we were losing clients faster than Sales could close them.
                            They gave me two sprints to prove it. The numbers did the rest.
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
                                Interviewed <span className="text-white font-medium">8 advertisers + 5 internal ops</span> over 2 weeks.
                                Pulled 200+ session recordings from Hotjar. The key insight: users weren&apos;t confused by complexity —
                                they had <span className="text-white font-medium">no confidence signals</span> at any step. That reframed the problem from
                                &ldquo;simplify the UI&rdquo; to &ldquo;add feedback at every decision point.&rdquo;
                            </p>
                        </div>
                    </div>

                    {/* Audit Findings */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        <div className="bg-red-950/20 border border-red-500/15 rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                                <AlertTriangle size={18} className="text-red-400" />
                            </div>
                            <h4 className="font-heading text-2xl font-bold text-white mb-2">27%</h4>
                            <p className="text-white text-sm font-medium mb-2">Activation Drop-off</p>
                            <p className="text-gray-400 text-xs leading-relaxed">Users dropped after Step 2 of campaign builder. Directly impacting TTV and LTV:CAC.</p>
                        </div>
                        <div className="bg-red-950/20 border border-red-500/15 rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                                <Eye size={18} className="text-red-400" />
                            </div>
                            <h4 className="font-heading text-2xl font-bold text-white mb-2">0</h4>
                            <p className="text-white text-sm font-medium mb-2">Actionable Insights</p>
                            <p className="text-gray-400 text-xs leading-relaxed">Ad management was a legacy table. CTR down 40%? No guidance on what to do. Retention killer.</p>
                        </div>
                        <div className="bg-red-950/20 border border-red-500/15 rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                                <Split size={18} className="text-red-400" />
                            </div>
                            <h4 className="font-heading text-2xl font-bold text-white mb-2">12</h4>
                            <p className="text-white text-sm font-medium mb-2">Teams, Zero Consistency</p>
                            <p className="text-gray-400 text-xs leading-relaxed">Every team built UI independently. Engineering velocity bled out on rework.</p>
                        </div>
                    </div>

                    {/* ——— DECISION 1: PLATFORM INFRASTRUCTURE ——— */}
                    <div className="mb-24">
                        <Badge>[ Product Decision 1 — Platform Investment ]</Badge>
                        <h3 className="font-heading text-3xl font-bold text-white mb-4">Component system to cut shipping cycles by 50%</h3>
                        <p className="text-gray-400 text-base leading-relaxed max-w-3xl mb-10">
                            A product decision to reduce engineering rework across 12 teams.
                            Atomic design, 8pt grid, WCAG 2.1 AA. Every component shipped with Storybook docs — zero dev back-and-forth.
                        </p>
                        <img src={DSL} alt="Carter Design System 2.0" className="rounded-2xl w-full border border-white/10" />
                    </div>

                    {/* ——— DECISION 2: CAMPAIGN CREATION ——— */}
                    <div className="mb-24">
                        <Badge>[ Product Decision 2 — Activation Funnel Fix ]</Badge>
                        <h3 className="font-heading text-3xl font-bold text-white mb-4">From a form dump to a guided 5-stage flow</h3>
                        <p className="text-gray-400 text-base leading-relaxed max-w-3xl mb-10">
                            Wrote the PRD, mapped every drop-off from session recordings. Applied Hick&apos;s Law — reduced choices from 12 to 3 per step.
                            Each stage gave live validation and AI-powered budget recommendations.
                        </p>
                        <img src={CampaignCreationImg} alt="Campaign Creation Redesign" className="rounded-2xl w-full border border-white/10 mb-12" />

                        {/* Product Calls — Icon Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                    <Layers size={18} className="text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">Persistent Progress State</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">Scoped in PRD. Users jump between steps without data loss. TTV dropped immediately.</p>
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 size={18} className="text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">Inline Validation</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">Eliminated the #1 support ticket. Errors per field, not a post-submission wall.</p>
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center flex-shrink-0">
                                    <Cpu size={18} className="text-[#d6f928]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">AI Budget Nudges</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">Historical spend recommendations embedded in the flow. Contextual guidance, not a modal.</p>
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                                    <BarChart2 size={18} className="text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">Pre-Launch Forecast</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">Projected impressions, clicks, ROI. Gave advertisers conviction. Launch rate +20pts.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h4 className="text-white font-semibold text-sm mb-6">Before vs. After</h4>
                            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-1">
                                <span className="text-gray-500 text-xs uppercase tracking-widest w-2/5">Metric</span>
                                <span className="text-gray-500 text-xs uppercase tracking-widest w-1/5 text-center">Before</span>
                                <span className="text-gray-500 text-xs uppercase tracking-widest w-1/5 text-center">After</span>
                                <span className="text-gray-500 text-xs uppercase tracking-widest w-1/5 text-right">Delta</span>
                            </div>
                            <MetricRow label="Review Time / Item" before="6.4 min" after="3.1 min" delta="-52%" />
                            <MetricRow label="Creative Swap Rate" before="14%" after="47%" delta="+33pts" />
                            <MetricRow label="Avg. Setup Time" before="7.1 min" after="4.1 min" delta="-42%" />
                            <MetricRow label="Campaign Launch Rate" before="61%" after="81%" delta="+20pts" />
                        </div>

                        {/* What didn't work */}
                        <div className="mt-8 bg-white/[0.02] border border-dashed border-white/10 rounded-xl p-5 max-w-3xl">
                            <p className="text-gray-600 text-xs uppercase tracking-widest mb-2 font-mono">What didn&apos;t work first</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                First version of AI budget nudges auto-filled spend amounts. Under 10% interaction — users didn&apos;t trust automated inputs on day one.
                                Iterated: switched to <span className="text-white font-medium">contextual recommendations alongside manual controls</span>. Adoption jumped to 38%.
                            </p>
                        </div>
                    </div>

                    {/* ——— DECISION 3: AD ITEM MANAGEMENT ——— */}
                    <div className="mb-24">
                        <Badge>[ Product Decision 3 — Retention Feature ]</Badge>
                        <h3 className="font-heading text-3xl font-bold text-white mb-4">
                            From a reporting table <span className="text-gray-400 font-light">to an optimization engine.</span>
                        </h3>
                        <p className="text-gray-400 text-base leading-relaxed max-w-3xl mb-10">
                            Card-based layout with pacing charts, proactive alerts, and one-click actions.
                            Product bet: move from passive reporting to active guidance.
                        </p>

                        <div className="mb-12">
                            <BeforeAfterSlider
                                beforeSrc={Oldaditem}
                                afterSrc={Aditem}
                                beforeAlt="Old Ad Item Interface"
                                afterAlt="New Ad Item Interface"
                            />
                        </div>

                        
                    </div>

                    {/* Phase 1 Outcomes */}
                    <div className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10">
                        <Badge>[ Phase 1 — Business Outcomes ]</Badge>
                        <p className="text-gray-400 text-sm mb-10 max-w-2xl">
                            Fixing activation before building new features delivered compounding returns.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <StatCard value="300%" label="Enterprise client growth — retention fixed before scaling." icon={<TrendingUp size={18} className="text-green-400" />} />
                            <StatCard value="50%" label="Faster shipping velocity from component infrastructure." icon={<Zap size={18} className="text-yellow-400" />} />
                            <StatCard value="40%" label="Activation improvement — users reaching value independently." icon={<Target size={18} className="text-blue-400" />} />
                            <StatCard value="2x" label="Faster onboarding — 3 hours down to under 90 minutes." icon={<Clock size={18} className="text-purple-400" />} />
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
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">0-to-1 DSP</div>
                    </div>

                    {/* Phase 02 Concept Vector — fragmented networks → unified DSP */}
                    <svg className="w-full h-20 my-6" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="dsp-hub-grad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#d6f928" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#d6f928" stopOpacity="0.1" />
                            </linearGradient>
                            <filter id="dsp-glow">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>
                        {/* 4 fragmented networks on the left */}
                        {[0, 1, 2, 3].map((i) => (
                            <rect key={i} x={10 + i * 2} y={12 + i * 14} width={28} height={10} rx="2"
                                stroke="#ef4444" strokeOpacity="0.3" strokeWidth="0.8" fill="#ef4444" fillOpacity="0.05" />
                        ))}
                        <text x="24" y="78" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="white" fillOpacity="0.2">4 NETWORKS</text>
                        {/* Converging lines */}
                        {[0, 1, 2, 3].map((i) => (
                            <line key={i} x1="40" y1={17 + i * 14} x2="160" y2="40"
                                stroke="#d6f928" strokeOpacity="0.15" strokeWidth="0.6" strokeDasharray="4 3" />
                        ))}
                        {/* Central DSP hub */}
                        <circle cx="160" cy="40" r="18" fill="#d6f928" fillOpacity="0.06" stroke="#d6f928" strokeOpacity="0.4" strokeWidth="1.5" filter="url(#dsp-glow)" />
                        <circle cx="160" cy="40" r="6" fill="#d6f928" fillOpacity="0.25" />
                        <text x="160" y="76" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#d6f928" fillOpacity="0.35">DSP</text>
                        {/* Arrow right */}
                        <line x1="182" y1="40" x2="230" y2="40" stroke="#d6f928" strokeOpacity="0.3" strokeWidth="0.8" />
                        <polygon points="230,37 238,40 230,43" fill="#d6f928" fillOpacity="0.3" />
                        {/* Unified view */}
                        <rect x="242" y="18" width="110" height="44" rx="4" fill="url(#dsp-hub-grad)" stroke="#d6f928" strokeOpacity="0.2" strokeWidth="0.8" />
                        {[0, 1, 2].map((i) => (
                            <rect key={i} x={250} y={25 + i * 12} width={94} height={7} rx="1"
                                fill="#d6f928" fillOpacity={0.06 + i * 0.01} />
                        ))}
                        <text x="296" y="76" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#d6f928" fillOpacity="0.3">UNIFIED VIEW</text>
                        {/* 4x LTV label */}
                        <text x="370" y="36" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#d6f928" fillOpacity="0.5" filter="url(#dsp-glow)">4x</text>
                        <text x="370" y="47" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="white" fillOpacity="0.2">LTV</text>
                    </svg>

                    {/* Strategic Bet */}
                    <div className="max-w-3xl mb-20">
                        <Badge>[ The Strategic Bet ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Phase 1 earned trust.{" "}
                            <span className="text-gray-400">I used it to pitch a new product.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            After the redesign shipped, enterprise clients started asking for cross-network campaign management.
                            I ran competitive analysis — no unified DSP existed for retail media at this scale.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Built a one-pager for leadership: TAM sizing, build vs. buy analysis, 6-month phased roadmap.
                            The data point that closed it — advertisers active on 3+ networks had <span className="text-white font-medium">4x the LTV</span> of single-network clients.
                            CTO greenlit it in one meeting.
                        </p>
                    </div>

                    {/* Context */}
                    <div className="max-w-3xl mb-20">
                        <Badge>[ The Next Product ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            One platform.{" "}
                            <span className="text-gray-400">Every retail ad network.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            Build a DSP — a unified command center for campaigns across multiple Retail Media Networks.
                            I owned this 0-to-1 from discovery to ship. PRD. IA. Sprint planning. Engineering + QA coordination.
                        </p>
                        <p className="text-white border-l-4 border-[#d6f928]/40 pl-6 italic font-light text-base">
                            &ldquo;I spend 4 hours every Monday just pulling reports. I still don&apos;t know which channel is working.&rdquo;
                            <span className="text-gray-500 not-italic block mt-2 text-sm">— Enterprise Advertiser, User Research</span>
                        </p>
                    </div>

                    <img src={dsp} alt="Carter DSP — Platform Overview" className="rounded-2xl w-full border border-white/10 mb-20" />

                    {/* Market Gap + North Stars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <Badge>[ The Market Gap ]</Badge>
                            <div className="space-y-4 mt-2">
                                {[
                                    { icon: <BarChart2 size={16} className="text-red-400" />, text: "No unified performance view across networks" },
                                    { icon: <Layout size={16} className="text-red-400" />, text: "Creative uploaded per-network — massive duplication" },
                                    { icon: <AlertTriangle size={16} className="text-red-400" />, text: "Budget splits done manually. Overspend on saturated segments" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">{item.icon}</div>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <Badge>[ North Star Metrics ]</Badge>
                            <div className="space-y-4 mt-2">
                                {[
                                    { icon: <Zap size={16} className="text-[#d6f928]" />, text: "Reduce cross-network setup time by 60-70%" },
                                    { icon: <CheckCircle2 size={16} className="text-[#d6f928]" />, text: "95%+ creative compliance through guided spec validation" },
                                    { icon: <Target size={16} className="text-[#d6f928]" />, text: "Single KPI standard — one source of truth" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center flex-shrink-0 mt-0.5">{item.icon}</div>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* What I Said No To */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-4xl mb-20 flex flex-col md:flex-row gap-4 md:gap-6">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                            <Scissors size={20} className="text-orange-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-3">What I Said No To</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                14 modules on the wishlist. I scoped MVP to 6. Cut <span className="text-white font-medium">real-time bidding</span> (no data yet),
                                <span className="text-white font-medium"> custom attribution</span> (3-month build, unclear ROI),
                                and <span className="text-white font-medium">white-label theming</span> (sales request, not user need).
                                Every cut documented in the PRD with trigger conditions for revisiting.
                            </p>
                        </div>
                    </div>

                    {/* Video Walkthrough */}
                    <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 md:p-10 rounded-2xl mb-20">
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <video controls autoPlay loop muted className="w-full md:w-1/2 rounded-2xl border border-white/10">
                                <source src={v1} type="video/mp4" />
                            </video>
                            <div className="w-full md:w-1/2">
                                <Badge>[ Product Architecture ]</Badge>
                                <h3 className="font-heading text-2xl font-bold text-white mb-6">Four bets that defined the DSP</h3>
                                <div className="space-y-5">
                                    {[
                                        { icon: <Layers size={16} className="text-blue-400" />, title: "Unified Orchestration", desc: "One campaign pushed to all RMNs with auto-reformatting." },
                                        { icon: <Users size={16} className="text-purple-400" />, title: "Shared Targeting", desc: "Audience overlap detection across networks. First-of-its-kind." },
                                        { icon: <Layout size={16} className="text-orange-400" />, title: "Dynamic Creative", desc: "One master asset → compliant variants for every network." },
                                        { icon: <TrendingUp size={16} className="text-green-400" />, title: "Smart Budgeting", desc: "Real-time spend allocation based on performance signals." },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">{item.icon}</div>
                                            <div>
                                                <p className="text-white text-sm font-medium">{item.title}</p>
                                                <p className="text-gray-400 text-xs">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DSP Screens */}
                    <div className="space-y-12 mb-20">
                        <div>
                            <Badge>[ Cross-Network Campaign View ]</Badge>
                            <img src={CampaignDSP} alt="DSP — Campaign Dashboard" className="rounded-2xl w-full border border-white/10 mt-2" />
                        </div>
                        <div>
                            <Badge>[ Campaign Detail & Performance ]</Badge>
                            <img src={campaigndetail} alt="DSP — Campaign Details" className="rounded-2xl w-full border border-white/10 mt-2" />
                        </div>
                        <div>
                            <Badge>[ Media Planning Canvas ]</Badge>
                            <img src={mediaplan} alt="DSP — Media Planning" className="rounded-2xl w-full border border-white/10 mt-2" />
                        </div>
                    </div>

                    {/* Phase 2 Impact */}
                    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 md:p-10 rounded-2xl">
                        <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                            <video controls autoPlay loop muted className="w-full md:w-1/2 rounded-2xl border border-white/10">
                                <source src={v3} type="video/mp4" />
                            </video>
                            <div className="w-full md:w-1/2">
                                <Badge>[ Phase 2 — Impact at Launch ]</Badge>
                                <p className="text-gray-500 text-sm mb-8">Validated through alpha client sessions.</p>
                                <div className="space-y-6">
                                    {[
                                        { value: "60-70%", label: "Faster Setup", desc: "3.5 hours per channel → 45 minutes total" },
                                        { value: "50%", label: "Fewer Errors", desc: "Real-time spec validation and auto-resize" },
                                        { value: "4.6/5", label: "Usability Score", desc: "Highest Carter had ever recorded" },
                                        { value: "40%", label: "Cycle Reduction", desc: "4+ hours weekly → under 90 minutes" },
                                    ].map((item, i) => (
                                        <div key={i} className="border-b border-white/5 pb-5 last:border-0 last:pb-0">
                                            <div className="flex items-baseline gap-3 mb-1">
                                                <span className="font-heading text-xl font-bold text-white">{item.value}</span>
                                                <span className="text-white text-sm font-medium">{item.label}</span>
                                            </div>
                                            <p className="text-gray-400 text-xs">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
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
                            Designer title. PM proof.{" "}
                            <span className="text-gray-400">The metrics don&apos;t care what your title says.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            The most impactful decision wasn&apos;t a screen — it was convincing leadership to pause the roadmap.
                            That call unlocked 20 percentage points of campaign launch rate. Revenue found in the product, not the sales funnel.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            I wrote PRDs, ran sprint planning, coordinated engineering and QA, streamlined Jira processes,
                            and shipped industry-level design — all in one seat. The Product Head didn&apos;t hire a separate PM.
                            Because the work was already getting done.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= NEXT CASE STUDY ================= */}
            <section className="bg-black py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-2">Next Case Study</p>
                        <p className="font-heading text-2xl font-bold text-white">UVC: CMS Builder + Website for High Conversion</p>
                    </div>
                    <Link to="/Projects/UVC" className="text-[#d6f928] font-medium text-sm border border-[#d6f928]/20 bg-[#d6f928]/5 px-6 py-3 rounded-full hover:bg-[#d6f928]/10 transition-colors whitespace-nowrap">
                        View Case Study &rarr;
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};
export default CarterEcosystem;
