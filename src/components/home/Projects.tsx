"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, ui, type Project, type Track } from "@/content/content";
import { useLang } from "@/lib/i18n";

type Filter = "all" | Track;

const FILTERS: Filter[] = ["all", "be", "ml"];
const SPEED = 40; // px per second
const RESUME_MS = 3000; // quiet time after the visitor scrolls or lets go

const trackColor: Record<Track, string> = { be: "text-navy", ml: "text-gold-ink" };
const coverLine: Record<Track, string> = { be: "bg-[#9aa6c7]", ml: "bg-gold" };

// Featured projects first, then the rest, each in content.ts order.
const ORDERED = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)];

function count(filter: Filter) {
  return filter === "all" ? projects.length : projects.filter((p) => p.track === filter).length;
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

function ProjectCard({ p, copy }: { p: Project; copy: boolean }) {
  const { t } = useLang();
  const stack = p.stack.join(", ");
  return (
    <article
      data-copy={copy ? "1" : undefined}
      aria-hidden={copy ? "true" : undefined}
      className="relative flex w-[min(85vw,340px)] flex-none snap-start flex-col overflow-hidden rounded-[10px] border border-card-line bg-white md:w-[340px]"
    >
      {/* Cover: decorative, the title is repeated in the h3 below. */}
      <div aria-hidden="true" className="relative aspect-[16/10] overflow-hidden bg-navy">
        {p.thumbnail ? (
          <Image src={p.thumbnail} alt="" fill sizes="340px" className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-end p-5">
            <span className="line-clamp-3 text-[34px] font-extrabold leading-[0.95] text-white [font-stretch:68%]">
              {p.title}
            </span>
          </div>
        )}
        <span className={`absolute inset-x-0 bottom-0 h-1 ${coverLine[p.track]}`} />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-2 pt-5">
        <p className="m-0 text-[14px] font-semibold">
          <span className={trackColor[p.track]}>{t(ui.filter[p.track])}</span>
          <span className="text-muted">, {p.when}</span>
        </p>
        <h3 className="m-0 mt-2 text-[24px] font-extrabold leading-[1.05] [font-stretch:78%]">{p.title}</h3>
        <p className="m-0 mt-2 line-clamp-3 text-body">{t(p.line)}</p>
        {p.result && <p className="m-0 mt-3 font-bold text-navy">{t(p.result)}</p>}

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-3">
          <p title={stack} className="m-0 min-w-0 truncate text-[14px] text-muted">
            {stack}
          </p>
          <Link
            href={`/projects/${p.slug}`}
            tabIndex={copy ? -1 : undefined}
            className="inline-flex min-h-11 shrink-0 items-center font-semibold text-navy underline underline-offset-4 hover:no-underline"
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

  const [reduced, setReduced] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);
  // How many hidden copies follow the real list. One copy is enough with many cards;
  // a short list (three back-end cards on a wide screen) needs more to fill the loop.
  const [copies, setCopies] = useState(1);

  const trackRef = useRef<HTMLDivElement>(null);
  const manualPausedRef = useRef(false);

  // Reduced motion: no marquee, no copies, an ordinary swipeable row.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // New filter: start from the beginning. The marquee keeps running unless paused by hand.
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [filter]);

  // Make sure the copies are wide enough to loop without running out of track.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduced) return;
    const measure = () => {
      const cards = track.querySelectorAll<HTMLElement>("article:not([data-copy])");
      if (!cards.length) return;
      const gap = parseFloat(getComputedStyle(track).columnGap || "0");
      const last = cards[cards.length - 1];
      const listWidth = last.offsetLeft + last.offsetWidth - cards[0].offsetLeft + gap;
      setCopies(Math.max(1, Math.ceil((track.clientWidth + gap + 50) / listWidth)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [filter, reduced]);

  // The marquee itself.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduced) return;

    let pos = track.scrollLeft; // our own float position; scrollLeft may round
    let expected = track.scrollLeft; // what we last wrote, to tell our scrolls from the visitor's
    let last = 0;
    let frame = 0;
    let hovered = false;
    let focused = false;
    let touching = false;
    let hidden = document.visibilityState === "hidden";
    let inView = false;
    let quietUntil = 0;

    // Distance between a real card and its first copy = one full loop.
    const loopWidth = () => {
      const first = track.querySelector<HTMLElement>("article:not([data-copy])");
      const copy = track.querySelector<HTMLElement>("article[data-copy]");
      return first && copy ? copy.offsetLeft - first.offsetLeft : 0;
    };

    const write = (left: number) => {
      track.scrollLeft = left;
      expected = track.scrollLeft;
    };

    const tick = (now: number) => {
      const dt = last ? Math.min(now - last, 100) : 0; // cap so a long pause never causes a jump
      last = now;
      const running =
        !manualPausedRef.current && !hovered && !focused && !touching && !hidden && inView && now >= quietUntil;
      const loop = loopWidth();
      if (running && loop > 0) {
        pos += (SPEED * dt) / 1000;
        if (pos >= loop) pos -= loop;
        write(pos);
      }
      frame = requestAnimationFrame(tick);
    };

    // A scroll we did not cause came from the visitor: follow it, wrap it, wait a moment.
    const onScroll = () => {
      if (Math.abs(track.scrollLeft - expected) <= 1.5) return;
      const loop = loopWidth();
      pos = track.scrollLeft;
      if (loop > 0 && pos >= loop) {
        pos -= loop;
        write(pos);
      } else if (loop > 0 && pos <= 0 && expected > 0) {
        pos += loop;
        write(pos);
      } else {
        expected = pos;
      }
      quietUntil = performance.now() + RESUME_MS;
    };

    const onEnter = () => { hovered = true; };
    const onLeave = () => { hovered = false; };
    const onFocusIn = () => { focused = true; };
    const onFocusOut = (e: FocusEvent) => {
      if (!track.contains(e.relatedTarget as Node | null)) focused = false;
    };
    const onPointerDown = () => { touching = true; };
    const onPointerUp = () => {
      if (!touching) return;
      touching = false;
      quietUntil = performance.now() + RESUME_MS;
    };
    const onVisibility = () => { hidden = document.visibilityState === "hidden"; };
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; }, { threshold: 0.2 });

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);
    track.addEventListener("focusin", onFocusIn);
    track.addEventListener("focusout", onFocusOut);
    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    document.addEventListener("visibilitychange", onVisibility);
    observer.observe(track);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
      track.removeEventListener("focusin", onFocusIn);
      track.removeEventListener("focusout", onFocusOut);
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [filter, reduced]);

  const togglePause = () => {
    manualPausedRef.current = !manualPausedRef.current;
    setManualPaused(manualPausedRef.current);
  };

  const marquee = !reduced;
  const fade = "linear-gradient(to right, transparent, #000 48px, #000 calc(100% - 48px), transparent)";

  return (
    <section id="projects" aria-labelledby="projects-title" className="container pt-28">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 md:items-end">
        <h2
          id="projects-title"
          className="text-[clamp(42px,6vw,68px)] font-extrabold leading-[0.95] [font-stretch:70%]"
        >
          {t(ui.projectsTitle)}
        </h2>

        {/* Below md the filters drop to their own row; the pause button stays next to the title. */}
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

        {marquee && (
          <button
            type="button"
            aria-label={t(manualPaused ? ui.playAuto : ui.pauseAuto)}
            aria-pressed={manualPaused}
            onClick={togglePause}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-navy bg-white text-navy"
          >
            <PlayPauseIcon playing={!manualPaused} />
          </button>
        )}
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-roledescription={t(ui.carousel)}
        aria-label={t(ui.projectsTitle)}
        tabIndex={0}
        style={marquee ? { maskImage: fade, WebkitMaskImage: fade } : undefined}
        className={`no-scrollbar relative mt-10 flex items-stretch gap-5 overflow-x-auto ${
          marquee ? "" : "snap-x snap-mandatory"
        }`}
      >
        {visible.map((p) => (
          <ProjectCard key={p.slug} p={p} copy={false} />
        ))}
        {marquee &&
          Array.from({ length: copies }, (_, c) => (
            <Fragment key={c}>
              {visible.map((p) => (
                <ProjectCard key={`${p.slug}-${c}`} p={p} copy />
              ))}
            </Fragment>
          ))}
      </div>
    </section>
  );
}
