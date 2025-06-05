"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AppleImage } from "@/components/AppleImage";
import { appleImages } from "@/lib/images";

export function DesignSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);  const designFeatures = [
    {
      title: "Breathable knit mesh canopy",
      description: "The canopy spanning the headband is made from a breathable knit mesh, distributing weight to reduce on-head pressure.",
      image: appleImages.designFeatures?.breathableMesh || "/images/airpods-max-midnight.jpg",
      delay: 0
    },
    {
      title: "Memory foam ear cushions",
      description: "The beautifully anodized aluminum cups feature a revolutionary mechanism that allows each cup to rotate independently and balance pressure.",
      image: appleImages.designFeatures?.memoryFoam || "/images/hero-airpods.jpg",
      delay: 0.1
    },
    {
      title: "Telescoping arms",
      description: "The stainless steel frame is wrapped with a soft-to-the-touch material for a remarkably luxurious feel.",
      image: appleImages.designFeatures?.telescopingArms || appleImages.featuresDesign,
      delay: 0.2
    }
  ];
  return (
    <section ref={sectionRef} className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        {/* Main heading with parallax */}
        <motion.div
          style={{ y }}
          className="text-center mb-32"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-tight"
          >
            Everything designed
            <span className="block">in perfect harmony.</span>
          </motion.h2>
        </motion.div>

        {/* Hero section with large image and content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          {/* Large Product Image */}
          <motion.div
            style={{ scale, opacity }}
            className="lg:col-span-7 relative"          >            <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden" style={{ position: 'relative', height: '600px' }}>
              <AppleImage
                src="/images/design_airpod_max__c1kuh0ewgca6_large.png"
                alt="AirPods Max design details"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-center"
                style={{ height: '100%', width: '100%', inset: 0, color: 'transparent' }}
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Designed for the perfect fit
              </h3>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                From cushion to canopy, AirPods Max are designed for an uncompromising fit with 
                unequaled comfort that creates the optimal acoustic seal for many different head 
                shapes — fully immersing you in every sound.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >                <a 
                  href="#features" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-xl font-medium transition-colors group"
                >
                  View all features
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>        {/* Design features grid - Enhanced Apple-like layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {designFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: feature.delay,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 lg:p-10 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-200/50 border border-gray-100">                <div className="relative aspect-[16/12] mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50" style={{ position: 'relative', height: '180px' }}>                  <AppleImage                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-2xl lg:text-3xl font-bold text-black leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >          <div className="bg-black text-white rounded-3xl p-16 max-w-4xl mx-auto">
            <h3 className="text-5xl md:text-6xl font-bold mb-6">
              Every detail matters
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From the canopy to the cushions, every component has been carefully considered 
              to deliver an unparalleled listening experience.
            </p>
              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Compare models
            </motion.button>          </div>
          
          {/* AirPods Navigation Menu - Styled exactly as per reference */}
          <div className="mt-16 py-12 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-5xl font-bold text-gray-900 mb-10">AirPods Max</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                <div>
                  <h3 className="text-gray-500 font-normal mb-4">Explore AirPods</h3>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">Explore All AirPods</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">AirPods 4</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">AirPods Pro 2</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">AirPods Max</a></li>
                    <li className="pt-4"><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">Compare AirPods</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-gray-500 font-normal mb-4">Shop AirPods</h3>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">Shop AirPods</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">AirPods Accessories</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-gray-500 font-normal mb-4">More from AirPods</h3>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">AirPods Support</a></li>
                    <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">Apple Music</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
