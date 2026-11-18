"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { isPlaceholder, projects, ui, type Project, type Track } from "@/content/content";
import { useLang } from "@/lib/i18n";

type Filter = "all" | Track;

const FILTERS: Filter[] = ["all", "be", "ml"];
const STEP = 294; // one slider card (280px) plus the 14px gap

const trackColor: Record<Track, string> = { be: "text-navy", ml: "text-gold-ink" };

function count(filter: Filter) {
  return filter === "all" ? projects.length : projects.filter((p) => p.track === filter).length;
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}

export function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const visible = projects.filter((p) => filter === "all" || p.track === filter);
  const featured = visible.filter((p) => p.featured);
  const more = visible.filter((p) => !p.featured);

  const trackLabel = (p: Project) => `${t(ui.filter[p.track])}, ${p.when}`;

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  // Back to the first card whenever the filter changes, then recheck the button states.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "auto" });
    updateEdges();
  }, [filter, updateEdges]);

  useEffect(() => {
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const scrollByStep = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({
      left: direction * STEP,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <section id="projects" aria-labelledby="projects-title" className="container pt-28">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
        <h2
          id="projects-title"
          className="text-[clamp(42px,6vw,68px)] font-extrabold leading-[0.95] [font-stretch:70%]"
        >
          {t(ui.projectsTitle)}
        </h2>

        <div role="group" aria-label={t(ui.filter.label)} className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f)}
                className={`inline-flex min-h-10 items-center gap-1.5 rounded border-[1.5px] px-3 text-[15px] sm:gap-2 sm:px-4 font-semibold transition-colors ${
                  active ? "border-navy bg-navy text-white" : "border-[#c9d0e2] bg-white text-ink hover:border-navy"
                }`}
              >
                {t(ui.filter[f])}
                <span className={active ? "text-on-navy" : "text-muted"}>{count(f)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {featured.length > 0 && (
        <div className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] gap-5">
          {featured.map((p) => (
            <article key={p.slug} className="flex flex-col overflow-hidden rounded-[10px] border border-card-line bg-white">
              <div className="relative flex aspect-[16/10] items-center justify-center bg-mist px-6 text-center">
                {isPlaceholder(p.thumbnail) ? (
                  <span className="text-[14px] text-muted">{p.thumbnail}</span>
                ) : (
                  <Image
                    src={p.thumbnail}
                    alt=""
                    fill
                    sizes="(max-width: 720px) 100vw, 380px"
                    className="object-cover"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col px-6 pb-5 pt-5">
                <p className={`m-0 text-[14px] font-semibold ${trackColor[p.track]}`}>{trackLabel(p)}</p>
                <h3 className="m-0 mt-2 text-[28px] font-extrabold leading-[1.05] [font-stretch:78%]">{p.title}</h3>
                <p className="m-0 mt-3 text-body">{t(p.line)}</p>
                {p.result && <p className="m-0 mt-3 font-bold text-navy">{t(p.result)}</p>}

                <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-5">
                  <p className="m-0 text-[14px] text-muted">{p.stack.slice(0, 3).join(", ")}</p>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex min-h-11 items-center font-semibold text-navy underline underline-offset-4 hover:no-underline"
                  >
                    {t(ui.seeDetails)}
                    <span className="sr-only">: {p.title}</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {more.length > 0 && (
        <div className="mt-14">
          <div className="flex items-center justify-between gap-4">
            <h3 className="m-0 text-[22px] font-extrabold [font-stretch:78%]">
              {t(ui.moreProjects)} <span className="font-semibold text-muted">{more.length}</span>
            </h3>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label={t(ui.prev)}
                disabled={atStart}
                onClick={() => scrollByStep(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-navy bg-white text-navy transition-opacity disabled:cursor-default disabled:opacity-35"
              >
                <Chevron dir="left" />
              </button>
              <button
                type="button"
                aria-label={t(ui.next)}
                disabled={atEnd}
                onClick={() => scrollByStep(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-navy bg-navy text-white transition-opacity disabled:cursor-default disabled:opacity-35"
              >
                <Chevron dir="right" />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            role="region"
            aria-label={t(ui.moreProjects)}
            tabIndex={0}
            onScroll={updateEdges}
            className="mt-5 flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-3.5"
          >
            {more.map((p) => (
              <article
                key={p.slug}
                className="flex min-h-[210px] flex-[0_0_280px] snap-start flex-col rounded-[10px] border border-card-line bg-[#fafbfd] px-5 py-[18px]"
              >
                <p className={`m-0 text-[14px] font-semibold ${trackColor[p.track]}`}>{trackLabel(p)}</p>
                <h4 className="m-0 mt-2 text-[18px] font-bold leading-snug">{p.title}</h4>
                <p className="m-0 mt-2 text-[15px] leading-normal text-body">{t(p.line)}</p>
                <Link
                  href={`/projects/${p.slug}`}
                  className="mt-auto inline-flex min-h-11 items-end font-semibold text-navy underline underline-offset-4 hover:no-underline"
                >
                  {t(ui.seeDetails)}
                  <span className="sr-only">: {p.title}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
