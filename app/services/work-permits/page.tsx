"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Briefcase,
  DollarSign,
  FileText,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageHeader from "@/components/ServicePageHeader";
import serviceData from "@/data/serviceData.json";

export default function WorkPermitsPage() {
  const data = serviceData["work-permits"];

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

  const navigateToContact = () => {
    // Navigate to home page contact section
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} isHomePage={false} />
      <ServicePageHeader
        title="Work Permits"
        subtitle="Build your career in Canada with proper work authorization"
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
                Work in Canada
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A work permit allows foreign nationals to work legally in
                Canada. There are different types of work permits depending on
                your situation, skills, and the job offer you have received.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Types of Work Permits
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Employer-Specific
                  </h4>
                  <p className="text-gray-600">
                    Work for a specific employer in a specific location for a
                    specific period
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Open Work Permit
                  </h4>
                  <p className="text-gray-600">
                    Work for any employer anywhere in Canada (with some
                    exceptions)
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Popular Work Permit Programs
              </h3>
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Temporary Foreign Worker Program (TFWP)
                  </h4>
                  <p className="text-gray-600 mb-2">
                    For employers who need to hire foreign workers to fill
                    temporary labor shortages.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Requires Labour Market Impact Assessment (LMIA)</li>
                    <li>• Job offer from Canadian employer required</li>
                    <li>
                      • Employer must prove no Canadian available for the job
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    International Mobility Program (IMP)
                  </h4>
                  <p className="text-gray-600 mb-2">
                    For workers whose employment provides significant benefits
                    to Canada.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• No LMIA required</li>
                    <li>• Includes NAFTA/USMCA professionals</li>
                    <li>• Intra-company transfers</li>
                    <li>• International agreements (CETA, CPTPP)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Post-Graduation Work Permit (PGWP)
                  </h4>
                  <p className="text-gray-600 mb-2">
                    For international students who graduated from eligible
                    Canadian institutions.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Open work permit - work for any employer</li>
                    <li>• Valid for up to 3 years</li>
                    <li>• Pathway to permanent residence</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How We Help
              </h3>
              <div className="space-y-4">
                {[
                  "Work permit eligibility assessment",
                  "Job offer validation and LMIA support",
                  "Application preparation and submission",
                  "Document collection and review",
                  "Employer compliance guidance",
                  "Extension and renewal assistance",
                  "Pathway to permanent residence planning",
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

              <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold text-purple-800 mb-2">LMIA Fees</h4>
                <p className="text-purple-700 text-sm mb-2">
                  <strong>LMIA Application:</strong> {data.fees.lmia}
                </p>
                <p className="text-purple-600 text-xs">
                  (Paid by employer, not worker)
                </p>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <h4 className="font-bold text-red-800 mb-2">Ready to Work?</h4>
                <p className="text-red-700 text-sm mb-4">
                  Get expert guidance on your work permit application and job
                  search.
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
