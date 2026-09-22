import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ThemeProvider } from "@/components/theme-provider";
import "../styles/globals.css";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yousef Gaber Ibrahim | Frontend Software Engineer",
  description:
    "Portfolio of Yousef Gaber Ibrahim, a frontend software engineer focused on modern, responsive, and scalable web applications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative isolate min-h-full font-sans text-foreground">
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Preloader />
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
