import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import PageTransition from './components/common/PageTransition';
import IntroAnimation from './components/animation/IntroAnimation';

import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import CampusLife from './pages/CampusLife';
import Gallery from './pages/Gallery';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';

// In-memory module flag:
// Resets to false on page load or browser refresh (F5).
// Remains true across all client-side internal route navigations.
let introAlreadyPlayed = false;

function AnimatedRoutes({ introFinished }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home introFinished={introFinished} />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/academics"
          element={
            <PageTransition>
              <Academics />
            </PageTransition>
          }
        />
        <Route
          path="/campus-life"
          element={
            <PageTransition>
              <CampusLife />
            </PageTransition>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageTransition>
              <Gallery />
            </PageTransition>
          }
        />
        <Route
          path="/admissions"
          element={
            <PageTransition>
              <Admissions />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(!introAlreadyPlayed);
  const [introFinished, setIntroFinished] = useState(introAlreadyPlayed);

  const handleIntroComplete = () => {
    introAlreadyPlayed = true;
    setShowIntro(false);
    setIntroFinished(true);
  };

  return (
    <Router>
      <ScrollToTop />
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <div className="flex flex-col min-h-screen">
        <Navbar introFinished={introFinished} />
        <main className="flex-grow flex flex-col">
          <AnimatedRoutes introFinished={introFinished} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
