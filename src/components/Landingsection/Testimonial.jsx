import { memo } from "react";
import { ArrowRight } from "lucide-react";
import sam from "../../assets/Img/sam.png";

/**
 * A single client quote, set as a dark full-bleed pull-quote band.
 *
 * Sits on the warm cream band, which is what separates it from the white
 * sections either side. A dark band was tried here and pulled too hard
 * against the rest of the page.
 *
 * It used to be a section heading ("What People I've Worked With Say") above a
 * bordered card that opened with its own headline — two headings for one quote.
 */
const Testimonial = memo(() => {
    return (
        <section
            aria-label="Client testimonial"
            className="bg-cream py-24 px-6"
        >
            <div className="max-w-6xl mx-auto">
                <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-12">
                    What people I&apos;ve worked with say
                </p>

                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16 lg:items-start">

                    <figure className="max-w-[15rem] lg:max-w-none">
                        <img
                            src={sam}
                            alt="Samira Pujari, Founder of RaikarsGoodVibes"
                            loading="lazy"
                            decoding="async"
                            className="w-full aspect-[4/5] object-cover rounded-sm"
                        />
                    </figure>

                    <div>
                        {/* The quote carries the serif, so it reads as a voice
                            rather than as another UI heading. */}
                        <blockquote
                            className="font-display font-normal text-ink text-[1.75rem] sm:text-[2.375rem] leading-[1.25] tracking-[-0.01em]"
                            style={{ hangingPunctuation: "first", textIndent: "-0.42em" }}
                        >
                            &ldquo;He is the person who, if he commits,{" "}
                            <span className="italic text-ink-faint">delivers with utmost excellence.</span>&rdquo;
                        </blockquote>

                        <div className="text-ink-muted text-[0.9375rem] leading-[1.7] space-y-4 mt-8 max-w-xl">
                            <p>
                                Suman worked on our dream project as a Lead. His gift to perfect the
                                designs was seen from the very beginning — from understanding the
                                founder&apos;s vision to executing the minutest details.
                            </p>
                            <p>
                                His sincerity and dedication to execute plans despite numerous hurdles
                                is what makes him a true winner. I believe his grit will carve his mark
                                in this industry.
                            </p>
                        </div>

                        <figcaption className="mt-10 border-t border-line pt-6 flex flex-wrap items-baseline justify-between gap-4">
                            <div>
                                <p className="text-ink font-medium text-[0.9375rem]">Samira Pujari</p>
                                <p className="text-ink-faint text-[0.8125rem] mt-1">
                                    Founder, RaikarsGoodVibes — art &amp; décor brand strategy
                                </p>
                            </div>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-ink underline underline-offset-[6px] decoration-line-strong hover:decoration-ink transition-colors"
                            >
                                Get in touch <ArrowRight size={16} />
                            </a>
                        </figcaption>
                    </div>
                </div>
            </div>
        </section>
    );
});

Testimonial.displayName = "Testimonial";

export default Testimonial;
