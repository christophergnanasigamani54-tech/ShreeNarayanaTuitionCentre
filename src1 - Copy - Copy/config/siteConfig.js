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
  email: "info.shreenarayanatuitioncentre@gmail.com",

  // Address
  address: {
    line1: "89E Kanna Nagar",
    line2: "Sivakasi East",
    city: "Sivakasi",
    state: "Tamil Nadu",
    pincode: "626189",
    full: "89E ,Kanna Nagar ,Sivakasi East ,Sivakasi ,Tamil Nadu ,626189",
  },

  // Google Maps embed (replace with your actual embed URL)
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3935.5588183477375!2d77.81785033357491!3d9.460027211177204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjcnMTUuMyJOIDc3wrA0OCc1NS41IkU!5e0!3m2!1sen!2sin!4v1791905242820!5m2!1sen!2sin",

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
