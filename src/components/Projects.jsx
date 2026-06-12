import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Autonomous SENTRY Robot",
      description:
        "Autonomous reconnaissance and hazard detection platform integrating ESP32-CAM, gas sensing, fire detection, motion sensing, and real-time visual monitoring.",
      tech: "Arduino • ESP32-CAM • IoT • Sensors",
      github:
        "https://github.com/panavgohil/Autonomous-SENTRY-Robot",
    },
    {
      title: "Driver Drowsiness Detection",
      description:
        "Real-time driver monitoring system using CNNs and computer vision to detect prolonged eye closure and trigger safety alerts.",
      tech: "Python • TensorFlow • OpenCV • CNN",
      github:
        "https://github.com/panavgohil/Driver_Drowsiness_Detection_Using_CNN",
    },
    {
      title: "Real-Time Hand Gesture Recognition",
      description:
        "Machine learning powered gesture recognition system achieving 98.75% classification accuracy using computer vision techniques.",
      tech: "Python • OpenCV • MediaPipe • Machine Learning",
      github:
        "https://github.com/panavgohil/RealTime_HandGestureRecognition",
    },
    {
      title: "Gesture Controlled Mouse",
      description:
        "Human-computer interaction system that enables cursor movement and mouse clicks using hand gestures captured through a webcam.",
      tech: "Python • OpenCV • MediaPipe",
      github:
        "https://github.com/panavgohil/Gesture_Control_Mouse",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-8
                hover:border-sky-500
                transition-all
                duration-300
                flex
                flex-col
                justify-between
              "
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-8">
                  {project.description}
                </p>

                <p className="text-sky-400 mt-5 font-medium">
                  {project.tech}
                </p>
              </div>

              <div className="mt-8 flex justify-end">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-slate-400
                    hover:text-sky-400
                    transition
                    duration-300
                  "
                >
                  <FaGithub size={34} />
                </a>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;