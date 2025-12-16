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
    <section className="py-12 md:py-16 bg-brand-beige">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-12">
          Por que escolher Ortobom?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-8 h-8 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-brand-navy mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
