import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import ImageReveal from '../common/ImageReveal';
import { officialImages } from '../../data/schoolData';

export default function AboutSection() {
  const highlights = [
    "Holistic curriculum balanced with character formation",
    "Dedicated educators focused on individual student progress",
    "Well-structured physical laboratories for experimental learning",
    "Safe, inclusive and disciplined school atmosphere"
  ];

  return (
    <section id="about-section" className="section-padding bg-white relative overflow-hidden">
      {/* Background subtle decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: School Entrance Gate Photograph with ImageReveal */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <ImageReveal
                src={officialImages.entrance.src}
                alt={officialImages.entrance.alt}
                direction="left"
                aspectRatio="aspect-[4/3]"
                badge="Campus Entrance"
                caption="Main entrance gate welcoming students to Mount Valley Public School"
                className="shadow-soft-lg rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column: School Introduction & Narrative */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-0.5 bg-brand-500" />
                <span className="text-xs uppercase tracking-widest font-bold text-brand-600">
                  About Our School
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                A Place to Learn, Grow and Achieve
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                At Mount Valley Public School, education extends beyond conventional textbooks. We provide a disciplined, supportive, and stimulating environment where young learners build foundational academic knowledge, strong ethical values, and practical skills.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                With a focus on conceptual clarity and experiential inquiry, our campus offers well-equipped science and physics laboratories alongside spacious classrooms. We nurture every child’s unique talents, preparing them to face future challenges with confidence and integrity.
              </p>

              {/* Bullet points */}
              <div className="space-y-3 mb-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Read More button */}
              <div className="pt-2">
                <Button to="/about" variant="primary" size="md" showArrow={true}>
                  Read More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

