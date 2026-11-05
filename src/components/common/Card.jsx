import React from 'react';
import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  variant = 'default', // 'default', 'bordered', 'teal-tint'
  onClick
}) {
  const variantStyles = {
    default: 'bg-white border border-slate-100 shadow-soft-sm hover:shadow-soft-lg hover:border-brand-200',
    bordered: 'bg-white border-2 border-slate-100 hover:border-brand-500 shadow-sm',
    'teal-tint': 'bg-gradient-to-br from-brand-50/50 to-white border border-brand-100 shadow-soft-sm hover:shadow-soft-md',
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25, ease: 'easeOut' } } : undefined}
      className={`rounded-xl p-6 sm:p-8 transition-colors duration-300 ${variantStyles[variant] || variantStyles.default} ${className}`}
    >
      {children}
    </motion.div>
  );
}

