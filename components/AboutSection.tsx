"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Visa4West
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Visa4West, we are dedicated to making your Canadian immigration
              dreams a reality. Our team of experienced professionals provides
              personalized guidance through every step of the immigration
              process.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As a Regulated Canadian Immigration Consultant (RCIC), we are
              licensed and regulated by the College of Immigration and
              Citizenship Consultants (CICC). Our CICC accreditation ensures you
              receive ethical, competent, and reliable guidance.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-6 bg-gray-50 px-8 py-6 rounded-lg border-2 border-gray-200">
                <div className="relative bg-white rounded-lg border-2 border-gray-300 shadow-md p-4">
                  <Image
                    src="/cicc logo.jpg"
                    alt="CICC Logo"
                    width={200}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xl">
                    CICC Accredited
                  </p>
                  <p className="text-base text-gray-600 font-medium">
                    Regulated Canadian Immigration Consultant
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-[3/2] bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl overflow-hidden">
              <Image
                src="/Gurjit.jpg"
                alt="Gurjit - Immigration Consultant"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <p className="text-gray-800 font-semibold text-lg">Gurjit Nagi</p>
              <p className="text-gray-600 text-sm">
                Regulated Canadian Immigration Consultant
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
