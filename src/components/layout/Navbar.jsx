import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Phone, Mail, ChevronRight } from 'lucide-react';
import { schoolInfo, navLinks } from '../../data/schoolData';
import Button from '../common/Button';

export default function Navbar({ introFinished = true }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navContainerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        delay: introFinished ? 0.1 : 4.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        delayChildren: introFinished ? 0.2 : 4.8
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.header
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      {/* Main Sticky Navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft-md py-3 border-b border-slate-200/80'
            : 'bg-white shadow-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo & School Name */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <motion.div
              variants={navItemVariants}
              className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center p-1 bg-white border border-slate-100 shadow-sm group-hover:border-brand-300 transition-all duration-300 group-hover:scale-105"
            >
              <img
                src={schoolInfo.logo}
                alt={schoolInfo.name}
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </motion.div>
            <motion.div variants={navItemVariants} className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg md:text-xl tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors uppercase leading-none font-serif">
                Mount Valley
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-600 uppercase mt-1">
                Public School
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation Links with sequential staggered entrance */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div key={link.path} variants={navItemVariants}>
                  <Link
                    to={link.path}
                    className={`relative px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                      isActive
                        ? 'text-brand-600'
                        : 'text-slate-700 hover:text-brand-600'
                    }`}
                  >
                    {link.name}
                    {isActive ? (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      />
                    ) : (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-transparent group-hover:bg-brand-200 transition-colors rounded-full" />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Right CTA: Admission Enquiry */}
          <motion.div variants={navItemVariants} className="hidden lg:flex items-center gap-3">
            <Button to="/admissions" size="sm" showArrow={true}>
              Admission Enquiry
            </Button>
          </motion.div>

          {/* Animated Hamburger Button for Mobile/Tablet */}
          <div className="flex lg:hidden items-center gap-3">
            <Button to="/admissions" size="sm" className="text-xs px-3 py-1.5 hidden sm:inline-flex">
              Enquiry
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-slate-50 text-slate-800 hover:text-brand-600 hover:bg-brand-50 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current rounded-full transform origin-center transition-transform"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-current rounded-full transition-opacity"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current rounded-full transform origin-center transition-transform"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu with Framer Motion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden border-t border-slate-200/80 bg-white/98 backdrop-blur-xl px-5 pt-4 pb-8 shadow-2xl overflow-hidden"
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } }
                }}
                className="flex flex-col space-y-1.5"
              >
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: -15 }
                      }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                          isActive
                            ? 'bg-brand-50 text-brand-700 border-l-4 border-brand-500'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-brand-600'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className={`w-4 h-4 ${isActive ? 'text-brand-600' : 'text-slate-400'}`} />
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 10 }
                  }}
                  className="pt-5 mt-2 border-t border-slate-100 flex flex-col gap-3"
                >
                  <Button to="/admissions" className="w-full text-center py-3" size="md" showArrow={true}>
                    Enquire About Admissions
                  </Button>
                  <div className="flex flex-col gap-2 pt-2 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-brand-500" />
                      <span>{schoolInfo.contact.phone.split('/')[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-brand-500" />
                      <span>{schoolInfo.contact.email}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
