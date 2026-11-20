import { motion } from 'framer-motion';
import { ArrowLeft, Compass, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/UI/Seo';

export default function NotFound() {
  return (
    <>
      <Seo
        title="404 — Page Not Found | Habibullah Salmani"
        description="The requested page could not be found."
      />

      <section className="container-main min-h-[60vh] flex items-center justify-center py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card max-w-lg p-10 sm:p-14 border-accent/40 bg-card shadow-card-hover dark:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.1)]"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 text-accent">
            <Compass size={28} />
          </div>

          <span className="mt-6 font-mono text-5xl font-bold tracking-widest gold-text block">
            404
          </span>

          <h1 className="heading-md mt-4 text-primary">
            Page Not Found
          </h1>

          <p className="body-sm mt-3 text-secondary">
            The page you are looking for doesn't exist, has been removed, or the link may be outdated.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary !text-xs !py-3 !px-5 gap-2">
              <Home size={14} />
              <span>Return to Home</span>
            </Link>

            <Link to="/projects" className="btn-secondary !text-xs !py-3 !px-5 gap-2">
              <span>View Projects</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
