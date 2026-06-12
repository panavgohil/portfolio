import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1,ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          About Me
        </h2>

        <p className="text-slate-300 text-lg leading-9">
          I am an Electronics Engineering (VLSI Design & Technology)
          student at Delhi Technological University (DTU), passionate
          about building intelligent systems that bridge software and
          hardware.
        </p>

        <p className="text-slate-300 text-lg leading-9 mt-6">
          My interests span Artificial Intelligence, Embedded Systems,
          Computer Vision, Intelligent Hardware, VLSI Design, and
          emerging technologies. I enjoy exploring how sensing,
          computation, and automation can be combined to solve
          real-world problems.
        </p>

        <p className="text-slate-300 text-lg leading-9 mt-6">
          Through projects involving machine learning, robotics,
          autonomous sensing platforms, and human-computer interaction,
          I continuously experiment with technologies that can perceive,
          process, and respond to their environment.
        </p>

        <p className="text-slate-300 text-lg leading-9 mt-6">
          Beyond engineering, I have represented Delhi Technological
          University at national-level parliamentary debates hosted by
          IIT Bombay, IIT Delhi, and IGDTUW, strengthening my
          communication, leadership, and problem-solving abilities.
        </p>

      </div>
    </motion.section>
  );
}

export default About;