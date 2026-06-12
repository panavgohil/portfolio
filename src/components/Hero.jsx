import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

import {
FaGithub,
FaLinkedin,
FaFilePdf,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Hero() {
return (
<motion.section
className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 pt-20"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }}
> <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">


    {/* Profile Image */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative">

        <div className="absolute inset-0 bg-sky-500 blur-3xl opacity-20 rounded-full"></div>

        <img
          src={profile}
          alt="Panav Gohil"
          className="
            relative
            w-80
            h-80
            object-cover
            rounded-full
            border-4
            border-sky-500
            shadow-2xl
            hover:scale-105
            transition
            duration-500
          "
        />
      </div>
    </motion.div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >

      <p className="text-sky-400 text-lg font-medium mb-4">
        Electronics Engineering (VLSI Design & Technology) @ DTU
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Panav Gohil
      </h1>

      <h2 className="text-2xl md:text-4xl mt-6 text-slate-300 font-light">
        Designing Systems That Sense, Think and Act
      </h2>

      <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-2xl">
        Electronics Engineering student at DTU passionate about
        Artificial Intelligence, Computer Vision, Embedded Systems,
        Intelligent Hardware Systems and Technology Entrepreneurship.
        I enjoy building intelligent systems that combine software,
        hardware and real-world impact.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 mt-10">

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            px-6 py-3
            border border-slate-700
            rounded-xl
            hover:border-sky-500
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          <FaFilePdf />
          Resume
        </a>

        <a
          href="https://github.com/panavgohil"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            px-6 py-3
            border border-slate-700
            rounded-xl
            hover:border-sky-500
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/panavgohil/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            px-6 py-3
            border border-slate-700
            rounded-xl
            hover:border-sky-500
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href="https://leetcode.com/panavgohil"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            px-6 py-3
            border border-slate-700
            rounded-xl
            hover:border-sky-500
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          <SiLeetcode />
          LeetCode
        </a>

      </div>

    </motion.div>

  </div>
</motion.section>


);
}

export default Hero;
