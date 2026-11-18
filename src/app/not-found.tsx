import Link from "next/link";
import { ui } from "@/content/content";
import { T } from "@/components/T";
import { LangToggle } from "@/components/LangToggle";

export default function NotFound() {
  return (
    <main className="bg-navy text-white">
      <div className="container pb-24 pt-4">
        <div className="flex justify-end">
          <LangToggle variant="onNavy" />
        </div>
        <h1 className="mt-16 text-[clamp(44px,7vw,88px)] font-extrabold leading-[0.92] [font-stretch:68%]">
          <T x={ui.notFound.title} />
        </h1>
        <p className="m-0 mt-5 max-w-[560px] text-[19px] text-[#d4d9ef]">
          <T x={ui.notFound.body} />
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center rounded bg-gold px-6 py-[13px] font-bold leading-none text-ink transition-colors hover:bg-[#d6b35f]"
        >
          <T x={ui.notFound.home} />
        </Link>
      </div>
    </main>
  );
}
