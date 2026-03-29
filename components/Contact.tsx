"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

type ContactResponse = {
  success?: boolean;
  error?: string;
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data: ContactResponse = await res.json();

      if (data.success) {
        toast.success("Message sent 🚀");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(data.error || "Error ❌");
      }
    } catch {
      toast.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-24 text-white relative"
    >
      {/* Background Glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Contact Me
      </motion.h2>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-5 backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl"
      >
        {/* Name */}
        <motion.input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-800 text-black dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={name}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email */}
        <motion.input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={email}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Message */}
        <motion.textarea
          placeholder="Your Message"
          rows={5}
          className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={message}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        {/* Button */}
        <motion.button
          type="submit"
          disabled={loading}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-white text-black hover:scale-105 hover:shadow-lg disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </section>
  );
}