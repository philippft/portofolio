"use client";

import { profile, ui } from "@/content/content";
import { useLang } from "@/lib/i18n";
import { Fill } from "@/components/Fill";
import { LangToggle } from "@/components/LangToggle";
import { IdCard } from "./IdCard";

const NAV = [
  { href: "#experience", label: ui.nav.experience },
  { href: "#projects", label: ui.nav.projects },
  { href: "#skills", label: ui.nav.skills },
  { href: "#contact", label: ui.nav.contact },
];

export function Hero() {
  const { t } = useLang();

  return (
    <section aria-labelledby="hero-title" className="overflow-hidden bg-navy text-white">
      <header className="container relative z-10">
        <nav
          aria-label={t(ui.navLabel)}
          className="flex flex-wrap items-center justify-between gap-x-8 gap-y-1 py-4"
        >
          <a href="#top" className="inline-flex min-h-11 items-center text-[20px] font-bold [font-stretch:75%]">
            {profile.brandName}
          </a>

          {/* Below md the links drop to their own row under the name and toggle. */}
          <ul className="order-last -mx-2 flex md:-mx-3 w-full flex-wrap md:order-none md:ml-auto md:w-auto">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center px-2 text-[16px] md:px-3 font-medium hover:underline hover:underline-offset-4"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>

          <LangToggle variant="onNavy" />
        </nav>
      </header>

      <div className="container flex flex-wrap items-center gap-x-16 pb-24 pt-10 lg:flex-nowrap lg:pb-28 lg:pt-6">
        <div className="relative z-10 min-w-0 flex-[1_1_520px]">
          <h1
            id="hero-title"
            className="text-[clamp(52px,8.4vw,112px)] font-extrabold leading-[0.9] [font-stretch:68%]"
          >
            {profile.name}
          </h1>
          <p className="mt-7 max-w-[560px] text-[21px] leading-[1.5] text-[#e3e7f5]">{t(profile.intro)}</p>
          <p className="mt-4 text-on-navy">
            {t(profile.lookingFor)} <Fill text={profile.availableFrom} />
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center rounded bg-gold px-6 py-[13px] font-bold leading-none text-ink transition-colors hover:bg-[#d6b35f]"
            >
              {t(ui.emailMe)}
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex min-h-11 items-center rounded border-[1.5px] border-white px-6 py-[13px] font-semibold leading-none text-white transition-colors hover:bg-white/10"
            >
              {t(ui.downloadCv)}
            </a>
          </div>
        </div>

        <div className="w-full lg:w-auto lg:flex-none">
          <IdCard />
        </div>
      </div>
    </section>
  );
}
