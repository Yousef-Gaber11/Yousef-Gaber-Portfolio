"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderGit2,
  Lightbulb,
  Target,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";

type Project = {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  contributions: string;
  tech: string[];
  href: string;
  liveDemo?: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "JobFit",
    subtitle: "Graduation Project (A+) — AI-Powered Hiring Platform",
    description:
      "Engineered a comprehensive, AI-driven recruitment and assessment platform featuring intelligent evaluation, secure resume pipelines, and real-time recruiter workflows.",
    problem:
      "Recruiters face significant friction in generating reliable technical assessments, tracking candidate integrity live, and evaluating multiple applicants consistently without bias.",
    solution:
      "JobFit unifies assessment creation, automated AI question generation, face-off comparisons, and real-time monitoring into a single, high-performance web platform.",
    contributions:
      "Collaborated on frontend architecture and UI design following a futuristic minimalist design system. Developed reusable React/Next.js interfaces in TypeScript, managed global workspace states, integrated AI evaluation flows, and resolved complex client-side UI bugs for a flawless user experience.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "AI Integration",
      "Supabase",
    ],
    href: "https://github.com/abowahbaz/JobFit",
  },
  {
    number: "02",
    name: "Maze of Death",
    subtitle: "Live Multiplayer Game",
    description:
      "Developed a real-time multiplayer 2D maze shooter featuring custom PIXI.js rendering and responsive mobile-optimized game controls.",
    problem:
      "Multiplayer browser games require immediate client feedback, smooth 60fps canvas rendering, and seamless touch controls to remain engaging across both desktop and mobile devices.",
    solution:
      "An action-packed game combining real-time Socket.IO communication with a high-performance PIXI.js canvas pipeline and fully adaptive mobile controllers.",
    contributions:
      "Designed and implemented the interactive login and game pages with full mobile responsiveness. Learned and leveraged PIXI.js for canvas rendering, and engineered custom on-screen mobile touch controls for smooth player movement and combat actions.",
    tech: ["PIXI.js", "JavaScript", "WebSockets", "HTML/CSS"],
    href: "https://github.com/Codera101/Maze-of-Death",
  },
  {
    number: "03",
    name: "Collaborative Online Editor",
    subtitle: "Realtime Team Editing",
    description:
      "Engineered a real-time collaborative text editor supporting room-based sessions and live multi-user synchronization.",
    problem:
      "Distributed teams require a frictionless, shared editing environment where document modifications are instantly synchronized across connected users without state conflicts.",
    solution:
      "A room-based collaborative editor leveraging WebSockets to broadcast live changes, coordinate room states, and track user presence seamlessly.",
    contributions:
      "Designed and implemented the complete frontend interface (main and register pages) and integrated Socket.IO event handlers to manage live room connections, user status updates, and real-time text synchronization. Handled responsive styling and resolved client-side interaction bugs.",
    tech: ["Node.js", "Socket.IO", "JavaScript", "HTML/CSS"],
    href: "https://github.com/Mazen-Ghanaym/collaborative-online-editor",
  },
  {
    number: "04",
    name: "Bookstore Management System",
    subtitle: "Desktop Application",
    description:
      "Engineered a comprehensive desktop application for bookstore administration, featuring an intuitive Tkinter GUI and robust SQLite database integration.",
    problem:
      "Bookstores require an efficient, centralized system to manage inventory, track user accounts, and process billing workflows seamlessly without relying on manual paperwork.",
    solution:
      "A modular desktop management system built with Python and SQLite that unifies inventory tracking, user permissions, and order billing into a single, responsive graphical interface.",
    contributions:
      "Designed and built the entire user interface and window layouts using Tkinter. Engineered the complete 'Manage Books' module from scratch and successfully integrated it with backend database operations for real-time inventory control.",
    tech: ["Python", "Tkinter", "SQLite", "Database Design"],
    href: "https://github.com/MhmudSameh24/Book-Store-Management-System",
  },
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedProject((current) => (current === index ? null : index));
  };

  return (
    <SectionReveal id="projects" className="section-shell mt-14 sm:mt-20">
      <div className="mb-6 sm:mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Projects
        </p>
        <h3 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-3xl">
          The problem, the solution, and my work.
        </h3>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {projects.map((project, idx) => (
          <motion.article
            key={project.name}
            layout
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{
              y: -4,
              transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
            }}
            transition={{
              layout: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
              opacity: { duration: 0.45 },
              y: { duration: 0.45, ease: [0.25, 1, 0.5, 1], delay: idx * 0.05 },
            }}
            onClick={() => toggleProject(idx)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleProject(idx);
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={expandedProject === idx}
            className="glass-card group relative cursor-pointer overflow-hidden rounded-2xl p-5 transition-all duration-300 ease-out sm:p-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgb(var(--color-accent)/0.18),transparent_38%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute -right-2 -top-7 select-none font-display text-[8rem] font-bold leading-none text-foreground/[0.045] transition-colors duration-300 group-hover:text-accent/[0.12]">
              {project.number}
            </span>

            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <FolderGit2 className="h-5 w-5 text-primary" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="text-sm font-medium text-primary">
                {project.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/70 bg-background/65 px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <AnimatePresence initial={false}>
                {expandedProject === idx ? (
                  <motion.div
                    layout
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="overflow-hidden will-change-[height,opacity]"
                  >
                    <div className="mt-5 space-y-4 border-t border-border/45 pt-4">
                      <div>
                        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                          <motion.span
                            animate={{ x: [0, 2, 0] }}
                            transition={{
                              duration: 1.6,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <Target
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                          </motion.span>
                          Problem
                        </div>
                        <p className="mt-1 text-sm leading-6 text-muted">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                          <motion.span
                            animate={{ y: [0, -2, 0] }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <Lightbulb
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                          </motion.span>
                          Solution
                        </div>
                        <p className="mt-1 text-sm leading-6 text-muted">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                          <motion.span
                            animate={{ rotate: [0, -3, 3, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                          </motion.span>
                          My Work
                        </div>
                        <p className="mt-1 text-sm leading-6 text-muted">
                          {project.contributions}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <Link
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-accent/45 bg-accent/10 px-3 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-background"
                        >
                          GitHub
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                        {project.liveDemo ? (
                          <Link
                            href={project.liveDemo}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-surface/45 px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
                          >
                            Live Demo
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Link>
                        ) : (
                          <button
                            type="button"
                            disabled
                            onClick={(event) => event.stopPropagation()}
                            className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border border-border/50 bg-surface/30 px-3 py-2 text-xs font-semibold text-muted opacity-70"
                            title="Live demo coming soon"
                          >
                            Live Demo
                            <ExternalLink className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div className="mt-5 flex justify-end">
                <motion.button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleProject(idx);
                  }}
                  aria-label={`${expandedProject === idx ? "Collapse" : "Expand"} ${project.name} details`}
                  aria-expanded={expandedProject === idx}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/45 text-accent transition-colors hover:border-accent/60 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <motion.div
                    animate={{
                      scale:
                        expandedProject === idx ? [1, 1.2, 1] : [1, 1.12, 1],
                      rotate:
                        expandedProject === idx ? [0, -10, 0] : [0, 10, 0],
                    }}
                    transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                    className="flex items-center justify-center"
                  >
                    <motion.div
                      animate={{
                        y: expandedProject === idx ? [0, -2, 0] : [0, 2, 0],
                      }}
                      transition={{
                        duration: 1.25,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex items-center justify-center"
                    >
                      {expandedProject === idx ? (
                        <ArrowUp className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <ArrowDown className="h-5 w-5" aria-hidden="true" />
                      )}
                    </motion.div>
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  );
}
