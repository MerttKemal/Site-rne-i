"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { qrMenuData, Category } from "@/data/mockData";
import { Button } from "@/components/ui/Button";
import { Search, ShoppingBag, X, Plus, Minus, Info } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const categories: Category[] = ["Tümü", "Yiyecekler", "İçecekler", "Tatlılar", "Nargile"];

export default function RestaurantDemo() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tümü");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [cart, setCart] = useState<{product: any, quantity: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filtering
  const filteredItems = qrMenuData.filter((item) => {
    const matchesCategory = activeCategory === "Tümü" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Cart Functions
  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setSelectedProduct(null); // Close modal on add
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === productId);
      if (existing && existing.quantity > 1) {
        return prev.map(item => item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item);
      }
      return prev.filter(item => item.product.id !== productId);
    });
  };

  const totalCartPrice = cart.reduce((total, item) => {
    const price = parseInt(item.product.price.replace(" ₺", ""));
    return total + (price * item.quantity);
  }, 0);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <main className="min-h-screen bg-[color:var(--color-background)] pt-24 pb-32">
      <div className="container px-4 mx-auto max-w-6xl">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Logo className="w-9 h-9" showText={false} />
              <h1 className="text-4xl font-extrabold">M-Restoran</h1>
            </div>
            <p className="text-[color:var(--color-muted-foreground)]">Masadan ayrılmadan kusursuz sipariş verin.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[color:var(--color-muted-foreground)]" />
            <input 
              type="text" 
              placeholder="Ürün veya içerik ara..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-4 rounded-2xl bg-[color:var(--color-card)] border border-[color:var(--color-border)] focus:ring-2 focus:ring-blue-500 outline-none text-[color:var(--color-foreground)] transition-all"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl whitespace-nowrap font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[color:var(--color-foreground)] text-[color:var(--color-background)] shadow-lg scale-105"
                  : "bg-[color:var(--color-card)] hover:bg-[color:var(--color-muted)] text-[color:var(--color-foreground)] border border-[color:var(--color-border)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-[color:var(--color-card)] rounded-3xl border border-[color:var(--color-border)] overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProduct(item)}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                    <span className="text-white font-bold text-lg drop-shadow-md">
                      {item.price}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  <p className="text-[color:var(--color-muted-foreground)] text-sm line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-500 text-sm font-medium">
                    <Info className="w-4 h-4 mr-1" /> Detayları Gör
                  </div>
                </div>
              </motion.div>
            ))}
            
            {filteredItems.length === 0 && (
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

      {/* Floating Cart Button (Mobile) */}
      <AnimatePresence>
        {cartItemCount > 0 && !isCartOpen && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-sm px-4"
          >
            <button 
              onClick={() => setIsCartOpen(true)}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_8px_30px_rgb(16,185,129,0.3)] rounded-2xl p-4 flex items-center justify-between transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {cartItemCount}
                </div>
                <span className="font-semibold text-lg">Sepeti Gör</span>
              </div>
              <span className="font-bold text-xl">{totalCartPrice} ₺</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm p-0 md:p-4">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="w-full max-w-xl bg-[color:var(--color-card)] md:rounded-3xl rounded-t-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              <div className="relative h-64 sm:h-80 w-full flex-shrink-0">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 backdrop-blur-md cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                  <span className="text-xl font-bold text-emerald-500">{selectedProduct.price}</span>
                </div>
                <p className="text-[color:var(--color-muted-foreground)] text-lg mb-8">
                  {selectedProduct.description}
                </p>
                <Button 
                  size="lg" 
                  className="w-full h-14 text-lg bg-emerald-500 hover:bg-emerald-600 text-white border-0"
                  onClick={() => addToCart(selectedProduct)}
                >
                  <Plus className="w-5 h-5 mr-2" /> Sepete Ekle
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-md bg-[color:var(--color-background)] h-full flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b border-[color:var(--color-border)] flex justify-between items-center bg-[color:var(--color-card)]">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-6 h-6" />
                  <h2 className="text-2xl font-bold">Sepetim</h2>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 bg-[color:var(--color-muted)] rounded-full hover:bg-[color:var(--color-border)] cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-[color:var(--color-muted-foreground)]">
                    <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                    <p className="text-lg">Sepetiniz şu an boş.</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.product.id} className="flex gap-4 items-center bg-[color:var(--color-card)] p-4 rounded-2xl border border-[color:var(--color-border)]">
                      <img src={item.product.image} className="w-20 h-20 rounded-xl object-cover" alt="" />
                      <div className="flex-1">
                        <h4 className="font-bold">{item.product.name}</h4>
                        <p className="text-emerald-500 font-medium">{item.product.price}</p>
                      </div>
                      <div className="flex flex-col items-center gap-2 bg-[color:var(--color-muted)] rounded-xl p-1">
                        <button onClick={() => addToCart(item.product)} className="p-1 rounded-md hover:bg-[color:var(--color-background)] cursor-pointer">
                          <Plus className="w-4 h-4" />
                        </button>
                        <span className="font-medium text-sm w-6 text-center">{item.quantity}</span>
                        <button onClick={() => removeFromCart(item.product.id)} className="p-1 rounded-md hover:bg-[color:var(--color-background)] cursor-pointer">
                          <Minus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 bg-[color:var(--color-card)] border-t border-[color:var(--color-border)]">
                  <div className="flex justify-between items-center mb-6 text-lg font-bold">
                    <span>Toplam:</span>
                    <span className="text-2xl text-emerald-500">{totalCartPrice} ₺</span>
                  </div>
                  <Button size="lg" className="w-full h-16 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg border-0">
                    Siparişi Tamamla
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
