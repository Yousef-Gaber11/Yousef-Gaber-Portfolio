"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Eye, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-1rem)] max-w-5xl -translate-x-1/2 sm:top-6 sm:w-[95%]"
    >
      <div className="glass-card relative z-50 rounded-2xl px-3 py-2.5 sm:px-5 sm:py-3">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-wide text-foreground sm:text-xl"
          >
            YG<span className="text-accent">.</span>
          </Link>

          <ul className="hidden items-center gap-5 text-sm font-medium text-muted lg:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* <div className="flex items-center gap-1.5 sm:gap-3">
            <a
              href="/Yousef_Gaber_Ibrahim_cv.pdf"
              download
              aria-label="Download resume"
              title="Download resume"
              className="inline-flex items-center gap-2 rounded-xl border border-accent/45 bg-accent/12 px-2.5 py-2 text-xs font-semibold text-accent transition-transform hover:-translate-y-0.5 sm:px-3 sm:text-sm"
            >
              <span className="hidden sm:inline">Resume</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                <Download size={15} />
              </motion.span>
            </a>
            <ThemeToggle />
          </div> */}

          <div className="flex items-center gap-1.5 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-3">
              <a
                href="/Yousef_Gaber_Ibrahim_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume"
                title="View resume"
                className="inline-flex items-center gap-2 rounded-xl border border-accent/45 bg-accent/12 px-2.5 py-2 text-xs font-semibold text-accent transition-transform hover:-translate-y-0.5 sm:px-3 sm:text-sm"
              >
                <span>Resume</span>
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  aria-hidden="true"
                >
                  <Eye size={15} />
                </motion.span>
              </a>
              <ThemeToggle />
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="glass-card inline-flex h-11 w-11 items-center justify-center rounded-xl text-foreground transition-transform hover:-translate-y-0.5 lg:hidden"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-transparent lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="glass-card fixed right-2 top-20 z-[60] w-[min(15rem,calc(100vw-1rem))] rounded-2xl p-4 sm:right-6 sm:top-24 lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl border border-border/50 bg-surface/50 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
