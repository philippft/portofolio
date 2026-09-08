import Link from "next/link";
import { Terminal, Share2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-tertiary text-on-tertiary-container border-t border-outline-variant/30 dark:border-stone-800/80 relative z-20 transition-colors">
      <div className="max-w-max-width mx-auto px-6 sm:px-10 md:px-14 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 pb-14 border-b border-outline-variant/20 dark:border-stone-800/80">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-signal-orange" />
              <span className="font-serif text-[24px] font-semibold text-primary dark:text-stone-100 tracking-tight">
                Philip Filadelphia Tomasui
              </span>
            </div>
            <p className="font-sans text-[14px] text-on-tertiary-container dark:text-stone-400 max-w-md leading-relaxed font-[400]">
              Informatics Engineer at Universitas Udayana crafting evaluated machine intelligence, scalable telemetry pipelines, and humanist digital preservation systems.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container dark:bg-stone-900 text-on-tertiary-container dark:text-stone-400 font-mono text-[11px] border border-outline-variant/20 dark:border-stone-800">
              <span className="w-2 h-2 rounded-full bg-signal-orange animate-pulse" />
              <span>Applied Research • Production Deployments</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-on-tertiary-container dark:text-stone-400 font-semibold block">
              Archive Navigation
            </span>
            <ul className="space-y-2 font-sans text-[14px]">
              <li>
                <Link
                  href="/"
                  className="text-on-tertiary-container dark:text-stone-300 hover:text-signal-orange transition-colors"
                >
                  Hero Index
                </Link>
              </li>
              <li>
                <Link
                  href="/toolkit"
                  className="text-on-tertiary-container dark:text-stone-300 hover:text-signal-orange transition-colors"
                >
                  Toolkit Foundations
                </Link>
              </li>
              <li>
                <Link
                  href="/#leadership-section"
                  className="text-on-tertiary-container dark:text-stone-300 hover:text-signal-orange transition-colors"
                >
                  Leadership & Awards
                </Link>
              </li>
              <li>
                <Link
                  href="/#activity-section"
                  className="text-on-tertiary-container dark:text-stone-300 hover:text-signal-orange transition-colors"
                >
                  Proof of Work (Git)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-on-tertiary-container dark:text-stone-300 hover:text-signal-orange transition-colors"
                >
                  Engineering Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Network & Dispatch */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-on-tertiary-container dark:text-stone-400 font-semibold block">
              Network & Dispatch
            </span>
            <ul className="space-y-2.5 font-mono text-[12px]">
              <li>
                <a
                  href="https://github.com/philippft"
                  target="_blank"
                  rel="noreferrer"
                  className="text-on-tertiary-container dark:text-stone-300 hover:text-signal-orange transition-colors flex items-center gap-2"
                >
                  <Terminal className="w-4 h-4 text-signal-orange" />
                  <span>GitHub • @philippft</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-on-tertiary-container dark:text-stone-300 hover:text-signal-orange transition-colors flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4 text-signal-orange" />
                  <span>LinkedIn • Network</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:dzosfphilip@gmail.com"
                  className="text-on-tertiary-container dark:text-stone-300 hover:text-signal-orange transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-signal-orange" />
                  <span>Email • dzosfphilip@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-on-tertiary-container dark:text-stone-400">
          <p>© 2025 Philip Tomasui. Geometric Modernism × Kinetic Editorial Intelligence.</p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-orange" />
            <span>Crafted with Editorial Precision • Bali, Indonesia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
