"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#0C0A09] text-[#F5F5F4] min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-[#161413] border border-[#292524] rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-[#F37338]/10 border border-[#F37338]/30 text-[#F37338] flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-semibold text-white">
              Application Error
            </h2>
            <p className="text-sm text-stone-400">
              {error.message || "A critical error occurred."}
            </p>
          </div>

          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F37338] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reload Application</span>
          </button>
        </div>
      </body>
    </html>
  );
}
