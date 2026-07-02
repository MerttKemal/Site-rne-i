"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { 
  CheckCircle2, 
  Loader2, 
  AlertCircle, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Sparkles
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "E-Posta",
    value: "kemalinho1905@gmail.com",
    href: "mailto:kemalinho1905@gmail.com",
    color: "blue",
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    value: "7/24 Destek",
    href: null,
    color: "purple",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
};

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
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:var(--color-muted)]/30" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[300px] bg-purple-500/[0.03] rounded-full blur-[100px]" />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-bold text-indigo-400 uppercase tracking-widest">
            <Send className="w-3.5 h-3.5" />
            İletişim
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Sisteminizi Yenilemeye <span className="gradient-text">Hazır mısınız?</span>
          </h2>
          <p className="text-lg text-[color:var(--color-muted-foreground)] max-w-2xl mx-auto">
            Hemen iletişime geçin, işletmenize özel dijital menü ve altyapı çözümlerini detaylandıralım.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left - Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const colors = colorMap[info.color];
              const content = (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`group p-5 rounded-2xl bg-[color:var(--color-card)] border border-[color:var(--color-border)] hover:${colors.border} transition-all duration-300 hover-glow flex items-center gap-4`}
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[color:var(--color-muted-foreground)] font-medium mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-sm font-bold text-[color:var(--color-foreground)]">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              );

              return info.href ? (
                <a key={info.label} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-5 rounded-2xl bg-[color:var(--color-card)] border border-[color:var(--color-border)] overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[color:var(--color-muted-foreground)] font-medium">Konum</p>
                  <p className="text-sm font-bold">Türkiye</p>
                </div>
              </div>
              <div className="w-full h-28 rounded-xl bg-[color:var(--color-muted)] overflow-hidden relative">
                <div className="absolute inset-0 grid-background opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse-ring" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-indigo-500/30 animate-ping" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-[color:var(--color-card)] rounded-3xl p-8 md:p-10 shadow-2xl border border-[color:var(--color-border)] hover-glow">
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Form Header */}
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-indigo-400" />
                    <h3 className="text-lg font-bold">Ücretsiz Teklif Alın</h3>
                  </div>
                  
                  {errorMessage && (
                    <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 p-4 rounded-xl text-red-500 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ad Soyad</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        className="w-full h-12 px-4 rounded-xl border border-[color:var(--color-border)] bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-[color:var(--color-foreground)]"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">E-posta</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        className="w-full h-12 px-4 rounded-xl border border-[color:var(--color-border)] bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-[color:var(--color-foreground)]"
                        placeholder="ornek@isletme.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Telefon Numarası</label>
                      <input 
                        required
                        name="phone"
                        type="tel" 
                        className="w-full h-12 px-4 rounded-xl border border-[color:var(--color-border)] bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-[color:var(--color-foreground)]"
                        placeholder="0555 555 55 55"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">İşletme Adı</label>
                      <input 
                        name="company"
                        type="text" 
                        className="w-full h-12 px-4 rounded-xl border border-[color:var(--color-border)] bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-[color:var(--color-foreground)]"
                        placeholder="Kafe / Restoran Adı"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mesajınız</label>
                    <textarea 
                      required
                      name="message"
                      className="w-full h-32 p-4 rounded-xl border border-[color:var(--color-border)] bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none text-[color:var(--color-foreground)]"
                      placeholder="İhtiyaçlarınızdan bahsedin..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting} 
                    className="w-full text-base h-14 select-none rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 font-bold gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Gönderiliyor...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Teklif İste
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
