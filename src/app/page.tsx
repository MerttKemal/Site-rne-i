import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { Logo } from "@/components/ui/Logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--color-background)]">
      <Hero />
      <Portfolio />
      <Contact />
      
      <footer className="py-8 text-[color:var(--color-muted-foreground)] border-t border-[color:var(--color-border)]">
        <div className="flex flex-col items-center justify-center gap-2">
          <Logo className="w-5 h-5" showText={true} />
          <p className="text-sm">© {new Date().getFullYear()} M-Menu. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </main>
  );
}
