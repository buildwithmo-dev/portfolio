import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ParticlesBg from "./ParticlesBg";

export default function Hero() {
  const [mode, setMode] = useState("dev");

  // 🔄 Toggle logic from Version 1
  useEffect(() => {
    const interval = setInterval(() => {
      setMode((prev) => (prev === "dev" ? "data" : "dev"));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* 🔥 Animated Gradient Background from Version 2 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-black to-indigo-900 animate-gradient opacity-90"></div>

      <ParticlesBg />

      {/* 🔥 Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        {/* 🔄 Dynamic Role Label */}
        <motion.p
          key={mode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm tracking-widest text-gray-300 mb-4"
        >
          {mode === "dev"
            ? "FULL-STACK SOFTWARE ENGINEER"
            : "DATA ANALYST & MACHINE LEARNING"}
        </motion.p>

        {/* 🔥 Headline (Static Animation) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Building scalable systems <br />
          <span className="text-purple-400">powered by data</span>
        </motion.h1>

        {/* 🔥 Dynamic Description */}
        <div className="h-20"> {/* Fixed height prevents layout jump during switch */}
          <motion.p
            key={mode + "-desc"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-gray-300 max-w-xl mx-auto text-lg"
          >
            {mode === "dev"
              ? "I build performant web applications, scalable APIs, and production-ready systems."
              : "I analyze data, build pipelines, and generate insights that drive decisions."}
          </motion.p>
        </div>

        {/* 🔥 Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg font-medium transition shadow-lg shadow-purple-500/30"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* 🔽 Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-16 text-gray-400 text-sm"
        >
          ↓ Scroll
        </motion.div>
      </div>
    </section>
  );
}