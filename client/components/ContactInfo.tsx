import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <section className="bg-brand-beige py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy text-center mb-8">
          Conheça nossa Unidade
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Phone */}
          <div className="bg-gradient-to-r from-brand-gray-light/80 to-[#E7EDF7]/80 rounded-[3px] shadow-[0_0_10px_0_rgba(4,12,238,0.22)] p-6">
            <div className="flex items-center gap-4 mb-4">
              <Phone className="w-12 h-12 text-brand-navy flex-shrink-0" />
              <h3 className="text-xl font-semibold text-brand-navy">
                Nosso Telefone
              </h3>
            </div>
            <a
              href="tel:+552125300765"
              className="text-brand-blue text-sm hover:underline block text-center"
            >
              (21) 2530-0765
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-gradient-to-r from-brand-gray-light/80 to-[#E7EDF7]/80 rounded-[3px] shadow-[0_0_10px_0_rgba(4,12,238,0.22)] p-6">
            <div className="flex items-center gap-4 mb-4">
              <MessageCircle className="w-12 h-12 text-brand-navy flex-shrink-0" />
              <h3 className="text-xl font-semibold text-brand-navy">
                Nosso WhatsApp
              </h3>
            </div>
            <a
              href="https://wa.me/552125300765"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue text-sm hover:underline block text-center"
            >
              (21) 2530-0765
            </a>
          </div>

          {/* Address */}
          <div className="bg-gradient-to-r from-brand-gray-light/80 to-[#E7EDF7]/80 rounded-[3px] shadow-[0_0_10px_0_rgba(4,12,238,0.22)] p-6">
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="w-12 h-12 text-brand-navy flex-shrink-0" />
              <h3 className="text-xl font-semibold text-brand-navy">
                Nosso endereço
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=R.+Jardim+Botânico+635+Jardim+Botânico+Rio+de+Janeiro+RJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue text-sm hover:underline block text-center"
            >
              R. Jardim Botânico, 635 – Jardim Botânico, Rio de Janeiro – RJ
            </a>
          </div>

          {/* Hours */}
          <div className="bg-gradient-to-r from-brand-gray-light/80 to-[#E7EDF7]/80 rounded-[3px] shadow-[0_0_10px_0_rgba(4,12,238,0.22)] p-6">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-12 h-12 text-brand-navy flex-shrink-0" />
              <h3 className="text-xl font-semibold text-brand-navy">
                Horário de Funcionamento
              </h3>
            </div>
            <p className="text-brand-navy text-sm text-center">
              De Segunda-Sexta das 08hs às 20hs
              <br />
              Sábados das 9hs às 16hs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
