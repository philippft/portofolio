"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { isPlaceholder, projects, ui, type Project, type Track } from "@/content/content";
import { useLang } from "@/lib/i18n";

type Filter = "all" | Track;

const FILTERS: Filter[] = ["all", "be", "ml"];
const AUTOPLAY_MS = 5000; // time between automatic steps
const RESUME_MS = 8000; // quiet time after the visitor touches, scrolls or uses the controls

const trackColor: Record<Track, string> = { be: "text-navy", ml: "text-gold-ink" };

// Featured projects first, then the rest, each in content.ts order.
const ORDERED = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)];

function count(filter: Filter) {
  return filter === "all" ? projects.length : projects.filter((p) => p.track === filter).length;
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const scrollBehavior = (): ScrollBehavior => (prefersReducedMotion() ? "auto" : "smooth");

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}

function PlayPauseIcon({ playing }: { playing: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {playing ? (
        <>
          <path d="M9 5v14" />
          <path d="M15 5v14" />
        </>
      ) : (
        <path d="M7 5l12 7-12 7z" />
      )}
    </svg>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const { t } = useLang();
  return (
    <article className="relative flex w-[min(85vw,340px)] flex-none snap-start flex-col overflow-hidden rounded-[10px] border border-card-line bg-white md:w-[340px]">
      {p.featured && (
        <div className="relative flex aspect-[16/10] items-center justify-center bg-mist px-6 text-center">
          {isPlaceholder(p.thumbnail) ? (
            <span className="text-[14px] text-muted">{p.thumbnail}</span>
          ) : (
            <Image src={p.thumbnail} alt="" fill sizes="340px" className="object-cover" />
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col px-6 pb-5 pt-5">
        <p className={`m-0 text-[14px] font-semibold ${trackColor[p.track]}`}>
          {t(ui.filter[p.track])}, {p.when}
        </p>
        <h3 className="m-0 mt-2 text-[26px] font-extrabold leading-[1.05] [font-stretch:78%]">{p.title}</h3>
        <p className="m-0 mt-3 text-body">{t(p.line)}</p>
        {p.result && <p className="m-0 mt-3 font-bold text-navy">{t(p.result)}</p>}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-1 pt-5">
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
  );
}

export function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const visible = ORDERED.filter((p) => filter === "all" || p.track === filter);

  const trackRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null); // track + dots: the area that pauses on hover/focus/touch

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);
  const [active, setActive] = useState(0);
  const [manualPaused, setManualPaused] = useState(false); // the Pause button, or reduced motion
  const [running, setRunning] = useState(false); // is an automatic step currently scheduled

  // Autoplay conditions live in refs so event handlers can update them without re-rendering.
  const manualPausedRef = useRef(false);
  const hovered = useRef(false);
  const focused = useRef(false);
  const tabVisible = useRef(true);
  const inView = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const step = useCallback(() => {
    const track = trackRef.current;
    const card = track?.querySelector("article");
    if (!track || !card) return 0;
    return card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || "0");
  }, []);

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
    // Active dot = the left-most card that is (mostly) in view.
    const cards = Array.from(track.querySelectorAll("article"));
    const i = cards.findIndex((c) => c.offsetLeft + c.offsetWidth / 2 > track.scrollLeft);
    setActive(i === -1 ? cards.length - 1 : i);
  }, []);

  const advance = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 1) {
      track.scrollTo({ left: 0 });
    } else {
      track.scrollBy({ left: step(), behavior: scrollBehavior() });
    }
  }, [step]);

  // (Re)start the countdown to the next automatic step, or stop it if anything says "pause".
  const schedule = useCallback(
    (delay: number) => {
      clearTimeout(timer.current);
      timer.current = undefined;
      const canRun =
        !manualPausedRef.current && !hovered.current && !focused.current && tabVisible.current && inView.current;
      setRunning(canRun);
      if (!canRun) return;
      const tick = () => {
        advance();
        timer.current = setTimeout(tick, AUTOPLAY_MS);
      };
      timer.current = setTimeout(tick, delay);
    },
    [advance],
  );

  // The visitor did something: give them RESUME_MS of quiet before autoplay continues.
  const interacted = useCallback(() => schedule(RESUME_MS), [schedule]);

  // Reduced motion: start paused. The Play button still works.
  useEffect(() => {
    if (prefersReducedMotion()) {
      manualPausedRef.current = true;
      setManualPaused(true);
      schedule(AUTOPLAY_MS);
    }
  }, [schedule]);

  // Hover, focus, touch, wheel, tab visibility and on-screen visibility.
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onEnter = () => { hovered.current = true; schedule(AUTOPLAY_MS); };
    const onLeave = () => { hovered.current = false; interacted(); };
    const onFocusIn = () => { focused.current = true; schedule(AUTOPLAY_MS); };
    const onFocusOut = (e: FocusEvent) => {
      if (slider.contains(e.relatedTarget as Node | null)) return;
      focused.current = false;
      interacted();
    };
    const onVisibility = () => {
      tabVisible.current = document.visibilityState === "visible";
      schedule(AUTOPLAY_MS);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        schedule(AUTOPLAY_MS);
      },
      { threshold: 0.3 },
    );

    slider.addEventListener("mouseenter", onEnter);
    slider.addEventListener("mouseleave", onLeave);
    slider.addEventListener("focusin", onFocusIn);
    slider.addEventListener("focusout", onFocusOut);
    slider.addEventListener("pointerdown", interacted);
    slider.addEventListener("wheel", interacted, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", updatePosition);
    observer.observe(slider);

    return () => {
      slider.removeEventListener("mouseenter", onEnter);
      slider.removeEventListener("mouseleave", onLeave);
      slider.removeEventListener("focusin", onFocusIn);
      slider.removeEventListener("focusout", onFocusOut);
      slider.removeEventListener("pointerdown", interacted);
      slider.removeEventListener("wheel", interacted);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", updatePosition);
      observer.disconnect();
      clearTimeout(timer.current);
    };
  }, [schedule, interacted, updatePosition]);

  // New filter: back to the first card, reset the dots, restart autoplay (unless paused by hand).
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0, behavior: "auto" });
    updatePosition();
    schedule(AUTOPLAY_MS);
  }, [filter, updatePosition, schedule]);

  const togglePause = () => {
    const next = !manualPausedRef.current;
    manualPausedRef.current = next;
    setManualPaused(next);
    schedule(AUTOPLAY_MS);
  };

  const scrollByCards = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * step(), behavior: scrollBehavior() });
    interacted();
  };

  const goTo = (index: number) => {
    const track = trackRef.current;
    const card = track?.querySelectorAll("article")[index];
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: scrollBehavior() });
    interacted();
  };

  const roundButton =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-navy transition-opacity aria-disabled:cursor-default aria-disabled:opacity-35";

  return (
    <section id="projects" aria-labelledby="projects-title" className="container pt-28">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 md:items-end">
        <h2
          id="projects-title"
          className="text-[clamp(42px,6vw,68px)] font-extrabold leading-[0.95] [font-stretch:70%]"
        >
          {t(ui.projectsTitle)}
        </h2>

        {/* Below md the filters drop to their own row; the slider buttons stay next to the title. */}
        <div
          role="group"
          aria-label={t(ui.filter.label)}
          className="order-last flex w-full flex-wrap gap-2 md:order-none md:ml-auto md:w-auto"
        >
          {FILTERS.map((f) => {
            const isActive = f === filter;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFilter(f)}
                className={`inline-flex min-h-10 items-center gap-1.5 rounded border-[1.5px] px-3 text-[15px] font-semibold transition-colors sm:gap-2 sm:px-4 ${
                  isActive ? "border-navy bg-navy text-white" : "border-[#c9d0e2] bg-white text-ink hover:border-navy"
                }`}
              >
                {t(ui.filter[f])}
                <span className={isActive ? "text-on-navy" : "text-muted"}>{count(f)}</span>
              </button>
            );
          })}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label={t(ui.prev)}
            aria-disabled={atStart}
            onClick={() => !atStart && scrollByCards(-1)}
            className={`${roundButton} bg-white text-navy`}
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            aria-label={t(manualPaused ? ui.autoplay.play : ui.autoplay.pause)}
            aria-pressed={manualPaused}
            onClick={togglePause}
            className={`${roundButton} bg-white text-navy`}
          >
            <PlayPauseIcon playing={!manualPaused} />
          </button>
          <button
            type="button"
            aria-label={t(ui.next)}
            aria-disabled={atEnd}
            onClick={() => !atEnd && scrollByCards(1)}
            className={`${roundButton} bg-navy text-white`}
          >
            <Chevron dir="right" />
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="mt-10">
        <div
          ref={trackRef}
          role="region"
          aria-roledescription={t(ui.carousel)}
          aria-label={t(ui.projectsTitle)}
          aria-live={running ? "off" : "polite"}
          tabIndex={0}
          onScroll={updatePosition}
          className="relative flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto pb-3.5"
        >
          {visible.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        <div role="group" aria-label={t(ui.dots.label)} className="mt-3 flex flex-wrap justify-center">
          {visible.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              aria-label={`${t(ui.dots.goTo)} ${p.title}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => goTo(i)}
              className="group inline-flex h-6 min-w-6 items-center justify-center px-1"
            >
              <span
                aria-hidden="true"
                className={`block h-2 rounded-full transition-all ${
                  i === active ? "w-6 bg-navy" : "w-2 bg-[#c9d0e2] group-hover:bg-muted"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
