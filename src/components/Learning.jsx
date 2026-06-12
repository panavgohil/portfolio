import { motion } from "framer-motion";

function Learning() {
  const topics = [
    "Deep Learning",
    "TensorFlow",
    "Computer Vision",
    "Technology Entrepreneurship",
    "Data Structures & Algorithms",
    "VLSI Design",
  ];

  return (
    <section
      id="learning"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Currently Learning
        </motion.h2>

        <motion.p
          className="text-slate-400 text-lg mb-12 max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Continuously exploring technologies that bridge
          intelligent software with real-world hardware systems.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">

          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-6
                text-center
                hover:border-sky-500
                transition-all
              "
            >
              <h3 className="text-xl font-medium text-sky-400">
                {topic}
              </h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Learning;