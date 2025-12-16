import { MessageCircle } from "lucide-react";

const mattresses = [
  {
    firmness: "Macio",
    ideal: "Quem dorme de lado",
    benefit: "Alívio de pressão",
  },
  {
    firmness: "Equilibrado",
    ideal: "Uso misto (vários lados)",
    benefit: "Conforto + suporte",
  },
  {
    firmness: "Firme",
    ideal: "Quem tem dor na coluna",
    benefit: "Estabilidade",
  },
];

export function MattressTable() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-12">
          Escolha Rápida
        </h2>

        {/* Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="p-4 text-left font-bold">Sensação</th>
                <th className="p-4 text-left font-bold">Ideal para</th>
                <th className="p-4 text-left font-bold">Benefício</th>
              </tr>
            </thead>
            <tbody>
              {mattresses.map((mattress, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-brand-beige"}
                >
                  <td className="p-4 font-semibold text-brand-navy border-b border-gray-200">
                    {mattress.firmness}
                  </td>
                  <td className="p-4 text-gray-700 border-b border-gray-200">
                    {mattress.ideal}
                  </td>
                  <td className="p-4 text-gray-700 border-b border-gray-200">
                    {mattress.benefit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/556233260765?text=Quero%20ajuda%20para%20escolher%20a%20firmeza%20certa%20para%20mim!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Quero ajuda para escolher
          </a>
        </div>
      </div>
    </section>
  );
}
