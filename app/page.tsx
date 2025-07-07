"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Account for fixed header height (header is about 100px tall)
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle hash-based navigation on page load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          scrollToSection(hash);
        }, 300);
      }
    };

    // Handle initial load
    handleHashNavigation();

    // Handle hash changes (back/forward button)
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} isHomePage={true} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection scrollToSection={scrollToSection} />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
