/**
 * =============================================================
 *  EXTRA SECTIONS TEXT  (English + Tamil)
 *  "How It Works", "Testimonials" heading, "FAQ", course enquiry
 * =============================================================
 *  Edit the answers below so they match your centre exactly
 *  (especially the FAQ answers about fees and timings).
 * =============================================================
 */
export const extra = {
  /* =========================== ENGLISH =========================== */
  en: {
    steps: {
      eyebrow: "How It Works",
      title: "Joining Is Simple",
      description:
        "Four easy steps from your first message to your child's first class.",
      cta: "Start with an Enquiry",
      items: [
        {
          title: "Send an Enquiry",
          description:
            "Fill the form or message us on WhatsApp with your child's class and subjects.",
        },
        {
          title: "We Get Back to You",
          description:
            "We reply on WhatsApp to understand your child's needs and share batch and fee details.",
        },
        {
          title: "Join a Batch",
          description:
            "Your child joins the batch that suits their class, subjects and schedule.",
        },
        {
          title: "Learn & Track Progress",
          description:
            "Regular tests and parent updates help you see your child improve.",
        },
      ],
    },

    testimonials: {
      eyebrow: "Testimonials",
      title: "What Parents Say",
      description:
        "Feedback from families who trust us with their children's learning.",
    },

    faq: {
      eyebrow: "FAQ",
      title: "Your Questions, Answered",
      description:
        "Common questions from parents. Anything else? Ask us on WhatsApp.",
      still: "Still have a question?",
      ask: "Ask on WhatsApp",
      askMessage: (name) => `Hello ${name}! I have a question about admission.`,
      // n = max batch size from src/config/stats.js
      items: (n) => [
        {
          q: "Which classes and subjects do you teach?",
          a: "We coach students of Classes 6–8, 9–10 and 11–12. Send us your child's class and subjects and we will confirm.",
        },
        {
          q: "What are the fees?",
          a: "Fees depend on the class and course. Send an enquiry on WhatsApp and we will share the details.",
        },
        {
          q: "What are the class timings?",
          a: "Our opening hours are in the Contact section. Batch timings depend on the class — we will tell you the right batch when you enquire.",
        },
        {
          q: "How many students are in a batch?",
          a: `We keep batches small — up to ${n} students — so every child gets personal attention.`,
        },
        {
          q: "How will I know my child's progress?",
          a: "We conduct regular tests and keep parents updated about attendance and performance.",
        },
        {
          q: "Do you offer online classes?",
          a: "Yes. We offer live online classes with recorded backups and digital notes. Enquire to know the batch details.",
        },
      ],
    },

    // Text placed in the Message box when a parent taps "Enquire Now" on a course card
    enquiry: {
      prefill: (title) => `I'm interested in: ${title}`,
    },
  },

  /* ============================ TAMIL ============================ */
  ta: {
    steps: {
      eyebrow: "எப்படிச் செயல்படுகிறது",
      title: "சேர்வது மிக எளிது",
      description:
        "உங்கள் முதல் செய்தியிலிருந்து உங்கள் குழந்தையின் முதல் வகுப்பு வரை நான்கு எளிய படிகள்.",
      cta: "விசாரணையுடன் தொடங்குங்கள்",
      items: [
        {
          title: "விசாரணை அனுப்புங்கள்",
          description:
            "படிவத்தை நிரப்புங்கள் அல்லது உங்கள் குழந்தையின் வகுப்பு மற்றும் பாடங்களுடன் வாட்ஸ்அப்பில் எங்களுக்குச் செய்தி அனுப்புங்கள்.",
        },
        {
          title: "நாங்கள் தொடர்பு கொள்வோம்",
          description:
            "உங்கள் குழந்தையின் தேவைகளைப் புரிந்துகொள்ளவும், பிரிவு மற்றும் கட்டண விவரங்களைப் பகிரவும் வாட்ஸ்அப்பில் பதிலளிப்போம்.",
        },
        {
          title: "பிரிவில் சேருங்கள்",
          description:
            "உங்கள் குழந்தையின் வகுப்பு, பாடங்கள் மற்றும் நேரத்திற்கு ஏற்ற பிரிவில் அவர்கள் சேர்கிறார்கள்.",
        },
        {
          title: "கற்று முன்னேறுங்கள்",
          description:
            "தொடர் தேர்வுகளும் பெற்றோருக்கான தகவல்களும் உங்கள் குழந்தையின் முன்னேற்றத்தைக் காண உதவுகின்றன.",
        },
      ],
    },

    testimonials: {
      eyebrow: "பெற்றோர் கருத்துகள்",
      title: "பெற்றோர்கள் என்ன சொல்கிறார்கள்",
      description:
        "தங்கள் குழந்தைகளின் கல்விக்காக எங்களை நம்பும் குடும்பங்களின் கருத்துகள்.",
    },

    faq: {
      eyebrow: "கேள்வி பதில்",
      title: "உங்கள் கேள்விகளுக்கான பதில்கள்",
      description:
        "பெற்றோர்கள் பொதுவாகக் கேட்கும் கேள்விகள். வேறு ஏதேனும் இருந்தால் வாட்ஸ்அப்பில் கேளுங்கள்.",
      still: "இன்னும் கேள்வி உள்ளதா?",
      ask: "வாட்ஸ்அப்பில் கேளுங்கள்",
      askMessage: (name) =>
        `வணக்கம் ${name}! சேர்க்கை குறித்து எனக்கு ஒரு கேள்வி உள்ளது.`,
      items: (n) => [
        {
          q: "நீங்கள் எந்த வகுப்புகள் மற்றும் பாடங்களுக்குப் பயிற்சி அளிக்கிறீர்கள்?",
          a: "6–8, 9–10 மற்றும் 11–12 ஆம் வகுப்புகளுக்குப் பயிற்சி அளிக்கிறோம். உங்கள் குழந்தையின் வகுப்பு மற்றும் பாடங்களை அனுப்புங்கள்; நாங்கள் உறுதிப்படுத்துவோம்.",
        },
        {
          q: "கட்டணம் எவ்வளவு?",
          a: "கட்டணம் வகுப்பு மற்றும் பாடப்பிரிவைப் பொறுத்தது. வாட்ஸ்அப்பில் விசாரணை அனுப்புங்கள்; விவரங்களைப் பகிர்வோம்.",
        },
        {
          q: "வகுப்பு நேரங்கள் என்ன?",
          a: "எங்கள் திறந்திருக்கும் நேரங்கள் 'தொடர்புக்கு' பகுதியில் உள்ளன. பிரிவு நேரங்கள் வகுப்பைப் பொறுத்தது; விசாரிக்கும்போது சரியான பிரிவைத் தெரிவிப்போம்.",
        },
        {
          q: "ஒரு பிரிவில் எத்தனை மாணவர்கள் உள்ளனர்?",
          a: `ஒவ்வொரு மாணவருக்கும் தனிப்பட்ட கவனம் கிடைக்க, எங்கள் பிரிவுகளை சிறியதாக — அதிகபட்சம் ${n} மாணவர்கள் — வைத்திருக்கிறோம்.`,
        },
        {
          q: "என் குழந்தையின் முன்னேற்றத்தை நான் எப்படி அறிவது?",
          a: "தொடர் தேர்வுகள் நடத்துகிறோம்; வருகைப்பதிவு மற்றும் செயல்திறன் குறித்து பெற்றோருக்குத் தொடர்ந்து தெரிவிக்கிறோம்.",
        },
        {
          q: "ஆன்லைன் வகுப்புகள் உள்ளனவா?",
          a: "ஆம். நேரடி ஆன்லைன் வகுப்புகளை பதிவு செய்யப்பட்ட காணொளிகள் மற்றும் டிஜிட்டல் குறிப்புகளுடன் வழங்குகிறோம். பிரிவு விவரங்களுக்கு விசாரியுங்கள்.",
        },
      ],
    },

    enquiry: {
      prefill: (title) => `நான் இதைப் பற்றி அறிய விரும்புகிறேன்: ${title}`,
    },
  },
};