"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { 
  Mail, 
  MapPin, 
  Globe,
  Rss,
  Star,
  MessageCircle,
  Heart,
  ExternalLink,
  Send
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const footerLinks = {
  hizmetler: [
    { label: "Dijital QR Menü", href: "/demos/restaurant" },
    { label: "Klasik Web Menü", href: "/demos/restaurant-normal" },
    { label: "Kurumsal Web Sitesi", href: "/demos/corporate" },
    { label: "Kurumsal Hizmetler", href: "/demos/corporate-services" },
  ],
  sunucular: [
    { label: "CS 1.6 Sunucuları", href: "/cs-servers" },
    { label: "Minecraft Sunucuları", href: "/minecraft-servers" },
  ],
  destek: [
    { label: "İletişim Formu", href: "/#contact" },
    { label: "Discord Topluluğu", href: "https://discord.gg/progaming", external: true },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Web" },
  { icon: Rss, href: "#", label: "Blog" },
  { icon: Star, href: "#", label: "Favoriler" },
  { icon: MessageCircle, href: "#", label: "Discord" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-indigo-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-purple-500/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Logo showText={true} />
            <p className="text-sm text-[color:var(--color-muted-foreground)] leading-relaxed max-w-xs">
              Modern web teknolojileri ve güçlü altyapı çözümleriyle işletmenizin dijital yüzünü yeniliyoruz. Performans, güvenlik ve estetik bir arada.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:kemalinho1905@gmail.com" className="flex items-center gap-3 text-sm text-[color:var(--color-muted-foreground)] hover:text-indigo-400 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                kemalinho1905@gmail.com
              </a>

              <div className="flex items-center gap-3 text-sm text-[color:var(--color-muted-foreground)]">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                </div>
                Türkiye
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wide uppercase text-[color:var(--color-foreground)]">Hizmetler</h4>
            <ul className="space-y-3">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-[color:var(--color-muted-foreground)] hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-indigo-400 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wide uppercase text-[color:var(--color-foreground)]">Sunucular</h4>
            <ul className="space-y-3">
              {footerLinks.sunucular.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-[color:var(--color-muted-foreground)] hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-indigo-400 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <h4 className="text-sm font-bold tracking-wide uppercase text-[color:var(--color-foreground)] mb-3">Destek</h4>
                <ul className="space-y-3">
                  {footerLinks.destek.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a 
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-[color:var(--color-muted-foreground)] hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1.5 group"
                        >
                          <span className="w-0 group-hover:w-2 h-px bg-indigo-400 transition-all duration-200" />
                          {link.label}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <Link 
                          href={link.href} 
                          className="text-sm text-[color:var(--color-muted-foreground)] hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1 group"
                        >
                          <span className="w-0 group-hover:w-2 h-px bg-indigo-400 transition-all duration-200" />
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold tracking-wide uppercase text-[color:var(--color-foreground)]">Bülten Aboneliği</h4>
            <p className="text-sm text-[color:var(--color-muted-foreground)] leading-relaxed">
              Yeni hizmetlerden, kampanyalardan ve güncellemelerden haberdar olun.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                className="flex-1 h-11 px-4 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-muted)]/50 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-muted-foreground)]"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="h-11 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25 transition-shadow cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
            {subscribed && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-emerald-400 font-medium"
              >
                ✓ Bülten aboneliğiniz başarıyla oluşturuldu!
              </motion.p>
            )}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-xs font-semibold text-[color:var(--color-muted-foreground)] mb-3 uppercase tracking-wider">Bizi Takip Edin</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-xl bg-[color:var(--color-muted)] border border-[color:var(--color-border)] flex items-center justify-center text-[color:var(--color-muted-foreground)] hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[color:var(--color-border)]/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[color:var(--color-muted-foreground)]">
            © {new Date().getFullYear()} M-Menu. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-[color:var(--color-muted-foreground)] flex items-center gap-1.5">
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> ile Türkiye{"'"}den tasarlandı.
          </p>
        </div>
      </div>
    </footer>
  );
}
