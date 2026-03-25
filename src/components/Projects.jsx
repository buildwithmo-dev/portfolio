import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              {/* Impact */}
              <p className="text-sm text-purple-500 mb-2">
                {project.impact}
              </p>
              {/* Description */}
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-200 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-purple-600 font-medium hover:underline"
                >
                  GitHub →
                </a>

                <a
                  href={project.demo}
                  className="text-gray-700 font-medium hover:underline"
                >
                  Live Demo →
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}