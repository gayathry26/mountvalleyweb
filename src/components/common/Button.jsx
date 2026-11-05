import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  type = 'button',
  disabled = false
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider gap-1.5",
    md: "px-6 py-3 text-sm tracking-wide gap-2",
    lg: "px-8 py-3.5 text-base tracking-wide gap-2.5",
  };

  const variantStyles = {
    primary: "bg-brand-500 hover:bg-brand-600 text-white shadow-soft-md hover:shadow-soft-lg focus:ring-brand-500",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow focus:ring-slate-800",
    outline: "border-2 border-brand-500 text-brand-700 hover:bg-brand-500 hover:text-white focus:ring-brand-500",
    ghost: "text-brand-700 hover:bg-brand-50 focus:ring-brand-500",
    white: "bg-white text-brand-700 hover:bg-slate-50 shadow-soft-md hover:shadow-soft-lg focus:ring-white",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const motionProps = disabled ? {} : {
    whileHover: { y: -2 },
    whileTap: { y: 0, scale: 0.98 },
    transition: { duration: 0.2, ease: "easeOut" }
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={`group ${combinedClasses}`}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        {...motionProps}
        className={`group ${combinedClasses}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      className={`group ${combinedClasses}`}
    >
      {content}
    </motion.button>
  );
}

