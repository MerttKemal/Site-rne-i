export const portfolioData = [
  {
    id: 1,
    title: "Modern Frontend Geliştirme",
    description: "React, Next.js ve Tailwind CSS kullanarak yüksek performanslı, SEO uyumlu ve erişilebilir kullanıcı arayüzleri inşa ediyorum.",
    icon: "Code2"
  },
  {
    id: 2,
    title: "Sunucu ve VDS Optimizasyonu",
    description: "Linux sunucu kurulumu, Nginx/Apache yapılandırması, güvenlik duvarı ayarları ve yüksek trafikli siteler için yük dengeleme.",
    icon: "Server"
  },
  {
    id: 3,
    title: "Docker ve CI/CD Süreçleri",
    description: "Uygulamalarınızı konteyner mimarisine geçirerek izole, taşınabilir ve kesintisiz dağıtım süreçleri (CI/CD) tasarlıyorum.",
    icon: "Container"
  },
  {
    id: 4,
    title: "Performans İyileştirmeleri",
    description: "Core Web Vitals optimizasyonu, veritabanı sorgu iyileştirmeleri ve caching (Redis/Memcached) stratejileri.",
    icon: "Zap"
  }
];

export type Category = "Tümü" | "Yiyecekler" | "İçecekler" | "Tatlılar" | "Nargile";

export const qrMenuData = [
  // --- Yiyecekler ---
  {
    id: 1,
    name: "Klasik Burger",
    description: "150g dana köfte, karamelize soğan, cheddar peyniri, marul, domates ve özel burger sosu, yanında baharatlı patates kızartması ile.",
    price: "180 ₺",
    category: "Yiyecekler",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Napoli tarzı ince hamur, taze mozzarella peyniri, fesleğen yaprakları, sızma zeytinyağı ve özel İtalyan domates sosu.",
    price: "220 ₺",
    category: "Yiyecekler",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Fettuccine Alfredo",
    description: "Kremalı mantar sosu, ızgara tavuk göğsü dilimleri, taze fesleğen ve parmesan peyniri ile harmanlanmış taze makarna.",
    price: "240 ₺",
    category: "Yiyecekler",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "Tavuklu Sezar Salata",
    description: "Izgara tavuk göğsü, kıtır kruton ekmekler, parmesan dilimleri ve enfes sezar sosu eşliğinde harmanlanmış çıtır marul yaprakları.",
    price: "190 ₺",
    category: "Yiyecekler",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 11,
    name: "Lokum Bonfile",
    description: "Tereyağında sotelenmiş 200g lokum kıvamında dana bonfile dilimleri, yanında fırınlanmış taze patates ve ızgara sebzeler ile.",
    price: "480 ₺",
    category: "Yiyecekler",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
  },

  // --- İçecekler ---
  {
    id: 3,
    name: "Iced Caramel Macchiato",
    description: "Zengin espresso shot, soğuk süt, vanilya şurubu ve üzerinde enfes karamel sosu ile buzlu kahve keyfi.",
    price: "85 ₺",
    category: "İçecekler",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Taze Sıkılmış Portakal Suyu",
    description: "Mevsimin en taze ve tatlı portakallarından anında sıkılmış, %100 doğal vitamin deposu taze meyve suyu.",
    price: "60 ₺",
    category: "İçecekler",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 12,
    name: "Çilekli Mint Limonata",
    description: "Taze nane yaprakları, ezilmiş çilek püresi, taze limon suyu ve tatlı şurup ile hazırlanan ferahlatıcı ev yapımı limonata.",
    price: "90 ₺",
    category: "İçecekler",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 13,
    name: "Double Espresso",
    description: "Özenle seçilmiş ve kavrulmuş Arabica çekirdeklerinden taze çekilmiş, yoğun gövdeli ve zengin kremalı çift shot espresso.",
    price: "70 ₺",
    category: "İçecekler",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 14,
    name: "Hibiscus Iced Tea",
    description: "Ev yapımı hibiskus çiçeği demi, taze yaban mersini, ahududu dilimleri ve kırık buz eşliğinde soğuk demlenmiş bitki çayı.",
    price: "85 ₺",
    category: "İçecekler",
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=600&auto=format&fit=crop"
  },

  // --- Tatlılar ---
  {
    id: 5,
    name: "San Sebastian Cheesecake",
    description: "İçi yumuşak ve akışkan, üzeri ise altın sarısı yanık renginde olan orijinal İspanyol usulü fırınlanmış cheesecake.",
    price: "140 ₺",
    category: "Tatlılar",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Çikolatalı Sufle",
    description: "Sıcak fırından yeni çıkmış, içi akışkan Belçika çikolatası dolgulu sufle, yanında sade vanilyalı dondurma ile servis edilir.",
    price: "120 ₺",
    category: "Tatlılar",
    image: "https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 15,
    name: "Fıstıklı Katmer",
    description: "İncecik açılmış çıtır hamur arasında bol Antep fıstığı parçacıkları, kaymak ve toz şeker, yanında vanilyalı dondurma ile.",
    price: "180 ₺",
    category: "Tatlılar",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 16,
    name: "Orijinal Tiramisu",
    description: "İtalyan maskarpon peynirli krema ve sert espresso kahve ile ıslatılmış kedidili bisküvilerinin kakaolu klasik buluşması.",
    price: "150 ₺",
    category: "Tatlılar",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 17,
    name: "Meyveli Waffle",
    description: "Sıcak çıtır waffle üzerine sürülen çikolata sosu, taze muz, çilek, kivi dilimleri ve fındık kırıkları ile süslenmiş ziyafet.",
    price: "170 ₺",
    category: "Tatlılar",
    image: "/fruit_waffle.png"
  },

  // --- Nargileler ---
  {
    id: 7,
    name: "Premium Elma Nargile",
    description: "Anasonlu klasik çift elma aroması, meşe kömüründe yavaş demlenmiş geleneksel pürüzsüz içim keyfi.",
    price: "350 ₺",
    category: "Nargile",
    image: "/apple_hookah.png"
  },
  {
    id: 8,
    name: "Blue Melon Nargile",
    description: "Yaban mersini ve kavun karışımı, serinletici nane esintisiyle taze meyvemsi ve ferahlatıcı nargile aroması.",
    price: "380 ₺",
    category: "Nargile",
    image: "/blue_melon_hookah.png"
  },
  {
    id: 18,
    name: "Love 66 Nargile",
    description: "Karpuz, kavun, nane ve tatlı sakız aromalı özel karışım, yoğun buharı ve tatlı aroması ile modern klasik.",
    price: "390 ₺",
    category: "Nargile",
    image: "/love_66_hookah.png"
  },
  {
    id: 19,
    name: "Lady Killer Nargile",
    description: "Kavun, sulu çilek, tropikal mango ve hafif mentol aromalarının egzotik ve ferahlatıcı birleşimi.",
    price: "390 ₺",
    category: "Nargile",
    image: "/lady_killer_hookah.png"
  },
  {
    id: 20,
    name: "Ice Citrus Nargile",
    description: "Limon, ekşi greyfurt, portakal ve yoğun buz ferahlığının bir araya geldiği, narenciye severler için soğuk içim.",
    price: "370 ₺",
    category: "Nargile",
    image: "/ice_citrus_hookah.png"
  }
];
