"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Plane, DollarSign, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageHeader from "@/components/ServicePageHeader";
import serviceData from "@/data/serviceData.json";

export default function VisitorVisasPage() {
  const data = serviceData["visitor-visas"];

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

  const navigateToContact = () => {
    // Navigate to home page contact section
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} isHomePage={false} />
      <ServicePageHeader
        title="Visitor Visas"
        subtitle="Visit Canada for tourism, family visits, or business"
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
                Visit Canada
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A visitor visa (also called a temporary resident visa) allows
                you to visit Canada for tourism, visiting family and friends, or
                business purposes. Most visitors can stay for up to 6 months.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Types of Visitor Visas
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Single Entry</h4>
                  <p className="text-gray-600">
                    Allows one entry to Canada. Once you leave, you need a new
                    visa to return.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Multiple Entry
                  </h4>
                  <p className="text-gray-600">
                    Allows multiple entries to Canada until the visa expires
                    (usually up to 10 years).
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Eligibility Requirements
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  "Valid passport or travel document",
                  "Be in good health and have no criminal record",
                  "Convince an officer you'll leave Canada at the end of your visit",
                  "Show you have enough money for your stay",
                  "Not be prohibited from entering Canada",
                  "Provide any documents an officer asks for",
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 mt-1" size={20} />
                    <p className="text-gray-700">{requirement}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Required Documents
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Personal Documents
                    </h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Valid passport</li>
                      <li>• Digital photos</li>
                      <li>• Travel history</li>
                      <li>• Family information form</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Financial Documents
                    </h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Bank statements</li>
                      <li>• Employment letter</li>
                      <li>• Property ownership</li>
                      <li>• Income tax returns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Purpose of Visit
                    </h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Letter of invitation (if applicable)</li>
                      <li>• Travel itinerary</li>
                      <li>• Hotel reservations</li>
                      <li>• Return ticket</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Additional</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Medical exam (if required)</li>
                      <li>• Police certificates</li>
                      <li>• Biometrics</li>
                      <li>• Purpose of visit letter</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How We Help
              </h3>
              <div className="space-y-4">
                {[
                  "Complete eligibility assessment",
                  "Document checklist and preparation",
                  "Application form completion",
                  "Letter of invitation assistance",
                  "Interview preparation (if required)",
                  "Application tracking and follow-up",
                  "Extension and renewal guidance",
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
                  <Plane className="text-red-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Stay Duration</p>
                    <p className="text-gray-600">{data.stayDuration}</p>
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

              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <h4 className="font-bold text-orange-800 mb-2">
                  Family Applications
                </h4>
                <p className="text-orange-700 text-sm">
                  <strong>Family of 5+:</strong> {data.fees.family}
                </p>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <h4 className="font-bold text-red-800 mb-2">Ready to Visit?</h4>
                <p className="text-red-700 text-sm mb-4">
                  Get expert help with your visitor visa application.
                </p>
                <button
                  onClick={navigateToContact}
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
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
