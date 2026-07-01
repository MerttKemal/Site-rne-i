"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { qrMenuData, Category } from "@/data/mockData";
import { Search, MapPin, Clock, Phone, Heart, Award } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const categories: Category[] = ["Tümü", "Yiyecekler", "İçecekler", "Tatlılar", "Nargile"];

export default function RestaurantNormalMenu() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tümü");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  // Filtering
  const filteredItems = qrMenuData.filter((item) => {
    const matchesCategory = activeCategory === "Tümü" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-[color:var(--color-background)] pt-24 pb-32">
      
      {/* Hero Section */}
      <div className="relative h-96 w-full mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop" 
            alt="Restoran" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-background)] via-black/20 to-transparent" />
        </div>

        <div className="container relative z-10 h-full px-4 mx-auto max-w-5xl flex flex-col justify-end pb-8">
          <div className="flex items-center gap-3 mb-3">
            <Logo className="w-8 h-8" showText={false} />
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Klasik Gurme Deneyimi
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            M-Restoran & Lounge
          </h1>
          
          {/* Quick Info Bar */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Kordonboyu Cad. No: 35, İzmir</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Her gün: 09:00 - 02:00</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+90 (232) 555 4545</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto max-w-5xl">
        
        {/* Intro Text & Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">Özenle Seçilmiş Lezzetler</h2>
            <p className="text-sm text-[color:var(--color-muted-foreground)] leading-relaxed">
              Şeflerimizin taze malzemelerle hazırladığı enfes lezzetleri, modern sunumlarla masanıza getiriyoruz.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--color-muted-foreground)]" />
            <input 
              type="text" 
              placeholder="Menüde ara..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-11 pr-4 rounded-xl bg-[color:var(--color-card)] border border-[color:var(--color-border)] focus:ring-2 focus:ring-emerald-500 outline-none text-sm text-[color:var(--color-foreground)] transition-all"
            />
          </div>
        </div>

        {/* Categories Tab list */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl whitespace-nowrap text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-[color:var(--color-foreground)] text-[color:var(--color-background)] shadow-md"
                  : "bg-[color:var(--color-card)] hover:bg-[color:var(--color-muted)] text-[color:var(--color-foreground)] border border-[color:var(--color-border)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Classic Menu List (Two-column layout matching fine dining menus) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isFav = favorites.includes(item.id);
              // Mock chef selection
              const isChefSpecial = item.id % 4 === 0;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-[color:var(--color-card)] border border-transparent hover:border-[color:var(--color-border)] transition-all group"
                >
                  {/* Food Thumb */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-bold text-base text-[color:var(--color-foreground)] group-hover:text-emerald-500 transition-colors">
                            {item.name}
                          </h3>
                          {isChefSpecial && (
                            <span title="Şefin Seçimi">
                              <Award className="w-4.5 h-4.5 text-amber-500" />
                            </span>
                          )}
                        </div>
                        <span className="font-extrabold text-sm text-emerald-500 font-mono tracking-tight whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      
                      <p className="text-xs text-[color:var(--color-muted-foreground)] leading-relaxed mt-1.5 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <span className="text-[10px] uppercase font-bold text-[color:var(--color-muted-foreground)] bg-[color:var(--color-muted)] px-2 py-0.5 rounded border border-[color:var(--color-border)]">
                        {item.category}
                      </span>

                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className="text-[color:var(--color-muted-foreground)] hover:text-red-500 transition-colors p-1"
                      >
                        <Heart className={`w-4 h-4 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {filteredItems.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full text-center py-20 text-[color:var(--color-muted-foreground)]"
              >
                <Search className="w-10 h-10 mx-auto mb-3 opacity-20" />
                <p className="text-lg">Kriterlere uygun menü öğesi bulunamadı.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer info */}
        <div className="mt-20 border-t border-[color:var(--color-border)] pt-8 text-center text-xs text-[color:var(--color-muted-foreground)] max-w-lg mx-auto">
          <p className="mb-2">⚠️ Alerjiniz olan besinleri sipariş vermeden önce lütfen personelimize bildiriniz.</p>
          <p>Fiyatlarımıza KDV dahildir. Kuver ücreti alınmamaktadır.</p>
        </div>

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
    </main>
  );
}
