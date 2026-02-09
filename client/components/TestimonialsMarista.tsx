import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "JOÃO SILVA",
    rating: 5,
    text: "Comprei um Pillow Top aqui na loja e a qualidade é impressionante. Excelente custo-benefício comparado a outras lojas. A equipe é super atenciosa e ajudou bastante na escolha. Entrega rápida no mesmo dia!",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Faff4daf0869b40128d7c24e422bbeae5",
  },
  {
    id: 2,
    name: "MARIA SANTOS",
    rating: 5,
    text: "Adorei o atendimento! Tem estacionamento coberto, fica bem localizado no Marista. Comprei um Colchão Liberty e durmo maravilhosamente bem. Recomendo demais, voltarei com certeza.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Faff4daf0869b40128d7c24e422bbeae5",
  },
  {
    id: 3,
    name: "CARLOS OLIVEIRA",
    rating: 5,
    text: "Melhor loja de colchões de Goiás! Os produtos são fresquinhos, saem da fábrica com menos de uma semana. A entrega foi super rápida, muito melhor que encomendar pelo site. Consultores muito experientes!",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Faff4daf0869b40128d7c24e422bbeae5",
  },
];

const popularProducts = [
  {
    name: "Pillow Top",
    alt: "Pillow top HR Gel Ortobom",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Fd612ffb81afb40adbf56d9a083357262",
  },
  {
    name: " Liberty",
    alt: "Colchão Liberty Ortobom",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2F35cfbd1b8406494f89f2c56d1294b29a",
  },
  {
    name: "Bellona",
    alt: "Colchão Bellona Ortobom",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Fcecb727b71944c3fa60deea0f0a97c42",
  },
  {
    name: "Absolut",
    alt: "Colchão Absolut Ortobom",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2F26fb647258c84aef8a6ab615f427af3f",
  },
  {
    name: "Orion",
    alt: "Colchão Orion Ortobom",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2F2ff3b176dad548aba8b2d4a1f4420879",
  },
  {
    name: "Orthopur",
    alt: "Colchão Orthopur Ortobom",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fc3f87aa31bff43888730edcf4efdccde%2Fb26547b6fd724279a04732f61b7e72be",
  },
];

export function TestimonialsMarista() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header with Google Rating */}
        <div className="text-center mb-20">
          <h2 className="animate-fade-in text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-10">
            Depoimentos reais de clientes satisfeitos do Ortobom Empório Marista
          </p>

          {/* Google Rating Badge - Enhanced */}
          <div className="inline-flex items-center justify-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-yellow-100 mb-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-fade-in"
                  style={{ animationDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
            <div>
              <span className="text-3xl font-bold text-brand-navy">4.9</span>
              <span className="text-gray-600 text-sm ml-2 block">122 avaliações</span>
            </div>
          </div>

          {/* Link to Google Reviews */}
          <a
            href="https://www.google.com/maps/place/Ortobom+Emp%C3%B3rio+Marista/@-16.7026872,-49.2641467,17z/data=!4m8!3m7!1s0x935ef169780fffff:0xb5b57f239e56c7d2!8m2!3d-16.702684!4d-49.264068!9m1!1b1!16s%2Fg%2F1tfs24f3?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors"
          >
            Ver todas as avaliações
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-green rounded-t-2xl" />

              {/* Profile Avatar with Initials */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-white font-bold text-xl">
                    {testimonial.name
                      .split(" ")
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("")}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-fade-in"
                    style={{ animationDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-base leading-relaxed mb-6 min-h-24">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <p className="font-bold text-brand-navy text-sm uppercase tracking-wide">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        {/* Key Differentiators */}
        <div className="animate-fade-in bg-gradient-to-br from-brand-blue/10 to-blue-50 rounded-3xl p-10 md:p-16 mb-20 border border-blue-100">
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-12 text-center">
            Diferenciais do Ortobom Empório Marista
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Entrega Rápida */}
            <div className="animate-slide-up group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                <div className="text-3xl">⚡</div>
              </div>
              <h4 className="font-bold text-brand-navy mb-3 text-lg group-hover:text-brand-blue transition-colors duration-300">Entrega Rápida</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Entrega ágil em <strong>caminhão baú</strong> com prazos muito mais curtos que o site oficial
              </p>
            </div>

            {/* Produtos Fresquinhos */}
            <div className="animate-slide-up group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-blue-200" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                <div className="text-3xl">✨</div>
              </div>
              <h4 className="font-bold text-brand-navy mb-3 text-lg group-hover:text-brand-blue transition-colors duration-300">Produtos Fresquinhos</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Colchões saem da fábrica com duas semanas em média de fabricação
              </p>
            </div>

            {/* Consultoria Especializada */}
            <div className="animate-slide-up group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-blue-200" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                <div className="text-3xl">👨‍💼</div>
              </div>
              <h4 className="font-bold text-brand-navy mb-3 text-lg group-hover:text-brand-blue transition-colors duration-300">Consultoria Especializada</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Consultores com 10+ anos de experiência</strong> para ajudar na escolha perfeita
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Localização Estratégica */}
            <div className="animate-slide-up group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-blue-200" style={{ animationDelay: "0.3s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                <div className="text-3xl">🏪</div>
              </div>
              <h4 className="font-bold text-brand-navy mb-3 text-lg group-hover:text-brand-blue transition-colors duration-300">Localização Estratégica</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Loja sofisticada no Centro do Marista há <strong>20 anos</strong> com atendimento humanizado, estacionamento coberto. Líder em qualidade em Goiás
              </p>
            </div>

            {/* Excelente Custo-Benefício */}
            <div className="animate-slide-up group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-blue-200" style={{ animationDelay: "0.4s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                <div className="text-3xl">💰</div>
              </div>
              <h4 className="font-bold text-brand-navy mb-3 text-lg group-hover:text-brand-blue transition-colors duration-300">Excelente Custo-Benefício</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Qualidade superior com preços competitivos em loja física, sem intermediários
              </p>
            </div>
          </div>
        </div>

        {/* Popular Products */}
        <div>
          <h3 className="animate-fade-in text-3xl md:text-4xl font-bold text-brand-navy mb-4 text-center">
            Produtos Populares
          </h3>
          <p className="animate-fade-in text-gray-700 text-center mb-12 max-w-2xl mx-auto" style={{ animationDelay: "0.1s" }}>
            Conheça os colchões mais procurados pelos nossos clientes
          </p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {popularProducts.map((product, index) => (
              <div
                key={product.name}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-brand-blue overflow-hidden animate-slide-up"
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image Container */}
                <div className="relative mb-4 h-40 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
                  <img
                    loading="lazy"
                    alt={product.alt}
                    src={product.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Name */}
                <p className="font-bold text-brand-navy text-center text-sm relative z-10 group-hover:text-brand-blue transition-colors duration-300">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
