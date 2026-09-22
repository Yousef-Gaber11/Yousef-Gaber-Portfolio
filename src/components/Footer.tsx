"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Code2 } from "lucide-react";
import { useEffect, useRef } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

type SocialLink = {
  name: string;
  href: string;
  color: string;
  darkColor?: string;
  icon: ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    name: "Email",
    href: "mailto:yousefgaber015@gmail.com",
    color: "#ef4444",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/Yousef-Gaber11",
    color: "#24292e",
    darkColor: "#f3f4f6",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 0Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yousef-gaber",
    color: "#0a66c2",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.57V9H3.54v11.45Z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/201091041429",
    color: "#25d366",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.93L.1 24l6.33-1.66a11.9 11.9 0 0 0 5.65 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.23-6.17-3.45-8.42ZM12.09 21.76h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.23-.38a9.88 9.88 0 0 1-1.52-5.24C2.18 6.43 6.62 2 12.09 2a9.84 9.84 0 0 1 7 2.9 9.85 9.85 0 0 1 2.89 7c0 5.45-4.44 9.87-9.89 9.87Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    ),
  },
];

const stats = [
  { label: "Leadership & Community", value: "ICPC Mentor" },
  { label: "Core stack", value: "React / Next.js" },
  { label: "Availability", value: "Open for opportunities" },
];

const ambientDots = [
  [5, 18],
  [14, 42],
  [22, 12],
  [31, 72],
  [42, 28],
  [51, 55],
  [62, 17],
  [72, 78],
  [84, 34],
  [94, 62],
  [9, 86],
  [18, 68],
  [28, 36],
  [37, 91],
  [47, 8],
  [57, 83],
  [67, 44],
  [77, 10],
  [88, 88],
  [97, 24],
  [3, 58],
  [25, 94],
  [45, 68],
  [64, 94],
  [80, 58],
  [91, 8],
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const ambient = ambientRef.current;
    if (!footer || !ambient) return;

    let frame = 0;
    const updatePointer = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = footer.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;
        ambient.style.setProperty(
          "--pointer-x",
          `${Math.max(0, Math.min(100, x))}%`,
        );
        ambient.style.setProperty(
          "--pointer-y",
          `${Math.max(0, Math.min(100, y))}%`,
        );
      });
    };

    const resetPointer = () => {
      ambient.style.setProperty("--pointer-x", "50%");
      ambient.style.setProperty("--pointer-y", "50%");
    };

    footer.addEventListener("pointermove", updatePointer);
    footer.addEventListener("pointerleave", resetPointer);
    return () => {
      cancelAnimationFrame(frame);
      footer.removeEventListener("pointermove", updatePointer);
      footer.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      ref={footerRef}
      className="relative mt-24 w-full overflow-hidden border-t border-border/40 bg-background/85 pb-10 pt-16 backdrop-blur-xl"
    >
      <div
        ref={ambientRef}
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-100 [--pointer-x:50%] [--pointer-y:50%]"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 transition-[transform] duration-700 ease-out"
          style={{
            transform:
              "translate(calc((var(--pointer-x) - 50%) * 0.035), calc((var(--pointer-y) - 50%) * 0.035))",
          }}
        >
          {ambientDots.map(([left, top], index) => (
            <motion.span
              key={`${left}-${top}`}
              className="absolute h-2 w-2 rounded-full bg-black shadow-[0_0_12px_rgb(0_0_0/0.9)] dark:h-1.5 dark:w-1.5 dark:bg-cyan-300 dark:shadow-[0_0_12px_rgb(var(--color-accent)/0.95)]"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={{ opacity: [0.75, 1, 0.75], scale: [0.9, 1.2, 0.9] }}
              transition={{
                duration: 2.8 + (index % 5) * 0.45,
                delay: (index % 7) * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <div
          className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl transition-[left,top] duration-500 ease-out dark:bg-cyan-400/10"
          style={{ left: "var(--pointer-x)", top: "var(--pointer-y)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgb(var(--color-accent)/0.1)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_0.8fr_1.2fr] lg:gap-16">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-accent" />
              <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
                Yousef Gaber
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Frontend Engineer and Competitive Programmer building
              high-performance web experiences with thoughtful interfaces.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.name}
                  style={
                    {
                      "--brand-color": social.color,
                      "--brand-dark-color": social.darkColor || social.color,
                    } as CSSProperties
                  }
                  className="social-icon-btn glass-card inline-flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-sm font-medium text-muted transition-all duration-200 hover:pl-1 hover:text-accent"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_30px_rgb(var(--color-accent)/0.15)]">
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                  Profile Highlights
                </h4>
                <span
                  className="h-2 w-2 rounded-full bg-success shadow-[0_0_10px_rgb(var(--color-success)/0.8)]"
                  aria-label="Available"
                />
              </div>
              <div className="mt-4 divide-y divide-border/40">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0"
                  >
                    <span className="text-xs uppercase tracking-[0.12em] text-muted">
                      {stat.label}
                    </span>
                    <span className="text-right text-xs font-semibold text-foreground">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .social-icon-btn:hover {
            border-color: var(--brand-color);
            color: var(--brand-color);
            box-shadow: 0 0 22px var(--brand-color);
          }
          :global(.dark) .social-icon-btn:hover {
            border-color: var(--brand-dark-color);
            color: var(--brand-dark-color);
            box-shadow: 0 0 22px var(--brand-dark-color);
          }
        `}</style>

        <div className="relative flex min-h-16 items-center justify-end border-t border-border/40 pt-6 sm:min-h-14">
          <div className="absolute left-1/2 top-6 inline-flex max-w-[calc(100%-5rem)] -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-lg border border-border/60 bg-surface/40 px-3 py-2 font-mono text-[10px] text-muted shadow-sm sm:text-xs">
            <span className="font-bold text-success">&gt;</span>
            <span className="text-foreground">
              npx <span className="font-bold text-accent">yousef-gaber</span>
            </span>
            <span className="hidden text-muted/60 italic md:inline">
              {"/* © 2026 All Rights Reserved */"}
            </span>
            <span className="animate-pulse font-bold text-accent">_</span>
          </div>
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.94 }}
            className="glass-card z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl border-accent/45 bg-accent/10 text-accent transition-colors duration-300 hover:bg-accent hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
