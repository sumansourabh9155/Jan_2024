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
   work at a glance than Inter's. */
export const StatCard = ({ value, label, icon }) => (
  <div className="border-t border-line pt-5">
    {icon && <div className="text-ink-faint mb-3">{icon}</div>}
    <p className="font-ui font-medium text-ink text-[2rem] leading-none tracking-[-0.02em] tabular">
      {value}
    </p>
    <p className="text-[0.8125rem] text-ink-muted leading-[1.6] mt-3">{label}</p>
  </div>
);

/* ── Decision block ──────────────────────────────────────────────────────
   Sans: this is the analytical layer, and a decision title is an argument,
   not a chapter. `tone` is still accepted at the call sites and deliberately
   ignored — it carried the per-decision tile colour this pass removes. */
export const Decision = ({ n, icon, title, children }) => (
  <div className="mb-20">
    <div className="flex items-center gap-3 mb-5">
      {icon && <span className="text-ink-faint">{icon}</span>}
      <span className="text-[11px] uppercase tracking-[0.18em] text-ink-ghost tabular">
        Decision {String(n).padStart(2, "0")}
      </span>
    </div>
    <h3 className="font-ui font-medium text-ink text-[1.5rem] md:text-[1.875rem] mb-5 max-w-3xl leading-[1.25] tracking-[-0.02em] [text-wrap:balance]">
      {title}
    </h3>
    {children}
  </div>
);

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
  <div className="border-t-2 border-ink/70 pt-5">
    {icon && <div className="text-ink-faint mb-3">{icon}</div>}
    <p className="font-ui font-medium text-ink text-[1.75rem] leading-[1.1] tracking-[-0.02em] tabular mb-3 [text-wrap:balance]">
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
