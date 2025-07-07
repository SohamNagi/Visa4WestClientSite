"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Award, DollarSign, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageHeader from "@/components/ServicePageHeader";
import serviceData from "@/data/serviceData.json";

export default function PRCitizenshipPage() {
  const data = serviceData["pr-citizenship"];

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
        title="PR Card Renewal & Citizenship"
        subtitle="Maintain your status and achieve Canadian citizenship"
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
                Permanent Residence & Citizenship
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Once you become a permanent resident, you may need to renew your
                PR card to maintain your status. After meeting residency
                requirements, you can apply for Canadian citizenship.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                PR Card Renewal
              </h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-blue-800 mb-3">When to Renew</h4>
                <p className="text-blue-700 mb-3">
                  Your PR card is valid for 5 years. You should renew it if:
                </p>
                <ul className="text-blue-700 space-y-1">
                  <li>
                    • Your card has expired or will expire within 9 months
                  </li>
                  <li>• Your card has been lost, stolen, or damaged</li>
                  <li>• Your name or other information has changed</li>
                  <li>• You're a child whose photo no longer looks like you</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Residency Obligations
              </h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    2 out of 5 Years Rule
                  </h4>
                  <p className="text-gray-600 mb-2">
                    You must be physically present in Canada for at least 730
                    days (2 years) in every 5-year period.
                  </p>
                  <div className="text-gray-600 text-sm">
                    <p>
                      <strong>Time that counts:</strong>
                    </p>
                    <ul className="mt-1 space-y-1">
                      <li>• Days physically present in Canada</li>
                      <li>
                        • Days accompanying Canadian citizen spouse abroad
                      </li>
                      <li>• Days working for Canadian business abroad</li>
                      <li>
                        • Days accompanying PR spouse on authorized assignment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Canadian Citizenship
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Eligibility Requirements
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Permanent resident status</li>
                    <li>• 3 years (1,095 days) in Canada in last 5 years</li>
                    <li>• Filed income taxes (if required)</li>
                    <li>• Language proficiency (CLB 4)</li>
                    <li>• Pass citizenship test</li>
                    <li>• No criminal record</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Citizenship Test
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Canadian history, values, symbols</li>
                    <li>• Institutions and systems of government</li>
                    <li>• Geography and regions</li>
                    <li>• English or French language skills</li>
                    <li>• Online or in-person format</li>
                    <li>• Pass mark: 15/20 (75%)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Benefits of Citizenship
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  "Right to vote and run for political office",
                  "Canadian passport for visa-free travel",
                  "Protection under Canadian law worldwide",
                  "No residency obligations",
                  "Pass citizenship to children born abroad",
                  "Access to certain government jobs",
                  "Full Charter rights and freedoms",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="text-red-600" size={20} />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How We Help
              </h3>
              <div className="space-y-4">
                {[
                  "PR card renewal eligibility assessment",
                  "Residency calculation and documentation",
                  "Citizenship eligibility evaluation",
                  "Application preparation and submission",
                  "Citizenship test preparation",
                  "Interview preparation and representation",
                  "Appeals and complex cases",
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
                    <p className="font-semibold text-gray-900">PR Renewal</p>
                    <p className="text-gray-600">
                      {data.processingTime.pr_renewal}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="text-red-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Citizenship</p>
                    <p className="text-gray-600">
                      {data.processingTime.citizenship}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FileText className="text-red-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Result</p>
                    <p className="text-gray-600">{data.validityPeriod}</p>
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
                  Application Fees
                </h4>
                <div className="text-blue-700 text-sm space-y-1">
                  <p>
                    <strong>PR Card:</strong> {data.fees.pr_card}
                  </p>
                  <p>
                    <strong>Citizenship (Adult):</strong>{" "}
                    {data.fees.citizenship_adult}
                  </p>
                  <p>
                    <strong>Citizenship (Minor):</strong>{" "}
                    {data.fees.citizenship_minor}
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <h4 className="font-bold text-red-800 mb-2">Ready to Apply?</h4>
                <p className="text-red-700 text-sm mb-4">
                  Get expert guidance on your PR renewal or citizenship
                  application.
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
