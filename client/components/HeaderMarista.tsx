import { MessageCircle, MapPin, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function HeaderMarista() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-40 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a5ab8e5671a312f670c806f212a55d815ddc96dc?width=295"
              alt="Ortobom"
              className="h-6 w-auto"
            />
          </Link>

          {/* Store Location + WhatsApp */}
          <div className="flex items-center gap-6">
            <a
              href="https://maps.app.goo.gl/ET9kAgcG1nRUhWj26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-blue transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Loja Marista
            </a>

            <a
              href="https://wa.me/556233260765?text=Oi!%20Vim%20pela%20landing%20page%20da%20Ortobom%20Marista.%20Quero%20ajuda%20para%20escolher%20meu%20colch%C3%A3o%20ideal%20e%20entender%20as%20condi%C3%A7%C3%B5es%20do%20Sonhos%20de%20Natal%20%F0%9F%98%8A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-brand-green text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Header + Bottom Bar */}
      <div className="md:hidden">
        {/* Top Bar */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm h-14 flex items-center justify-between px-4">
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a5ab8e5671a312f670c806f212a55d815ddc96dc?width=295"
              alt="Ortobom"
              className="h-5 w-auto"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-navy"
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Mobile Bottom CTA Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brand-gray-light flex gap-2 p-3">
          <a
            href="https://wa.me/556233260765?text=Oi!%20Vim%20pela%20landing%20page%20da%20Ortobom%20Marista.%20Quero%20ajuda%20para%20escolher%20meu%20colch%C3%A3o%20ideal%20e%20entender%20as%20condi%C3%A7%C3%B5es%20do%20Sonhos%20de%20Natal%20%F0%9F%98%8A"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-brand-green text-white py-3 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <button
            onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-1 bg-brand-blue text-white py-3 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
          >
            Agendar
          </button>
        </div>

        {/* Spacer for header and bottom bar */}
        <div className="h-14" />
      </div>

      {/* Desktop spacer */}
      <div className="hidden md:block h-16" />
    </>
  );
}
