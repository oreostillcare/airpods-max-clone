"use client";

import { motion } from "framer-motion";

export function TechnicalDetails() {
  return (    <section className="relative w-full h-screen overflow-hidden">
      {/* Text Overlay - Lower Left */}
      <div className="absolute bottom-16 left-8 md:left-16 lg:left-24 z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-lg"
        >
          {/* Small Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-medium text-white mb-2 tracking-tight"
          >
            AirPods Max
          </motion.h3>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8"
          >
            Symphonic boom.
          </motion.h1>

          {/* Price and Buy Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <span className="text-2xl md:text-3xl font-semibold text-white">
              ₱32,990
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Buy
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Bar Overlay */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <nav className="flex items-center justify-between px-6 py-4 bg-black/10 backdrop-blur-sm">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-white">🍎</div>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Store</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Mac</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">iPad</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">iPhone</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Watch</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors font-medium">AirPods</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">TV & Home</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Entertainment</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Accessories</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white/80 hover:text-white transition-colors text-lg">🔍</button>
            <button className="text-white/80 hover:text-white transition-colors text-lg">🛍️</button>
          </div>
        </nav>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60 text-xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
