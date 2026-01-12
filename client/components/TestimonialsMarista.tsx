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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Google Rating */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Histórias Reais de Goiânia
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Veja o que nossos clientes falam
          </p>

          {/* Google Rating Badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-brand-navy">4.9</span>
            <span className="text-gray-600 ml-2">122 avaliações no Google</span>
          </div>

          {/* Link to Google Reviews */}
          <a
            href="https://www.google.com/maps/place/Ortobom+Emp%C3%B3rio+Marista/@-16.7026872,-49.2641467,17z/data=!4m8!3m7!1s0x935ef169780fffff:0xb5b57f239e56c7d2!8m2!3d-16.702684!4d-49.264068!9m1!1b1!16s%2Fg%2F1tfs24f3?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            Ver todas as avaliações no Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              {/* Profile Avatar with Initials */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center border-4 border-white shadow-md">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name
                      .split(" ")
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("")}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <p className="font-bold text-brand-navy text-sm">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        {/* Key Differentiators */}
        <div className="bg-brand-blue/5 rounded-lg p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-brand-navy mb-8 text-center">
            Por que escolher a Ortobom Marista?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold text-brand-navy mb-2">Entrega Rápida</h4>
              <p className="text-gray-600 text-sm">
                <p>
                  Entrega ágil em <strong>caminhão baú</strong> com prazos
                  muito mais curtos que o site oficial da Ortobom
                </p>
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">✨</div>
              <h4 className="font-bold text-brand-navy mb-2">
                Produtos Fresquinhos
              </h4>
              <p className="text-gray-600 text-sm">
                <p>
                  Colchões saem da fábrica com duas semanas em média de
                  fabricação
                </p>
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">👨‍💼</div>
              <h4 className="font-bold text-brand-navy mb-2">
                Consultoria Especializada
              </h4>
              <p className="text-gray-600 text-sm">
                Consultores com 10+ anos de experiência para ajudar na escolha
                perfeita
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏪</div>
              <h4 className="font-bold text-brand-navy mb-2">
                Localização Estratégica
              </h4>
              <p className="text-gray-600 text-sm">
                Centro do Marista com estacionamento coberto. Líder em qualidade
                em Goiás
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-bold text-brand-navy mb-2">
                Excelente Custo-Benefício
              </h4>
              <p className="text-gray-600 text-sm">
                Qualidade superior com preços competitivos em loja física
              </p>
            </div>
          </div>
        </div>

        {/* Popular Products */}
        <div>
          <h3 className="text-2xl font-bold text-brand-navy mb-8 text-center">
            Produtos Populares
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {popularProducts.map((product) => (
              <div
                key={product.name}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{product.icon}</div>
                <p className="font-semibold text-brand-navy text-sm">
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
