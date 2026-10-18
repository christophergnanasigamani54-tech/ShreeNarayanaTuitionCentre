import siteConfig from "./siteConfig";

/**
 * Builds a wa.me deep link that opens WhatsApp (app or web)
 * with a pre-filled message to the centre's WhatsApp number.
 */
export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

/**
 * Formats the enquiry form data into a readable WhatsApp message.
 * `m` holds the labels for the current language (see src/i18n/translations.js).
 */
export function formatEnquiryMessage(data, m, centreName) {
  return (
    `${m.greeting(centreName)}\n\n` +
    `*${m.studentName}:* ${data.studentName}\n` +
    `*${m.parentName}:* ${data.parentName}\n` +
    `*${m.class}:* ${data.studentClass}\n` +
    `*${m.subject}:* ${data.subject}\n` +
    `*${m.phone}:* ${data.phone}\n` +
    `*${m.message}:* ${data.message || "-"}`
  );
}

/**
 * Quick link to join the centre's WhatsApp broadcast/community group.
 */
export function getWhatsAppGroupLink() {
  return siteConfig.whatsappGroupLink;
}
