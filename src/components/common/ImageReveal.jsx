import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ImageReveal({
  src,
  alt,
  direction = 'left', // 'left', 'right', 'bottom'
  aspectRatio = 'aspect-[16/10]',
  className = '',
  imgClassName = '',
  caption,
  badge,
  priority = false,
  onClick
}) {
  const shouldReduceMotion = useReducedMotion();

  const curtainVariants = {
    hidden: {
      x: 0,
      opacity: 1
    },
    visible: {
      x: shouldReduceMotion ? 0 : direction === 'left' ? '101%' : direction === 'right' ? '-101%' : 0,
      y: shouldReduceMotion ? 0 : direction === 'bottom' ? '-101%' : 0,
      opacity: shouldReduceMotion ? 0 : 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.85,
        ease: [0.77, 0, 0.175, 1],
      }
    }
  };

  const imageVariants = {
    hidden: {
      scale: shouldReduceMotion ? 1 : 1.12,
      opacity: 0.85,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl bg-slate-100 shadow-soft-md group ${aspectRatio} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="w-full h-full relative"
      >
        {/* Animated image */}
        <motion.img
          variants={imageVariants}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imgClassName}`}
        />

        {/* Reveal curtain mask */}
        <motion.div
          variants={curtainVariants}
          className="absolute inset-0 z-10 bg-brand-600 origin-left pointer-events-none"
          style={{
            originX: direction === 'left' ? 0 : 1,
          }}
        />

        {/* Subtle bottom gradient for readability if caption exists */}
        {caption && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-5 pt-12 text-white z-20 pointer-events-none">
            {badge && (
              <span className="inline-block px-2.5 py-0.5 mb-1.5 text-xs font-semibold uppercase tracking-wider bg-brand-500/90 text-white rounded">
                {badge}
              </span>
            )}
            <p className="text-sm md:text-base font-medium text-white/95">{caption}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
