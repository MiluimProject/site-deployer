export type Lang = "en" | "he";

export type Translation = {
  dir: "ltr" | "rtl";
  metaTitle: string;
  metaDescription: string;
  nav: {
    stories: string;
    news: string;
    about: string;
    partners: string;
    founders: string;
    donate: string;
    toggleAria: string;
    toggleLabel: string;
  };
  mission: {
    title: string;
    body: string | string[];
    emphasis: string;
  };
  whatWeDo: {
    title: string;
    p1: string;
    p2: string;
  };
  news: {
    title: string;
    articles: Array<{ title: string; publication: string }>;
  };
  partners: {
    title: string;
    subtitle: string;
    names: Record<string, string>;
  };
  founders: {
    title: string;
    people: Array<{ name: string; role: string }>;
  };
  donate: {
    title: string;
    button: string;
    reservistButton: string;
  };
  reservistForm: {
    title: string;
    intro: string;
    name: string;
    email: string;
    phone: string;
    unit: string;
    story: string;
    submit: string;
    cancel: string;
    close: string;
    success: string;
  };

  footer: {
    copy: string;
  };
  aria: {
    spotify: string;
    instagram: string;
    linkedin: (name: string) => string;
    videoCarousel: string;
    newsCarousel: string;
    playVideo: string;
    videoTitle: (i: number) => string;
  };
};

export const translations: Record<Lang, Translation> = {
  en: {
    dir: "ltr",
    metaTitle: "Life on the Frontlines — Honoring Service. Preserving Stories. Building Memory.",
    metaDescription:
      "Life on the Frontlines preserves the oral histories of Israeli reservists through long-form interviews, building the largest digital archive of its kind.",
    nav: {
      stories: "Clips",
      news: "News",
      about: "About",
      partners: "Partners",
      founders: "Founders",
      donate: "Support Us",
      toggleAria: "Switch language to Hebrew",
      toggleLabel: "עברית",
    },
    mission: {
      title: "Honoring Service. Preserving Stories. Building Memory.",
      body: [
        "On October 7th, as the worst attacks on the country were still underway, 300,000 reservists answered the call and reported for duty. They lost friends. They made impossible choices. And then they came home — to work, to family, to school pickup. And then again, back to the front. Back and forth, neither here nor there.",
      ],
      emphasis: "Our mission: To preserve their story.",
    },
    whatWeDo: {
      title: "What We Do",
      p1: "Life on the Frontlines has launched the first-of-its-kind global digital archive to record, preserve, and share the unfiltered testimonies of Israeli reservists, building bridges of understanding, healing, and remembrance across generations, communities, and humanity.",
      p2: "Using long-form podcast-setting conversations with professional interviewers, we aim to create the largest oral history archive of Israeli reservists at battle.",
    },
    news: {
      title: "In the News",
      articles: [
        { title: "'My family will finally hear my story': New IDF reservist archive launches", publication: "The Jerusalem Post" },
        { title: "Life on the Frontlines: The project giving reservists beyond the headlines a voice", publication: "Israel Hayom" },
        { title: "\"Life on the Frontlines\": Israelis who fought in this war tell their story", publication: "Israel From the Inside" },
      ],
    },
    partners: {
      title: "Our Partners",
      subtitle:
        "Life on the Frontlines is a non-profit founded by reservists, for reservists, in collaboration with leading foundations, tech companies, and public sector institutions.",
      names: {
        leonLevy: "Leon Levy Foundation",
        nationalLibrary: "National Library of Israel",
        snc: "Start-Up Nation Central",
        ministry: "Ministry of Aliyah and Integration",
        beshvil: "Beshvil HaMachar",
        allIn: "All In Podcast",
      },
    },
    founders: {
      title: "Our Founders",
      people: [
        { name: "Netanel Ben Shushan", role: "CEO & Co-Founder" },
        { name: "Tzvi Stern", role: "Co-Founder & Chairman" },
        { name: "Yonit Serkin", role: "Co-Founder" },
      ],
    },
    donate: {
      title: "Give Reservists the Opportunity to Tell Their Story",
      button: "Support Us",
      reservistButton: "Reservist? Tell your story",
    },
    reservistForm: {
      title: "Tell Your Story",
      intro: "Are you a reservist who served since October 7? Share your details and our team will reach out to schedule an interview.",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      unit: "Unit / Role (optional)",
      story: "A few words about your story (optional)",
      submit: "Submit",
      cancel: "Cancel",
      close: "Close",
      success: "Thank you — your email client will open to send us your details. We'll be in touch soon.",
    },

    footer: {
      copy: "© 2025 Life on the Frontlines. All rights reserved.",
    },
    aria: {
      spotify: "Listen on Spotify",
      instagram: "Follow on Instagram",
      linkedin: (name) => `${name} on LinkedIn`,
      videoCarousel: "Video stories carousel",
      newsCarousel: "News articles carousel",
      playVideo: "Play video",
      videoTitle: (i) => `Reservist story video ${i + 1}`,
    },
  },
  he: {
    dir: "rtl",
    metaTitle: "החיים בחזית — מכבדים שירות. משמרים סיפורים. בונים זיכרון.",
    metaDescription:
      "פרויקט 'החיים בחזית' משמר את סיפוריהם של חיילי המילואים הישראלים באמצעות ראיונות עומק, ובונה את הארכיון הדיגיטלי הגדול מסוגו.",
    nav: {
      stories: "קליפים",
      news: "חדשות",
      about: "אודות",
      partners: "שותפים",
      founders: "מייסדים",
      donate: "תמכו בנו",
      toggleAria: "החלף שפה לאנגלית",
      toggleLabel: "English",
    },
    mission: {
      title: "חיים על הקו - שומעים את הסיפור. בונים זיכרון.",
      body: [
        "ב-7 באוקטובר המציאות של כולנו השתנתה, ויחד איתה נולד פה דור שלם חדש, מעל 300,000 אנשי ונשות מילואים מצאו את עצמם עוזבים את השגרה הרגילה שלהם, את המשפחה, העבודה והלימודים, ועולים על מדים, להילחם על הבית.",
        "מאז, נוצרה שגרה חדשה ולא מוכרת. החיים נעים כל הזמן בתנועה של הלוך וחזור: רגע אחד בחזית, וברגע הבא בבית, בלימודים, אוספים את הילדים מהמסגרות בעבודה ובחיי היום יום. חיים על הקו, בין פה לשם.",
        "אנחנו כאן כדי ללכוד את הקולות האלו עכשיו, בזמן אמת, כשהזיכרון חי והלב עוד פתוח, ולבנות את ארכיון הסיפורים והזיכרון שיאפשר עכשיו ולדורות הבאים לגדול על המורשת והגבורה של דור שלם חדש שנוצר של המילואימניקים.",
      ],
      emphasis: "",
    },
    whatWeDo: {
      title: "מה אנחנו עושים",
      p1: "חיים על הקו עמותה שהוקמה על ידי מילואימניקים, למען מילואימניקים, בשיתוף פעולה עם קרנות מובילות, חברות הייטק ומוסדות מהמגזר הציבורי.",
      p2: "",
    },
    news: {
      title: "בחדשות",
      articles: [
        { title: "'My family will finally hear my story': New IDF reservist archive launches", publication: "ג'רוזלם פוסט" },
        { title: "\"Life on the Frontlines\": הפרויקט שנותן קול למילואימניקים שמעבר לכותרות", publication: "ישראל היום" },
        { title: "\"Life on the Frontlines\": מי שנלחם במלחמה הזו מספר את סיפורו", publication: "פודקאסט Israel From the Inside" },
      ],
    },
    partners: {
      title: "השותפים שלנו",
      subtitle:
        "'החיים בחזית' הוא ארגון ללא מטרות רווח שהוקם על ידי אנשי מילואים, למען אנשי מילואים, בשיתוף פעולה עם קרנות מובילות, חברות טכנולוגיה ומוסדות מהמגזר הציבורי.",
      names: {
        leonLevy: "קרן ליאון לוי",
        nationalLibrary: "הספרייה הלאומית של ישראל",
        snc: "סטארט-אפ ניישן סנטרל",
        ministry: "המשרד לעלייה וקליטה",
        beshvil: "בשביל המחר",
        allIn: "פודקאסט אול אין",
      },
    },
    founders: {
      title: "המייסדים שלנו",
      people: [
        { name: "נתנאל בן שושן", role: "מנכ״ל ומייסד שותף" },
        { name: "צבי שטרן", role: "מייסד שותף ויו״ר" },
        { name: "יונית סירקין", role: "מייסדת שותפה" },
      ],
    },
    donate: {
      title: "תנו לחיילי המילואים את ההזדמנות לספר את סיפורם",
      button: "תמכו בנו",
    },
    footer: {
      copy: "© 2025 החיים בחזית. כל הזכויות שמורות.",
    },
    aria: {
      spotify: "האזינו בספוטיפיי",
      instagram: "עקבו באינסטגרם",
      linkedin: (name) => `${name} בלינקדאין`,
      videoCarousel: "קרוסלת סיפורי וידאו",
      newsCarousel: "קרוסלת מאמרי חדשות",
      playVideo: "נגן וידאו",
      videoTitle: (i) => `סיפור חייל מילואים מספר ${i + 1}`,
    },
  },
};
