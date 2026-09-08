import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Brain,
  Server,
  Layers,
  Code2,
  Cpu,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  eyebrow: string;
  description: string;
  icon: typeof Brain;
  tools: { name: string; tag: string; level: string }[];
  telemetry: { label: string; value: string; sub: string };
  highlights: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "ml-ai",
    title: "Machine Learning & AI Engineering",
    badge: "CORE DISCIPLINE",
    eyebrow: "EMPIRICAL MODELING & SOTA ARCHITECTURES",
    description:
      "End-to-end model development from empirical formulation, custom loss metrics, hyperparameter tuning to quantized TensorRT & ONNX runtime acceleration.",
    icon: Brain,
    tools: [
      { name: "PyTorch", tag: "Deep Learning", level: "Advanced" },
      { name: "Scikit-Learn", tag: "Statistical ML", level: "Advanced" },
      { name: "LightGBM", tag: "Gradient Boosting", level: "Expert" },
      { name: "XGBoost", tag: "Ensemble Models", level: "Advanced" },
      { name: "AdaBoost", tag: "Adaptive Boosting", level: "Advanced" },
      { name: "Hugging Face", tag: "NLP Transformers", level: "Proficient" },
      { name: "OpenCV", tag: "Computer Vision", level: "Proficient" },
      { name: "Librosa", tag: "Audio DSP & MFCC", level: "Advanced" },
      { name: "TensorRT", tag: "Inference Latency", level: "Proficient" },
      { name: "Pandas & NumPy", tag: "Data Engineering", level: "Expert" },
    ],
    telemetry: {
      label: "PEAK EMPIRICAL VALIDATION",
      value: "0.972 F1",
      sub: "SATRIA DATA national ML benchmark",
    },
    highlights: [
      "Custom Loss & Evaluation Metrics",
      "Perceptual Hashing & Edge Deduplication",
      "Hybrid SMOTE-ENN Class Resampling",
      "Time-Series Horizon Forecasting (SARIMA)",
    ],
  },
  {
    id: "backend-systems",
    title: "Distributed Back-End & Systems",
    badge: "HIGH AVAILABILITY",
    eyebrow: "SERVER ARCHITECTURE & DATA MODELING",
    description:
      "Architecting resilient multi-tier server backends, strictly normalized relational schemas, asynchronous queue processing, and containerized deployment workflows.",
    icon: Server,
    tools: [
      { name: "Laravel (Eloquent ORM)", tag: "PHP Framework", level: "Expert" },
      { name: "Node.js", tag: "Async Runtime", level: "Advanced" },
      { name: "Express.js", tag: "REST Endpoints", level: "Advanced" },
      { name: "MySQL", tag: "Relational DB", level: "Advanced" },
      { name: "Docker", tag: "Containerization", level: "Proficient" },
      { name: "RESTful APIs", tag: "Contract Design", level: "Expert" },
      { name: "Redis", tag: "In-Memory Cache", level: "Proficient" },
      { name: "Microservices", tag: "System Topology", level: "Proficient" },
    ],
    telemetry: {
      label: "CONCURRENCY RUNTIME",
      value: "< 45ms",
      sub: "Optimized 3NF queries & database indexing",
    },
    highlights: [
      "Transactional Order State Machines",
      "Event-Driven WhatsApp & Email Webhooks",
      "Multi-Tenant Hierarchical RBAC",
      "Dynamic PDF & Document Stream Engines",
    ],
  },
  {
    id: "frontend-ui",
    title: "Modern Front-End & Interface Craft",
    badge: "PRECISION INTERACTION",
    eyebrow: "COMPONENT SYSTEMS & TACTILE PHYSICS",
    description:
      "Developing responsive interface architectures with tactile spring physics, accessible design tokens, and fluid layout responsiveness across modern viewports.",
    icon: Layers,
    tools: [
      { name: "React 18", tag: "UI Framework", level: "Advanced" },
      { name: "Next.js (App Router)", tag: "Full-Stack React", level: "Advanced" },
      { name: "Tailwind CSS", tag: "Design Tokens", level: "Expert" },
      { name: "TypeScript", tag: "Static Typing", level: "Advanced" },
      { name: "Kinetic Motion", tag: "Physics & Parallax", level: "Advanced" },
      { name: "CSS Variables", tag: "Theming Systems", level: "Expert" },
    ],
    telemetry: {
      label: "LIGHTHOUSE SCORE",
      value: "100%",
      sub: "Zero layout shift & optimized Core Web Vitals",
    },
    highlights: [
      "SSR-Safe Dark & Light Mode Orchestration",
      "Kinetic Magnetic Physics & Parallax Orbs",
      "Procedural Film Grain & SVG Shader Emulation",
      "Responsive Accessible Bento Grid Systems",
    ],
  },
  {
    id: "languages-tooling",
    title: "Core Languages & Developer Tooling",
    badge: "POLYGLOT DIALECTS",
    eyebrow: "MULTI-PARADIGM SYNTAX & ENVIRONMENTS",
    description:
      "Multi-paradigm programming across object-oriented systems, high-performance imperative code, shell scripting, and rigorous version control.",
    icon: Code2,
    tools: [
      { name: "Python 3", tag: "Scientific & Systems", level: "Expert" },
      { name: "PHP 8", tag: "Server Architecture", level: "Expert" },
      { name: "JavaScript / TypeScript", tag: "Universal Full-Stack", level: "Advanced" },
      { name: "Java", tag: "OOP & Enterprise", level: "Proficient" },
      { name: "C", tag: "Low-Level Computing", level: "Proficient" },
      { name: "Git & GitHub", tag: "Version Control", level: "Advanced" },
      { name: "Linux / Bash", tag: "POSIX CLI", level: "Advanced" },
      { name: "Postman", tag: "API Verification", level: "Advanced" },
    ],
    telemetry: {
      label: "PUBLIC COMMITS VOLUME",
      value: "1,248+",
      sub: "Verified cross-repository git telemetry",
    },
    highlights: [
      "Rigorous Version Control & Git Flow",
      "POSIX Command Line Automation",
      "Strict Static Typing & Linting Enforcement",
      "Academic Research Code Reproducibility",
    ],
  },
];

export default function ToolkitPage() {
  return (
    <div className="max-w-max-width mx-auto px-4 sm:px-6 md:px-12 flex flex-col space-y-20 md:space-y-28">
      {/* HERO HEADER */}
      <ScrollReveal yOffset={30} duration={0.9}>
        <section className="relative pt-4 md:pt-10">
          <div className="absolute -right-8 -top-12 select-none pointer-events-none opacity-[0.03] text-[180px] md:text-[260px] font-serif font-black leading-none text-primary">
            SKILLS
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 dark:bg-stone-900/90 border border-outline-variant/60 dark:border-stone-800 text-primary dark:text-stone-200 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-signal-orange animate-ping" />
              <span className="font-mono text-signal-orange uppercase tracking-widest font-semibold">
                • TECHNICAL DISCIPLINES &amp; COMPETENCIES // /TOOLKIT
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface/80 dark:bg-stone-900/80 border border-outline-variant/60 dark:border-stone-800/90 text-on-surface-variant dark:text-stone-400 font-mono text-[12px]">
              <Cpu className="w-4 h-4 text-signal-orange" />
              <span>4 Core Domains • 30+ Technologies</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <h1 className="font-serif text-[42px] sm:text-[54px] lg:text-[68px] text-primary dark:text-stone-50 tracking-tight leading-[1.05] font-medium">
                Technical Foundations{" "}
                <span className="italic font-normal text-on-surface-variant dark:text-stone-400">
                  &amp; Stack
                </span>
              </h1>
              <p className="font-sans text-[16px] sm:text-[17px] text-on-surface-variant dark:text-stone-400 max-w-2xl font-[450] leading-relaxed">
                Curated competencies honed through rigorous academic research, national algorithm competitions, and full-stack software deployments.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="p-4 rounded-2xl bg-surface/80 dark:bg-stone-900/80 border border-outline-variant/60 dark:border-stone-800/90 space-y-1 w-full sm:w-auto">
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

      {/* 4-CATEGORY BENTO GRID WITH STAGGER */}
      <section className="space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal key={cat.id} delay={idx * 0.1} yOffset={35}>
                <article className="bg-surface/90 dark:bg-stone-900/60 border border-outline-variant/60 dark:border-stone-800/90 rounded-[32px] p-7 sm:p-9 shadow-[0px_24px_48px_rgba(0,0,0,0.04)] dark:shadow-[0px_24px_48px_rgba(0,0,0,0.3)] flex flex-col justify-between kinetic-card group backdrop-blur-sm transition-all h-full">
                  <div className="space-y-6">
                    {/* Category Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-2 font-mono text-[11px] text-signal-orange font-semibold tracking-wider uppercase">
                          <span>{cat.eyebrow}</span>
                        </div>
                        <h2 className="font-serif text-[26px] sm:text-[30px] text-primary dark:text-stone-100 font-semibold tracking-tight">
                          {cat.title}
                        </h2>
                      </div>

                      <div className="w-12 h-12 rounded-2xl bg-surface-container dark:bg-stone-800 border border-outline-variant/40 dark:border-stone-700/60 flex items-center justify-center text-signal-orange shrink-0 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <p className="font-sans text-[15px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450]">
                      {cat.description}
                    </p>

                    {/* Telemetry Metric Callout Box */}
                    <div className="p-4.5 rounded-2xl bg-canvas/80 dark:bg-[#121110] border border-outline-variant/60 dark:border-stone-800/80 flex items-center justify-between">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant dark:text-stone-400 block mb-0.5">
                          {cat.telemetry.label}
                        </span>
                        <span className="font-serif text-[24px] font-bold text-signal-orange">
                          {cat.telemetry.value}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-on-surface-variant dark:text-stone-400 max-w-[180px] text-right">
                        {cat.telemetry.sub}
                      </span>
                    </div>

                    {/* Key Highlights Checklist */}
                    <div className="space-y-2 pt-1">
                      <span className="font-mono text-[11px] text-on-surface-variant dark:text-stone-400 uppercase tracking-wider block font-medium">
                        Key Methodologies &amp; Capabilities
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.highlights.map((h) => (
                          <div
                            key={h}
                            className="flex items-center gap-2 text-[13px] text-primary dark:text-stone-300 font-sans"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-signal-orange shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tool Pills with Badges */}
                  <div className="pt-6 border-t border-outline-variant/40 dark:border-stone-800 mt-6 space-y-3">
                    <span className="font-mono text-[11px] text-on-surface-variant dark:text-stone-400 uppercase tracking-wider block font-medium">
                      Technical Stack &amp; Libraries
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cat.tools.map((t) => (
                        <div
                          key={t.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container dark:bg-stone-800/70 border border-outline-variant/40 dark:border-stone-700/50 text-primary dark:text-stone-200 font-mono text-[11px]"
                        >
                          <span className="font-semibold">{t.name}</span>
                          <span className="text-on-surface-variant/60 dark:text-stone-500">•</span>
                          <span className="text-on-surface-variant dark:text-stone-400 text-[10px]">
                            {t.tag}
                          </span>
                        </div>
                      ))}
                    </div>
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
          <div className="bg-surface/90 dark:bg-stone-900/60 rounded-container p-8 sm:p-14 border border-outline-variant/60 dark:border-stone-800/90 shadow-[0px_24px_54px_rgba(0,0,0,0.06)] dark:shadow-[0px_24px_54px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm transition-all">
            <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-signal-orange/10 blur-3xl pointer-events-none" />

            <div className="space-y-3 max-w-xl z-10">
              <div className="inline-flex items-center gap-2 text-signal-orange font-mono text-[11px] uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EMPIRICAL CODE ARCHIVE</span>
              </div>
              <h2 className="font-serif text-[32px] sm:text-[40px] text-primary dark:text-stone-100 tracking-tight font-medium leading-tight">
                See these technical competencies in production action.
              </h2>
              <p className="font-sans text-[15px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450]">
                Explore canonical projects featuring machine learning pipelines, time-series forecasters, and full-stack web applications.
              </p>
            </div>

            <div className="shrink-0 z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Link
                href="/projects"
                className="magnetic-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-cta bg-primary text-canvas font-sans font-semibold text-[15px] shadow-[0px_16px_36px_rgba(0,0,0,0.18)] dark:shadow-[0px_16px_36px_rgba(0,0,0,0.3)] hover:bg-signal-orange hover:text-white transition-all duration-300 group"
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
