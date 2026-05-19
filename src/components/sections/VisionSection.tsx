"use client";

import { motion } from "framer-motion";
import content from "../../content.json";
import VisionCanvas from "../3d/VisionCanvas";

export default function VisionSection() {
  return (
    <section id="vision" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {content.vision.heading}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              {content.vision.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative h-[400px] w-full rounded-3xl overflow-hidden bg-gray-200 shadow-2xl"
          >
            <div id="vision-canvas-container" className="absolute inset-0 z-10">
              <VisionCanvas />
            </div>

            {/* Fallback background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50 opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
