export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 backdrop-blur-lg bg-black/35 border-b border-white/10 sticky top-0 z-50">      
    <h1 className="text-xl font-bold">SATVIK</h1>
      <div className="space-x-6 text-sm hidden md:block">
        <a href="#projects" className="hover:text-gray-300">Projects</a>
        <a href="#experience" className="hover:text-gray-300">Experience</a>
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
}