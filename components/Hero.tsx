"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center h-[90vh] overflow-hidden">

      {/* 🔥 Background Glow (FIXED) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      {/* 👇 Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="text-5xl md:text-6xl font-extrabold"
      >
        Hey, I’m SATVIK 👋
      </motion.h1>

      {/* 👇 Typing Animation */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        className="mt-4 text-xl md:text-2xl font-medium text-gray-300"
      >
        <TypeAnimation
          sequence={[
            "Full Stack Developer building scalable apps 🚀",
            2000,
            "Specialized in MERN & Next.js ⚡",
            2000,
            "Focused on performance & clean UI 🧠",
            2000,
            "Ready to build real-world products 💼",
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
      </motion.div>

      {/* 👇 Buttons */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="mt-10 flex gap-4 flex-wrap justify-center"
      >
        {/* Primary Button */}
        <a
          href="#projects"
          className="relative px-6 py-2 rounded-lg font-semibold bg-white text-black overflow-hidden group"
        >
          <span className="relative z-10 transition-all duration-300 ease-out">See My Work</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </a>

        {/* Secondary */}
        <a
          href="#contact"
          className="border border-gray-400 px-6 py-2 rounded-lg font-semibold transition hover:bg-white hover:text-black transition-all duration-300 ease-out"
        >
          Contact Me
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="border border-gray-400 px-6 py-2 rounded-lg font-semibold transition hover:bg-gray-200 hover:text-black transition-all duration-300 ease-out"
        >
          View Resume
        </a>
      </motion.div>

    </section>
  );
}