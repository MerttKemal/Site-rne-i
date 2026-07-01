"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  const navigateToRestaurantDemo = () => {
    router.push("/demos/restaurant");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-muted)]/50 backdrop-blur-sm text-sm font-medium"
          >
            Frontend Geliştirici & Sistem Çözümleri Uzmanı
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            İşletmenizin Dijital Yüzünü <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Yeniliyoruz</span>
          </h1>
          
          <p className="text-xl text-[color:var(--color-muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            Hızlı, sorunsuz ve yeni nesil web çözümleriyle işletmenizi geleceğe taşıyın. 
            Performans odaklı mimariler ve göz alıcı tasarımlar.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button size="lg" onClick={navigateToRestaurantDemo} className="w-full sm:w-auto">
              Dijital Menüyü İncele
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact} className="w-full sm:w-auto">
              İletişime Geç
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
