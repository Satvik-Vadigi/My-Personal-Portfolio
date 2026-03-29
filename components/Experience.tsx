"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer (Self Projects)",
    period: "2025 – Present",
    description:
      "Independently building and deploying full-stack web applications using modern technologies with focus on performance and UX.",
    highlights: [
      "Built and deployed a portfolio using Next.js, Tailwind, Framer Motion",
      "Developed a full-stack task manager (MERN) with auth & CRUD",
      "Implemented responsive UI with dark/light theme",
      "Used GitHub + Vercel for CI/CD workflow",
    ],
  },
  {
    role: "Web Development Training",
    period: "1 Month",
    description:
      "Completed structured training covering frontend and backend fundamentals.",
    highlights: [
      "HTML, CSS, JavaScript fundamentals",
      "React for UI development",
      "Node.js + Express basics",
      "Hands-on mini projects",
    ],
  },
  {
    role: "Achievements",
    period: "2026",
    description:
      "Participated in competitive technical events showcasing problem-solving ability.",
    highlights: [
      "🏆 1st Place – Hackathon (Pragyan 2K26)",
      "🥈 2nd Prize – Technical Quiz (Pragyan 2K26)",
      "🏆 Awarded 1st Place in ATOS Hackathon",
      "🥈 Awarded 2nd Place in Elocution during 1st year of B.Tech",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="backdrop-blur-xl bg-white/1.5 border border-white/5 p-6 rounded-2xl shadow-lg transition duration-300 hover:scale-[1.02]"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Experience
      </h2>

      <div className="space-y-10 px-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount:0.3 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

            {/* Glass Card */}
            <div className="relative backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl transition duration-300 group-hover:scale-[1.02]">
              
              <h3 className="text-xl font-semibold mb-1">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                {exp.period}
              </p>

              <p className="text-gray-300 mb-4">
                {exp.description}
              </p>

              <ul className="space-y-1 text-gray-300 text-sm">
                {exp.highlights.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}