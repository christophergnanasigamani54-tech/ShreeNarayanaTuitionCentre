/**
 * =============================================================
 *  TRANSLATIONS  (English + Tamil)
 * =============================================================
 *  All visible website text lives here.
 *  - English values that come from src/config/siteConfig.js
 *    (centre name, tagline, address, opening hours) are read from
 *    there automatically.
 *  - Tamil versions of those four things are in `ta.brand` below.
 *    Edit them there if you change the name / tagline / address.
 * =============================================================
 */

/* ---------- Opening-hours helper (English -> Tamil) ---------- */
const DAYS = {
  Monday: "திங்கள்",
  Tuesday: "செவ்வாய்",
  Wednesday: "புதன்",
  Thursday: "வியாழன்",
  Friday: "வெள்ளி",
  Saturday: "சனி",
  Sunday: "ஞாயிறு",
  Mon: "திங்.",
  Tue: "செவ்.",
  Wed: "புத.",
  Thu: "வியா.",
  Fri: "வெள்.",
  Sat: "சனி",
  Sun: "ஞாயி.",
};

const WORDS = {
  "Doubt Clearing": "சந்தேக நிவர்த்தி",
  Closed: "விடுமுறை",
  Holiday: "விடுமுறை",
};

function toTamilTime(text) {
  return text.replace(/(\d{1,2}):(\d{2})\s*(AM|PM)/gi, (_, h, m, ap) => {
    const hour = parseInt(h, 10);
    let part;
    if (ap.toUpperCase() === "AM") part = "காலை";
    else if (hour === 12 || hour <= 3) part = "மதியம்";
    else if (hour <= 7) part = "மாலை";
    else part = "இரவு";
    return `${part} ${h}:${m}`;
  });
}

function toTamilText(text) {
  let out = text;
  [...Object.entries(DAYS), ...Object.entries(WORDS)].forEach(([en, ta]) => {
    out = out.replace(new RegExp(`\\b${en}\\b`, "g"), ta);
  });
  return toTamilTime(out);
}

export function localizeHours(slot) {
  return { day: toTamilText(slot.day), time: toTamilText(slot.time) };
}

/* ---------- Dictionaries ---------- */
export const translations = {
  /* =========================== ENGLISH =========================== */
  en: {
    meta: {
      title: null, // null = keep the title already in index.html
      description: null,
    },
    toggle: { label: "தமிழ்", aria: "Switch to Tamil" },
    nav: {
      home: "Home",
      about: "About",
      courses: "Courses",
      services: "Services",
      contact: "Contact",
      joinShort: "Join WhatsApp",
      join: "Join WhatsApp Group",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      primary: "Primary navigation",
      logoAlt: (name) => `${name} logo`,
    },
    hero: {
      badge: (n) => `${n}+ Years of Academic Excellence`,
      titlePrefix: "Welcome to ",
      titleSuffix: "",
      description:
        "Quality academic coaching for school students from Class 6 to 12 — with experienced teachers, small batches, personal attention and regular assessments that help every student truly excel.",
      join: "Join WhatsApp Group",
      enquire: "Enquire Now",
      studentsMentored: (n) => `${n} Students Mentored`,
      classes: "Classes 6–12",
      imageAlt: (name) => `${name} — students learning together`,
      resultRate: "Result Rate",
      batchSize: "Batch Size",
      maxBatch: (n) => `Max ${n}`,
    },
    dailyKural: {
      title: "Today's Thirukkural",
      number: (n) => `Kural ${n}`,
      loading: "Loading today's Kural...",
      error: "Today's Kural couldn't be loaded.",
      retry: "Try again",
    },
    about: {
      eyebrow: "About Us",
      title: (short) => `Why Families Trust ${short}`,
      description: (year) =>
        `Since ${year}, we've helped students build strong academic foundations through a teaching methodology that blends conceptual clarity, consistent practice and genuine mentorship.`,
      p1: (name) =>
        `${name} was founded with one simple belief: every student can excel when taught the right way. Our methodology focuses on building strong fundamentals first, followed by application-based practice and timely revision — not last-minute cramming.`,
      p2: "We keep our batches small so teachers can give real attention to every student, identify individual weak areas, and adapt teaching pace accordingly. Combined with structured tests and open communication with parents, this approach consistently delivers strong academic results.",
      statYears: "Years of Teaching",
      statStudents: "Students Mentored",
      statPass: "Pass Percentage",
      statBatch: "Max Batch Size",
      pillars: [
        {
          title: "Student-Focused Learning",
          description:
            "Every lesson plan is tailored to how each student learns best, ensuring concepts are understood, not just memorized.",
        },
        {
          title: "Experienced Teachers",
          description:
            "Our subject experts bring years of classroom experience and a genuine passion for helping students succeed.",
        },
        {
          title: "Regular Assessments",
          description:
            "Weekly tests and structured revision cycles track progress and catch learning gaps before they become problems.",
        },
        {
          title: "Parent Communication",
          description:
            "Transparent, regular updates keep parents informed of attendance, performance and areas needing attention.",
        },
      ],
    },
    courses: {
      eyebrow: "Courses & Services",
      title: "Programs for Every Grade & Goal",
      description:
        "Structured coaching programs designed around your child's class, subjects and academic goals.",
      cta: "Enquire Now",
      items: [
        {
          title: "Classes 6–8",
          description:
            "Foundation-building program covering Maths, Science and English with concept clarity and fun, activity-based learning.",
        },
        {
          title: "Classes 9–10",
          description:
            "Board-focused coaching across all core subjects with structured notes, chapter tests and previous-year paper practice.",
        },
        {
          title: "Classes 11–12",
          description:
            "In-depth coaching for Science & Commerce streams, aligned with board exams and competitive exam fundamentals.",
        },
        {
          title: "Exam Preparation",
          description:
            "Focused crash courses and mock-test series for board exams and entrance tests, with performance analysis after every test.",
        },
        {
          title: "Individual Coaching",
          description:
            "One-on-one sessions designed around a student's specific gaps, learning pace and goals for faster improvement.",
        },
      ],
    },
    why: {
      eyebrow: "Why Choose Us",
      title: "What Makes Us Different",
      description:
        "A learning environment built around commitment, consistency and genuine care for every student's progress.",
      items: [
        {
          title: "Experienced Teachers",
          description:
            "Subject-matter experts with years of proven classroom teaching experience.",
        },
        {
          title: "Small Batch Size",
          description:
            "Limited seats per batch so every student gets noticed and guided closely.",
        },
        {
          title: "Regular Tests",
          description:
            "Weekly and monthly assessments to track progress and reinforce learning.",
        },
        {
          title: "Personal Attention",
          description:
            "Teachers who know each student's strengths, weak spots and learning style.",
        },
        {
          title: "Study Materials",
          description:
            "Well-structured notes, worksheets and practice papers curated by our faculty.",
        },
        {
          title: "Doubt Clearing Sessions",
          description:
            "Dedicated sessions every week so no question ever goes unanswered.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Get In Touch",
      description:
        "Have a question or want to enroll? Reach out to us directly or send an enquiry — we'll reply on WhatsApp right away.",
      address: "Address",
      phone: "Phone",
      email: "Email",
      hours: "Opening Hours",
      joinGroup: "Join Our WhatsApp Group",
      mapTitle: (name) => `${name} Location`,
      formTitle: "Send an Enquiry",
      formHint:
        "Fill the form below and it will open WhatsApp with your details pre-filled.",
      studentName: "Student Name",
      parentName: "Parent Name",
      class: "Class",
      subject: "Subject",
      phoneNumber: "Phone Number",
      message: "Message",
      optional: "(optional)",
      ph: {
        studentName: "e.g. Arun ",
        parentName: "e.g. Rajesh ",
        class: "e.g. Class 10",
        subject: "e.g. Maths, Science",
        phone: "e.g. 98765 43210",
        message: "Tell us anything specific about your enquiry...",
      },
      send: "Send via WhatsApp",
      errors: {
        studentName: "Student name is required",
        parentName: "Parent name is required",
        studentClass: "Class is required",
        subject: "Subject is required",
        phoneRequired: "Phone number is required",
        phoneInvalid: "Enter a valid phone number",
      },
      // Message that opens in WhatsApp
      wa: {
        greeting: (name) =>
          `Hello ${name}! I would like to enquire about admission.`,
        studentName: "Student Name",
        parentName: "Parent Name",
        class: "Class",
        subject: "Subject(s)",
        phone: "Phone Number",
        message: "Message",
      },
    },
    footer: {
      quickLinks: "Quick Links",
      links: {
        home: "Home",
        about: "About",
        courses: "Courses",
        why: "Why Choose Us",
        contact: "Contact",
      },
      courses: "Courses",
      contact: "Contact",
      rights: (year, name) => `© ${year} ${name}. All rights reserved.`,
    },
    whatsappFloat: "Join our WhatsApp group",
  },

  /* ============================ TAMIL ============================ */
  ta: {
    meta: {
      title: "ஸ்ரீ நாராயணா டியூஷன் சென்டர் | 6–12 ஆம் வகுப்புக்கான சிறந்த பயிற்சி",
      description:
        "ஸ்ரீ நாராயணா டியூஷன் சென்டர் 6–12 ஆம் வகுப்பு மாணவர்களுக்கு சிறந்த பயிற்சி, பொதுத்தேர்வு தயாரிப்பு, சிறிய பிரிவுகள், தனிப்பட்ட கவனம் மற்றும் தொடர் மதிப்பீடுகளை வழங்குகிறது. இப்போதே விசாரியுங்கள் அல்லது எங்கள் வாட்ஸ்அப் குழுவில் இணையுங்கள்.",
    },
    // Tamil versions of the values that normally come from siteConfig.js
    brand: {
      centreName: "ஸ்ரீ நாராயணா டியூஷன் சென்டர்",
      shortName: "ஸ்ரீ நாராயணா",
      tagline: "இன்று கற்போம், நாளை வழிநடத்துவோம்",
      address: {
        line1: "89E, கண்ணா நகர்",
        line2: "சிவகாசி கிழக்கு",
        city: "சிவகாசி",
        state: "தமிழ்நாடு",
        pincode: "626189",
        full: "89E, கண்ணா நகர், சிவகாசி கிழக்கு, சிவகாசி, தமிழ்நாடு - 626189",
      },
    },
    toggle: { label: "English", aria: "ஆங்கிலத்திற்கு மாற்று" },
    nav: {
      home: "முகப்பு",
      about: "எங்களைப் பற்றி",
      courses: "பாடப்பிரிவுகள்",
      services: "சேவைகள்",
      contact: "தொடர்புக்கு",
      joinShort: "வாட்ஸ்அப்",
      join: "வாட்ஸ்அப் குழுவில் இணையுங்கள்",
      openMenu: "மெனுவைத் திற",
      closeMenu: "மெனுவை மூடு",
      primary: "முதன்மை வழிசெலுத்தல்",
      logoAlt: (name) => `${name} சின்னம்`,
    },
    hero: {
      badge: (n) => `${n}+ ஆண்டுகளாக கல்வியில் சிறந்து விளங்குகிறோம்`,
      titlePrefix: "",
      titleSuffix: " உங்களை வரவேற்கிறது",
      description:
        "6 முதல் 12 ஆம் வகுப்பு வரை பள்ளி மாணவர்களுக்கான தரமான கல்விப் பயிற்சி — அனுபவமிக்க ஆசிரியர்கள், சிறிய பிரிவுகள், தனிப்பட்ட கவனம் மற்றும் தொடர் தேர்வுகள் மூலம் ஒவ்வொரு மாணவரும் சிறந்து விளங்க உதவுகிறோம்.",
      join: "வாட்ஸ்அப் குழுவில் இணையுங்கள்",
      enquire: "இப்போதே விசாரியுங்கள்",
      studentsMentored: (n) => `${n} மாணவர்களுக்கு வழிகாட்டியுள்ளோம்`,
      classes: "6–12 ஆம் வகுப்புகள்",
      imageAlt: (name) => `${name} — மாணவர்கள் ஒன்றாகக் கற்கிறார்கள்`,
      resultRate: "தேர்ச்சி விகிதம்",
      batchSize: "பிரிவு அளவு",
      maxBatch: (n) => `அதிகபட்சம் ${n}`,
    },
    dailyKural: {
      title: "இன்றைய திருக்குறள்",
      number: (n) => `குறள் ${n}`,
      loading: "இன்றைய குறள் ஏற்றப்படுகிறது...",
      error: "இன்றைய குறளை ஏற்ற முடியவில்லை.",
      retry: "மீண்டும் முயற்சிக்கவும்",
    },
    about: {
      eyebrow: "எங்களைப் பற்றி",
      title: (short) => `பெற்றோர்கள் நம்பும் ${short}`,
      description: (year) =>
        `${year} முதல், கருத்துத் தெளிவு, தொடர் பயிற்சி மற்றும் உண்மையான வழிகாட்டுதல் ஆகியவற்றை இணைக்கும் கற்பித்தல் முறையின் மூலம் மாணவர்கள் வலுவான கல்வி அடித்தளத்தை அமைக்க உதவி வருகிறோம்.`,
      p1: (name) =>
        `${name} ஒரு எளிய நம்பிக்கையுடன் தொடங்கப்பட்டது: சரியான முறையில் கற்பித்தால் ஒவ்வொரு மாணவரும் சிறந்து விளங்க முடியும். எங்கள் முறை முதலில் வலுவான அடிப்படைகளை உருவாக்குவதிலும், பின்னர் பயன்பாட்டு அடிப்படையிலான பயிற்சி மற்றும் உரிய நேரத்தில் மீள்பார்வை செய்வதிலும் கவனம் செலுத்துகிறது — கடைசி நேர மனப்பாடத்தில் அல்ல.`,
      p2: "ஆசிரியர்கள் ஒவ்வொரு மாணவருக்கும் உண்மையான கவனம் செலுத்தவும், தனிப்பட்ட பலவீனங்களை அடையாளம் காணவும், கற்பிக்கும் வேகத்தை அதற்கேற்ப மாற்றவும் ஏதுவாக எங்கள் பிரிவுகளை சிறியதாக வைத்திருக்கிறோம். முறையான தேர்வுகள் மற்றும் பெற்றோருடன் திறந்த தொடர்புடன் இணைந்து, இந்த அணுகுமுறை தொடர்ந்து சிறந்த கல்வி முடிவுகளைத் தருகிறது.",
      statYears: "ஆண்டுகள் கற்பித்தல் அனுபவம்",
      statStudents: "வழிகாட்டிய மாணவர்கள்",
      statPass: "தேர்ச்சி சதவீதம்",
      statBatch: "அதிகபட்ச பிரிவு அளவு",
      pillars: [
        {
          title: "மாணவர் மையக் கற்றல்",
          description:
            "ஒவ்வொரு பாடத்திட்டமும் ஒவ்வொரு மாணவரும் சிறப்பாகக் கற்கும் முறைக்கு ஏற்ப அமைக்கப்படுகிறது; கருத்துகள் மனப்பாடம் செய்யப்படாமல் புரிந்துகொள்ளப்படுவதை உறுதி செய்கிறோம்.",
        },
        {
          title: "அனுபவமிக்க ஆசிரியர்கள்",
          description:
            "எங்கள் பாட நிபுணர்கள் பல ஆண்டுகால வகுப்பறை அனுபவத்தையும், மாணவர்கள் வெற்றி பெற உதவும் உண்மையான ஆர்வத்தையும் கொண்டவர்கள்.",
        },
        {
          title: "தொடர் மதிப்பீடுகள்",
          description:
            "வாராந்திர தேர்வுகளும் முறையான மீள்பார்வை சுழற்சிகளும் முன்னேற்றத்தைக் கண்காணித்து, கற்றல் இடைவெளிகள் பிரச்சினையாக மாறும் முன்பே கண்டறிகின்றன.",
        },
        {
          title: "பெற்றோருடன் தொடர்பு",
          description:
            "வெளிப்படையான, தொடர் தகவல்கள் மூலம் வருகைப்பதிவு, செயல்திறன் மற்றும் கவனம் தேவைப்படும் பகுதிகள் குறித்து பெற்றோருக்குத் தெரிவிக்கிறோம்.",
        },
      ],
    },
    courses: {
      eyebrow: "பாடப்பிரிவுகள் & சேவைகள்",
      title: "ஒவ்வொரு வகுப்பிற்கும் இலக்கிற்கும் ஏற்ற பயிற்சிகள்",
      description:
        "உங்கள் குழந்தையின் வகுப்பு, பாடங்கள் மற்றும் கல்வி இலக்குகளுக்கு ஏற்ப வடிவமைக்கப்பட்ட முறையான பயிற்சித் திட்டங்கள்.",
      cta: "விசாரிக்க",
      items: [
        {
          title: "6–8 ஆம் வகுப்புகள்",
          description:
            "கணிதம், அறிவியல் மற்றும் ஆங்கிலப் பாடங்களில் கருத்துத் தெளிவையும், மகிழ்ச்சியான செயல்பாட்டு வழிக் கற்றலையும் வழங்கும் அடித்தளப் பயிற்சித் திட்டம்.",
        },
        {
          title: "9–10 ஆம் வகுப்புகள்",
          description:
            "முக்கியப் பாடங்கள் அனைத்திலும் பொதுத்தேர்வை மையமாகக் கொண்ட பயிற்சி — முறையான குறிப்புகள், பாடவாரியான தேர்வுகள் மற்றும் முந்தைய ஆண்டு வினாத்தாள் பயிற்சியுடன்.",
        },
        {
          title: "11–12 ஆம் வகுப்புகள்",
          description:
            "அறிவியல் மற்றும் வணிகவியல் பிரிவுகளுக்கான ஆழமான பயிற்சி — பொதுத்தேர்வு மற்றும் போட்டித் தேர்வு அடிப்படைகளுடன் இணைந்தது.",
        },
        {
          title: "தேர்வுப் பயிற்சி",
          description:
            "பொதுத்தேர்வு மற்றும் நுழைவுத் தேர்வுகளுக்கான சிறப்புப் பயிற்சி வகுப்புகள் மற்றும் மாதிரித் தேர்வுத் தொடர்கள்; ஒவ்வொரு தேர்வுக்குப் பிறகும் செயல்திறன் பகுப்பாய்வு.",
        },
        {
          title: "தனிப்பட்ட பயிற்சி",
          description:
            "மாணவரின் குறிப்பிட்ட இடைவெளிகள், கற்கும் வேகம் மற்றும் இலக்குகளுக்கு ஏற்ப வடிவமைக்கப்பட்ட நேரடித் தனிப் பயிற்சி; விரைவான முன்னேற்றத்திற்கு.",
        },
        
      ],
    },
    why: {
      eyebrow: "ஏன் எங்களைத் தேர்வு செய்ய வேண்டும்",
      title: "எங்களை வேறுபடுத்துவது எது",
      description:
        "அர்ப்பணிப்பு, தொடர்ச்சி மற்றும் ஒவ்வொரு மாணவரின் முன்னேற்றத்தின் மீதான உண்மையான அக்கறையைச் சுற்றி கட்டமைக்கப்பட்ட கற்றல் சூழல்.",
      items: [
        {
          title: "அனுபவமிக்க ஆசிரியர்கள்",
          description:
            "பல ஆண்டுகள் நிரூபிக்கப்பட்ட வகுப்பறை அனுபவம் கொண்ட பாட நிபுணர்கள்.",
        },
        {
          title: "சிறிய பிரிவு அளவு",
          description:
            "ஒவ்வொரு பிரிவிலும் குறைந்த இடங்களே; எனவே ஒவ்வொரு மாணவரும் கவனிக்கப்பட்டு நெருக்கமாக வழிநடத்தப்படுகிறார்.",
        },
        {
          title: "தொடர் தேர்வுகள்",
          description:
            "முன்னேற்றத்தைக் கண்காணிக்கவும் கற்றலை வலுப்படுத்தவும் வாராந்திர மற்றும் மாதாந்திர மதிப்பீடுகள்.",
        },
        {
          title: "தனிப்பட்ட கவனம்",
          description:
            "ஒவ்வொரு மாணவரின் பலம், பலவீனம் மற்றும் கற்கும் முறையை அறிந்த ஆசிரியர்கள்.",
        },
        {
          title: "படிப்புப் பொருட்கள்",
          description:
            "எங்கள் ஆசிரியர்கள் தொகுத்த முறையான குறிப்புகள், பயிற்சித் தாள்கள் மற்றும் மாதிரி வினாத்தாள்கள்.",
        },
        {
          title: "சந்தேக நிவர்த்தி வகுப்புகள்",
          description:
            "எந்தக் கேள்வியும் பதிலின்றி போகாதவாறு ஒவ்வொரு வாரமும் தனிச் சிறப்பு வகுப்புகள்.",
        },
      ],
    },
    contact: {
      eyebrow: "தொடர்புக்கு",
      title: "எங்களைத் தொடர்பு கொள்ளுங்கள்",
      description:
        "கேள்வி உள்ளதா அல்லது சேர விரும்புகிறீர்களா? எங்களை நேரடியாகத் தொடர்பு கொள்ளுங்கள் அல்லது விசாரணையை அனுப்புங்கள் — வாட்ஸ்அப்பில் உடனே பதிலளிப்போம்.",
      address: "முகவரி",
      phone: "தொலைபேசி",
      email: "மின்னஞ்சல்",
      hours: "திறந்திருக்கும் நேரம்",
      joinGroup: "எங்கள் வாட்ஸ்அப் குழுவில் இணையுங்கள்",
      mapTitle: (name) => `${name} இருப்பிடம்`,
      formTitle: "விசாரணை அனுப்புங்கள்",
      formHint:
        "கீழே உள்ள படிவத்தை நிரப்பினால், உங்கள் விவரங்களுடன் வாட்ஸ்அப் திறக்கும்.",
      studentName: "மாணவர் பெயர்",
      parentName: "பெற்றோர் பெயர்",
      class: "வகுப்பு",
      subject: "பாடம்",
      phoneNumber: "தொலைபேசி எண்",
      message: "செய்தி",
      optional: "(விருப்பம்)",
      ph: {
        studentName: "எ.கா. அருண் ",
        parentName: "எ.கா. ராஜேஷ் ",
        class: "எ.கா. 10 ஆம் வகுப்பு",
        subject: "எ.கா. கணிதம், அறிவியல்",
        phone: "எ.கா. 98765 43210",
        message: "உங்கள் விசாரணை குறித்து கூடுதல் விவரங்களைத் தெரிவிக்கவும்...",
      },
      send: "வாட்ஸ்அப் மூலம் அனுப்பு",
      errors: {
        studentName: "மாணவர் பெயர் தேவை",
        parentName: "பெற்றோர் பெயர் தேவை",
        studentClass: "வகுப்பு தேவை",
        subject: "பாடம் தேவை",
        phoneRequired: "தொலைபேசி எண் தேவை",
        phoneInvalid: "சரியான தொலைபேசி எண்ணை உள்ளிடவும்",
      },
      wa: {
        greeting: (name) =>
          `வணக்கம் ${name}! சேர்க்கை குறித்து விசாரிக்க விரும்புகிறேன்.`,
        studentName: "மாணவர் பெயர்",
        parentName: "பெற்றோர் பெயர்",
        class: "வகுப்பு",
        subject: "பாடம்",
        phone: "தொலைபேசி எண்",
        message: "செய்தி",
      },
    },
    footer: {
      quickLinks: "விரைவு இணைப்புகள்",
      links: {
        home: "முகப்பு",
        about: "எங்களைப் பற்றி",
        courses: "பாடப்பிரிவுகள்",
        why: "எங்கள் சிறப்பு",
        contact: "தொடர்புக்கு",
      },
      courses: "பாடப்பிரிவுகள்",
      contact: "தொடர்புக்கு",
      rights: (year, name) => `© ${year} ${name}. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.`,
    },
    whatsappFloat: "எங்கள் வாட்ஸ்அப் குழுவில் இணையுங்கள்",
  },
};
