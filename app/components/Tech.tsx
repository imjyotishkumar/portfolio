"use client";

const Tech = () => {
  const techs = [
    { name: "Next.js", color: "#000000" },
    { name: "Node.js", color: "#43853d" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "React", color: "#61DAFB" },
    { name: "Git & GitHub", color: "#f05032" },
    { name: "Python", color: "#3776AB" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "HTML5", color: "#E44D26" },
    { name: "CSS3", color: "#1572B6" },
  ];

  return (
    <section className="max-w-4xl mx-auto p-6 bg-neutral-900 rounded-lg shadow-lg text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">My Tech Stack</h2>
      <p className="mb-8 text-center text-gray-300">
        I am proficient in a broad range of technologies and frameworks:
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {techs.map((tech) => (
          <li
            key={tech.name}
            className="flex flex-col items-center gap-2 rounded-md p-4 bg-neutral-800 hover:bg-neutral-700 transition"
          >
            <div
              className="w-12 h-12 rounded-full flex justify-center items-center text-xl font-semibold"
              style={{ backgroundColor: tech.color, color: "black" }}
            >
              {tech.name
                .split(/[\s&]+/)
                .map((word) => word[0])
                .join("")
                .toUpperCase()}
            </div>
            <span className="text-white font-medium">{tech.name}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-center text-gray-400 italic">
  {"...and much more. Let's build something great together!"}
</p>
    </section>
  );
};

export default Tech;
