"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Users } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";

const experiences = [
  {
    title: "Volunteer HR Committee Lead",
    org: "Mish Hackers Team",
    period: "Jan 2024 - May 2026",
    details: [
      "Directed a 25-member HR team, progressing from Member to Head, to drive recruitment and engagement initiatives for a 200 member organization.",
      "Implemented streamlined processes that enhanced internal communication, cultivated teamwork, and ensured effective cross-functional operations.",
    ],
  },
  {
    title: "Volunteer Mentor",
    org: "ICPC Community",
    period: "Jul 2023 - Feb 2026",
    details: [
      "Mentored participants in competitive programming, providing targeted guidance on algorithmic problem-solving techniques and data structures.",
      "Facilitated community events and technical workshops to promote knowledge sharing and collaborative learning among members.",
    ],
  },
];

export default function Experience() {
  return (
    <SectionReveal id="experience" className="section-shell mt-14 sm:mt-20">
      <div className="relative">
        <div className="pointer-events-none absolute -inset-4 bg-[radial-gradient(circle_at_30%_30%,rgb(var(--color-primary)/0.08),transparent_60%)]" />

        <div className="mb-6 sm:mb-8 relative">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">
            Experience
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-3xl">
            Leadership & Community Impact
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8">
          <div className="absolute bottom-4 left-2 top-4 w-[2px] bg-gradient-to-b from-primary/60 via-accent/40 to-border/30" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className="glass-card group relative rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--color-primary)/0.15)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(var(--color-accent)/0.15),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute -left-[2.15rem] sm:-left-[2.45rem] top-7 inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:border-primary">
                  {idx === 0 ? (
                    <Users className="h-4 w-4 text-primary" />
                  ) : (
                    <BriefcaseBusiness className="h-4 w-4 text-primary" />
                  )}
                </div>

                <div className="relative flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-primary/90 mt-0.5">
                      {item.org}
                    </p>
                  </div>
                  <p className="rounded-full border border-border/70 bg-surface/80 px-3.5 py-1 text-xs font-medium text-muted shadow-sm backdrop-blur-sm">
                    {item.period}
                  </p>
                </div>

                <ul className="relative mt-3 space-y-2 text-sm leading-relaxed text-muted sm:text-base">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="relative mt-2 flex h-2 w-2 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--color-primary),0.8)]" />
                      </span>
                      <span className="text-xs sm:text-sm leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
