import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import AcademicEnvironmentSection from '../components/home/AcademicEnvironmentSection';
import InfrastructureSection from '../components/home/InfrastructureSection';
import CampusLifeSection from '../components/home/CampusLifeSection';
import AdmissionsCTA from '../components/home/AdmissionsCTA';
import SEO from '../components/common/SEO';

export default function Home({ introFinished = true }) {
  return (
    <>
      <SEO 
        title="Home"
        description="Mount Valley Public School - Where every child discovers their potential. Quality education, modern science & physics laboratories, and a supportive learning environment." 
      />
      
      {/* Section 2: Full-width Hero with animated reveal */}
      <Hero introFinished={introFinished} />

      {/* Section 3: About Our School */}
      <AboutSection />

      {/* Section 4: Why Choose Mount Valley */}
      <WhyChooseSection />

      {/* Section 5: Academic Environment */}
      <AcademicEnvironmentSection />

      {/* Section 6: Infrastructure */}
      <InfrastructureSection />

      {/* Section 7: Campus Life */}
      <CampusLifeSection />

      {/* Section 8: Admissions Call to Action */}
      <AdmissionsCTA />
    </>
  );
}
