import { motion } from "framer-motion";

function Achievements() {
const achievements = [
{
icon: "🏆",
title: "1st Place - DTU ALTAIR Ideathon",
subtitle:
"Led my team in developing an intelligent solution for Security Forces Protection during high-risk combat scenarios, securing 1st place among competing teams.",
},
{
icon: "📈",
title: "98.53 Percentile - JEE Main",
subtitle:
"Secured an All India Rank of 22,540 among more than 1.5 million candidates.",
},
{
icon: "🎤",
title: "IIT Bombay Debate",
subtitle:
"Represented Delhi Technological University as a Speaker at the 19th IIT Bombay Debate, competing against participants from leading institutions across India.",
},
{
icon: "🎤",
title: "IIT Delhi APD",
subtitle:
"Represented Delhi Technological University at the IIT Delhi Asian Parliamentary Debate, engaging in structured argumentation, critical analysis, and public speaking.",
},
{
icon: "🎤",
title: "IGDTUW Parliamentary Debate",
subtitle:
"Represented Delhi Technological University at IGDTUW Parliamentary Debate 2026, demonstrating leadership, communication, and analytical reasoning skills.",
},
];

return (
<motion.section
id="achievements"
className="bg-slate-950 text-white py-24 px-6"
initial={{ opacity: 0, y: 80 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.8 }}
> <div className="max-w-6xl mx-auto">


    <h2 className="text-4xl font-bold mb-4">
      Achievements & Impact
    </h2>

    <p className="text-slate-400 mb-12 text-lg">
      Milestones that reflect leadership, technical excellence,
      communication, and continuous growth.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {achievements.map((item, index) => (
        <div
          key={index}
          className="
            bg-slate-900
            border border-slate-800
            rounded-2xl
            p-6
            hover:border-sky-500
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]
            transition-all
            duration-300
          "
        >
          <div className="text-4xl mb-4">
            {item.icon}
          </div>

          <h3 className="text-xl font-semibold text-sky-400">
            {item.title}
          </h3>

          <p className="text-slate-400 mt-4 leading-7">
            {item.subtitle}
          </p>
        </div>
      ))}

    </div>

  </div>
</motion.section>


);
}

export default Achievements;
