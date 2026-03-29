"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    live: "#",
    github: "#",
    image: "/projects/portfolio.png",
    tags: ["Live", "Frontend"],
  },
  {
    title: "Full Stack Task Manager",
    description:
      "Full-stack task manager supporting CRUD operations with backend API integration.",
    tech: ["MongoDB", "Express", "React", "Node"],
    live: "https://production-todo-mern-frontend-satvik-vadigis-projects.vercel.app/",
    github: "https://github.com/Satvik-Vadigi/mern-todo-frontend",
    image: "/projects/taskmanager.png",
    tags: ["Live", "Full Stack"],
  },
  {
    title: "Real Estate Website",
    description:
      "Real estate platform with property listings and responsive design.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://satvik-vadigi.github.io/Self-Real-Estate-Website/",
    github: "https://github.com/Satvik-Vadigi/Self-Real-Estate-Website",
    image: "/projects/realestate.png",
    tags: ["Live", "Frontend"],
  },
];

export default function Projects() {
  return (
    <section className="backdrop-blur-xl bg-white/1.5 border border-white/5 p-10 rounded-2xl shadow-lg transition duration-300 hover:scale-[1.02]">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-10 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          >
            {/* IMAGE */}
            <div className="overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-xl group-hover:scale-110 transition duration-300"
              />
            </div>

            <h3 className="text-xl font-semibold mt-4">
              {project.title}
            </h3>

            <p className="text-gray-300 text-sm mt-2">
              {project.description}
            </p>

            {/* TECH */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-800 px-2 py-1 text-xs rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* TAGS */}
            <div className="flex gap-2 mt-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-1 rounded ${
                    tag === "Live"
                      ? "bg-green-500"
                      : tag === "Full Stack"
                      ? "bg-blue-500"
                      : "bg-purple-500"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex justify-between mt-4 text-sm">
              <a
                href={project.live}
                target="_blank"
                className="text-blue-400 hover:underline"
                rel="noopener noreferrer"
              >
                Live →
              </a>

              <a
                href={project.github}
                target="_blank"
                className="text-gray-300 hover:underline"
                rel="noopener noreferrer"
              >
                Code →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}