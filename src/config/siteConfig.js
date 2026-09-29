/**
 * =============================================================
 *  SITE CONFIGURATION
 * =============================================================
 *  Edit this file to update the tuition centre's details
 *  everywhere on the website. Nothing else needs to change.
 * =============================================================
 */

const siteConfig = {
  // Brand
  centreName: "Shree Narayana Tuition Centre",
  shortName: "Shree Narayana",
  tagline: "Learn Today, Lead Tomorrow",

  // Contact details
  phone: "+91 9894160049",
  // Phone number used for WhatsApp links — country code, no spaces, no +, no leading 0
  whatsappNumber: "919894160049",
  email: "info@ShreeNarayanaTuitionCentre.com",

  // Address
  address: {
    line1: "3rd Floor, Sunrise Complex",
    line2: "Anna Nagar Main Road",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600040",
    full: "3rd Floor, Sunrise Complex, Anna Nagar Main Road, Chennai, Tamil Nadu 600040",
  },

  // Google Maps embed (replace with your actual embed URL)
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31097.0!2d80.2094!3d13.0850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA1JzA2LjAiTiA4MMKwMTInMzMuOCJF!5e0!3m2!1sen!2sin!4v1700000000000",

  // Opening hours
  openingHours: [
    { day: "Monday – Friday", time: "4:00 PM – 8:30 PM" },
    { day: "Saturday", time: "10:00 AM – 6:00 PM" },
    { day: "Sunday", time: "10:00 AM – 1:00 PM (Doubt Clearing)" },
  ],

  // WhatsApp community group — change ONLY this link when your group changes
  whatsappGroupLink: "https://chat.whatsapp.com/CMwetRAGNGJ8FnFXky1qKQ",

  // Social links (optional — leave blank string to hide)
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },

  // Founding year, used in "years of experience" copy
  foundedYear: 2025,
};

export default siteConfig;
