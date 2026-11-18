"use client";

import Image from "next/image";
import { profile, ui } from "@/content/content";
import { useLang } from "@/lib/i18n";

/**
 * The student ID card hanging from a lanyard. The only element on the site
 * with a shadow and a rotation.
 */
export function IdCard() {
  const { t } = useLang();

  const facts = [
    { label: t(ui.card.focus), value: t(ui.card.focusValue) },
    { label: t(ui.card.gpa), value: profile.gpa },
    { label: t(ui.card.base), value: profile.base },
    { label: t(ui.card.status), value: t(ui.card.statusValue) },
  ];

  return (
    // Below lg the card sits under the text, so the straps get their own room above it.
    <div className="relative mx-auto w-[320px] max-w-[calc(100vw-80px)] pt-[140px] lg:pt-12">
      <div className="relative">
        {/* Lanyard straps: their bottom ends meet at the card's lanyard hole. */}
        <div
          aria-hidden="true"
          className="absolute bottom-[calc(100%-22px)] left-[calc(50%-20px)] h-[162px] w-[14px] origin-bottom rotate-[4deg] bg-navy-deep lg:h-[312px]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[calc(100%-22px)] left-[calc(50%+6px)] h-[162px] w-[14px] origin-bottom -rotate-[6deg] bg-navy-deep lg:h-[312px]"
        />

        <figure
          aria-label={t(ui.card.label)}
          className="relative m-0 -rotate-[4deg] overflow-hidden rounded-[18px] bg-white text-ink shadow-[0_30px_60px_rgba(8,14,45,.45)]"
        >
          <div className="px-5 pb-5 pt-3">
            <div aria-hidden="true" className="mx-auto h-3 w-16 rounded-full bg-[#dfe3ee]" />

            <div className="mt-3 flex items-baseline justify-between gap-3 text-[14px] font-semibold text-muted">
              <span>{profile.campus}</span>
              <span>{profile.entryYear}</span>
            </div>

            <div className="relative mt-3 h-[230px] overflow-hidden rounded-lg bg-mist">
              <Image
                src={profile.photo}
                alt={t(ui.card.photoAlt)}
                fill
                priority
                sizes="(max-width: 400px) calc(100vw - 120px), 280px"
                className="object-cover [object-position:50%_22%]"
              />
            </div>

            <p className="mt-4 text-[26px] font-extrabold leading-tight [font-stretch:75%]">{profile.shortName}</p>
            <p className="mt-1 text-[15px] leading-snug text-body">{t(profile.program)}</p>

            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[13px] leading-tight text-muted">{f.label}</dt>
                  <dd className="m-0 text-[15px] font-semibold leading-snug">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figcaption className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 bg-gold px-5 py-3 text-[14px] font-bold text-ink">
            <span>{t(ui.card.footer)}</span>
            <span>{profile.email}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
