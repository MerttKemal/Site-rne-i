"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  mcServersData, 
  mcVipPackages, 
  mcServerRules, 
  mcServerFaq 
} from "@/data/mockData";
import { Button } from "@/components/ui/Button";
import { 
  Server, 
  Shield, 
  BookOpen, 
  Copy, 
  Check, 
  ExternalLink, 
  Users, 
  Layers, 
  CheckCircle2, 
  ChevronDown,
  X,
  Phone,
  MessageCircle,
  HelpCircle,
  Loader2,
  AlertCircle
} from "lucide-react";

type Tab = "servers" | "vip" | "faq";

export default function MinecraftServersHub() {
  const [activeTab, setActiveTab] = useState<Tab>("servers");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<any | null>(null);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  
  // Purchase Modal Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyIp = (ip: string, id: number) => {
    navigator.clipboard.writeText(ip);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "72abe4d8-ecb1-4ef6-bdaf-c5a02d69b7e5");
    formData.append("subject", `Minecraft VIP Başvurusu - ${selectedPackage?.name || "Genel"}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.message || "Başvuru gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      setErrorMessage("Bağlantı hatası oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-[color:var(--color-background)] pt-24 pb-32">
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Minecraft Sunucuları Aktif & Online
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            CraftTR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-500">Network</span>
          </h1>
          <p className="text-lg text-[color:var(--color-muted-foreground)] leading-relaxed">
            Gelişmiş Towny, Survival ve Skyblock dünyalarında arkadaşlarınızla imparatorluğunuzu kurun. VIP ayrıcalıklarıyla oyunu domine edin.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-[color:var(--color-card)] p-1.5 rounded-2xl border border-[color:var(--color-border)] shadow-md w-full max-w-md">
            {[
              { id: "servers", label: "Dünyalar", icon: Server },
              { id: "vip", label: "VIP Market", icon: Shield },
              { id: "faq", label: "Kurallar & SSS", icon: BookOpen },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    isActive 
                      ? "bg-[color:var(--color-foreground)] text-[color:var(--color-background)] shadow-sm font-semibold scale-[1.02]" 
                      : "text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          {activeTab === "servers" && (
            <motion.div
              key="servers"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {mcServersData.map((server) => (
                <div 
                  key={server.id} 
                  className="bg-[color:var(--color-card)] rounded-3xl border border-[color:var(--color-border)] hover:border-purple-500/30 overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group"
                >
                  {/* Image Header */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img 
                      src={server.mapImage} 
                      alt={server.mode} 
                      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    
                    {/* Status Tag */}
                    <div className="absolute top-4 left-4">
                      {server.status === "online" ? (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          Aktif
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-400 text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          Bakımda
                        </span>
                      )}
                    </div>

                    {/* Mode Tag */}
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full bg-purple-500/20 backdrop-blur-md text-purple-300 text-[10px] font-bold border border-purple-500/30 uppercase">
                        {server.mode}
                      </span>
                    </div>

                    {/* Version & Players info overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="flex items-center gap-1 text-white">
                        <Layers className="w-4 h-4 text-purple-400" />
                        <span className="font-mono text-xs font-semibold drop-shadow-sm">
                          {server.version}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-white">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-bold drop-shadow-sm">
                          {server.players}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold mb-3 leading-tight tracking-tight group-hover:text-purple-400 transition-colors">
                        {server.name}
                      </h3>
                      
                      {/* IP box */}
                      <div className="flex items-center justify-between bg-[color:var(--color-muted)] border border-[color:var(--color-border)] p-3 rounded-xl mb-4">
                        <code className="text-xs font-mono font-bold tracking-wider text-[color:var(--color-foreground)] select-all">
                          {server.ip}
                        </code>
                        <button
                          onClick={() => handleCopyIp(server.ip, server.id)}
                          className="p-1.5 hover:bg-[color:var(--color-background)] rounded-lg text-[color:var(--color-muted-foreground)] hover:text-purple-400 transition-colors cursor-pointer"
                        >
                          {copiedId === server.id ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleCopyIp(server.ip, server.id)}
                      variant="outline"
                      className="w-full text-xs font-semibold h-10 rounded-xl"
                    >
                      {copiedId === server.id ? "IP Adresi Kopyalandı!" : "Sunucu Adresini Kopyala"}
                    </Button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "vip" && (
            <motion.div
              key="vip"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Info Alert */}
              <div className="bg-gradient-to-r from-purple-500/10 to-emerald-500/5 border border-purple-500/20 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">🏰 Sezon Başlangıcı VIP Fırsatları</h3>
                  <p className="text-sm text-[color:var(--color-muted-foreground)]">
                    Yeni sezona özel tüm VIP üyeliklerde geçerli %15 indirim fırsatını kaçırmayın. Ödemeler anında oyuna yansır.
                  </p>
                </div>
                <Button 
                  onClick={() => {
                    const mvpPackage = mcVipPackages.find(p => p.id === 3) || mcVipPackages[0];
                    setSelectedPackage(mvpPackage);
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-lg px-6 flex-shrink-0"
                >
                  Fiyatları İncele
                </Button>
              </div>

              {/* VIP Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mcVipPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`relative rounded-3xl bg-[color:var(--color-card)] border ${
                      pkg.popular 
                        ? "border-amber-500/40 shadow-[0_15px_40px_-15px_rgba(245,158,11,0.15)]" 
                        : "border-[color:var(--color-border)]"
                    } p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-amber-500 text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          En Çok Satan
                        </span>
                      </div>
                    )}

                    <div>
                      <h4 className="text-lg font-bold mb-2 tracking-tight">{pkg.name}</h4>
                      
                      {/* Price Tag */}
                      <div className="flex items-baseline gap-1.5 mb-6">
                        <span className="text-3xl font-extrabold text-[color:var(--color-foreground)]">{pkg.price}</span>
                        <span className="text-xs text-[color:var(--color-muted-foreground)]">/ {pkg.duration}</span>
                      </div>

                      <hr className="border-[color:var(--color-border)] mb-6" />

                      <ul className="space-y-3.5 mb-8">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-[color:var(--color-muted-foreground)] leading-tight">
                            <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => {
                        setSelectedPackage(pkg);
                        setIsSubmitted(false);
                        setErrorMessage("");
                      }}
                      variant={pkg.popular ? "default" : "outline"}
                      className={`w-full font-bold h-11 rounded-xl text-xs ${
                        pkg.popular 
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black border-0 shadow-md"
                          : ""
                      }`}
                    >
                      Satın Al / Detay
                    </Button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "faq" && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              {/* Rules */}
              <div className="md:col-span-6 space-y-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">Sunucu Kuralları</h3>
                </div>

                <div className="space-y-4">
                  {mcServerRules.map((rule, idx) => (
                    <div 
                      key={rule.id}
                      className="bg-[color:var(--color-card)] border border-[color:var(--color-border)] p-5 rounded-2xl flex gap-4"
                    >
                      <div className="font-bold text-sm text-purple-400 bg-purple-500/10 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm text-[color:var(--color-foreground)]">{rule.title}</h4>
                        <p className="text-xs leading-relaxed text-[color:var(--color-muted-foreground)]">
                          {rule.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="md:col-span-6 space-y-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">Sıkça Sorulan Sorular</h3>
                </div>

                <div className="space-y-3.5">
                  {mcServerFaq.map((faq) => {
                    const isOpen = openFaqId === faq.id;
                    return (
                      <div 
                        key={faq.id}
                        className="bg-[color:var(--color-card)] border border-[color:var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full p-5 flex items-center justify-between text-left font-bold text-sm hover:bg-[color:var(--color-muted)]/20 transition-colors cursor-pointer"
                        >
                          <span className="pr-4">{faq.question}</span>
                          <ChevronDown className={`w-4 h-4 text-[color:var(--color-muted-foreground)] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <div className="px-5 pb-5 pt-1 text-xs leading-relaxed text-[color:var(--color-muted-foreground)] border-t border-[color:var(--color-border)]/50">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* VIP Purchase Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <div 
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/70 backdrop-blur-sm p-0 md:p-4 cursor-pointer"
            onClick={() => setSelectedPackage(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="w-full max-w-lg bg-[color:var(--color-card)] md:rounded-3xl rounded-t-3xl border border-[color:var(--color-border)] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-[color:var(--color-border)] flex justify-between items-center bg-[color:var(--color-muted)]/30">
                <div>
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                    VIP Üyelik Talebi
                  </span>
                  <h3 className="text-xl font-bold">{selectedPackage.name} Paketi</h3>
                </div>
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="p-2 bg-[color:var(--color-muted)] hover:bg-[color:var(--color-border)] rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Modal Scroll Content */}
              <div className="p-6 overflow-y-auto flex-1 space-y-6">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-500">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Talebiniz Alındı!</h4>
                    <p className="text-sm text-[color:var(--color-muted-foreground)] mb-6 max-w-xs mx-auto">
                      VIP talebiniz başarıyla kaydedilmiştir. Ödeme ve aktif edilme adımları için kısa süre içinde mail ve Discord üzerinden iletişime geçilecektir.
                    </p>
                    <Button 
                      onClick={() => {
                        setSelectedPackage(null);
                        setIsSubmitted(false);
                      }}
                      className="px-6"
                    >
                      Kapat
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    {/* Direct Contact Links */}
                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-[color:var(--color-muted-foreground)]">
                        Hızlı VIP Tanımlama ve Ödeme Kanalları:
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <a 
                          href="https://wa.me/905555555555" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 p-3 bg-green-500/10 hover:bg-green-500/25 border border-green-500/20 hover:border-green-500/30 rounded-xl text-green-400 font-bold text-xs transition-all text-center"
                        >
                          <Phone className="w-4 h-4 flex-shrink-0" />
                          <span>WhatsApp Destek</span>
                        </a>
                        <a 
                          href="https://discord.gg/crafttr" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 p-3 bg-indigo-500/10 hover:bg-indigo-500/25 border border-indigo-500/20 hover:border-indigo-500/30 rounded-xl text-indigo-400 font-bold text-xs transition-all text-center"
                        >
                          <MessageCircle className="w-4 h-4 flex-shrink-0" />
                          <span>Discord Destek</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <hr className="flex-1 border-[color:var(--color-border)]" />
                      <span className="text-[10px] font-bold text-[color:var(--color-muted-foreground)] uppercase">veya başvuru yapın</span>
                      <hr className="flex-1 border-[color:var(--color-border)]" />
                    </div>

                    {/* Standard Request Form */}
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      {errorMessage && (
                        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 p-3 rounded-xl text-red-500 text-xs">
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <p>{errorMessage}</p>
                        </div>
                      )}

                      {/* Selected Pack Input (Hidden) */}
                      <input type="hidden" name="paket" value={selectedPackage.name} />
                      <input type="hidden" name="ucret" value={selectedPackage.price} />

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold">Oyundaki Kullanıcı Adınız (IGN)</label>
                        <input 
                          required
                          name="oyuncu_nick"
                          type="text" 
                          placeholder="Örn: SteveCraft"
                          className="w-full h-11 px-4 rounded-xl border border-[color:var(--color-border)] bg-transparent text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all text-[color:var(--color-foreground)]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold">Discord Adınız</label>
                          <input 
                            required
                            name="discord_nick"
                            type="text" 
                            placeholder="Örn: steve_tr"
                            className="w-full h-11 px-4 rounded-xl border border-[color:var(--color-border)] bg-transparent text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all text-[color:var(--color-foreground)]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold">E-Posta Adresiniz</label>
                          <input 
                            required
                            name="email"
                            type="email" 
                            placeholder="ornek@mail.com"
                            className="w-full h-11 px-4 rounded-xl border border-[color:var(--color-border)] bg-transparent text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all text-[color:var(--color-foreground)]"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold">Ödeme Tercihi</label>
                        <select 
                          name="odeme_yontemi" 
                          className="w-full h-11 px-4 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all text-[color:var(--color-foreground)]"
                        >
                          <option value="kredi_karti">Kredi / Banka Kartı</option>
                          <option value="havale_fast">Havale / EFT / FAST</option>
                          <option value="papara">Papara</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold">Ek Notlar / İstekler</label>
                        <textarea 
                          name="mesaj"
                          placeholder="Fatura detayları veya eklemek istediğiniz bir not varsa buraya yazabilirsiniz..."
                          className="w-full h-20 p-3 rounded-xl border border-[color:var(--color-border)] bg-transparent text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none text-[color:var(--color-foreground)]"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full text-sm font-bold h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-0 shadow-md flex items-center justify-center gap-1.5"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            İşlem Yapılıyor...
                          </>
                        ) : (
                          "Başvuruyu Tamamla"
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
