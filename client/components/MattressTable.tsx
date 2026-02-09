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
        <h2 className="animate-fade-in text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy text-center mb-12">
          Escolha Rápida
        </h2>

        {/* Table */}
        <div className="animate-slide-up overflow-x-auto mb-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300" style={{ animationDelay: "0.1s" }}>
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-gradient-to-r from-brand-blue to-blue-700 text-white">
                <th className="p-2 md:p-4 text-left font-bold">Sensação</th>
                <th className="p-2 md:p-4 text-left font-bold hidden md:table-cell">Ideal para</th>
                <th className="p-2 md:p-4 text-left font-bold hidden md:table-cell">Benefício</th>
                <th className="p-2 md:p-4 text-left font-bold md:hidden">Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {mattresses.map((mattress, idx) => (
                <tr
                  key={idx}
                  className={`group transition-all duration-300 hover:bg-blue-50 cursor-pointer ${idx % 2 === 0 ? "bg-white" : "bg-brand-beige"}`}
                >
                  <td className="p-2 md:p-4 font-semibold text-brand-navy border-b border-gray-200 group-hover:text-brand-blue transition-colors duration-300">
                    {mattress.firmness}
                  </td>
                  <td className="p-2 md:p-4 text-gray-700 border-b border-gray-200 group-hover:text-brand-navy transition-colors duration-300 hidden md:table-cell">
                    {mattress.ideal}
                  </td>
                  <td className="p-2 md:p-4 text-gray-700 border-b border-gray-200 group-hover:text-brand-navy transition-colors duration-300 hidden md:table-cell">
                    {mattress.benefit}
                  </td>
                  <td className="p-2 md:p-4 text-gray-700 border-b border-gray-200 group-hover:text-brand-navy transition-colors duration-300 md:hidden text-xs">
                    {mattress.ideal} - {mattress.benefit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="animate-fade-in text-center" style={{ animationDelay: "0.2s" }}>
          <a
            href="https://wa.me/5562996148873?text=Quero%20ajuda%20para%20escolher%20a%20firmeza%20certa%20para%20mim!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Quero ajuda para escolher
          </a>
        </div>
      </div>
    </section>
  );
}
