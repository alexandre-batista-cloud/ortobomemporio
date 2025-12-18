import { MessageCircle, Calendar, Star } from "lucide-react";

export function HeroMarista() {
  return (
    <section className="relative min-h-screen md:min-h-[600px] bg-gradient-to-b from-brand-navy to-brand-blue pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-40 flex flex-col">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2F28be801f786e451faba64cccbf5e445a"
          alt="Quarto aconchegante"
          className="w-full h-full object-cover ml-auto"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"></h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-brand-gray-light mb-8 max-w-2xl mx-auto">
          <br />
        </p>

        {/* CTAs - Restructured into columns */}
        <div className="flex flex-col relative mt-5">
          <div className="gap-5 flex flex-col md:flex-row">
            <div className="flex flex-col w-full md:w-1/2">
              <button
                onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg mr-auto pb-10"
              >
                <Calendar className="w-5 h-5" />
                Agendar visita na loja
              </button>
            </div>

            <div className="flex flex-col w-full md:w-1/2">
              <a
                href="https://wa.me/556233260765?text=Oi!%20Vim%20pela%20landing%20page%20da%20Ortobom%20Marista.%20Quero%20ajuda%20para%20escolher%20meu%20colch%C3%A3o%20ideal%20e%20entender%20as%20condi%C3%A7%C3%B5es%20do%20Sonhos%20de%20Natal%20%F0%9F%98%8A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-brand-green text-white font-bold rounded-lg hover:bg-green-700 transition-colors text-lg mr-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com consultor
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacer for mobile bottom bar */}
      <div className="hidden md:block h-24" />
    </section>
  );
}
