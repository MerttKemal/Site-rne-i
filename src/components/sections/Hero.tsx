"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { useRouter } from "next/navigation";
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react";

const rotatingWords = ["Yeniliyoruz", "Güçlendiriyoruz", "Dönüştürüyoruz", "İleri Taşıyoruz"];

export function Hero() {
  const router = useRouter();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navigateToRestaurantDemo = () => {
    router.push("/demos/restaurant");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Primary orb */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[140px] animate-glow-pulse" />
        {/* Secondary orb */}
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[130px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
        {/* Accent orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px] animate-glow-pulse-subtle" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-background opacity-30" />

        {/* Floating decorative elements */}
        <div className="absolute top-[20%] right-[15%] w-3 h-3 rounded-full bg-indigo-400/30 animate-float" />
        <div className="absolute top-[60%] left-[10%] w-2 h-2 rounded-full bg-purple-400/30 animate-float-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[30%] left-[20%] w-4 h-4 rounded-full bg-blue-400/20 animate-float-reverse" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-[30%] right-[20%] w-2.5 h-2.5 rounded-full bg-violet-400/25 animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Morphing blob */}
        <div className="absolute top-1/3 right-1/3 w-[200px] h-[200px] bg-gradient-to-br from-indigo-500/[0.07] to-purple-500/[0.07] animate-morph" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Badge with shimmer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-4 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm text-sm font-medium shimmer-overlay"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" suppressHydrationWarning />
            <span className="text-indigo-300">Frontend Geliştirici & Sistem Çözümleri Uzmanı</span>
          </motion.div>
          
          {/* Main Heading with Typewriter Effect */}
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]">
              <span className="block mb-2">İşletmenizin Dijital</span>
              <span className="block mb-0.5">Yüzünü</span>
              <span className="relative inline-flex items-center align-middle whitespace-nowrap -translate-y-2.5 md:-translate-y-5">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                    transition={{ duration: 0.3 }}
                    className="gradient-text inline-block px-1 py-2"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-[color:var(--color-muted-foreground)] max-w-2xl mx-auto leading-relaxed"
          >
            Hızlı, sorunsuz ve yeni nesil web çözümleriyle işletmenizi geleceğe taşıyın. 
            Performans odaklı mimariler ve göz alıcı tasarımlar.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button 
              size="lg" 
              onClick={navigateToRestaurantDemo} 
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-shadow duration-300 px-8 h-14 text-base font-semibold rounded-2xl gap-2"
            >
              Dijital Menüyü İncele
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact} 
              className="w-full sm:w-auto h-14 text-base font-semibold rounded-2xl px-8 border-[color:var(--color-border)] hover:border-indigo-500/30 hover:bg-indigo-500/5"
            >
              İletişime Geç
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center gap-6 pt-4 text-xs text-[color:var(--color-muted-foreground)]"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              7/24 Destek
            </span>
            <span className="w-px h-3 bg-[color:var(--color-border)]" />
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              %99.9 Uptime
            </span>
            <span className="w-px h-3 bg-[color:var(--color-border)]" />
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              SSL Güvenlik
            </span>
          </motion.div>
        </motion.div>
      </div>



      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToPortfolio}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative z-10 mt-8 mb-4 flex flex-col items-center gap-2 text-[color:var(--color-muted-foreground)] cursor-pointer group"
      >
        <span className="text-xs font-medium tracking-wider uppercase group-hover:text-indigo-400 transition-colors">
          Keşfet
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 group-hover:text-indigo-400 transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}
