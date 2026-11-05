import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import { officialImages } from '../../data/schoolData';

export default function HeroAnimation({ introFinished = true }) {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutElem = document.getElementById('about-section');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
    }
  };

  // Staggered timing coordinated with the intro entrance:
  // Starts revealing smoothly as the black intro screen fades out at ~4.5s
  const baseDelay = introFinished ? 0.2 : 4.5;

  const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.85,
        delay: baseDelay + i * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const fadeUpVariants = {
    hidden: { y: shouldReduceMotion ? 0 : 25, opacity: 0 },
    visible: (delay) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.7,
        delay: baseDelay + delay,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const imageRevealVariants = {
    hidden: {
      clipPath: shouldReduceMotion ? 'inset(0% 0% 0% 0%)' : 'inset(12% 0% 12% 0%)',
      scale: shouldReduceMotion ? 1 : 1.15,
      opacity: 0.5
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      scale: 1,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 1.6,
        delay: baseDelay - 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const heroHighlights = [
    "Holistic Value-Based Education",
    "Modern Physics & Science Labs",
    "Nurturing Learning Environment"
  ];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image Container with Clip-Path Reveal and Zoom-Out */}
      <motion.div
        variants={imageRevealVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <img
          src={officialImages.building.src}
          alt={officialImages.building.alt}
          loading="eager"
          className="w-full h-full object-cover object-center transform filter contrast-[1.05]"
        />

        {/* Sophisticated dual layer institutional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        <div className="absolute inset-0 bg-brand-950/30 mix-blend-multiply" />
      </motion.div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-32 lg:pb-20 text-white">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <motion.div
            variants={fadeUpVariants}
            custom={0.1}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/40 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-4 h-4 text-brand-300 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-200">
              Mount Valley Public School
            </span>
          </motion.div>

          {/* Masked Upward Staggered Headline */}
          <div className="space-y-1 sm:space-y-2 mb-6">
            <div className="overflow-hidden">
              <motion.h1
                variants={lineVariants}
                custom={0.2}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white font-sans"
              >
                Where Every Child
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={lineVariants}
                custom={0.35}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-200 to-white font-sans"
              >
                Discovers Their Potential
              </motion.h1>
            </div>
          </div>

          {/* Supporting Text */}
          <motion.p
            variants={fadeUpVariants}
            custom={0.5}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl"
          >
            Building knowledge, nurturing values and inspiring young minds for a brighter tomorrow.
          </motion.p>

          {/* Pillar Highlights */}
          <motion.div
            variants={fadeUpVariants}
            custom={0.65}
            initial="hidden"
            animate="visible"
            className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300"
          >
            {heroHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </motion.div>

          {/* Staggered Action Buttons */}
          <motion.div
            variants={fadeUpVariants}
            custom={0.8}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Button
              onClick={handleScrollToAbout}
              variant="white"
              size="lg"
              className="group"
            >
              <Compass className="w-4 h-4 mr-2 text-brand-600 transition-transform group-hover:rotate-45" />
              Explore Our School
            </Button>

            <Button
              to="/admissions"
              variant="primary"
              size="lg"
              showArrow={true}
            >
              Admission Enquiry
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <motion.div
        variants={fadeUpVariants}
        custom={1.0}
        initial="hidden"
        animate="visible"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center cursor-pointer group"
        onClick={handleScrollToAbout}
      >
        <span className="text-[11px] uppercase tracking-widest text-slate-400 font-medium group-hover:text-brand-300 transition-colors mb-1">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-brand-400 group-hover:text-white transition-colors" />
        </motion.div>
      </motion.div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
    </section>
  );
}

