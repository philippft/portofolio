"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-surface dark:bg-stone-900 border border-outline-variant/60 dark:border-stone-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-signal-orange/10 border border-signal-orange/30 text-signal-orange flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="font-serif text-2xl font-semibold text-primary dark:text-stone-100">
            Something went wrong
          </h2>
          <p className="font-sans text-sm text-on-surface-variant dark:text-stone-400">
            {error.message || "An unexpected error occurred while rendering the page."}
          </p>
          {error.digest && (
            <p className="font-mono text-xs text-on-surface-variant/60 dark:text-stone-500">
              Digest: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-signal-orange text-white font-sans text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface-container dark:bg-stone-800 text-primary dark:text-stone-200 border border-outline-variant/60 dark:border-stone-700 font-sans text-sm font-medium hover:bg-surface-container-high dark:hover:bg-stone-700 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
