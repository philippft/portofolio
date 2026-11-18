"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ui } from "@/content/content";
import { useLang } from "@/lib/i18n";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLang();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-navy text-white">
      <div className="container pb-24 pt-20">
        <h1 className="text-[clamp(44px,7vw,88px)] font-extrabold leading-[0.92] [font-stretch:68%]">
          {t(ui.error.title)}
        </h1>
        <p className="m-0 mt-5 max-w-[560px] text-[19px] text-[#d4d9ef]">{t(ui.error.body)}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex min-h-11 items-center rounded bg-gold px-6 py-[13px] font-bold leading-none text-ink transition-colors hover:bg-[#d6b35f]"
          >
            {t(ui.error.retry)}
          </button>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded border-[1.5px] border-white px-6 py-[13px] font-semibold leading-none text-white transition-colors hover:bg-white/10"
          >
            {t(ui.error.home)}
          </Link>
        </div>
      </div>
    </main>
  );
}
