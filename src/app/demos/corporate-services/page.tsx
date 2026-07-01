"use client";

import { motion } from "framer-motion";
import { corporateServices } from "@/data/mockData";
import { Button } from "@/components/ui/Button";
import * as Icons from "lucide-react";
import Link from "next/link";

export default function CorporateServices() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-[color:var(--color-background)] pt-24 pb-32">
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Kurumsal Hizmetlerimiz
          </h1>
          <p className="text-lg text-[color:var(--color-muted-foreground)] leading-relaxed">
            Dijital dönüşüm süreçlerinizde size güç katacak, yüksek teknoloji odaklı yazılım ve altyapı çözümlerimiz.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >
          {corporateServices.map((service) => {
            const Icon = (Icons as any)[service.icon] || Icons.HelpCircle;
            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group relative p-6 rounded-2xl bg-[color:var(--color-card)] border border-[color:var(--color-border)] hover:border-blue-500/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                    <Icon className="w-6 h-6" suppressHydrationWarning />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[color:var(--color-muted-foreground)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Workflow Timeline Section */}
        <section className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Nasıl Çalışıyoruz?</h2>
            <p className="text-sm text-[color:var(--color-muted-foreground)] leading-relaxed">
              Fikirlerinizin başarılı birer dijital ürüne dönüşmesi için uyguladığımız adım adım iş geliştirme sürecimiz.
            </p>
          </div>

          <div className="relative border-l border-[color:var(--color-border)] ml-4 md:ml-32 pl-8 space-y-12 py-2">
            {[
              {
                step: "01",
                title: "Keşif & Analiz",
                desc: "İlk aşamada ihtiyaçlarınızı, hedeflerinizi ve mevcut altyapınızı analiz ederek projenizin yol haritasını çıkarıyoruz."
              },
              {
                step: "02",
                title: "Planlama & Mimari Tasarım",
                desc: "Kullanılacak teknolojileri belirliyor, veritabanı şemalarını çiziyor ve yüksek performanslı sunucu mimarisini tasarlıyoruz."
              },
              {
                step: "03",
                title: "Geliştirme & Test",
                desc: "Projenizi en modern kodlama pratikleriyle yazıyor, ardından hız, güvenlik ve uyumluluk testlerinden geçiriyoruz."
              },
              {
                step: "04",
                title: "Dağıtım & 7/24 İzleme",
                desc: "Uygulamayı bulut sunucularına sıfır kesintiyle dağıtıyor, ardından olası hatalara karşı 7/24 gözetim altında tutuyoruz."
              }
            ].map((node, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[color:var(--color-background)] border-4 border-blue-500 flex items-center justify-center z-10 shadow-sm" />
                
                <div className="bg-[color:var(--color-card)] border border-[color:var(--color-border)] p-6 rounded-2xl max-w-2xl shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-blue-500 tracking-wider">
                      ADIM {node.step}
                    </span>
                    <h3 className="font-bold text-base text-[color:var(--color-foreground)]">
                      {node.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[color:var(--color-muted-foreground)] leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project CTA Banner */}
        <section className="bg-gradient-to-r from-blue-500/10 to-indigo-500/5 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Yeni Bir Projeniz mi Var?</h2>
          <p className="text-sm text-[color:var(--color-muted-foreground)] max-w-xl mx-auto mb-8 leading-relaxed">
            Hizmetlerimiz hakkında detaylı bilgi edinmek veya projeniz için fiyat teklifi almak istiyorsanız, hemen bizimle iletişime geçin.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg px-8 rounded-xl font-bold">
              Teklif İste & Ulaş
            </Button>
          </Link>
        </section>

      </div>
    </main>
  );
}
