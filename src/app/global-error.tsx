"use client";

import { useEffect } from "react";
import { ui } from "@/content/content";

// Replaces the whole document when the root layout itself fails, so it cannot rely on
// the layout's fonts, CSS or language provider. Styles are inline; text is English.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#1f2d6b", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
        <main style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 24px" }}>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, lineHeight: 1, margin: 0 }}>
            {ui.error.title.en}
          </h1>
          <p style={{ fontSize: 19, color: "#d4d9ef", marginTop: 20 }}>{ui.error.body.en}</p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: 24,
              minHeight: 44,
              padding: "13px 24px",
              border: 0,
              borderRadius: 4,
              background: "#c8a24a",
              color: "#121a3d",
              fontWeight: 700,
              fontSize: 17,
              cursor: "pointer",
            }}
          >
            {ui.error.retry.en}
          </button>
        </main>
      </body>
    </html>
  );
}
