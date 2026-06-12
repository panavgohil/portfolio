import { motion } from "framer-motion";

function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: [
        "Python",
        "C",
        "C++",
        "JavaScript",
        "Google Apps Script",
      ],
    },

    {
      title: "Artificial Intelligence",
      skills: [
        "Machine Learning",
        "Scikit-Learn",
        "TensorFlow",
        "Model Evaluation",
      ],
    },

    {
      title: "Computer Vision",
      skills: [
        "OpenCV",
        "MediaPipe",
        "Image Processing",
        "CNNs",
      ],
    },

    {
      title: "Embedded Systems",
      skills: [
        "Arduino",
        "ESP32-CAM",
        "IoT",
        "Sensor Integration",
      ],
    },

    {
      title: "Web Development",
      skills: [
        "React",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },

    {
      title: "Tools & Concepts",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "DSA",
        "OOP",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Core Competencies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                bg-slate-950
                border
                border-slate-800
                rounded-2xl
                p-6
                hover:border-sky-500
                transition-all
                duration-300
              "
            >
              <h3 className="text-xl font-semibold mb-5 text-sky-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="
                      bg-slate-800
                      text-slate-300
                      px-3
                      py-2
                      rounded-lg
                      text-sm
                      hover:bg-sky-500
                      hover:text-white
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;