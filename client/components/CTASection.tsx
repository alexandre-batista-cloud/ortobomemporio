import { MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/9cec3556d9ea5d9b202c30ded4e21849cb207636?width=4992"
          alt="Quarto Ortobom"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CTA Card */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-gradient-to-r from-brand-gray-light/80 to-[#E7EDF7]/80 backdrop-blur-sm rounded-[3px] shadow-[0_0_10px_0_rgba(4,12,238,0.22)] p-8 md:p-12 max-w-3xl w-full text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy mb-4">
            Faça seu orçamento com a Ortobom Colchões
          </h2>
          <p className="text-brand-navy text-sm mb-6">
            Entre em contato agora pelo WhatsApp e receba um{" "}
            <span className="font-bold">orçamento</span> totalmente{" "}
            <span className="font-bold underline">gratuito</span> em poucos
            minutos.
          </p>
          <a
            href="https://wa.me/552125300765"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[3px] border border-brand-beige bg-gradient-to-r from-brand-green to-brand-green-light shadow-[5px_5px_5px_0_rgba(0,0,0,0.36)] hover:shadow-lg transition-shadow"
          >
            <MessageCircle className="w-4 h-4 text-brand-gray-light" />
            <span className="text-brand-gray-light font-medium text-[15px]">
              Faça um Orçamento pelo WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
