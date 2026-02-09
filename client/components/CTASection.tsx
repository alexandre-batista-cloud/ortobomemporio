import { MessageCircle, ChevronRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/9cec3556d9ea5d9b202c30ded4e21849cb207636?width=4992"
          alt="Quarto Ortobom"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CTA Card */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
        <div className="animate-fade-in bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-16 max-w-2xl w-full text-center border border-white/50">
          {/* Decorative accent */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-green rounded-full" />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Faça seu Orçamento Agora
          </h2>

          <p className="text-gray-700 text-sm md:text-base lg:text-lg mb-8 leading-relaxed">
            Entre em contato com nossos especialistas pelo WhatsApp e receba um{" "}
            <span className="font-bold text-brand-blue">orçamento totalmente gratuito</span> em poucos minutos.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-2 gap-4 mb-10 text-left max-w-md mx-auto">
            <div className="animate-slide-up flex items-center gap-2 text-sm" style={{ animationDelay: "0.1s" }}>
              <ChevronRight className="w-4 h-4 text-brand-green flex-shrink-0" />
              <span className="text-gray-700">Atendimento rápido</span>
            </div>
            <div className="animate-slide-up flex items-center gap-2 text-sm" style={{ animationDelay: "0.15s" }}>
              <ChevronRight className="w-4 h-4 text-brand-green flex-shrink-0" />
              <span className="text-gray-700">100% gratuito</span>
            </div>
            <div className="animate-slide-up flex items-center gap-2 text-sm" style={{ animationDelay: "0.2s" }}>
              <ChevronRight className="w-4 h-4 text-brand-green flex-shrink-0" />
              <span className="text-gray-700">Consultores experientes</span>
            </div>
            <div className="animate-slide-up flex items-center gap-2 text-sm" style={{ animationDelay: "0.25s" }}>
              <ChevronRight className="w-4 h-4 text-brand-green flex-shrink-0" />
              <span className="text-gray-700">Sem compromisso</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/552125300765"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slide-up inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-brand-green to-green-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full md:w-auto"
            style={{ animationDelay: "0.3s" }}
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            Solicitar Orçamento pelo WhatsApp
          </a>

          <p className="animate-fade-in text-xs text-gray-600 mt-6" style={{ animationDelay: "0.35s" }}>
            💬 Responderemos em até 2 horas durante o horário comercial
          </p>
        </div>
      </div>
    </section>
  );
}
