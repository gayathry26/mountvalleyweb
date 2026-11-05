import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Atom, Compass, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { officialImages } from '../../data/schoolData';

export default function InfrastructureSection() {
  const facilities = [
    {
      title: "Science & Chemistry Laboratory",
      subtitle: "Chemical Reagents & Apparatus",
      description: "Equipped with acid-resistant granite worktops, dedicated reagent shelves, burettes, and glassware for empirical chemistry experiments.",
      image: officialImages.scienceLabInterior.src,
      alt: officialImages.scienceLabInterior.alt,
      icon: FlaskConical,
      badge: "Chemical Sciences"
    },
    {
      title: "Physics Experimental Laboratory",
      subtitle: "Mechanics & Optics",
      description: "Dedicated experimental benches fitted with stabilized electrical power units, rheostats, meters, and optical apparatus.",
      image: officialImages.physicsLab.src,
      alt: officialImages.physicsLab.alt,
      icon: Atom,
      badge: "Physical Sciences"
    },
    {
      title: "Practical Learning Facilities",
      subtitle: "Hands-on Scientific Inquiry",
      description: "A secure, faculty-monitored facility where students apply theoretical principles into direct laboratory observations.",
      image: officialImages.scienceLaboratory.src,
      alt: officialImages.scienceLaboratory.alt,
      icon: Compass,
      badge: "Applied Learning"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#079fa8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Campus Infrastructure"
          title="Modern Experimental Laboratories"
          subtitle="Our purpose-built science and physics facilities enable students to explore scientific principles through direct hands-on observation."
          align="center"
          theme="dark"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((facility, idx) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group bg-slate-950/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-brand-500/60 transition-all duration-300 flex flex-col shadow-soft-lg hover:shadow-soft-xl"
              >
                {/* Image Container with hover zoom */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                  <img
                    src={facility.image}
                    alt={facility.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/90 text-white backdrop-blur-sm shadow-sm">
                      <Icon className="w-3.5 h-3.5" />
                      {facility.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 block mb-1">
                      {facility.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {facility.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-brand-400 font-semibold group-hover:text-brand-300">
                    <span>Equipped Facility</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <Button to="/campus-life" variant="white" size="lg" showArrow={true}>
            Explore Campus Life & Facilities
          </Button>
        </div>
      </div>
    </section>
  );
}

