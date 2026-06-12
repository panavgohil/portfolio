function Skills() {
const skillGroups = [
{
title: "Programming",
skills: ["Python", "C", "C++", "Google Apps Script"],
},
{
title: "Artificial Intelligence",
skills: ["Machine Learning", "Scikit-Learn", "Model Evaluation"],
},
{
title: "Computer Vision",
skills: ["OpenCV", "MediaPipe", "Image Processing"],
},
{
title: "Embedded Systems",
skills: ["Arduino", "ESP32-CAM", "IoT", "Sensor Integration"],
},
{
title: "Tools",
skills: ["Git", "GitHub", "VS Code"],
},
{
title: "Core Concepts",
skills: ["DSA", "OOP", "Problem Solving"],
},
];

return ( <section
   id="skills"
   className="bg-slate-900 text-white py-24 px-6"
 > <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12">
      Technical Toolkit
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {skillGroups.map((group, index) => (
        <div
          key={index}
          className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-sky-500 transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-5">
            {group.title}
          </h3>

          <div className="flex flex-wrap gap-3">

            {group.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="bg-slate-800 text-slate-300 px-3 py-2 rounded-lg"
              >
                {skill}
              </span>
            ))}

          </div>
        </div>
      ))}

    </div>

  </div>
</section>

);
}

export default Skills;
