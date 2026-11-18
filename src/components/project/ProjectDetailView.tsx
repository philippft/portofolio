"use client";

import Image from "next/image";
import Link from "next/link";
import { isPlaceholder, ui, type L, type Project, type Track } from "@/content/content";
import { useLang } from "@/lib/i18n";
import { Fill } from "@/components/Fill";
import { LangToggle } from "@/components/LangToggle";

type PagerItem = { slug: string; title: string };

const trackColor: Record<Track, string> = { be: "text-on-navy", ml: "text-gold" };

function Section({ title, body }: { title: L; body: L }) {
  const { t } = useLang();
  return (
    <section className="mt-10">
      <h2 className="m-0 text-[20px] font-bold text-ink">{t(title)}</h2>
      <p className="m-0 mt-2 text-body">
        <Fill text={t(body)} />
      </p>
    </section>
  );
}

function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[10px] border border-card-line bg-mist px-6 text-center">
      {isPlaceholder(src) ? (
        <span className="text-[15px] text-muted">{src}</span>
      ) : (
        <Image src={src} alt={alt} fill sizes="(max-width: 808px) 100vw, 760px" className="object-cover" />
      )}
    </div>
  );
}

export function ProjectDetailView({
  project,
  prev,
  next,
}: {
  project: Project;
  prev?: PagerItem;
  next?: PagerItem;
}) {
  const { t } = useLang();
  const d = project.detail;

  return (
    <main>
      <header className="bg-navy text-white">
        <div className="container pb-14 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-white hover:underline hover:underline-offset-4"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              {t(ui.detail.back)}
            </Link>
            <LangToggle variant="onNavy" />
          </div>

          <p className={`m-0 mt-10 text-[15px] font-semibold ${trackColor[project.track]}`}>
            {t(ui.filter[project.track])}, {project.when}
          </p>
          <h1 className="mt-3 text-[clamp(44px,7vw,88px)] font-extrabold leading-[0.92] [font-stretch:68%]">
            {project.title}
          </h1>
          <p className="m-0 mt-5 max-w-[760px] text-[22px] leading-[1.4] text-[#e3e7f5]">
            {t(d ? d.headline : project.line)}
          </p>
          {d && <p className="m-0 mt-3 max-w-[760px] text-on-navy">{t(d.context)}</p>}
        </div>
      </header>

      <div className="container">
        <div className="mx-auto max-w-[760px] pb-24 pt-12">
          {d ? (
            <>
              <Screenshot src={d.screenshot} alt={project.title} />
              <Section title={ui.detail.problem} body={d.problem} />
              <Section title={ui.detail.approach} body={d.approach} />
              <Section title={ui.detail.result} body={d.result} />

              {d.scores && (
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <caption className="pb-2 text-left text-[15px] font-semibold text-muted">
                      {t(ui.detail.compare)}
                    </caption>
                    <thead>
                      <tr className="border-b-2 border-ink">
                        <th scope="col" className="py-2 pr-4 font-semibold">{t(ui.detail.model)}</th>
                        <th scope="col" className="py-2 text-right font-semibold">{d.metric}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {d.scores.map((s) => (
                        <tr key={s.model} className="border-b border-line">
                          <th scope="row" className="py-2 pr-4 font-normal">{s.model}</th>
                          <td className="py-2 text-right tabular-nums">
                            <Fill text={s.score} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <Section title={ui.detail.takeaway} body={d.takeaway} />
            </>
          ) : (
            <p className="m-0 text-body">
              <Fill text={t(ui.detail.noStory)} />
            </p>
          )}

          <section className="mt-10">
            <h2 className="m-0 text-[20px] font-bold text-ink">{t(ui.detail.stack)}</h2>
            <p className="m-0 mt-2 text-body">{project.stack.join(", ")}</p>
          </section>

          <nav
            aria-label={t(ui.detail.pagerLabel)}
            className="mt-16 flex flex-wrap justify-between gap-4 border-t border-line pt-6"
          >
            {prev ? (
              <Link href={`/projects/${prev.slug}`} className="group flex min-h-11 flex-col">
                <span className="text-[14px] text-muted">{t(ui.detail.prevProject)}</span>
                <span className="font-bold text-navy group-hover:underline group-hover:underline-offset-4">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/projects/${next.slug}`} className="group ml-auto flex min-h-11 flex-col text-right">
                <span className="text-[14px] text-muted">{t(ui.detail.nextProject)}</span>
                <span className="font-bold text-navy group-hover:underline group-hover:underline-offset-4">{next.title}</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </main>
  );
}
