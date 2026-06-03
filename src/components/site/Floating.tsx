import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919340590475"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-luxe text-[color:var(--ivory)] shadow-luxe transition hover:scale-110 animate-shine-border"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--champagne)] opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[color:var(--champagne)]" />
      </span>
    </a>
  );
}
