import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

export function CampaignCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-brand-blue/5 via-transparent to-brand-green/5">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="animate-fade-in text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy mb-3">
            Pronto para Transformar seu Sono?
          </h2>
          <p className="animate-slide-up text-gray-700 text-lg" style={{ animationDelay: "0.1s" }}>
            Escolha como prefere falar com nossos especialistas
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center">
          <button
            onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
            className="animate-slide-up group flex items-center justify-center gap-2 md:gap-3 px-4 md:px-10 py-3 md:py-5 bg-gradient-to-r from-brand-blue to-blue-700 text-white font-bold text-sm md:text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full md:w-auto min-h-[48px] md:min-h-[60px]"
            style={{ animationDelay: "0.15s" }}
          >
            <Calendar className="w-4 md:w-6 h-4 md:h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden md:inline">Agendar Visita na Loja</span>
            <span className="md:hidden">Agendar Visita</span>
            <ArrowRight className="hidden md:inline w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <div className="hidden md:block w-1 h-12 bg-gradient-to-b from-gray-300 to-transparent rounded-full" />

          <a
            href="https://wa.me/5562996148873?text=Oi!%20Gostaria%20de%20falar%20com%20um%20Consultor%20de%20vendas%20Ortobom."
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slide-up group flex items-center justify-center gap-2 md:gap-3 px-4 md:px-10 py-3 md:py-5 bg-gradient-to-r from-brand-green to-green-700 text-white font-bold text-sm md:text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full md:w-auto min-h-[48px] md:min-h-[60px]"
            style={{ animationDelay: "0.2s" }}
          >
            <MessageCircle className="w-4 md:w-6 h-4 md:h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden md:inline">Falar com Consultor</span>
            <span className="md:hidden">Consultor</span>
            <ArrowRight className="hidden md:inline w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Trust Message */}
        <div className="animate-fade-in mt-10 text-center" style={{ animationDelay: "0.25s" }}>
          <p className="text-gray-600 text-sm">
            ✨ Consultores especializados | 💬 Resposta rápida | 🎯 Recomendação personalizada
          </p>
        </div>
      </div>
    </section>
  );
}
