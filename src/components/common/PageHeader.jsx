import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHeader({
  title,
  subtitle,
  badge = "Mount Valley Public School",
  breadcrumb = []
}) {
  return (
    <div className="relative bg-gradient-to-b from-brand-950 via-slate-900 to-slate-950 text-white pt-36 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background geometric accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-400 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-brand-600 blur-3xl" />
        <div className="w-full h-full bg-[radial-gradient(#079fa8_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              {badge}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mt-8 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-brand-300 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            {breadcrumb.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-brand-300 transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-brand-300 font-medium">{crumb.name}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </motion.div>
      </div>

      {/* Elegant bottom teal separator rule */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
    </div>
  );
}

