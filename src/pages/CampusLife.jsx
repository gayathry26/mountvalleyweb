import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, FlaskConical, Microscope, CheckCircle2, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SEO from '../components/common/SEO';
import ImageReveal from '../components/common/ImageReveal';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import AdmissionsCTA from '../components/home/AdmissionsCTA';
import { officialImages, laboratoryDisciplines } from '../data/schoolData';

export default function CampusLife() {
  const [fullscreenIndex, setFullscreenIndex] = useState(null);

  const labIcons = {
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
    <>
      <SEO
        title="Campus Life & Laboratory Facilities"
        description="Experience campus life at Mount Valley Public School: explore our modern school building, interactive classrooms, and fully equipped Physics, Chemistry, and Biology laboratories."
      />

      <PageHeader
        title="Campus Life & Facilities"
        subtitle="A vibrant, supportive educational campus designed to foster academic inquiry, experimental discovery, and healthy student development."
        breadcrumb={[{ name: "Campus Life" }]}
      />

      {/* Section 1: Campus Overview */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Building Image */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <ImageReveal
                  src={officialImages.building.src}
                  alt={officialImages.building.alt}
                  direction="left"
                  aspectRatio="aspect-[4/3]"
                  badge="Main Academic Campus"
                  caption="Mount Valley Public School main building featuring modern architectural structure"
                  className="shadow-soft-lg rounded-2xl"
                />
              </div>
            </div>

            {/* Right: Overview Content */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-0.5 bg-brand-500" />
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-600">
                    Campus Overview
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  A Setting Built for Focus, Comfort & Exploration
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                  The campus of Mount Valley Public School is thoughtfully laid out to provide children with a calm, purposeful environment away from urban chaos. High-ceilinged corridors, abundant daylight, and fresh air create an uplifting atmosphere for everyday learning.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  From security at our entrance gates to dedicated subject zones, every aspect of our physical infrastructure supports academic discipline, safety, and constructive student interactions throughout the school day.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Spacious, sunlit corridors",
                    "Continuous campus security",
                    "Dedicated science wings",
                    "Clean drinking water facilities",
                    "Disciplined, tranquil campus atmosphere",
                    "Faculty-monitored student areas"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Button to="/admissions" variant="primary" size="md" showArrow={true}>
                  Admissions Enquiry
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Classroom Learning Environment */}
      <section className="section-padding bg-slate-50 border-y border-slate-200/60 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-0.5 bg-brand-500" />
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-600">
                    Classroom Life
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  Stimulating Classrooms with Visual Educational Aids
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                  Our classrooms prioritize clean ergonomics, personal workspace, and active student-teacher interaction. Distinct individual desks allow students to organize their books, stationery, and Mount Valley school bags with ease.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  Classroom walls showcase student-prepared project charts spanning biological classifications, soil preparation cycles, animal protection, and mathematical principles. This turns the classroom walls into a continuous visual reference during daily lessons.
                </p>

                <div className="flex gap-4">
                  <Button to="/academics" variant="outline" size="md">
                    Explore Academics
                  </Button>
                  <Button to="/gallery" variant="ghost" size="md">
                    View Classroom Photos
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right: Classroom Image */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <ImageReveal
                  src={officialImages.classroom.src}
                  alt={officialImages.classroom.alt}
                  direction="right"
                  aspectRatio="aspect-[4/3]"
                  badge="Classroom Learning"
                  caption="Mount Valley classroom with dedicated desks, wall project charts, and attending faculty"
                  className="shadow-soft-lg rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Dedicated Laboratories Showcase (Physics, Chemistry, Biology) */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionHeading
            badge="Practical Infrastructure"
            title="Physics, Chemistry & Biology Laboratories"
            subtitle="Explore our three specialized laboratory environments, each furnished with discipline-specific experimental apparatus for student practice."
            align="center"
            theme="dark"
          />

          <div className="space-y-16 lg:space-y-24 mt-12">
            {laboratoryDisciplines.map((lab, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = labIcons[lab.discipline] || FlaskConical;
              return (
                <div
                  key={lab.discipline}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  {/* Image Column with Click for Fullscreen */}
                  <div className={`lg:col-span-7 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div 
                      onClick={() => setFullscreenIndex(idx)}
                      className="cursor-pointer group relative overflow-hidden rounded-2xl border border-slate-800 shadow-soft-xl"
                    >
                      <ImageReveal
                        src={lab.src}
                        alt={lab.alt}
                        direction={isEven ? 'left' : 'right'}
                        aspectRatio="aspect-[16/10]"
                        badge={lab.badge}
                        caption={`${lab.title} — Click to view fullscreen`}
                        className="shadow-soft-xl rounded-2xl border border-slate-800"
                      />

                      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-slate-900 transition-colors">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Fullscreen</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-brand-400/30">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{lab.discipline} Discipline</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        {lab.title}
                      </h3>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {lab.description}
                      </p>

                      <div className="space-y-2.5 pt-4 border-t border-slate-800">
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                          Standard Laboratory Setup:
                        </span>
                        {lab.equipment.map((item, eqIdx) => (
                          <div key={eqIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6">
                        <button
                          onClick={() => setFullscreenIndex(idx)}
                          className="inline-flex items-center gap-2 text-xs font-bold text-brand-400 hover:text-brand-300 transition-colors uppercase tracking-wider"
                        >
                          <Maximize2 className="w-4 h-4" />
                          <span>View {lab.discipline} Lab Fullscreen</span>
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Student Laboratory Activities (Distinct close-up photograph) */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Student Activity Detail Image */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <ImageReveal
                  src="/images/student-lab-activity.jpg"
                  alt="Students engaged in practical laboratory observations and notes"
                  direction="left"
                  aspectRatio="aspect-[16/10]"
                  badge="Hands-on Practice"
                  caption="Students actively recording laboratory observations and measurements"
                  className="shadow-soft-lg rounded-2xl"
                />
              </div>
            </div>

            {/* Right: Narrative */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-0.5 bg-brand-500" />
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-600">
                    Student Activities
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  Hands-on Engagement & Student Collaboration
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                  Laboratory sessions represent one of the most exciting aspects of student life at Mount Valley. Wearing their school attire, students collaborate at black-granite island benches to examine biological specimens, handle apparatus, and record accurate measurements.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  Supervised closely by dedicated teachers, students learn responsibility, careful handling of laboratory apparatus, systematic data recording, and how to work harmoniously as team partners.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button to="/gallery" variant="primary" size="md" showArrow={true}>
                    View Campus Gallery
                  </Button>
                  <Button to="/admissions" variant="outline" size="md">
                    Enquire About Admissions
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
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
            <button
              onClick={() => setFullscreenIndex(null)}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
              aria-label="Close Fullscreen View"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-brand-500 text-white transition-all duration-200 focus:outline-none"
              aria-label="Previous Laboratory"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-brand-500 text-white transition-all duration-200 focus:outline-none"
              aria-label="Next Laboratory"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

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

      {/* Admissions Call to Action */}
      <AdmissionsCTA />
    </>
  );
}
