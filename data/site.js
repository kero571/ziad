export const SITE = {
  name: "زياد محمود",
  en: "Ziad Mahmoud",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL
      : "http://localhost:3000"),
  whatsapp: "201116727480",
  instagram: {
    handle: "@ZiadMahmoud",
    url: "https://www.instagram.com/ziadmahmoud_ph?srtk=eXkwaHl3dTZxOGlk",
  },
  tiktok: {
    handle: "@BattootCinematic",
    url: "https://www.tiktok.com/@battout4?_r=1&_t=ZS-9AsfOUAU3ue",
  },
  facebook: {
    handle: "Ziad Mahmoud",
    url: "https://www.facebook.com/share/1KBU8KomHc/",
  }, // ← حط رابط صفحة الفيسبوك لو عايز الأيقونة تفتح الصفحة
  title:
    "زياد محمود | مصور ومخرج أفراح سينمائي — Wedding Photography & Cinematic",
  description:
    "زياد محمود مصور ومخرج أفراح سينمائي في مصر: تصوير سيشن وحفلات الأفراح، فيديو سينمائي 4K، ريلز وPromo Video، وتصوير إعلانات للعلامات التجارية. باقات من 3,500 جنيه.",
  keywords: [
    "مصور أفراح",
    "مصور فرح في مصر",
    "تصوير زفاف سينمائي",
    "فيديو سينمائي للأفراح",
    "ريلز فرح",
    "تصوير سيشن عروسين",
    "مصور فوتوغرافي أفراح",
    "مخرج أفراح",
    "تصوير إعلانات",
    "باقات تصوير الأفراح",
    "زياد محمود",
    "wedding photographer Egypt",
    "cinematic wedding videographer",
    "wedding photography Cairo",
    "wedding film Egypt",
    "wedding reels",
    "Ziad Mahmoud",
    "BattootCinematic",
  ],
};
export const wa = (m) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(m)}`;
export const NAV = [
  ["أعمالي", "#work"],
  ["خدماتي", "#services"],
  ["الباقات", "#packages"],
  ["تواصل", "#booking"],
];
export const HERO = {
  label: "CINEMATIC WEDDING DIRECTOR",
  title: "تصوير أفراح وسينما بتحكي",
  accent: "قصتك.",
  sub: "قصتك .. بعدستي",
  img: "/images/hero.jpeg",
  alt: "زياد محمود مخرج ومصور أفراح سينمائي يحمل كاميرا على جيمبال",
  pillLive: "في التصوير",
  pillPlace: "مصر",
  stats: [
    { v: "4K", l: "جودة سينمائية" },
    { v: "7", plus: 1, l: "سنين خبرة" },
    { v: "120", plus: 1, l: "فرح تم تصويره" },
  ],
  cta1: "احجز ميعادك",
  cta2: "شوف أعمالي",
  msg: "أهلاً زياد، عايز أحجز ميعاد لتصوير فرحي.",
};
export const INTRO = {
  img: "/images/intro.jpg",
  alt: "عروسين في لقطة سينمائية",
  badge: "CINEMA LOOK",
  label: "التجربة كاملة",
  title: "أكتر من مجرد تصوير.",
  lead: "كل لحظة في يومك تستحق تتوثق بإحساسها وتفاصيلها.",
  text: "من أول التفاصيل الصغيرة... لحد اللحظة اللي الكل بيستناها.",
  chips: ["تصوير فوتوغرافي", "فيديو سينمائي", "ريلز وكوفيرات"],
};
const pad = (i) => String(i).padStart(2, "0");
const range = (n) => Array.from({ length: n }, (_, i) => i + 1);
const vids = (id, title, n, ext) =>
  range(n).map((i) => ({
    src: `/videos/${id}/${i}.${ext}`,
    poster: `/posters/${id}/${i}.webp`,
    title: `${title} ${i}`,
  }));
export const WORK = {
  label: "SELECTED WORK",
  title: "لحظات من شغلي",
  sub: "لغة بصرية مبنية على الإحساس والحركة والتفاصيل الأنيقة.",
  initial: 4,
  tabs: [
    {
      id: "wedding",
      label: "أفراح",
      videos: vids("wedding", "فيديو فرح", 7, "mov"),
    },
    {
      id: "fashion",
      label: "فاشون",
      videos: vids("fashion", "فيديو فاشون", 6, "mp4"),
    },
    {
      id: "event",
      label: "إيفنتس",
      videos: vids("event", "فيديو إيفنت", 3, "mp4"),
    },
  ],
  more: "عرض المزيد",
};

export const GALLERY = {
  label: "PHOTOGRAPHY",
  title: "معرض الصور",
  sub: "لقطات مختارة من جلسات التصوير والأفراح والفاشون.",
  photos: range(76).map((i) => ({
    img: `/images/photos/${i}.webp`,
    alt: `صورة ${i} من أعمال زياد محمود`,
  })),
  cta: "احجز جلسة تصوير",
  msg: "أهلاً زياد، عايز أستفسر عن حجز جلسة تصوير.",
};
export const SERVICES = {
  label: "SERVICES",
  title: "خدماتي السينمائية",
  sub: "حلول تصويرية متكاملة تناسب أسلوبك ومعايير الجودة العالية.",
  items: [
    {
      icon: "camera",
      featured: 1,
      title: "تصوير الأفراح",
      desc: "جلسات عروسين احترافية وتغطية كاملة للحفلة بتوجيه ذكي يطلّع أحلى اللقطات بشكل طبيعي ومريح.",
    },
    {
      icon: "film",
      title: "أفلام وريلز سينمائية للفرح",
      desc: "فيديو سينمائي بجودة 4K وPromo Video وReels مصمّمة عشان تحكي قصة فرحك بأسلوب Gimbal ناعم وموسيقى.",
    },
    {
      icon: "megaphone",
      title: "إعلانات وبراند تجاري",
      desc: "تصوير إعلانات تجارية بسكريبت وإخراج احترافي للعلامات التجارية، مع تركيز على اللمسات البصرية والجودة.",
    },
  ],
};
export const PACKAGES = {
  label: "PACKAGES & RATES",
  title: "يومك.. بطريقتك",
  sub: "باقات مصممة لتناسب خطتك وتتكامل مع تفاصيل يومك.",
  currency: "جنيه",
  cta: "احجز الآن",
  popular: "الأكثر طلباً",
  items: [
    {
      n: "01",
      name: "سيشن",
      price: 4000,
      list: ["تصوير السيشن", "صور مُعدّلة", "توجيه إبداعي"],
    },
    {
      n: "02",
      name: "سيشن + حفلة",
      price: 5500,
      list: [
        "تصوير السيشن",
        "تصوير الحفلة",
        "صور مُعدّلة",
        "Reels / لحظات سينمائية",
      ],
    },
    {
      n: "03",
      name: "الباقة السينمائية",
      price: 7500,
      featured: 1,
      cta: "احجز باقتك السينمائية",
      list: ["السيشن + الحفلة", "Promo Video", "Reels", "تغطية تصويرية مميزة"],
    },
    {
      n: "04",
      name: "يوم كامل",
      price: 10000,
      list: [
        "تغطية تفاصيل يومك كله",
        "السيشن + الحفلة",
        "Promo Video",
        "Reels",
        "Storytelling كامل ليومك",
      ],
    },
  ],
};
export const CARE = {
  label: "PREPARATION & CARE",
  title: "كل تفصيلة تفرق",
  sub: "قبل يومك، بنراجع مع بعض كل التفاصيل المطلوبة علشان يوم التصوير يمشي بهدوء ومن غير ضغط.",
  items: [
    {
      icon: "calendar",
      title: "التنسيق والتجهيز قبل اليوم",
      desc: "ترتيب كامل لتوقيتات اليوم والمواقع علشان كل حاجة تبقى جاهزة.",
    },
    {
      icon: "users",
      title: "توجيه ومساعدة أثناء السيشن",
      desc: "بوجّهك خطوة بخطوة علشان تطلع اللقطات طبيعية وبإحساسك.",
    },
    {
      icon: "star",
      title: "اهتمام بكل التفاصيل واللحظات",
      desc: "من الدبل والفستان لحد نظرة أمك، مفيش لحظة بتعدي.",
    },
    {
      icon: "film",
      title: "أسلوب سينمائي يحكي قصتك",
      desc: "ألوان وحركة وإضاءة بتحوّل يومك لفيلم قصير تفتكره.",
    },
  ],
  quote: "ذكرياتك تستحق أكتر من مجرد ملف صور.",
};
export const COMMERCIAL = {
  label: "COMMERCIAL DIRECTING",
  title: "إعلانات بقصة",
  sub: "تصوير سينمائي للعلامات التجارية والإعلانات، بنصنع محتوى بيشد الانتباه وبيحكي قصة البراند.",
  videos: [
    {
      poster: "/images/ad-1.jpg",
      src: "/videos/ad-1.mp4",
      tag: "CAMPAIGN 2024",
      title: "حملة براند مجوهرات",
      sub: "إعلان بصري فاخر",
    },
    {
      poster: "/images/ad-2.jpg",
      src: "/videos/ad-2.mp4",
      tag: "BRAND STORY",
      title: "إعلان مطعم وكافيه",
      sub: "قصة براند بتفاصيل جذابة",
    },
  ],
  cta: "اطلب تصوير إعلان لعلامتك التجارية",
  msg: "أهلاً زياد، عايز أعرف تفاصيل تصوير إعلان لعلامتي التجارية.",
};
export const BOOKING = {
  label: "BOOKING & INQUIRIES",
  title: "جاهز نوثق يومك بطريقة متتنسيش؟",
  sub: "ابعتلي على واتساب ونحجز ميعادك ونتكلم في كل التفاصيل.",
  cta: "كلمني مباشرة على واتساب",
  msg: "أهلاً زياد، عايز أستفسر عن حجز تصوير.",
};
export const FOOT = {
  role: "مخرج ومصور أفراح سينمائي",
  text: "تصوير أفراح وجلسات وإعلانات بأسلوب سينمائي يحكي قصتك بإحساس وتفاصيل.",
};
