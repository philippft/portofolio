"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Terminal, Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/toolkit", label: "Toolkit" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-md bg-surface/85 dark:bg-stone-950/80 border-b border-outline-variant/50 dark:border-stone-800/50 transition-colors">
        <div className="max-w-max-width mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Pill */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group py-1">
              <span className="w-2.5 h-2.5 rounded-full bg-signal-orange inline-block group-hover:scale-125 transition-transform duration-300 animate-pulse" />
              <span className="font-mono text-[13px] sm:text-[14px] tracking-wider uppercase font-semibold text-primary">
                PHILIP TOMASUI
              </span>
            </Link>
            <span className="hidden xl:inline-block font-mono text-[11px] text-on-surface-variant/70 dark:text-stone-500 border-l border-outline-variant/50 dark:border-stone-800 pl-3">
              AI/ML &amp; Systems
            </span>
          </div>

          {/* Center Navigation Links (Desktop: Tablets 768px+ & Laptops) */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 bg-surface-container/60 dark:bg-stone-900/70 border border-outline-variant/40 dark:border-stone-800/80 rounded-full shadow-inner">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 lg:px-5 py-2 text-[13px] lg:text-[14px] rounded-full transition-all duration-200 ${
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
              className="px-4 lg:px-5 py-2 text-[13px] lg:text-[14px] rounded-full text-on-surface-variant dark:text-stone-400 font-medium hover:bg-surface-container-high dark:hover:bg-stone-800 hover:text-primary dark:hover:text-stone-100 transition-all duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Right Utility Cluster */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <ThemeToggle />

            <a
              href="mailto:dzosfphilip@gmail.com?subject=Inquiry%20%2F%20Collaboration%20-%20Philip%20Tomasui"
              className="magnetic-btn hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-canvas font-mono text-[11px] lg:text-[12px] uppercase tracking-wider font-semibold hover:bg-signal-orange hover:text-white transition-all duration-200 shadow-sm"
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
              className="magnetic-btn w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-surface-container-high dark:bg-stone-900 text-on-surface border border-outline-variant/60 dark:border-stone-800 flex items-center justify-center hover:bg-primary hover:text-canvas transition-colors shadow-sm"
            >
              <Terminal className="w-4 h-4 text-signal-orange" />
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden w-9 h-9 rounded-full bg-surface-container-high dark:bg-stone-900 text-on-surface flex items-center justify-center border border-outline-variant/60 dark:border-stone-800 hover:bg-primary hover:text-canvas transition-colors"
            >
              {mobileOpen ? <X className="w-4 h-4 text-signal-orange" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Sleek Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden pt-16"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface/98 dark:bg-stone-950/98 border-b border-outline-variant/60 dark:border-stone-800/80 shadow-2xl px-5 py-6 space-y-5 max-h-[calc(100vh-4rem)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Link Stack */}
              <div className="flex flex-col space-y-1.5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant dark:text-stone-400 px-3 py-1 font-semibold">
                  DIRECTORY NAVIGATION
                </div>
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
                      className={`px-4 py-3.5 rounded-2xl text-[15px] font-medium transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-primary text-canvas font-semibold shadow-sm"
                          : "text-on-surface hover:bg-surface-container-high dark:hover:bg-stone-900"
                      }`}
                    >
                      <span className="font-sans">{link.label}</span>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-signal-orange" />
                      ) : (
                        <span className="font-mono text-[12px] text-on-surface-variant/60 dark:text-stone-500">→</span>
                      )}
                    </Link>
                  );
                })}

                <a
                  href="mailto:dzosfphilip@gmail.com?subject=Inquiry%20%2F%20Collaboration%20-%20Philip%20Tomasui"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3.5 rounded-2xl text-[15px] font-medium text-on-surface hover:bg-surface-container-high dark:hover:bg-stone-900 transition-colors flex items-center justify-between"
                >
                  <span className="font-sans">Contact Dispatch</span>
                  <ArrowUpRight className="w-4 h-4 text-signal-orange" />
                </a>
              </div>

              {/* Bottom Quick-Action Cluster */}
              <div className="pt-4 border-t border-outline-variant/40 dark:border-stone-800/80 space-y-3">
                <a
                  href="mailto:dzosfphilip@gmail.com?subject=Inquiry%20%2F%20Collaboration%20-%20Philip%20Tomasui"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-signal-orange text-white font-sans font-semibold text-[14px] shadow-sm hover:opacity-95 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <div className="flex items-center justify-between px-3 py-2 rounded-2xl bg-surface-container dark:bg-stone-900/80 border border-outline-variant/40 dark:border-stone-800 text-[13px] font-mono text-on-surface-variant dark:text-stone-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-signal-orange animate-pulse" />
                    <span>Bali, Indonesia (UTC+8)</span>
                  </span>
                  <a
                    href="https://github.com/philippft"
                    target="_blank"
                    rel="noreferrer"
                    className="text-signal-orange font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>@philippft</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
