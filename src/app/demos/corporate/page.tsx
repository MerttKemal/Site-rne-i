"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  corporateStats, 
  corporateTeam, 
  corporateTestimonials 
} from "@/data/mockData";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, Heart, TrendingUp, Users2, ShieldCheck, Cpu } from "lucide-react";

export default function CorporateLanding() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <main className="min-h-screen bg-[color:var(--color-background)] pt-24 pb-32">
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-5xl">
        
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-20 pt-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Cpu className="w-3.5 h-3.5" />
            Yeni Nesil Kurumsal Teknolojiler
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Geleceğin Dijital Altyapısını <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Bugünden Kuruyoruz</span>
          </h1>
          <p className="text-lg text-[color:var(--color-muted-foreground)] max-w-2xl mx-auto leading-relaxed mb-8">
            Bulut bilişim, yüksek güvenlikli sunucu optimizasyonları ve kusursuz web sistemleri ile işletmenizi geleceğe hazırlıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/demos/corporate-services">
              <Button size="lg" className="h-13 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg flex items-center gap-2">
                Hizmetlerimizi İnceleyin
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="/#contact">
              <Button size="lg" variant="outline" className="h-13 px-8 rounded-xl">
                Bize Ulaşın
              </Button>
            </a>
          </div>
        </section>

        {/* Corporate Stats Banner */}
        <section className="bg-[color:var(--color-card)] rounded-3xl border border-[color:var(--color-border)] p-8 md:p-12 mb-24 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {corporateStats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-bold text-[color:var(--color-muted-foreground)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hakkımızda / Our Values Section */}
        <section className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Değerlerimiz & Vizyonumuz</h2>
            <p className="text-sm text-[color:var(--color-muted-foreground)] leading-relaxed">
              Kalite, kesintisiz güvenlik ve sürdürülebilirlik ilkelerimizle iş ortaklarımıza en iyi çözümleri sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Maksimum Güvenlik",
                desc: "Sistemlerinizdeki verileri korumak ve olası siber saldırılara karşı kalkan oluşturmak için en güncel güvenlik protokollerini entegre ediyoruz."
              },
              {
                icon: TrendingUp,
                title: "Yüksek Performans",
                desc: "Hız bizim için her şeydir. Core Web Vitals optimizasyonlarıyla sitenizi ve sunucularınızı ışık hızına ulaştırıyoruz."
              },
              {
                icon: Users2,
                title: "Uçtan Uca Destek",
                desc: "Projelerimizin yayına alınmasıyla işimiz bitmez. Sunucularınızın 7/24 aktif kalması için sürekli izleme ve destek sunuyoruz."
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-[color:var(--color-card)] p-6 rounded-2xl border border-[color:var(--color-border)] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-xs text-[color:var(--color-muted-foreground)] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Profesyonel Ekibimiz</h2>
            <p className="text-sm text-[color:var(--color-muted-foreground)] leading-relaxed">
              Teknolojiyi yakından takip eden, her biri kendi alanında uzman tecrübeli kadromuzla tanışın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {corporateTeam.map((member) => (
              <div 
                key={member.id} 
                className="bg-[color:var(--color-card)] rounded-2xl border border-[color:var(--color-border)] p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-500/30">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-base">{member.name}</h3>
                <p className="text-xs text-[color:var(--color-muted-foreground)] font-medium mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Müşteri Yorumları</h2>
            <p className="text-sm text-[color:var(--color-muted-foreground)] leading-relaxed">
              Birlikte çalıştığımız değerli markaların ve iş ortaklarımızın hakkımızdaki görüşleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporateTestimonials.map((t) => (
              <div 
                key={t.id}
                className="bg-[color:var(--color-card)] border border-[color:var(--color-border)] p-6 rounded-2xl flex flex-col justify-between relative shadow-sm"
              >
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs italic text-[color:var(--color-muted-foreground)] leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-sm">{t.author}</h4>
                  <p className="text-[10px] text-[color:var(--color-muted-foreground)] font-medium mt-0.5">
                    {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
