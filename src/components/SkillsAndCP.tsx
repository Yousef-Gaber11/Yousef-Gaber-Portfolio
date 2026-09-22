"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Cpu,
  Wrench,
  Trophy,
  ExternalLink,
  Layers,
  Terminal,
} from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";

const skillCategories = [
  {
    title: "Languages",
    icon: Terminal,
    skills: [
      { name: "C", level: "Advanced" },
      { name: "C++", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "PIXI.js", level: "Intermediate" },
    ],
  },
  {
    title: "Core CS & Engineering",
    icon: Cpu,
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: "Expert" },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
      { name: "Problem Solving & CP", level: "Advanced" },
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "GitHub Actions", level: "Intermediate" },
      { name: "Figma", level: "Expert" },
    ],
  },
];

const cpPlatforms = [
  {
    name: "LeetCode",
    handle: "Yousef_Gaber11",
    rating: "1,636",
    subtext: "Top 19.94% • 1,600+ Solved",
    badge: "Contest Rating",
    iconPath: "/images/leetcode.webp",
    accentColor:
      "from-orange-500/10 via-amber-500/5 to-transparent dark:from-orange-500/25 dark:via-amber-500/15 dark:to-transparent",
    borderColor:
      "border-orange-500/20 hover:border-orange-500/50 dark:border-orange-500/30 dark:hover:border-orange-500/70",
    glowColor:
      "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.12)] dark:group-hover:shadow-[0_0_35px_rgba(249,115,22,0.25)]",
    badgeColor:
      "border-orange-500/25 bg-orange-500/5 text-orange-700 dark:text-orange-400",
    profileUrl: "https://leetcode.com/u/Yousef_Gaber11/",
  },
  {
    name: "Codeforces",
    handle: "Yousef_Gaber11",
    rating: "Specialist",
    subtext: "Max Rating 1414 • Active Competitor",
    badge: "Rank",
    iconPath: "/images/codeforces.webp",
    accentColor:
      "from-blue-500/10 via-cyan-500/5 to-transparent dark:from-blue-500/25 dark:via-cyan-500/15 dark:to-transparent",
    borderColor:
      "border-blue-500/20 hover:border-blue-500/50 dark:border-blue-500/30 dark:hover:border-blue-500/70",
    glowColor:
      "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] dark:group-hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]",
    badgeColor:
      "border-blue-500/25 bg-blue-500/5 text-blue-700 dark:text-blue-400",
    profileUrl: "https://codeforces.com/profile/Yousef_Gaber11",
  },
  {
    name: "AtCoder",
    handle: "Yousef_Gaber11",
    rating: "1,071",
    subtext: "Green Rank • 5 Kyu Algorithm",
    badge: "Competitive",
    iconPath: "/images/atcoder.webp",
    isAtCoder: true,
    accentColor:
      "from-emerald-600/10 via-green-600/5 to-transparent dark:from-emerald-500/25 dark:via-green-500/15 dark:to-transparent",
    borderColor:
      "border-emerald-600/20 hover:border-emerald-600/50 dark:border-emerald-500/30 dark:hover:border-emerald-500/70",
    glowColor:
      "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] dark:group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]",
    badgeColor:
      "border-emerald-600/25 bg-emerald-600/5 text-emerald-800 dark:text-emerald-400",
    profileUrl: "https://atcoder.jp/users/Yousef_Gaber11",
  },
  {
    name: "HackerRank",
    handle: "yousefgaber015",
    rating: "Gold Badges",
    subtext: "C/C++ & Problem Solving Certified",
    badge: "Certifications",
    iconPath: "/images/hackerrank.png",
    accentColor:
      "from-amber-600/12 via-yellow-500/6 to-transparent dark:from-yellow-500/30 dark:via-amber-400/15 dark:to-transparent",
    borderColor:
      "border-amber-600/25 hover:border-amber-600/60 dark:border-yellow-500/40 dark:hover:border-yellow-400/80",
    glowColor:
      "group-hover:shadow-[0_0_30px_rgba(217,119,6,0.12)] dark:group-hover:shadow-[0_0_35px_rgba(234,179,8,0.3)]",
    badgeColor:
      "border-amber-600/30 bg-amber-600/5 text-amber-900 dark:text-yellow-300",
    profileUrl: "https://www.hackerrank.com/profile/yousefgaber015",
  },
];

export default function SkillsAndCP() {
  return (
    <SectionReveal id="skills" className="section-shell mt-14 sm:mt-20">
      <div className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgb(var(--color-primary)/0.12),transparent_40%),radial-gradient(circle_at_20%_80%,rgb(var(--color-accent)/0.1),transparent_40%)]" />

        <div className="relative mb-8 sm:mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">
            Technical Dashboard
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Skills & Competitive Programming
          </h2>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">
              Core Expertise & Tech Stack
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((cat, idx) => (
              <motion.article
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className="glass-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(var(--color-primary)/0.15)] flex flex-col justify-between"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(var(--color-accent)/0.15),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/55 bg-background/60 text-primary shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-foreground">
                    {cat.title}
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-lg border border-border/60 bg-surface/60 px-2.5 py-1 text-xs font-medium text-muted transition-colors duration-200 hover:border-primary/40 hover:text-foreground"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="h-5 w-5 text-accent" />
            <h3 className="text-xl font-semibold text-foreground">
              CP & PS Profiles
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cpPlatforms.map((platform, idx) => (
              <motion.article
                key={platform.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className={`glass-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 border ${platform.borderColor} ${platform.glowColor} flex flex-col justify-between`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${platform.accentColor} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${platform.badgeColor}`}
                    >
                      {platform.badge}
                    </span>
                    <a
                      href={platform.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-foreground"
                      title="View Profile"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mt-4 flex items-center gap-2.5">
                    <div
                      className={`relative h-9 w-9 overflow-hidden rounded-xl border border-border/50 shadow-sm flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110 ${platform.isAtCoder ? "bg-slate-900 text-white" : "bg-background/80"}`}
                    >
                      <Image
                        src={platform.iconPath}
                        alt={platform.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {platform.name}
                      </p>
                      <p className="text-xl font-bold tracking-tight text-foreground">
                        {platform.rating}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs font-medium text-muted/90 leading-relaxed">
                    {platform.subtext}
                  </p>
                </div>
                <div className="relative mt-5 pt-3 border-t border-border/40 flex items-center justify-between text-xs">
                  <span className="font-mono text-muted">
                    @{platform.handle}
                  </span>
                  <motion.a
                    href={platform.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:text-foreground cursor-pointer"
                  >
                    <span>Verify</span>
                    <span>→</span>
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
