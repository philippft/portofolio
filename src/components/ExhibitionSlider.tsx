"use client";

import { Award, CheckCircle, Sparkles } from "lucide-react";
import { ExhibitionItem } from "@/types";

const exhibitionsData: ExhibitionItem[] = [
  {
    id: "sic-manager",
    tag: "DIVISION MANAGER",
    title: "Civic Tech & Gemastik Architecture",
    period: "2024 Tenure",
    organization: "Student Innovation Centre (SIC)",
    role: "Manager — Smart City Division",
    description:
      "Coordinating intensive mentoring & project validation for university Gemastik delegations. Reviewed technical systems, data modeling, and national benchmark alignments.",
    highlightIcon: "award",
    highlightText: "National Gemastik Delegations",
    statusBadge: "CONCLUDED",
    statusType: "concluded",
  },
  {
    id: "sic-officer",
    tag: "OFFICER IN CHARGE",
    title: "SIC Competitive Intelligence & Talent Pipeline",
    period: "Jan 2025 – Present",
    organization: "SIC Talent & Competition Division",
    role: "Officer — Talent & Competition Division",
    description:
      "Spearheading the systematic tracking and identification of high-potential student engineers and technical cohorts, curating specialized coaching programs for university-wide competitive representations.",
    highlightIcon: "check",
    highlightText: "Accredited Department Body",
    statusBadge: "ACTIVE",
    statusType: "active",
  },
  {
    id: "pkm-kc",
    tag: "FIRST PLACE WINNER • 2025",
    title: "Best Proposal Award (PKM-KC)",
    period: "PIONEER PKM 2025",
    organization: "Best Proposal Award (PKM-KC 2025)",
    role: "PIONEER PKM-KC",
    description:
      "Recognized for designing a transformative generative & predictive framework for cultural script recognition and digital archival preservation under rigorous peer evaluation.",
    highlightIcon: "sparkles",
    highlightText: "Faculty of Math & Natural Sciences",
    statusBadge: "1st PLACE",
    statusType: "award",
    tags: ["Applied AI", "Societal Impact"],
  },
];

// Duplicate items for seamless continuous loop
const marqueeItems = [
  ...exhibitionsData,
  ...exhibitionsData,
  ...exhibitionsData,
  ...exhibitionsData,
];

export function ExhibitionSlider() {
  return (
    <section className="w-full relative" id="leadership-section">
      <div className="flex flex-col">
        {/* Header with Exhibition Metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal-orange" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-primary dark:text-stone-300 font-semibold">
                • EXHIBITION GALLERY // IMPACT
              </span>
            </div>
            <h2 className="font-serif text-[36px] md:text-[46px] text-primary dark:text-stone-100 tracking-tight font-medium leading-tight">
              Leadership &amp; Institutional Impact
            </h2>
            <p className="font-sans text-[16px] text-on-surface-variant dark:text-stone-400 font-[450] leading-relaxed">
              Fostering technological competence across student cohorts and earning top national research accolades.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="inline-flex items-center gap-2 font-mono text-[12px] text-on-surface-variant dark:text-stone-400 bg-surface dark:bg-stone-900/80 px-4 py-2 rounded-full border border-outline-variant/60 dark:border-stone-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-signal-orange animate-ping" />
              <span>Continuous Exhibition Flow</span>
            </div>
          </div>
        </div>

        {/* Seamless Continuous Marquee Track */}
        <div className="relative w-full overflow-hidden mt-12 sm:mt-16 py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex gap-8 sm:gap-10">
            {marqueeItems.map((item, index) => (
              <article
                key={`${item.id}-${index}`}
                className="shrink-0 w-[340px] sm:w-[460px] md:w-[480px] bg-surface/90 dark:bg-stone-900/60 rounded-container border border-outline-variant/60 dark:border-stone-800/90 p-7 sm:p-9 shadow-[0px_24px_48px_rgba(0,0,0,0.04)] dark:shadow-[0px_24px_48px_rgba(0,0,0,0.3)] flex flex-col justify-between kinetic-card select-none backdrop-blur-sm transition-all"
              >
                <div className="space-y-6">
                  {/* Visual Preview Frame */}
                  <div className="w-full aspect-[16/10] rounded-[24px] bg-[#141211] relative overflow-hidden flex items-end p-6 group border border-outline-variant/30 dark:border-stone-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                    {item.statusType === "award" ? (
                      <div className="absolute inset-0 bg-gradient-to-tr from-signal-orange/25 via-transparent to-amber-200/10" />
                    ) : (
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
                    )}

                    <div className="relative z-20 space-y-1">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[11px] backdrop-blur-md shadow-sm ${
                          item.statusType === "award"
                            ? "bg-signal-orange text-white font-bold"
                            : "bg-stone-800/80 border border-stone-700/50 text-stone-200"
                        }`}
                      >
                        {item.statusType === "award" ? (
                          <Sparkles className="w-3.5 h-3.5" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-signal-orange" />
                        )}
                        <span>{item.tag}</span>
                      </div>

                      <p className="text-stone-100 font-serif text-[19px] font-medium leading-snug">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  {/* Narrative Content */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[12px] text-signal-orange font-semibold">
                        {item.period}
                      </span>
                      <span className="font-mono text-[11px] text-on-surface-variant dark:text-stone-400">
                        {item.highlightText}
                      </span>
                    </div>

                    <h3 className="font-serif text-[26px] text-primary dark:text-stone-100 font-semibold tracking-tight">
                      {item.organization}
                    </h3>

                    <h4 className="font-sans text-[15px] font-medium text-primary dark:text-stone-300">
                      {item.role}
                    </h4>

                    <p className="font-sans text-[15px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Footer Metadata */}
                <div className="pt-6 border-t border-outline-variant/40 dark:border-stone-800 mt-6 flex items-center justify-between">
                  {item.tags ? (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 font-mono text-[11px] text-on-surface-variant dark:text-stone-300 border border-outline-variant/30 dark:border-stone-700/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 font-mono text-[12px] text-on-surface-variant dark:text-stone-400">
                      {item.highlightIcon === "award" ? (
                        <Award className="w-4 h-4 text-signal-orange" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-signal-orange" />
                      )}
                      <span>{item.highlightText}</span>
                    </div>
                  )}

                  <span
                    className={`font-mono text-[11px] font-semibold px-3 py-1 rounded-full ${
                      item.statusType === "award"
                        ? "text-signal-orange text-[12px] font-bold"
                        : item.statusType === "active"
                        ? "text-signal-orange bg-surface-container dark:bg-stone-800/80 border border-signal-orange/30"
                        : "text-on-surface-variant dark:text-stone-400 bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50"
                    }`}
                  >
                    {item.statusBadge}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
