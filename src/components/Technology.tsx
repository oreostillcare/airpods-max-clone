"use client";

import { motion } from "framer-motion";
import { AppleImage } from "@/components/AppleImage";

export function Technology() {
  return (
    <section id="design" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section with repeating features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center space-x-8 mb-12 overflow-hidden">
            <motion.div
              animate={{ x: [-100, 100] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              className="flex space-x-8 whitespace-nowrap"
            >
              <span className="text-gray-600">Hypnotic listening.</span>
              <span className="text-gray-600">Dynamic designed.</span>
              <span className="text-gray-600">Naturally interact.</span>
              <span className="text-gray-600">Hypnotic listening.</span>
              <span className="text-gray-600">Dynamic designed.</span>
              <span className="text-gray-600">Naturally interact.</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Large Headphone Display */}        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >          <div className="relative inline-block">
            <div className="relative w-[800px] h-[600px] mx-auto" style={{ position: 'relative', height: '600px' }}>
              <AppleImage                src="/images/anc_airpod_max_close_up__gavc4fgecei6_large_2x.png"
                alt="Apple AirPods Max - Close Up Technology View"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                style={{ objectFit: 'contain' }}
                className="drop-shadow-2xl"
              />
            </div>
            
            {/* Floating labels around the headphone */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-10 left-10 text-gray-400 text-sm bg-gray-900 px-3 py-2 rounded-lg border border-gray-700"
            >
              Premium Materials
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-10 right-10 text-gray-400 text-sm bg-gray-900 px-3 py-2 rounded-lg border border-gray-700"
            >
              Noise Cancellation
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm bg-gray-900 px-3 py-2 rounded-lg border border-gray-700"
            >
              Spatial Audio
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}