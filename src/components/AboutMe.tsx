"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  GraduationCap,
  MonitorSmartphone,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";

export default function AboutMe() {
  return (
    <SectionReveal id="about" className="section-shell mt-14 sm:mt-20">
      <div className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgb(var(--color-accent)/0.14),transparent_28%),radial-gradient(circle_at_90%_0%,rgb(var(--color-primary)/0.12),transparent_26%),radial-gradient(circle_at_65%_100%,rgb(var(--color-secondary)/0.12),transparent_28%)]" />

        <div className="relative mb-6 sm:mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">
            About Me
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-2xl">
            Engineering fast, scalable web experiences with an algorithmic
            mindset.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group/narrative"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover/narrative:opacity-100" />

            <div className="relative">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                <MonitorSmartphone className="h-4 w-4" />
                Narrative
              </div>

              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base sm:leading-8">
                <p className="transition-colors duration-300 hover:text-foreground">
                  I am a Computer Science graduate from Suez Canal University,
                  specialized as a Frontend Software Engineer. I combine deep
                  algorithmic precision with modern web technologies (React,
                  Next.js) to build responsive, scalable, and user-centric web
                  applications.
                </p>
                <p className="transition-colors duration-300 hover:text-foreground">
                  With a strong foundation in OOP, Data Structures, and
                  Algorithms, I’ve solved over 1,600 problems on platforms like
                  LeetCode and Codeforces (Specialist rank). Additionally, I
                  served as a Volunteer Mentor in the ICPC community, guiding
                  the next generation of developers.
                </p>
              </div>
            </div>

            <div className="relative mt-6 rounded-2xl border border-border/60 bg-background/55 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Snapshot
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ["Frontend", "React / Next.js / Tailwind"],
                  [
                    "Mindset",
                    "Algorithmic precision, clean architecture, pixel-perfect execution",
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="group/snap rounded-xl border border-border/50 bg-surface/55 p-3 transition-all duration-300 hover:border-primary/50 hover:bg-background/80 hover:shadow-sm"
                  >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted transition-colors group-hover/snap:text-primary">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(var(--color-primary)/0.15)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(var(--color-accent)/0.18),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/55 bg-background/60 text-primary shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:scale-110">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-muted">
                  Competitive Programming
                </p>
                <p className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                  Specialist
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Codeforces Specialist & AtCoder Green Rank
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(var(--color-primary)/0.15)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(var(--color-accent)/0.18),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/55 bg-background/60 text-primary shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:scale-110">
                  <Users className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-muted">
                  Community & Leadership
                </p>
                <p className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                  3+ Years Mentor
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  ICPC Community Mentor & Workshop Facilitator
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 sm:col-span-2 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(var(--color-primary)/0.15)] flex flex-col justify-between"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(var(--color-accent)/0.18),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/55 bg-background/60 text-primary shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:scale-110">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="flex flex-wrap justify-end gap-2">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Graduation Project: A+
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-muted">
                  Education & Academics
                </p>
                <p className="mt-1 text-xl font-semibold text-foreground">
                  B.Sc. in Computer Science and Informatics
                </p>
                <p className="mt-1 text-sm text-muted">
                  Suez Canal University • (2022 - 2026)
                </p>
                <p className="mt-1 text-sm font-semibold text-accent">
                  Grade: Very Good
                </p>
              </div>

              <div className="relative mt-5 pt-4 border-t border-border/40 flex items-center justify-between">
                <span className="text-xs text-muted">
                  Check out my graduation project details
                </span>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-accent"
                >
                  View Graduation Project
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.span>
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
