"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AppleImage } from "@/components/AppleImage";

export function ProductGallery() {
  const [selectedColor, setSelectedColor] = useState("midnight");
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const colors = [
    { id: "midnight", name: "Midnight", color: "#1d1d1f", hex: "#1D1D1F" },
    { id: "starlight", name: "Starlight", color: "#F5F5F7", hex: "#F5F5F7" },
    { id: "blue", name: "Blue", color: "#1e3a8a", hex: "#1E3A8A" },
    { id: "purple", name: "Purple", color: "#7c3aed", hex: "#7C3AED" },
    { id: "orange", name: "Orange", color: "#FF6A00", hex: "#FF6A00" }
  ];  const productImages = {
    midnight: [
      {
        src: "/images/bento_2_airpod_max_midnight__c4h88dvygxkm_xlarge_2x.jpg",
        alt: "AirPods Max Midnight shot from the side"
      },
      {
        src: "/images/bento_3_airpod_max_midnight__csvor4qqjyi6_xlarge_2x.jpg",
        alt: "A close-up of the AirPods Max Midnight canopy"
      },
      {
        src: "/images/bento_4_airpod_max_midnight__d38igje6phm6_xlarge_2x.jpg",
        alt: "A close-up of the AirPods Max Midnight ear cushion"
      },
      {
        src: "/images/bento_5_airpod_max_midnight__fhwni7pkavma_xlarge_2x.jpg",
        alt: "A close-up of AirPods Max Midnight digital crown"
      }
    ],
    starlight: [
      {
        src: "/images/bento_2_airpod_max_starlight__dw9z9ovnwt26_xlarge_2x.jpg",
        alt: "AirPods Max Starlight shot from the side"
      },
      {
        src: "/images/bento_3_airpod_max_starlight__f1r3r9yyebu6_xlarge_2x.jpg",
        alt: "A close-up of the AirPods Max Starlight canopy"
      },
      {
        src: "/images/bento_4_airpod_max_starlight__ebnv443uzms2_xlarge_2x.jpg",
        alt: "A close-up of the AirPods Max Starlight ear cushion"
      },
      {
        src: "/images/bento_5_airpod_max_starlight__ehkae276i342_xlarge_2x.jpg",
        alt: "A close-up of AirPods Max Starlight digital crown"
      }
    ],
    blue: [
      {
        src: "/images/bento_2_airpod_max_blue__f5acfya6r5e2_xlarge_2x.jpg",
        alt: "AirPods Max Blue shot from the side"
      },
      {
        src: "/images/bento_3_airpod_max_blue__z6fv5c2qemqa_xlarge_2x.jpg",
        alt: "A close-up of the AirPods Max Blue canopy"
      },
      {
        src: "/images/bento_4_airpod_max_blue__cfidljp9xd7m_xlarge_2x.jpg",
        alt: "A close-up of the AirPods Max Blue ear cushion"
      },
      {
        src: "/images/bento_5_airpod_max_blue__galot3dk9nyq_xlarge_2x.jpg",
        alt: "A close-up of AirPods Max Blue digital crown"
      }
    ],
    purple: [
      {
        src: "/images/bento_2_airpod_max_purple__gj7lois7cq6a_xlarge_2x.jpg",
        alt: "AirPods Max Purple shot from the side"
      },
      {
        src: "/images/bento_3_airpod_max_purple__c3njc7k6equu_xlarge_2x.jpg",
        alt: "A close-up of the AirPods Max Purple canopy"
      },
      {
        src: "/images/bento_4_airpod_max_purple__d6l96cp8wbau_xlarge_2x.jpg",
        alt: "A close-up of the AirPods Max Purple ear cushion"
      },
      {
        src: "/images/bento_5_airpod_max_purple__fzyi8qccv7e6_xlarge_2x.jpg",
        alt: "A close-up of AirPods Max Purple digital crown"
      }
    ],
    orange: [
      {
        src: "/images/bento_2_airpod_max_orange__vu53zik05f2e_xlarge_2x.jpg",
        alt: "AirPods Max Orange shot from the side"
      },
      {
        src: "/images/bento_3_airpod_max_orange__ckr1n59ibq1y_xlarge_2x.jpg",
        alt: "A close-up of the AirPods Max Orange canopy"
      },
      {
        src: "/images/bento_4_airpod_max_orange__fzf8s5fv45ea_xlarge_2x.jpg",
        alt: "A close-up of the AirPods Max Orange ear cushion"
      },
      {
        src: "/images/bento_5_airpod_max_orange__sr8wgkrex7uy_xlarge_2x.jpg",
        alt: "A close-up of AirPods Max Orange digital crown"
      }
    ]
  };  return (    
    <section ref={ref} className="py-12 md:py-16 lg:py-24 bg-white relative">
      <motion.div style={{ y }} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.4, 0.25, 1] 
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-12 lg:mb-20 relative"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 md:mb-8 lg:mb-16 leading-[0.9]">
            Take a closer look.
          </h2>

          {/* Color Selector */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 lg:mb-16 px-2">
            {colors.map((color, index) => (
              <motion.button
                key={color.id}
                onClick={() => setSelectedColor(color.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  selectedColor === color.id
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                <div 
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full mr-1 md:mr-2 inline-block"
                  style={{ backgroundColor: color.hex }}
                />
                {color.name}
                {selectedColor === color.id && (
                  <motion.div
                    layoutId="activeColor"
                    className="absolute inset-0 bg-black rounded-full"
                    style={{ zIndex: -1 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>        

        {/* Product Images Grid - Mobile First Design */}        
        <motion.div
          key={selectedColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:space-y-0 lg:h-[600px] xl:h-[700px]"
          style={{ position: 'relative' }}
        >
          {/* Main Product Image - Mobile: Full width, Desktop: 2 columns */}          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-2 lg:row-span-2 relative group"
          >
            <div className="relative h-64 sm:h-80 md:h-full md:min-h-[400px] lg:min-h-[500px] bg-gray-50 rounded-2xl md:rounded-3xl overflow-hidden">
              <AppleImage
                src={productImages[selectedColor as keyof typeof productImages][0].src}
                alt={productImages[selectedColor as keyof typeof productImages][0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ position: 'absolute', height: '100%', width: '100%' }}
              />
            </div>
          </motion.div>

          {/* Detail Images - Mobile: Stacked, Desktop: Grid */}
          {productImages[selectedColor as keyof typeof productImages].slice(1).map((image, index) => (
            <motion.div
              key={`${selectedColor}-${index}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + (index * 0.1),
                ease: [0.25, 0.4, 0.25, 1]
              }}              
              className="relative group"
            >
              <div className="relative h-48 sm:h-56 md:h-full md:min-h-[180px] lg:min-h-[220px] bg-gray-50 rounded-xl md:rounded-2xl overflow-hidden">
                <AppleImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ position: 'absolute', height: '100%', width: '100%' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>      
      </motion.div>
    </section>
  );
}
