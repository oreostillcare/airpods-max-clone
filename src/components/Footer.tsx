"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  const footerSections = [
    {
      title: "Shop and Learn",
      links: [
        { name: "Store", href: "#" },
        { name: "Mac", href: "#" },
        { name: "iPad", href: "#" },
        { name: "iPhone", href: "#" },
        { name: "Watch", href: "#" },
        { name: "AirPods", href: "#" },
        { name: "TV & Home", href: "#" },
        { name: "AirTag", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Gift Cards", href: "#" }
      ]
    },
    {
      title: "Apple Wallet",
      links: [
        { name: "Wallet", href: "#" },
        { name: "Apple Card", href: "#" },
        { name: "Apple Pay", href: "#" },
        { name: "Apple Cash", href: "#" }
      ]
    },
    {
      title: "Account",
      links: [
        { name: "Manage Your Apple Account", href: "#" },
        { name: "Apple Store Account", href: "#" },
        { name: "iCloud.com", href: "#" }
      ]
    },
    {
      title: "Entertainment",
      links: [
        { name: "Apple One", href: "#" },
        { name: "Apple TV+", href: "#" },
        { name: "Apple Music", href: "#" },
        { name: "Apple Arcade", href: "#" },
        { name: "Apple Podcasts", href: "#" },
        { name: "Apple Books", href: "#" },
        { name: "App Store", href: "#" }
      ]
    },
    {
      title: "Apple Store",
      links: [
        { name: "Find a Store", href: "#" },
        { name: "Genius Bar", href: "#" },
        { name: "Today at Apple", href: "#" },
        { name: "Apple Summer Camp", href: "#" },
        { name: "Apple Store App", href: "#" },
        { name: "Certified Refurbished", href: "#" },
        { name: "Apple Trade In", href: "#" },
        { name: "Financing", href: "#" },
        { name: "Carrier Deals at Apple", href: "#" },
        { name: "Order Status", href: "#" },
        { name: "Shopping Help", href: "#" }
      ]
    },
    {
      title: "For Business",
      links: [
        { name: "Apple and Business", href: "#" },
        { name: "Shop for Business", href: "#" }
      ]
    },
    {
      title: "For Education",
      links: [
        { name: "Apple and Education", href: "#" },
        { name: "Shop for K12", href: "#" },
        { name: "Shop for College", href: "#" }
      ]
    },
    {
      title: "For Healthcare",
      links: [
        { name: "Apple in Healthcare", href: "#" },
        { name: "Health on Apple Watch", href: "#" },
        { name: "Health Records on iPhone", href: "#" }
      ]
    },
    {
      title: "Apple Values",
      links: [
        { name: "Accessibility", href: "#" },
        { name: "Education", href: "#" },
        { name: "Environment", href: "#" },
        { name: "Inclusion and Diversity", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Racial Equity and Justice", href: "#" },
        { name: "Supply Chain", href: "#" }
      ]
    },
    {
      title: "About Apple",
      links: [
        { name: "Newsroom", href: "#" },
        { name: "Apple Leadership", href: "#" },
        { name: "Career Opportunities", href: "#" },
        { name: "Investors", href: "#" },
        { name: "Ethics & Compliance", href: "#" },
        { name: "Events", href: "#" },
        { name: "Contact Apple", href: "#" }
      ]
    }
  ];

  const footerNotes = [
    "Up to 2x more Active Noise Cancellation compared with AirPods Pro (1st generation) and AirPods 4 with Active Noise Cancellation.",
    "Charging requires a compatible USB‑C charger.",
    "Compatible hardware and software required. Works with compatible content in supported apps. Not all content available in Dolby Atmos.",
    "Lossless Audio listening requires a wired USB‑C connection and compatible content from supported apps and services.",
    "Requires an Apple Account and a compatible Apple device running the latest operating system software.",
    "Requires a compatible Apple device running the latest operating system software.",
    "Testing conducted by Apple in July and August 2024 using preproduction AirPods Max paired with preproduction iPhone 16 Pro Max units.",
    "Battery life depends on device settings, environment, usage, and many other factors."
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      {/* Footnotes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {footerNotes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="text-xs text-gray-600 leading-relaxed"
            >
              <span className="font-medium">{index + 1}.</span> {note}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="text-sm text-gray-600 mb-2">
              More ways to shop: <Link href="#" className="text-blue-600 hover:underline">Find a retailer</Link> near you.
            </p>
            <p className="text-sm text-gray-600">
              Or call <Link href="tel:1800-1651-0525" className="text-blue-600 hover:underline">1800-1651-0525</Link> (Smart/PLDT), <Link href="tel:1800-8474-7382" className="text-blue-600 hover:underline">1800-8474-7382</Link> (Globe).
            </p>
          </motion.div>

          {/* Main Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 className="text-sm font-semibold text-black">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Country Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-300 pt-8 mb-8"
          >
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Philippines. Choose your country or region
            </Link>
          </motion.div>

          {/* Bottom Links and Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0"
          >
            <div className="text-sm text-gray-600">
              Copyright © 2025 Apple Inc. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-6">
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Use", href: "#" },
                { name: "Sales and Refunds", href: "#" },
                { name: "Legal", href: "#" },
                { name: "Site Map", href: "#" }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
