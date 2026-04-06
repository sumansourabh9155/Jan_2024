
const Experience = () => {
  const experiences = [
    {
      icon: "UbShyftlabser",
      title: "Product Designer",
      date: "January 2024 - Present",
    },
    {
      icon: "Kraftbase",
      title: "UI/UX Intern",
      date: "June 2020 - August 2023",
    },
    {
      icon: "Raikars Good Vibes",
      title: "UI/UX Consultant",
      date: "October 2022 - February 2023",
    },
  ];

  const awards = [
    {
      icon: "Event 1",
      title: "Website of the Day at",
      date: "November 2023",
    },
    {
      icon: "Event 2",
      title: "Best UX Concept at",
      date: "October 2023",
    },
    {
      icon: "Event 3",
      title: "Speaker at DesignSummit",
      date: "September 2023",
    },
  ];

  return (
    <div className="bg-black py-32 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-40 gap-12">
        {/* Experience Section */}
        <div>
          <h2 className="font-heading text-2xl font-semibold text-white mb-16">
            Working Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 text-white flex items-center justify-center rounded-lg">
                  <span className="text-md font-bold">
                    {experience.icon[0]}
                  </span>
                </div>
                {/* Details */}
                <div>
                  <p className="text-white font-medium">{experience.title}</p>
                  <p className="text-gray-400 text-sm">{experience.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div>
          <h2 className="font-heading text-2xl font-semibold text-white mb-16">
            Public Events
          </h2>
          <div className="space-y-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 text-white flex items-center justify-center rounded-lg">
                  <span className="text-md font-bold">
                    {award.icon[0]}
                  </span>
                </div>
                {/* Details */}
                <div>
                  <p className="text-white font-medium">{award.title}</p>
                  <p className="text-gray-400 text-sm">{award.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
