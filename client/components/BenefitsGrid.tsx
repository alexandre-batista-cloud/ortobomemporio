import { Heart, Shield, Wind, Zap, Settings, Truck } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Alívio de Pressão",
    description: "Reduz pontos de pressão nos ombros e quadril",
  },
  {
    icon: Shield,
    title: "Suporte da Coluna",
    description: "Alinhamento correto durante o sono",
  },
  {
    icon: Wind,
    title: "Conforto Térmico",
    description: "Tecnologia que controla a temperatura",
  },
  {
    icon: Zap,
    title: "Tecnologias Ortobom",
    description: "Inovações testadas e comprovadas",
  },
  {
    icon: Settings,
    title: "Opções de Firmeza",
    description: "Macio, equilibrado ou firme",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Em Goiânia, em poucos dias",
  },
];

export function BenefitsGrid() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-brand-beige to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="animate-fade-in text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-brand-navy mb-4">
            Por que escolher Ortobom?
          </h2>
          <p className="animate-slide-up text-lg md:text-xl text-gray-700 max-w-2xl mx-auto" style={{ animationDelay: "0.1s" }}>
            Colchões desenvolvidos com tecnologia de ponta para garantir conforto e saúde na sua cama
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="animate-slide-up group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-brand-blue"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Icon Container with Background */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-brand-blue transition-transform duration-300 group-hover:scale-125" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-blue to-brand-green rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
