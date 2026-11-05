import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Compass, BookOpen, ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SEO from '../components/common/SEO';
import ImageReveal from '../components/common/ImageReveal';
import Card from '../components/common/Card';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import AdmissionsCTA from '../components/home/AdmissionsCTA';
import { officialImages } from '../data/schoolData';

export default function About() {
  const philosophyPillars = [
    {
      icon: Compass,
      title: "Experiential Inquiry",
      description: "Knowledge is deepened when concepts are tested and observed firsthand in our dedicated laboratory facilities."
    },
    {
      icon: ShieldCheck,
      title: "Value-Driven Character",
      description: "We cultivate discipline, integrity, respect, and empathy as foundational qualities alongside academic achievement."
    },
    {
      icon: Heart,
      title: "Individual Potential",
      description: "Recognizing that every child possesses unique strengths, our educators provide supportive and attentive guidance."
    },
    {
      icon: BookOpen,
      title: "Continuous Curiosity",
      description: "Fostering an enduring passion for discovery, problem-solving, and critical thinking that extends beyond the classroom."
    }
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Mount Valley Public School, our vision, mission, educational philosophy, and welcoming campus environment."
      />

      {/* Page Header Banner */}
      <PageHeader
        title="About Mount Valley Public School"
        subtitle="A dedicated institution where young learners build academic excellence, strong values, and practical knowledge for the future."
        breadcrumb={[{ name: "About Us" }]}
      />

      {/* Section 1: School Introduction */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Entrance Gate Image */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <ImageReveal
                  src={officialImages.entrance.src}
                  alt={officialImages.entrance.alt}
                  direction="left"
                  aspectRatio="aspect-[4/3]"
                  badge="Campus Gates"
                  caption="Grand entrance gate of Mount Valley Public School"
                  className="shadow-soft-lg rounded-2xl"
                />

                <div className="hidden sm:block absolute -bottom-6 -right-6 bg-slate-900 text-white p-5 rounded-xl shadow-soft-lg max-w-xs border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">Institutional Spirit</span>
                      <span className="block text-sm font-bold text-white">Integrity & Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative */}
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
                    Who We Are
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  Nurturing Young Minds with Purpose & Integrity
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                  Mount Valley Public School was founded with a clear commitment: to provide children with a balanced, meaningful, and rigorous education that shapes them into confident, capable, and responsible individuals.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  We believe true education harmonizes academic rigor with experiential application. Through our specialized physics and science laboratories, open-air learning spaces, and supportive teaching faculty, students are empowered to engage with knowledge through active participation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Focused academic structure",
                    "Practical science experiments",
                    "Dedicated and qualified faculty",
                    "Secure, welcoming campus",
                    "Individual student mentorship",
                    "Emphasis on ethical values"
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

      {/* Section 2: Vision & Mission Cards */}
      <section className="section-padding bg-slate-50 border-y border-slate-200/60 relative">
        <div className="container-custom">
          <SectionHeading
            badge="Guiding Principles"
            title="Our Vision & Mission"
            subtitle="The fundamental pillars that guide our institutional ethos and educational objectives every day."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-white border-2 border-brand-100/70 hover:border-brand-500 relative overflow-hidden group">
                <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 border border-brand-100 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-600 block mb-2">
                  Institutional Vision
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Inspiring Lifelong Learners
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  To be an educational institution of distinction that inspires every student to achieve their highest intellectual and moral potential, empowering them to become responsible citizens and compassionate leaders in an ever-evolving world.
                </p>
              </Card>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Card className="h-full bg-white border-2 border-brand-100/70 hover:border-brand-500 relative overflow-hidden group">
                <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 border border-brand-100 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-600 block mb-2">
                  Institutional Mission
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Empowering Student Potential
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  To provide a rigorous, supportive, and values-based learning environment through dedicated faculty mentorship, practical scientific exploration, and individualized attention that nurtures critical thinking, resilience, and personal integrity.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Educational Philosophy */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <SectionHeading
            badge="Our Approach"
            title="Educational Philosophy"
            subtitle="How we structure learning experiences to develop intellect, character, and practical competence."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {philosophyPillars.map((pillar, idx) => {
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
                    <div className="w-12 h-12 rounded-xl bg-white text-brand-600 flex items-center justify-center mb-5 border border-slate-200 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: School Environment & Building Exterior */}
      <section className="section-padding bg-slate-100 border-t border-slate-200/80 relative">
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
                    Campus Environment
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  A Safe, Purpose-Built Academic Campus
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                  The Mount Valley Public School campus is designed to support focused learning and student well-being. From our purpose-built exterior architecture to our dedicated science wings, every space is maintained with safety and academic purpose in mind.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  Away from city congestion, the campus offers fresh air, ample natural lighting in all classrooms, and a peaceful environment that promotes mental focus, calm study, and active student collaboration.
                </p>

                <div className="flex gap-4">
                  <Button to="/campus-life" variant="primary" size="md" showArrow={true}>
                    Tour Campus Life
                  </Button>
                  <Button to="/gallery" variant="outline" size="md">
                    View Gallery
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right: School Building Photograph */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <ImageReveal
                  src={officialImages.building.src}
                  alt={officialImages.building.alt}
                  direction="right"
                  aspectRatio="aspect-[4/3]"
                  badge="Campus Exterior"
                  caption="Mount Valley Public School academic building exterior"
                  className="shadow-soft-lg rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <AdmissionsCTA />
    </>
  );
}
