import Navbar from "../../Navbar";
import Footer from "../../Footer";
import SEO from "../../SEO";
import {
    Mail, Users, LayoutGrid, GitBranch, Globe,
    CheckCircle2, Palette, Bot, Target, Clock,
    Building2, ShieldCheck, Eye, BarChart3, Map, Timer
} from "lucide-react";

import SimfluentSlider from "./SimfluentSlider";
import {
    Badge, IconCard, Figure, Decision, MetaList, Finding, Note, NextCase,
} from "./CaseStudyUI";

// Curated screens — also used inline next to the decision each one proves.
import ShotDashboard from "../../../assets/simfluent/screens/1-Morning-triage-dashboard.png";
import ShotCandidates from "../../../assets/simfluent/screens/2-Candidate-list-with-match-scores.png";
import ShotPipeline from "../../../assets/simfluent/screens/3-Pipeline-with-aging-alerts.png";
import ShotRecord from "../../../assets/simfluent/screens/4-Parsed-candidate-record.png";
import ShotBreakdown from "../../../assets/simfluent/screens/5-Match-score-breakdown.png";
import ShotJdReview from "../../../assets/simfluent/screens/6-Parsed-job-awaiting-approval.png";
import ShotPosting from "../../../assets/simfluent/screens/7-Multi-board-posting-and-scoring-weights.png";
import ShotCardPattern from "../../../assets/simfluent/ui-card-pattern.png";

const Simfluent = () => {
    return (
        <div className="font-ui text-ink bg-surface">
            <SEO
                title="Simfluent: AI-Native Recruitment & Resource-Ops Platform — Product Design Case Study"
                description="Designing Simfluent (in progress) — a recruitment platform built around the real bottleneck: waiting. Email becomes a structured pipeline, SLAs surface stalled candidates, and Mavik, the AI layer, drafts jobs and scores résumés without ever deciding."
                keywords="product design case study, HR tech, ATS design, recruitment platform, AI-native UX, human in the loop, applicant tracking, design systems, B2B SaaS"
                canonicalUrl="https://www.sumansourabh.com/simfluent"
            />
            <Navbar />
            <main id="main">

            {/* ================= HERO ================= */}
            <section className="bg-surface bg-plusgrid pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Left-aligned, like every other page on the site. A centred
                        column here was the one place the site changed axis, and it
                        made the case study read as a separate microsite. */}
                    <div className="max-w-3xl mb-12">
                        <Badge>HR Tech &middot; B2B SaaS &middot; AI-Native</Badge>

                        <h1 className="font-display text-[3.25rem] md:text-7xl font-normal text-ink tracking-[-0.02em] leading-[0.95] mb-6">
                            Simfluent
                        </h1>
                        <p className="text-lg text-ink-muted leading-[1.6] max-w-2xl">
                            A recruitment and resource-operations platform for a staffing business placing
                            engineers with US companies. Built around the bottleneck nobody was tracking:
                            <span className="text-ink font-medium"> the time candidates spend waiting.</span>
                        </p>

                        <p className="mt-7 inline-flex items-center gap-2.5 text-[0.8125rem] text-ink-faint">
                            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-ink/40" />
                            In progress &mdash; shipping now
                        </p>
                    </div>

                    <img
                        src={ShotDashboard}
                        alt="Simfluent dashboard — a daily triage view showing active jobs, items needing action, and pending hiring-manager decisions"
                        className="rounded-sm w-full border border-line bg-surface-2"
                    />

                    {/* Was four bordered boxes in a row. Same four facts, read as a
                        caption under the screen rather than as a dashboard above it. */}
                    <MetaList
                        className="mt-12"
                        items={[
                            { term: "Company", value: "Shyftlabs" },
                            { term: "My role", value: "Product Designer" },
                            { term: "Users", value: "Recruiters, HMs, Leadership" },
                            { term: "Status", value: "Active build" },
                        ]}
                    />

                    <p className="mt-8 text-[0.8125rem] text-ink-faint leading-[1.7] max-w-2xl">
                        <span className="text-ink-ghost">Tools &middot; </span>
                        {["Figma", "Design Tokens", "React", "Tailwind CSS", "LLM / RAG", "Stakeholder Research"].join(" · ")}
                    </p>
                </div>
            </section>

            {/* ================= THE PROBLEM ================= */}
            <section className="bg-cream py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-16">
                        <Badge>The Problem</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight mb-6">
                            Hiring lived in inboxes.{" "}
                            <span className="text-ink-muted">Nobody could see the pipeline.</span>
                        </h2>
                        <p className="text-ink-muted text-base leading-relaxed mb-5">
                            Shyftlabs places specialists &mdash; developers, designers, data engineers, managers &mdash;
                            with US companies as a service, with roughly 150&ndash;200 people in motion at any time.
                            High-volume, multi-company hiring running in parallel, permanently.
                        </p>
                        <p className="text-ink-muted text-base leading-relaxed">
                            But the work lived across inboxes, spreadsheets, and job boards. There was no single
                            source of truth for <span className="text-ink font-medium">what stage a candidate was at,
                            which recruiter owned them, how work was distributed, or who was placed where</span>.
                            A status update meant forwarding an email thread. Leadership had no live view at all.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <IconCard icon={<Users size={18} className="text-ink-faint" />} title="Recruiters / HR">
                            An 8&ndash;10 person team owning candidates end to end &mdash; who needed their queue and
                            workload legible, not buried in mail.
                        </IconCard>
                        <IconCard icon={<Target size={18} className="text-ink-faint" />} title="Hiring Managers">
                            Track requested roles and see where each candidate actually is &mdash; without chasing.
                        </IconCard>
                        <IconCard icon={<Building2 size={18} className="text-ink-faint" />} title="Leadership / VP">
                            One live view of headcount, placements, and pipeline health &mdash; without asking anyone.
                        </IconCard>
                        <IconCard icon={<Globe size={18} className="text-ink-faint" />} title="Client Companies">
                            The US companies being staffed &mdash; their interviews and assignments feed the timeline.
                        </IconCard>
                    </div>
                </div>
            </section>

            {/* ================= RESEARCH & DEFINITION ================= */}
            <section className="bg-surface py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-16">
                        <Badge>Research & Definition</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight mb-6">
                            Screens came last.{" "}
                            <span className="text-ink-muted">The research came first.</span>
                        </h2>
                        <p className="text-ink-muted text-base leading-relaxed">
                            Simfluent wasn&apos;t designed from assumptions. It started as a research problem &mdash;
                            I partnered with the people who live hiring every day and benchmarked the whole category
                            before drawing a single screen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <IconCard icon={<Users size={18} className="text-ink-faint" />} title="Built with the people who own the problem">
                            Worked directly with the Senior VP who owns the business end to end &mdash; the bird&apos;s-eye
                            view and the direct line to the US client company &mdash; and the 8&ndash;10-person recruiting team
                            who&apos;d use this daily. Requirements came from the floor, not a brief.
                        </IconCard>
                        <IconCard icon={<Eye size={18} className="text-ink-faint" />} title="Watched behaviour, not just opinions">
                            Ran interviews and observed how recruiters actually work: which components they reached for,
                            what information they hunted for at each step, and which metrics genuinely drove decisions
                            versus which just filled a dashboard.
                        </IconCard>
                        <IconCard icon={<BarChart3 size={18} className="text-ink-faint" />} title="Benchmarked the category">
                            Studied established recruitment and ATS platforms &mdash; what they surface and measure &mdash;
                            then filtered hard: kept the metrics and patterns that fit our staffing model, cut the noise.
                            Simfluent shows what helps recruiters act, not everything it&apos;s possible to show.
                        </IconCard>
                        <IconCard icon={<Map size={18} className="text-ink-faint" />} title="Turned it into a map, then flows">
                            All of it fed a bird&apos;s-eye view of the platform and a prioritised feature list &mdash; the
                            backbone the flows and screens were designed against. Definition first; UI second.
                        </IconCard>
                    </div>
                </div>
            </section>

            {/* ================= THE INSIGHT ================= */}
            <section className="bg-cream py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-6">
                        <Badge>The Insight</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight mb-6">
                            The bottleneck wasn&apos;t sourcing.{" "}
                            <span className="text-ink-muted">It was waiting.</span>
                        </h2>
                        <p className="text-ink-muted text-base leading-relaxed mb-5">
                            Everyone assumed the problem was finding candidates. The research said otherwise:
                            candidates weren&apos;t being lost to a lack of applicants, they were dying in the
                            <span className="text-ink font-medium"> gaps between stages</span> &mdash; a hiring-manager
                            decision nobody chased, a shortlist deck never sent, an offer extended with no reply.
                        </p>
                        <p className="text-ink-muted text-base leading-relaxed">
                            Nothing in the old setup made that visible. An email thread has no concept of
                            &ldquo;this has been sitting for eleven days.&rdquo; So the design principle became:
                            <span className="text-ink font-medium"> make waiting impossible to ignore.</span>
                        </p>
                    </div>

                    {/* Evidence trio. Was three filled red panels — on a white page
                        that reads as an error state rather than as research. The
                        weighted rule carries "this is what was going wrong" without
                        the page sounding an alarm. */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-4">
                        <Finding value="Slowest stage" title="Hiring-manager decisions">
                            The stage that consistently ran past its target and held up everything downstream &mdash;
                            so it gets its own panel, its own SLA, and a visible count of what&apos;s pending.
                        </Finding>
                        <Finding value="Silent stalls" title="Nobody owned the follow-up">
                            Offers went out and simply went quiet. Decks were &ldquo;about to be sent&rdquo; for weeks.
                            No system flagged it, because no system knew a clock had started.
                        </Finding>
                        <Finding value="Invisible load" title="Uneven recruiter workload">
                            Some recruiters carried far more active candidates than others. Without a workload
                            view, rebalancing was guesswork &mdash; and the overloaded queue was where things stalled.
                        </Finding>
                    </div>

                    <Figure
                        src={ShotPipeline}
                        alt="Simfluent pipeline board — a candidate card is flagged in red with a tooltip reading 'This candidate is in HM Screening for more than 5 days'"
                        caption="The principle, applied: a candidate sitting too long in a stage turns red and says why. Time-in-stage stops being something you'd have to go looking for."
                    />
                </div>
            </section>

            {/* ================= DESIGN DECISIONS ================= */}
            <section className="bg-surface py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-20">
                        <Badge>How I&apos;m Designing It</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight">
                            Six decisions doing the heavy lifting.
                        </h2>
                    </div>

                    <Decision
                        n={1}
                        icon={<LayoutGrid size={20} className="text-ink-faint" />}
                        title="The dashboard answers “what needs me?” — not “how are we doing?”"
                    >
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl mb-5">
                            Benchmarking showed most platforms open on a wall of charts. Our recruiters didn&apos;t
                            need a scoreboard at 9am &mdash; they needed a queue. So the home screen opens on
                            <span className="text-ink font-medium"> what is blocked, what is waiting on you, and
                            what is about to breach</span>: items needing action, pending decisions, approvals and
                            feedback assigned to you, offers that have gone quiet, and today&apos;s interviews.
                        </p>
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl">
                            Every number on it is clickable into the thing it&apos;s about. A metric that can&apos;t
                            be acted on didn&apos;t earn its place &mdash; that was the filter I applied to everything
                            the competitive review turned up. A separate Organization view gives leadership the
                            bird&apos;s-eye read without cluttering a recruiter&apos;s morning.
                        </p>
                        <Figure
                            src={ShotCandidates}
                            alt="Simfluent candidate list showing stage, match score, role, notice period, salary and location per row, with stacked filters and bulk selection"
                            caption="One row, one decision: stage, match quality, role, notice period, cost and location are all scannable without opening anything. Filters stack — including by skill — so a recruiter can carve 47 candidates down to the handful worth a call, then act on them in bulk."
                        />
                    </Decision>

                    <Decision
                        n={2}
                        icon={<Timer size={20} className="text-ink-faint" />}
                        title="Time is a first-class citizen, not a timestamp."
                    >
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl">
                            Because waiting was the real failure mode, elapsed time is designed as data, not metadata.
                            Stages carry targets and show actual-versus-target. Cards age visibly and explain
                            themselves in plain language. Offers with no reply surface in their own list with a
                            one-tap nudge. Follow-ups escalate in levels rather than silently repeating. And an
                            SLA view exists specifically so &ldquo;how long has this been stuck?&rdquo; is never a
                            question someone has to ask a human.
                        </p>
                    </Decision>

                    <Decision
                        n={3}
                        icon={<Bot size={20} className="text-ink-faint" />}
                        title="AI drafts. Humans decide. The seam is always visible."
                    >
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl mb-5">
                            <span className="text-ink font-medium">Mavik</span>, the platform&apos;s AI layer, does real
                            work &mdash; it turns a pasted job description into a structured, editable job, scores incoming
                            résumés against the role, and answers plain-language questions about the pipeline. But
                            recruiters were openly sceptical of automated screening, and rightly so: a wrong score costs
                            someone a job. So every Mavik output lands in a state that is
                            <span className="text-ink font-medium"> labelled, reversible, and gated behind a person.</span>
                        </p>
                        <Figure
                            src={ShotJdReview}
                            alt="Simfluent AI-parsed job description in a pending-review state, with Deny, Re-Parse, Edit and Approve actions, and the original pasted text kept for comparison"
                            caption="A parsed job opens as a draft awaiting review — never published. AI-generated blocks are labelled as such, the original pasted text stays available to compare against, every extracted field is editable, and the only ways forward are Deny, Re-Parse, Edit, or Approve."
                        />
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl mb-5">
                            Scoring got the same treatment. A single number is a black box, so the score is
                            decomposed into the dimensions behind it and paired with an explicit read of both
                            sides &mdash; what this person is strong on, and where they fall short. A recruiter can
                            disagree with the weighting because they can <span className="text-ink font-medium">see</span> the weighting.
                        </p>
                        <Figure
                            src={ShotBreakdown}
                            alt="Simfluent AI analysis panel showing an overall match score broken into education, experience, technical competence and cross-functional skills, alongside identified strengths and gaps"
                            caption="The score shows its work: four weighted dimensions, a plain-language summary, and strengths and gaps side by side. Re-parse is one click away, and the assistant carries a standing 'verify important data' caveat."
                        />
                    </Decision>

                    <Decision
                        n={4}
                        icon={<GitBranch size={20} className="text-ink-faint" />}
                        title="One loop: draft a role, publish it everywhere, work the pipeline."
                    >
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl mb-5">
                            A role is drafted, approved, pushed to the boards candidates actually use, and then
                            worked &mdash; screening, assignments, interviews, offers &mdash; without ever leaving the
                            product. Each destination shows its own readiness state, so &ldquo;where is this live?&rdquo;
                            is answered on the page instead of in someone&apos;s memory.
                        </p>
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl">
                            The same screen exposes how the AI weights signals <span className="text-ink font-medium">for
                            that specific role</span> &mdash; technical depth versus compliance versus soft skills &mdash;
                            plus concrete suggestions for improving the description and a checklist of fields still
                            missing. The job page becomes the control panel for the role, not a static posting.
                        </p>
                        <Figure
                            src={ShotPosting}
                            alt="Simfluent job page showing multi-board distribution with per-board readiness states, per-role AI scoring weights, suggestions to improve the job description, and a list of missing fields"
                            caption="Distribution and intelligence on one surface: per-board publish states, the role's own scoring weights, JD improvement suggestions, and the fields still missing."
                        />
                    </Decision>

                    <Decision
                        n={5}
                        icon={<Mail size={20} className="text-ink-faint" />}
                        title="Email becomes the record — without becoming the interface."
                    >
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl mb-5">
                            Hiring conversations happen in mail across internal and client companies, and that
                            wasn&apos;t going to change. So Simfluent ingests them and files each event against the
                            right candidate and role &mdash; interview times, assignments, stage changes &mdash; building
                            the timeline nobody was maintaining by hand.
                        </p>
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl mb-5">
                            The design problem isn&apos;t the happy path, it&apos;s trust. So parsing is
                            <span className="text-ink font-medium"> inspectable and re-runnable</span>: the
                            underlying messages stay attached to the record, ingestion is exposed as a control rather
                            than hidden magic, and a recruiter can re-parse when something lands wrong. And because
                            one candidate is read many different ways, the record is a set of lenses over a single
                            entity &mdash; parsed résumé, AI analysis, screening, documents, interviews, emails, notes,
                            team &mdash; opened over the list, with paging, so nobody loses their place in a queue of 47.
                        </p>
                        <Figure
                            src={ShotRecord}
                            alt="Simfluent candidate record opened over the candidate list, showing the parsed résumé, quick facts, matched skills and gaps, and status including time in stage"
                            caption="One entity, many lenses — opened over the list with 1-of-47 paging. Quick facts, matched skills versus gaps, and time-in-stage sit beside the parsed résumé."
                        />
                    </Decision>

                    <Decision
                        n={6}
                        icon={<Palette size={20} className="text-ink-faint" />}
                        title="A design system underneath — because it keeps growing."
                    >
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl mb-5">
                            A live product that keeps adding surfaces drifts fast. The UI sits on tokens &mdash; a full
                            primary ramp, typography, spacing &mdash; and on a small number of repeatable patterns
                            rather than bespoke screens. The candidate card, the job card, the assignment row and the
                            pipeline card are all the same underlying object: an optional score, a title, a set of
                            labelled details, one primary action.
                        </p>
                        <Figure
                            src={ShotCardPattern}
                            alt="The abstract card pattern behind Simfluent's list and board views: an optional score chip, a name or title, labelled detail rows, and a single call to action"
                            caption="The pattern every list and board card resolves to. Defining it once is why a new surface takes an afternoon instead of a sprint — and why density stays consistent across the product."
                        />
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl">
                            Status is the other half of the system. Stage, match quality, workload and risk all use a
                            consistent, colour-coded vocabulary, so a recruiter learns the language once and reads it
                            everywhere &mdash; and colour is never the only signal carrying the meaning.
                        </p>
                    </Decision>
                </div>
            </section>

            {/* ================= SCREEN FLOW ================= */}
            <section className="bg-cream py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-10">
                        <Badge>The Product</Badge>
                        <h2 className="font-display text-3xl md:text-4xl font-normal text-ink leading-tight mb-4">
                            Simfluent, screen by screen.
                        </h2>
                        <p className="text-ink-muted text-base leading-relaxed">
                            The current shape of the product, in the order a recruiter meets it &mdash; triage,
                            candidates, pipeline, the record, and Mavik&apos;s parsing, scoring and analytics on top.
                        </p>
                    </div>

                    <SimfluentSlider />

                    <p className="text-ink-ghost text-xs mt-6 max-w-2xl">
                        All candidate data shown throughout this case study is AI-generated sample data &mdash; no real
                        candidate information appears in any screen.
                    </p>
                </div>
            </section>

            {/* ================= WHERE IT STANDS ================= */}
            <section className="bg-surface py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-12">
                        <Badge>Where It Stands</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight mb-6">
                            Shipping now &mdash; so no vanity metrics.
                        </h2>
                        <p className="text-ink-muted text-base leading-relaxed">
                            Simfluent is in active development. I&apos;m not going to attach polished outcome numbers to a
                            product that&apos;s still landing &mdash; the value here is the systems design and the
                            AI-interaction patterns. Here&apos;s an honest split of where things are.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                        <div className="border-t border-line pt-6">
                            <div className="flex items-center gap-2 mb-5">
                                <CheckCircle2 size={16} className="text-ink-faint" />
                                <p className="text-ink text-[11px] uppercase tracking-[0.18em]">Designed &amp; in build</p>
                            </div>
                            <ul className="space-y-3 text-ink-muted text-sm leading-relaxed">
                                <li>&bull; Triage dashboard, with a separate organisation-wide view</li>
                                <li>&bull; Candidate list, pipeline board, and the tabbed candidate record</li>
                                <li>&bull; Jobs: draft &rarr; review &rarr; multi-board posting &rarr; screening and assignments</li>
                                <li>&bull; AI job parsing with an explicit human approval gate</li>
                                <li>&bull; Decomposed match scoring with strengths, gaps, and per-role weights</li>
                                <li>&bull; Email ingestion into the candidate timeline, with re-parsing</li>
                                <li>&bull; SLA and aging surfaces; escalating follow-ups</li>
                                <li>&bull; Workload and ownership views; conversational analytics</li>
                                <li>&bull; The token-based design system and card patterns</li>
                            </ul>
                        </div>
                        <div className="border-t border-line pt-6">
                            <div className="flex items-center gap-2 mb-5">
                                <Clock size={16} className="text-ink-faint" />
                                <p className="text-ink text-[11px] uppercase tracking-[0.18em]">Still ahead</p>
                            </div>
                            <ul className="space-y-3 text-ink-muted text-sm leading-relaxed">
                                <li>&bull; Resource management &mdash; who&apos;s placed where, across clients</li>
                                <li>&bull; Deeper leadership analytics and active workload rebalancing</li>
                                <li>&bull; Hardening the review-and-correct UX for mis-parsed email</li>
                                <li>&bull; Onboarding and offer flows to the same depth as screening</li>
                                <li>&bull; Usability testing with recruiters once the flows stabilise</li>
                                <li>&bull; Measured outcomes &mdash; added here honestly once there&apos;s real data</li>
                            </ul>
                        </div>
                    </div>

                    {/* What I'd do differently */}
                    <Note label="Caught in review" className="mt-14">
                        Shipping features at different times let the AI pick up more than one name across the
                        product &mdash; you&apos;ll still spot an older label in some of the screens above. Small
                        thing, but it reads as a big one: users shouldn&apos;t have to wonder whether they&apos;re
                        dealing with one system or three. We&apos;ve settled on <span className="text-ink font-medium">Mavik</span> as
                        the single name, and aligning the remaining surfaces and microcopy is in the queue.
                    </Note>

                    {/* Design signal. Was a lime panel — the last filled block on
                        the page, and the loudest thing on it. The closing argument
                        earns its weight from being set large, not from a fill. */}
                    <div className="mt-16 border-t border-line pt-10">
                        <div className="flex items-center gap-2 mb-5">
                            <ShieldCheck size={16} className="text-ink-faint" />
                            <p className="text-ink-faint text-[11px] uppercase tracking-[0.18em]">Why this one matters</p>
                        </div>
                        <p className="font-display font-normal text-ink text-[1.5rem] md:text-[2rem] leading-[1.3] tracking-[-0.01em] max-w-3xl [text-wrap:balance]">
                            This is the messiest, most real problem in the portfolio &mdash; multi-role, high-volume,
                            email-driven, AI-assisted, shipping under real constraints. The design work here is less
                            about a beautiful screen and more about making a complex operational system legible,
                            trustworthy, and honest about time.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= NEXT CASE STUDY ================= */}
            <NextCase to="/atlas" title="Atlas: CMS Architecture Across 130+ Locations" />
            </main>
            <Footer />
        </div>
    );
};

export default Simfluent;
