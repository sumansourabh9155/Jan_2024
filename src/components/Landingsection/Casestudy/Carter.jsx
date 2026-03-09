import Navbar from "../../Navbar";
import Footer from "../../Footer";
import SEO from "../../SEO";

// Phase 1: Redesign Assets
import Carterimg from "../../../assets/CarterRedesign/carter.png";
import Beforeafter from "../../../assets/CarterRedesign/Beforeafter.png";
import DSL from "../../../assets/CarterRedesign/dsl.png";

// Phase 2: DSP Assets
import dsp from "../../../assets/dsp/dsp.png";
import Campaign from "../../../assets/dsp/campaign.png";
import mediaplan from "../../../assets/dsp/mediaplan.png";
import campaigndetail from "../../../assets/dsp/campaigndetail.png";
import v1 from "../../../assets/dsp/1.mp4";
import v3 from "../../../assets/dsp/3.mp4";

const Carter = () => {
    return (
        <div className="font-sans text-white bg-black">
            <SEO
                title="Carter Ecosystem: Redesign & DSP - Case Study"
                description="A comprehensive case study on the Carter Retail Media Network: redesigning the core platform, building a scalable design system, and launching a 0-1 DSP for campaign management."
                keywords="case study, carter, redesign, dsp, retail media network, ad tech, design system, product designer"
                url="https://www.sumansourabh.com/Projects/CarterEcosystem"
            />
            <Navbar />

            <div className="px-6 pt-32 pb-16">
                <div className="max-w-6xl mx-auto space-y-16">

                    {/* ================= HEADER & OVERVIEW ================= */}
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 text-sm bg-white/10 border border-white/20 backdrop-blur px-4 py-1 rounded-full">
                            ◎ Retail Media Network Ecosystem
                        </div>
                        <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
                            Carter <span className="text-gray-400 font-medium">Ecosystem</span>
                        </h1>
                        <p className="text-md text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                            Transforming a fragmented Retail Media Network (RMN) into a unified powerhouse.
                            This two-part case study covers the foundational redesign of the core Carter platform
                            and the subsequent 0-to-1 launch of the Carter DSP for cross-network campaign management.
                        </p>
                    </div>

                    <img src={Carterimg} alt="Carter Platform Overview" className="rounded-2xl w-full object-cover" />

                    {/* Combined Meta Info */}
                    <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-10 space-y-10 text-white">
                        <div className="flex flex-wrap gap-3">
                            {["B2B", "SaaS", "Ad Tech", "Design System", "0 to 1"].map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-sm font-medium bg-white/10 border border-white/20 text-white px-4 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-lg text-gray-400 leading-relaxed max-w-5xl">
                            Carter is a digital advertising solution that enables retailers to monetize their online properties
                            by allowing brands and advertisers to place targeted ads within their ecosystems. By leveraging
                            first-party data, Carter delivers highly relevant ads to shoppers at key moments. My work spanned
                            fixing foundational usability issues to architecting an entirely new orchestration platform.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-300 text-base border-t border-white/10 pt-8">
                            <div>
                                <p className="uppercase tracking-wide text-xs text-gray-500 font-semibold mb-1">Company:</p>
                                <p className="text-white font-medium">Shyftlabs</p>
                            </div>
                            <div>
                                <p className="uppercase tracking-wide text-xs text-gray-500 font-semibold mb-1">Role:</p>
                                <p className="text-white font-medium">Product Designer</p>
                            </div>
                            <div>
                                <p className="uppercase tracking-wide text-xs text-gray-500 font-semibold mb-1">Platform:</p>
                                <p className="text-white font-medium">Desktop, Web (Responsive)</p>
                            </div>
                            <div>
                                <p className="uppercase tracking-wide text-xs text-gray-500 font-semibold mb-1">Key Contributions:</p>
                                <p className="text-white font-medium">UX strategy, Design System creation, UI Redesign, and 0-1 DSP Platform design.</p>
                            </div>
                        </div>
                    </section>

                    {/* ================= PHASE 1: REDESIGN ================= */}
                    <div className="space-y-12 pt-12">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl font-semibold text-white">Phase 1: Platform Redesign & Design System</h2>
                            <div className="h-px bg-white/20 flex-grow"></div>
                        </div>
                        <img src={DSL} alt="Before and After Redesign" className="rounded-2xl w-full" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Problem */}
                            <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-10 rounded-3xl space-y-6">
                                <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">The Problem</p>
                                <h3 className="text-xl font-semibold text-white">Usability Gaps Impacting Conversions</h3>
                                <p className="text-base text-gray-400 leading-relaxed">
                                    Carter&apos;s original platform suffered from inconsistent UI patterns, unclear navigation, and poor responsiveness.
                                    These usability gaps made it difficult for clients to confidently interact with the platform, hindered internal
                                    team onboarding, and ultimately caused a decrease in pitch success rates and client retention.
                                </p>
                            </section>

                            {/* Objectives */}
                            <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-10 rounded-3xl space-y-6">
                                <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">Objectives</p>
                                <ul className="list-disc text-gray-400 pl-6 space-y-3 text-base">
                                    <li>Improve overall user experience and platform clarity.</li>
                                    <li>Establish a scalable and consistent design system.</li>
                                    <li>Increase client engagement and retention metrics.</li>
                                    <li>Support faster design and development iteration cycles.</li>
                                </ul>
                            </section>
                        </div>

                        {/* Research & Analysis */}
                        <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-8">
                            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">Research & Analysis</p>
                            <p className="text-gray-300 text-base max-w-4xl">
                                Through usability audits, stakeholder interviews, and heuristic evaluations, we identified critical friction points:
                            </p>
                            <ul className="list-disc text-gray-400 pl-6 space-y-3 text-base">
                                <li><strong className="text-white">Jakob’s Law:</strong> The platform used non-standard components, defying user expectations of familiar patterns.</li>
                                <li><strong className="text-white">Aesthetic-Usability Effect:</strong> Visual inconsistencies degraded perceived usability.</li>
                                <li><strong className="text-white">Pre-redesign Metrics:</strong> Avg. onboarding time was 3+ hrs, client satisfaction at 5.8/10, and a 62% bounce rate.</li>
                            </ul>
                        </section>

                        <img src={Beforeafter} alt="Before and After Redesign" className="rounded-2xl w-full" />

                        {/* Design System */}
                        <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-12">
                            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">The Solution</p>
                            <h2 className="text-2xl font-semibold text-white">Foundations for Consistency: The Design System</h2>
                            <p className="text-base text-gray-400 leading-relaxed max-w-5xl">
                                To fix the fragmented UI, we built a comprehensive Design System inspired by Material Design 3.
                                Using atomic design principles, tokenized theming, 8pt spacing, and a 12-column grid, it became the
                                shared language between design and engineering.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400 text-sm">
                                <div className="space-y-3">
                                    <h3 className="text-white font-medium text-base">Component Library</h3>
                                    <p>Reusable, responsive components with defined states and variants integrated with Figma Tokens and Storybook.</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-white font-medium text-base">Accessibility</h3>
                                    <p>Achieved WCAG 2.1 AA compliance via improved contrast, semantic HTML, and rigorous keyboard navigation support.</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-white font-medium text-base">Scalability</h3>
                                    <p>Modular structure allowing us to seamlessly onboard new features (like the upcoming DSP) without reworking core UI.</p>
                                </div>
                            </div>
                        </section>

                        {/* Phase 1 Impact */}
                        <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-3xl">
                            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold mb-8">Phase 1 Impact</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                    <p className="text-2xl text-white font-semibold mb-2">300%</p>
                                    <p className="text-sm text-gray-400">Growth in active enterprise clients within a year.</p>
                                </div>
                                <div>
                                    <p className="text-2xl text-white font-semibold mb-2">50%</p>
                                    <p className="text-sm text-gray-400">Faster deployment via reusable components.</p>
                                </div>
                                <div>
                                    <p className="text-2xl text-white font-semibold mb-2">40%</p>
                                    <p className="text-sm text-gray-400">Increase in platform engagement and satisfaction.</p>
                                </div>
                                <div>
                                    <p className="text-2xl text-white font-semibold mb-2">2x</p>
                                    <p className="text-sm text-gray-400">Faster onboarding due to visual clarity and consistency.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* ================= PHASE 2: DSP ================= */}
                    <div className="space-y-12 pt-24">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl font-semibold text-white">Phase 2: Building the Carter DSP</h2>
                            <div className="h-px bg-white/20 flex-grow"></div>
                        </div>

                        <img src={dsp} alt="Carter DSP Interface" className="rounded-2xl w-full" />

                        <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-8">
                            <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">The Next Challenge</p>
                            <h2 className="text-xl font-semibold text-white">Managing Campaigns Across Fragmented Networks</h2>
                            <p className="text-base text-gray-400 leading-relaxed max-w-5xl">
                                With a stable core platform, we tackled the broader RMN ecosystem. Marketers faced high cognitive load due to
                                multiple logins, fragmented workflows, and repetitive asset uploads across different retail networks.
                                The ecosystem lacked a unified solution to seamlessly orchestrate multi-channel campaigns.
                            </p>
                        </section>

                        {/* Video & Business Goals */}
                        <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 sm:p-8 md:p-12 rounded-3xl">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <video controls autoPlay loop muted className="w-full md:w-1/2 rounded-xl border border-white/10 shadow-2xl">
                                    <source src={v1} type="video/mp4" />
                                </video>
                                <div className="w-full md:w-1/2 space-y-8">
                                    <div>
                                        <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold mb-4">Business Goals</p>
                                        <ul className="list-disc text-gray-400 pl-5 space-y-2 text-base">
                                            <li>Streamline campaign creation across multiple networks.</li>
                                            <li>Unify budget and targeting workflows.</li>
                                            <li>Enable cross-platform performance analysis.</li>
                                            <li>Reduce time-to-launch and execution errors.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold mb-4">KPIs</p>
                                        <ul className="list-disc text-gray-400 pl-5 space-y-2 text-base">
                                            <li>Reduce setup time per campaign by 60–70%.</li>
                                            <li>Improve asset compliance rate to 95%.</li>
                                            <li>Decrease cross-platform deployment errors by 50%.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* DSP Research & Personas */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-10 rounded-3xl space-y-6">
                                <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">Target Audience</p>
                                <ul className="space-y-4 text-gray-400 text-base">
                                    <li><strong className="text-white">Digital Agencies:</strong> Managing multi-brand campaigns requiring scalable tools.</li>
                                    <li><strong className="text-white">Retail & eCommerce Giants:</strong> Striving for omnichannel consistency.</li>
                                    <li><strong className="text-white">D2C Brands:</strong> Needing simplified workflows to scale with lean teams.</li>
                                    <li><strong className="text-white">Enterprise Marketing Teams:</strong> Demanding granular reporting and governance.</li>
                                </ul>
                            </section>

                            <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-10 rounded-3xl space-y-6">
                                <p className="text-xs uppercase tracking-widest font-semibold text-gray-400">Research Insights</p>
                                <ul className="space-y-4 text-gray-400 text-base">
                                    <li><strong className="text-white">Interviews (10 Users):</strong> Uncovered major bottlenecks in asset duplication and reporting.</li>
                                    <li><strong className="text-white">Benchmarking:</strong> 80% of users manually duplicated campaigns across RMNs; 60% spent 4+ hrs/week on reports.</li>
                                    <li><strong className="text-white">Testing:</strong> Highlighted the need for real-time creative previews and channel-specific compliance flags.</li>
                                </ul>
                            </section>
                        </div>

                        <img src={Campaign} alt="Campaign Management Dashboard" className="rounded-2xl w-full" />

                        {/* DSP Solution */}
                        <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-10">
                            <p className="text-xs uppercase tracking-widest font-semibold text-gray-400">The Solution</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-white">Unified Campaign Orchestration</h3>
                                    <p className="text-base text-gray-400">
                                        Built a scalable platform with one-click multi-channel sync, shared targeting layers, and a dynamic creative engine that adapts assets automatically.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-white">Smart Budgeting & Real-Time Analytics</h3>
                                    <p className="text-base text-gray-400">
                                        Integrated a rule-based budget allocator paired with a real-time dashboard standardizing KPIs across all connected RMNs.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-white">Streamlined Workflows</h3>
                                    <p className="text-base text-gray-400">
                                        Native DAM support, automated triggers via webhooks, and seamless exports to Slack and Google Sheets to improve ops efficiency.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-white">Information Architecture</h3>
                                    <p className="text-base text-gray-400">
                                        Simplified navigation flowing logically: Dashboard → Campaigns → Creative Library → Targeting → Channels → Reports.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <img src={campaigndetail} alt="Campaign Details View" className="rounded-2xl w-full" />
                        <img src={mediaplan} alt="Media Planning Tool" className="rounded-2xl w-full" />

                        {/* Phase 2 Impact & Final Video */}
                        <section className="bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-3xl">
                            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                                <video controls autoPlay loop muted className="w-full md:w-1/2 rounded-xl border border-white/10 shadow-2xl">
                                    <source src={v3} type="video/mp4" />
                                </video>
                                <div className="w-full md:w-1/2 space-y-8">
                                    <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">Phase 2 Impact</p>

                                    <div className="space-y-6 text-gray-400 text-base">
                                        <div>
                                            <p className="text-xl text-white font-semibold">60–70% Faster Setup</p>
                                            <p className="text-sm">Measured during internal testing across multiple RMN workflows.</p>
                                        </div>
                                        <div>
                                            <p className="text-xl text-white font-semibold">50% Fewer Deployment Issues</p>
                                            <p className="text-sm">Reduced creative errors via our scalable components and real-time previews.</p>
                                        </div>
                                        <div>
                                            <p className="text-xl text-white font-semibold">90%+ Satisfaction</p>
                                            <p className="text-sm">Alpha testers rated the platform highly on usability and performance.</p>
                                        </div>
                                        <div>
                                            <p className="text-xl text-white font-semibold">40% Cycle Reduction</p>
                                            <p className="text-sm">Faster execution and time-to-market through automation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Carter;