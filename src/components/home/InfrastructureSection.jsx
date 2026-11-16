import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, FlaskConical, Microscope, ArrowRight, Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { laboratoryDisciplines } from '../../data/schoolData';

export default function InfrastructureSection() {
  const [fullscreenIndex, setFullscreenIndex] = useState(null);

  const icons = {
    Physics: Atom,
    Chemistry: FlaskConical,
    Biology: Microscope,
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setFullscreenIndex((prev) => (prev > 0 ? prev - 1 : laboratoryDisciplines.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setFullscreenIndex((prev) => (prev < laboratoryDisciplines.length - 1 ? prev + 1 : 0));
  };

  const activeLab = fullscreenIndex !== null ? laboratoryDisciplines[fullscreenIndex] : null;

  return (
    <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#079fa8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Campus Infrastructure"
          title="Dedicated Experimental Laboratories"
          subtitle="Explore our specialized Physics, Chemistry, and Biology laboratories engineered for authentic scientific inquiry and student practice."
          align="center"
          theme="dark"
        />

        {/* 3-Column Clean Gallery Layout for Physics, Chemistry, Biology */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {laboratoryDisciplines.map((facility, idx) => {
            const Icon = icons[facility.discipline] || FlaskConical;
            return (
              <motion.div
                key={facility.discipline}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-slate-950/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-brand-500/60 transition-all duration-300 flex flex-col shadow-soft-lg hover:shadow-soft-xl"
              >
                {/* Image Container with Consistent Aspect Ratio & Fullscreen Trigger */}
                <div 
                  onClick={() => setFullscreenIndex(idx)}
                  className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer"
                >
                  <img
                    src={facility.src}
                    alt={facility.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Category / Discipline Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/90 text-white backdrop-blur-sm shadow-sm">
                      <Icon className="w-3.5 h-3.5" />
                      {facility.badge}
                    </span>
                  </div>

                  {/* Fullscreen indicator button */}
                  <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-slate-900 transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Fullscreen</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 block mb-1">
                      {facility.discipline} Discipline
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                      {facility.description}
                    </p>

                    {/* Key Equipment Listing */}
                    <div className="space-y-2 pt-4 border-t border-slate-800/80">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                        Verified Apparatus:
                      </span>
                      {facility.equipment.map((item, eqIdx) => (
                        <div key={eqIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div 
                    onClick={() => setFullscreenIndex(idx)}
                    className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-brand-400 font-semibold group-hover:text-brand-300 cursor-pointer"
                  >
                    <span>Click photo for fullscreen view</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <Button to="/campus-life" variant="white" size="lg" showArrow={true}>
            Explore Laboratory Infrastructure in Campus Life
          </Button>
        </div>
      </div>

      {/* Fullscreen Modal / Lightbox with Smooth Transitions */}
      <AnimatePresence>
        {fullscreenIndex !== null && activeLab && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setFullscreenIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setFullscreenIndex(null)}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
              aria-label="Close Fullscreen View"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-brand-500 text-white transition-all duration-200 focus:outline-none"
              aria-label="Previous Laboratory"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-brand-500 text-white transition-all duration-200 focus:outline-none"
              aria-label="Next Laboratory"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image & Info */}
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={activeLab.discipline}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-h-[70vh] flex items-center justify-center border border-slate-800"
              >
                <img
                  src={activeLab.src}
                  alt={activeLab.alt}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </motion.div>

              <div className="mt-5 text-center text-white max-w-2xl px-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-xs uppercase tracking-widest font-semibold text-brand-400">
                    {activeLab.badge}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs text-slate-400">
                    Laboratory {fullscreenIndex + 1} of {laboratoryDisciplines.length}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {activeLab.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {activeLab.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
