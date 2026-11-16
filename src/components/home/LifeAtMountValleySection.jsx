import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LifeAtMountValleySection() {
  const scrollContainerRef = useRef(null);

  // 6 authentic student & campus activity photographs with editorial layout metadata
  const studentActivities = [
    {
      id: 'activity-1',
      src: '/images/students-laboratory.jpg',
      alt: 'Mount Valley students actively conducting science experiments in laboratory',
      tag: 'Hands-on Science',
      title: 'Students Conducting Biology Lab Experiments',
      caption: 'Students work collaboratively with specimen jars and record findings under teacher mentorship.',
      widthClass: 'w-[360px] sm:w-[460px] md:w-[540px]',
      aspectClass: 'aspect-[16/10]'
    },
    {
      id: 'activity-2',
      src: '/images/student-lab-portrait.jpg',
      alt: 'Student in uniform attentive during laboratory investigation',
      tag: 'Practical Learning',
      title: 'Attentive Experimental Observation',
      caption: 'Focused inquiry and careful note-taking at the laboratory island benches.',
      widthClass: 'w-[250px] sm:w-[290px] md:w-[330px]',
      aspectClass: 'aspect-[4/5]'
    },
    {
      id: 'activity-3',
      src: '/images/classroom-environment.jpg',
      alt: 'Classroom environment with student instructional charts and individual desks',
      tag: 'Classroom Life',
      title: 'Engaging Classroom Learning Spaces',
      caption: 'Spacious, naturally lit classrooms equipped with student-made project charts and desks.',
      widthClass: 'w-[380px] sm:w-[480px] md:w-[560px]',
      aspectClass: 'aspect-[16/9]'
    },
    {
      id: 'activity-4',
      src: '/images/student-classroom-focus.jpg',
      alt: 'Students engaged in classroom lessons and teacher mentorship',
      tag: 'Academic Focus',
      title: 'Interactive Conceptual Discussions',
      caption: 'Small teacher-to-student ratio fostering questions and individual academic reinforcement.',
      widthClass: 'w-[300px] sm:w-[370px] md:w-[420px]',
      aspectClass: 'aspect-[4/3]'
    },
    {
      id: 'activity-5',
      src: '/images/school-entrance.jpg',
      alt: 'Students gathered in the campus courtyard at Mount Valley Public School',
      tag: 'Campus Community',
      title: 'Morning Gathering & Campus Grounds',
      caption: 'Welcoming school entrance where students assemble for daily routines and activities.',
      widthClass: 'w-[350px] sm:w-[440px] md:w-[500px]',
      aspectClass: 'aspect-[16/10]'
    },
    {
      id: 'activity-6',
      src: '/images/science-laboratory.jpg',
      alt: 'Chemistry and physics laboratory facility for student investigations',
      tag: 'Scientific Discovery',
      title: 'Modern Laboratory Facilities',
      caption: 'Equipped with dedicated apparatus for empirical physics, chemistry, and biology practice.',
      widthClass: 'w-[300px] sm:w-[360px] md:w-[400px]',
      aspectClass: 'aspect-[4/3]'
    }
  ];

  // Marquee duplicates to guarantee infinite seamless right-to-left scrolling
  const marqueeItems = [...studentActivities, ...studentActivities];

  const handleManualScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#fafafb] relative overflow-hidden border-t border-slate-200/70">
      {/* Section Header */}
      <div className="container-custom mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-brand-500" />
              <span className="text-xs uppercase tracking-widest font-bold text-brand-600">
                Student Life & Activities
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Life at Mount Valley
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A vibrant atmosphere where conceptual knowledge, laboratory inquiry, and mutual values shape everyday experiences for young learners.
            </p>
          </motion.div>

          {/* Quick link & Interactive Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden sm:inline-block text-xs text-slate-600 font-medium mr-2">
              Hover to pause
            </span>

            <button
              onClick={() => handleManualScroll('left')}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-brand-50 hover:border-brand-500 hover:text-brand-600 text-slate-700 flex items-center justify-center transition-colors shadow-sm focus:outline-none"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleManualScroll('right')}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-brand-50 hover:border-brand-500 hover:text-brand-600 text-slate-700 flex items-center justify-center transition-colors shadow-sm focus:outline-none"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/campus-life"
              className="inline-flex items-center gap-1.5 ml-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors"
            >
              <span>Explore All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Continuous Horizontal Scrolling Track */}
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar relative cursor-grab active:cursor-grabbing"
      >
        {/* Subtle left & right edge gradient fades */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fafafb] to-transparent z-10 pointer-events-none" />
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fafafb] to-transparent z-10 pointer-events-none" />

        {/* Marquee Inner Ribbon */}
        <div className="animate-marquee-scroll flex items-end gap-6 sm:gap-8 px-4 sm:px-8 py-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className={`shrink-0 ${item.widthClass} group flex flex-col`}
            >
              {/* Photo Frame (Clean editorial design without heavy card container) */}
              <div
                className={`relative w-full ${item.aspectClass} rounded-2xl overflow-hidden bg-slate-900/10 shadow-soft-sm group-hover:shadow-soft-lg transition-all duration-500`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle soft dark gradient on image base for gentle depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Tag pill */}
                <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/95 text-slate-800 backdrop-blur-md shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Minimalist Editorial Typography below photo */}
              <div className="pt-3 px-1">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-brand-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
