"use client";

import { motion } from "framer-motion";
import content from "../../content.json";
import HeroCanvas from "../3d/HeroCanvas";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white"
    >
      {/* 3D Canvas Container */}
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-60" id="hero-canvas-container">
        <HeroCanvas />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-6">
            {content.hero.heading.split(" ").map((word, i) => (
              <span
                key={i}
                className={
                  word.toLowerCase() === "future" ||
                  word.toLowerCase() === "construction"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"
                    : ""
                }
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            {content.hero.subheading}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#technology"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1"
            >
              {content.hero.cta}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-full font-bold transition-all shadow-sm transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Abstract decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
