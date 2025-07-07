"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Heart, DollarSign, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageHeader from "@/components/ServicePageHeader";
import serviceData from "@/data/serviceData.json";

export default function FamilySponsorshipPage() {
  const data = serviceData["family-sponsorship"];

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
        title="Family Sponsorship"
        subtitle="Reunite with your loved ones in Canada"
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
                Sponsor Your Family
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Canadian citizens and permanent residents can sponsor certain
                family members to come to Canada as permanent residents. Family
                sponsorship allows you to reunite with your loved ones in
                Canada.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Who You Can Sponsor
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Spouse/Partner
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Spouse (legally married)</li>
                    <li>• Common-law partner</li>
                    <li>• Conjugal partner</li>
                  </ul>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Children</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Dependent children under 22</li>
                    <li>• Children over 22 with disability</li>
                    <li>• Adopted children</li>
                  </ul>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Parents/Grandparents
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Parents</li>
                    <li>• Grandparents</li>
                    <li>• Through lottery system</li>
                  </ul>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Other Relatives
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Orphaned relatives under 18</li>
                    <li>• Other relatives (special circumstances)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sponsor Requirements
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  "Be a Canadian citizen or permanent resident",
                  "Be at least 18 years old",
                  "Live in Canada (citizens can sponsor from abroad)",
                  "Prove you can financially support the person you're sponsoring",
                  "Sign an undertaking to provide for their basic needs",
                  "Not be in default of a previous sponsorship undertaking",
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 mt-1" size={20} />
                    <p className="text-gray-700">{requirement}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Income Requirements
              </h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-blue-800 mb-3">
                  Minimum Necessary Income (MNI)
                </h4>
                <p className="text-blue-700 mb-3">
                  You must meet the minimum income requirement for 3 consecutive
                  tax years before applying.
                </p>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• Income requirements vary by family size</li>
                  <li>• Must provide Notices of Assessment</li>
                  <li>• Some exceptions apply (spouse/dependent children)</li>
                  <li>• Cannot be on social assistance (except disability)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How We Help
              </h3>
              <div className="space-y-4">
                {[
                  "Eligibility assessment for sponsor and sponsored person",
                  "Income requirement verification and planning",
                  "Complete application preparation and submission",
                  "Document collection and translation",
                  "Relationship evidence compilation",
                  "Interview preparation and representation",
                  "Application monitoring and follow-up",
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
                    <p className="font-semibold text-gray-900">Result</p>
                    <p className="text-gray-600">{data.validityPeriod}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <DollarSign className="text-red-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Sponsorship Fee
                    </p>
                    <p className="text-gray-600">{data.fees.sponsorship}</p>
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

              <div className="mt-8 p-4 bg-pink-50 rounded-lg">
                <h4 className="font-bold text-pink-800 mb-2">
                  Application Fees
                </h4>
                <div className="text-pink-700 text-sm space-y-1">
                  <p>
                    <strong>Principal applicant:</strong> {data.fees.principal}
                  </p>
                  <p>
                    <strong>Dependent child:</strong> {data.fees.dependent}
                  </p>
                  <p>
                    <strong>Biometrics:</strong> {data.fees.biometrics}
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <h4 className="font-bold text-red-800 mb-2">
                  Reunite Your Family
                </h4>
                <p className="text-red-700 text-sm mb-4">
                  Get expert guidance on sponsoring your family members.
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
