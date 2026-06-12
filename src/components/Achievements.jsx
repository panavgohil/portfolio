function Achievements() {
const achievements = [
{
title: "98.53 Percentile - JEE Main",
subtitle:
"Secured an All India Rank of 22,540 among more than 1.5 million candidates.",
},
{
title: "1st Place - DTU ALTAIR Ideathon",
subtitle:
"Led my team to develop an intelligent technology solution focused on enhancing security personnel safety, situational awareness, and operational effectiveness during high-risk armed operations, securing 1st place among competing teams.",
},
{
title: "IIT Bombay Debate",
subtitle:
"Represented Delhi Technological University as a Speaker at the 19th IIT Bombay Debate, competing against participants from leading institutions across India.",
},
{
title: "IIT Delhi APD",
subtitle:
"Represented Delhi Technological University at the IIT Delhi Asian Parliamentary Debate, engaging in structured argumentation, critical analysis, and public speaking.",
},
{
title: "IGDTUW Parliamentary Debate",
subtitle:
"Represented Delhi Technological University at IGDTUW Parliamentary Debate 2026, demonstrating leadership, communication, and analytical reasoning skills.",
},

];

return ( <section
   id="achievements"
   className="bg-slate-950 text-white py-24 px-6"
 > <div className="max-w-6xl mx-auto">


    <h2 className="text-4xl font-bold mb-12">
      Achievements & Impact
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {achievements.map((item, index) => (
        <div
          key={index}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-sky-500 transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-sky-400">
            {item.title}
          </h3>

          <p className="text-slate-400 mt-3">
            {item.subtitle}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>


);
}

export default Achievements;
