"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AppleImage } from "@/components/AppleImage";
import { appleImages } from "@/lib/images";

export function SoundFeatures() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);return (    <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.4, 0.25, 1] 
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16 lg:mb-24"
        >          
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 md:mb-8 leading-[0.9]">
            Unheard-of sound.
          </h2>
        </motion.div>

        {/* Main Content Section */}
        <div className="space-y-12 md:space-y-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:space-y-0 items-center mb-16 md:mb-20 lg:mb-32">
          {/* Features Content - Mobile First */}
          <div className="lg:order-2 space-y-8 md:space-y-12 lg:space-y-16">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.25, 0.4, 0.25, 1],
                delay: 0.2 
              }}
              viewport={{ once: true }}            
            >              
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-3 md:mb-4 lg:mb-6 leading-tight">
                Pro‑level Active Noise Cancellation.
              </h3>              
              <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
                With up to 2x more noise cancelled, pro‑level Active Noise Cancellation counters external sound with equal anti‑noise. With control over what you hear — and don&apos;t hear — you can immerse yourself in music and podcasts, or simply stay focused, like never before.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.25, 0.4, 0.25, 1],
                delay: 0.4 
              }}
              viewport={{ once: true }}            
            >              
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-3 md:mb-4 lg:mb-6 leading-tight">
                Transparency mode.
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
                Press the noise control button to switch to Transparency mode, which lets outside sound in so you can interact naturally with your surroundings.
              </p>
            </motion.div>
          </div>

          {/* Hero Image with 3D effect */}
          <motion.div
            style={{ y, rotateX }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.4, 0.25, 1] 
            }}
            viewport={{ once: true }}
            className="lg:order-1 perspective-1000"
          >            
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="relative aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                style={{ position: 'relative', height: '400px', minHeight: '350px', width: '100%' }}
              >
                <AppleImage
                  src={appleImages.featuresAnc}
                  alt="A woman's head, shot from the side. She's looking slightly up and wearing AirPods Max"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Technology Detail Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.4, 0.25, 1] 
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >          
          <div className="text-center mb-8 md:mb-12 lg:mb-16">            
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 md:mb-6 lg:mb-8 leading-[0.9]">
              All the vivid details.
            </h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              AirPods Max deliver stunningly detailed, high-fidelity audio for an unparalleled listening experience. Each part of the custom-built driver works to produce sound with ultra-low distortion across the audible range — so you'll hear every note with a new sense of clarity.
            </p>
          </div>
          
          {/* Large Tech Image */}          
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden bg-black" style={{ position: 'relative', minHeight: '300px' }}>              
              <AppleImage
                src="/images/audio_airpod_max__filcqiddcmye_xlarge_2x (1).jpg"
                alt="Woman with AirPods Max headphones with closed eyes experiencing audio"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                priority
              />
              
              {/* SVG Icons positioned at the bottom of the image - Mobile Responsive */}              
              <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center items-center gap-4 md:gap-8 lg:gap-16 px-4 md:px-8">
                <div className="text-center">                  
                  <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-1 md:mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.44 26.77">
                    <path fill="#FFFFFF" d="M17.2,1.38a.37.37,0,0,0-.14.5h0A1,1,0,0,1,17,3.12,3,3,0,0,1,15.68,4a10.21,10.21,0,0,1-3.46.56A10.11,10.11,0,0,1,8.77,4a3,3,0,0,1-1.32-.84,1,1,0,0,1-.08-1.23h0a.36.36,0,0,0-.06-.44.37.37,0,0,0-.52,0A1.87,1.87,0,0,0,6.25,2.5a2.11,2.11,0,0,0,.28,1.24A4.09,4.09,0,0,0,8.22,5.17a9.23,9.23,0,0,0,4,.85,9.2,9.2,0,0,0,4-.85,4.17,4.17,0,0,0,1.69-1.43,2,2,0,0,0,.27-1.24,1.8,1.8,0,0,0-.54-1.06.35.35,0,0,0-.44-.06ZM15.2,0a.31.31,0,0,0-.15.41v0a.48.48,0,0,1-.08.62,2.15,2.15,0,0,1-.75.43,6.35,6.35,0,0,1-2,.3,6.09,6.09,0,0,1-2-.31,1.77,1.77,0,0,1-.74-.43A.47.47,0,0,1,9.38.46v0A.31.31,0,0,0,9.34.1a.32.32,0,0,0-.44,0,1.16,1.16,0,0,0-.37.69,1.37,1.37,0,0,0,.17.82,2.52,2.52,0,0,0,1.06.93,5.5,5.5,0,0,0,2.46.54,5.5,5.5,0,0,0,2.46-.54,2.46,2.46,0,0,0,1.06-.93,1.45,1.45,0,0,0,.17-.82,1.16,1.16,0,0,0-.37-.69.3.3,0,0,0-.34,0Zm7.86,17.22a.35.35,0,0,0-.5-.13h0A1,1,0,0,1,21.32,17a3,3,0,0,1-.84-1.31,10.21,10.21,0,0,1-.56-3.46,10.19,10.19,0,0,1,.56-3.45,3,3,0,0,1,.84-1.32,1,1,0,0,1,1.23-.07h0A.36.36,0,0,0,23,7.37a.36.36,0,0,0,0-.52,1.8,1.8,0,0,0-1.06-.54,2,2,0,0,0-1.24.27,4.13,4.13,0,0,0-1.43,1.7,9.16,9.16,0,0,0-.85,4,9.2,9.2,0,0,0,.85,4A4.17,4.17,0,0,0,20.7,18a2.13,2.13,0,0,0,1.24.28A1.87,1.87,0,0,0,23,17.69.35.35,0,0,0,23.06,17.25Zm1.35-2a.3.3,0,0,0-.4-.15l0,0a.47.47,0,0,1-.61-.09,1.75,1.75,0,0,1-.43-.75,6,6,0,0,1-.31-2,6.09,6.09,0,0,1,.31-2,1.77,1.77,0,0,1,.43-.74A.47.47,0,0,1,24,9.43h0a.31.31,0,0,0,.33,0,.31.31,0,0,0,0-.44,1.16,1.16,0,0,0-.69-.37,1.45,1.45,0,0,0-.82.17,2.52,2.52,0,0,0-.93,1.06,5.5,5.5,0,0,0-.54,2.46,5.47,5.47,0,0,0,.54,2.46,2.54,2.54,0,0,0,.93,1.07,1.37,1.37,0,0,0,.82.16,1.16,1.16,0,0,0,.69-.37.3.3,0,0,0,.05-.34ZM1.88,17.12a.35.35,0,0,0-.44.05.36.36,0,0,0,0,.52,1.87,1.87,0,0,0,1.06.55A2.11,2.11,0,0,0,3.74,18a4.17,4.17,0,0,0,1.43-1.69,9.2,9.2,0,0,0,.85-4,9.16,9.16,0,0,0-.85-4,4.13,4.13,0,0,0-1.43-1.7A2,2,0,0,0,2.5,6.31a1.8,1.8,0,0,0-1.06.54.37.37,0,0,0,.44.58h0a1,1,0,0,1,1.23.07A3,3,0,0,1,4,8.82a10.19,10.19,0,0,1,.56,3.45A10.21,10.21,0,0,1,4,15.73,3,3,0,0,1,3.12,17a1,1,0,0,1-1.23.08Zm-1.45-2a.29.29,0,0,0-.33.06.3.3,0,0,0,0,.43A1.16,1.16,0,0,0,.77,16a1.37,1.37,0,0,0,.82-.16,2.54,2.54,0,0,0,.93-1.07,5.47,5.47,0,0,0,.54-2.46,5.5,5.5,0,0,0-.54-2.46,2.52,2.52,0,0,0-.93-1.06,1.45,1.45,0,0,0-.82-.17A1.16,1.16,0,0,0,.08,9a.32.32,0,0,0,0,.34.3.3,0,0,0,.4.15h0a.47.47,0,0,1,.61.09,1.89,1.89,0,0,1,.44.74,6.35,6.35,0,0,1,.3,2,6.27,6.27,0,0,1-.3,2,2,2,0,0,1-.43.75.47.47,0,0,1-.62.08h0Zm15.73-2.83a4.1,4.1,0,0,1-3.94,4.25,4.1,4.1,0,0,1-3.94-4.25A4.1,4.1,0,0,1,12.22,8,4.1,4.1,0,0,1,16.16,12.27Zm-3.94,6C7.13,18.28,4,21.78,4,24.92c0,1.23.78,1.85,2.31,1.85H18.16c1.53,0,2.31-.62,2.31-1.85,0-3.14-3.16-6.64-8.25-6.64Z" />
                  </svg>
                  <span className="text-xs md:text-sm text-white font-medium">Spatial Audio</span>
                </div>
                
                <div className="text-center">                  
                  <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mx-auto mb-1 md:mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.1 25.1">
                    <path fill="#FFFFFF" d="M20.55,16.59A.55.55,0,0,1,20,16V9a.55.55,0,0,1,1.1,0v7A.55.55,0,0,1,20.55,16.59ZM17.1,21.67V3.42a.55.55,0,0,0-1.1,0V21.67a.55.55,0,0,0,1.1,0Zm-3.89-3.12v-12A.55.55,0,0,0,12.66,6a.55.55,0,0,0-.55.55v12a.55.55,0,0,0,.55.55A.55.55,0,0,0,13.21,18.55Zm-4.11,6V.55A.55.55,0,0,0,8.55,0,.55.55,0,0,0,8,.55v24a.55.55,0,0,0,.55.55A.55.55,0,0,0,9.1,24.55Zm-4-5v-14a.55.55,0,0,0-1.1,0v14a.55.55,0,1,0,1.1,0Zm-4-4.75V10.3a.55.55,0,0,0-.55-.55A.55.55,0,0,0,0,10.3v4.5a.55.55,0,0,0,.55.55A.55.55,0,0,0,1.1,14.8Z" />
                  </svg>
                  <span className="text-xs md:text-sm text-white font-medium">Adaptive EQ</span>
                </div>
                
                <div className="text-center">                  
                  <svg className="w-16 h-6 md:w-20 md:h-8 lg:w-24 lg:h-10 mx-auto mb-1 md:mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0.5 27.28 97 51.33">
                    <path fill="#fff" d="m44.4949 78.6097c3.174 0 5.5032-1.5604 7.3034-3.4843l-2.2234-3.2231c-1.2034 1.2034-2.5199 1.8657-3.9139 1.8657-10.1436 0-11.6476-46.4883-29.1627-46.4883-10.0389 0-14.5364 14.9005-15.9701 28.6264-.1776 1.5408.4919 2.3796 1.8013 2.3796 1.011 0 1.6077-.5807 1.7314-1.745.9365-8.6436 4.2786-24.3414 10.9048-24.3414 3.7144 0 5.8514 4.3295 7.1027 8.8099-1.2217 3.9773-2.2766 8.3447-2.9815 14.8968-.1587 1.5408.4866 2.3796 1.8012 2.3796 1.0217 0 1.6131-.5807 1.761-1.745.2558-2.4584.9507-7.117 1.6321-9.477 3.7263 12.3941 9.1326 31.5459 20.2138 31.5459zm18.6017 0c2.7994 0 5.2015-1.2585 6.9773-3.1391l-2.334-3.1693c-.9121.8044-2.102 1.4667-3.4717 1.4667-10.0169 0-11.5992-46.4883-29.1627-46.4883-3.344 0-5.7757 1.5604-7.5758 3.4842l2.272 3.3202c1.2465-1.2224 2.5145-1.8848 3.9086-1.8848 9.7345 0 11.743 46.4103 29.3863 46.4103zm18.3888 0c10.0145 0 14.5364-14.9005 15.9997-28.6265.1236-1.5408-.5214-2.3743-1.8551-2.3743-.9868 0-1.5834.5754-1.7315 1.764-.9068 8.6246-4.2437 24.2929-10.8806 24.2929-3.7143 0-5.8756-4.3053-7.0974-8.8099 1.2165-3.953 2.2525-8.3203 2.9817-14.8727.1291-1.5408-.4919-2.3743-1.8066-2.3743-1.0406 0-1.6372.5754-1.761 1.764-.2799 2.4342-.9506 7.0685-1.6562 9.4528-3.7021-12.3941-9.1083-31.5459-20.1895-31.5459-3.174 0-5.5032 1.5604-7.2791 3.5084l2.2044 3.2231c1.1981-1.2277 2.5146-1.8901 3.9086-1.8901 10.1435 0 11.6529 46.4884 29.1627 46.4884z" />
                  </svg>
                  <span className="text-xs md:text-sm text-white font-medium">Lossless Audio</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>      
      </div>
    </section>
  );
}
