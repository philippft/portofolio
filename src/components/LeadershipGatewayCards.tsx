"use client";

import Link from "next/link";
import { ArrowRight, Award, CheckCircle, Sparkles } from "lucide-react";

interface LeadershipGatewayCard {
  id: string;
  tag: string;
  title: string;
  role: string;
  period: string;
  statusType: "concluded" | "active" | "award";
  statusBadge: string;
  href: string;
}

const leadershipCards: LeadershipGatewayCard[] = [
  {
    id: "sic-manager",
    tag: "DIVISION MANAGER",
    title: "Student Innovation Centre",
    role: "Manager — Smart City Division",
    period: "2024 Tenure",
    statusType: "concluded",
    statusBadge: "CONCLUDED",
    href: "/toolkit",
  },
  {
    id: "sic-officer",
    tag: "OFFICER IN CHARGE",
    title: "SIC Talent & Competition",
    role: "Officer — Talent & Competition",
    period: "Jan 2025 – Present",
    statusType: "active",
    statusBadge: "ACTIVE",
    href: "/toolkit",
  },
  {
    id: "pkm-kc",
    tag: "1ST PLACE • 2025",
    title: "PKM-KC Best Proposal",
    role: "PIONEER PKM-KC",
    period: "PIONEER PKM 2025",
    statusType: "award",
    statusBadge: "1st PLACE",
    href: "/toolkit",
  },
];

function StatusIcon({ type }: { type: LeadershipGatewayCard["statusType"] }) {
  if (type === "award")
    return <Sparkles className="w-3 h-3" aria-hidden="true" />;
  if (type === "active")
    return (
      <CheckCircle className="w-3 h-3 text-signal-orange" aria-hidden="true" />
    );
  return <Award className="w-3 h-3" aria-hidden="true" />;
}

export function LeadershipGatewayCards() {
  return (
    /* Mobile-only: shown below md, hidden on desktop (desktop uses the marquee) */
    <div className="md:hidden w-full">
      {/* Section label */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-signal-orange" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary dark:text-stone-300 font-semibold">
          • EXHIBITION GALLERY // IMPACT
        </span>
      </div>

      {/* Compact vertical stack — avoids overly-tall cards */}
      <div
        className="flex flex-col gap-3"
        role="list"
        aria-label="Leadership and Institutional Impact"
      >
        {leadershipCards.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            role="listitem"
            aria-label={`${card.title} — View details`}
            className="gateway-card group flex items-center gap-3.5 bg-surface/90 dark:bg-stone-900/70 rounded-card border border-outline-variant/60 dark:border-stone-800/90 px-4 py-3.5 shadow-[0px_8px_20px_rgba(0,0,0,0.04)] dark:shadow-[0px_8px_20px_rgba(0,0,0,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-orange"
          >
            {/* Left accent bar */}
            <div
              className={`shrink-0 w-1 self-stretch rounded-full ${
                card.statusType === "award"
                  ? "bg-signal-orange"
                  : card.statusType === "active"
                  ? "bg-signal-orange/60"
                  : "bg-outline-variant dark:bg-stone-700"
              }`}
            />

            {/* Content */}
            <div className="flex flex-col flex-1 min-w-0 gap-1">
              {/* Tag + status badge row */}
              <div className="flex items-center justify-between gap-2">
                <div
                  className={`inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    card.statusType === "award"
                      ? "bg-signal-orange text-white font-bold"
                      : "bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 text-on-surface-variant dark:text-stone-400"
                  }`}
                >
                  <StatusIcon type={card.statusType} />
                  {card.tag}
                </div>
                <span
                  className={`font-mono text-[9.5px] font-semibold shrink-0 ${
                    card.statusType === "active"
                      ? "text-signal-orange"
                      : "text-on-surface-variant dark:text-stone-500"
                  }`}
                >
                  {card.statusBadge}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-[16px] text-primary dark:text-stone-100 font-semibold tracking-tight leading-snug truncate">
                {card.title}
              </h3>

              {/* Role & period */}
              <div className="flex items-center justify-between gap-2">
                <span className="font-sans text-[11.5px] text-on-surface-variant dark:text-stone-400 truncate">
                  {card.role}
                </span>
                <span className="font-mono text-[10px] text-signal-orange font-medium shrink-0">
                  {card.period}
                </span>
              </div>
            </div>

            {/* Arrow cue */}
            <div className="shrink-0 flex items-center gap-0.5 text-on-surface-variant dark:text-stone-600 group-hover:text-signal-orange transition-colors duration-200">
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
