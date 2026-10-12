import { memo } from "react";
import { Quote, ArrowRight } from "lucide-react";
// Keep your existing imports
import rgv from "../../assets/Img/rgv.png";
import sam from "../../assets/Img/sam.png";

// Optimization 1: Use memo to prevent re-renders from parent scroll events
const Testimonial = memo(() => {
    return (
        <section className="bg-surface-2 py-32 px-6 relative overflow-hidden flex justify-center">

            <div className="max-w-7xl w-full relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-ink tracking-widest uppercase mb-6">
                            [ Social Proof ]
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink leading-tight">
                            What People I&apos;ve <br />
                            <span className="text-ink-faint">Worked With Say.</span>
                        </h2>
                    </div>
                </div>

                {/* The Feature Testimonial Card */}
                <div className="relative bg-surface-2 border border-line rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden group">

                    {/* Giant Watermark Quote Icon */}
                    <Quote className="absolute top-10 left-10 text-ink/5 w-48 h-48 -rotate-12 pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                        {/* Image Section (Left) */}
                        <div className="w-full lg:w-1/3 relative">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line shadow-2xl">
                                {/* Optimization 2 & 3: Lazy load, Async decode, and GPU hint for animation */}
                                <img
                                    src={sam}
                                    alt="Samira Pujari - Founder of RaikarsGoodVibes who achieved brand strategy success through product design partnership"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                                />
                                {/* Scrim. A photo is its own context: text sitting on one
                                    needs a dark scrim and light type regardless of the page
                                    theme. Inverting this to white washed the photo out. */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

                                {/* Name on Image */}
                                <div className="absolute bottom-6 left-6 text-left">
                                    <p className="text-white font-bold text-lg">Samira Pujari</p>
                                    <p className="text-white/80 text-xs uppercase tracking-wider">Founder, RaikarsGoodVibes</p>
                                </div>
                            </div>

                            {/* Brand Logo Floating Badge */}
                            {/* Optimization 4: transform-gpu for smoother rendering */}
                            <div className="absolute -bottom-6 -right-6 w-32 bg-[#dab853] p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.18)] border border-line rotate-3 group-hover:rotate-0 transition-transform duration-500 transform-gpu">
                                <img
                                    src={rgv}
                                    alt="RaikarsGoodVibes brand logo - art and decor brand that scaled through strategic product design"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-auto object-contain mix-blend-multiply"
                                />
                            </div>
                        </div>

                        {/* Content Section (Right) */}
                        <div className="w-full lg:w-2/3 text-left">
                            {/* The "Hook" Headline */}
                            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-ink leading-snug mb-8">
                                &quot;He is the person who, if he commits, <span className="text-accent-ink border-b border-accent-ink/35 pb-1">delivers with utmost excellence.</span>&quot;
                            </h2>

                            {/* The Full Quote (Muted) */}
                            <div className="text-ink-muted text-sm md:text-base leading-relaxed space-y-4 max-w-2xl">
                                <p>
                                    &quot;Suman worked on our dream project as a Lead. His gift to perfect the designs was seen from the very beginning—from understanding the founder&apos;s vision to executing the minutest details.&quot;
                                </p>
                                <p>
                                    &quot;His sincerity and dedication to execute plans despite numerous hurdles is what makes him a true winner. I believe his grit will carve his mark in this industry.&quot;
                                </p>
                            </div>

                            {/* CTA within the card */}
                            <div className="mt-10 pt-8 border-t border-line flex flex-wrap gap-6 items-center">
                                <a href="/contact" className="flex items-center gap-2 text-ink hover:text-accent-ink transition-colors font-medium">
                                    Get in Touch <ArrowRight size={18} />
                                </a>
                                <span className="text-ink-ghost text-sm hidden md:inline">|</span>
                                <p className="text-ink-faint text-sm">
                                    Art & Décor Brand Strategy
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
});

Testimonial.displayName = 'Testimonial';

export default Testimonial;