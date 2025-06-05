"use client";

import { motion } from "framer-motion";
import { AppleImage } from "@/components/AppleImage";
import { appleImages } from "@/lib/images";
import { Navigation } from "@/components/Navigation";

export function Hero() {
  return (
    <section className="relative h-screen bg-white text-white overflow-hidden">
      {/* Apple Navigation */}
      <Navigation />
        {/* Fullscreen Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={appleImages.heroMain}
          crossOrigin="anonymous"
          onError={(e) => {
            // If video fails to load, hide the video element and show the poster image
            const videoElement = e.currentTarget;
            videoElement.style.display = 'none';
            
            // Create an image fallback
            const fallbackImg = document.createElement('img');
            fallbackImg.src = appleImages.heroMain;
            fallbackImg.className = 'w-full h-full object-cover';
            fallbackImg.alt = 'AirPods Max';
            videoElement.parentNode?.appendChild(fallbackImg);
          }}
        >          <source 
            src="/images/xlarge_2x.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>        {/* Content Container */}
      <div className="relative z-40 h-full flex flex-col justify-end px-4 sm:px-8 md:px-12 pb-8 md:pb-12 pt-20">
        {/* Mobile Layout - Vertical Stack at Bottom */}
        <div className="md:hidden flex flex-col items-center text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-3xl font-bold leading-tight text-black"
          >
            AirPods Max
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-4xl font-bold leading-tight text-black"
          >
            Symphonic boom.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col items-center gap-3 pt-4 w-full"
          >
            <p className="text-lg font-semibold text-black">
              ₱23,990
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-medium transition-colors w-full max-w-xs">
              Buy
            </button>
          </motion.div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:flex items-end justify-between">
          {/* Text Content - Lower Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-2 md:space-y-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black backdrop-blur-sm px-2 md:px-4 py-1 md:py-2 rounded"
            >
              AirPods Max
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-black backdrop-blur-sm px-2 md:px-4 py-1 md:py-2 rounded"
            >
              Symphonic boom.
            </motion.h2>
          </motion.div>        
          
          {/* Price and Buy - Lower Right */}        
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <p className="text-xl md:text-2xl font-semibold text-black backdrop-blur-sm px-3 md:px-4 py-2 rounded">
              ₱23,990
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium transition-colors backdrop-blur-sm">
              Buy
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}