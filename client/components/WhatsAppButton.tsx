import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute right-16 top-4 bg-white rounded-2xl px-4 py-2 shadow-lg whitespace-nowrap">
            <span className="text-gray-800 text-base">
              Fale agora com um Consultor
            </span>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white" />
          </div>
        )}

        {/* Button */}
        <a
          href="https://wa.me/552125300765"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#25D366] shadow-[1px_6px_24px_0_rgba(7,94,84,0.24)] hover:shadow-xl transition-shadow"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-9 h-9 text-white" fill="white" />
        </a>
      </div>
    </div>
  );
}
