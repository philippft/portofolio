import Link from "next/link";
import Image from "next/image";
import { SkillCarousel } from "@/components/SkillCarousel";
import { ExhibitionSlider } from "@/components/ExhibitionSlider";
import { GithubActivity } from "@/components/GithubActivity";
import { ScrollReveal } from "@/components/ScrollReveal";
import { fetchGitHubTelemetry } from "@/lib/github";
import { Download, ArrowUpRight, Sparkles } from "lucide-react";

function ProfileOrbitalPhoto({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="relative w-[240px] h-[240px] xs:w-[280px] xs:h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] flex items-center justify-center">
        {/* Orbital Rings SVG (Responsive) */}
        <svg
          className="absolute -inset-4 xs:-inset-6 sm:-inset-8 md:-inset-10 w-[calc(100%+2rem)] xs:w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] md:w-[calc(100%+5rem)] h-[calc(100%+2rem)] xs:h-[calc(100%+3rem)] sm:h-[calc(100%+4rem)] md:h-[calc(100%+5rem)] pointer-events-none animate-[spin_40s_linear_infinite]"
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
        <div className="w-[200px] h-[200px] xs:w-[230px] xs:h-[230px] sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-b from-surface to-surface-dim dark:from-stone-900 dark:to-stone-950 border-2 border-outline-variant/80 dark:border-stone-700/80 shadow-[0px_24px_54px_rgba(0,0,0,0.12)] dark:shadow-[0px_24px_54px_rgba(0,0,0,0.6)] flex items-center justify-center relative overflow-hidden group kinetic-card">
          {/* Photo Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Philip Filadelphia Tomasui - AI/ML & Systems Engineer"
              fill
              priority
              quality={100}
              sizes="(max-width: 640px) 460px, (max-width: 1024px) 540px, 600px"
              className="object-cover object-top rounded-full group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </div>

          {/* Subtle orbital bottom dial badge */}
          <div className="absolute bottom-2.5 sm:bottom-3 inset-x-0 flex justify-center z-10 pointer-events-none">
            <div className="w-2 h-2 rounded-full bg-signal-orange ring-2 ring-stone-900/60 shadow-sm" />
          </div>
        </div>

        {/* Satellite Telemetry Badge */}
        <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-4 bg-surface/95 dark:bg-stone-900/95 backdrop-blur-md border border-outline-variant/60 dark:border-stone-800 shadow-[0px_10px_24px_rgba(0,0,0,0.08)] dark:shadow-[0px_10px_24px_rgba(0,0,0,0.3)] rounded-full px-2.5 sm:px-4 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 z-20">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-signal-orange animate-ping shrink-0" />
          <span className="font-mono text-[9.5px] xs:text-[10px] sm:text-[11px] font-medium text-primary dark:text-stone-200 whitespace-nowrap">
            Active Researcher: SIC Udayana
          </span>
        </div>

        {/* Satellite Interactive Floating Icon */}
        <Link
          href="/projects"
          aria-label="Explore Projects"
          className="magnetic-btn absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-3 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary text-canvas flex items-center justify-center shadow-[0px_16px_36px_rgba(0,0,0,0.2)] dark:shadow-[0px_16px_36px_rgba(0,0,0,0.4)] hover:bg-signal-orange hover:text-white transition-all duration-300 z-20 group"
        >
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}

export default async function HomePage() {
  const telemetry = await fetchGitHubTelemetry("philippft");

  return (
    <div className="max-w-max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col space-y-16 sm:space-y-20 md:space-y-28 lg:space-y-36 overflow-x-hidden">
      {/* HERO SECTION */}
      <ScrollReveal yOffset={30} duration={0.9}>
        <section className="relative pt-2 sm:pt-6 md:pt-10 overflow-hidden">
          {/* Background Typography Watermark */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none flex items-center justify-start">
            <span className="text-[120px] xs:text-[160px] sm:text-[220px] md:text-[280px] lg:text-[340px] font-serif font-black leading-none text-primary opacity-[0.04] dark:opacity-[0.06] -translate-x-4 sm:-translate-x-8 -translate-y-6 sm:-translate-y-10">
              AI/ML
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left Column: Personal Narrative & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start z-10 space-y-5 sm:space-y-6">
              {/* 1. Curated Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-surface/90 dark:bg-stone-900/80 border border-outline-variant/60 dark:border-stone-800 shadow-sm text-primary dark:text-stone-200">
                <span className="w-2 h-2 rounded-full bg-signal-orange animate-pulse shrink-0" />
                <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant dark:text-stone-300">
                  • INFORMATICS &amp; AI/ML // UNIVERSITAS UDAYANA
                </span>
              </div>

              {/* 2. Kinetic Editorial Headline */}
              <h1 className="font-serif text-[38px] xs:text-[46px] sm:text-[56px] md:text-[66px] lg:text-[76px] text-primary dark:text-stone-50 tracking-tight leading-[1.06] font-medium">
                Philip Filadelphia <br className="hidden sm:inline" />
                <span className="italic font-normal text-on-surface-variant dark:text-stone-400">
                  Tomasui.
                </span>
              </h1>

              {/* 3. Sub-Role & Bio */}
              <div className="space-y-2.5 sm:space-y-3 max-w-xl">
                <p className="font-mono text-[13px] sm:text-[14px] text-signal-orange font-semibold tracking-tight">
                  Informatics Student at Universitas Udayana | AI/ML &amp; Full-Stack Engineer
                </p>
                <p className="font-sans text-[15px] sm:text-[16px] md:text-[17px] text-on-surface-variant dark:text-stone-300 leading-relaxed font-[450]">
                  Building intelligent data solutions and scalable web platforms—from AI models to robust back-end systems.
                </p>
              </div>

              {/* 4. Mobile Profile Photo (Visible on mobile/tablet <lg, positioned right after Bio) */}
              <div className="w-full py-4 my-1 lg:hidden flex justify-center">
                <ProfileOrbitalPhoto />
              </div>

              {/* 5. CTA Cluster with Magnetic Pill Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 sm:pt-2 w-full sm:w-auto">
                <Link
                  href="/projects"
                  className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-cta bg-primary text-canvas font-sans text-[14px] sm:text-[15px] font-semibold shadow-[0px_16px_32px_rgba(0,0,0,0.15)] dark:shadow-[0px_16px_32px_rgba(0,0,0,0.3)] hover:bg-signal-orange hover:text-white transition-all duration-300 text-center"
                >
                  <span>View My Engineering Projects →</span>
                </Link>
                <a
                  href="/CV_Philip_Tomasui.pdf"
                  download="CV_Philip_Tomasui.pdf"
                  className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-cta bg-surface/80 dark:bg-stone-900/70 border border-outline-variant/60 dark:border-stone-800 text-primary dark:text-stone-200 font-sans text-[14px] sm:text-[15px] font-medium shadow-[0px_8px_20px_rgba(0,0,0,0.04)] dark:shadow-[0px_8px_20px_rgba(0,0,0,0.2)] hover:bg-surface-container-high dark:hover:bg-stone-800 transition-all duration-300 text-center"
                >
                  <Download className="w-4 h-4 text-signal-orange" />
                  <span>Curriculum Vitae</span>
                </a>
              </div>

              {/* 6. Monospace Telemetry Micro Labels */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-on-surface-variant dark:text-stone-400 font-mono text-[11px] sm:text-[12px]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-orange shrink-0" />
                  Jimbaran • Bali, Indonesia
                </span>
                <span className="text-outline-variant dark:text-stone-700 hidden xs:inline">•</span>
                <span className="text-primary dark:text-stone-300 font-medium">
                  GPA 3.97 / 4.00
                </span>
                <span className="text-outline-variant dark:text-stone-700 hidden xs:inline">•</span>
                <span className="text-on-surface-variant dark:text-stone-400">
                  PKM-KC Gold Winner
                </span>
              </div>
            </div>

            {/* Desktop Right Column: Kinetic Orbital Dial & Profile Photo Capsule (Visible on >= lg) */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-end relative">
              <ProfileOrbitalPhoto />
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
          <div className="bg-surface/90 dark:bg-stone-900/60 rounded-container p-6 sm:p-10 lg:p-14 border border-outline-variant/60 dark:border-stone-800/90 shadow-[0px_24px_54px_rgba(0,0,0,0.06)] dark:shadow-[0px_24px_54px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 backdrop-blur-sm transition-all">
            {/* Subtle warm glow arc */}
            <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-signal-orange/10 blur-3xl pointer-events-none" />

            <div className="space-y-3 max-w-xl z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-signal-orange font-mono text-[11px] uppercase tracking-widest font-semibold justify-center md:justify-start">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PORTFOLIO CODEBASE &amp; ARCHITECTURE</span>
              </div>
              <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] text-primary dark:text-stone-100 tracking-tight font-medium leading-tight">
                Ready to explore technical benchmarks &amp; architectures?
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450]">
                Deep dive into complete repository implementations, neural models, and full-stack distributed systems.
              </p>
            </div>

            <div className="shrink-0 z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Link
                href="/projects"
                className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-cta bg-primary text-canvas font-sans font-semibold text-[14px] sm:text-[15px] shadow-[0px_16px_36px_rgba(0,0,0,0.18)] dark:shadow-[0px_16px_36px_rgba(0,0,0,0.3)] hover:bg-signal-orange hover:text-white transition-all duration-300 group text-center"
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
