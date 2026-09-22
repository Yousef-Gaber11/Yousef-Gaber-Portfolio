"use client";

import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";

type FormStatus = "idle" | "submitting" | "success" | "error";

const contactInfo = [
  {
    label: "Email",
    value: "yousefgaber015@gmail.com",
    href: "mailto:yousefgaber015@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+20 1091041429",
    href: "tel:+201091041429",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Ismailia, Egypt",
    href: "#",
    icon: MapPin,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xljdjlaa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <SectionReveal
      id="contact"
      className="section-shell mb-16 mt-14 sm:mb-24 sm:mt-20"
    >
      <div className="glass-card group/main rounded-3xl p-6 sm:p-10 border border-border/60 dark:border-border/40 transition-all duration-500 hover:border-primary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Let&apos;s Build Something Useful
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              I&apos;m currently open to frontend software engineering
              opportunities and collaboration on ambitious products.
            </p>

            <div className="mt-6 space-y-3">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass-card group/item relative flex items-center gap-3 rounded-xl px-4 py-3 border border-border/50 dark:border-border/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface/70 hover:border-primary/40 cursor-pointer"
                >
                  <item.icon className="h-4 w-4 text-primary transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-6" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-muted">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-4 sm:p-5 border border-border dark:border-border/80 transition-all duration-300 hover:border-accent/40 shadow-sm"
          >
            <div className="space-y-3">
              <label
                className="block text-xs uppercase tracking-[0.14em] text-muted font-medium"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                aria-required="true"
                placeholder="Your name"
                className="w-full rounded-xl border border-border/80 dark:border-border/70 bg-background/65 px-3 py-2 text-sm text-foreground outline-none ring-accent transition focus:ring-2"
              />
            </div>

            <div className="mt-3 space-y-3">
              <label
                className="block text-xs uppercase tracking-[0.14em] text-muted font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-required="true"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border/80 dark:border-border/70 bg-background/65 px-3 py-2 text-sm text-foreground outline-none ring-accent transition focus:ring-2"
              />
            </div>

            <div className="mt-3 space-y-3">
              <label
                className="block text-xs uppercase tracking-[0.14em] text-muted font-medium"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                aria-required="true"
                placeholder="Tell me what you're building"
                className="w-full resize-none rounded-xl border border-border/80 dark:border-border/70 bg-background/65 px-3 py-2 text-sm text-foreground outline-none ring-accent transition focus:ring-2"
              />
            </div>

            {status === "error" && (
              <p
                className="mt-2 text-xs text-red-500 font-medium"
                role="alert"
                aria-live="assertive"
              >
                Something went wrong while sending your message. Please try
                again.
              </p>
            )}
            {status === "success" && (
              <p
                className="mt-2 flex items-center gap-1.5 text-xs text-green-500 font-medium"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 size={14} /> Thank you! Your message has been
                sent.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              aria-busy={status === "submitting"}
              className="group/btn mt-4 inline-flex w-full items-center justify-center rounded-xl border border-accent/40 bg-accent/15 px-4 py-2.5 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/25 hover:border-accent/70 hover:shadow-[0_0_15px_rgba(var(--color-accent)/0.15)] disabled:opacity-50 cursor-pointer"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <span className="inline-block transition-transform duration-300 group-hover/btn:scale-102 tracking-wide">
                  Send message
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </SectionReveal>
  );
}
