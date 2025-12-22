import { MessageCircle, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Produtos", href: "#produtos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
  { label: "FAQ", href: "#faq" },
];

export function HeaderMarista() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo + Branding */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a5ab8e5671a312f670c806f212a55d815ddc96dc?width=295"
              alt="Ortobom"
              className="h-8 w-auto"
            />
            <div>
              <h1 className="text-sm font-bold text-brand-navy leading-tight">Ortobom</h1>
              <h2 className="text-xs font-semibold text-brand-blue">Empório Marista</h2>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="https://maps.app.goo.gl/ET9kAgcG1nRUhWj26"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-brand-navy text-sm font-medium hover:text-brand-blue transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Localização
            </a>

            <a
              href="https://wa.me/5562996148873?text=Oi!%20Vim%20pela%20landing%20page%20da%20Ortobom%20Marista.%20Quero%20ajuda%20para%20escolher%20meu%20colch%C3%A3o%20ideal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-green text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Consultor
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Header + Bottom Bar */}
      <div className="md:hidden">
        {/* Top Bar */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm h-14 flex items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a5ab8e5671a312f670c806f212a55d815ddc96dc?width=295"
              alt="Ortobom"
              className="h-5 w-auto"
            />
            <h2 className="text-xs font-semibold text-brand-navy">Empório Marista</h2>
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
            href="https://wa.me/5562996148873?text=Oi!%20Vim%20pela%20landing%20page%20da%20Ortobom%20Marista.%20Quero%20ajuda%20para%20escolher%20meu%20colch%C3%A3o%20ideal%20e%20entender%20as%20condi%C3%A7%C3%B5es%20do%20Sonhos%20de%20Natal%20%F0%9F%98%8A"
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
