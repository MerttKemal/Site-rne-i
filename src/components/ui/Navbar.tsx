"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Utensils, 
  LayoutGrid,
  Gamepad2, 
  Pickaxe,
  Building2,
  Briefcase,
  Sparkles,
  ArrowRight
} from "lucide-react";

interface DropdownItem {
  href: string;
  label: string;
  description: string;
  icon: any;
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
      { 
        href: "/demos/restaurant", 
        label: "Dijital QR Menü",
        description: "Modern ve interaktif QR menü deneyimi",
        icon: Utensils
      },
      { 
        href: "/demos/restaurant-normal", 
        label: "Klasik Web Menü",
        description: "Geleneksel web tabanlı menü tasarımı",
        icon: LayoutGrid
      },
    ]
  },
  {
    id: "games",
    label: "Oyun Sunucuları",
    items: [
      { 
        href: "/cs-servers", 
        label: "CS 1.6 Sunucusu",
        description: "1000 FPS, Jailbreak, Dust2 ve daha fazlası",
        icon: Gamepad2
      },
      { 
        href: "/minecraft-servers", 
        label: "Minecraft Sunucusu",
        description: "Survival, Skyblock ve Factions dünyaları",
        icon: Pickaxe
      },
    ]
  },
  {
    id: "corporate",
    label: "Kurumsal Tanıtım",
    items: [
      { 
        href: "/demos/corporate", 
        label: "Kurumsal Ana Sayfa",
        description: "Profesyonel şirket tanıtım sayfası",
        icon: Building2
      },
      { 
        href: "/demos/corporate-services", 
        label: "Hizmetlerimiz",
        description: "Detaylı hizmet ve çözüm portföyü",
        icon: Briefcase
      },
    ]
  }
];

export function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-500 ${
        isScrolled ? "py-2" : "py-4"
      }`}
      ref={navRef}
    >
      <div className="container mx-auto max-w-5xl">
        <div className={`rounded-2xl px-5 py-2.5 flex items-center justify-between relative transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 dark:bg-black/60 backdrop-blur-2xl border border-white/20 dark:border-white/[0.06] shadow-xl shadow-black/[0.03] dark:shadow-black/30"
            : "glass-panel"
        }`}>
          
          <Link href="/" className="text-xl font-bold tracking-tight flex-shrink-0">
            <Logo showText={true} />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {/* Home link */}
            <Link 
              href="/"
              className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/" 
                  ? "text-zinc-900 dark:text-white" 
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 hover:dark:text-white"
              }`}
            >
              {pathname === "/" && (
                <motion.div
                  layoutId="active-nav-tab"
                  className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 rounded-xl z-0"
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
                        ? "text-zinc-900 dark:text-white" 
                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 hover:dark:text-white"
                    }`}
                  >
                    {isChildActive && (
                      <motion.div
                        layoutId="active-nav-tab"
                        className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 rounded-xl z-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 relative z-10 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Mega Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[320px] rounded-2xl bg-white dark:bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2 z-50 border border-zinc-200/80 dark:border-zinc-800/80"
                      >
                        {/* Category label */}
                        <div className="px-3 py-2 mb-1">
                          <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                            {cat.label}
                          </span>
                        </div>
                        
                        {cat.items.map((item) => {
                          const isActive = pathname === item.href;
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`flex items-start gap-3 px-3 py-3 rounded-xl text-sm transition-all group ${
                                isActive 
                                  ? "bg-indigo-500/10 dark:bg-indigo-500/10" 
                                  : "hover:bg-zinc-100 dark:hover:bg-zinc-900"
                              }`}
                            >
                              <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                                isActive
                                  ? "bg-indigo-500/20 text-indigo-500"
                                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-600 group-hover:dark:text-indigo-400"
                              }`}>
                                <Icon className="w-4.5 h-4.5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className={`font-semibold tracking-tight ${
                                  isActive ? "text-indigo-500" : "text-zinc-800 dark:text-zinc-200"
                                }`}>
                                  {item.label}
                                </div>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
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

          {/* Right Area */}
          <div className="flex items-center gap-2">
            <ThemeToggle inline />
            
            {/* CTA Button - Desktop only */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 transition-shadow cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Teklif Al
            </motion.button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
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
                className="absolute top-[calc(100%+0.75rem)] left-0 right-0 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 rounded-3xl p-5 md:hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col gap-3 z-40 overflow-hidden"
              >
                {/* Home link */}
                <Link 
                  href="/"
                  className={`px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                    pathname === "/" 
                      ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black" 
                      : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"
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
                            ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white" 
                            : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"
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
                            className="overflow-hidden flex flex-col pl-3 mt-1 gap-1"
                          >
                            {cat.items.map((item) => {
                              const isActive = pathname === item.href;
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs transition-colors ${
                                    isActive 
                                      ? "bg-indigo-500/10 text-indigo-400 font-bold" 
                                      : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-semibold"
                                  }`}
                                >
                                  <Icon className="w-4.5 h-4.5 flex-shrink-0" />
                                  <div>
                                    <div>{item.label}</div>
                                    <p className="text-[10px] opacity-60 mt-0.5">{item.description}</p>
                                  </div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Mobile CTA */}
                <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80">
                  <button
                    onClick={scrollToContact}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold shadow-md cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    Teklif Al
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </header>
  );
}
