"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";

const roleText = "Frontend Software Engineer";

export default function HeroSection() {
  const [isBlobHovered, setIsBlobHovered] = useState(false);
  const [typedRole, setTypedRole] = useState("");
  const [isDeletingRole, setIsDeletingRole] = useState(false);

  useEffect(() => {
    const isComplete = typedRole === roleText;
    const delay =
      isComplete && !isDeletingRole ? 1400 : isDeletingRole ? 45 : 85;
    const timeout = window.setTimeout(() => {
      if (!isDeletingRole) {
        const nextRole = roleText.slice(0, typedRole.length + 1);
        setTypedRole(nextRole);
        if (nextRole === roleText) setIsDeletingRole(true);
      } else {
        const nextRole = roleText.slice(0, typedRole.length - 1);
        setTypedRole(nextRole);
        if (nextRole === "") setIsDeletingRole(false);
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeletingRole, typedRole]);

  return (
    <SectionReveal id="home" className="section-shell pt-24 sm:pt-28">
      <div className="glass-card relative overflow-hidden rounded-3xl p-5 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgb(var(--color-accent)/0.15),transparent_32%),radial-gradient(circle_at_90%_0%,rgb(var(--color-secondary)/0.14),transparent_28%),radial-gradient(circle_at_70%_100%,rgb(var(--color-primary)/0.12),transparent_30%)]" />

        <div className="relative flex flex-col gap-8 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="neon-ring mb-4 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent sm:mb-5 sm:px-4 sm:text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--color-accent)/0.9)]" />
              Open to new roles
            </motion.div>

            <h1 className="max-w-2xl font-display text-3xl font-bold leading-[1.04] text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Yousef Gaber
            </h1>

            <h2 className="mt-3 min-h-[1.25rem] text-[11px] font-semibold uppercase tracking-[0.34em] text-primary sm:mt-4 sm:min-h-[1.5rem] sm:text-sm md:min-h-[1.75rem] md:text-base">
              {typedRole}
              <span
                className="ml-1 inline-block h-[1em] w-px animate-pulse bg-accent align-middle"
                aria-hidden="true"
              />
            </h2>

            <h3 className="mt-3 text-lg font-medium text-foreground/90 sm:text-xl md:text-2xl">
              React / Next.js Specialist
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:mt-5 sm:text-base">
              I build scalable, polished digital experiences that balance clean
              frontend architecture with the same precision I use in competitive
              programming. My focus is on responsive interfaces, strong UX
              details, and reliable products that feel fast, refined, and easy
              to extend.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
              <Link
                href="mailto:yousefgaber015@gmail.com"
                aria-label="Email"
                className="glass-card inline-flex h-12 w-12 items-center justify-center rounded-2xl text-muted transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-500/10 hover:text-red-500 hover:shadow-[0_0_18px_rgba(239,68,68,0.3)] active:scale-95 dark:hover:border-red-400 dark:hover:text-red-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                </svg>
              </Link>

              <Link
                href="https://github.com/Yousef-Gaber11"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="glass-card inline-flex h-12 w-12 items-center justify-center rounded-2xl text-muted transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900 hover:bg-zinc-900/10 hover:text-zinc-900 hover:shadow-[0_0_18px_rgba(36,41,46,0.3)] active:scale-95 dark:hover:border-zinc-100 dark:hover:text-zinc-100 dark:hover:bg-zinc-100/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 0Z" />
                </svg>
              </Link>

              <Link
                href="https://linkedin.com/in/yousef-gaber"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="glass-card inline-flex h-12 w-12 items-center justify-center rounded-2xl text-muted transition-all duration-300 hover:-translate-y-1 hover:border-[#0a66c2] hover:bg-[#0a66c2]/10 hover:text-[#0a66c2] hover:shadow-[0_0_18px_rgba(10,102,194,0.3)] active:scale-95 dark:hover:border-sky-400 dark:hover:text-sky-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.57V9H3.54v11.45Z" />
                </svg>
              </Link>

              <Link
                href="https://wa.me/201091041429"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="glass-card inline-flex h-12 w-12 items-center justify-center rounded-2xl text-muted transition-all duration-300 hover:-translate-y-1 hover:border-[#25d366] hover:bg-[#25d366]/10 hover:text-[#25d366] hover:shadow-[0_0_18px_rgba(37,211,102,0.3)] active:scale-95 dark:hover:border-green-400 dark:hover:text-green-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M20.52 3.48A11.87 11.87 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.93L.1 24l6.33-1.66a11.9 11.9 0 0 0 5.65 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.23-6.17-3.45-8.42ZM12.09 21.76h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.23-.38a9.88 9.88 0 0 1-1.52-5.24C2.18 6.43 6.62 2 12.09 2a9.84 9.84 0 0 1 7 2.9 9.85 9.85 0 0 1 2.89 7c0 5.45-4.44 9.87-9.89 9.87Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <motion.div
              onHoverStart={() => setIsBlobHovered(true)}
              onHoverEnd={() => setIsBlobHovered(false)}
              animate={{
                borderRadius: isBlobHovered
                  ? "50%"
                  : [
                      "60% 40% 30% 70%/60% 30% 70% 40%",
                      "30% 70% 70% 30%/30% 30% 70% 70%",
                      "60% 40% 30% 70%/60% 30% 70% 40%",
                    ],
              }}
              transition={{
                borderRadius: {
                  duration: isBlobHovered ? 0.25 : 8,
                  ease: "easeInOut",
                  repeat: isBlobHovered ? 0 : Infinity,
                },
              }}
              whileHover={{ scale: 1.03 }}
              className="relative mx-auto aspect-[4/5] w-full max-w-[18rem] overflow-hidden border border-border/40 bg-surface/50 shadow-[0_0_60px_rgba(var(--color-primary),0.22),var(--shadow-soft)] sm:max-w-[22rem] md:max-w-[24rem] lg:max-w-[26rem]"
              style={{
                boxShadow: isBlobHovered
                  ? "0 0 90px rgba(var(--color-primary), 0.42), 0 24px 70px rgba(0, 0, 0, 0.28)"
                  : "0 0 55px rgba(var(--color-primary), 0.22), 0 24px 60px rgba(0, 0, 0, 0.18)",
              }}
            >
              <div
                className="absolute inset-0 rounded-[inherit] opacity-90"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(var(--color-primary), 0.28), transparent 42%), radial-gradient(circle at 70% 80%, rgba(var(--color-accent), 0.16), transparent 38%)",
                }}
              />

              <Image
                src="/images/me.jpeg"
                alt="Yousef Gaber Ibrahim"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full rounded-[inherit] object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/10" />
            </motion.div>
          </div>
        </div>

        <div className="relative mt-10 flex justify-center pt-2 sm:mt-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-5 py-3 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_20px_rgb(var(--color-accent)/0.25)]"
          >
            Explore My Work
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            >
              <ArrowDown className="h-4 w-4" />
            </motion.span>
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
