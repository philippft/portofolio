import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Brain,
  Server,
  Layers,
  Cpu,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface FeaturedProject {
  name: string;
  detail: string;
}

interface SkillCategory {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: typeof Brain;
  featuredProjects: FeaturedProject[];
  tags: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "ml-ai",
    title: "AI & Data Engineering",
    eyebrow: "PREDICTIVE MODELING & DATA PIPELINES",
    description: "Predictive modeling & robust data pipelines.",
    icon: Brain,
    featuredProjects: [
      {
        name: "SATRIA DATA Challenge",
        detail:
          "Built an image processing pipeline achieving a 0.972 F1-score with EfficientNetB3.",
      },
      {
        name: "PsychoLens AI",
        detail:
          "Engineered an NLP emotion classification system using IndoBERT Transformer.",
      },
      {
        name: "Gamelan Audio AI",
        detail:
          "Designed an audio classification system for Balinese instruments with 96% accuracy.",
      },
    ],
    tags: ["Text Classification", "Sound Classification", "Predictive Analysis"],
  },
  {
    id: "backend-systems",
    title: "Back-End Architecture",
    eyebrow: "SCALABLE SERVER-SIDE LOGIC & DATABASES",
    description: "Scalable server-side logic & secure databases.",
    icon: Server,
    featuredProjects: [
      {
        name: "Tempe Iris System",
        detail:
          "Architected core loan logic, automated Mailtrap alerts, and dynamic Dompdf document generation.",
      },
      {
        name: "SIC Website API",
        detail:
          "Designed MySQL relational schemas and built a complete RESTful API using Express.js.",
      },
    ],
    tags: ["RESTful APIs", "Database Design", "System Authentication"],
  },
  {
    id: "fullstack-web",
    title: "Full-Stack & Web Interfaces",
    eyebrow: "END-TO-END WEB PLATFORMS & EXPERIENCES",
    description: "End-to-end web platforms and data-driven experiences.",
    icon: Layers,
    featuredProjects: [
      {
        name: "Orinimo Store",
        detail:
          "Developed an MVC platform with WhatsApp OTP integration, secure auth, and automated reporting.",
      },
      {
        name: "CBR Expert System",
        detail:
          "Designed a web-based AI expert system applying Case-Based Reasoning.",
      },
    ],
    tags: ["Responsive UI", "MVC Architecture", "Interactive Design"],
  },
];

export default function ToolkitPage() {
  return (
    <div className="max-w-max-width mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col space-y-16 sm:space-y-20 md:space-y-28 overflow-x-hidden">
      {/* HERO HEADER */}
      <ScrollReveal yOffset={30} duration={0.9}>
        <section className="relative pt-2 sm:pt-6 md:pt-10 overflow-hidden">
          <div className="hidden sm:block absolute -right-8 -top-12 select-none pointer-events-none opacity-[0.03] text-[160px] md:text-[220px] lg:text-[260px] font-serif font-black leading-none text-primary">
            SKILLS
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-surface/90 dark:bg-stone-900/90 border border-outline-variant/60 dark:border-stone-800 text-primary dark:text-stone-200 font-mono text-[10px] sm:text-[11px]">
              <span className="w-2 h-2 rounded-full bg-signal-orange animate-ping" />
              <span className="font-mono text-signal-orange uppercase tracking-widest font-semibold">
                • TECHNICAL DISCIPLINES &amp; COMPETENCIES // /TOOLKIT
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 dark:bg-stone-900/80 border border-outline-variant/60 dark:border-stone-800/90 text-on-surface-variant dark:text-stone-400 font-mono text-[11px] sm:text-[12px]">
              <Cpu className="w-4 h-4 text-signal-orange" />
              <span>3 Core Domains</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end">
            <div className="lg:col-span-8 space-y-2.5 sm:space-y-3">
              <h1 className="font-serif text-[36px] xs:text-[42px] sm:text-[52px] md:text-[60px] lg:text-[68px] text-primary dark:text-stone-50 tracking-tight leading-[1.06] font-medium">
                Technical Foundations{" "}
                <span className="italic font-normal text-on-surface-variant dark:text-stone-400">
                  &amp; Stack
                </span>
              </h1>
              <p className="font-sans text-[15px] sm:text-[17px] text-on-surface-variant dark:text-stone-400 max-w-2xl font-[450] leading-relaxed">
                Curated competencies honed through rigorous academic research, national algorithm competitions, and full-stack software deployments.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="p-4 rounded-2xl bg-surface/80 dark:bg-stone-900/80 border border-outline-variant/60 dark:border-stone-800/90 space-y-1 w-full lg:w-auto">
                <div className="flex items-center gap-2 font-mono text-[11px] text-signal-orange uppercase font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>EVALUATED PROFICIENCY</span>
                </div>
                <p className="font-sans text-[13px] text-on-surface-variant dark:text-stone-400">
                  Validated in production &amp; national peer evaluations
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 3-DOMAIN STACK */}
      <section className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 gap-5 sm:gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal key={cat.id} delay={idx * 0.08} yOffset={30}>
                <article className="bg-surface/90 dark:bg-stone-900/60 border border-outline-variant/60 dark:border-stone-800/90 rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 shadow-[0px_16px_36px_rgba(0,0,0,0.04)] dark:shadow-[0px_16px_36px_rgba(0,0,0,0.28)] flex flex-col gap-4 sm:gap-5 kinetic-card group backdrop-blur-sm transition-all">

                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-0.5 min-w-0">
                      <span className="font-mono text-[9.5px] sm:text-[10px] text-signal-orange font-semibold tracking-widest uppercase block">
                        {cat.eyebrow}
                      </span>
                      <h2 className="font-serif text-[20px] xs:text-[22px] sm:text-[26px] text-primary dark:text-stone-100 font-semibold tracking-tight leading-snug">
                        {cat.title}
                      </h2>
                    </div>
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-surface-container dark:bg-stone-800 border border-outline-variant/40 dark:border-stone-700/60 flex items-center justify-center text-signal-orange shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-[13px] sm:text-[14px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450] -mt-1">
                    {cat.description}
                  </p>

                  {/* Featured Projects */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9.5px] sm:text-[10px] text-on-surface-variant dark:text-stone-500 uppercase tracking-wider font-medium block">
                      Featured Projects
                    </span>
                    <ul className="space-y-1.5">
                      {cat.featuredProjects.map((project) => (
                        <li
                          key={project.name}
                          className="flex items-start gap-2 text-[12px] sm:text-[13px] font-sans leading-snug"
                        >
                          <span className="mt-[5px] w-1 h-1 rounded-full bg-signal-orange shrink-0" />
                          <span>
                            <span className="font-semibold text-primary dark:text-stone-200">
                              {project.name}:
                            </span>{" "}
                            <span className="text-on-surface-variant dark:text-stone-400 font-[440]">
                              {project.detail}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Domain Tag Chips */}
                  <div className="pt-3 border-t border-outline-variant/30 dark:border-stone-800/70 flex flex-wrap gap-1.5">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-surface-container dark:bg-stone-800/70 border border-outline-variant/30 dark:border-stone-700/40 text-primary dark:text-stone-300 font-mono text-[10px] sm:text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA INVITATION */}
      <ScrollReveal yOffset={40} duration={0.8}>
        <section className="w-full">
          <div className="bg-surface/90 dark:bg-stone-900/60 rounded-container p-6 sm:p-10 lg:p-14 border border-outline-variant/60 dark:border-stone-800/90 shadow-[0px_24px_54px_rgba(0,0,0,0.06)] dark:shadow-[0px_24px_54px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 backdrop-blur-sm transition-all">
            <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-signal-orange/10 blur-3xl pointer-events-none" />

            <div className="space-y-3 max-w-xl z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-signal-orange font-mono text-[11px] uppercase tracking-widest font-semibold justify-center md:justify-start">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EMPIRICAL CODE ARCHIVE</span>
              </div>
              <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] text-primary dark:text-stone-100 tracking-tight font-medium leading-tight">
                See these technical competencies in production action.
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450]">
                Explore canonical projects featuring machine learning pipelines, time-series forecasters, and full-stack web applications.
              </p>
            </div>

            <div className="shrink-0 z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Link
                href="/projects"
                className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-cta bg-primary text-canvas font-sans font-semibold text-[14px] sm:text-[15px] shadow-[0px_16px_36px_rgba(0,0,0,0.18)] dark:shadow-[0px_16px_36px_rgba(0,0,0,0.3)] hover:bg-signal-orange hover:text-white transition-all duration-300 group text-center"
              >
                <span>Explore Projects Archive →</span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
