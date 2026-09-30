"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface GatewayCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  schematic: "ai" | "backend" | "frontend";
  imageUrl: string;
  href: string;
}

const gatewayCards: GatewayCard[] = [
  {
    id: "ai",
    title: "AI & Data Engineering",
    description: "Predictive modeling & robust data pipelines.",
    tags: ["Text Classification", "Sound Classification", "Predictive Analysis"],
    schematic: "ai",
    imageUrl: "/images/ai-cover.jpg",
    href: "/toolkit",
  },
  {
    id: "backend",
    title: "Back-End Architecture",
    description: "Scalable server-side logic & secure databases.",
    tags: ["RESTful APIs", "Database Design", "System Authentication"],
    schematic: "backend",
    imageUrl: "/images/backend-cover.jpg",
    href: "/toolkit",
  },
  {
    id: "frontend",
    title: "Front-End Interfaces",
    description: "Responsive, intuitive, and data-driven experiences.",
    tags: ["Responsive UI", "State Management", "Interactive Design"],
    schematic: "frontend",
    imageUrl: "/images/frontend-cover.jpg",
    href: "/toolkit",
  },
];

// Gradient overlay color matches the card's dark surface token
const CARD_BG = "#161413"; // --color-surface dark value

export function EngineeringGatewayCards() {
  return (
    /* Mobile-only: shown below md, hidden on desktop (desktop uses the marquee) */
    <div className="md:hidden w-full">
      {/* Section label */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-signal-orange" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary dark:text-stone-300 font-semibold">
          • ENGINEERING DISCIPLINE // TOOLKIT
        </span>
      </div>

      {/* Swipeable horizontal scroll carousel */}
      <div
        className="flex gap-3.5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
        role="list"
        aria-label="Engineering Foundations — swipeable cards"
      >
        {gatewayCards.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            role="listitem"
            aria-label={`${card.title} — View details`}
            className="gateway-card group shrink-0 snap-start w-[220px] xs:w-[240px] bg-surface/90 dark:bg-stone-900/70 rounded-card border border-outline-variant/60 dark:border-stone-800/90 flex flex-col overflow-hidden shadow-[0px_12px_28px_rgba(0,0,0,0.05)] dark:shadow-[0px_12px_28px_rgba(0,0,0,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-orange"
          >
            {/* Cover image with gradient overlay */}
            <div className="relative w-full h-32 overflow-hidden rounded-t-card shrink-0">
              <Image
                src={card.imageUrl}
                alt={`${card.title} cover`}
                fill
                sizes="240px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              {/* Gradient: transparent top → card dark bg bottom */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(to bottom, transparent 30%, ${CARD_BG} 100%)`,
                }}
              />
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-1 px-4 pt-3 pb-3.5 gap-2.5">
              {/* Title */}
              <h3 className="font-serif text-[17px] text-primary dark:text-stone-100 font-semibold tracking-tight leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[12.5px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450] flex-1">
                {card.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-surface-container dark:bg-stone-800/70 text-primary dark:text-stone-300 font-mono text-[10px] border border-outline-variant/30 dark:border-stone-700/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Clickability cue */}
              <div className="flex items-center justify-end gap-1 pt-1 border-t border-outline-variant/30 dark:border-stone-800/60">
                <span className="font-mono text-[10px] text-on-surface-variant dark:text-stone-500 group-hover:text-signal-orange transition-colors duration-200">
                  View Details
                </span>
                <ArrowRight className="w-3 h-3 text-on-surface-variant dark:text-stone-500 group-hover:text-signal-orange group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll hint dots */}
      <div className="flex justify-center gap-1.5 mt-1" aria-hidden="true">
        {gatewayCards.map((card) => (
          <span
            key={card.id}
            className="w-1.5 h-1.5 rounded-full bg-outline-variant dark:bg-stone-700 first:bg-signal-orange first:dark:bg-signal-orange"
          />
        ))}
      </div>
    </div>
  );
}
