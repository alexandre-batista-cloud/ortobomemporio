import { MessageCircle, Calendar, Star } from "lucide-react";

export function HeroMarista() {
  return (
    <section className="relative min-h-screen md:min-h-[600px] bg-gradient-to-b from-brand-navy to-brand-blue pt-8 md:pt-24 pb-20 md:pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/b4492011d5cd35fdcf7a126d4d54ffb4257be7ef?width=3840"
          alt="Quarto aconchegante"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Seu colchão ideal começa com um bom <span className="text-brand-orange">diagnóstico do sono</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-brand-gray-light mb-8 max-w-2xl mx-auto">
          Teste na loja Ortobom Marista com um Consultor do Sono. <br />
          <span className="font-semibold">Sonhos de Natal: até 21x, frete grátis e travesseiro de brinde.</span>
        </p>

        {/* Trust Signals */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-8 max-w-xl mx-auto border border-white/20">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-brand-orange fill-brand-orange" />
            ))}
            <span className="text-white font-bold text-lg ml-2">4,9/5</span>
          </div>
          <p className="text-brand-gray-light text-sm mb-3">
            Avaliação média de clientes que testaram na loja
          </p>
          <p className="text-white font-semibold text-sm">
            ✓ +500 clientes atendidos em Goiânia
          </p>
          <p className="text-white font-semibold text-sm">
            ✓ Garantia oficial Ortobom
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
          <button
            onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-1 md:flex-0 flex items-center justify-center gap-2 px-6 py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            <Calendar className="w-5 h-5" />
            Agendar visita na loja
          </button>

          <a
            href="https://wa.me/556233260765?text=Oi!%20Vim%20pela%20landing%20page%20da%20Ortobom%20Marista.%20Quero%20ajuda%20para%20escolher%20meu%20colch%C3%A3o%20ideal%20e%20entender%20as%20condi%C3%A7%C3%B5es%20do%20Sonhos%20de%20Natal%20%F0%9F%98%8A"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-0 flex items-center justify-center gap-2 px-6 py-4 bg-brand-green text-white font-bold rounded-lg hover:bg-green-700 transition-colors text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com consultor
          </a>
        </div>
      </div>

      {/* Bottom spacer for mobile bottom bar */}
      <div className="md:hidden h-24" />
    </section>
  );
}
