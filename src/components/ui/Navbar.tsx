"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

const routes = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/demos/restaurant", label: "Dijital Menü" },
  { href: "/cs-servers", label: "CS 1.6 Sunucuları" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="container mx-auto max-w-5xl">
        <div className="glass-panel rounded-2xl px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <Logo />
          </Link>
          
          <nav className="flex items-center gap-2">
            {routes.map((route) => {
              const isActive = pathname === route.href;
              return (
                <Link 
                  key={route.href} 
                  href={route.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors ${isActive ? "text-[color:var(--color-foreground)]" : "text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)]"}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-tab"
                      className="absolute inset-0 bg-[color:var(--color-muted)] rounded-xl z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{route.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle inline />
          </div>
        </div>
      </div>
    </header>
  );
}
