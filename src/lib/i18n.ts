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
    body: string;
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
      stories: "Stories",
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
      body: "On October 7th, as the worst attacks on the country were still underway, 300,000 reservists answered the call and reported for duty. They lost friends. They made impossible choices. And then they came home — to work, to family, to school pickup. And then again, back to the front. Back and forth, neither here nor there.",
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
        { title: "Placeholder Article Title One — replace with real headline", publication: "The Times of Israel" },
        { title: "Placeholder Article Title Two — replace with real headline", publication: "The Jerusalem Post" },
        { title: "Placeholder Article Title Three — replace with real headline", publication: "Ynet News" },
        { title: "Placeholder Article Title Four — replace with real headline", publication: "Haaretz" },
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
      stories: "סיפורים",
      news: "חדשות",
      about: "אודות",
      partners: "שותפים",
      founders: "מייסדים",
      donate: "תמכו בנו",
      toggleAria: "החלף שפה לאנגלית",
      toggleLabel: "English",
    },
    mission: {
      title: "מכבדים שירות. משמרים סיפורים. בונים זיכרון.",
      body: "ב-7 באוקטובר, בזמן שהמתקפות הקשות ביותר על המדינה עדיין נמשכו, 300,000 חיילי מילואים ענו לקריאה והתייצבו לשירות. הם איבדו חברים. הם קיבלו החלטות בלתי אפשריות. ואז הם חזרו הביתה — לעבודה, למשפחה, לאיסוף מהגן. ואז שוב, חזרה לחזית. הלוך ושוב, לא כאן ולא שם.",
      emphasis: "המשימה שלנו: לשמר את סיפורם.",
    },
    whatWeDo: {
      title: "מה אנחנו עושים",
      p1: "פרויקט 'החיים בחזית' השיק את הארכיון הדיגיטלי הגלובלי הראשון מסוגו לתיעוד, שימור והפצה של עדויות בלתי מסוננות של חיילי המילואים הישראלים, ובכך בונה גשרים של הבנה, ריפוי וזיכרון בין דורות, קהילות והאנושות כולה.",
      p2: "באמצעות שיחות עומק בפורמט של פודקאסט עם מראיינים מקצועיים, אנו שואפים ליצור את ארכיון ההיסטוריה הבעל-פה הגדול ביותר של חיילי המילואים הישראלים בקרב.",
    },
    news: {
      title: "בחדשות",
      articles: [
        { title: "כותרת מאמר לדוגמה מספר אחת — יש להחליף בכותרת אמיתית", publication: "טיימס אוף ישראל" },
        { title: "כותרת מאמר לדוגמה מספר שתיים — יש להחליף בכותרת אמיתית", publication: "ג׳רוזלם פוסט" },
        { title: "כותרת מאמר לדוגמה מספר שלוש — יש להחליף בכותרת אמיתית", publication: "ynet" },
        { title: "כותרת מאמר לדוגמה מספר ארבע — יש להחליף בכותרת אמיתית", publication: "הארץ" },
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
        { name: "יונית סרקין", role: "מייסדת שותפה" },
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
