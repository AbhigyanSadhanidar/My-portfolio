
const Skills = () => {
  const skills = [
    "AWS",
    "Kubernetes",
    "Docker",
    "Linux",
    "Git",
    "Terraform",
    "SQL",
    "ReactJS",
    "Java",
    "Python",
  ];

  return (
    <section id="skills" className="py-20  bg-[#fff7ed]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1  mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill}
              className=" px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-gray-200"
            >
              <span className="text-gray-800 font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
