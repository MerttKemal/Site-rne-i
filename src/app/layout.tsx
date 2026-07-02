import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "M-Menu | Modern Dijital Çözümler & Oyun Sunucuları",
  description: "Hızlı, şık ve kusursuz dijital menü çözümleri, kurumsal web siteleri ve yüksek performanslı oyun sunucuları. Frontend geliştirme ve sistem çözümleri uzmanı.",
  keywords: ["dijital menü", "QR menü", "CS 1.6 sunucu", "minecraft sunucu", "web geliştirme", "oyun sunucusu"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
