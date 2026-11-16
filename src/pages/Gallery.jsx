import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Tag, Compass } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SEO from '../components/common/SEO';
import AdmissionsCTA from '../components/home/AdmissionsCTA';
import { galleryItems } from '../data/schoolData';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Laboratories', 'Campus', 'Academics'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const currentIndex = selectedImage ? filteredItems.findIndex(item => item.id === selectedImage.id) : -1;

  const handlePrev = useCallback(() => {
    if (filteredItems.length === 0) return;
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1]);
    } else {
      setSelectedImage(filteredItems[filteredItems.length - 1]);
    }
  }, [currentIndex, filteredItems]);

  const handleNext = useCallback(() => {
    if (filteredItems.length === 0) return;
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1]);
    } else {
      setSelectedImage(filteredItems[0]);
    }
  }, [currentIndex, filteredItems]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handlePrev, handleNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <>
      <SEO
        title="Campus Photo Gallery"
        description="View authentic photographs of Mount Valley Public School: campus building, entrance gate, classrooms, physics laboratory, and science facilities."
      />

      <PageHeader
        title="Campus Photo Gallery"
        subtitle="A visual tour through our school building, classrooms, and experimental laboratory infrastructure."
        breadcrumb={[{ name: "Gallery" }]}
      />

      <section className="section-padding bg-slate-50 relative">
        <div className="container-custom">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none ${
                  activeCategory === category
                    ? 'bg-brand-500 text-white shadow-soft-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Responsive Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(item)}
                  className="group relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-900 shadow-soft-md hover:shadow-soft-xl cursor-pointer border border-slate-200/70"
                >
                  {/* Photo */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-brand-500/90 text-white backdrop-blur-sm shadow-sm">
                      <Tag className="w-3 h-3" />
                      {item.tag}
                    </span>
                  </div>

                  {/* Bottom Caption & Expand Icon */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white z-10 flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-white leading-snug group-hover:text-brand-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-brand-500 text-white transition-all duration-200 focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-brand-500 text-white transition-all duration-200 focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image Modal Content */}
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={selectedImage.id}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-h-[70vh] flex items-center justify-center"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </motion.div>

              {/* Lightbox Caption & Counter */}
              <div className="mt-4 text-center text-white max-w-2xl px-4">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-xs uppercase tracking-widest font-semibold text-brand-400">
                    {selectedImage.tag}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs text-slate-400">
                    Image {currentIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admissions CTA */}
      <AdmissionsCTA />
    </>
  );
}
