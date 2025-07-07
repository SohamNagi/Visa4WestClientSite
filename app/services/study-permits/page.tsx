"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  GraduationCap,
  DollarSign,
  FileText,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageHeader from "@/components/ServicePageHeader";
import serviceData from "@/data/serviceData.json";

export default function StudyPermitsPage() {
  const data = serviceData["study-permits"];

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
        title="Study Permits"
        subtitle="Your gateway to world-class Canadian education"
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
                Study in Canada
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Canada offers world-renowned education with over 400
                institutions. A study permit allows international students to
                study at designated learning institutions (DLIs) and can be a
                pathway to permanent residence.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Types of Study Programs
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Universities</h4>
                  <p className="text-gray-600">
                    Bachelor's, Master's, and PhD programs at top-ranked
                    Canadian universities
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Colleges</h4>
                  <p className="text-gray-600">
                    Diploma and certificate programs focused on practical skills
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Language Schools
                  </h4>
                  <p className="text-gray-600">
                    English and French language training programs
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Secondary Schools
                  </h4>
                  <p className="text-gray-600">
                    High school programs for international students
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Eligibility Requirements
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  "Acceptance letter from a designated learning institution (DLI)",
                  "Proof of financial support for tuition and living expenses",
                  "No criminal record and good health",
                  "Convince an immigration officer you'll leave Canada after studies",
                  "Language proficiency (if required by institution)",
                  "Medical exam (if required)",
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 mt-1" size={20} />
                    <p className="text-gray-700">{requirement}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Post-Graduation Opportunities
              </h3>
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-green-800 mb-3">
                  Post-Graduation Work Permit (PGWP)
                </h4>
                <p className="text-green-700 mb-3">
                  Graduates from eligible programs can work in Canada for up to
                  3 years after graduation.
                </p>
                <ul className="text-green-700 space-y-1">
                  <li>• No job offer required</li>
                  <li>• Open work permit - work for any employer</li>
                  <li>
                    • Pathway to permanent residence through Canadian Experience
                    Class
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How We Help
              </h3>
              <div className="space-y-4">
                {[
                  "School selection and application assistance",
                  "Study permit application preparation and submission",
                  "Financial documentation guidance",
                  "Statement of Purpose writing support",
                  "Interview preparation (if required)",
                  "Post-arrival settlement services",
                  "PGWP and PR pathway consultation",
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

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">
                  Financial Requirements
                </h4>
                <div className="text-blue-700 text-sm space-y-2">
                  <p>
                    <strong>Tuition:</strong>{" "}
                    {data.financialRequirements.tuition}
                  </p>
                  <p>
                    <strong>Living:</strong> {data.financialRequirements.living}
                  </p>
                  <p>
                    <strong>Total:</strong> {data.financialRequirements.total}
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <h4 className="font-bold text-red-800 mb-2">Ready to Study?</h4>
                <p className="text-red-700 text-sm mb-4">
                  Get expert guidance on your study permit application and
                  school selection.
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
