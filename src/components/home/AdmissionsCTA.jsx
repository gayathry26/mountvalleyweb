import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, Mail } from 'lucide-react';
import Button from '../common/Button';
import { schoolInfo } from '../../data/schoolData';

export default function AdmissionsCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-brand-200 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-100">
              Admissions Open 2026-27
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Give Your Child a Place to Learn, Grow and Shine.
          </h2>

          <p className="text-base sm:text-lg text-brand-50/90 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Take the first step towards your child’s bright future. Learn about our admission procedure, view our campus facilities, or submit an enquiry today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/admissions"
              variant="white"
              size="lg"
              showArrow={true}
              className="w-full sm:w-auto"
            >
              Enquire About Admissions
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-800"
            >
              Contact Campus Office
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-brand-600/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-brand-100">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-300" />
              <span>{schoolInfo.contact.phone.split('/')[0]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-300" />
              <span>{schoolInfo.contact.email}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

