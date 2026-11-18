"use client";

import { experience, ui } from "@/content/content";
import { useLang } from "@/lib/i18n";
import { Fill } from "@/components/Fill";

export function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" aria-labelledby="experience-title" className="container pt-[88px]">
      <div className="flex flex-wrap gap-x-12 gap-y-6">
        <h2
          id="experience-title"
          className="flex-[0_1_340px] text-[clamp(42px,6vw,68px)] font-extrabold leading-[0.95] [font-stretch:70%]"
        >
          {t(ui.experienceTitle)}
        </h2>

        <ol className="m-0 min-w-0 flex-[1_1_520px] list-none p-0">
          {experience.map((item) => (
            <li
              key={item.title.en}
              className="flex flex-wrap gap-x-6 gap-y-1 border-t border-line py-4"
            >
              <p className="m-0 flex flex-[0_0_132px] items-center gap-2 self-start font-semibold text-muted">
                {item.current && (
                  <span aria-hidden="true" className="inline-block h-[9px] w-[9px] shrink-0 rounded-full bg-live" />
                )}
                <span>{t(item.when)}</span>
              </p>
              <div className="min-w-0 flex-[1_1_280px]">
                <h3 className="m-0 font-bold text-ink">{t(item.title)}</h3>
                <p className="m-0 mt-1 text-body">
                  <Fill text={t(item.desc)} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
