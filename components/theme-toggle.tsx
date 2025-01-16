"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!resolvedTheme) {
      setTheme("dark");
    }
  }, [resolvedTheme, setTheme]);

  if (!mounted || !resolvedTheme) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative h-9 w-9 rounded-full"
    >
      <div className="relative h-full w-full">
        <Sun
          className={`absolute inset-0 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 m-auto`}
        />
        <Moon
          className={`absolute inset-0 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 m-auto`}
        />
        <span className="sr-only">Toggle theme</span>
      </div>
    </Button>
  );
}
