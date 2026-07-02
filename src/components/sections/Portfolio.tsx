"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/mockData";
import * as Icons from "lucide-react";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform,
        transition: "transform 0.2s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Mouse follow glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(99, 102, 241, 0.08), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

const skillLevels: { [key: string]: number } = {
  "Modern Frontend Geliştirme": 95,
  "Sunucu ve VDS Optimizasyonu": 90,
  "Docker ve CI/CD Süreçleri": 88,
  "Performans İyileştirmeleri": 92,
};

export function Portfolio() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="portfolio" className="py-28 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-[color:var(--color-muted)]/20" />
      <div className="absolute inset-0 dot-pattern" />
      
      {/* Decorative orbs */}
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-indigo-500/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-[10%] left-[10%] w-[250px] h-[250px] bg-purple-500/[0.04] rounded-full blur-[80px]" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-bold text-indigo-400 uppercase tracking-widest">
              <Icons.Layers className="w-3.5 h-3.5" />
              Yetkinlikler
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Yetenekler & <span className="gradient-text-blue">Çözümler</span>
            </h2>
            <p className="text-lg text-[color:var(--color-muted-foreground)] leading-relaxed">
              Modern web teknolojileri ve güçlü sunucu mimarileriyle uçtan uca dijital dönüşüm sağlıyorum.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {portfolioData.map((data) => {
            const Icon = (Icons as any)[data.icon] || Icons.Code;
            const level = skillLevels[data.title] || 85;
            return (
              <motion.div
                key={data.id}
                variants={item}
              >
                <TiltCard className="group relative p-8 rounded-2xl bg-[color:var(--color-card)] border border-[color:var(--color-border)] hover:border-indigo-500/30 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/[0.07] transition-all duration-500 overflow-hidden gradient-border">
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 w-14 h-14 bg-indigo-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/15 transition-all duration-300">
                        <Icon className="w-7 h-7" suppressHydrationWarning />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
                      {data.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-[color:var(--color-muted-foreground)] leading-relaxed mb-6">
                      {data.description}
                    </p>

                    {/* Skill Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-[color:var(--color-muted-foreground)] font-medium">Uzmanlık Seviyesi</span>
                        <span className="text-indigo-400 font-bold">{level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[color:var(--color-muted)] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                        />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
