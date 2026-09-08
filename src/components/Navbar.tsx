"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/toolkit", label: "Toolkit" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-md bg-surface/85 dark:bg-stone-950/80 border-b border-outline-variant/50 dark:border-stone-800/50 transition-colors">
      <div className="max-w-max-width mx-auto px-4 sm:px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Pill */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 rounded-full bg-signal-orange inline-block group-hover:scale-125 transition-transform duration-300 animate-pulse" />
            <span className="font-mono text-[14px] tracking-wider uppercase font-semibold text-primary">
              PHILIP TOMASUI
            </span>
          </Link>
          <span className="hidden lg:inline-block font-mono text-[11px] text-on-surface-variant/70 dark:text-stone-500 border-l border-outline-variant/50 dark:border-stone-800 pl-3">
            AI/ML &amp; Systems
          </span>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 bg-surface-container/60 dark:bg-stone-900/70 border border-outline-variant/40 dark:border-stone-800/80 rounded-full shadow-inner">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 text-[14px] rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-canvas font-semibold shadow-sm"
                    : "text-on-surface-variant dark:text-stone-400 font-medium hover:bg-surface-container-high dark:hover:bg-stone-800 hover:text-primary dark:hover:text-stone-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:dzosfphilip@gmail.com?subject=Inquiry%20%2F%20Collaboration%20-%20Philip%20Tomasui"
            className="px-5 py-2 text-[14px] rounded-full text-on-surface-variant dark:text-stone-400 font-medium hover:bg-surface-container-high dark:hover:bg-stone-800 hover:text-primary dark:hover:text-stone-100 transition-all duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Right Utility Pill */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href="mailto:dzosfphilip@gmail.com?subject=Inquiry%20%2F%20Collaboration%20-%20Philip%20Tomasui"
            className="magnetic-btn hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-primary text-canvas font-mono text-[12px] uppercase tracking-wider font-semibold hover:bg-signal-orange hover:text-white transition-all duration-200 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal-orange" />
            <span>Contact</span>
          </a>

          <a
            href="https://github.com/philippft"
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile @philippft"
            aria-label="GitHub Profile @philippft"
            className="magnetic-btn w-9 h-9 rounded-full bg-surface-container-high dark:bg-stone-900 text-on-surface border border-outline-variant/60 dark:border-stone-800 flex items-center justify-center hover:bg-primary hover:text-canvas transition-colors shadow-sm"
          >
            <Terminal className="w-4 h-4 text-signal-orange" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden w-9 h-9 rounded-full bg-surface-container-high dark:bg-stone-900 text-on-surface flex items-center justify-center border border-outline-variant/60 dark:border-stone-800 hover:bg-primary hover:text-canvas transition-colors"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-outline-variant/50 dark:border-stone-800/80 bg-surface/95 dark:bg-stone-950/95 backdrop-blur-2xl px-6 py-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-[15px] font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-primary text-canvas font-semibold"
                      : "text-on-surface hover:bg-surface-container-high dark:hover:bg-stone-900"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-signal-orange" />}
                </Link>
              );
            })}
            <a
              href="mailto:dzosfphilip@gmail.com?subject=Inquiry%20%2F%20Collaboration%20-%20Philip%20Tomasui"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-2xl text-[15px] font-medium text-on-surface hover:bg-surface-container-high dark:hover:bg-stone-900 transition-colors flex items-center justify-between"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4 text-signal-orange" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
