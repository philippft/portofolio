"use client";

import { useEffect, useState } from "react";
import { GitHubTelemetry } from "@/types";
import { Terminal, ExternalLink, Activity } from "lucide-react";

interface GithubActivityProps {
  initialData?: GitHubTelemetry;
}

export function GithubActivity({ initialData }: GithubActivityProps) {
  const [telemetry, setTelemetry] = useState<GitHubTelemetry | null>(
    initialData || null
  );
  const [loading, setLoading] = useState(!initialData);
  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
  } | null>(null);

  useEffect(() => {
    if (!initialData) {
      fetch("/api/github")
        .then((res) => res.json())
        .then((data) => {
          setTelemetry(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error loading GitHub telemetry:", err);
          setLoading(false);
        });
    }
  }, [initialData]);

  // Format contributions into 52 columns x 7 rows
  const days = telemetry?.contributions || [];
  const columns: typeof days[] = [];

  // Group into columns of 7 days
  for (let i = 0; i < days.length; i += 7) {
    columns.push(days.slice(i, i + 7));
  }

  // Ensure we have 52 columns
  const displayColumns = columns.slice(-52);

  return (
    <section className="w-full reveal-element is-visible" id="activity-section">
      <div className="bg-surface/70 dark:bg-stone-900/60 rounded-container p-6 sm:p-10 border border-outline-variant/60 dark:border-stone-800/90 shadow-[0px_24px_54px_rgba(0,0,0,0.06)] dark:shadow-[0px_24px_54px_rgba(0,0,0,0.35)] relative overflow-hidden backdrop-blur-sm transition-all">
        {/* Background subtle glow */}
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-signal-orange/[0.04] blur-3xl pointer-events-none" />

        <div className="space-y-8 relative z-10">
          {/* Header & Meta Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal-orange animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary dark:text-stone-300 font-semibold">
                  • ENGINEERING ACTIVITY // PROOF OF WORK
                </span>
              </div>
              <h2 className="font-serif text-[32px] sm:text-[40px] text-primary dark:text-stone-100 tracking-tight font-medium leading-tight">
                Consistently building, one commit at a time.
              </h2>
              <p className="font-sans text-[15px] text-on-surface-variant dark:text-stone-400 font-[450] leading-relaxed">
                Live git telemetry reflecting continuous development across research repositories, distributed backends, and open-source models.
              </p>
            </div>

            {/* Action Pill */}
            <div className="shrink-0">
              <a
                href="https://github.com/philippft"
                target="_blank"
                rel="noreferrer"
                className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container dark:bg-stone-800/90 hover:bg-primary hover:text-canvas text-primary dark:text-stone-200 border border-outline-variant/60 dark:border-stone-700/60 font-mono text-[12px] uppercase tracking-wider transition-all duration-300 shadow-sm"
              >
                <Terminal className="w-4 h-4 text-signal-orange" />
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Heatmap Visual Container */}
          <div className="bg-canvas/90 dark:bg-stone-950/80 rounded-3xl p-5 sm:p-6 border border-outline-variant/60 dark:border-stone-800/80 space-y-4">
            {/* Month Legends */}
            <div className="flex items-center justify-between text-on-surface-variant dark:text-stone-400 font-mono text-[11px] px-1 overflow-hidden select-none">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>

            {/* Grid Matrix: 52 columns x 7 rows */}
            <div className="overflow-x-auto custom-scroll pb-2">
              <div className="inline-flex gap-[3.5px] min-w-full items-center">
                {/* Day labels sidebar */}
                <div className="flex flex-col justify-between py-[2px] pr-2 text-on-surface-variant/70 dark:text-stone-500 font-mono text-[9px] select-none shrink-0 h-[100px]">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* 52 Weekly Columns */}
                <div className="flex gap-[3.5px] items-center shrink-0">
                  {displayColumns.map((col, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-[3.5px]">
                      {col.map((day, dayIdx) => {
                        // Dynamic class based on level & theme
                        let bgClass = "bg-[#ECE7E3] dark:bg-[#1c1917]";
                        if (day.level === 1) bgClass = "bg-[#D6D1CB] dark:bg-[#292524]";
                        if (day.level === 2) bgClass = "bg-[#9E9D99] dark:bg-[#57534e]";
                        if (day.level === 3) bgClass = "bg-[#585754] dark:bg-[#a8a29e]";
                        if (day.level >= 4) bgClass = "bg-signal-orange dark:bg-signal-orange";

                        return (
                          <div
                            key={day.date || dayIdx}
                            onMouseEnter={() => setHoveredDay(day)}
                            onMouseLeave={() => setHoveredDay(null)}
                            title={`${day.date}: ${day.count} contributions`}
                            className={`w-[11px] h-[11px] rounded-[2px] ${bgClass} hover:ring-1 hover:ring-signal-orange transition-all duration-150 cursor-pointer`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover Tooltip display & Legend */}
            <div className="flex flex-col sm:flex-row items-center justify-between text-on-surface-variant dark:text-stone-400 font-mono text-[11px] pt-1 gap-2">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-signal-orange" />
                <span>
                  {hoveredDay
                    ? `${hoveredDay.count} contribution${hoveredDay.count === 1 ? "" : "s"} on ${hoveredDay.date}`
                    : "Continuous Development Cadence"}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-on-surface-variant/70 dark:text-stone-500">Less</span>
                <div className="w-[10px] h-[10px] rounded-[2px] bg-[#ECE7E3] dark:bg-[#1c1917]" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-[#D6D1CB] dark:bg-[#292524]" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-[#9E9D99] dark:bg-[#57534e]" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-[#585754] dark:bg-[#a8a29e]" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-signal-orange" />
                <span className="text-on-surface-variant dark:text-stone-400">More</span>
              </div>
            </div>
          </div>

          {/* Telemetry Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-outline-variant/50 dark:border-stone-800">
            <div className="p-4.5 rounded-2xl bg-surface-container/60 dark:bg-stone-950/60 border border-outline-variant/60 dark:border-stone-800/80 space-y-1">
              <div className="font-mono text-[11px] text-on-surface-variant dark:text-stone-400 uppercase tracking-wider">
                ANNUAL VOLUME
              </div>
              <div className="font-serif text-[28px] font-semibold text-primary dark:text-stone-100">
                {telemetry ? `${telemetry.totalCommits}+` : "1,248+"}
              </div>
              <p className="font-sans text-[13px] text-on-surface-variant dark:text-stone-400">
                Contributions across active branches
              </p>
            </div>

            <div className="p-4.5 rounded-2xl bg-surface-container/60 dark:bg-stone-950/60 border border-outline-variant/60 dark:border-stone-800/80 space-y-1">
              <div className="font-mono text-[11px] text-on-surface-variant dark:text-stone-400 uppercase tracking-wider">
                CONSISTENCY
              </div>
              <div className="font-serif text-[28px] font-semibold text-signal-orange">
                {telemetry ? `${telemetry.activeWeeksStreak} Weeks` : "38 Weeks"}
              </div>
              <p className="font-sans text-[13px] text-on-surface-variant dark:text-stone-400">
                Consecutive weekly deployment streak
              </p>
            </div>

            <div className="p-4.5 rounded-2xl bg-surface-container/60 dark:bg-stone-950/60 border border-outline-variant/60 dark:border-stone-800/80 space-y-1">
              <div className="font-mono text-[11px] text-on-surface-variant dark:text-stone-400 uppercase tracking-wider">
                OPEN ARCHIVES
              </div>
              <div className="font-serif text-[28px] font-semibold text-primary dark:text-stone-100">
                {telemetry ? `${telemetry.publicRepos} Repositories` : "14 Repositories"}
              </div>
              <p className="font-sans text-[13px] text-on-surface-variant dark:text-stone-400">
                Public algorithmic tooling & packages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
