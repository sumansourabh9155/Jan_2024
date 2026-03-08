import PenIcon from "@atlaskit/icon/core/pen";
import OperationsIcon from "@atlaskit/icon/core/operations";
import AngleBracketsIcon from "@atlaskit/icon/core/angle-brackets";
import AutomationIcon from "@atlaskit/icon/core/automation";

const skills = [
  {
    icon: <PenIcon label="Design Clarity" />,
    title: "Transparent Process",
    desc: "I walk you through every design decision—no fluff, just strategic reasoning and business logic behind every move.",
  },
  {
    icon: <OperationsIcon label="Workflow" />,
    title: "Collaborative from Day One",
    desc: "I don’t just take briefs—I ask the tough questions, run design workshops, and ensure your voice is reflected in the final output.",
  },
  {
    icon: <AngleBracketsIcon label="Code" />,
    title: "Design-Dev Harmony",
    desc: "As someone who writes code too, I ensure designs are feasible, scalable, and production-ready—no pixel-left-behind handoffs.",
  },
  {
    icon: <AutomationIcon label="Speed & Delivery" />,
    title: "Speed Without Sacrificing Quality",
    desc: "I work fast, but with precision. Expect rapid turnaround, clear updates, and deliverables you can ship with confidence.",
  },
];

const Skills = () => {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-sm bg-white/5 text-white px-4 py-1 rounded-full border border-white/10 backdrop-blur-md mb-4">
            ⭘ Why Work With Me
          </div>
          <h1 className="text-5xl font-light text-white">
            My <span className="text-gray-400 font-medium">USP</span>
          </h1>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            I offer an honest, strategic, and design-led approach that’s hard to find elsewhere. It’s not just about good design—it’s about real results.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
            >
              <div className="bg-white/10 p-4 rounded-md w-fit text-white">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white pt-6">
                {skill.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
