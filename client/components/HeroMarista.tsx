import { MessageCircle, Calendar, Star, Zap } from "lucide-react";

export function HeroMarista() {
  return (
    <section
      className="relative w-full bg-white overflow-hidden pt-20 md:pt-24 pb-12 md:pb-20"
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
      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-6 md:gap-8 max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full w-fit">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-900">
              Melhor loja de colchões de Goiás
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-slide-up text-5xl md:text-6xl lg:text-7xl font-bold text-brand-navy leading-tight">
            Seu novo colchão Ortobom está aqui.
          </h1>

          {/* Description */}
          <p className="animate-slide-up text-lg md:text-xl text-gray-700 max-w-2xl" style={{ animationDelay: "0.1s" }}>
            Colchões Ortobom com conforto de hotel 5 estrelas ao seu alcance.
          </p>

          {/* Social Proof Metrics */}
          <div className="animate-slide-up flex flex-wrap gap-6 py-4" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-700">4.9 (122 avaliações)</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-green" />
              <span className="text-sm font-semibold text-gray-700">Entrega em 2 dias</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 pt-4" style={{ animationDelay: "0.3s" }}>
            {/* Schedule Button */}
            <button
              onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-200 inline-flex items-center justify-center gap-2 text-base shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              <Calendar className="w-5 h-5" />
              Agendar Visita
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5562996148873?text=Oi!%20Gostaria%20de%20falar%20com%20um%20Consultor%20de%20vendas%20Ortobom."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-brand-navy text-brand-navy font-bold rounded-lg hover:bg-brand-navy hover:text-white transition-all duration-200 inline-flex items-center justify-center gap-2 text-base transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
