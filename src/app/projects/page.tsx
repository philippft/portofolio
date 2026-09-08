import { ProjectFilterGrid } from "@/components/ProjectFilterGrid";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MemoryStick as Memory, Sparkles, Download, ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="max-w-max-width mx-auto px-4 sm:px-6 md:px-12 flex flex-col space-y-20 md:space-y-28">
      {/* HERO HEADER SECTION */}
      <ScrollReveal yOffset={30} duration={0.9}>
        <section className="relative pt-4 md:pt-10">
          {/* Subtle Monogram Kinetic Watermark */}
          <div className="absolute -right-8 -top-12 select-none pointer-events-none opacity-[0.03] text-[180px] md:text-[260px] font-serif font-black leading-none text-primary">
            REPOS
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 dark:bg-stone-900/90 border border-outline-variant/60 dark:border-stone-800 text-primary dark:text-stone-200 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-signal-orange animate-ping" />
              <span className="font-mono text-signal-orange uppercase tracking-widest font-semibold">
                • RESEARCH &amp; PRODUCTION ARCHITECTURES // /PROJECTS
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface/80 dark:bg-stone-900/80 border border-outline-variant/60 dark:border-stone-800/90 text-on-surface-variant dark:text-stone-400 font-mono text-[12px]">
              <Memory className="w-4 h-4 text-signal-orange" />
              <span>7 Canonical Deployments</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <h1 className="font-serif text-[42px] sm:text-[54px] lg:text-[68px] text-primary dark:text-stone-50 tracking-tight leading-[1.05] font-medium">
                Featured Engineering{" "}
                <span className="italic font-normal text-on-surface-variant dark:text-stone-400">
                  &amp; Research
                </span>
              </h1>
              <p className="font-sans text-[16px] sm:text-[17px] text-on-surface-variant dark:text-stone-400 max-w-2xl font-[450] leading-relaxed">
                Rigorously evaluated machine learning systems, empirical predictive benchmarks, and production-grade software architectures engineered with mathematical discipline.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FILTERABLE BENTO GRID SECTION */}
      <ProjectFilterGrid />

      {/* BOTTOM INVITATION & CTA CARD */}
      <ScrollReveal yOffset={40} duration={0.8}>
        <section className="w-full">
          <div className="bg-surface/90 dark:bg-stone-900/60 rounded-container p-8 sm:p-14 border border-outline-variant/60 dark:border-stone-800/90 shadow-[0px_24px_54px_rgba(0,0,0,0.06)] dark:shadow-[0px_24px_54px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm transition-all">
            <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-signal-orange/10 blur-3xl pointer-events-none" />

            <div className="space-y-3 max-w-xl z-10">
              <div className="inline-flex items-center gap-2 text-signal-orange font-mono text-[11px] uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OPEN FOR APPLIED ML &amp; ENTERPRISE SYSTEMS</span>
              </div>
              <h2 className="font-serif text-[32px] sm:text-[40px] text-primary dark:text-stone-100 tracking-tight font-medium leading-tight">
                Have a research proposal or challenging technical mandate?
              </h2>
              <p className="font-sans text-[15px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450]">
                Let&apos;s engineer models with verifiable integrity, empirical rigor, and fault-tolerant cloud architecture.
              </p>
            </div>

            <div className="shrink-0 z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href="mailto:dzosfphilip@gmail.com?subject=Project%20Collaboration%20-%20Philip%20Tomasui"
                className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-cta bg-signal-orange text-white font-sans font-semibold text-[15px] shadow-[0px_16px_36px_rgba(243,115,56,0.25)] hover:opacity-95 transition-all duration-300"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="/CV_Philip_Tomasui.pdf"
                download="CV_Philip_Tomasui.pdf"
                className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-cta bg-surface-container dark:bg-stone-800/90 border border-outline-variant/60 dark:border-stone-700/60 text-primary dark:text-stone-200 font-sans font-medium text-[15px] hover:bg-surface-container-high dark:hover:bg-stone-800 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-signal-orange" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
