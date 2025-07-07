"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Success stories from clients who achieved their Canadian immigration
            dreams with our help
          </p>
        </motion.div>

        <div className="text-center">
          <div id="shapo-widget-74ac81c785b73fddfe0b"></div>
        </div>
      </div>

      <Script
        id="shapo-embed-js"
        src="https://cdn.shapo.io/js/embed.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
