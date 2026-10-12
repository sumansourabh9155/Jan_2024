import Podium from "../../assets/events/01-speaking-at-the-podium.jpg";
import ColourWorkshop from "../../assets/events/03-colour-psychology-workshop.jpg";
import OnScreen from "../../assets/events/04-teaching-design-on-screen.jpg";
import FigmaCert from "../../assets/events/05-figma-bootcamp-certificate.jpg";
import GuestOfHonour from "../../assets/events/06-guest-of-honour.jpg";
import LectureHall from "../../assets/events/07-the-lecture-hall.jpg";
import BubbleLineup from "../../assets/events/08-bubble-boot-lineup.jpg";
import WorkingRoom from "../../assets/events/11-working-the-room.jpg";

/**
 * Talks & workshops.
 *
 * Deliberately placed after the case studies and testimonial: the work makes
 * the argument, this supports it — so it is sized like support. It used to run
 * to 1.7 screens of bordered cards, a 3x3 photo grid and two more cards
 * restating the point; the credential is three talks and a room full of
 * students, which is a list, a contact sheet and a sentence.
 *
 * Photos use object-cover; posters and certificates use object-contain so
 * their text stays readable.
 */
const GALLERY = [
  { src: Podium, fit: "cover", alt: "Suman Sourabh presenting from a lectern to a lecture hall" },
  { src: ColourWorkshop, fit: "contain", alt: "Poster for the workshop 'Psychology of Colours in Graphic Design' at Lovely Professional University, September 2023" },
  { src: OnScreen, fit: "cover", alt: "Design work projected on screen while students follow along at their machines" },
  { src: GuestOfHonour, fit: "contain", alt: "Guest of Honour award from TechStack for Geeky Hours, in collaboration with NSCC" },

  { src: WorkingRoom, fit: "cover", alt: "Walking the room during a workshop, helping students at their machines" },
  { src: BubbleLineup, fit: "contain", alt: "Bubble Boot online bootcamp poster listing the four speakers, including Suman Sourabh on the UI/UX track" },
  { src: LectureHall, fit: "cover", alt: "Presenting to a seated lecture hall audience" },
  { src: FigmaCert, fit: "contain", alt: "Certificate of appreciation as a speaker at the TechStack Figma Bootcamp, November 2022" },
];

const TALKS = [
  {
    title: "Psychology of Colours in Graphic Design",
    org: "SPADE · Lovely Professional University",
    when: "Sep 2023",
  },
  {
    title: "Figma Bootcamp",
    org: "TechStack",
    when: "Nov 2022",
  },
  {
    title: "Bubble Boot — UI/UX track",
    org: "BubbleUp Community",
    when: "Dec 2022",
  },
];

const Speaking = () => {
  return (
    <section
      id="speaking"
      aria-labelledby="speaking-heading"
      className="scroll-mt-24 bg-surface bg-dotfield py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-start">

          {/* The claim */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-5">
              Talks &amp; workshops
            </p>
            <h2
              id="speaking-heading"
              className="font-display text-4xl md:text-5xl font-normal text-ink leading-[1.1] [text-wrap:balance]"
            >
              I teach this,{" "}
              <span className="text-ink-faint italic">not just do it.</span>
            </h2>
            <p className="text-ink-muted text-[0.9375rem] leading-[1.7] mt-6 max-w-md">
              Three design workshops for students — colour theory, Figma, and taking an
              idea from a blank canvas to something you can click. Each for 150&ndash;200
              attendees, mostly full computer labs working along live. Explaining a
              decision to a room who has never made one is the fastest way to find out
              whether you actually understand it.
            </p>
          </div>

          {/* The record. Rows with a hairline, not three bordered cards with
              lime icon tiles — a list of three things is a list. */}
          <div>
            <dl>
              {TALKS.map((t) => (
                <div
                  key={t.title}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line py-5 first:border-t-0 first:pt-0"
                >
                  <dt className="text-ink text-[0.9375rem] font-medium">{t.title}</dt>
                  <dd className="text-[11px] uppercase tracking-[0.14em] text-ink-faint whitespace-nowrap">
                    {t.when}
                  </dd>
                  <dd className="w-full text-ink-faint text-[0.8125rem]">{t.org}</dd>
                </div>
              ))}
            </dl>

          </div>
        </div>

        {/* The rooms, at a size you can actually read. This is the community
            and teaching side of the record, so it gets real estate rather than
            a row of thumbnails — three across, full width of the measure. */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-14">
          {GALLERY.map((g) => (
            <div
              key={g.alt}
              className="relative overflow-hidden rounded-sm bg-surface-3 aspect-[4/3]"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                decoding="async"
                className={`w-full h-full ${g.fit === "contain" ? "object-contain p-3" : "object-cover"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaking;
