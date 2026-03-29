import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import CursorGlow from "@/components/CursorGlow";



export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <CursorGlow />
    </main>
  );
}