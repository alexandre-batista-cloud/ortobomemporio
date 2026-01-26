import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

export function CampaignCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-brand-blue/5 via-transparent to-brand-green/5">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            Pronto para Transformar seu Sono?
          </h2>
          <p className="text-gray-700 text-lg">
            Escolha como prefere falar com nossos especialistas
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-brand-blue to-blue-700 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg flex-1 md:flex-initial min-h-[60px]"
          >
            <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Agendar Visita na Loja</span>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <div className="hidden md:block w-1 h-12 bg-gradient-to-b from-gray-300 to-transparent rounded-full" />

          <a
            href="https://wa.me/5562996148873?text=Oi!%20Gostaria%20de%20falar%20com%20um%20Consultor%20de%20vendas%20Ortobom."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-brand-green to-green-700 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg flex-1 md:flex-initial min-h-[60px]"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Falar com Consultor</span>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Trust Message */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm">
            ✨ Consultores especializados | 💬 Resposta rápida | 🎯 Recomendação personalizada
          </p>
        </div>
      </div>
    </section>
  );
}
