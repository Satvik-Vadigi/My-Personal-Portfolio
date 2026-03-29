"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24 bg-black text-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            I&apos;m a Computer Science student focused on building 
            modern web applications using Next.js and full-stack technologies. 
            I aim to create fast, scalable, and user-focused products.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Currently sharpening my skills in full-stack development, system
            design, and modern frameworks to build production-ready apps.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "TypeScript",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-800 px-3 py-1 rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}