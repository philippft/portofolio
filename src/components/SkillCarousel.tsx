"use client";

import { SkillFoundation } from "@/types";
import { EngineeringGatewayCards } from "@/components/EngineeringGatewayCards";

const skillsData: SkillFoundation[] = [
  {
    id: "ai",
    number: "01",
    badge: "FOUNDATION • 01",
    subBadge: "SOTA PIPELINES",
    category: "Machine Intelligence",
    tag: "Core Specialty",
    title: "Data Science & AI",
    description:
      "Statistical modeling, deep learning architectures, and production-grade machine learning pipelines optimized for high generalization and noise resistance.",
    tags: [
      "Deep Learning",
      "ML Pipelines",
      "Ensemble Models",
      "AdaBoost",
      "XGBoost",
      "LightGBM",
      "PyTorch",
      "Scikit-Learn",
    ],
    metricLabel: "Empirical Rigor",
    metricValue: "Cross-Validated Benchmarks",
    schematic: "ai",
  },
  {
    id: "backend",
    number: "02",
    badge: "FOUNDATION • 02",
    subBadge: "HIGH CONCURRENCY",
    category: "Distributed Back-End",
    tag: "Production Ready",
    title: "Back-End Systems",
    description:
      "Architecting resilient server-side infrastructure, relational data modeling, strictly typed endpoints, and containerized deployment workflows.",
    tags: [
      "Laravel (Eloquent ORM)",
      "Node.js",
      "Express.js",
      "MySQL",
      "Docker",
      "RESTful APIs",
      "Microservices",
    ],
    metricLabel: "System Topology",
    metricValue: "Microservices & REST",
    schematic: "backend",
  },
  {
    id: "frontend",
    number: "03",
    badge: "FOUNDATION • 03",
    subBadge: "PRECISION UI",
    category: "Design Systems & Syntax",
    tag: "Polyglot",
    title: "Front-End & Languages",
    description:
      "Developing responsive interface architectures with tactile physics, paired with multi-paradigm programming across core systems and scripting environments.",
    tags: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Component Systems",
      "Python",
      "PHP",
      "JavaScript",
      "Java",
      "C",
    ],
    metricLabel: "Interface Fidelity",
    metricValue: "Accessible & Modular",
    schematic: "frontend",
  },
];

// Duplicate items for seamless continuous loop
const marqueeSkills = [
  ...skillsData,
  ...skillsData,
  ...skillsData,
  ...skillsData,
];

export function SkillCarousel() {
  return (
    <section className="w-full relative overflow-hidden" id="toolkit-section">
      <div className="flex flex-col">

        {/* ── MOBILE: compact gateway cards (< md) ── */}
        <EngineeringGatewayCards />

        {/* ── DESKTOP: full marquee (≥ md) ── */}
        <div className="hidden md:flex flex-col">
          {/* Header with Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-2.5 sm:space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal-orange" />
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-primary dark:text-stone-300 font-semibold">
                  • ENGINEERING DISCIPLINE // TOOLKIT
                </span>
              </div>
              <h2 className="font-serif text-[28px] xs:text-[32px] sm:text-[38px] md:text-[46px] text-primary dark:text-stone-100 tracking-tight font-medium leading-tight">
                Crafted Engineering Foundations
              </h2>
              <p className="font-sans text-[14px] sm:text-[16px] text-on-surface-variant dark:text-stone-400 font-[450] leading-relaxed">
                Curated technical competencies across intelligent systems, robust server backends, and modern interfaces.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-[12px] text-on-surface-variant dark:text-stone-400 bg-surface dark:bg-stone-900/80 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-outline-variant/60 dark:border-stone-800 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-signal-orange animate-ping" />
                <span>Continuous Foundations Flow</span>
              </div>
            </div>
          </div>

          {/* Continuous Seamless Marquee Track */}
          <div className="relative w-full overflow-hidden mt-8 sm:mt-12 md:mt-16 py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="animate-marquee-fast flex gap-5 sm:gap-8 md:gap-10">
            {marqueeSkills.map((skill, index) => (
              <article
                key={`${skill.id}-${index}`}
                className="shrink-0 w-[280px] xs:w-[320px] sm:w-[380px] md:w-[420px] bg-surface/90 dark:bg-stone-900/60 rounded-container border border-outline-variant/60 dark:border-stone-800/90 p-5 sm:p-7 md:p-8 shadow-[0px_20px_42px_rgba(0,0,0,0.04)] dark:shadow-[0px_20px_42px_rgba(0,0,0,0.3)] flex flex-col justify-between kinetic-card select-none backdrop-blur-sm transition-all"
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Visual Schematic Header */}
                  <div className="w-full h-36 sm:h-44 rounded-[20px] sm:rounded-[24px] bg-[#141413] dark:bg-[#110F0E] p-4 sm:p-5 relative overflow-hidden flex flex-col justify-between group border border-outline-variant/20 dark:border-stone-800/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-signal-orange/15 via-transparent to-black/70 pointer-events-none" />

                    {/* Dynamic Graphic Schematic */}
                    {skill.schematic === "ai" && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-70">
                        <svg className="w-full h-full text-signal-orange" fill="none" viewBox="0 0 320 120">
                          <path
                            d="M0 70 C 60 20, 100 100, 160 50 C 220 10, 260 90, 320 40"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M0 80 C 80 120, 140 30, 200 80 C 260 120, 280 40, 320 70"
                            stroke="#A8A29E"
                            strokeDasharray="4 4"
                            strokeWidth="1.2"
                          />
                          <circle cx="160" cy="50" fill="#F37338" r="4.5" />
                          <circle cx="260" cy="90" fill="#F5F5F4" r="3.5" />
                        </svg>
                      </div>
                    )}

                    {skill.schematic === "backend" && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-80">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="px-2.5 py-1.5 rounded-lg bg-white/10 dark:bg-stone-800 border border-white/15 dark:border-stone-700 text-white dark:text-stone-300 font-mono text-[10px]">
                            DOCKER
                          </div>
                          <div className="w-5 h-[1px] bg-signal-orange" />
                          <div className="px-2.5 py-1.5 rounded-lg bg-signal-orange/20 border border-signal-orange text-signal-orange font-mono text-[10px]">
                            API GATEWAY
                          </div>
                          <div className="w-5 h-[1px] bg-signal-orange" />
                          <div className="px-2.5 py-1.5 rounded-lg bg-white/10 dark:bg-stone-800 border border-white/15 dark:border-stone-700 text-white dark:text-stone-300 font-mono text-[10px]">
                            MYSQL ORM
                          </div>
                        </div>
                      </div>
                    )}

                    {skill.schematic === "frontend" && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-80">
                        <div className="grid grid-cols-3 gap-2.5 w-full max-w-[240px]">
                          <div className="h-12 rounded-xl bg-white/10 dark:bg-stone-800 border border-white/15 dark:border-stone-700 flex flex-col justify-center items-center text-signal-orange font-mono text-[10px]">
                            REACT
                          </div>
                          <div className="h-12 rounded-xl bg-white/10 dark:bg-stone-800/80 border border-signal-orange/40 flex flex-col justify-center items-center text-white dark:text-stone-200 font-mono text-[10px]">
                            TAILWIND
                          </div>
                          <div className="h-12 rounded-xl bg-white/10 dark:bg-stone-800 border border-white/15 dark:border-stone-700 flex flex-col justify-center items-center text-signal-orange font-mono text-[10px]">
                            SYSTEMS
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Badge Pill Header */}
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-white/90 dark:text-stone-300 bg-white/10 dark:bg-stone-800/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 dark:border-stone-700/50">
                        {skill.badge}
                      </span>
                      <span className="font-mono text-[12px] text-white dark:text-signal-orange font-semibold bg-signal-orange dark:bg-stone-950/90 px-2.5 py-0.5 rounded-full dark:border dark:border-signal-orange/30">
                        {skill.subBadge}
                      </span>
                    </div>

                    <div className="relative z-10 font-mono text-[11px] text-white/70 dark:text-stone-400">
                      <span>Neural Archival • Tabular Modeling</span>
                    </div>
                  </div>

                  {/* Typographic narrative */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[12px] text-signal-orange font-semibold">
                        {skill.category}
                      </span>
                      <span className="font-mono text-[11px] text-on-surface-variant dark:text-stone-400">
                        {skill.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-[26px] text-primary dark:text-stone-100 font-semibold tracking-tight">
                      {skill.title}
                    </h3>

                    <p className="font-sans text-[14px] text-on-surface-variant dark:text-stone-300 leading-relaxed font-[450]">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Metric Badge & Clean Pills */}
                <div className="pt-6 border-t border-outline-variant/40 dark:border-stone-800 mt-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-full bg-surface-container dark:bg-stone-800/70 text-primary dark:text-stone-200 font-mono text-[11px] border border-outline-variant/30 dark:border-stone-700/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="font-mono text-[11px] text-on-surface-variant dark:text-stone-400">
                      {skill.metricLabel}
                    </span>
                    <span className="font-mono text-[12px] font-semibold text-primary dark:text-stone-200">
                      {skill.metricValue}
                    </span>
                  </div>
                </div>
              </article>
            ))}
            </div>
          </div>
        </div>{/* end desktop marquee wrapper */}

      </div>
    </section>
  );
}
