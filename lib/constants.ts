// ==========================================
// PLACEHOLDER DATA - Replace with real info
// ==========================================

export const CONTACT = {
  phone: "+420 XXX XXX XXX",
  email: "info@kralelektroinstalace.cz",
  address: "Oblast působení: Praha a okolí",
  ico: "XX XXX XXX",
  businessName: "Tomáš Král - Elektroinstalace",
} as const;

export const SOCIAL = {
  facebook: "#",
  instagram: "#",
} as const;

// ==========================================
// NAVIGATION
// ==========================================

export const NAV_LINKS = [
  { label: "Služby", href: "#sluzby" },
  { label: "Chytrá domácnost", href: "#chytra-domacnost" },
  { label: "Reference", href: "#reference" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

// ==========================================
// HERO SECTION
// ==========================================

export const HERO = {
  headline: "Elektroinstalace pro moderní domácnost",
  subheadline: "Revize, opravy a chytrá domácnost na klíč. Spolehlivost a kvalita na prvním místě.",
  ctaPrimary: "Nezávazná poptávka",
  ctaSecondary: "Prohlédnout služby",
} as const;

// ==========================================
// SERVICES
// ==========================================

export const SERVICES = [
  {
    id: "revize",
    title: "Revize",
    description: "Pravidelné revize elektroinstalací pro bezpečný provoz vašeho domu či firmy. Získáte platnou revizní zprávu.",
    icon: "ClipboardCheck",
    price: "od 2 500 Kč",
    features: ["Revizní zpráva", "Kontrola jističů", "Měření izolačního odporu"],
  },
  {
    id: "opravy",
    title: "Opravy",
    description: "Rychlé a spolehlivé opravy elektroinstalací. Od výměny zásuvek po kompletní rekonstrukce rozvodů.",
    icon: "Wrench",
    price: "do 24 hodin",
    features: ["Pohotovostní servis", "Diagnostika závad", "Opravy na místě"],
  },
  {
    id: "chytra-domacnost",
    title: "Chytrá domácnost",
    description: "Proměňte váš domov v inteligentní prostor. Ovládejte světla, topení i zabezpečení jedním dotykem.",
    icon: "Home",
    price: "na míru",
    features: ["Loxone systém", "Úspora energie", "Vzdálené ovládání"],
    badge: "NOVINKA",
  },
] as const;

// ==========================================
// SMART HOME SECTION
// ==========================================

export const SMART_HOME = {
  headline: "Chytrá domácnost",
  subheadline: "Komfort, úspora a bezpečnost pod jednou střechou",
  description: "S chytrou domácností získáte plnou kontrolu nad vaším bydlením. Automatizujte rutinní úkony, šetřete energii a zvyšte bezpečnost — vše ovládané z mobilu nebo hlasem.",
  features: [
    {
      id: "svetla",
      title: "Osvětlení",
      description: "Automatické scény, stmívání a ovládání hlasem",
      icon: "Lightbulb",
      color: "yellow",
    },
    {
      id: "topeni",
      title: "Topení & Klimatizace",
      description: "Chytré termostaty a zónové vytápění",
      icon: "Thermometer",
      color: "red",
    },
    {
      id: "zaluzie",
      title: "Žaluzie & Rolety",
      description: "Automatizace podle slunce a denní doby",
      icon: "Blinds",
      color: "blue",
    },
    {
      id: "zabezpeceni",
      title: "Zabezpečení",
      description: "Kamery, čidla pohybu a alarmy",
      icon: "Shield",
      color: "green",
    },
    {
      id: "energie",
      title: "Správa energie",
      description: "Monitoring spotřeby a optimalizace",
      icon: "Zap",
      color: "green",
    },
  ],
  benefits: [
    { label: "Pohodlí", value: "100%", description: "Vše na dosah ruky" },
    { label: "Úspora", value: "30%", description: "Na energiích ročně" },
    { label: "Bezpečnost", value: "24/7", description: "Monitoring domova" },
  ],
  savingsChart: {
    standard: { label: "Běžný dům", value: 100, unit: "%" },
    smart: { label: "Chytrý dům", value: 70, unit: "%" },
    savings: "30%",
  },
} as const;

// ==========================================
// WHY US SECTION
// ==========================================

export const WHY_US = {
  headline: "Proč Král Elektroinstalace?",
  subheadline: "Osobní přístup, profesionální výsledky",
  description: "S více než 15 lety zkušeností v oboru zajišťuji kvalitní elektroinstalační práce pro domácnosti i firmy. Každý projekt je pro mě důležitý.",
  stats: [
    { value: 15, suffix: "+", label: "let praxe" },
    { value: 500, suffix: "+", label: "realizací" },
    { value: 100, suffix: "%", label: "spokojenost" },
    { value: 24, suffix: "h", label: "servis" },
  ],
  certifications: ["Loxone Partner", "Revizní technik", "Oprávnění §6"],
} as const;

// ==========================================
// REALIZATIONS / REFERENCES
// ==========================================

export const REALIZATIONS = {
  headline: "Naše realizace",
  subheadline: "Ukázky z dokončených projektů",
  items: [
    {
      id: 1,
      title: "Rodinný dům - Praha",
      category: "Chytrá domácnost",
      image: "/images/placeholder-1.jpg",
    },
    {
      id: 2,
      title: "Rekonstrukce bytu",
      category: "Elektroinstalace",
      image: "/images/placeholder-2.jpg",
    },
    {
      id: 3,
      title: "Kancelářské prostory",
      category: "Revize",
      image: "/images/placeholder-3.jpg",
    },
    {
      id: 4,
      title: "Novostavba - Středočeský kraj",
      category: "Chytrá domácnost",
      image: "/images/placeholder-4.jpg",
    },
    {
      id: 5,
      title: "Průmyslový objekt",
      category: "Elektroinstalace",
      image: "/images/placeholder-5.jpg",
    },
    {
      id: 6,
      title: "Vila s bazénem",
      category: "Chytrá domácnost",
      image: "/images/placeholder-6.jpg",
    },
  ],
} as const;

// ==========================================
// FAQ
// ==========================================

export const FAQ = {
  headline: "Časté dotazy",
  subheadline: "Odpovědi na nejčastější otázky",
  items: [
    {
      question: "Jak probíhá revize elektroinstalace?",
      answer: "Revize zahrnuje vizuální kontrolu elektroinstalace, měření izolačního odporu, kontrolu jističů a další technické testy. Na závěr obdržíte revizní zprávu s výsledky a případnými doporučeními.",
    },
    {
      question: "Kolik stojí revize bytu nebo domu?",
      answer: "Cena revize závisí na velikosti objektu a rozsahu elektroinstalace. Pro byt se ceny pohybují od 2 500 Kč, pro rodinný dům od 3 500 Kč. Pro přesnou kalkulaci mě kontaktujte.",
    },
    {
      question: "Jak rychle můžete přijet na opravu?",
      answer: "V případě havárie nebo naléhavé poruchy jsem schopen přijet do 24 hodin, často i dříve. Pro běžné opravy domlouváme termín dle vzájemných možností.",
    },
    {
      question: "Co vše dokáže chytrá domácnost ovládat?",
      answer: "Chytrá domácnost může ovládat osvětlení, topení, klimatizaci, žaluzie, zabezpečení, kamery, zámky dveří, audio systémy a mnoho dalšího. Systém lze rozšiřovat postupně podle vašich potřeb.",
    },
    {
      question: "Je chytrá domácnost vhodná i do staršího domu?",
      answer: "Ano, chytrou domácnost lze instalovat i do starších objektů. Existují řešení, která nevyžadují kompletní rekonstrukci elektroinstalace. Rád vám navrhnu optimální variantu.",
    },
    {
      question: "Jaká je návratnost investice do chytré domácnosti?",
      answer: "Díky úspoře energie (až 30% ročně) se investice typicky vrátí za 5-7 let. Navíc zvyšuje hodnotu nemovitosti a přináší každodenní komfort.",
    },
    {
      question: "Děláte i menší opravy jako výměnu zásuvek?",
      answer: "Samozřejmě, provádím veškeré elektrikářské práce od drobných oprav (zásuvky, vypínače, světla) až po kompletní rekonstrukce elektroinstalací.",
    },
    {
      question: "V jakých oblastech působíte?",
      answer: "Působím primárně v Praze a Středočeském kraji. Pro větší projekty jsem ochoten dojet i dále. Kontaktujte mě s vaší lokalitou a domluvíme se.",
    },
  ],
} as const;

// ==========================================
// CONTACT SECTION
// ==========================================

export const CONTACT_SECTION = {
  headline: "Kontaktujte mě",
  subheadline: "Nezávazná konzultace zdarma",
  description: "Máte dotaz nebo chcete cenovou nabídku? Napište mi a ozvu se vám co nejdříve.",
  form: {
    namePlaceholder: "Vaše jméno",
    emailPlaceholder: "E-mail",
    phonePlaceholder: "Telefon",
    messagePlaceholder: "Vaše zpráva...",
    submitButton: "Odeslat poptávku",
    successMessage: "Děkuji za zprávu! Ozvu se vám co nejdříve.",
    errorMessage: "Něco se pokazilo. Zkuste to prosím znovu.",
  },
} as const;

// ==========================================
// FOOTER
// ==========================================

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Král Elektroinstalace. Všechna práva vyhrazena.`,
  quickLinks: [
    { label: "Služby", href: "#sluzby" },
    { label: "Reference", href: "#reference" },
    { label: "Kontakt", href: "#kontakt" },
  ],
} as const;
