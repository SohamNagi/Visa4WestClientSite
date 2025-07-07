"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, DollarSign, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageHeader from "@/components/ServicePageHeader";
import serviceData from "@/data/serviceData.json";

export default function ExpressEntryPage() {
  const data = serviceData["express-entry"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Account for fixed header height (approximately 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} isHomePage={false} />
      <ServicePageHeader
        title="Express Entry Program"
        subtitle="Fast-track your path to Canadian permanent residence"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Express Entry?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Express Entry is Canada's flagship immigration system for
                skilled workers. It manages applications for three federal
                economic immigration programs: Federal Skilled Worker Program,
                Canadian Experience Class, and Federal Skilled Trades Program.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How It Works
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  "Create your Express Entry profile online",
                  "Receive a Comprehensive Ranking System (CRS) score",
                  "Enter the pool of candidates",
                  "Receive an Invitation to Apply (ITA) if selected",
                  "Submit your complete application within 60 days",
                  "Receive your permanent residence",
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Eligibility Requirements
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Education</h4>
                  <p className="text-gray-600">
                    Minimum high school diploma, with points awarded for higher
                    education
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Language</h4>
                  <p className="text-gray-600">
                    Minimum CLB 7 in English or French (all four abilities)
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Work Experience
                  </h4>
                  <p className="text-gray-600">
                    At least 1 year of continuous full-time skilled work
                    experience
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Age</h4>
                  <p className="text-gray-600">
                    Maximum points awarded between ages 20-29
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How We Help
              </h3>
              <div className="space-y-4">
                {[
                  "Complete eligibility assessment and CRS score calculation",
                  "Profile optimization to maximize your ranking",
                  "Document preparation and review",
                  "Application submission and follow-up",
                  "Post-ITA support and guidance",
                  "Settlement services and advice",
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={20} />
                    <p className="text-gray-700">{service}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-gray-50 p-8 rounded-xl sticky top-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Quick Facts
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Clock className="text-red-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Processing Time
                    </p>
                    <p className="text-gray-600">{data.processingTime}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FileText className="text-red-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Validity</p>
                    <p className="text-gray-600">{data.validityPeriod}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <DollarSign className="text-red-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Government Fees
                    </p>
                    <p className="text-gray-600">{data.fees.government}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {data.quickFacts.map((fact, index) => (
                    <li
                      key={index}
                      className="text-gray-600 text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-4 bg-red-50 rounded-lg">
                <h4 className="font-bold text-red-800 mb-2">Ready to Start?</h4>
                <p className="text-red-700 text-sm mb-4">
                  Get your free assessment today and see if you qualify for
                  Express Entry.
                </p>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Book Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
