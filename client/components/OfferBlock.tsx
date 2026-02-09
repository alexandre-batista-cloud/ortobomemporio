import { Gift, Calendar } from "lucide-react";

export function OfferBlock() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-brand-green to-green-600">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center text-white">
          {/* Christmas Icon */}
          <div className="text-5xl mb-4">🎄</div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sonhos de Natal Ortobom
          </h2>

          {/* Benefits List */}
          <div className="space-y-3 mb-8 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-lg">
              <span className="text-2xl">📅</span>
              <span>Parcelamento em até 21x</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <span className="text-2xl">🚚</span>
              <span>Frete grátis em Goiânia</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <span className="text-2xl">🎁</span>
              <span>Travesseiro de brinde</span>
            </div>
          </div>

          {/* Conditions */}
          <p className="text-sm mb-8 opacity-90">
            ⏰ Condições válidas por tempo limitado. Aproveite!
          </p>

          {/* CTA Button */}
          <button
            onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-green font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            <Gift className="w-5 h-5" />
            Garantir condição e agendar visita
          </button>
        </div>
      </div>
    </section>
  );
}
