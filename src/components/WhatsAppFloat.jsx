import { MessageCircle } from "lucide-react";
import { getWhatsAppGroupLink } from "../config/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppGroupLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join our WhatsApp group"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card hover:bg-[#1fb958] hover:scale-105 active:scale-95 transition-all duration-200"
    >
      <MessageCircle size={26} />
    </a>
  );
}
