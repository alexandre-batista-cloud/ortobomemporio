import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Qual colchão é melhor para dor na coluna?",
    answer:
      "Depende do tipo e intensidade da dor. Nossos Consultores do Sono avaliam sua situação e indicam a firmeza e tipo de tecnologia ideal. Geralmente, colchões com bom suporte como o Pro Saúde funcionam bem.",
  },
  {
    id: 2,
    question: "Molas ou espuma? Qual a diferença?",
    answer:
      "Molas oferecem maior ventilação e durabilidade. Espuma proporciona alívio de pressão superior. A melhor escolha depende de suas necessidades pessoais. Testando na loja você sente a diferença.",
  },
  {
    id: 3,
    question: "Posso testar antes de comprar?",
    answer:
      "Sim! Essa é a essência da Ortobom. Você vem à loja, testa os modelos com ajuda do Consultor do Sono e escolhe com segurança. É um processo consultivo, sem pressa.",
  },
  {
    id: 4,
    question: "Tem entrega e montagem?",
    answer:
      "Sim. Entregamos em Goiânia em poucos dias após a compra. A montagem é realizada pelos nossos parceiros com cuidado profissional.",
  },
  {
    id: 5,
    question: "Como funciona o parcelamento em 21x?",
    answer:
      "O parcelamento é feito no cartão de crédito em até 21 vezes. Consulte o Consultor do Sono para detalhes sobre as condições vigentes.",
  },
  {
    id: 6,
    question: "O brinde (travesseiro) é garantido?",
    answer:
      "Sim! Na promoção Sonhos de Natal, o travesseiro de brinde é garantido com qualquer compra. Consulte as condições no ato da compra.",
  },
];

export function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 bg-brand-beige">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="animate-fade-in text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy text-center mb-12">
          Perguntas Frequentes
        </h2>

        <div className="space-y-3 mb-8">
          {faqs.map((faq, idx) => (
            <div
              key={faq.id}
              className="animate-slide-up bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-brand-blue"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-blue-50 transition-colors duration-300 text-left group"
              >
                <span className="font-semibold text-brand-navy text-base md:text-lg group-hover:text-brand-blue transition-colors duration-300">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 md:w-5 h-4 md:h-5 text-brand-blue flex-shrink-0 transition-transform duration-300 ml-3 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-gray-700 border-t border-gray-100 animate-slide-down bg-blue-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div
          className="animate-fade-in text-center bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="font-semibold text-brand-navy mb-4">
            Ainda tem dúvidas?
          </p>
          <a
            href="https://wa.me/5562996148873?text=Tenho%20uma%20d%C3%BAvida%20sobre%20os%20colch%C3%B5es%20Ortobom"
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
