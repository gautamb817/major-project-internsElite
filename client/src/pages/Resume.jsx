export default function Resume() {
  const experiences = [
    {
      year: "2022 – 2025",
      title: "B.Tech, Computer Science",
      place: "Thapar University, Patiala",
      description: "Currently pursuing B.Tech with a focus on Full Stack Web Development.",
    },
    {
      year: "2024",
      title: "Web Development Intern",
      place: "XYZ Company",
      description: "Worked on building responsive React applications and integrating APIs.",
    },
    {
      year: "2023",
      title: "Personal Projects",
      place: "Self-Learning",
      description: "Developed multiple MERN stack projects to strengthen backend & frontend skills.",
    },
  ];

  return (
    <section id="resume" className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Resume</h2>

      {/* Download Button */}
      <div className="text-center mb-10">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
        >
          Download Resume
        </a>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-gray-300 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              {exp.year}
            </time>
            <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
            <p className="text-sm font-medium text-gray-600">{exp.place}</p>
            <p className="mb-4 text-base font-normal text-gray-500">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
