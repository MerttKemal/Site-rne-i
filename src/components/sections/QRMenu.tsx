"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { qrMenuData, Category } from "@/data/mockData";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Search } from "lucide-react";

const categories: Category[] = ["Tümü", "Yiyecekler", "İçecekler", "Tatlılar", "Nargile"];

export function QRMenu() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tümü");

  const filteredItems = qrMenuData.filter(
    (item) => activeCategory === "Tümü" || item.category === activeCategory
  );

  return (
    <section id="qr-menu" className="py-24 relative min-h-screen flex flex-col">
      <div className="container px-4 mx-auto mb-12 text-center flex flex-col items-center">
        <Logo className="w-10 h-10" showText={false} />
        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">M-Menu Dijital Menü</h2>
        <p className="text-[color:var(--color-muted-foreground)] max-w-2xl mx-auto">
          Müşterilerinize hızlı, kesintisiz ve şık bir sipariş deneyimi sunun. (Offline mod destekli, anında senkronize)
        </p>
      </div>

      <div className="container px-4 mx-auto flex-1 flex flex-col lg:flex-row gap-8">
        {/* Categories Sidebar/Top Menu */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 hide-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-xl whitespace-nowrap text-left font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[color:var(--color-foreground)] text-[color:var(--color-background)] shadow-md"
                      : "bg-[color:var(--color-card)] hover:bg-[color:var(--color-muted)] text-[color:var(--color-foreground)] border border-[color:var(--color-border)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[color:var(--color-card)] rounded-3xl border border-[color:var(--color-border)] overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-[color:var(--color-muted-foreground)] text-sm mb-6 flex-1">
                        {item.description}
                      </p>
                      <Button variant="outline" className="w-full border-blue-500/50 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                        İncele
                      </Button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="col-span-full text-center py-24 text-[color:var(--color-muted-foreground)]"
                >
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p className="text-xl">Aramanıza uygun ürün bulunamadı.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mock Status Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[color:var(--color-card)] px-5 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[color:var(--color-border)]">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </div>
        <span className="text-sm font-medium text-[color:var(--color-foreground)] tracking-tight">Sistem Aktif & Senkronize</span>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
