import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/ui/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--color-background)]">
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
