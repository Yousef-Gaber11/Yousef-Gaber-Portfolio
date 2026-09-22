"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const baseTransition = {
  duration: 18,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

const veilTransition = {
  duration: 24,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  const orbs = isDark
    ? [
        {
          className:
            "left-[-12%] top-[8%] h-[32rem] w-[32rem] bg-[radial-gradient(circle,rgba(var(--orb-1))/0.45_0%,rgba(var(--orb-1))/0.16_34%,transparent_70%)]",
          animate: {
            x: [0, 90, 40, -20, 0],
            y: [0, 50, 110, 35, 0],
            scale: [1, 1.08, 0.98, 1.03, 1],
          },
        },
        {
          className:
            "right-[-16%] top-[18%] h-[36rem] w-[36rem] bg-[radial-gradient(circle,rgba(var(--orb-2))/0.36_0%,rgba(var(--orb-2))/0.14_36%,transparent_72%)]",
          animate: {
            x: [0, -70, -130, -40, 0],
            y: [0, 80, 20, -55, 0],
            scale: [1, 1.04, 1.1, 0.98, 1],
          },
        },
        {
          className:
            "bottom-[-18%] left-[28%] h-[28rem] w-[28rem] bg-[radial-gradient(circle,rgba(var(--orb-3))/0.32_0%,rgba(var(--orb-3))/0.12_34%,transparent_70%)]",
          animate: {
            x: [0, 55, -30, 20, 0],
            y: [0, -55, -120, -20, 0],
            scale: [1, 1.07, 1.02, 1.09, 1],
          },
        },
      ]
    : [
        {
          className:
            "left-[-10%] top-[10%] h-[30rem] w-[30rem] bg-[radial-gradient(circle,rgba(var(--orb-1))/0.34_0%,rgba(var(--orb-1))/0.13_34%,transparent_70%)]",
          animate: {
            x: [0, 70, 30, -20, 0],
            y: [0, 35, 95, 25, 0],
            scale: [1, 1.04, 0.98, 1.02, 1],
          },
        },
        {
          className:
            "right-[-14%] top-[22%] h-[34rem] w-[34rem] bg-[radial-gradient(circle,rgba(var(--orb-2))/0.28_0%,rgba(var(--orb-2))/0.11_36%,transparent_72%)]",
          animate: {
            x: [0, -55, -110, -35, 0],
            y: [0, 55, 10, -35, 0],
            scale: [1, 1.03, 1.08, 0.99, 1],
          },
        },
        {
          className:
            "bottom-[-20%] left-[30%] h-[26rem] w-[26rem] bg-[radial-gradient(circle,rgba(var(--orb-3))/0.26_0%,rgba(var(--orb-3))/0.1_34%,transparent_70%)]",
          animate: {
            x: [0, 45, -20, 25, 0],
            y: [0, -45, -100, -25, 0],
            scale: [1, 1.05, 1.01, 1.06, 1],
          },
        },
      ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025),transparent_60%)]" />

      <motion.div
        className="absolute inset-[-10%] opacity-70 blur-[90px]"
        animate={{
          x: [0, 20, -12, 0],
          y: [0, -18, 14, 0],
          scale: [1, 1.04, 0.98, 1],
          rotate: [0, 4, -3, 0],
        }}
        transition={veilTransition}
        style={{
          background:
            "radial-gradient(circle at 18% 20%, rgba(var(--orb-1), 0.22), transparent 38%), radial-gradient(circle at 82% 18%, rgba(var(--orb-2), 0.18), transparent 34%), radial-gradient(circle at 55% 80%, rgba(var(--orb-3), 0.14), transparent 32%)",
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.14] dark:opacity-[0.12]"
        animate={{ opacity: [0.08, 0.14, 0.1, 0.16, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(var(--color-foreground), 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--color-foreground), 0.06) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          maskImage:
            "radial-gradient(circle at center, black 25%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 25%, transparent 82%)",
        }}
      />

      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[120px] ${orb.className}`}
          animate={orb.animate}
          transition={{
            ...baseTransition,
            duration: 18 + index * 2,
            delay: index * 0.85,
          }}
        />
      ))}

      <motion.div
        className="absolute -inset-20 opacity-30 blur-[120px]"
        animate={{
          x: [0, 40, -25, 0],
          y: [0, 22, -18, 0],
          scale: [1, 1.02, 0.99, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(var(--color-accent), 0.14), transparent 42%)",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(var(--color-background)/0.1),rgba(var(--color-background)/0.35))]" />
    </div>
  );
}
