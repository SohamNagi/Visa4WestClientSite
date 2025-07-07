"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) {
  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/Visa4WestNo Padding.png"
                alt="Visa4West Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-bold">Visa4West</span>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner for Canadian immigration services. Making
              your Canadian dreams come true.
            </p>
            <div className="flex items-center space-x-2">
              <Image
                src="/Flag_of_Canada.svg"
                alt="Canadian Flag"
                width={32}
                height={24}
                className="object-contain"
              />
              <span className="text-sm text-gray-300">
                Proudly serving clients immigrating to Canada
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 hidden sm:block">
              Professional Credentials
            </h4>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative bg-white rounded-lg border-2 border-gray-300 shadow-md p-3 mx-auto sm:mx-0">
                  <Image
                    src="/cicc logo.jpg"
                    alt="CICC Logo"
                    width={160}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-semibold">CICC Accredited</p>
                  <p className="text-sm text-gray-300">
                    Regulated Canadian Immigration Consultant
                  </p>
                </div>
              </div>
              <div className="text-xs text-gray-400 hidden sm:block">
                Licensed by the College of Immigration and Citizenship
                Consultants (CICC)
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2025 Visa4West.</p>
        </div>
      </div>
    </footer>
  );
}
