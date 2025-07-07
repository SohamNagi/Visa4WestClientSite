"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  scrollToSection?: (sectionId: string) => void;
  isHomePage?: boolean;
}

export default function Header({
  scrollToSection,
  isHomePage = false,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (isHomePage && scrollToSection) {
      scrollToSection(sectionId);
    } else {
      // Redirect to homepage with section and handle scrolling after navigation
      window.location.href = `/#${sectionId}`;
      // Add a small delay to ensure page loads before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-gray-100 shadow-xl"
          : "bg-gray-100/95 backdrop-blur-sm"
      } border-b-2 border-gray-200`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/Visa4WestNo Padding.png"
              alt="Visa4West Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <span className="text-3xl font-black text-navy-800 tracking-tight">
              Visa4West
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavClick("home")}
            className="text-gray-800 hover:text-red-600 transition-colors font-semibold text-lg"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="text-gray-800 hover:text-red-600 transition-colors font-semibold text-lg"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("services")}
            className="text-gray-800 hover:text-red-600 transition-colors font-semibold text-lg"
          >
            Services
          </button>
          <motion.button
            onClick={() => handleNavClick("contact")}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#B71C1C",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={28} className="text-gray-800" />
          ) : (
            <Menu size={28} className="text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-gray-100 border-t border-gray-300"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            <button
              onClick={() => handleNavClick("home")}
              className="block text-gray-800 hover:text-red-600 transition-colors font-semibold text-lg w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="block text-gray-800 hover:text-red-600 transition-colors font-semibold text-lg w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="block text-gray-800 hover:text-red-600 transition-colors font-semibold text-lg w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="block text-gray-800 hover:text-red-600 transition-colors font-semibold text-lg w-full text-left"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg text-center mt-4 shadow-lg"
            >
              Book Consultation
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
