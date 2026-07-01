"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import { ChevronDown, Menu, X } from "lucide-react";

interface DropdownItem {
  href: string;
  label: string;
}

interface Category {
  id: string;
  label: string;
  items: DropdownItem[];
}

const categories: Category[] = [
  {
    id: "menus",
    label: "Menü Örnekleri",
    items: [
      { href: "/demos/restaurant", label: "Dijital QR Menü" },
      { href: "/demos/restaurant-normal", label: "Klasik Web Menü" },
    ]
  },
  {
    id: "games",
    label: "Oyun Sunucuları",
    items: [
      { href: "/cs-servers", label: "CS 1.6 Sunucusu" },
      { href: "/minecraft-servers", label: "Minecraft Sunucusu" },
    ]
  },
  {
    id: "corporate",
    label: "Kurumsal Tanıtım",
    items: [
      { href: "/demos/corporate", label: "Kurumsal Ana Sayfa" },
      { href: "/demos/corporate-services", label: "Hizmetlerimiz" },
    ]
  }
];

export function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMobileDropdown(null);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleMobileDropdown = (id: string) => {
    setActiveMobileDropdown(activeMobileDropdown === id ? null : id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4" ref={navRef}>
      <div className="container mx-auto max-w-5xl">
        <div className="glass-panel rounded-2xl px-6 py-3 flex items-center justify-between relative">
          
          <Link href="/" className="text-xl font-bold tracking-tight">
            <Logo showText={true} />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Home link */}
            <Link 
              href="/"
              className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/" 
                  ? "text-[color:var(--color-foreground)]" 
                  : "text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)]"
              }`}
            >
              {pathname === "/" && (
                <motion.div
                  layoutId="active-nav-tab"
                  className="absolute inset-0 bg-[color:var(--color-muted)] rounded-xl z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">Ana Sayfa</span>
            </Link>

            {/* Dropdown links */}
            {categories.map((cat) => {
              const isDropdownOpen = activeDropdown === cat.id;
              const isChildActive = cat.items.some(item => pathname === item.href);
              
              return (
                <div 
                  key={cat.id} 
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(cat.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer select-none ${
                      isChildActive 
                        ? "text-[color:var(--color-foreground)]" 
                        : "text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)]"
                    }`}
                  >
                    {isChildActive && (
                      <motion.div
                        layoutId="active-nav-tab"
                        className="absolute inset-0 bg-[color:var(--color-muted)] rounded-xl z-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 relative z-10 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu Overlay */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-52 rounded-2xl glass-panel shadow-xl p-2 z-50 border border-[color:var(--color-border)]"
                      >
                        {cat.items.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-colors ${
                                isActive 
                                  ? "bg-[color:var(--color-foreground)] text-[color:var(--color-background)]" 
                                  : "text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)]"
                              }`}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right Area (Theme Toggle & Hamburger) */}
          <div className="flex items-center gap-3">
            <ThemeToggle inline />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-[color:var(--color-muted)] border border-[color:var(--color-border)] text-[color:var(--color-foreground)] hover:bg-[color:var(--color-border)] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute top-[calc(100%+0.75rem)] left-0 right-0 glass-panel rounded-3xl p-5 md:hidden border border-[color:var(--color-border)] shadow-2xl flex flex-col gap-4 z-40 overflow-hidden"
              >
                {/* Home link */}
                <Link 
                  href="/"
                  className={`px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                    pathname === "/" 
                      ? "bg-[color:var(--color-foreground)] text-[color:var(--color-background)]" 
                      : "text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)]"
                  }`}
                >
                  Ana Sayfa
                </Link>

                {/* Categories */}
                {categories.map((cat) => {
                  const isMobileOpen = activeMobileDropdown === cat.id;
                  const isChildActive = cat.items.some(item => pathname === item.href);

                  return (
                    <div key={cat.id} className="flex flex-col">
                      <button
                        onClick={() => toggleMobileDropdown(cat.id)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-left cursor-pointer transition-colors ${
                          isChildActive 
                            ? "bg-[color:var(--color-muted)] text-[color:var(--color-foreground)]" 
                            : "text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)]"
                        }`}
                      >
                        <span>{cat.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileOpen ? "rotate-180" : ""}`} />
                      </button>

                      {/* Dropdown Items (Collapsible) */}
                      <AnimatePresence initial={false}>
                        {isMobileOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden flex flex-col pl-4 mt-1 gap-1"
                          >
                            {cat.items.map((item) => {
                              const isActive = pathname === item.href;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                                    isActive 
                                      ? "bg-[color:var(--color-foreground)] text-[color:var(--color-background)]" 
                                      : "text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)]"
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </header>
  );
}
