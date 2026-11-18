"use client";

import { isPlaceholder, skillGroups, ui } from "@/content/content";
import { useLang } from "@/lib/i18n";
import { Fill } from "@/components/Fill";

const accentBorder = {
  navy: "border-navy",
  gold: "border-gold",
  muted: "border-[#9aa6c7]",
} as const;

export function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" aria-labelledby="skills-title" className="container pt-28">
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <h2
          id="skills-title"
          className="text-[clamp(42px,6vw,68px)] font-extrabold leading-[0.95] [font-stretch:70%]"
        >
          {t(ui.skillsTitle)}
        </h2>
        <p className="m-0 max-w-[460px] text-muted">{t(ui.skillsSub)}</p>
      </div>

      <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-x-10 gap-y-6">
        {skillGroups.map((group) => (
          <div key={group.name.en}>
            <h3
              className={`m-0 border-b-[3px] pb-2 text-[24px] font-extrabold leading-tight [font-stretch:80%] ${accentBorder[group.accent]}`}
            >
              {t(group.name)}
            </h3>
            <ul className="m-0 list-none p-0">
              {group.items.map((skill) => {
                const usedIn = t(skill.usedIn);
                return (
                  <li key={skill.name} className="border-b border-line py-2.5">
                    <p className="m-0 font-bold text-ink">{skill.name}</p>
                    <p className="m-0 text-[15px] leading-snug text-muted">
                      {isPlaceholder(usedIn) ? (
                        <Fill text={usedIn} />
                      ) : (
                        <>
                          {t(ui.usedIn)} {usedIn}
                        </>
                      )}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
