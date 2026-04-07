import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation, personal } from "../data/personal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/50 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-display text-sm font-bold tracking-[0.28em] text-sky-100">
          {personal.brand}
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex rounded-full border border-white/10 bg-white/5 p-3 text-slate-100 transition hover:border-sky-300/30 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-slate-950/90 px-4 py-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-sky-400/10 text-sky-200"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
