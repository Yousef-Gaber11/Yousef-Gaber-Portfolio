"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const startedAt = performance.now();
    const duration = 2000;
    let frame = 0;

    const updateProgress = (now: number) => {
      const elapsed = now - startedAt;
      const nextProgress = Math.min(100, (elapsed / duration) * 100);
      setProgress(nextProgress);

      if (nextProgress < 100) {
        frame = requestAnimationFrame(updateProgress);
      } else {
        setIsLoading(false);
        // Force scroll to top again just as preloader exits
        window.scrollTo(0, 0);
      }
    };

    frame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background text-foreground"
          aria-label="Loading portfolio"
          role="status"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(var(--color-accent)/0.12),transparent_42%)]" />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center text-center px-4 max-w-xs w-full"
          >
            {/* Box with YG. perfectly aligned inside */}
            <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-accent/45 bg-surface/50 shadow-[0_0_45px_rgb(var(--color-accent)/0.18)] backdrop-blur-md">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-2xl border border-dashed border-primary/45"
              />
              <div className="relative flex items-baseline tracking-[0.18em]">
                <span className="font-display text-3xl font-bold text-primary">
                  YG
                </span>
                <span className="inline-block h-2 w-2 ml-0.5 rounded-full bg-accent shadow-[0_0_12px_rgb(var(--color-accent)/0.9)] animate-pulse" />
              </div>
            </div>

            <h1 className="mt-5 font-display text-lg font-semibold tracking-wide text-foreground">
              Yousef Gaber
            </h1>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Frontend Software Engineer
            </p>

            <div className="mt-5 flex items-center gap-2 font-mono text-xs tracking-widest text-muted">
              <span>LOADING..</span>
              <span className="text-accent">
                {Math.round(progress).toString().padStart(3, "0")}%
              </span>
            </div>

            <div className="mt-4 h-px w-full overflow-hidden bg-border/40">
              <motion.div
                className="h-full origin-left bg-accent shadow-[0_0_12px_rgb(var(--color-accent)/0.8)]"
                style={{ scaleX: progress / 100 }}
                transition={{ ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
