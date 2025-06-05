"use client";

import { motion } from "framer-motion";
import { AppleImage } from "@/components/AppleImage";
import { appleImages } from "@/lib/images";

export function Highlights() {

  const highlights = [
    {
      id: 1,
      title: "The ultimate over-ear personal listening experience — available in five fresh colors.",
      image: appleImages.gallery.colors,
      alt: "A side-view of five AirPods Max's - The colors are Midnight, Starlight, Orange, Purple and Blue"
    },
    {
      id: 2,
      title: "High-fidelity sound. Exhilarating audio with deep bass, expansive mids, and crisp highs.",
      image: appleImages.gallery.hifi,
      alt: "A woman with her eyes closed, and head tilted to the right, wearing AirPods Max"
    },
    {
      id: 3,
      title: "Pro-level Active Noise Cancellation. Removes unwanted noise so you can immerse yourself in the music.",
      image: appleImages.gallery.anc,
      alt: "Active Noise Cancellation visualization"
    },
    {
      id: 4,
      title: "Over-ear design. From canopy to cushion, built for unequaled fit and comfort.",
      image: appleImages.gallery.design,
      alt: "A man wearing AirPods Max, touching the AirPods Max cushion"
    },
    {
      id: 5,
      title: "USB‑C. Charging is fast and easy with the one‑cable convenience of USB‑C.",
      image: appleImages.gallery.usbc,
      alt: "A close-up of a USB-C Charging cord"
    }
  ];  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.4, 0.25, 1] 
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-12 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 md:mb-6 lg:mb-8 leading-[0.9]">
            Get the highlights.
          </h2>
        </motion.div>        

        {/* Highlights Grid */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-20">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.4, 0.25, 1],
                delay: index * 0.1
              }}
              viewport={{ once: true, margin: "-150px" }}
              className="group"
            >
              {/* Mobile Layout - Always Stacked */}
              <div className="flex flex-col space-y-4 md:space-y-6 lg:hidden">
                {/* Content First on Mobile */}
                <motion.div
                  className="space-y-3 text-center px-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.25, 0.4, 0.25, 1],
                    delay: 0.2
                  }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-tight max-w-sm mx-auto">
                    {highlight.title}
                  </h3>
                </motion.div>

                {/* Image Second on Mobile */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <div className="relative overflow-hidden rounded-lg md:rounded-xl">
                    <AppleImage
                      src={highlight.image}
                      alt={highlight.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Desktop Layout - Side by Side */}
              <div className="hidden lg:grid grid-cols-2 gap-8 xl:gap-12 items-center">
                {/* Image */}
                <motion.div
                  className={`relative ${index % 2 === 1 ? 'order-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <div className="relative overflow-hidden rounded-xl xl:rounded-2xl">
                    <AppleImage
                      src={highlight.image}
                      alt={highlight.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`${index % 2 === 1 ? 'order-1' : ''} space-y-4 text-left`}
                  initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.25, 0.4, 0.25, 1],
                    delay: 0.2
                  }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold text-gray-900 leading-tight">
                    {highlight.title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>);
}
