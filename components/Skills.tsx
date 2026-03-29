"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TailwindCSS", level: 95 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Prisma", level: 65 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-20 text-white"
    >
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-10 text-center">
        My Skills
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg hover:scale-[1.03] transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>

            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
              <motion.div
                className="bg-blue-500 h-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>

            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              {skill.level}% proficiency
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}