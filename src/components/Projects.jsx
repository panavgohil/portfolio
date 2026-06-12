function Projects() {
const projects = [
{
title: "Autonomous SENTRY Robot",
description:
"Autonomous reconnaissance and hazard detection platform integrating ESP32-CAM, gas sensing, fire detection, motion sensing, and real-time visual monitoring.",
tech: "Arduino • ESP32-CAM • IoT • Sensors",
github: "https://github.com/panavgohil/Autonomous-SENTRY-Robot",
},
{
title: "Driver Drowsiness Detection",
description:
"Real-time driver monitoring system using CNNs and computer vision to detect prolonged eye closure and trigger safety alerts.",
tech: "Python • TensorFlow • OpenCV • CNN",
github: "https://github.com/panavgohil/Driver_Drowsiness_Detection_Using_CNN",
},
{
title: "Real-Time Hand Gesture Recognition",
description:
"Machine learning powered gesture recognition system achieving 98.75% classification accuracy using computer vision techniques.",
tech: "Python • OpenCV • MediaPipe • ML",
github: "https://github.com/panavgohil/RealTime_HandGestureRecognition",
},
{
title: "Gesture Controlled Mouse",
description:
"Human-computer interaction system that allows mouse movement and clicking using hand gestures captured through a webcam.",
tech: "Python • OpenCV • MediaPipe",
github: "https://github.com/panavgohil/Gesture_Control_Mouse",
},
];

return ( <section
   id="projects"
   className="bg-slate-950 text-white py-24 px-6"
 > <div className="max-w-6xl mx-auto">

```
    <h2 className="text-4xl font-bold mb-12">
      Featured Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-sky-500 transition duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4">
            {project.title}
          </h3>

          <p className="text-slate-400 leading-7">
            {project.description}
          </p>

          <p className="text-sky-400 mt-5">
            {project.tech}
          </p>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-5 py-3 bg-sky-500 rounded-xl hover:bg-sky-600 transition"
          >
            View Project
          </a>
        </div>
      ))}

    </div>

  </div>
</section>


);
}

export default Projects;
