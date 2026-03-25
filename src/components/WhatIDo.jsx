import { motion } from "framer-motion";

export default function WhatIDo() {
  const services = [
    {
      title: "Full-Stack Development",
      desc: "Building scalable web apps with modern frontend and backend technologies.",
    },
    {
      title: "Backend Engineering",
      desc: "Designing APIs, authentication systems, and database architectures.",
    },
    {
      title: "Data Science",
      desc: "Creating predictive models and turning data into actionable insights.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl border dark:border-gray-800 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}