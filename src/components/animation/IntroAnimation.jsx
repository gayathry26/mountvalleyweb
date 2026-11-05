import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { schoolInfo, officialImages } from '../../data/schoolData';

export default function IntroAnimation({ onComplete }) {
  const shouldReduceMotion = useReducedMotion();
  const [stage, setStage] = useState('entering'); // 'entering' -> 'holding' -> 'portal-opening' -> 'done'

  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete?.();
      return;
    }

    // Sequence Timeline (~5.8s Total):
    // 0.0s - 0.4s: Black screen pause
    // 0.4s - 2.0s: Logo opacity fade-in, scale-up & soft turquoise glow
    // 2.0s - 3.2s: Logo holds in center
    // 3.2s - 4.6s: Cinematic expansion: logo scales towards camera,
    //              circular aperture opens to reveal school building
    // 4.6s - 5.4s: Seamless handoff to homepage hero
    // 5.4s: Unmount and complete
    const holdTimer = setTimeout(() => {
      setStage('portal-opening');
    }, 3200);

    const finishTimer = setTimeout(() => {
      setStage('done');
      onComplete?.();
    }, 4800);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(finishTimer);
    };
  }, [shouldReduceMotion, onComplete]);

  if (stage === 'done' || shouldReduceMotion) {
    return null;
  }

  // Turquoise glow behind crest
  const glowVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: [0, 0.75, 0.5],
      scale: [0.75, 1.2, 1.05],
      transition: { duration: 2.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Logo entrance and subsequent zoom towards camera
  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.88,
      filter: 'brightness(0.6)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'brightness(1) drop-shadow(0 0 25px rgba(7, 159, 168, 0.45))',
      transition: { duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
    zoomThrough: {
      scale: 2.1,
      opacity: 0,
      filter: 'brightness(1.2) blur(6px)',
      transition: { duration: 1.25, ease: [0.65, 0, 0.35, 1] }
    }
  };

  // School building image revealed through an expanding circular aperture
  const portalImageVariants = {
    hidden: {
      clipPath: 'circle(0% at 50% 50%)',
      scale: 1.16,
      opacity: 0,
    },
    visible: {
      clipPath: 'circle(150% at 50% 50%)',
      scale: 1.0,
      opacity: 1,
      transition: {
        duration: 1.35,
        ease: [0.77, 0, 0.175, 1], // Cinematic expo aperture opening
      }
    }
  };

  const isExpanding = stage === 'portal-opening';

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          key="cinematic-portal-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white pointer-events-auto select-none overflow-hidden"
          style={{ backgroundColor: '#000000' }}
        >
          {/* Layer 1: Portal Reveal of School Building Photograph */}
          {isExpanding && (
            <motion.div
              variants={portalImageVariants}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 z-0 overflow-hidden"
            >
              <img
                src={officialImages.building.src}
                alt={officialImages.building.alt}
                className="w-full h-full object-cover object-center filter contrast-[1.05]"
              />
              {/* Dual layer overlay identical to live homepage hero */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
              <div className="absolute inset-0 bg-brand-950/30 mix-blend-multiply" />
            </motion.div>
          )}

          {/* Layer 2: Exact Center Logo Showcase with Zoom-Through */}
          <div className="relative z-10 flex items-center justify-center p-8">
            {/* Subtle Turquoise Ambient Glow */}
            {!isExpanding && (
              <motion.div
                variants={glowVariants}
                initial="hidden"
                animate="visible"
                className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(7, 159, 168, 0.4) 0%, rgba(7, 159, 168, 0.15) 45%, transparent 70%)',
                }}
              />
            )}

            {/* Official School Crest Logo */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate={isExpanding ? 'zoomThrough' : 'visible'}
              className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center"
            >
              <img
                src={schoolInfo.logo}
                alt={schoolInfo.name}
                className="w-full h-full object-contain filter"
                priority="true"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
