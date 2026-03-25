import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-400 mb-4 tracking-widest"
        >
          FULL-STACK DEVELOPER & DATA SCIENTIST
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          I build scalable full-stack systems <br />
          <span className="text-purple-400">driven by data</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 max-w-xl text-lg"
        >
          I design modern web applications, engineer robust backend systems,
          and leverage data science to deliver intelligent, real-world solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg font-medium transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg transition"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="border px-6 py-3 rounded-lg"
          >
            Download CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}