import { MessageCircle, Calendar, Star, Zap } from "lucide-react";

export function HeroMarista() {
  return (
    <section
      className="relative w-full bg-white overflow-hidden pt-20 md:pt-24 pb-12 md:pb-20"
      style={{
        backgroundImage:
          "url('https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2F7b02c97ed6f14e8f839c40fbfb76f290?format=webp&width=800')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
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
        <div className="flex flex-col gap-6 md:gap-8 max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full w-fit">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-900">
              Melhor loja de colchões de Goiás
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="animate-slide-up text-5xl md:text-6xl lg:text-7xl font-bold text-brand-navy leading-tight"
            style={{ marginTop: "-3px" }}
          >
            Seu novo colchão Ortobom está aqui.
          </h1>

          {/* Description */}
          <p
            className="animate-slide-up text-lg md:text-xl text-gray-700 max-w-2xl"
            style={{ animationDelay: "0.1s", marginTop: "-3px" }}
          >
            Colchões Ortobom com conforto de hotel 5 estrelas ao seu alcance.
          </p>

          {/* Social Proof Metrics */}
          <div
            className="animate-slide-up flex flex-wrap gap-6 py-4"
            style={{ animationDelay: "0.2s", marginTop: "-3px" }}
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
                Entrega em 2 dias
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
