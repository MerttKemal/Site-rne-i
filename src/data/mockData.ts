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

export const csServersData = [
  {
    id: 1,
    name: "Pro GaminG # [ Jailbreak ] [1000 FPS]",
    ip: "95.173.173.10",
    players: "28/32",
    map: "jail_buyukisyan_v1",
    mode: "Jailbreak",
    status: "online",
    mapImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Pro GaminG # [ Dust2 / PRO ] [1000 FPS]",
    ip: "95.173.173.11",
    players: "18/32",
    map: "de_dust2",
    mode: "Pro / Public",
    status: "online",
    mapImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Pro GaminG # [ Deathrun & Surf ] [1000 FPS]",
    ip: "95.173.173.12",
    players: "12/24",
    map: "deathrun_temple",
    mode: "Deathrun / Surf",
    status: "online",
    mapImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Pro GaminG # [ Gungame ] [128 Tick]",
    ip: "95.173.173.13",
    players: "0/32",
    map: "cs_italy",
    mode: "Gungame",
    status: "offline",
    mapImage: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop"
  }
];

export const csAdminPackages = [
  {
    id: 1,
    name: "Slotluk Yetkisi",
    price: "Ücretsiz",
    duration: "Süresiz",
    features: [
      "İsim Rezervasyonu (Nick Şifreleme)",
      "Dolu Sunucuya Giriş Önceliği (Slot Yetkisi)",
      "Yeşil Yazı Yazma (say @)",
      "Sohbet Alanında Özel 'Slot' Etiketi"
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "VIP Adminlik",
    price: "150 ₺",
    duration: "Aylık",
    features: [
      "Tüm Slotluk Yetkileri",
      "Kullanıcı Kickleme Yetkisi (amx_kick)",
      "Kullanıcı Susturma Yetkisi (amx_gag)",
      "Harita Oylaması Yapma (amx_votemap)",
      "Her Tur Başı Bedava Ekipman / Armor",
      "Karaktere Özel Şapka (Cap) / Skin Seçimi"
    ],
    popular: true,
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 3,
    name: "Premium Adminlik",
    price: "250 ₺",
    duration: "Aylık",
    features: [
      "Tüm VIP Adminlik Yetkileri",
      "Kullanıcı Banlama / Kaldırma Yetkisi (amx_ban)",
      "Gelişmiş Panel Erişimi (amxmodmenu)",
      "Özel Silah / Noclip Menüsü Yetkileri",
      "Yönetici Dokunulmazlığı (Immunity)",
      "Kurucuya Doğrudan Destek Talebi İletme"
    ],
    popular: false,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    name: "Kurucu Ortak (Full Yetki)",
    price: "500 ₺",
    duration: "Aylık",
    features: [
      "Tüm Adminlik ve Sunucu Yetkileri (rcon hariç)",
      "Dokunulmazlık (Sınırsız Immunity)",
      "Sunucu Ayarlarını Değiştirme Yetkisi (amx_cvar)",
      "Eklenti (Plugin) Talebi Gönderme",
      "Sunucu Yönetim Whatsapp Grubuna Katılım",
      "Rapor & Ban Yönetim Paneli Şifresi"
    ],
    popular: false,
    color: "from-emerald-500 to-teal-500"
  }
];

export const csServerRules = [
  {
    id: 1,
    title: "Saygı ve Ahlak Kuralları",
    description: "Sunucularımızda diğer oyunculara karşı hakaret, küfür, argo ve kışkırtıcı dil kullanımı kesinlikle yasaktır."
  },
  {
    id: 2,
    title: "Hile, Script ve Destekleyici Yazılımlar",
    description: "Wallhack, Aimbot, Recoil azaltıcı scriptler ve benzeri haksız avantaj sağlayan tüm üçüncü parti yazılımların kullanımı kalıcı ban (ip ban) sebebidir."
  },
  {
    id: 3,
    title: "Adminlik Yetkilerinin Kötüye Kullanımı",
    description: "Adminler haksız yere oyuncuları kickleyemez, gaglayamaz veya banlayamaz. Her türlü işlemde kanıt (ekran görüntüsü veya demo) sunulması zorunludur."
  },
  {
    id: 4,
    title: "Siyaset, Din ve Irk Ayrımcılığı",
    description: "Sunucu içi sesli ve yazılı kanallarda dini, milli, ırki ve siyasi propaganda yapmak veya tartışma başlatmak süresiz uzaklaştırılma ile cezalandırılır."
  },
  {
    id: 5,
    title: "Reklam ve Spam Yasakları",
    description: "Başka sunucuların, sitelerin veya servislerin reklamını yapmak, sohbet ekranını (chat) gereksiz spam veya mikrofonu yüksek sesle meşgul etmek yasaktır."
  }
];

export const csServerFaq = [
  {
    id: 1,
    question: "Satın aldığım yetki ne kadar sürede aktif olur?",
    answer: "Ödeme onaylandıktan sonra yetkiniz genellikle 15-30 dakika içerisinde sunucu yöneticilerimiz tarafından tanımlanır ve aktif hale getirilir."
  },
  {
    id: 2,
    question: "Ödemeyi hangi yöntemlerle yapabilirim?",
    answer: "Havale/EFT, FAST, Papara, IBAN transferi ve Kredi Kartı (Güvenli 3D Ödeme) seçenekleriyle ödeme yapabilirsiniz."
  },
  {
    id: 3,
    question: "Adminlik kurallara uyulmadığında geri alınır mı?",
    answer: "Evet. Satın alınan adminlikler kurallara uyulmadığı, oyunculara haksızlık yapıldığı veya yetki kötüye kullanıldığı takdirde iade edilmeksizin askıya alınır."
  },
  {
    id: 4,
    question: "Sunucuda bir hileci gördüğümde ne yapmalıyım?",
    answer: "Eğer aktif bir admin yoksa, console ekranına record <isim> yazarak demo kaydedebilir veya sitemizdeki iletişim yollarından / Discord sunucumuzdan yöneticilerimize bildirebilirsiniz."
  }
];

export const mcServersData = [
  {
    id: 1,
    name: "CraftTR # [ Survival & Towny ] [1.20.4]",
    ip: "play.crafttr.net",
    version: "1.20.4 (Java & Bedrock)",
    players: "148/250",
    mode: "Survival & Towny",
    status: "online",
    mapImage: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "CraftTR # [ Skyblock ] [Sezon 4]",
    ip: "sky.crafttr.net",
    version: "1.16.5 - 1.20.4",
    players: "72/150",
    mode: "OP Skyblock",
    status: "online",
    mapImage: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "CraftTR # [ Factions & Clan Wars ]",
    ip: "fact.crafttr.net",
    version: "1.8.9 - 1.20.4",
    players: "0/100",
    mode: "Factions",
    status: "offline",
    mapImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop"
  }
];

export const mcVipPackages = [
  {
    id: 1,
    name: "VIP",
    price: "100 ₺",
    duration: "Aylık",
    features: [
      "Özel [VIP] Tagı ve Sohbet Rengi",
      "Sadece VIP'lere Özel Başlangıç Kiti (/kit vip)",
      "Uçma Yetkisi (/fly) (Sadece lobide ve kendi arsanızda)",
      "Dolu Sunucuya Giriş Önceliği",
      "Sanal Sandık Erişimi (/chest 1)"
    ],
    popular: false,
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 2,
    name: "VIP+",
    price: "180 ₺",
    duration: "Aylık",
    features: [
      "Tüm VIP Özellikleri",
      "Gelişmiş Başlangıç Kiti (/kit vip+)",
      "Uçma Yetkisi (/fly) (Tüm dünyalarda, savaş dışı)",
      "Sohbette Kalın Yazı Yazma",
      "Sanal Sandık Erişimi (/chest 2)",
      "Kafanızı Blok Yapma Yetkisi (/hat)"
    ],
    popular: false,
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 3,
    name: "MVP",
    price: "300 ₺",
    duration: "Aylık",
    features: [
      "Tüm VIP+ Özellikleri",
      "Muazzam Başlangıç Kiti (/kit mvp)",
      "Özel İsim Rengi ve Parçacık Efektleri",
      "Sanal Sandık Erişimi (/chest 3)",
      "Süresiz Beslenme Yetkisi (/feed)",
      "Rastgele Işınlanma Süresi Yok (/rtp)"
    ],
    popular: true,
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 4,
    name: "MVP+ (Sınırsız)",
    price: "750 ₺",
    duration: "Süresiz",
    features: [
      "Süresiz Tüm MVP Yetkileri",
      "En Güçlü Başlangıç Kiti (/kit mvp+)",
      "Sanal Sandık Erişimi (/chest 5)",
      "Anında İyileşme Yetkisi (/heal - 5 dk cooldown)",
      "Özel Binekler ve Kozmetik Evcil Hayvanlar",
      "Kurucuya Doğrudan WhatsApp Destek Erişimi"
    ],
    popular: false,
    color: "from-emerald-500 to-teal-500"
  }
];

export const mcServerRules = [
  {
    id: 1,
    title: "Griefing ve Hırsızlık Yasaktır",
    description: "Korumalı (Claim) alanlar dışındaki yapılara zarar vermek, oyuncuların eşyalarını çalmak veya tuzak kurmak yasaktır."
  },
  {
    id: 2,
    title: "Hile, X-Ray ve İstemciler",
    description: "X-Ray, killaura, fly veya herhangi bir avantaj sağlayan modifikasyon/hacked client kullanımı kalıcı banlanma ile sonuçlanır."
  },
  {
    id: 3,
    title: "Sohbet Düzeni",
    description: "Küfür, argo, spam, büyük harfle yazmak (flood) ve oyuncuları aşağılayıcı tavırlar sergilemek yasaktır."
  },
  {
    id: 4,
    title: "Hata İstismarı (Bug Abuse)",
    description: "Sunucu eklentilerindeki veya oyunun kendi açıklarını (dupe vb.) kendi çıkarınız için kullanmak kesinlikle yasaktır."
  }
];

export const mcServerFaq = [
  {
    id: 1,
    question: "Bedrock (Mobil/Konsol) üzerinden nasıl katılırım?",
    answer: "Sunucu IP'sini girerken port kısmına varsayılan Minecraft Bedrock portu olan 19132 yazarak mobil veya konsoldan sunucumuza katılabilirsiniz."
  },
  {
    id: 2,
    question: "Korumalı alan (Claim) nasıl alırım?",
    answer: "Sunucumuzda claim almak için altın kürek kullanabilirsiniz. Kürekle iki köşeye sağ tıklayarak alanınızı güvene alabilirsiniz."
  },
  {
    id: 3,
    question: "VIP üyelikler ne kadar sürede aktif olur?",
    answer: "Ödeme yapıldıktan sonra sistem otomatik olarak VIP rolünüzü 5 dakika içinde oyunda aktif hale getirecektir."
  }
];

export const corporateStats = [
  { label: "Başarılı Proje", value: "250+" },
  { label: "Mutlu Müşteri", value: "180+" },
  { label: "Yıllık Deneyim", value: "8+" },
  { label: "Aktif Altyapı", value: "50+" }
];

export const corporateServices = [
  {
    id: 1,
    title: "Özel Web Yazılım Geliştirme",
    description: "İşletmenizin ihtiyaçlarına tam uyum sağlayan, yüksek performanslı ve modern web uygulamaları geliştiriyoruz.",
    icon: "Code2"
  },
  {
    id: 2,
    title: "Bulut Altyapı ve Sunucu Yönetimi",
    description: "Amazon Web Services (AWS), Google Cloud ve Linux sunucularınızın kurulum, optimizasyon ve güvenlik süreçlerini yönetiyoruz.",
    icon: "Server"
  },
  {
    id: 3,
    title: "Konteynerleştirme (Docker & K8s)",
    description: "Uygulamalarınızı Dockerize ederek bulut mimarisinde kolay ölçeklenebilir ve taşınabilir hale getiriyoruz.",
    icon: "Container"
  },
  {
    id: 4,
    title: "UI/UX ve Grafik Tasarım",
    description: "Kullanıcı dostu, modern ve markanızın kimliğini en iyi yansıtan dijital arayüz tasarımları oluşturuyoruz.",
    icon: "Layers"
  },
  {
    id: 5,
    title: "SEO ve Performans Optimizasyonu",
    description: "Core Web Vitals skorlarınızı yükselterek sitenizin Google aramalarında üst sıralarda yer almasını sağlıyoruz.",
    icon: "Zap"
  },
  {
    id: 6,
    title: "Siber Güvenlik Danışmanlığı",
    description: "Sistemlerinizin güvenlik açıklarını analiz ediyor, firewall ve SSL yapılandırmalarıyla koruma kalkanı oluşturuyoruz.",
    icon: "ShieldAlert"
  }
];

export const corporateTeam = [
  {
    id: 1,
    name: "Hakan Çelik",
    role: "Kurucu & Kıdemli Sistem Uzmanı",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Can Yılmaz",
    role: "Kıdemli Full-Stack Geliştirici",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Selin Kaya",
    role: "UI/UX Tasarım Lideri",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
  }
];

export const corporateTestimonials = [
  {
    id: 1,
    quote: "Nova Bilişim ekibi sayesinde restoranımızdaki kağıt menü maliyetlerinden tamamen kurtulduk. Müşterilerimizin sipariş hızı ve memnuniyeti %40 arttı.",
    author: "Ahmet Demir",
    company: "Lezzet Sarayı Restoran Zinciri"
  },
  {
    id: 2,
    quote: "Linux sunucularımızın optimizasyonu sonrası web sitemizin yüklenme süresi 3 saniyeden 0.4 saniyeye düştü. İnanılmaz profesyonel bir ekip.",
    author: "Elif Şahin",
    company: "Mega E-Ticaret A.Ş."
  },
  {
    id: 3,
    quote: "Docker dönüşüm sürecimizi sıfır kesintiyle tamamladılar. Artık yeni sürümleri saniyeler içinde yayına alabiliyoruz. Çok teşekkürler.",
    author: "Murat Özcan",
    company: "TeknoSoft Bilişim Hizmetleri"
  }
];
