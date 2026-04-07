import { useState, useRef, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// ════════════════════════════════════════
// DATA
// ════════════════════════════════════════
const CARDS = [
  // ── OBSERVE ──
  { q: "What specifically happened — in observable terms?", back: "Strip away all judgment and interpretation. Describe only what a camera would record. This one habit changes everything.", use: "Before any reaction. Before you reply to that email. Before the 1:1.", cat: "observe", src: "Nonviolent Communication", book: "Rosenberg" },
  { q: "What did they actually do — not what you think they meant by it?", back: "Intent is invisible. Behavior is observable. Separate the two or you'll solve the wrong problem.", use: "When you're frustrated with someone. When 'they always...' enters your head.", cat: "observe", src: "Crucial Conversations", book: "Patterson et al." },
  { q: "What data do I have? What part is fact and what part is my inference?", back: "We weave facts and stories together so seamlessly we can't tell them apart. Untangle them.", use: "Before making a strategic call. When presenting to the board.", cat: "observe", src: "Asking the Right Questions", book: "Browne & Keeley" },
  { q: "What did the customer actually do — not what they said they'd do?", back: "People lie in customer conversations. Not maliciously — they just can't predict their own behavior. Only past actions are reliable data.", use: "After any customer call. When reviewing feature requests.", cat: "observe", src: "The Mom Test", book: "Fitzpatrick" },
  { q: "What would a video camera have recorded?", back: "This forces you out of your narrative and into reality. Your story about what happened is not what happened.", use: "When you're about to tell someone 'what happened' in a conflict.", cat: "observe", src: "Crucial Conversations", book: "Patterson et al." },
  { q: "What changed recently that I haven't noticed?", back: "Humans normalize gradual change — the boiling frog. Systems drift slowly. The most dangerous shifts are the ones nobody remarked on.", use: "Quarterly reviews. When metrics feel 'fine' but something feels off.", cat: "observe", src: "Thinking in Systems", book: "Meadows" },
  { q: "Who is not in the room — and what would they say?", back: "Every meeting has missing perspectives. The absent voice often holds the most critical information. Their silence shapes the outcome.", use: "Leadership meetings. Strategy sessions. Any decision affecting people not present.", cat: "observe", src: "Humble Inquiry", book: "Schein" },
  { q: "What are people doing when nobody is watching?", back: "Stated values mean nothing. Revealed preferences — how people behave when there's no audience — tell you the truth about a culture, a team, or a market.", use: "Evaluating culture. Assessing product-market fit. Reading a room.", cat: "observe", src: "The Mom Test", book: "Fitzpatrick" },
  { q: "What patterns keep repeating that everyone has accepted as normal?", back: "The most dangerous problems are the ones nobody sees as problems anymore. Drift to low performance normalizes dysfunction. Name the pattern to break it.", use: "Team retrospectives. When joining a new org. When things feel 'stuck' but nobody can say why.", cat: "observe", src: "Thinking in Systems", book: "Meadows" },
  { q: "What story am I telling myself about this situation?", back: "Between what happened and how you feel, there's a story you invented. The story is not the truth. Separate See → Story → Feel, and you regain control.", use: "When emotions are running high. When you're about to react. The gap between stimulus and response.", cat: "observe", src: "Crucial Conversations", book: "Patterson et al." },

  // ── INQUIRE ──
  { q: "What don't I know that I need to know?", back: "The most dangerous gap isn't what you know is missing — it's what you don't realize you're missing.", use: "At the start of any decision. Before committing resources.", cat: "inquire", src: "Humble Inquiry", book: "Schein" },
  { q: "And what else?", back: "The most powerful coaching question in existence. First answers are rarely the real answers. Ask this 2-3 times. Then once more.", use: "Every conversation. Every problem. No exceptions.", cat: "inquire", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "Wait — what?", back: "The root of all understanding. Pause before reacting. Clarify before concluding. Most mistakes come from skipping this.", use: "The moment you feel certain. That's exactly when you need this most.", cat: "inquire", src: "Wait, What?", book: "Ryan" },
  { q: "What am I not being told?", back: "People withhold when they don't feel safe. Silence isn't agreement — it's often the most important signal in the room.", use: "When everyone nods too quickly. When meetings are too smooth.", cat: "inquire", src: "Crucial Conversations", book: "Patterson et al." },
  { q: "What question is nobody asking?", back: "The unasked question often holds the most leverage. Innovation lives in the space between what's discussed and what's avoided.", use: "Strategy sessions. Retrospectives. Any meeting that feels stuck.", cat: "inquire", src: "A More Beautiful Question", book: "Berger" },
  { q: "What would I need to hear to prove myself wrong?", back: "If you can't answer this, your mind is already closed. Strong opinions, weakly held — starts with knowing your falsification criteria.", use: "When you're 'sure' about something. Especially then.", cat: "inquire", src: "Asking the Right Questions", book: "Browne & Keeley" },
  { q: "I wonder why... I wonder if...", back: "'I wonder why' drives discovery. 'I wonder if' opens possibility. Both bypass the ego that blocks genuine curiosity.", use: "Reframe any stuck thought. Replace 'I know' with 'I wonder'.", cat: "inquire", src: "Wait, What?", book: "Ryan" },
  { q: "What have I not tried yet?", back: "When stuck, we rehearse the same approaches with more intensity. Stop pushing harder on the same door. Look for a different door.", use: "When brute force isn't working. When you've tried the 'obvious' twice.", cat: "inquire", src: "A More Beautiful Question", book: "Berger" },
  { q: "Who has solved this before — in a completely different domain?", back: "Cross-pollination beats expertise. The solution to your logistics problem might come from biology. The solution to your team problem might come from game theory.", use: "When your industry's best practices have run dry. When you need a breakthrough.", cat: "inquire", src: "The Great Mental Models", book: "Parrish" },
  { q: "What's the question behind the question?", back: "When someone asks 'Can we get this done by Friday?' they might really be asking 'Am I going to look bad in front of my boss?' Find the real question.", use: "When a request feels disproportionate to the situation. When someone is pushing too hard on something small.", cat: "inquire", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "If I knew the answer, what would it be?", back: "Sometimes you already know but are afraid to admit it. This question bypasses analysis paralysis and surfaces your gut intuition for examination.", use: "When you're overthinking. When you've been going in circles for days.", cat: "inquire", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "What would this look like if it were easy?", back: "We over-complicate by default. The question forces you to strip a problem to its essence and question whether all the complexity is truly necessary.", use: "When planning feels overwhelming. When scope keeps creeping.", cat: "inquire", src: "A More Beautiful Question", book: "Berger" },

  // ── ANALYZE ──
  { q: "What would make this situation worse on purpose?", back: "Inversion. Think backwards. The fastest way to find what matters is to imagine deliberately destroying it. Whatever you'd attack — that's what you need to protect.", use: "Strategy, hiring, product decisions. Flip the question.", cat: "analyze", src: "The Great Mental Models", book: "Parrish" },
  { q: "And then what?", back: "Second-order thinking. Every action has consequences, and those consequences have consequences. Most people stop at step one.", use: "Before any policy change, pricing decision, or organizational shift.", cat: "analyze", src: "The Great Mental Models", book: "Parrish" },
  { q: "What system is producing this outcome?", back: "Don't blame the players — study the game. Behavior emerges from structure. Change the structure, change the behavior.", use: "When the same problem keeps recurring. When 'fixing' never sticks.", cat: "analyze", src: "Thinking in Systems", book: "Meadows" },
  { q: "Where is the feedback loop?", back: "Reinforcing loops amplify (growth or collapse). Balancing loops stabilize. Every persistent pattern has a loop driving it. Find it.", use: "Churn problems. Growth stalls. Team dynamics that won't shift.", cat: "analyze", src: "Thinking in Systems", book: "Meadows" },
  { q: "What am I assuming right now?", back: "Your mental model is not reality. The map is not the territory. Name your assumptions explicitly or they'll run your decisions invisibly.", use: "Always. This is the universal question. Tattoo it on your brain.", cat: "analyze", src: "The Great Mental Models", book: "Parrish" },
  { q: "What's the simplest explanation?", back: "Occam's Razor. Before building elaborate theories, check the obvious. Most problems have mundane causes. Don't create complexity where none exists.", use: "Debugging. Diagnosing churn. When theories multiply.", cat: "analyze", src: "The Great Mental Models", book: "Parrish" },
  { q: "What rival causes could explain this equally well?", back: "Your favorite explanation isn't the only one. Generate at least two alternatives before committing to one. Correlation is not causation.", use: "When interpreting data. When someone presents a confident narrative.", cat: "analyze", src: "Asking the Right Questions", book: "Browne & Keeley" },
  { q: "Am I solving the symptom or the structure?", back: "Symptomatic fixes feel good but weaken the system's capacity to self-correct. Every band-aid you apply makes the next one more necessary.", use: "When you're firefighting. When 'quick fixes' keep piling up.", cat: "analyze", src: "Thinking in Systems", book: "Meadows" },
  { q: "Where is the delay in this system?", back: "Delays between action and result cause most policy failures. You act, see no change, act harder — then the delayed effect of both hits at once. Overshoot and collapse.", use: "When impatience drives escalation. Hiring, marketing, culture change — all have long delays.", cat: "analyze", src: "Thinking in Systems", book: "Meadows" },
  { q: "What is being optimized — and at the expense of what?", back: "Every optimization has a shadow cost. Efficiency kills resilience. Speed kills quality. Growth kills culture. Name the trade-off or it'll name itself later.", use: "When KPIs are 'great' but something feels off. When optimizing one metric degrades another.", cat: "analyze", src: "Thinking in Systems", book: "Meadows" },
  { q: "Am I inside my circle of competence — or pretending?", back: "The edge of your competence is where expensive mistakes live. Knowing what you don't know is more valuable than what you do know.", use: "When making decisions in unfamiliar territory. When ego says 'I've got this' but evidence says otherwise.", cat: "analyze", src: "The Great Mental Models", book: "Parrish" },
  { q: "What would a pre-mortem reveal?", back: "Imagine it's 6 months from now and this failed spectacularly. What went wrong? This surfaces risks that optimism hides. Prospective hindsight is 30% more accurate.", use: "Before launching anything. Before committing significant resources.", cat: "analyze", src: "The Great Mental Models", book: "Parrish" },

  // ── FRAME ──
  { q: "What's the real challenge here for you?", back: "The presenting problem is almost never the real problem. This question cuts through the noise to what actually needs solving. The 'for you' makes it personal and specific.", use: "Every 1:1. Every coaching conversation. Ask yourself this daily.", cat: "frame", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "Why does this matter? And why does that matter?", back: "Go three levels deep. Surface reasons hide root motivations. You can't solve a problem you haven't truly understood the stakes of.", use: "Before committing your team to anything. Before saying yes.", cat: "frame", src: "A More Beautiful Question", book: "Berger" },
  { q: "What do I actually want here — for me, for them, for the relationship?", back: "Start with heart. Most failed conversations fail because people lose sight of what they actually wanted and start playing to win instead.", use: "Before any difficult conversation. When emotions are running hot.", cat: "frame", src: "Crucial Conversations", book: "Patterson et al." },
  { q: "If I could only fix one thing, which one unlocks the rest?", back: "Leverage. Not all problems are equal. Find the domino that topples the others. Everything else is distraction.", use: "Quarterly planning. When the to-do list is overwhelming.", cat: "frame", src: "Thinking in Systems", book: "Meadows" },
  { q: "What need is not being met?", back: "Every complaint, every frustration, every conflict — underneath it is an unmet need. Find the need and the solution often reveals itself.", use: "Customer complaints. Team frustration. Your own restlessness.", cat: "frame", src: "Nonviolent Communication", book: "Rosenberg" },
  { q: "Am I solving the right problem?", back: "The most expensive mistake isn't a bad solution — it's a brilliant solution to the wrong problem. Reframe before you solve.", use: "The question to ask before every other question.", cat: "frame", src: "A More Beautiful Question", book: "Berger" },
  { q: "How might we...?", back: "Three magic words. 'How' assumes solvability. 'Might' gives permission to fail. 'We' makes it collaborative. This reframe turns complaints into design challenges.", use: "When framing any problem for a team. When brainstorming. When a problem feels impossible.", cat: "frame", src: "A More Beautiful Question", book: "Berger" },
  { q: "What would have to be true for this to work?", back: "Instead of debating whether something will work, list the conditions required. Then test each one. This converts arguments into experiments.", use: "Strategy debates. When two people disagree. When evaluating risky bets.", cat: "frame", src: "The Great Mental Models", book: "Parrish" },
  { q: "Whose problem is this really?", back: "Leaders absorb problems that aren't theirs. Not every problem brought to you is yours to solve. Clarify ownership before investing energy.", use: "When your plate is full. When someone dumps a problem on you.", cat: "frame", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "What constraint, if removed, would change everything?", back: "Most problems have a binding constraint — one bottleneck that limits the whole system. Find it and you find the real problem. Everything else is noise.", use: "When progress is slow across the board. When many things seem broken simultaneously.", cat: "frame", src: "Thinking in Systems", book: "Meadows" },

  // ── MINDSET ──
  { q: "Am I listening to respond — or listening to understand?", back: "If your brain is already forming a reply, you're not listening. Real listening requires temporarily abandoning your own agenda.", use: "Every meeting. Every conversation. Especially when you're the senior person in the room.", cat: "mindset", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "Stay curious a little longer. Rush to action a little more slowly.", back: "This is not a question — it's your daily mantra. Your speed is your superpower and your trap. Slow the solve. Deepen the inquiry.", use: "Tape it to your monitor. Say it before every meeting.", cat: "mindset", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "What question should I ask instead of giving advice?", back: "Advice creates dependency. Questions create capability. Every time you solve someone's problem, you rob them of growth.", use: "When you feel the urge to jump in with an answer.", cat: "mindset", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "Couldn't we at least...?", back: "The beginning of all progress. You don't need the full solution. You need the first step that creates movement. This question breaks paralysis.", use: "When a team is stuck. When nothing seems possible.", cat: "mindset", src: "Wait, What?", book: "Ryan" },
  { q: "How can I help?", back: "Not 'let me help you' — which assumes you know what they need. This hands them the pen. Let them define what help looks like.", use: "Instead of jumping to fix. With reports, peers, customers.", cat: "mindset", src: "Wait, What?", book: "Ryan" },
  { q: "What truly matters here?", back: "Most of what feels urgent isn't important. This question separates signal from noise. It's the filter for your attention, your calendar, your life.", use: "When overwhelmed. When everything feels equally important (it isn't).", cat: "mindset", src: "Wait, What?", book: "Ryan" },
  { q: "Never attribute to malice what can be explained by error.", back: "Hanlon's Razor. The story you tell about someone's intent shapes everything that follows. Choose the charitable interpretation first — you can always update later.", use: "When someone does something that feels personal. It probably isn't.", cat: "mindset", src: "The Great Mental Models", book: "Parrish" },
  { q: "What was most useful for you?", back: "The learning question. Close every conversation with this. It shifts ownership of insight to the other person and crystallizes what actually landed.", use: "End of every 1:1, coaching session, or meeting you led.", cat: "mindset", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "What am I avoiding?", back: "The thing you least want to think about is usually the thing most worth thinking about. Avoidance is a signal, not a strategy.", use: "Weekly reflection. When you're busy with everything except the one thing that matters.", cat: "mindset", src: "A More Beautiful Question", book: "Berger" },
  { q: "What would I do if I weren't afraid?", back: "Fear disguises itself as logic. 'It's not the right time' often means 'I'm scared.' Name the fear to disarm it.", use: "Career decisions. Hard conversations you keep postponing. The ask you haven't made.", cat: "mindset", src: "A More Beautiful Question", book: "Berger" },
  { q: "Is this a one-way door or a two-way door?", back: "One-way doors (irreversible) deserve deep analysis. Two-way doors (reversible) deserve speed. Most decisions are two-way doors treated as one-way.", use: "When analysis paralysis hits. Ask: can I undo this? If yes, just decide.", cat: "mindset", src: "The Great Mental Models", book: "Parrish" },
  { q: "What would future-me wish I had asked today?", back: "Regret comes from unasked questions, not from wrong answers. The question you didn't ask in the meeting is the one that haunts you at 2am.", use: "Before any meeting ends. Before signing anything. Before the moment passes.", cat: "mindset", src: "Wait, What?", book: "Ryan" },

  // ── COACH ──
  { q: "What's on your mind?", back: "The kickstart question. Opens any conversation without an agenda. Invites the other person to surface what matters most to them — not what you think matters.", use: "First words of every 1:1. Every time someone walks into your office.", cat: "coach", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "If you're saying yes to this, what are you saying no to?", back: "The strategic question. Every yes has a hidden no. Make the trade-off visible. This prevents overcommitment better than any prioritization framework.", use: "When your team takes on new work. When you're about to say yes.", cat: "coach", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "What do you want?", back: "The foundation question. People often don't know what they actually want — they know what they're reacting to. This question grounds the conversation.", use: "When someone is venting or circling. Gently redirect to needs.", cat: "coach", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "Seek commitments, not compliments.", back: "Enthusiasm is free. Commitments cost something. Pre-orders, intros, signed LOIs, dedicated time — these are the only signals that matter.", use: "After any pitch. After customer 'excitement'. After stakeholder buy-in.", cat: "coach", src: "The Mom Test", book: "Fitzpatrick" },
  { q: "What words here are ambiguous?", back: "Key terms carry arguments. When words shift meaning or stay vague, conclusions become unfalsifiable. Pin down definitions before debating solutions.", use: "Strategy docs. OKRs. Any time people seem to agree but probably don't.", cat: "coach", src: "Asking the Right Questions", book: "Browne & Keeley" },
  { q: "What significant information is being omitted?", back: "All persuasion is selective presentation. The strongest question isn't about what's there — it's about what's missing. What would the other side point out?", use: "Reviewing proposals. Listening to pitches. Reading reports.", cat: "coach", src: "Asking the Right Questions", book: "Browne & Keeley" },
  { q: "What does this person need to learn — not what do they need to be told?", back: "Telling transfers information. But learning happens through discovery. The best leaders create conditions for insight, not instruction.", use: "When onboarding. When developing talent. When someone keeps making the same mistake.", cat: "coach", src: "Humble Inquiry", book: "Schein" },
  { q: "Where is the person, not just the project?", back: "The 3Ps: every challenge involves a Project, a Person, or a Pattern. Most managers only address the project. The person and the pattern are where real coaching happens.", use: "When someone brings you a 'work' problem that feels heavier than it should.", cat: "coach", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "Am I creating dependency or capability?", back: "If your team can't function without you, you haven't led — you've created a bottleneck. The goal is to make yourself progressively unnecessary.", use: "When you're the only one who can make a decision. When your calendar is wall-to-wall.", cat: "coach", src: "The Coaching Habit", book: "Bungay Stanier" },
  { q: "What's the pattern here — not just this instance?", back: "Individual incidents are noise. Patterns are signal. If it happened once, it's an event. If it happened three times, it's a system. Address the system.", use: "Performance issues. Customer complaints. Team conflicts that keep returning.", cat: "coach", src: "Thinking in Systems", book: "Meadows" },

  // ── SOCIAL ──
  { q: "What is this person actually feeling right now?", back: "Before you respond, diagnose. Most social friction comes from responding to words while ignoring emotions. Read the feeling first, then the content.", use: "When a friend is venting. When a conversation feels off. When someone goes quiet.", cat: "social", src: "Nonviolent Communication", book: "Rosenberg" },
  { q: "What do they need from me right now — a solution, or to be heard?", back: "Most people don't want your advice. They want to feel understood. Jumping to fix mode is the fastest way to make someone feel dismissed.", use: "When a friend shares a problem. When your partner is upset. Default: listen first.", cat: "social", src: "Nonviolent Communication", book: "Rosenberg" },
  { q: "Am I being curious about this person, or am I performing?", back: "Social autopilot is small talk, status signaling, and rehearsed stories. Real connection requires genuine curiosity about the other human.", use: "Networking events. Dinners. Any conversation that feels surface-level.", cat: "social", src: "Humble Inquiry", book: "Schein" },
  { q: "What would I ask if I had zero agenda?", back: "Humble inquiry means asking with no hidden motive — not to impress, not to steer, not to prove a point. Just to understand. People feel the difference instantly.", use: "First dates. Meeting someone new. When you catch yourself strategizing a conversation.", cat: "social", src: "Humble Inquiry", book: "Schein" },
  { q: "What's their story? What shaped them?", back: "Everyone makes sense in context. The person annoying you at dinner has a life history that explains everything. Curiosity about that story kills judgment.", use: "When you're quick to judge someone. Family gatherings. New social circles.", cat: "social", src: "A More Beautiful Question", book: "Berger" },
  { q: "What am I making this mean about me?", back: "Someone cancels plans. Someone doesn't text back. Your brain writes a story starring you as the victim. Separate what happened from the story you're telling yourself.", use: "When you feel slighted, rejected, or excluded. The story is usually wrong.", cat: "social", src: "Crucial Conversations", book: "Patterson et al." },
  { q: "Is this conversation safe for the other person?", back: "People shut down when they don't feel safe — in friendships, in families, everywhere. If someone is going silent or getting defensive, safety broke down. Fix safety before fixing the topic.", use: "When a friend gets defensive. When family dinner gets tense. When someone withdraws.", cat: "social", src: "Crucial Conversations", book: "Patterson et al." },
  { q: "What would happen if I just asked them directly?", back: "Most social anxiety comes from imagining conversations instead of having them. The direct question — asked kindly — almost always goes better than the weeks of overthinking.", use: "When you're guessing what someone thinks. When there's unspoken tension.", cat: "social", src: "Humble Inquiry", book: "Schein" },
  { q: "What's going well here that I'm not acknowledging?", back: "We're wired to notice problems. In relationships, this means the 95% that works becomes invisible while the 5% that doesn't dominates attention. Flip it.", use: "With your partner. With old friends. With family you take for granted.", cat: "social", src: "Nonviolent Communication", book: "Rosenberg" },
  { q: "Am I judging or am I understanding?", back: "Judgment closes doors. Understanding opens them. You can disagree with someone completely and still seek to understand why they see it that way. That's not weakness — it's intelligence.", use: "Political disagreements. Lifestyle differences. When someone lives differently than you.", cat: "social", src: "Nonviolent Communication", book: "Rosenberg" },
  { q: "What would I want someone to ask me right now?", back: "The golden rule of conversation. If you were in their shoes, what question would feel like a gift? That's probably the right one to ask.", use: "When someone shares bad news. When a friend is going through something. When you don't know what to say.", cat: "social", src: "Wait, What?", book: "Ryan" },
  { q: "Who haven't I checked in on lately?", back: "Relationships decay by default. They require active maintenance. The people you assume are 'fine' are often the ones who need you most.", use: "Sunday evening. Scroll your contacts. Send one real message.", cat: "social", src: "Wait, What?", book: "Ryan" },

  // ── STRATEGIC (Machiavelli) ──
  { q: "Cui bono — who benefits?", back: "The oldest strategic question. Every proposal, every action, every inaction serves someone's interest. Find whose interest it serves and you understand the real motivation.", use: "Every negotiation. Every pitch you receive. Every policy change. Every time someone says 'this is for the best.'", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "What do their actions reveal that their words conceal?", back: "Everyone will tell you what they want you to believe. Only their actions reveal what they actually believe. Study what people do when it costs them something.", use: "Evaluating partners. Investor relations. When someone's words and behavior don't match.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "What is this person's true incentive?", back: "People don't act against their interests — they act against YOUR understanding of their interests. When behavior seems irrational, you've misidentified the incentive.", use: "When someone's behavior 'doesn't make sense.' When deals stall. When team members resist change.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "Am I being feared, loved, or ignored — and which do I need right now?", back: "Machiavelli argued it's safer to be feared than loved. The modern reading: respect is non-negotiable, affection is a bonus. Being ignored is the true danger.", use: "As CEO: with your board, your market, your competitors. In any power dynamic.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "What would my opponent do with this information?", back: "Before sharing anything, ask how it could be used against you. Information is power — and power shared carelessly becomes power surrendered.", use: "Competitive situations. Board presentations. Investor updates. PR crises.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "Is this the right battle — or am I fighting because I was provoked?", back: "Emotional reactions serve whoever provoked them. The strategist chooses which battles to fight based on long-term advantage, not momentary anger.", use: "When competitors attack. When critics are loud. When your ego wants to 'win' an argument.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "What does everyone believe that is actually wrong?", back: "Conventional wisdom is the graveyard of competitive advantage. When everyone agrees on something, it's either obviously true or dangerously false.", use: "Market strategy. Product positioning. When 'everyone knows' something about your industry.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "Am I preparing for fortune — or just hoping for it?", back: "Machiavelli's central lesson: Fortuna rules half of life, but virtù (preparation, skill, decisiveness) rules the other half. The prepared mind exploits the opportunity that luck delivers.", use: "Fundraising. Market timing. Career moves. You can't control when opportunity arrives — only whether you're ready.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "Where is the power — and is it moving?", back: "Power is never static. It flows between people, institutions, and ideas. The question isn't just who has power now, but who is gaining it and who is losing it.", use: "Org politics. Market shifts. Platform changes. Investor dynamics.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "What would I do if I knew this person would eventually betray this agreement?", back: "Not cynicism — realism. Structure deals so they work even without trust. The best contracts make betrayal more expensive than loyalty.", use: "Partnerships. Co-founder agreements. Vendor contracts. Any deal built on handshakes.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "Am I the fox or the lion right now — and which one is needed?", back: "The fox detects traps. The lion frightens wolves. A leader who is only a lion will walk into traps. A leader who is only a fox will be devoured. Know which mode the moment requires.", use: "Negotiations. Competitive moves. When to be cunning vs. when to show strength.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "What is the cost of inaction?", back: "Inaction is a decision — often the most expensive one. Machiavelli warned that delaying a battle only advantages your enemy. Neutrality in a conflict is choosing the winner's enemy.", use: "When 'wait and see' feels comfortable. When avoiding a decision feels like wisdom but is really fear.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "Who do I need — and who needs me?", back: "All power is relational. Map your dependencies honestly. Where you depend on someone, you are vulnerable. Where they depend on you, you have leverage.", use: "Stakeholder mapping. Career planning. Negotiation prep. Building your board.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "Is this person an ally, an adversary, or an audience?", back: "Every interaction has a political dimension. Allies share your interests. Adversaries oppose them. Audiences watch and decide. Each requires a completely different approach.", use: "New relationships. Cross-functional meetings. Industry events. Social gatherings with power dynamics.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "What precedent does this set?", back: "Every exception becomes a rule. Every concession becomes a baseline. Strategic thinking means seeing today's decision as tomorrow's constraint.", use: "Pricing. People decisions. Policy exceptions. Customer requests. 'Just this once' situations.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "Am I seeing the world as it is — or as I wish it were?", back: "Machiavelli's foundational principle: deal with the effectual truth of things, not the imagined version. Hope is not a strategy.", use: "Revenue projections. Team assessments. Market assumptions. Self-evaluation.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "What would happen if I said nothing right now?", back: "Silence is a power tool. The urge to fill silence, to react, to demonstrate knowledge — all of these serve your ego, not your position.", use: "Negotiations. When someone makes an offer. When emotions are high. When you want to see what others reveal.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "Is this loyalty — or dependency?", back: "People stay for two reasons: because they want to, or because they have to. Know the difference. Dependency masquerading as loyalty crumbles without warning.", use: "Key person risk. Customer retention. Partnership health.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "What's my exit if this goes wrong?", back: "Enter every situation knowing how you leave it. The negotiator with no alternative has no power. Always maintain optionality.", use: "Before signing anything. Before making a public commitment. Before entering any deal.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
  { q: "Am I playing the game — or being played?", back: "If you don't know the rules, you're not a player — you're a piece. If you can't see the board, someone else is moving you. Step back. Map the players, the stakes, the moves.", use: "When you feel reactive. When you're spending energy on someone else's priorities.", cat: "strategic", src: "The Prince", book: "Machiavelli" },
];

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "observe", label: "Observe" },
  { key: "inquire", label: "Inquire" },
  { key: "analyze", label: "Analyze" },
  { key: "frame", label: "Frame" },
  { key: "mindset", label: "Mindset" },
  { key: "coach", label: "Coach" },
  { key: "social", label: "Social" },
  { key: "strategic", label: "Strategic" },
];

const CAT_STYLES = {
  observe:   "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  inquire:   "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  analyze:   "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  frame:     "bg-sky-500/10 text-sky-400 border border-sky-500/20",
  mindset:   "bg-[#d6f928]/10 text-[#d6f928] border border-[#d6f928]/20",
  coach:     "bg-violet-500/10 text-violet-400 border border-violet-500/20",
  social:    "bg-rose-500/10 text-rose-400 border border-rose-500/20",
  strategic: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
};

// ════════════════════════════════════════
// UTILS
// ════════════════════════════════════════
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ════════════════════════════════════════
// ICONS (inline SVG components)
// ════════════════════════════════════════
const ChevronLeft = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="15 18 9 12 15 6" /></svg>
);
const ChevronRight = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="9 18 15 12 9 6" /></svg>
);
const FlipIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M1 4v6h6" /><path d="M23 20v-6h-6" /><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" /></svg>
);

// ════════════════════════════════════════
// COMPONENT
// ════════════════════════════════════════
export default function InquiryProtocol() {
  const [filter, setFilter] = useState("all");
  const [deck, setDeck] = useState(() => shuffle(CARDS));
  const [idx, setIdx] = useState(0);
  const [seen, setSeen] = useState(new Set([0]));
  const [flipped, setFlipped] = useState(false);
  const [exitDir, setExitDir] = useState(null); // "left" | "right" | null
  const [entering, setEntering] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);

  // Touch/drag state
  const dragRef = useRef({ startX: 0, dx: 0, dragging: false, moved: false });
  const cardRef = useRef(null);

  // Rebuild deck on filter change
  useEffect(() => {
    const filtered = filter === "all" ? CARDS : CARDS.filter((c) => c.cat === filter);
    setDeck(shuffle(filtered));
    setIdx(0);
    setSeen(new Set([0]));
    setFlipped(false);
  }, [filter]);

  // Mark current card as seen
  useEffect(() => {
    setSeen((prev) => new Set(prev).add(idx));
  }, [idx]);

  const card = deck[idx];

  const dismissHint = useCallback(() => {
    if (hintVisible) setHintVisible(false);
  }, [hintVisible]);

  const animateTransition = useCallback((dir, newIdx) => {
    dismissHint();
    setExitDir(dir);
    setTimeout(() => {
      setIdx(newIdx);
      setFlipped(false);
      setExitDir(null);
      setEntering(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEntering(false));
      });
    }, 200);
  }, [dismissHint]);

  const next = useCallback(() => {
    if (deck.length === 0) return;
    animateTransition("left", (idx + 1) % deck.length);
  }, [idx, deck.length, animateTransition]);

  const prev = useCallback(() => {
    if (deck.length === 0) return;
    animateTransition("right", (idx - 1 + deck.length) % deck.length);
  }, [idx, deck.length, animateTransition]);

  const flip = useCallback(() => {
    dismissHint();
    setFlipped((f) => !f);
  }, [dismissHint]);

  // Keyboard
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === "l") next();
      else if (e.key === "ArrowLeft" || e.key === "h") prev();
      else if (e.key === " " || e.key === "f" || e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        flip();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, flip]);

  // Touch handlers
  const onTouchStart = (e) => {
    const d = dragRef.current;
    d.startX = e.touches[0].clientX;
    d.dx = 0;
    d.moved = false;
    d.dragging = true;
  };
  const onTouchMove = (e) => {
    const d = dragRef.current;
    if (!d.dragging) return;
    d.dx = e.touches[0].clientX - d.startX;
    if (Math.abs(d.dx) > 10) d.moved = true;
    if (d.moved && cardRef.current) {
      cardRef.current.style.transform = `translateX(${d.dx}px) rotate(${d.dx * 0.05}deg)`;
      cardRef.current.style.opacity = String(Math.max(0.5, 1 - Math.abs(d.dx) / 400));
    }
  };
  const onTouchEnd = () => {
    const d = dragRef.current;
    d.dragging = false;
    if (cardRef.current) {
      cardRef.current.style.transform = "";
      cardRef.current.style.opacity = "";
    }
    if (Math.abs(d.dx) > 80) {
      d.dx > 0 ? prev() : next();
    } else if (!d.moved) {
      flip();
    }
  };

  // Mouse drag
  const onMouseDown = (e) => {
    const d = dragRef.current;
    d.startX = e.clientX;
    d.dx = 0;
    d.moved = false;
    d.dragging = true;
  };
  useEffect(() => {
    const onMouseMove = (e) => {
      const d = dragRef.current;
      if (!d.dragging) return;
      d.dx = e.clientX - d.startX;
      if (Math.abs(d.dx) > 5) d.moved = true;
      if (d.moved && cardRef.current) {
        cardRef.current.style.transform = `translateX(${d.dx}px) rotate(${d.dx * 0.05}deg)`;
        cardRef.current.style.opacity = String(Math.max(0.5, 1 - Math.abs(d.dx) / 400));
      }
    };
    const onMouseUp = () => {
      const d = dragRef.current;
      if (!d.dragging) return;
      d.dragging = false;
      if (cardRef.current) {
        cardRef.current.style.transform = "";
        cardRef.current.style.opacity = "";
      }
      if (Math.abs(d.dx) > 80) {
        d.dx > 0 ? prev() : next();
      } else if (!d.moved) {
        flip();
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [next, prev, flip]);

  // Card animation classes
  let cardAnim = "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]";
  if (exitDir === "left") cardAnim += " -translate-x-[120%] -rotate-[8deg] opacity-0";
  else if (exitDir === "right") cardAnim += " translate-x-[120%] rotate-[8deg] opacity-0";
  else if (entering) cardAnim += " translate-y-5 opacity-0";

  if (!card) return null;

  return (
    <div className="flex flex-col h-screen w-full bg-[#050505] text-white select-none overflow-hidden">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Inquiry Protocol — Suman Sourabh</title>
      </Helmet>

      {/* Top bar */}
      <div className="max-w-5xl w-full mx-auto px-4 md:px-8 flex justify-between items-center pt-6 md:pt-10 pb-4 md:pb-6 shrink-0">
        <span className="text-xs md:text-sm font-mono font-bold tracking-[0.15em] uppercase text-[#d6f928]">
          The Inquiry Protocol
        </span>
        <span className="text-xs md:text-sm text-gray-600 font-mono">
          <span className="text-white">{seen.size}</span> / {deck.length}
        </span>
      </div>

      {/* Filter bar */}
      <div className="max-w-5xl w-full mx-auto px-4 md:px-8 shrink-0">
        <div className="flex gap-1.5 md:gap-2 pb-4 md:pb-8 overflow-x-auto scrollbar-hide md:flex-wrap md:overflow-visible">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`shrink-0 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[0.72rem] md:text-xs font-mono border transition-all duration-150
                ${filter === c.key
                  ? "border-[#d6f928]/40 text-[#d6f928] bg-[#d6f928]/10"
                  : "border-white/10 text-gray-500 bg-white/5 hover:text-gray-300"
                }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Card area */}
      <div
        className="flex-1 flex items-center justify-center relative overflow-hidden py-2 md:py-6 px-4 md:px-8"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
      >
        <div
          ref={cardRef}
          className={`w-full max-w-[460px] md:max-w-3xl bg-white/[0.04] border border-white/10 rounded-2xl md:rounded-3xl p-8 md:p-14 min-h-[300px] md:min-h-[400px] flex flex-col justify-center cursor-grab ${cardAnim}`}
        >
          {!flipped ? (
            /* ── FRONT ── */
            <div className="flex flex-col justify-center flex-1">
              <span className={`text-[0.62rem] md:text-xs font-bold tracking-[0.1em] uppercase px-2.5 py-1 md:px-3 md:py-1.5 rounded-full w-fit mb-5 md:mb-8 ${CAT_STYLES[card.cat] || ""}`}>
                {card.cat}
              </span>
              <p className="font-heading text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed md:leading-snug mb-6 md:mb-10">{card.q}</p>
              <p className="text-xs md:text-sm text-gray-600 italic">{card.src}</p>
            </div>
          ) : (
            /* ── BACK ── */
            <div className="flex flex-col justify-center flex-1 gap-3 md:gap-5">
              <p className="text-[0.65rem] md:text-xs font-bold tracking-[0.1em] uppercase text-gray-500 font-mono">
                Why this matters
              </p>
              <p className="text-[0.95rem] md:text-lg leading-relaxed text-gray-400">{card.back}</p>
              <p className="text-[0.65rem] md:text-xs font-bold tracking-[0.1em] uppercase text-gray-500 mt-1 font-mono">
                When to use it
              </p>
              <div className="text-[0.85rem] md:text-base leading-relaxed text-white p-3 md:p-5 bg-white/5 rounded-lg md:rounded-xl border-l-[3px] border-[#d6f928]/50">
                {card.use}
              </div>
              <p className="text-xs md:text-sm text-gray-600 italic mt-2">
                {card.src} — {card.book}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Progress dots (only when deck <= 20) */}
      {deck.length <= 20 && (
        <div className="flex justify-center gap-1 md:gap-1.5 py-2 md:py-3 shrink-0">
          {deck.map((_, i) => (
            <div
              key={i}
              className={`h-1 md:h-1.5 rounded-full transition-all duration-150 ${
                i === idx
                  ? "w-3 md:w-5 bg-[#d6f928]"
                  : seen.has(i)
                  ? "w-1 md:w-1.5 bg-[#d6f928]/30"
                  : "w-1 md:w-1.5 bg-white/10"
              }`}
            />
          ))}
        </div>
      )}

      {/* Hint */}
      <div className={`text-center text-[0.68rem] md:text-xs text-gray-600 font-mono pb-2 md:pb-4 shrink-0 transition-opacity duration-500 ${hintVisible ? "" : "opacity-0 pointer-events-none"}`}>
        swipe or tap &middot; arrows to navigate &middot; space to flip
      </div>

      {/* Bottom bar */}
      <div className="flex justify-center items-center gap-8 md:gap-12 pb-6 md:pb-10 shrink-0">
        <button
          onClick={prev}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 text-gray-500 flex items-center justify-center hover:border-white/20 hover:text-gray-300 transition-all"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={flip}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#d6f928]/30 bg-[#d6f928]/5 text-[#d6f928] flex items-center justify-center hover:bg-[#d6f928]/10 transition-all"
        >
          <FlipIcon />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 text-gray-500 flex items-center justify-center hover:border-white/20 hover:text-gray-300 transition-all"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
