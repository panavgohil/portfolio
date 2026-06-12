import { motion } from "framer-motion";
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="font-bold text-xl text-white">
          Panav Gohil
        </h1>

        <div className="flex gap-8 text-slate-300">
          <a href="#about" className="hover:text-sky-400">About</a>
          <a href="#projects" className="hover:text-sky-400">Projects</a>
          <a href="#skills" className="hover:text-sky-400">Skills</a>
          <a href="#contact" className="hover:text-sky-400">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;