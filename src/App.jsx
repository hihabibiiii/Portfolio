import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-44 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.14]" />
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
            <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-16 pt-28 sm:px-6 lg:px-8">
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  {[
                    { path: "/", Page: Home },
                    { path: "/about", Page: About },
                    { path: "/projects", Page: Projects },
                    { path: "/contact", Page: Contact },
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
                          transition={{ duration: 0.45, ease: "easeOut" }}
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
