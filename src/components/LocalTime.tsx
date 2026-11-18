"use client";

import { useEffect, useState } from "react";

/**
 * Current time in the given IANA time zone, as HH:MM.
 * Renders empty on the server and on first paint so hydration always matches.
 */
export function LocalTime({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
      timeZone,
    });
    const update = () => setTime(format.format(new Date()));
    update();

    // Line the 60-second interval up with the start of each minute,
    // so the clock never lags the real minute by up to a minute.
    let interval: ReturnType<typeof setInterval> | undefined;
    const msToNextMinute = 60_000 - (Date.now() % 60_000);
    const timeout = setTimeout(() => {
      update();
      interval = setInterval(update, 60_000);
    }, msToNextMinute);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [timeZone]);

  return (
    <time className="inline-block min-w-[3.2em] tabular-nums text-white" suppressHydrationWarning>
      {time}
    </time>
  );
}
