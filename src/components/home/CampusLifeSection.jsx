import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake, Lightbulb, Compass } from 'lucide-react';
import Button from '../common/Button';
import ImageReveal from '../common/ImageReveal';
import { officialImages } from '../../data/schoolData';

export default function CampusLifeSection() {
  const experiences = [
    {
      icon: Sparkles,
      title: "Active Learning & Discovery",
      text: "Students participate in hands-on group experiments, transforming theoretical lessons into vivid observations."
    },
    {
      icon: HeartHandshake,
      title: "Teamwork & Collaboration",
      text: "Shared laboratory work and classroom discussions develop cooperation, mutual respect, and communication skills."
    },
    {
      icon: Lightbulb,
      title: "Cultivating Inquiring Minds",
      text: "Teachers encourage students to ask questions, verify facts scientifically, and think critically about everyday phenomena."
    }
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Real Students in Lab Photograph with ImageReveal */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <ImageReveal
                src={officialImages.studentsLab.src}
                alt={officialImages.studentsLab.alt}
                direction="left"
                aspectRatio="aspect-[16/10]"
                badge="Student Experience"
                caption="Mount Valley students actively conducting science experiments under teacher mentorship"
                className="shadow-soft-lg rounded-2xl"
              />

              {/* Decorative accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="hidden sm:flex absolute -bottom-6 -left-6 bg-brand-900 text-white p-5 rounded-xl shadow-soft-lg border border-brand-700/60 max-w-xs z-20 items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-500 text-white flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-brand-300 font-semibold">
                    Experiential Learning
                  </span>
                  <span className="block text-sm font-bold text-white">
                    Practical Understanding Daily
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Narrative & Experience Highlights */}
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
                  Student Life
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Enriching Experiences Inside & Outside the Classroom
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Life at Mount Valley is purposeful, active, and grounded in student growth. Through balanced academic routines, laboratory sessions, and shared student responsibilities, our learners build friendships, discipline, and a genuine passion for discovery.
              </p>

              {/* Experience Highlights */}
              <div className="space-y-5 mb-8">
                {experiences.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-soft-sm">
                      <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed font-normal">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button to="/campus-life" variant="primary" size="md" showArrow={true}>
                  Discover Campus Life
                </Button>
                <Button to="/gallery" variant="outline" size="md">
                  View Photo Gallery
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

