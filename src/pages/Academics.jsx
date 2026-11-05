import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, Users, Lightbulb, CheckCircle2, Compass, Award } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SEO from '../components/common/SEO';
import ImageReveal from '../components/common/ImageReveal';
import Card from '../components/common/Card';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import AdmissionsCTA from '../components/home/AdmissionsCTA';
import { officialImages } from '../data/schoolData';

export default function Academics() {
  const academicPillars = [
    {
      title: "Foundational Clarity",
      desc: "Emphasizing core conceptual understanding over rote memorization across language, mathematics, and environmental sciences.",
      icon: BookOpen
    },
    {
      title: "Hands-on Scientific Inquiry",
      desc: "Integrating regular laboratory practical sessions into science education from foundational stages.",
      icon: FlaskConical
    },
    {
      title: "Diagnostic Evaluation",
      desc: "Continuous classroom feedback and periodic assessments to identify learning gaps early and guide remedial support.",
      icon: CheckCircle2
    },
    {
      title: "Collaborative Learning",
      desc: "Encouraging group problem solving, peer discussion, and illustrative chart projects displayed on classroom walls.",
      icon: Users
    }
  ];

  const studentDevelopmentAreas = [
    {
      title: "Intellectual Rigor",
      desc: "Developing strong analytical capability, systematic study habits, and sustained concentration through structured daily timetables."
    },
    {
      title: "Scientific Temperament",
      desc: "Instilling curiosity, observation skills, hypothesis testing, and respect for verifiable facts through laboratory work."
    },
    {
      title: "Communication & Expression",
      desc: "Encouraging clear articulation of ideas, attentive listening, and structured presentation in classroom dialogues."
    },
    {
      title: "Moral Integrity & Responsibility",
      desc: "Fostering mutual respect, civic consciousness, empathy, and personal accountability across all school activities."
    }
  ];

  return (
    <>
      <SEO
        title="Academics"
        description="Discover the academic approach at Mount Valley Public School: structured teaching, interactive classrooms, practical science laboratories, and student development."
      />

      <PageHeader
        title="Academic Excellence"
        subtitle="A balanced educational approach bridging foundational theoretical understanding with active laboratory inquiry and personal mentorship."
        breadcrumb={[{ name: "Academics" }]}
      />

      {/* Section 1: Academic Approach Overview */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <SectionHeading
            badge="Curricular Methodology"
            title="Our Academic Approach"
            subtitle="Designed to build confident, intellectually curious learners capable of applying knowledge with discernment."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {academicPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card className="h-full bg-slate-50 hover:bg-white hover:border-brand-300">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 border border-brand-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Teaching and Learning with Classroom Image */}
      <section className="section-padding bg-slate-50 border-y border-slate-200/60 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
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
                    Instructional Environment
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  Teaching and Learning in the Classroom
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                  Classrooms at Mount Valley are designed to maximize student engagement and focus. Seated at dedicated study desks with clear lines of sight, students participate actively in guided discussions rather than passive note-taking.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  Walls are lined with informative student-created charts on science, biological systems, soil classification, and mathematics, turning every classroom into an immersive visual knowledge environment. Dedicated teachers circulate among students, giving individual guidance and ensuring every learner is supported.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Ergonomic classroom layout supporting attentive focus",
                    "Visual chart displays reinforcing scientific topics",
                    "Close teacher-student ratio for individual academic reinforcement",
                    "Balanced timetable accommodating inquiry and revision"
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-700 font-medium">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                <Button to="/admissions" variant="primary" size="md" showArrow={true}>
                  Admissions Enquiry
                </Button>
              </motion.div>
            </div>

            {/* Right: Classroom Image */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <ImageReveal
                  src={officialImages.classroom.src}
                  alt={officialImages.classroom.alt}
                  direction="right"
                  aspectRatio="aspect-[4/3]"
                  badge="Classroom Learning"
                  caption="Mount Valley classroom featuring structured seating, teacher mentorship, and visual study charts"
                  className="shadow-soft-lg rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Practical & Laboratory Learning */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Students Lab Image */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <ImageReveal
                  src={officialImages.studentsLab.src}
                  alt={officialImages.studentsLab.alt}
                  direction="left"
                  aspectRatio="aspect-[16/10]"
                  badge="Practical Science"
                  caption="Students actively working in the laboratory with biological specimen jars and notebooks"
                  className="shadow-soft-lg rounded-2xl"
                />
              </div>
            </div>

            {/* Right: Practical Learning Content */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-0.5 bg-brand-500" />
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-600">
                    Experiential Education
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  Practical Learning in Science Laboratories
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                  Science is fundamentally an experimental discipline. At Mount Valley, students regularly step out of textbook theory into our dedicated physics, chemistry, and biology laboratory environments to conduct experiments under expert supervision.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  From examining biological specimens and operating microscopes to measuring electrical resistance on physics benches, students develop sharp empirical observation skills, accurate record-keeping habits, and laboratory discipline.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button to="/campus-life" variant="primary" size="md" showArrow={true}>
                    View Laboratory Facilities
                  </Button>
                  <Button to="/gallery" variant="outline" size="md">
                    Campus Gallery
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Student Development Framework */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionHeading
            badge="Holistic Growth"
            title="Comprehensive Student Development"
            subtitle="Fostering balanced personal, intellectual, and moral growth in every young learner."
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {studentDevelopmentAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-950/80 p-6 rounded-xl border border-slate-800 hover:border-brand-500/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand-500/20 text-brand-300 flex items-center justify-center mb-4 font-bold text-sm border border-brand-500/30">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Call to Action */}
      <AdmissionsCTA />
    </>
  );
}
