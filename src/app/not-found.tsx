import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-surface dark:bg-stone-900 border border-outline-variant/60 dark:border-stone-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-signal-orange font-semibold">
            404 • Page Not Found
          </span>
          <h2 className="font-serif text-3xl font-semibold text-primary dark:text-stone-100">
            Archive Not Located
          </h2>
          <p className="font-sans text-sm text-on-surface-variant dark:text-stone-400">
            The requested technical document or route does not exist.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-canvas font-sans text-sm font-semibold hover:bg-signal-orange hover:text-white transition-all shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Return to Index</span>
        </Link>
      </div>
    </div>
  );
}
