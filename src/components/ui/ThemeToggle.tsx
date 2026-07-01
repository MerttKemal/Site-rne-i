"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle({ inline = false }: { inline?: boolean }) {
  const [isDark, setIsDark] = React.useState(true);

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const baseClasses = "flex items-center justify-center text-[color:var(--color-foreground)] cursor-pointer transition-colors";
  const layoutClasses = inline 
    ? "p-2 rounded-lg hover:bg-[color:var(--color-muted)]" 
    : "fixed top-4 right-4 z-50 p-3 rounded-full glass-panel";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
      className={`${baseClasses} ${layoutClasses}`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-5 w-5" suppressHydrationWarning /> : <Moon className="h-5 w-5" suppressHydrationWarning />}
    </motion.button>
  );
}
