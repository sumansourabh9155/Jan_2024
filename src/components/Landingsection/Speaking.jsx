import { Mic, Users, Presentation } from "lucide-react";

import Podium from "../../assets/events/01-speaking-at-the-podium.jpg";
import ColourWorkshop from "../../assets/events/03-colour-psychology-workshop.jpg";
import OnScreen from "../../assets/events/04-teaching-design-on-screen.jpg";
import FigmaCert from "../../assets/events/05-figma-bootcamp-certificate.jpg";
import GuestOfHonour from "../../assets/events/06-guest-of-honour.jpg";
import LectureHall from "../../assets/events/07-the-lecture-hall.jpg";
import BubbleLineup from "../../assets/events/08-bubble-boot-lineup.jpg";
import Lectern from "../../assets/events/10-at-the-lectern.jpg";
import WorkingRoom from "../../assets/events/11-working-the-room.jpg";

/**
 * Talks & workshops.
 *
 * Deliberately placed after the case studies and testimonials: the work makes
 * the argument, this supports it. Photos use object-cover; posters and
 * certificates use object-contain so their text stays readable.
 */

// Nine images on a 3×3 grid, ordered so photos and posters alternate in a
// checkerboard — clumping the flat poster artwork together reads as a dump.
const GALLERY = [
  { src: Podium, fit: "cover", alt: "Suman Sourabh presenting from a lectern to a lecture hall" },
  { src: ColourWorkshop, fit: "contain", alt: "Poster for the workshop 'Psychology of Colours in Graphic Design' at Lovely Professional University, September 2023" },
  { src: OnScreen, fit: "cover", alt: "Design work projected on screen while students follow along at their machines" },

  { src: BubbleLineup, fit: "contain", alt: "Bubble Boot online bootcamp poster listing the four speakers, including Suman Sourabh on the UI/UX track" },
  { src: WorkingRoom, fit: "cover", alt: "Walking the room during a workshop, helping students at their machines" },
  { src: FigmaCert, fit: "contain", alt: "Certificate of appreciation as a speaker at the TechStack Figma Bootcamp, November 2022" },

  { src: Lectern, fit: "cover", alt: "Speaking at a lectern at Lovely Professional University" },
  { src: GuestOfHonour, fit: "contain", alt: "Guest of Honour award from TechStack for Geeky Hours, in collaboration with NSCC" },
  { src: LectureHall, fit: "cover", alt: "Presenting to a seated lecture hall audience" },
];

const TALKS = [
  {
    title: "Psychology of Colours in Graphic Design",
    org: "SPADE · Lovely Professional University",
    when: "Sep 2023",
    note: "A workshop on using colour to direct attention rather than decorate.",
  },
  {
    title: "Figma Bootcamp",
    org: "TechStack",
    when: "Nov 2022",
    note: "Hands-on session taking students from a blank canvas to a working prototype.",
  },
  {
    title: "Bubble Boot — UI/UX track",
    org: "BubbleUp Community",
    when: "Dec 2022",
    note: "One of four speakers on a week-long online bootcamp, covering the design track.",
  },
];

const Speaking = () => {
  return (
    <section
      id="speaking"
      aria-labelledby="speaking-heading"
      className="scroll-mt-24 bg-[#050505] border-t border-white/10 py-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-4">
            [ Talks &amp; Workshops ]
          </div>
          <h2
            id="speaking-heading"
            className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
          >
            I teach this,{" "}
            <span className="text-gray-500">not just do it.</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Alongside the product work I&apos;ve run three design workshops for students &mdash; colour
            theory, Figma, and how to take an idea from a blank canvas to something you can click.
            Explaining a design decision to a room of two hundred people who have never made one is
            the fastest way to find out whether you actually understand it.
          </p>
        </div>

        {/* Talk list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {TALKS.map((t) => (
            <div
              key={t.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#d6f928]/10 border border-[#d6f928]/20 flex items-center justify-center shrink-0">
                  <Mic size={16} className="text-[#d6f928]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 whitespace-nowrap">
                  {t.when}
                </span>
              </div>
              <h3 className="text-white font-semibold text-sm leading-snug mb-1">{t.title}</h3>
              <p className="text-gray-500 text-xs mb-3">{t.org}</p>
              <p className="text-gray-400 text-xs leading-relaxed mt-auto">{t.note}</p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        {/* Three across on desktop — nine images land as an even 3×3. */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY.map((g) => (
            <div
              key={g.alt}
              className={`relative rounded-xl overflow-hidden border border-white/10 aspect-[4/3] ${g.fit === "contain" ? "bg-white/[0.04]" : "bg-black/40"
                }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                decoding="async"
                className={`w-full h-full ${g.fit === "contain" ? "object-contain p-2" : "object-cover"}`}
              />
            </div>
          ))}
        </div>

        {/* Why it's here */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-5 flex-1">
            <Users size={16} className="text-[#d6f928] shrink-0 mt-0.5" />
            <p className="text-gray-400 text-xs leading-relaxed">
              Three sessions, each for{" "}
              <span className="text-white font-medium">150&ndash;200 attendees</span>, mostly in
              full computer labs working along live.
            </p>
          </div>
          <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-5 flex-1">
            <Presentation size={16} className="text-[#d6f928] shrink-0 mt-0.5" />
            <p className="text-gray-400 text-xs leading-relaxed">
              Teaching forces the thing every design review needs:{" "}
              <span className="text-white font-medium">saying why, in plain language</span>, to
              someone who does not already agree with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaking;
