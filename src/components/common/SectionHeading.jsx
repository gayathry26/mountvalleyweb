import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className={`mb-3 inline-flex items-center gap-2 ${isCenter ? 'justify-center' : ''}`}>
          <span className={`inline-block w-6 h-0.5 ${theme === 'dark' ? 'bg-brand-300' : 'bg-brand-500'}`} />
          <span className={`text-xs uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-brand-300' : 'text-brand-600'}`}>
            {badge}
          </span>
          <span className={`inline-block w-6 h-0.5 ${theme === 'dark' ? 'bg-brand-300' : 'bg-brand-500'}`} />
        </div>
      )}

      {title && (
        <h2 className={`text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${theme === 'dark' ? 'text-slate-200' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

