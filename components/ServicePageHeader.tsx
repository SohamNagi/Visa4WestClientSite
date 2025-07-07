"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface ServicePageHeaderProps {
  title: string;
  subtitle: string;
}

export default function ServicePageHeader({
  title,
  subtitle,
}: ServicePageHeaderProps) {
  const router = useRouter();

  const scrollToHomeSection = (sectionId: string) => {
    // Navigate to home page and then scroll to section
    router.push(`/#${sectionId}`);
    // Small delay to ensure page loads before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <header className="bg-gray-100 text-gray-800 py-12 mt-20 relative overflow-hidden border-b-4 border-gray-300">
      <div className="container mx-auto px-4 relative z-10">
        <Link
          href="/#home"
          className="inline-flex items-center text-gray-700 hover:text-red-600 mb-6 font-semibold"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        <motion.h1
          className="text-5xl font-black text-gray-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        <p className="text-xl text-gray-600 font-medium">{subtitle}</p>

        {/* Navigation to main sections */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => scrollToHomeSection("about")}
            className="bg-white px-4 py-2 rounded-lg text-gray-700 hover:text-red-600 transition-colors font-medium shadow-sm hover:shadow-md"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToHomeSection("services")}
            className="bg-white px-4 py-2 rounded-lg text-gray-700 hover:text-red-600 transition-colors font-medium shadow-sm hover:shadow-md"
          >
            All Services
          </button>
          <button
            onClick={() => scrollToHomeSection("contact")}
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
