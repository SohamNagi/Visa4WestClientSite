"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) {
  return (
    <section
      id="home"
      className="pt-28 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-red-600 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-navy-800 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-600 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Trusted Path to <span className="text-red-600">Canada</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert immigration guidance tailored to your journey. Navigate
            Canada's immigration system with confidence through our
            CICC-accredited services.
          </p>
          <div className="relative z-20">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                scrollToSection("services");
              }}
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-red-700 transition-colors cursor-pointer relative z-30 pointer-events-auto"
              type="button"
              style={{ position: "relative", zIndex: 1000 }}
            >
              Start Your Journey
            </button>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full h-96 bg-gradient-to-br from-red-100 to-blue-100 rounded-2xl overflow-hidden">
            <Image
              src="/canadaCitzenship.jpg"
              alt="Canadian Citizenship - Your Gateway to Canada"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <p className="text-gray-800 font-bold text-lg mb-1">
                  Your Gateway to Canada
                </p>
                <p className="text-gray-600 font-medium">
                  Professional Immigration Services
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
