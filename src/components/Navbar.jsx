import { motion } from "framer-motion";

function Navbar() {
return (
<motion.nav
className="
fixed
top-0
left-0
w-full
z-50
backdrop-blur-md
bg-slate-950/70
border-b
border-slate-800
"
initial={{ y: -80 }}
animate={{ y: 0 }}
transition={{ duration: 0.6 }}
> <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">


    <a
      href="#"
      className="text-xl font-bold text-white hover:text-sky-400 transition"
    >
      Panav Gohil
    </a>

    <div className="hidden md:flex items-center gap-8 text-slate-300">

      <a
        href="#about"
        className="hover:text-sky-400 transition"
      >
        About
      </a>

      <a
        href="#projects"
        className="hover:text-sky-400 transition"
      >
        Projects
      </a>

      <a
        href="#skills"
        className="hover:text-sky-400 transition"
      >
        Skills
      </a>

      <a
        href="#achievements"
        className="hover:text-sky-400 transition"
      >
        Impact
      </a>

      <a
        href="#contact"
        className="hover:text-sky-400 transition"
      >
        Contact
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-4
          py-2
          border
          border-slate-700
          rounded-lg
          hover:border-sky-500
          hover:text-sky-400
          transition-all
        "
      >
        Resume
      </a>

    </div>

  </div>
</motion.nav>


);
}

export default Navbar;
