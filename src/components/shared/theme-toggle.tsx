"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { SunIcon, MoonIcon } from "@/components/shared/icons";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) {
    return <div className="h-9 w-[76px]" aria-hidden="true" />;
  }

  return (
    <div
      role="group"
      aria-label="Background appearance"
      className="flex h-9 items-center gap-1 rounded-md border-2 border-border bg-card p-0.5 shadow-hard-sm"
    >
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Dark background"
        aria-pressed={resolvedTheme === "dark"}
        title="Dark background"
        className="flex h-7 w-8 items-center justify-center rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring aria-pressed:bg-primary aria-pressed:text-primary-foreground"
      >
        <MoonIcon width={16} height={16} />
      </button>
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Bright background"
        aria-pressed={resolvedTheme === "light"}
        title="Bright background"
        className="flex h-7 w-8 items-center justify-center rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring aria-pressed:bg-primary aria-pressed:text-primary-foreground"
      >
        <SunIcon width={16} height={16} />
      </button>
    </div>
  );
}
