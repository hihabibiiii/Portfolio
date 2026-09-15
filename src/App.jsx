import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="noise-bg relative min-h-screen bg-bg text-primary">
      {/* Subtle grid background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(199,255,61,0.04),transparent_70%)]" />
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 flex min-h-screen flex-col"
          >
            <ScrollToTop />
            <Navbar />
            <main className="flex-1 pb-24 pt-24">
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  {[
                    { path: '/', Page: Home },
                    { path: '/about', Page: About },
                    { path: '/projects', Page: Projects },
                    { path: '/contact', Page: Contact },
                  ].map(({ path, Page }) => (
                    <Route
                      key={path}
                      path={path}
                      element={
                        <motion.div
                          variants={pageVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                          <Page />
                        </motion.div>
                      }
                    />
                  ))}
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
