import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Site footer — shared by every page.
 *
 * Was a bold sans headline with a lime clause, three monospace column headers
 * and a white grid pattern left over from the dark build (which rendered as
 * nothing on a light page). Now it closes the page the way the rest of it
 * speaks: one serif line, the email as the primary action, links as plain
 * lists.
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const EMAIL = "sumansourabh9155@gmail.com";

    const links = {
        explore: [
            { name: "Selected work", url: "/#case-studies" },
            { name: "Design work", url: "/#design-gallery" },
            { name: "About & resume", url: "/resume" },
            { name: "Contact", url: "/contact" },
        ],
        caseStudies: [
            { name: "Carter", url: "/carter" },
            { name: "Poppins", url: "/poppins" },
            { name: "Atlas", url: "/atlas" },
            { name: "Simfluent", url: "/simfluent" },
            { name: "GoDiverse", url: "/GoDiverse" },
        ],
        social: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/sumansourabh9155/" },
            { name: "GitHub", url: "https://github.com/sumansourabh9155" },
        ],
    };

    const colHead = "text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-5";
    const colLink = "text-[0.9375rem] text-ink-muted hover:text-ink transition-colors";

    return (
        <footer className="bg-surface bg-plusgrid pb-10">
            <div aria-hidden="true" className="rule-double" />
            <div className="px-6">
                <div className="max-w-6xl mx-auto pt-20 pb-16">

                {/* The close. One statement, one action. */}
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:items-end">
                    <h2 className="font-display font-normal text-ink text-[2.25rem] sm:text-[3rem] leading-[1.1] tracking-[-0.01em] [text-wrap:balance]">
                        Looking for a designer who{" "}
                        <span className="text-ink-faint italic">ships what they design?</span>
                    </h2>

                    <div className="lg:text-right">
                        <p className="text-ink-muted text-[0.9375rem] leading-[1.7] mb-6 lg:ml-auto max-w-sm">
                            I embed into teams, close the strategy-execution gap, and ship
                            products that move metrics.
                        </p>
                        {/* The address itself is the affordance — a mail link people can
                            read, copy and trust, rather than a button that hides it. */}
                        <a
                            href={`mailto:${EMAIL}`}
                            className="group inline-flex items-center gap-2 font-display text-[1.375rem] sm:text-[1.625rem] text-ink border-b border-line-strong hover:border-ink transition-colors pb-1 break-all"
                        >
                            {EMAIL}
                            <ArrowUpRight
                                size={20}
                                className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </a>
                    </div>
                </div>

                </div>
            </div>
            <div aria-hidden="true" className="rule-double" />
            <div className="px-6">
                <div className="max-w-6xl mx-auto">

                {/* Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
                    <div className="col-span-2 md:col-span-1">
                        <p className={colHead}>Suman Sourabh</p>
                        <p className="text-[0.9375rem] text-ink-muted leading-[1.7] max-w-xs">
                            Product Designer with a CS/ML background. I design 0-to-1 AI
                            products end to end and ship the interface myself.
                        </p>
                    </div>

                    <div>
                        <p className={colHead}>Explore</p>
                        <ul className="space-y-3">
                            {links.explore.map((l) => (
                                <li key={l.name}>
                                    <Link to={l.url} className={colLink}>{l.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className={colHead}>Case studies</p>
                        <ul className="space-y-3">
                            {links.caseStudies.map((l) => (
                                <li key={l.name}>
                                    <Link to={l.url} className={colLink}>{l.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className={colHead}>Elsewhere</p>
                        <ul className="space-y-3">
                            {links.social.map((l) => (
                                <li key={l.name}>
                                    <a
                                        href={l.url}
                                        target="_blank"
                                        rel="me noopener noreferrer"
                                        className={`${colLink} inline-flex items-center gap-1.5`}
                                    >
                                        {l.name}
                                        <ArrowUpRight size={13} className="text-ink-faint" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                </div>
            </div>
            <div aria-hidden="true" className="rule-double" />
            <div className="px-6">
                <div className="max-w-6xl mx-auto">

                <div className="flex flex-wrap gap-x-6 gap-y-2 justify-between pt-8">
                    <p className="text-xs text-ink-ghost">
                        © {currentYear} Suman Sourabh · Noida, India · Open to Product Design roles
                    </p>
                    <p className="text-xs text-ink-ghost">
                        Designed and built by me, in React and Tailwind.
                    </p>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
