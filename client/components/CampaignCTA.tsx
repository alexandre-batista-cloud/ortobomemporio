import { Calendar, MessageCircle } from "lucide-react";

export function CampaignCTA() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button
            onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg flex-1 md:flex-initial"
          >
            <Calendar className="w-5 h-5" />
            Agendar visita na loja
          </button>

          <a
            href="https://wa.me/5562996148873?text=Oi!%20Gostaria%20de%20falar%20com%20um%20Consultor%20de%20vendas%20Ortobom."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-green text-white font-bold rounded-lg hover:bg-green-700 transition-colors text-lg flex-1 md:flex-initial"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com consultor
          </a>
        </div>
      </div>
    </section>
  );
}
