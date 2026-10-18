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
 */
export function formatEnquiryMessage({
  studentName,
  parentName,
  studentClass,
  subject,
  phone,
  message,
}) {
  return (
    `Hello ${siteConfig.centreName}! I would like to enquire about admission.\n\n` +
    `*Student Name:* ${studentName}\n` +
    `*Parent Name:* ${parentName}\n` +
    `*Class:* ${studentClass}\n` +
    `*Subject(s):* ${subject}\n` +
    `*Phone Number:* ${phone}\n` +
    `*Message:* ${message || "-"}`
  );
}

/**
 * Quick link to join the centre's WhatsApp broadcast/community group.
 */
export function getWhatsAppGroupLink() {
  return siteConfig.whatsappGroupLink;
}
