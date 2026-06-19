import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/src/data/siteConfig";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi AR Interior, I'm interested in your luxury interior design services.",
  );
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer z-[9999] pulse-green group transition-transform duration-300 hover:scale-110"
      title="Chat with us on WhatsApp"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white text-[#25D366] transition-transform group-hover:rotate-6" />
      {/* Dynamic hover bubble */}
      <span className="absolute right-16 bg-[#1A1A1A] border border-white/10 text-white font-sans text-xs px-3 py-1.5 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible whitespace-nowrap shadow-md transition-all duration-300">
        Chat With Us
      </span>
    </a>
  );
}
