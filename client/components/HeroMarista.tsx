import { MessageCircle, Calendar, Star, Zap, CheckCircle, Truck } from "lucide-react";

export function HeroMarista() {
  return (
    <>
      {/* Urgency Bar */}
      <div className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold">
            🎁 PROMOÇÃO LIMITADA: Kit de travesseiros grátis nas compras acima de R$1.499
          </p>
        </div>
      </div>

      <section
        className="relative w-full bg-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2F7b02c97ed6f14e8f839c40fbfb76f290?format=webp&width=800')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
          padding: "60px 0 50px",
          paddingTop: "var(--hero-padding-top, 96px)",
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgb(255, 255, 255) 44%, rgba(255, 255, 255, 0) 100%)",
            opacity: 0.5,
          }}
        />

        {/* Content Container */}
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div
            className="flex flex-col max-w-3xl"
            style={{ gap: "40px", justifyContent: "flex-start" }}
          >
            {/* Badge */}
            <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full w-fit">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <p className="text-sm font-semibold text-yellow-900">
                Loja bem Avaliada em Goiânia
              </p>
            </div>

            {/* Main Heading - Benefit-focused */}
            <h1
              className="animate-slide-up text-5xl md:text-6xl lg:text-7xl font-bold text-brand-navy leading-tight"
              style={{ marginTop: "-3px" }}
            >
              Durma Melhor. Viva Melhor.
            </h1>

            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Colchões Ortobom que eliminam até 70% das dores nas costas.
            </h2>

            {/* Description */}
            <p
              className="animate-slide-up text-lg md:text-xl text-gray-700 max-w-2xl"
              style={{ animationDelay: "0.1s", marginTop: "-3px" }}
            >
              Transforme suas noites com os colchões premium do Ortobom Empório Marista. Entrega rápida, consultoria especializada e satisfação garantida.
            </p>

            {/* Benefits Above Fold */}
            <div
              className="animate-slide-up grid grid-cols-1 md:grid-cols-2 gap-4 py-4"
              style={{ animationDelay: "0.15s", marginTop: "-3px" }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base font-semibold text-gray-700">
                  Teste por 100 noites - Satisfação garantida
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base font-semibold text-gray-700">
                  Entrega rápida em Goiás, DF e Tocantins
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base font-semibold text-gray-700">
                  Parcelamento em até 10x sem juros
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base font-semibold text-gray-700">
                  Garantia de fábrica de até 10 anos
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="animate-slide-up flex flex-col md:flex-row gap-3 md:gap-4 pt-6"
              style={{ animationDelay: "0.2s" }}
            >
              <button className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-brand-navy text-white font-bold text-sm md:text-base rounded-lg hover:bg-blue-900 hover:shadow-lg hover:scale-105 transition-all duration-300 w-full md:w-auto">
                Escolha Seu Colchão Ideal
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-brand-green text-white font-bold text-sm md:text-base rounded-lg hover:bg-green-700 hover:shadow-lg hover:scale-105 transition-all duration-300 w-full md:w-auto">
                <MessageCircle className="w-4 md:w-5 h-4 md:h-5" />
                Fale com Especialista
              </button>
            </div>

            {/* Social Proof Metrics */}
            <div
              className="animate-slide-up flex flex-wrap gap-6 py-4 border-t border-gray-200"
              style={{ animationDelay: "0.25s", marginTop: "8px", paddingTop: "24px" }}
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-700">
                  4.9 (122 avaliações)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-green" />
                <span className="text-sm font-semibold text-gray-700">
                  Entrega no mesmo dia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
