"use client";

import { contacts, profile, ui } from "@/content/content";
import { useLang } from "@/lib/i18n";
import { ChatIcon, DownloadIcon, MailIcon } from "@/components/icons";

const whatsapp = contacts.find((c) => c.key === "whatsapp")!;

const outline =
  "border-[1.5px] border-white text-white transition-colors hover:bg-white/10";

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" aria-labelledby="contact-title" className="mt-28 bg-navy text-white">
      <div className="container flex flex-wrap items-end justify-between gap-x-16 gap-y-12 pb-[72px] pt-24">
        <div className="min-w-0 flex-[1_1_520px]">
          <h2
            id="contact-title"
            className="text-[clamp(44px,7vw,92px)] font-extrabold leading-[0.92] [font-stretch:68%]"
          >
            {t(ui.contactTitle)}
          </h2>
          <p className="mt-6 max-w-[560px] text-[19px] leading-[1.55] text-[#d4d9ef]">{t(ui.contactBody)}</p>
        </div>

        <div className="flex max-w-full flex-[0_1_380px] flex-col gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex min-h-[60px] items-center justify-between gap-4 rounded bg-gold px-5 py-4 text-[19px] font-bold text-ink transition-colors hover:bg-[#d6b35f]"
          >
            <span>{t(ui.emailMe)}</span>
            <MailIcon size={22} />
          </a>
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener"
            className={`flex min-h-[60px] items-center justify-between gap-4 rounded px-5 py-4 text-[17px] font-semibold ${outline}`}
          >
            <span>{t(ui.whatsappCta)}</span>
            <ChatIcon size={22} />
          </a>
          <a
            href={profile.cvUrl}
            download
            className={`flex min-h-[60px] items-center justify-between gap-4 rounded px-5 py-4 text-[17px] font-semibold ${outline}`}
          >
            <span>{t(ui.downloadCv)}</span>
            <span className="flex items-center gap-2 text-[15px] font-medium text-on-navy">
              {t(ui.cvFormat)}
              <DownloadIcon size={20} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
