import { MessageCircle, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "Você chama ou agenda",
    description: "Fale conosco via WhatsApp ou reserve sua visita online",
  },
  {
    number: 2,
    icon: Users,
    title: "Consultor do Sono entende sua necessidade",
    description: "Conversa consultiva sobre seu sono e preferências",
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Você testa e escolhe com segurança",
    description: "Experimente na loja e tome a melhor decisão",
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 md:py-16 bg-brand-beige">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="animate-fade-in text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy text-center mb-4">
          Como Funciona
        </h2>
        <p className="animate-fade-in text-center text-gray-600 mb-12 max-w-2xl mx-auto" style={{ animationDelay: "0.1s" }}>
          Sem compromisso. Sem pressão. Só conforto certo.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative animate-slide-up" style={{ animationDelay: `${step.number * 100}ms` }}>
                {/* Card */}
                <div className="bg-white rounded-lg p-6 md:p-8 h-full shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-brand-blue">
                  {/* Step Number Circle */}
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-700 text-white rounded-full font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <Icon className="w-8 h-8 text-brand-blue mb-4 transition-transform duration-300 hover:scale-110" />

                  {/* Title */}
                  <h3 className="font-bold text-lg text-brand-navy mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>

                {/* Arrow between steps */}
                {step.number < steps.length && (
                  <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-1 bg-brand-blue items-center justify-end">
                    <div className="w-3 h-3 bg-brand-blue transform rotate-45" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="animate-fade-in text-center" style={{ animationDelay: "0.3s" }}>
          <p className="text-brand-navy font-semibold mb-4 text-lg">
            Pronto para começar?
          </p>
          <a
            href="https://wa.me/5562996148873?text=Oi!%20Vim%20pela%20landing%20page%20da%20Ortobom%20Marista.%20Quero%20ajuda%20para%20escolher%20meu%20colch%C3%A3o%20ideal%20e%20entender%20as%20condi%C3%A7%C3%B5es%20do%20Sonhos%20de%20Natal%20%F0%9F%98%8A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-bold rounded-lg hover:bg-green-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com consultor agora
          </a>
        </div>
      </div>
    </section>
  );
}
