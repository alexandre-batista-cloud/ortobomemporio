import { MessageCircle, Calendar } from "lucide-react";

export function HeroMarista() {
  return (
    <section
      className="relative w-full bg-white py-12 md:py-20 overflow-hidden"
      style={{
        backgroundImage: "url('https://ortobomvendasonline.com.br/wp-content/uploads/2025/07/Imagem-1.png')",
        backgroundPosition: "-8px -135px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(0deg, rgb(255, 255, 255) 44%, rgba(255, 255, 255, 0) 100%)",
          opacity: 0.5,
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 py-20">
        <div className="flex flex-col gap-8">
          {/* Logo - Empty placeholder */}
          <div className="w-32" />

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight max-w-2xl mr-auto">
            Seu novo colchão Ortobom está aqui.
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-700 max-w-2xl">
            Colchões Ortobom com conforto de hotel 5 estrelas ao seu alcance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            {/* Info Button */}
            <button className="px-6 py-3 border-2 border-brand-navy text-brand-navy font-semibold rounded-full hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2 text-sm md:text-base">
              Durma Bem, Viva Melhor
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5562996148873?text=Oi!%20Gostaria%20de%20falar%20com%20um%20Consultor%20de%20vendas%20Ortobom."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              CHAMAR NO WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
