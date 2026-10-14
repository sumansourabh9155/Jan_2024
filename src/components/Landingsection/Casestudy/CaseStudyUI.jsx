import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * The shared vocabulary for every case study.
 *
 * All five pages had byte-identical private copies of Badge, StatCard,
 * IconCard and Decision — so "consistent" was a coincidence that held only
 * until someone edited one file. These are the same components, defined once.
 *
 * ── The type rule ───────────────────────────────────────────────────────
 *
 * Serif at display sizes, for chapter openings only. Everywhere else, Inter.
 *
 * These case studies are about enterprise software — a retail-media DSP, an
 * HR platform, a 130-clinic CMS. Setting their decision titles and their
 * metrics in Instrument Serif would give systems work a magazine-feature
 * voice, which is the wrong register for the content. It would also misuse
 * the face: Instrument Serif is a display cut, high contrast, drawn to be set
 * large. At 1.5rem on a card title it reads as decoration.
 *
 * So the serif carries the project name and the section heads — the points
 * where the portfolio's own voice opens a chapter, and the thread back to the
 * landing page. The analytical layer underneath it stays sans:
 *
 *   h1, h2 ................ font-display, 400
 *   h3, h4, metrics ....... font-ui, 500
 *
 * Case studies therefore use *less* serif than the landing page, deliberately.
 *
 * `font-heading`, which these pages used 78 times, was never defined in
 * tailwind.config — it silently resolved to the body font. The sans register
 * below is the one the pages have always rendered in; this just says so.
 */

/* ── Eyebrow ─────────────────────────────────────────────────────────────
   Still exported as `Badge` so the call sites don't all have to move. Was a
   lime chip in monospace wrapped in [ brackets ]; six of those per page is a
   terminal UI, not a portfolio. */
export const Badge = ({ children }) => (
  <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-5">
    {children}
  </p>
);

/* A marker inside a chapter — quieter again, so a decision doesn't read as a
   chapter of its own. */
export const SubLabel = ({ children }) => (
  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-ghost mb-4">
    {children}
  </p>
);

/* ── Section head ────────────────────────────────────────────────────────
   Eyebrow + h2 + intro: the trio that opens nearly every section. The one
   place on these pages the serif is set large enough to earn its keep. */
export const SectionHead = ({ label, title, children, className = "" }) => (
  <div className={`max-w-3xl ${className}`}>
    {label && <Badge>{label}</Badge>}
    <h2 className="font-display font-normal text-ink text-4xl md:text-5xl leading-[1.1] tracking-[-0.01em] [text-wrap:balance]">
      {title}
    </h2>
    {children && <div className="mt-6">{children}</div>}
  </div>
);

/* ── Figures ─────────────────────────────────────────────────────────────
   `rounded-sm`, not `rounded-2xl`: these are screenshots of rectangular
   software, and a 16px radius clips the corners of the UI being shown. */
export const Figure = ({ src, alt, caption, className = "" }) => (
  <figure className={`my-12 ${className}`}>
    <img
      loading="lazy"
      decoding="async"
      src={src}
      alt={alt}
      className="rounded-sm w-full border border-line bg-surface-2"
    />
    {caption && (
      <figcaption className="text-ink-faint text-[0.8125rem] mt-4 max-w-2xl leading-[1.7]">
        {caption}
      </figcaption>
    )}
  </figure>
);

/* ── Cards ───────────────────────────────────────────────────────────────
   Hairline above, not a box around. The icon survives as a small neutral
   glyph — it still helps the eye find the start of each block, which is what
   it was for, but six icon colours on one page was colour-coding nothing. */
export const IconCard = ({ icon, title, children }) => (
  <div className="border-t border-line pt-5">
    {icon && <div className="text-ink-faint mb-3">{icon}</div>}
    <h4 className="font-ui text-ink text-[0.9375rem] font-medium mb-2 leading-snug">
      {title}
    </h4>
    <p className="text-ink-muted text-[0.8125rem] leading-[1.7]">{children}</p>
  </div>
);

/* A number that matters. Sans and tabular, not serif: these are figures to be
   read and compared, and the lining numerals in a display serif are harder
   work at a glance than Inter's.

   Set at display size. Everything on these pages lives between 11px and 28px,
   so at 2rem an outcome was the same weight as a card title and the eye had no
   reason to stop. A result is the thing a recruiter is scanning for — it gets
   its own register, and a full-ink rule above it rather than a hairline. */
export const StatCard = ({ value, label, icon }) => (
  <div className="border-t-2 border-ink pt-6">
    {icon && <div className="text-ink-faint mb-4">{icon}</div>}
    <p className="font-ui font-medium text-ink text-[2.75rem] sm:text-[3.25rem] leading-[0.9] tracking-[-0.035em] tabular">
      {value}
    </p>
    <p className="text-[0.8125rem] text-ink-muted leading-[1.6] mt-4 max-w-[24ch]">{label}</p>
  </div>
);

/* ── Decision block ──────────────────────────────────────────────────────
   Sans: this is the analytical layer, and a decision title is an argument,
   not a chapter. `tone` is still accepted at the call sites and deliberately
   ignored — it carried the per-decision tile colour this pass removes. */
export const Decision = ({ n, icon, title, children, collapsible = false, open = false }) => {
  const head = (
    <>
      <div className="flex items-center gap-3 mb-5">
        {icon && <span className="text-ink-faint">{icon}</span>}
        <span className="text-[11px] uppercase tracking-[0.18em] text-ink-ghost tabular">
          Decision {String(n).padStart(2, "0")}
        </span>
      </div>
      <h3 className="font-ui font-medium text-ink text-[1.5rem] md:text-[1.875rem] mb-5 max-w-3xl leading-[1.25] tracking-[-0.02em] [text-wrap:balance]">
        {title}
      </h3>
    </>
  );

  // A run of seven decisions is ten screens of scrolling, and the titles are
  // already the argument — "AI drafts, humans decide", "time is a first-class
  // citizen". Collapsed, the whole section becomes a readable list of calls
  // made, and the evidence for any one of them is a click away.
  //
  // The first is left open so the pattern is obvious: a reader can see what is
  // behind one before deciding whether to open the rest.
  if (!collapsible) {
    return (
      <div className="mb-20">
        {head}
        {children}
      </div>
    );
  }

  return (
    <div className="mb-10 border-t border-line pt-6">
      {head}
      <details className="group" open={open}>
        <summary className="reveal-summary flex items-center justify-between gap-5 cursor-pointer py-2 text-left">
          <span className="text-[0.9375rem] text-ink-muted group-hover:text-ink transition-colors">
            <span className="group-open:hidden">Read the detail</span>
            <span className="hidden group-open:inline">Hide the detail</span>
          </span>
          <span
            aria-hidden="true"
            className="shrink-0 text-ink-faint text-lg leading-none transition-transform duration-200 group-open:rotate-45 group-hover:text-ink"
          >
            +
          </span>
        </summary>
        <div className="pt-4">{children}</div>
      </details>
    </div>
  );
};

/* ── Project metadata ────────────────────────────────────────────────────
   Role, company, users, status. Was four bordered boxes in a row; a
   definition list says the same thing without opening on a dashboard. */
export const MetaList = ({ items, className = "", cols = "md:grid-cols-4" }) => (
  <dl
    className={`grid grid-cols-2 ${cols} gap-x-8 gap-y-8 border-t border-line pt-8 ${className}`}
  >
    {items.map(({ term, value }) => (
      <div key={term}>
        <dt className="text-[11px] uppercase tracking-[0.18em] text-ink-faint mb-2">
          {term}
        </dt>
        <dd className="text-ink text-[0.9375rem] leading-snug">{value}</dd>
      </div>
    ))}
  </dl>
);

/* ── A finding worth flagging ────────────────────────────────────────────
   Replaces the filled red cards. Three red panels in a row on a white page
   read as an error state rather than as research, so the severity is carried
   by a weighted rule instead — the only 2px rule on the page.

   The three-part hierarchy is the one these blocks already had: the figure
   ("0", "12", "Zero", "Stalled drafts"), the subject it belongs to, and the
   explanation. Sans and tabular, because half of them are numerals and they
   are meant to be compared down the row. */
export const Finding = ({ value, title, icon, children }) => (
  // A lighter rule than StatCard's, and a smaller figure. These are the
  // problems; they set up the outcomes rather than competing with them.
  <div className="border-t-2 border-ink/45 pt-5">
    {icon && <div className="text-ink-faint mb-3">{icon}</div>}
    <p className="font-ui font-medium text-ink text-[2rem] leading-[1.05] tracking-[-0.03em] tabular mb-3 [text-wrap:balance]">
      {value}
    </p>
    <h4 className="font-ui font-medium text-ink text-[0.9375rem] leading-snug mb-2">
      {title}
    </h4>
    <p className="text-ink-muted text-[0.8125rem] leading-[1.7]">{children}</p>
  </div>
);

/* A quiet aside — an admission, a caveat, a note to the reader. */
export const Note = ({ label, children, className = "" }) => (
  <div className={`border-l-2 border-line-strong pl-5 py-1 max-w-3xl ${className}`}>
    {label && (
      <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint mb-2">
        {label}
      </p>
    )}
    <p className="text-ink-muted text-[0.875rem] leading-[1.7]">{children}</p>
  </div>
);

/* ── The short version ───────────────────────────────────────────────────
   Problem, call, ownership, outcome — the whole arc before any detail, for
   the reader who gets one screen and decides from it. Carter had this block
   and the other four didn't; it is the single most useful thing on the page
   for someone scanning, so it is a component now rather than one page's good
   idea.

   `rows` is a plain list so each study can name its own fourth row: a
   shipped project ends on "The outcome", one that was stopped ends on
   "Why it stopped", and neither has to pretend to be the other. */
export const ShortVersion = ({ rows, label = "The short version", className = "" }) => (
  <div className={`max-w-3xl border-t border-line pt-6 ${className}`}>
    <p className="text-[11px] text-ink-faint tracking-[0.18em] uppercase mb-6">{label}</p>
    <dl className="space-y-5">
      {rows.map((row) => (
        <div key={row.k} className="flex flex-col sm:flex-row gap-1 sm:gap-6">
          <dt className="text-[11px] text-ink-faint uppercase tracking-[0.18em] sm:w-36 shrink-0 sm:pt-1">
            {row.k}
          </dt>
          <dd className="text-ink-muted text-sm leading-relaxed">{row.v}</dd>
        </div>
      ))}
    </dl>
  </div>
);

/* ── Contents ────────────────────────────────────────────────────────────
   A case study that runs to 1,800 words needs a way in other than scrolling.
   Anchors, not state: they survive a page reload, they can be linked to
   directly, and they work with the browser's own back button. */
export const Contents = ({ items, className = "" }) => (
  <nav aria-label="On this page" className={`border-t border-line pt-6 ${className}`}>
    <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-5">
      On this page
    </p>
    <ol className="flex flex-wrap gap-x-7 gap-y-3">
      {items.map(({ to, label }, i) => (
        <li key={to} className="flex items-baseline gap-2">
          <span className="text-[11px] text-ink-ghost tabular">
            {String(i + 1).padStart(2, "0")}
          </span>
          <a
            href={`#${to}`}
            className="text-[0.9375rem] text-ink border-b border-line-strong hover:border-ink transition-colors pb-0.5"
          >
            {label}
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

/* ── Progressive disclosure ──────────────────────────────────────────────
   The reasoning behind a decision is the part that proves the work was
   thought through — and the part a recruiter scanning for thirty seconds
   will never read. Collapsed, it stops being a wall and starts being an
   offer: here is the call, open it if you want to see the working.

   A native <details> rather than React state, on purpose:
     · it works with JavaScript disabled, which matters on a site that
       currently renders nothing without it
     · the content stays in the DOM, so it is still indexed and still
       reachable by the browser's own find-in-page
     · keyboard and screen-reader behaviour comes free and correct

   The marker is a rotating plus, which reads as "more" in a page that has
   no other icons. */
export const Reveal = ({ summary, children, className = "" }) => (
  <details className={`group border-t border-line ${className}`}>
    <summary className="reveal-summary flex items-center justify-between gap-5 cursor-pointer py-4 text-left">
      <span className="text-[0.9375rem] text-ink-muted group-hover:text-ink transition-colors">
        {summary}
      </span>
      <span
        aria-hidden="true"
        className="shrink-0 text-ink-faint text-lg leading-none transition-transform duration-200 group-open:rotate-45 group-hover:text-ink"
      >
        +
      </span>
    </summary>
    <div className="pb-8 -mt-1">{children}</div>
  </details>
);

/* ── End-of-page link to the next study ──────────────────────────────────
   The lime pill went the way of the one in the nav. This is the same control
   the landing page uses for "Read the case study". The title is serif: it is
   the name of the next chapter, which is exactly what the serif is for. */
export const NextCase = ({ to, title }) => (
  <section className="bg-surface px-6 py-16">
    <div className="max-w-6xl mx-auto border-t border-line pt-10">
      <Link
        to={to}
        className="group flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-3">
            Next case study
          </p>
          <p className="font-display font-normal text-ink text-[1.75rem] sm:text-[2.125rem] leading-[1.15] tracking-[-0.01em] [text-wrap:balance] max-w-2xl">
            {title}
          </p>
        </div>
        <span className="shrink-0 inline-flex items-center gap-2 bg-ink text-surface px-6 py-3 rounded-full text-[0.9375rem] font-medium group-hover:bg-ink-soft transition-colors duration-200">
          Read it
          <ArrowRight
            size={16}
            className="group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </span>
      </Link>
    </div>
  </section>
);
