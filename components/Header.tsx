import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top Banner */}
      <div className="bg-white py-1 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-semibold text-brand-navy-dark">
            <span className="font-semibold">Kits com Descontos Imperdíveis. </span>
            <span className="font-black">RENOVE SEU QUARTO</span>
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-[0_10px_10px_0_rgba(0,0,0,0.15)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a5ab8e5671a312f670c806f212a55d815ddc96dc?width=295"
                alt="Ortobom"
                className="h-[22px] w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link
                href="#colchoes"
                className="text-brand-navy-dark font-semibold text-base hover:text-brand-blue transition-colors"
              >
                Colchões
              </Link>
              <Link
                href="#bases"
                className="text-brand-navy-dark font-semibold text-base hover:text-brand-blue transition-colors"
              >
                Bases
              </Link>
              <Link
                href="#travesseiros"
                className="text-brand-navy-dark font-semibold text-base hover:text-brand-blue transition-colors"
              >
                Travesseiros
              </Link>
              <Link
                href="#roupas"
                className="text-brand-navy font-semibold text-base hover:text-brand-blue transition-colors"
              >
                Roupas de Cama
              </Link>
              <Link
                href="#orcamento"
                className="text-brand-navy-dark font-semibold text-base hover:text-brand-blue transition-colors"
              >
                Solicitar Orçamento
              </Link>
              <Link
                href="#contato"
                className="text-brand-navy font-semibold text-base hover:text-brand-blue transition-colors"
              >
                Contato
              </Link>
            </nav>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/552125300765"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-[3px] border border-brand-beige bg-gradient-to-r from-brand-orange to-brand-orange-light shadow-[5px_5px_5px_0_rgba(0,0,0,0.36)] hover:shadow-lg transition-shadow"
            >
              <MessageCircle className="w-4 h-4 text-brand-navy" />
              <span className="text-brand-navy font-medium text-[15px]">
                Comprar pelo WhatsApp
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-brand-navy-dark">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling Banner */}
      <div className="bg-brand-navy-dark overflow-hidden">
        <div className="relative h-[54px] flex items-center">
          <div className="absolute whitespace-nowrap animate-[scroll_30s_linear_infinite] text-brand-gray-light text-sm tracking-[3.3px]">
            Frete Grátis: consulte-nos - Renove seu quarto: temos descontos especiais para você - Parcelamos em até 21x*: no cartão de crédito - Colchões e bases sob medida: deu Ortobom do seu jeito - Frete Grátis: consulte-nos - Renove seu quarto: temos descontos especiais para você - Parcelamos em até 21x*: no cartão de crédito - Colchões e bases sob medida: deu Ortobom do seu jeito
          </div>
        </div>
      </div>
    </header>
  );
}
