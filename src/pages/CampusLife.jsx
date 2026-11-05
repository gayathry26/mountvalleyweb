import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Building2, BookOpen, FlaskConical, Atom, Users2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SEO from '../components/common/SEO';
import ImageReveal from '../components/common/ImageReveal';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import AdmissionsCTA from '../components/home/AdmissionsCTA';
import { officialImages } from '../data/schoolData';

export default function CampusLife() {
  const labShowcase = [
    {
      title: "Science & Chemistry Laboratory",
      badge: "Chemical Sciences",
      icon: FlaskConical,
      image: officialImages.scienceLabInterior.src,
      alt: officialImages.scienceLabInterior.alt,
      description: "Our chemistry and science laboratory features smooth acid-resistant granite counter tables, integrated reagent racks, gas burners, glassware, and burette stands. Teachers guide students through standard chemical tests and qualitative analysis with strict safety protocols.",
      equipment: ["Granite workstation benches", "Glassware & reagent shelves", "Burette & titration stands", "Safety wash stations"]
    },
    {
      title: "Physics Experimental Laboratory",
      badge: "Physical Sciences",
      icon: Atom,
      image: officialImages.physicsLab.src,
      alt: officialImages.physicsLab.alt,
      description: "Designed specifically for experiments in mechanics, electricity, magnetism, and optics. Equipped with electrical power bench supply units, rheostats, potentiometers, resistance boxes, and optical benches where students verify theoretical formulas empirically.",
      equipment: ["Regulated electrical power benches", "Rheostats & resistance boxes", "Optical & measurement benches", "Galvanometers & multimeters"]
    },
    {
      title: "Science Laboratory & Practical Facilities",
      badge: "Natural & Applied Sciences",
      icon: FlaskConical,
      image: officialImages.scienceLaboratory.src,
      alt: officialImages.scienceLaboratory.alt,
      description: "An open, well-illuminated laboratory facility facilitating collaborative scientific study. Faculty members work alongside learners, demonstrating principles and encouraging students to record data systematically in lab records.",
      equipment: ["Spacious observation benches", "Natural daylight and ventilation", "Specimen observation trays", "Faculty demonstration desk"]
    }
  ];

  return (
    <>
      <SEO
        title="Campus Life & Infrastructure"
        description="Experience campus life at Mount Valley Public School: explore our modern school building, interactive classrooms, and fully equipped physics & chemistry laboratories."
      />

      <PageHeader
        title="Campus Life & Infrastructure"
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

      {/* Section 3: Laboratory Facilities Showcase (Detailed presentation) */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionHeading
            badge="Infrastructure Showcase"
            title="Dedicated Experimental Laboratories"
            subtitle="Explore our specialized physics, chemistry, and science laboratory spaces engineered for active student observation."
            align="center"
            theme="dark"
          />

          <div className="space-y-16 lg:space-y-24 mt-12">
            {labShowcase.map((lab, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = lab.icon;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <ImageReveal
                      src={lab.image}
                      alt={lab.alt}
                      direction={isEven ? 'left' : 'right'}
                      aspectRatio="aspect-[16/10]"
                      badge={lab.badge}
                      caption={lab.title}
                      className="shadow-soft-xl rounded-2xl border border-slate-800"
                    />
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
                        <span>{lab.badge}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        {lab.title}
                      </h3>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {lab.description}
                      </p>

                      <div className="space-y-2.5 pt-4 border-t border-slate-800">
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                          Facility Highlights:
                        </span>
                        {lab.equipment.map((item, eqIdx) => (
                          <div key={eqIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Student Activities in the Laboratory */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Students Lab Image */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <ImageReveal
                  src={officialImages.studentsLab.src}
                  alt={officialImages.studentsLab.alt}
                  direction="left"
                  aspectRatio="aspect-[16/10]"
                  badge="Hands-on Science"
                  caption="Mount Valley students conducting biology and science experiments with specimen jars and record notebooks"
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
                  Laboratory sessions represent one of the most exciting aspects of student life at Mount Valley. Wearing their laboratory attire, students collaborate at black-granite island benches to examine biological specimens, handle apparatus, and record accurate measurements.
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

      {/* Admissions Call to Action */}
      <AdmissionsCTA />
    </>
  );
}
