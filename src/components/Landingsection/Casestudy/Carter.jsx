import Navbar from "../../Navbar";
import Carter from "../../../assets/CarterRedesign/carter.png";
import Oldcarter from "../../../assets/CarterRedesign/oldcarter.png";
import Beforeafter from "../../../assets/CarterRedesign/Beforeafter.png";
import DSL from "../../../assets/CarterRedesign/dsl.png";
import Footer from "../../Footer";
import SEO from "../../SEO";
const CarterRedesign = () => {
    return (
        <div className="font-sans text-white bg-black">
            <SEO
                title="Carter 2.0 Redesign - Case Study"
                description="Redesign of Carter Retail Media Network platform, improving usability, design system, and client conversions."
                keywords="case study, carter, redesign, retail media network, shyftlabs, product designer"
                url="https://www.sumansourabh.com/Projects/CarterRedesign"
            />
            <Navbar />
            <div className="px-6 pt-32">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 text-sm bg-white/10 border border-white/20 backdrop-blur px-4 py-1 rounded-full">
                            ◎ Retail Media Network
                        </div>
                        <h1 className="text-5xl font-semibold text-white">
                            Carter 2.0{" "}
                            <span className="text-gray-300 font-medium">Redesign</span>
                        </h1>
                        <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">
                            Carter is a Retail Media Network (RMN) platform that enables
                            brands to run targeted advertising campaigns across retail
                            websites. The platform supports campaign management, reporting,
                            and analytics.
                        </p>
                    </div>

                    <img src={Carter} alt="" />

                    <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-10 space-y-10 text-white">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-3">
                            {["B2B", "SaaS", "Ad Tech", "Design System"].map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-sm font-medium bg-white/10 border border-white/20 text-white px-4 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-400 leading-relaxed max-w-5xl">
                            Carter, a retail media platform, is a digital advertising solution
                            that enables retailers to monetise their online properties by
                            allowing brands (publishers) and advertisers to place targeted ads
                            within their ecosystems. These platforms leverage first-party data
                            from retailer transactions, customer behaviours, and purchase
                            history to deliver highly relevant ads to shoppers at key moments
                            in their buying journey.
                        </p>

                        {/* Meta Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-300 text-base">
                            <div>
                                <p className="uppercase tracking-wide text-xs text-gray-400 font-semibold mb-1">
                                    Company:
                                </p>
                                <p className="text-white font-medium">Shyftlabs</p>
                            </div>
                            <div>
                                <p className="uppercase tracking-wide text-xs text-gray-400 font-semibold mb-1">
                                    Role:
                                </p>
                                <p className="text-white font-medium">Product Designer</p>
                            </div>
                            <div>
                                <p className="uppercase tracking-wide text-xs text-gray-400 font-semibold mb-1">
                                    Platform:
                                </p>
                                <p className="text-white font-medium">
                                    Desktop, Web (Responsive)
                                </p>
                            </div>
                            <div>
                                <p className="uppercase tracking-wide text-xs text-gray-400 font-semibold mb-1">
                                    Key Contributions:
                                </p>
                                <p className="text-white font-medium">
                                    Designed from concept to launch, including UX strategy,
                                    UI design, and design system creation.
                                </p>
                            </div>
                        </div>
                    </section>
                    <img src={Oldcarter} alt="" />
                    {/* Problem */}
                    <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-8">
                        <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
                            Problem
                        </p>
                        <h2 className="text-xl font-semibold text-white">
                            Usability & Design Gaps Impacting Client Conversions
                        </h2>
                        <p className="text-base text-gray-400 leading-relaxed">
                            Carter&apos;s original platform suffered from inconsistent UI patterns,
                            unclear navigation, and poor responsiveness. These usability gaps
                            made it difficult for clients to confidently interact with the
                            platform and hindered internal teams during onboarding and
                            campaign setup. As a result, the pitch success rate decreased,
                            causing a slowdown in client acquisition and retention.
                        </p>
                    </section>

                    {/* Objectives */}
                    <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-8">
                        <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
                            Objectives
                        </p>
                        <ul className="list-disc text-gray-300 pl-6 space-y-3 text-base">
                            <li>Improve user experience and platform clarity.</li>
                            <li>Establish a scalable and consistent design system.</li>
                            <li>Increase client engagement and retention.</li>
                            <li>Support faster design and development iterations.</li>
                        </ul>
                    </section>

                    {/* Research & Analysis */}
                    <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-8">
                        <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
                            Research & Analysis
                        </p>
                        <p className="text-gray-300 text-base max-w-4xl">
                            We conducted usability audits, stakeholder interviews, and
                            heuristic evaluations. Key findings included:
                        </p>
                        <ul className="list-disc text-gray-300 pl-6 space-y-3 text-base">
                            <li>
                                <strong className="text-white">Jakob’s Law:</strong> Users
                                expected familiar patterns. The platform used non-standard
                                components, creating friction.
                            </li>
                            <li>
                                <strong className="text-white">
                                    Aesthetic-Usability Effect:
                                </strong>{" "}
                                Users rated visually appealing prototypes higher in usability,
                                even when functionality was unchanged.
                            </li>
                            <li>
                                <strong className="text-white">Pre-redesign Metrics:</strong>{" "}
                                Avg. onboarding time: 3+ hrs, Client satisfaction score: 5.8/10,
                                Bounce rate: 62%.
                            </li>
                        </ul>
                        <p className="text-gray-300 text-base max-w-4xl">
                            We also benchmarked against modern RMN platforms and drew design
                            inspiration from Material Design and IBM Carbon System.
                        </p>
                    </section>
                    <img src={Beforeafter} alt="" />

                    {/* Solution */}
                    <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-8">
                        <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
                            Solution
                        </p>

                        {/* Section 01 */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-white">
                                Ensuring Consistency Across the Product
                            </h3>
                            <p className="text-base text-gray-400 max-w-4xl">
                                Developed a comprehensive Design System inspired by Material
                                Design 3, utilizing atomic design principles, tokenized theming,
                                8pt spacing, and a 12-column grid.
                            </p>
                            <h3 className="text-xl font-semibold text-white">
                                Accelerating Development & Design Process
                            </h3>
                            <p className="text-base text-gray-400 max-w-4xl">
                                Built reusable component libraries integrated with Figma Tokens,
                                Storybook, and TailwindCSS for seamless collaboration.
                            </p>
                        </div>

                        {/* Section 02 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-white">
                                Improving Accessibility & Compliance
                            </h3>
                            <p className="text-base text-gray-400 max-w-4xl">
                                Achieved WCAG 2.1 AA compliance through better contrast, focus
                                states, keyboard navigation, semantic HTML, and ARIA roles.
                            </p>
                        </div>

                        {/* Section 03 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-white">
                                Enabling Scalability for Growth
                            </h3>
                            <p className="text-base text-gray-400 max-w-4xl">
                                The modular structure allowed us to onboard new features and
                                team members without reworking core UI.
                            </p>
                        </div>
                    </section>

                    <img src={DSL} alt="" />
                    {/* Design System Section */}
                    <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-12 rounded-3xl space-y-12">
                        <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
                            Design System
                        </p>
                        <h2 className="text-xl font-semibold text-white">
                            Foundations for Consistency and Scale
                        </h2>
                        <p className="text-base text-gray-400 leading-relaxed max-w-5xl">
                            The creation of Carter’s design system was a transformative step toward unifying the platform&apos;s UI and improving cross-functional collaboration. Inspired by Material Design 3 principles and built on atomic design methodology, the system provided a scalable foundation for consistent, accessible, and efficient product development.
                        </p>

                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-white">Purpose of the Design System</h3>
                            <p className="text-base text-gray-400 max-w-5xl">
                                The primary goal of the design system was to eliminate inconsistencies, reduce design-developer miscommunication, and accelerate product evolution. It served as a shared language between designers and developers, ensuring that every element—whether visual or interactive—adhered to a single source of truth.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-white">What It Includes</h3>
                            <ul className="list-disc pl-6 text-gray-300 space-y-3">
                                <li><strong className="text-white">Component Library:</strong> Reusable, responsive components with defined states and variants.</li>
                                <li><strong className="text-white">Style Tokens:</strong> Tokens for color, typography, spacing, elevation, radius synced to TailwindCSS and Storybook.</li>
                                <li><strong className="text-white">Layout Rules:</strong> 8pt spacing grid and 12-column layout for spatial harmony.</li>
                                <li><strong className="text-white">Accessibility Patterns:</strong> WCAG 2.1 AA compliance, keyboard nav, semantic HTML, ARIA roles.</li>
                                <li><strong className="text-white">Documentation Hub:</strong> Developer-focused guidelines with code usage and best practices.</li>
                                <li><strong className="text-white">Version Control & Governance:</strong> Changelogs, naming rules, and release protocols.</li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-lg font-semibold text-white">How It Helps Designers</h3>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>Promotes visual consistency across all screens.</li>
                                    <li>Reduces redundant work with reusable components.</li>
                                    <li>Speeds up prototyping with pre-built Figma libraries.</li>
                                    <li>Enables deeper focus on UX strategy.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">How It Helps Developers</h3>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>Eliminates guesswork with clear specs.</li>
                                    <li>Enables fast build using Tailwind + tokens.</li>
                                    <li>Minimizes UI bugs and inconsistencies.</li>
                                    <li>Streamlines CI/CD integration.</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-base text-gray-400 max-w-5xl">
                            The design system became the backbone of Carter’s UI transformation—offering a shared, living resource that aligned design thinking with technical execution. It empowered both designers and engineers to move faster with confidence, all while delivering a seamless and brand-consistent user experience.
                        </p>
                    </section>


                    {/* Impact */}
                    <section className="bg-white/5 border border-white/10 backdrop-blur-md p-12 rounded-3xl space-y-10">
                        <p className="text-xs uppercase text-gray-400 tracking-widest font-semibold">
                            Impact
                        </p>


                        <div className="space-y-8 text-gray-300 text-base">
                            <div>
                                <p className="text-xl text-white font-semibold">
                                    300% Growth in Clients
                                </p>
                                <p className="text-gray-400 ">
                                    From 1 to 4 active enterprise clients in a year.
                                </p>
                            </div>
                            <div>
                                <p className="text-xl text-white font-semibold">
                                    50% Faster Deployment
                                </p>
                                <p className="text-gray-400 ">
                                    Reduction in design-dev turnaround via reusable components.
                                </p>
                            </div>
                            <div>
                                <p className="text-xl text-white font-semibold">
                                    40% Increase in Engagement
                                </p>
                                <p className="text-gray-400 ">
                                    Time spent on platform and satisfaction scores improved
                                    significantly.
                                </p>
                            </div>
                            <div>
                                <p className="text-xl text-white font-semibold">
                                    2x faster onboarding
                                </p>
                                <p className="text-gray-400 ">
                                    With better docs ( Explanation Notes) and UI consistency and visual clarity.
                                </p>
                            </div>
                            <div>
                                <p className="text-xl text-white font-semibold">
                                    Consistent Brand Identity
                                </p>
                                <p className="text-gray-400 ">
                                    Unified design language reinforced Carter’s market presence
                                    and trust.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Footer CTA */}
                    <div className="text-center space-y-4 py-16">
                        <h3 className="text-2xl font-semibold">
                            Let’s Create Impact Together
                        </h3>
                        <p className="text-sm text-gray-400">
                            Available for collaborations, projects, or conversations.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-6 py-2 text-sm font-medium text-black bg-white rounded-full hover:opacity-90 transition"
                        >
                            Get in Touch →
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CarterRedesign;
