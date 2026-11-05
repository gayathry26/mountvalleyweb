import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Users2 } from 'lucide-react';
import Button from '../common/Button';
import ImageReveal from '../common/ImageReveal';
import { officialImages } from '../../data/schoolData';

export default function AcademicEnvironmentSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Classrooms",
      description: "Classrooms arranged with ergonomic individual desks and open airflow to encourage focus and attentive participation."
    },
    {
      icon: Lightbulb,
      title: "Concept-Driven Visuals",
      description: "Walls detailed with student project displays and instructional charts covering biology, soil, agriculture, and mathematics."
    },
    {
      icon: Users2,
      title: "Attentive Mentorship",
      description: "Small class sizes allowing teachers to deliver personalized academic reinforcement and monitor comprehension closely."
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Academic Content */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-0.5 bg-brand-500" />
                <span className="text-xs uppercase tracking-widest font-bold text-brand-600">
                  Learning Spaces
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Academic Environment Designed for Focus & Inquiry
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Our classrooms provide an organized and encouraging setting where young minds actively engage with fundamental concepts. Thoughtfully structured physical learning spaces combined with teacher-led interactive sessions nurture curiosity and discipline.
              </p>

              {/* Feature items */}
              <div className="space-y-6 mb-8">
                {features.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-1 border border-brand-100">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Button to="/academics" variant="outline" size="md" showArrow={true}>
                  Explore Academic Approach
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Real Classroom Photograph with ImageReveal */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <ImageReveal
                src={officialImages.classroom.src}
                alt={officialImages.classroom.alt}
                direction="right"
                aspectRatio="aspect-[4/3]"
                badge="Classroom Learning"
                caption="Students engaged in structured classroom lessons with instructional wall charts"
                className="shadow-soft-lg rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

