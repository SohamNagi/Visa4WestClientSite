"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Script from "next/script";

export default function TestimonialsSection() {
  const testimonials: Array<{
    name: string;
    program: string;
    text: string;
    rating: number;
  }> = [];

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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-red-600 text-sm">{testimonial.program}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
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
