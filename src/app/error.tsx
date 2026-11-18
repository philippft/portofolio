"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
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
    <main className="mx-auto max-w-md px-6 py-24 text-center">
      <h1 className="text-3xl font-extrabold">Something went wrong</h1>
      <p className="mt-3">The page could not be shown.</p>
      <div className="mt-6 flex justify-center gap-4">
        <button type="button" onClick={() => reset()} className="underline">
          Try again
        </button>
        <Link href="/" className="underline">
          Back to home
        </Link>
      </div>
    </main>
  );
}
