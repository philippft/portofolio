import Link from "next/link";
import Image from "next/image";
import { SkillCarousel } from "@/components/SkillCarousel";
import { ExhibitionSlider } from "@/components/ExhibitionSlider";
import { GithubActivity } from "@/components/GithubActivity";
import { ScrollReveal } from "@/components/ScrollReveal";
import { fetchGitHubTelemetry } from "@/lib/github";
import { Download, ArrowUpRight, Sparkles } from "lucide-react";

export default async function HomePage() {
  const telemetry = await fetchGitHubTelemetry("philippft");

  return (
    <div className="max-w-max-width mx-auto px-4 sm:px-6 md:px-12 flex flex-col space-y-28 md:space-y-36">
      {/* HERO SECTION */}
      <ScrollReveal yOffset={30} duration={0.9}>
        <section className="relative pt-4 md:pt-10">
          {/* Subtle Kinetic Monogram Watermark */}
          <div className="absolute -left-12 -top-16 select-none pointer-events-none opacity-[0.035] text-[200px] md:text-[340px] font-serif font-black leading-none text-primary">
            AI/ML
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Personal Narrative & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start z-10 space-y-6">
              {/* Curated Eyebrow Tag */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/90 dark:bg-stone-900/80 border border-outline-variant/60 dark:border-stone-800 shadow-sm text-primary dark:text-stone-200">
                <span className="w-2 h-2 rounded-full bg-signal-orange animate-pulse" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant dark:text-stone-300">
                  • INFORMATICS &amp; AI/ML // UNIVERSITAS UDAYANA
                </span>
              </div>

              {/* Kinetic Editorial Headline */}
              <h1 className="font-serif text-[48px] sm:text-[62px] lg:text-[76px] text-primary dark:text-stone-50 tracking-tight leading-[1.04] font-medium">
                Philip Filadelphia <br className="hidden sm:inline" />
                <span className="italic font-normal text-on-surface-variant dark:text-stone-400">
                  Tomasui.
                </span>
              </h1>

              {/* Sub-Role & Bio */}
              <div className="space-y-3 max-w-xl">
                <p className="font-mono text-[14px] text-signal-orange font-semibold tracking-tight">
                  Informatics Student at Universitas Udayana | AI/ML &amp; Full-Stack Engineer
                </p>
                <p className="font-sans text-[17px] text-on-surface-variant dark:text-stone-300 leading-relaxed font-[450]">
                  I bridge the gap between robust back-end systems and intelligent data solutions — from AI tools for cultural preservation to secure web platforms built from scratch.
                </p>
              </div>

              {/* CTA Cluster with Magnetic Pill Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/projects"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-cta bg-primary text-canvas font-sans text-[15px] font-semibold shadow-[0px_16px_32px_rgba(0,0,0,0.15)] dark:shadow-[0px_16px_32px_rgba(0,0,0,0.3)] hover:bg-signal-orange hover:text-white transition-all duration-300"
                >
                  <span>View My Engineering Projects →</span>
                </Link>
                <a
                  href="/CV_Philip_Tomasui.pdf"
                  download="CV_Philip_Tomasui.pdf"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-cta bg-surface/80 dark:bg-stone-900/70 border border-outline-variant/60 dark:border-stone-800 text-primary dark:text-stone-200 font-sans text-[15px] font-medium shadow-[0px_8px_20px_rgba(0,0,0,0.04)] dark:shadow-[0px_8px_20px_rgba(0,0,0,0.2)] hover:bg-surface-container-high dark:hover:bg-stone-800 transition-all duration-300"
                >
                  <Download className="w-4 h-4 text-signal-orange" />
                  <span>Curriculum Vitae</span>
                </a>
              </div>

              {/* Monospace Telemetry Micro Labels */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-on-surface-variant dark:text-stone-400 font-mono text-[12px]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-orange" />
                  Jimbaran • Bali, Indonesia
                </span>
                <span className="text-outline-variant dark:text-stone-700">•</span>
                <span className="text-primary dark:text-stone-300 font-medium">
                  GPA 3.97 / 4.00
                </span>
                <span className="text-outline-variant dark:text-stone-700">•</span>
                <span className="text-on-surface-variant dark:text-stone-400">
                  PKM-KC Gold Winner
                </span>
              </div>
            </div>

            {/* Right Column: Kinetic Orbital Dial & Profile Photo Capsule */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative mt-6 lg:mt-0">
              <div className="relative w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] flex items-center justify-center">
                {/* Orbital Rings SVG */}
                <svg
                  className="absolute -inset-10 w-[400px] h-[400px] sm:w-[430px] sm:h-[430px] pointer-events-none animate-[spin_40s_linear_infinite]"
                  viewBox="0 0 400 400"
                >
                  <circle
                    className="text-outline-variant/50 dark:text-stone-800"
                    cx="200"
                    cy="200"
                    fill="none"
                    r="185"
                    stroke="currentColor"
                    strokeDasharray="6 10"
                    strokeWidth="1.2"
                  />
                  <path
                    className="text-signal-orange"
                    d="M 200 15 A 185 185 0 0 1 385 200"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <circle className="fill-signal-orange" cx="385" cy="200" r="5" />
                </svg>

                {/* Central Photo Capsule */}
                <div className="w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] rounded-full bg-gradient-to-b from-surface to-surface-dim dark:from-stone-900 dark:to-stone-950 border-2 border-outline-variant/80 dark:border-stone-700/80 shadow-[0px_24px_54px_rgba(0,0,0,0.12)] dark:shadow-[0px_24px_54px_rgba(0,0,0,0.6)] flex items-center justify-center relative overflow-hidden group kinetic-card">
                  {/* Photo Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="Philip Filadelphia Tomasui - AI/ML & Systems Engineer"
                      fill
                      priority
                      sizes="(max-width: 640px) 280px, 300px"
                      className="object-cover rounded-full grayscale contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    {/* Subtle warm ambient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" />
                  </div>

                  {/* Subtle orbital bottom dial badge */}
                  <div className="absolute bottom-3 inset-x-0 flex justify-center z-10 pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-signal-orange ring-2 ring-stone-900/60 shadow-sm" />
                  </div>
                </div>

                {/* Satellite Telemetry Badge */}
                <div className="absolute -top-2 -left-2 sm:-left-6 bg-surface/90 dark:bg-stone-900/90 backdrop-blur-md border border-outline-variant/60 dark:border-stone-800 shadow-[0px_10px_24px_rgba(0,0,0,0.08)] dark:shadow-[0px_10px_24px_rgba(0,0,0,0.3)] rounded-full px-4 py-1.5 flex items-center gap-2 z-20">
                  <span className="w-2 h-2 rounded-full bg-signal-orange animate-ping" />
                  <span className="font-mono text-[11px] font-medium text-primary dark:text-stone-200">
                    Active Researcher: SIC Udayana
                  </span>
                </div>

                {/* Satellite Interactive Floating Icon */}
                <Link
                  href="/projects"
                  aria-label="Explore Projects"
                  className="magnetic-btn absolute -bottom-2 -right-2 sm:-right-4 w-14 h-14 rounded-full bg-primary text-canvas flex items-center justify-center shadow-[0px_16px_36px_rgba(0,0,0,0.2)] dark:shadow-[0px_16px_36px_rgba(0,0,0,0.4)] hover:bg-signal-orange hover:text-white transition-all duration-300 z-20 group"
                >
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 1: SKILLS & ENGINEERING TOOLKIT (INFINITE AUTO-SCROLLING MARQUEE) */}
      <ScrollReveal yOffset={40} duration={0.8}>
        <SkillCarousel />
      </ScrollReveal>

      {/* SECTION 2: LEADERSHIP & IMPACT EXHIBITION (INFINITE AUTO-SCROLLING MARQUEE) */}
      <ScrollReveal yOffset={40} duration={0.8}>
        <ExhibitionSlider />
      </ScrollReveal>

      {/* SECTION 3: GITHUB CONTRIBUTION GRAPH SECTION */}
      <ScrollReveal yOffset={40} duration={0.8}>
        <GithubActivity initialData={telemetry} />
      </ScrollReveal>

      {/* BOTTOM CTA SECTION */}
      <ScrollReveal yOffset={40} duration={0.8}>
        <section className="w-full">
          <div className="bg-surface/90 dark:bg-stone-900/60 rounded-container p-8 sm:p-14 border border-outline-variant/60 dark:border-stone-800/90 shadow-[0px_24px_54px_rgba(0,0,0,0.06)] dark:shadow-[0px_24px_54px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm transition-all">
            {/* Subtle warm glow arc */}
            <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-signal-orange/10 blur-3xl pointer-events-none" />

            <div className="space-y-3 max-w-xl z-10">
              <div className="inline-flex items-center gap-2 text-signal-orange font-mono text-[11px] uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PORTFOLIO CODEBASE &amp; ARCHITECTURE</span>
              </div>
              <h2 className="font-serif text-[34px] sm:text-[42px] text-primary dark:text-stone-100 tracking-tight font-medium leading-tight">
                Ready to explore technical benchmarks &amp; architectures?
              </h2>
              <p className="font-sans text-[15px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450]">
                Deep dive into complete repository implementations, neural models, and full-stack distributed systems.
              </p>
            </div>

            <div className="shrink-0 z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Link
                href="/projects"
                className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-cta bg-primary text-canvas font-sans font-semibold text-[15px] shadow-[0px_16px_36px_rgba(0,0,0,0.18)] dark:shadow-[0px_16px_36px_rgba(0,0,0,0.3)] hover:bg-signal-orange hover:text-white transition-all duration-300 group"
              >
                <span>View My Engineering Projects →</span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
