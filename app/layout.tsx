import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Visa4West Immigration",
  description:
    "Expert Canadian immigration guidance tailored to your journey. CICC-accredited consultants helping with Express Entry, Study Permits, Work Permits, and more.",
  keywords:
    "Canadian immigration, CICC accredited, Express Entry, Study Permits, Work Permits, Family Sponsorship, Toronto immigration consultant",
  authors: [{ name: "Visa4West" }],
  openGraph: {
    title: "Visa4West - Your Trusted Path to Canada",
    description:
      "Expert Canadian immigration guidance tailored to your journey.",
    type: "website",
    locale: "en_CA",
  },
  icons: {
    icon: "/Visa4WestNo Padding.png",
    apple: "/Visa4WestNo Padding.png",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
