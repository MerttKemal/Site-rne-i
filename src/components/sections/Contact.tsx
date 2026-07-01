"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "72abe4d8-ecb1-4ef6-bdaf-c5a02d69b7e5");
    formData.append("subject", "Yeni İletişim Formu Talebi - M-Menu");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.message || "Form gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      setErrorMessage("Bağlantı hatası oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[color:var(--color-muted)]/50 z-0" />
      
      <div className="container relative z-10 px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Sisteminizi Yenilemeye Hazır mısınız?</h2>
          <p className="text-lg text-[color:var(--color-muted-foreground)]">
            Hemen iletişime geçin, işletmenize özel dijital menü ve altyapı çözümlerini detaylandıralım.
          </p>
        </div>

        <div className="bg-[color:var(--color-card)] rounded-3xl p-8 md:p-12 shadow-2xl border border-[color:var(--color-border)]">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500">
                <CheckCircle2 className="w-10 h-10" suppressHydrationWarning />
              </div>
              <h3 className="text-2xl font-bold mb-2">Talebiniz Alındı!</h3>
              <p className="text-[color:var(--color-muted-foreground)]">
                En kısa sürede sizinle iletişime geçeceğim. Teşekkür ederiz.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 p-4 rounded-xl text-red-500 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ad Soyad</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    className="w-full h-12 px-4 rounded-xl border border-[color:var(--color-border)] bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-[color:var(--color-foreground)]"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">E-posta</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    className="w-full h-12 px-4 rounded-xl border border-[color:var(--color-border)] bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-[color:var(--color-foreground)]"
                    placeholder="ornek@isletme.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefon Numarası</label>
                  <input 
                    required
                    name="phone"
                    type="tel" 
                    className="w-full h-12 px-4 rounded-xl border border-[color:var(--color-border)] bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-[color:var(--color-foreground)]"
                    placeholder="0555 555 55 55"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">İşletme Adı</label>
                  <input 
                    name="company"
                    type="text" 
                    className="w-full h-12 px-4 rounded-xl border border-[color:var(--color-border)] bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-[color:var(--color-foreground)]"
                    placeholder="Kafe / Restoran Adı"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Mesajınız</label>
                <textarea 
                  required
                  name="message"
                  className="w-full h-32 p-4 rounded-xl border border-[color:var(--color-border)] bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-[color:var(--color-foreground)]"
                  placeholder="İhtiyaçlarınızdan bahsedin..."
                />
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full text-lg h-14 select-none">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Gönderiliyor...
                  </span>
                ) : (
                  "Teklif İste"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
