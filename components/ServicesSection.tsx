"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Briefcase,
  Plane,
  Heart,
  Users,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Award size={32} />,
      title: "Express Entry",
      description:
        "Fast-track your permanent residence application through Canada's Express Entry system.",
      href: "/services/express-entry",
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Study Permits",
      description:
        "Get guidance for studying in Canada with proper documentation and support.",
      href: "/services/study-permits",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Work Permits",
      description: "Secure work authorization to build your career in Canada.",
      href: "/services/work-permits",
    },
    {
      icon: <Plane size={32} />,
      title: "Visitor Visas",
      description:
        "Visit Canada for tourism, business, or family visits with proper documentation.",
      href: "/services/visitor-visas",
    },
    {
      icon: <Heart size={32} />,
      title: "Family Sponsorship",
      description:
        "Reunite with your loved ones through family sponsorship programs.",
      href: "/services/family-sponsorship",
    },
    {
      icon: <Users size={32} />,
      title: "PR & Citizenship",
      description:
        "Complete your journey to permanent residence and Canadian citizenship.",
      href: "/services/pr-citizenship",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive immigration services to help you achieve your Canadian
            dreams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.href} key={index}>
              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-80 flex flex-col"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-red-600">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
