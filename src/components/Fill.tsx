import { Fragment } from "react";

// Matches "[ISI]" and "[ISI: …]" placeholders, including ones in the middle of a sentence.
const PLACEHOLDER = /(\[ISI[^\]]*\])/g;

/** Renders text, highlighting any unfilled [ISI: …] placeholder so it is obvious on the page. */
export function Fill({ text }: { text: string }) {
  if (!text.includes("[ISI")) return <>{text}</>;

  return (
    <>
      {text.split(PLACEHOLDER).map((part, i) =>
        part.startsWith("[ISI") ? (
          <mark key={i} className="rounded bg-fill-bg px-1.5 py-0.5 text-fill-fg">
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
