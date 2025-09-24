import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface DarkroomAnimationProps {
  text?: string;
  gradientImages?: Array<{
    src: string;
    alt: string;
  }>;
  productImages?: Array<{
    src: string;
    alt: string;
  }>;
}

const CodropsDarkroomAnimation: React.FC<DarkroomAnimationProps> = ({
  text = "DIE CUT STICKERS",
  gradientImages = [
    { src: "/gradient-core.png", alt: "Core Gradient" },
    { src: "/gradient-pro.png", alt: "Pro Gradient" }
  ],
  productImages = [
    { src: "/a-purple-poo-with-a-gold-chain-around-its-neck.jpg", alt: "Die Cut Sticker" },
    { src: "/474979068_1995194667640793_7993899386284265998_n.jpg", alt: "Custom Vinyl Stickers" }
  ]
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const railVariants = {
    hidden: { 
      clipPath: "inset(0 100% 0 0)",
      opacity: 0 
    },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const gradientVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      x: -100 
    },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.8,
        ease: [0.04, 1.15, 0.4, 0.99]
      }
    }
  };

  const boxVariants = {
    hidden: { 
      y: "100vh",
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: [0.04, 1.15, 0.4, 0.99],
        delay: 0.5
      }
    }
  };

  const textPathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  return (
    <div 
      ref={ref}
      className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center"
      style={{
        fontFamily: "Reddit Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
        background: `url('${productImages[1]?.src}') center center / cover no-repeat fixed`
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.main 
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Rail Section with Glowing Text */}
        <motion.div 
          className="relative mb-16"
          variants={railVariants}
        >
          <div className="relative">
            {/* Gradient Background Effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              {gradientImages.map((gradient, index) => (
                <motion.img
                  key={index}
                  src={gradient.src}
                  alt={gradient.alt}
                  className="absolute w-32 h-32 md:w-48 md:h-48 object-cover opacity-80"
                  style={{
                    left: index === 0 ? '-20%' : '20%',
                    filter: 'blur(1px)',
                    mixBlendMode: 'screen'
                  }}
                  variants={gradientVariants}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              ))}
            </div>

            {/* SVG Text with Clipping and Glow */}
            <svg 
              width="800" 
              height="200" 
              viewBox="0 0 800 200" 
              className="w-full max-w-4xl h-auto"
              style={{ filter: 'drop-shadow(0 0 20px rgba(240, 243, 248, 0.5))' }}
            >
              <defs>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#f0f3f8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <clipPath id="textClip">
                  <motion.path
                    d="M0,0 L800,0 L800,200 L0,200 Z"
                    variants={textPathVariants}
                  />
                </clipPath>
              </defs>
              
              <motion.text
                x="400"
                y="120"
                textAnchor="middle"
                className="text-6xl md:text-8xl font-bold tracking-wider"
                fill="url(#textGradient)"
                filter="url(#glow)"
                clipPath="url(#textClip)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                {text}
              </motion.text>
            </svg>

            {/* Moving Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "linear"
              }}
              style={{ width: '50%' }}
            />
          </div>
        </motion.div>

        {/* Floating Product Boxes */}
        <div className="relative w-full max-w-6xl flex justify-center items-center gap-16">
          {productImages.slice(0, 2).map((product, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              variants={boxVariants}
              whileHover={{ 
                scale: 1.05,
                rotate: index === 0 ? -5 : 5
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 rounded-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                <img
                  src={gradientImages[index]?.src}
                  alt={gradientImages[index]?.alt}
                  className="w-full h-full object-cover rounded-xl"
                  style={{ filter: 'blur(2px)' }}
                />
              </div>

              {/* Product Image */}
              <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={product.src}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Floating Animation */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  y: [0, -10, 0],
                  rotate: [index === 0 ? -2 : 2, index === 0 ? 2 : -2, index === 0 ? -2 : 2]
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.main>
    </div>
  );
};

export default CodropsDarkroomAnimation;