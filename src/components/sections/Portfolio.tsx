"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/mockData";
import * as Icons from "lucide-react";

export function Portfolio() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="portfolio" className="py-24 bg-[color:var(--color-muted)]/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Yetenekler & Çözümler</h2>
          <p className="text-lg text-[color:var(--color-muted-foreground)]">
            Modern web teknolojileri ve güçlü sunucu mimarileriyle uçtan uca dijital dönüşüm sağlıyorum.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {portfolioData.map((data) => {
            const Icon = (Icons as any)[data.icon] || Icons.Code;
            return (
              <motion.div
                key={data.id}
                variants={item}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-[color:var(--color-card)] border border-[color:var(--color-border)] hover:border-blue-500/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                    <Icon className="w-7 h-7" suppressHydrationWarning />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{data.title}</h3>
                  <p className="text-[color:var(--color-muted-foreground)] leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
