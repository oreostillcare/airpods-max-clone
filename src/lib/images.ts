// Apple AirPods Max image assets using local images to avoid CORS issues
export const appleImages = {
  // Hero section - main product image
  heroMain: "/images/anc_startframe__gc8z375m3gmm_xlarge_2x.jpg",  // Features section - product images
  featuresMain: "/images/hifi_static__fbsq0dr3be2q_xlarge_2x.jpg",
  featuresAnc: "/images/anc_airpod_max_lifestyle__duzobvqwpz42_large_2x.jpg",
  featuresDesign: "/images/bento_1_airpod_max_midnight__4jy1tkqh9qay_xlarge_2x.jpg",
    // Technology section - large display
  technologyLarge: "/images/anc_airpod_max_close_up__gavc4fgecei6_large_2x.png",
    
  // Design section - features images using local assets
  designFeatures: {
    breathableMesh: "/images/bento_1_airpod_max_midnight__4jy1tkqh9qay_xlarge_2x.jpg",
    memoryFoam: "/images/bento_2_airpod_max_midnight__c4h88dvygxkm_xlarge_2x.jpg",
    telescopingArms: "/images/bento_3_airpod_max_midnight__csvor4qqjyi6_xlarge_2x.jpg"
  },
  
  // Pricing section - product showcase
  pricingMain: "/images/bento_1_airpod_max_midnight__4jy1tkqh9qay_xlarge_2x.jpg",
  
  // Color variants for pricing section - using local bento images
  colors: {
    midnight: "/images/bento_1_airpod_max_midnight__4jy1tkqh9qay_xlarge_2x.jpg",
    starlight: "/images/bento_1_airpod_max_starlight__f7v0k5blkzqm_xlarge_2x.jpg",
    blue: "/images/bento_1_airpod_max_blue__blqgkfdancya_xlarge_2x.jpg",
    purple: "/images/bento_2_airpod_max_purple__gj7lois7cq6a_xlarge_2x.jpg",
    orange: "/images/bento_2_airpod_max_orange__vu53zik05f2e_xlarge_2x.jpg"
  },
    // Gallery images for media cards - using local static images
  gallery: {
    colors: "/images/colors_static__vc9xxywyt4ya_xlarge_2x.jpg",
    hifi: "/images/hifi_static__fbsq0dr3be2q_xlarge_2x.jpg",
    anc: "/images/anc_startframe__gc8z375m3gmm_xlarge_2x.jpg",
    design: "/images/design_static__dph7m26odtg2_xlarge_2x.jpg",
    usbc: "/images/usbc_static__dowayetbvr6u_xlarge_2x.jpg"
  },
  
  // Battery and features - using local battery images
  battery: {
    detection: "/images/battery_detection__dkh147ag158i_large_2x.jpg",
    listen: "/images/battery_listen__dn1y8rezfhme_large_2x.jpg",
    usbc: "/images/battery_usbc__cerb8838rzqq_large_2x.jpg",
    longLasting: "/images/battery_long_lasting__caqezpw4kc6a_large_2x.jpg"
  },
  
  // Additional high-resolution assets - using local bento and design images
  showcase: {
    lifestyle: "/images/bento_3_airpod_max_midnight__csvor4qqjyi6_xlarge_2x.jpg",
    comfort: "/images/bento_4_airpod_max_starlight__ebnv443uzms2_xlarge_2x.jpg",
    materials: "/images/bento_5_airpod_max_blue__galot3dk9nyq_xlarge_2x.jpg"
  }
};

// Image component with optimization
export interface AppleImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  quality?: number;
}
