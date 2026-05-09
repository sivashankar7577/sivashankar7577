"use client";

import { motion } from "framer-motion";
import content from "../../content.json";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl text-blue-100 mb-10">
              Join us in redefining the future of construction. Reach out to discuss projects, partnerships, or investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`mailto:${content.site.contact.email}`}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Email Us
              </a>
              <a
                href={`tel:${content.site.contact.phone}`}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
