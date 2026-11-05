import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, FlaskConical, ShieldCheck } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';

export default function WhyChooseSection() {
  const features = [
    {
      title: "Quality Education",
      description: "Structured academic curricula designed to cultivate conceptual understanding, critical thinking, and intellectual curiosity.",
      icon: GraduationCap,
      color: "brand",
    },
    {
      title: "Student Development",
      description: "Nurturing character, self-discipline, and collaboration through regular co-curricular participation and personal guidance.",
      icon: Users,
      color: "brand",
    },
    {
      title: "Practical Learning",
      description: "Hands-on exploration in equipped science and physics laboratories to reinforce theoretical principles with empirical observation.",
      icon: FlaskConical,
      color: "brand",
    },
    {
      title: "Supportive Learning Environment",
      description: "A secure, inclusive, and disciplined atmosphere where faculty mentors encourage every student to discover their true strengths.",
      icon: ShieldCheck,
      color: "brand",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="section-padding bg-slate-50 relative border-y border-slate-200/60">
      <div className="container-custom">
        <SectionHeading
          badge="Why Choose Us"
          title="Why Choose Mount Valley"
          subtitle="Our core pillars are focused on academic integrity, experiential observation, and the holistic growth of every learner."
          align="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="h-full flex flex-col items-start bg-white hover:border-brand-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

