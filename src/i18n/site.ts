export const locales = ["ro", "en"] as const;

export type Locale = (typeof locales)[number];
export type PageKey = "home" | "privacy" | "cookie" | "terms";

const pageSlugs: Record<Locale, Record<PageKey, string>> = {
  ro: {
    home: "",
    privacy: "politica",
    cookie: "politica-cookie",
    terms: "termeni-si-conditii",
  },
  en: {
    home: "en",
    privacy: "en/privacy-policy",
    cookie: "en/cookie-policy",
    terms: "en/terms-and-conditions",
  },
};

export const getBasePath = () =>
  import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

export const getLocalizedPath = (
  locale: Locale,
  page: PageKey,
  hash?: string,
) => {
  const slug = pageSlugs[locale][page];
  const basePath = getBasePath();
  const pathname = slug ? `${basePath}${slug}` : basePath;

  if (!hash) return pathname;

  return `${pathname}${hash.startsWith("#") ? hash : `#${hash}`}`;
};

export const getAlternateLocale = (locale: Locale): Locale =>
  locale === "ro" ? "en" : "ro";

export const siteContent = {
  ro: {
    meta: {
      homeTitle: "ISAF - Electrificare feroviară & sisteme de semnalizare | România",
      homeDescription:
        "ISAF proiectează și fabrică produse de semnalizări feroviare, linii de contact și sisteme de joasă tensiune și telecomunicații",
    },
    navbar: {
      links: [
        { label: "Despre", href: "#about" },
        { label: "Produse", href: "#products" },
        { label: "De ce ISAF", href: "#why-isaf" },
        { label: "Proiecte", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Contactați-ne",
      switchLabel: "EN",
      switchAriaLabel: "Schimbă în limba engleză",
    },
    hero: {
      badge: "Electrificare feroviară din 1957",
      titlePrefix: "Alimentăm infrastructura",
      titleHighlight: "feroviară a României",
      description:
        "ISAF proiectează și fabrică produse de semnalizare, linii de contact, instalații de tensiune joasă și telecomunicații pentru proiecte moderne de electrificare feroviară.",
      primaryCta: "Soluțiile noastre",
      secondaryCta: "Contactați-ne",
      scrollAriaLabel: "Derulați în jos",
      stats: [
        {
          number: "75+",
          label: "ani de experiență în automatizări",
          mobileLabel: "ani de experiență",
        },
        {
          number: "9500+",
          label: "km cale ferată electrificată",
          mobileLabel: "km cale ferată electrificată",
        },
        {
          number: "88",
          label: "de angajați calificați",
          mobileLabel: "angajați calificați",
        },
      ],
    },
    about: {
      eyebrow: "Despre ISAF",
      title: "Un partener de încredere în electrificarea feroviară",
      paragraphs: [
        "ISAF (Instalații Electrice și Automatizări Feroviare) este o companie românească specializată în proiectarea, fabricarea și furnizarea de echipamente pentru electrificarea feroviară. Cu sediul în România, ne-am construit o reputație solidă pentru livrarea de soluții fiabile și performante operatorilor feroviari.",
        "Cu peste trei decenii de expertiză inginerească, ISAF oferă suport complet, de la proiectarea și certificarea produselor până la furnizare, îndrumare pentru instalare și servicii post-vânzare. Soluțiile noastre alimentează rețele de cale ferată principale, suburbane și urbane din România și din alte țări.",
      ],
      badges: [
        "Certificat AFER",
        "Certificat ISO 9001",
        "Certificat ISO 14001",
        "Certificat ISO 45001",
      ],
      imageAlt: "Clienți și parteneri ISAF",
      values: [
        {
          title: "Siguranța pe primul loc",
          description:
            "Fiecare produs este proiectat conform celor mai înalte standarde de siguranță, asigurând funcționarea fiabilă în medii feroviare critice.",
        },
        {
          title: "Calitate certificată",
          description:
            "Procesele noastre de fabricație respectă standardele feroviare AFER și sistemele de management al calității ISO 9001, al mediului 14001 și al securității și sănătății ocupaționale 45001.",
        },
        {
          title: "Acoperire europeană",
          description:
            "Furnizăm soluții de electrificare de încredere operatorilor și antreprenorilor feroviari din România și din întreaga Europă.",
        },
        {
          title: "Orientare spre inovație",
          description:
            "Investițiile continue în cercetare și dezvoltare asigură că produsele noastre satisfac cerințele moderne de eficiență, fiabilitate și durabilitate.",
        },
      ],
    },
    products: {
      eyebrow: "Produsele noastre",
      title: "Soluții complete de electrificare feroviară",
      description:
        "Trei linii de produse de bază care acoperă împreună toate aspectele electrificării feroviare moderne.",
      cta: "Solicitați informații despre acest produs",
      items: [
        {
          id: "signalling",
          category: "Semnalizare",
          headline: "Sisteme avansate de semnalizare feroviară",
          description:
            "ISAF produce o gamă completă de produse de semnalizare feroviară, proiectate pentru operarea sigură și fiabilă a trenurilor. De la sisteme de avertizare la treceri la nivel până la echipamente de semnalizare de linie, produsele noastre sunt concepute pentru medii operaționale solicitante.",
          features: [
            "Sisteme de avertizare la treceri la nivel",
            "Unități de semnalizare de linie",
            "Panouri de control pentru macaze",
            "Dulapuri repetoare de semnal",
            "Interfețe numărătoare de osii",
            "Indicatoare luminoase cu fibră optică",
          ],
        },
        {
          id: "contact-lines",
          category: "Linii de contact",
          headline: "Echipamente de înaltă performanță",
          description:
            "ISAF furnizează sisteme complete de linii de contact pentru proiecte de electrificare feroviară. Componentele noastre de linii aeriene (OLE) sunt proiectate pentru colectarea fiabilă a curentului la viteze de până la 250 km/h, construite conform standardelor UIC și EN.",
          features: [
            "Sisteme de fir catenar",
            "Fir de contact și cleme",
            "Ansambluri consola",
            "Izolatori de secțiune",
            "Echipamente de tensionare",
            "Sisteme de punere la pământ și legătură",
          ],
        },
        {
          id: "cabinets",
          category: "Dulapuri",
          headline: "Dulapuri electrice destinate căilor ferate",
          description:
            "Dulapurile noastre electrice sunt proiectate și construite pentru performanță feroviară. Fabricate la grade de protecție IP65+, adăpostesc sisteme electrice critice în medii de linie și stații, cu o durabilitate concepută pentru decenii de funcționare.",
          features: [
            "Dulapuri de distribuție de linie",
            "Panouri de control cu relee și logică",
            "Dulapuri de telecomunicații și date",
            "Carcase pentru echipamente de încrucișare",
            "Unități de distribuție a alimentării",
            "Carcase personalizate la comandă",
          ],
        },
      ],
    },
    whyIsaf: {
      eyebrow: "De ce să ne alegeți",
      title: "De ce profesioniștii feroviari aleg ISAF",
      description:
        "De la operatori naționali de cale ferată până la antreprenori specializați, profesioniștii feroviari din toată Europa au încredere în ISAF pentru livrarea de echipamente de electrificare certificate, la timp și conform specificațiilor.",
      highlightTitle: "Expertiză aplicată",
      highlightSubtitle: "în condiții reale de teren",
      highlightDescription:
        "Rezolvăm provocări tehnice complexe prin soluții personalizate, proiectate pentru performanță, siguranță și durabilitate.",
      reasons: [
        {
          title: "75+ ani de expertiză",
          description:
            "Decenii de experiență în livrarea de proiecte de electrificare feroviară ne oferă o cunoaștere de neegalat a ceea ce funcționează în teren.",
        },
        {
          title: "Certificare completă",
          description:
            "Toate produsele poartă marcajele CE necesare și respectă standardele feroviare AFER, simplificând achizițiile pentru operatori.",
        },
        {
          title: "Inginerie personalizată",
          description:
            "Proiectăm soluții la comandă adaptate cerințelor specifice ale proiectului dumneavoastră, de la prototip până la serii de producție complete.",
        },
        {
          title: "Istoric dovedit",
          description:
            "Sute de proiecte livrate cu succes pe rețelele feroviare din România și Europa stau mărturie a fiabilității noastre.",
        },
        {
          title: "Suport post-vânzare",
          description:
            "Echipele dedicate de suport tehnic asigură funcționarea optimă a echipamentelor dumneavoastră pe toată durata de viață a acestora.",
        },
        {
          title: "Calitate românească",
          description:
            "Proiectat și fabricat în România, îmbinând agilitatea locală cu standardele de inginerie europene pentru o valoare superioară.",
        },
      ],
    },
    projects: {
      eyebrow: "Proiecte",
      title: "Implementări și realizări ISAF",
      description:
        "O privire asupra proiectelor realizate și a echipamentelor implementate de ISAF în rețeaua feroviară.",
      galleryAriaLabel: "Galerie proiecte ISAF",
      openImageLabel: "Deschide imaginea {index} din galerie",
      openFeaturedLabel: "Deschide imaginea principală din galerie",
      previousImageLabel: "Imaginea anterioară",
      nextImageLabel: "Imaginea următoare",
      previousSetLabel: "Setul anterior de imagini",
      nextSetLabel: "Setul următor de imagini",
      closeGalleryLabel: "Închide galeria",
      imageAlts: [
        "Imagine din proiectele ISAF",
        "Imagine dintr-un proiect ISAF",
        "Detaliu dintr-un proiect ISAF",
        "Imagine dintr-un proiect ISAF",
        "Imagine dintr-un proiect ISAF",
        "Imagine dintr-un proiect ISAF",
      ],
    },
    contact: {
      eyebrow: "Luați legătura",
      title: "Să discutăm despre proiectul dumneavoastră",
      description:
        "Indiferent dacă aveți nevoie de informații despre produse, o ofertă sau îndrumare tehnică, echipa noastră este pregătită să vă ajute. Contactați-ne și vă vom răspunde în termen de o zi lucrătoare.",
      locationInfo: [
        {
          label: "Adresă sediu",
          value: "Str. Lugoj nr. 68, C.P. 012212, Sector 1, București, România",
        },
        {
          label: "Dep. industrial",
          value: "Str. Copșa Mică nr 25, C.P. 014619, Sector 1, București, România",
        },
      ],
      phoneFaxInfo: [
        { label: "Telefon", value: "+40 21 220 80 75" },
        { label: "Fax", value: "+40 37 409 22 39" },
      ],
      scheduleTitle: "Program de Lucru",
      schedule: [
        { days: "Luni – Vineri", hours: "08:00 – 17:00" },
        { days: "Sâmbătă – Duminică", hours: "Închis" },
      ],
      successTitle: "Mesaj Trimis!",
      successDescription:
        "Vă mulțumim că ați contactat ISAF. Vă vom răspunde în termen de o zi lucrătoare.",
      sendAnotherMessage: "Trimiteți un alt mesaj",
      genericError:
        "Nu am putut trimite mesajul. Încercați din nou sau scrieți direct la office@isaf.ro.",
      formTitle: "Trimiteți-ne un mesaj",
      fields: {
        name: "Nume Complet *",
        company: "Companie",
        email: "Adresă de Email *",
        subject: "Subiect *",
        message: "Mesaj *",
      },
      placeholders: {
        name: "Ion Popescu",
        company: "Compania Dumneavoastră SRL",
        email: "nume@companie.ro",
        message: "Descrieți proiectul sau solicitarea dumneavoastră...",
      },
      subjectPlaceholder: "Selectați un subiect...",
      subjectOptions: [
        "Solicitare produse",
        "Suport Tehnic",
        "Resurse umane",
        "Parteneriat / Distribuitor",
        "Altele",
      ],
      submitLabel: "Trimite Mesajul",
      loadingLabel: "Se trimite...",
      jsErrors: {
        submitFailed: "Nu am putut trimite mesajul. Încercați din nou.",
        networkFailed:
          "Nu am putut trimite mesajul. Verificați conexiunea și încercați din nou.",
      },
    },
    footer: {
      description:
        "Producătorul român de referință pentru echipamente de electrificare feroviară, sisteme de semnalizare, echipamente de linii de contact, instalații de joasă tensiune și telecomunicații.",
      productsTitle: "Produse",
      productLinks: [
        "Produse Semnalizare",
        "Dulapuri electrice feroviare",
        "Sisteme de linii de contact",
        "Soluții personalizate",
      ],
      companyTitle: "Companie",
      companyLinks: [
        { label: "Despre ISAF", href: "#about" },
        { label: "De ce să ne alegeți", href: "#why-isaf" },
        { label: "Proiecte", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      contactTitle: "Contact",
      address:
        "Str. Lugoj nr. 68, Sector 1, București, România",
      copyright:
        "Toate drepturile rezervate. Înregistrată în România.",
      legalLinks: {
        privacy: "Politică de Confidențialitate",
        terms: "Termeni și Condiții",
        cookie: "Politică Cookie",
      },
      switchLabel: "English",
      switchAriaLabel: "Deschide versiunea în limba engleză",
    },
    cookieBanner: {
      title: "Setări cookie",
      description:
        "Folosim Google Analytics 4 doar după acceptul dumneavoastră, pentru a măsura traficul și interacțiunile esențiale din site.",
      detailsLabel: "Detalii în",
      policyLabel: "Politica Cookie",
      accept: "Accept analytics",
      reject: "Refuz",
    },
    legalPage: {
      backHome: "Înapoi la pagina principală",
      eyebrow: "Document legal",
      updatedAtLabel: "Ultima actualizare:",
    },
    api: {
      missingFields: "Completați toate câmpurile obligatorii.",
      invalidEmail: "Introduceți o adresă de email validă.",
      notConfigured: "Formularul nu este configurat încă pentru trimitere.",
      sendFailed: "Nu am putut trimite mesajul. Încercați din nou.",
      unspecifiedCompany: "Nespecificată",
      emailSubjectPrefix: "[ISAF Website]",
      emailTitle: "Mesaj nou de pe site-ul ISAF",
      emailLabels: {
        name: "Nume",
        company: "Companie",
        email: "Email",
        subject: "Subiect",
        message: "Mesaj",
      },
    },
  },
  en: {
    meta: {
      homeTitle: "ISAF - Railway Electrification & Signalling Systems | Romania",
      homeDescription:
        "ISAF designs and manufactures railway signalling products, overhead contact line equipment, low-voltage systems, and telecommunications solutions.",
    },
    navbar: {
      links: [
        { label: "About", href: "#about" },
        { label: "Products", href: "#products" },
        { label: "Why ISAF", href: "#why-isaf" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Contact Us",
      switchLabel: "RO",
      switchAriaLabel: "Switch to Romanian",
    },
    hero: {
      badge: "Railway electrification since 1957",
      titlePrefix: "Powering",
      titleHighlight: "Romania's railway infrastructure",
      description:
        "ISAF designs and manufactures signalling products, overhead contact line equipment, low-voltage installations, and telecommunications systems for modern railway electrification projects.",
      primaryCta: "Our solutions",
      secondaryCta: "Contact Us",
      scrollAriaLabel: "Scroll down",
      stats: [
        {
          number: "75+",
          label: "years of automation expertise",
          mobileLabel: "years of expertise",
        },
        {
          number: "9500+",
          label: "km of electrified railway",
          mobileLabel: "km electrified railway",
        },
        {
          number: "88",
          label: "qualified employees",
          mobileLabel: "qualified employees",
        },
      ],
    },
    about: {
      eyebrow: "About ISAF",
      title: "A trusted partner in railway electrification",
      paragraphs: [
        "ISAF (Railway Electrical Installations and Automation) is a Romanian company specialized in the design, manufacture, and supply of railway electrification equipment. Based in Romania, we have built a strong reputation for delivering reliable, high-performance solutions to railway operators.",
        "With more than three decades of engineering expertise, ISAF provides end-to-end support, from product design and certification to supply, installation guidance, and after-sales services. Our solutions power mainline, suburban, and urban rail networks in Romania and abroad.",
      ],
      badges: [
        "AFER Certified",
        "ISO 9001 Certified",
        "ISO 14001 Certified",
        "ISO 45001 Certified",
      ],
      imageAlt: "ISAF clients and partners",
      values: [
        {
          title: "Safety first",
          description:
            "Every product is engineered to the highest safety standards, ensuring dependable operation in critical railway environments.",
        },
        {
          title: "Certified quality",
          description:
            "Our manufacturing processes comply with AFER railway standards and ISO 9001, ISO 14001, and ISO 45001 management systems.",
        },
        {
          title: "European reach",
          description:
            "We supply dependable electrification solutions to railway operators and contractors across Romania and Europe.",
        },
        {
          title: "Innovation driven",
          description:
            "Continuous investment in research and development ensures our products meet modern requirements for efficiency, reliability, and durability.",
        },
      ],
    },
    products: {
      eyebrow: "Our products",
      title: "Complete railway electrification solutions",
      description:
        "Three core product lines that together cover all key aspects of modern railway electrification.",
      cta: "Request information about this product",
      items: [
        {
          id: "signalling",
          category: "Signalling",
          headline: "Advanced railway signalling systems",
          description:
            "ISAF manufactures a complete range of railway signalling products engineered for safe and reliable train operations. From level crossing warning systems to line-side signalling equipment, our products are built for demanding operational environments.",
          features: [
            "Level crossing warning systems",
            "Line-side signalling units",
            "Point control panels",
            "Signal repeater cabinets",
            "Axle counter interfaces",
            "Fiber-optic light indicators",
          ],
        },
        {
          id: "contact-lines",
          category: "Contact lines",
          headline: "High-performance contact line equipment",
          description:
            "ISAF supplies complete overhead contact line systems for railway electrification projects. Our OLE components are engineered for reliable current collection at speeds of up to 250 km/h and built to UIC and EN standards.",
          features: [
            "Catenary wire systems",
            "Contact wire and clamps",
            "Cantilever assemblies",
            "Section insulators",
            "Tensioning equipment",
            "Grounding and bonding systems",
          ],
        },
        {
          id: "cabinets",
          category: "Cabinets",
          headline: "Railway-grade electrical cabinets",
          description:
            "Our electrical cabinets are designed and built for railway performance. Manufactured up to IP65+ protection classes, they house critical electrical systems in line-side and station environments with durability engineered for decades of service.",
          features: [
            "Line-side distribution cabinets",
            "Relay and logic control panels",
            "Telecommunications and data cabinets",
            "Crossing equipment enclosures",
            "Power distribution units",
            "Custom-built enclosures",
          ],
        },
      ],
    },
    whyIsaf: {
      eyebrow: "Why choose us",
      title: "Why railway professionals choose ISAF",
      description:
        "From national rail operators to specialist contractors, railway professionals across Europe rely on ISAF to deliver certified electrification equipment on time and to specification.",
      highlightTitle: "Applied expertise",
      highlightSubtitle: "for real-world conditions",
      highlightDescription:
        "We solve complex technical challenges through tailored solutions designed for performance, safety, and durability.",
      reasons: [
        {
          title: "75+ years of expertise",
          description:
            "Decades of experience in railway electrification projects give us unmatched insight into what works in the field.",
        },
        {
          title: "Full certification",
          description:
            "All products carry the required CE markings and comply with AFER railway standards, streamlining procurement for operators.",
        },
        {
          title: "Custom engineering",
          description:
            "We design bespoke solutions tailored to your project's requirements, from prototype to full production runs.",
        },
        {
          title: "Proven track record",
          description:
            "Hundreds of successfully delivered projects across Romanian and European rail networks demonstrate our reliability.",
        },
        {
          title: "After-sales support",
          description:
            "Dedicated technical support teams help keep your equipment performing throughout its service life.",
        },
        {
          title: "Romanian engineering quality",
          description:
            "Designed and manufactured in Romania, combining local agility with European engineering standards for superior value.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "ISAF implementations and achievements",
      description:
        "A look at projects delivered and equipment deployed by ISAF across the railway network.",
      galleryAriaLabel: "ISAF projects gallery",
      openImageLabel: "Open image {index} in gallery",
      openFeaturedLabel: "Open featured image in gallery",
      previousImageLabel: "Previous image",
      nextImageLabel: "Next image",
      previousSetLabel: "Previous image set",
      nextSetLabel: "Next image set",
      closeGalleryLabel: "Close gallery",
      imageAlts: [
        "Image from ISAF projects",
        "Image from an ISAF project",
        "Detail from an ISAF project",
        "Image from an ISAF project",
        "Image from an ISAF project",
        "Image from an ISAF project",
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Let's discuss your project",
      description:
        "Whether you need product information, a quotation, or technical guidance, our team is ready to help. Contact us and we will reply within one business day.",
      locationInfo: [
        {
          label: "Head office",
          value: "68 Lugoj Street, P.O. Box 012212, District 1, Bucharest, Romania",
        },
        {
          label: "Industrial dept.",
          value: "25 Copșa Mică Street, P.O. Box 014619, District 1, Bucharest, Romania",
        },
      ],
      phoneFaxInfo: [
        { label: "Phone", value: "+40 21 220 80 75" },
        { label: "Fax", value: "+40 37 409 22 39" },
      ],
      scheduleTitle: "Working hours",
      schedule: [
        { days: "Monday - Friday", hours: "08:00 - 17:00" },
        { days: "Saturday - Sunday", hours: "Closed" },
      ],
      successTitle: "Message sent!",
      successDescription:
        "Thank you for contacting ISAF. We will reply within one business day.",
      sendAnotherMessage: "Send another message",
      genericError:
        "We could not send your message. Please try again or email us directly at office@isaf.ro.",
      formTitle: "Send us a message",
      fields: {
        name: "Full name *",
        company: "Company",
        email: "Email address *",
        subject: "Subject *",
        message: "Message *",
      },
      placeholders: {
        name: "John Smith",
        company: "Your Company Ltd.",
        email: "name@company.com",
        message: "Describe your project or request...",
      },
      subjectPlaceholder: "Select a subject...",
      subjectOptions: [
        "Product inquiry",
        "Technical support",
        "Human resources",
        "Partnership / Distributor",
        "Other",
      ],
      submitLabel: "Send message",
      loadingLabel: "Sending...",
      jsErrors: {
        submitFailed: "We could not send your message. Please try again.",
        networkFailed:
          "We could not send your message. Check your connection and try again.",
      },
    },
    footer: {
      description:
        "Romania's reference manufacturer for railway electrification equipment, signalling systems, overhead contact line equipment, low-voltage installations, and telecommunications.",
      productsTitle: "Products",
      productLinks: [
        "Signalling products",
        "Railway electrical cabinets",
        "Contact line systems",
        "Custom solutions",
      ],
      companyTitle: "Company",
      companyLinks: [
        { label: "About ISAF", href: "#about" },
        { label: "Why choose us", href: "#why-isaf" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      contactTitle: "Contact",
      address:
        "68 Lugoj Street, District 1, Bucharest, Romania",
      copyright:
        "All rights reserved. Registered in Romania.",
      legalLinks: {
        privacy: "Privacy Policy",
        terms: "Terms and Conditions",
        cookie: "Cookie Policy",
      },
      switchLabel: "Romana",
      switchAriaLabel: "Open the Romanian version",
    },
    cookieBanner: {
      title: "Cookie settings",
      description:
        "We use Google Analytics 4 only after your consent to measure traffic and essential on-site interactions.",
      detailsLabel: "Details in",
      policyLabel: "Cookie Policy",
      accept: "Accept analytics",
      reject: "Reject",
    },
    legalPage: {
      backHome: "Back to homepage",
      eyebrow: "Legal document",
      updatedAtLabel: "Last updated:",
    },
    api: {
      missingFields: "Please fill in all required fields.",
      invalidEmail: "Please enter a valid email address.",
      notConfigured: "The contact form is not configured for sending yet.",
      sendFailed: "We could not send your message. Please try again.",
      unspecifiedCompany: "Not specified",
      emailSubjectPrefix: "[ISAF Website]",
      emailTitle: "New message from the ISAF website",
      emailLabels: {
        name: "Name",
        company: "Company",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },
    },
  },
} satisfies Record<Locale, unknown>;

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);
