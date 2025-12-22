import { useState } from "react";
import { MapPin, Clock, MessageCircle, Calendar, X } from "lucide-react";

export function StoreCard() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    preferredDay: "",
    preferredTime: "",
    immediateContact: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}. Gostaria de agendar uma visita na loja Ortobom Marista para ${formData.preferredDay} às ${formData.preferredTime || "hora a definir"}. ${formData.immediateContact ? "Quero atendimento imediato no WhatsApp também!" : ""}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5562996148873?text=${encodedMessage}`, "_blank");
    setShowBookingForm(false);
  };

  return (
    <>
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-12">
            Ortobom Empório Marista – Goiânia
          </h2>

          {/* Store Card */}
          <div className="bg-brand-beige rounded-lg p-8 md:p-12 shadow-lg">
            {/* Address */}
            <div className="flex gap-4 mb-6">
              <MapPin className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-brand-navy text-lg">
                  <p>Em Frente ao Empório Prime, ao lado do Cartório Silva em Goiânia.</p>
                </div>
                <p className="text-gray-700">
                  Avenida 85, 2385 - St. Marista
                </p>
                <p className="text-gray-700">Goiânia - GO, 74160-010</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 mb-8">
              <Clock className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-navy text-lg">Horários</p>
                <p className="text-gray-700">Segunda a Sexta: 09h às 19h</p>
                <p className="text-gray-700">Sábado: 09h às 13h</p>
                <p className="text-gray-700">Domingo: Fechado</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="https://maps.app.goo.gl/ET9kAgcG1nRUhWj26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-brand-blue text-brand-blue font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Abrir no Google Maps
              </a>
              <button
                onClick={() => setShowBookingForm(true)}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Agendar visita
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 md:p-6">
          <div className="bg-white rounded-lg max-w-md w-full p-6 md:p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowBookingForm(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <h3 className="text-2xl font-bold text-brand-navy mb-6">
              Agende sua Visita
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-2">
                  Seu nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:outline-none"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:outline-none"
                  placeholder="(62) 99999-9999"
                />
              </div>

              {/* Preferred Day */}
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-2">
                  Melhor dia
                </label>
                <select
                  name="preferredDay"
                  value={formData.preferredDay}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:outline-none"
                >
                  <option value="">Selecione um dia</option>
                  <option value="Segunda">Segunda</option>
                  <option value="Terça">Terça</option>
                  <option value="Quarta">Quarta</option>
                  <option value="Quinta">Quinta</option>
                  <option value="Sexta">Sexta</option>
                  <option value="Sábado">Sábado</option>
                </select>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-2">
                  Melhor horário
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-brand-blue focus:outline-none"
                >
                  <option value="">Aberto a qualquer horário</option>
                  <option value="10:00">10:00 - 12:00</option>
                  <option value="12:00">12:00 - 14:00</option>
                  <option value="14:00">14:00 - 16:00</option>
                  <option value="16:00">16:00 - 18:00</option>
                  <option value="18:00">18:00 - 20:00</option>
                </select>
              </div>

              {/* Checkbox */}
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="immediateContact"
                  checked={formData.immediateContact}
                  onChange={handleInputChange}
                  className="w-5 h-5 border-2 border-gray-200 rounded cursor-pointer"
                />
                <span className="text-brand-navy font-medium">
                  Quero atendimento imediato no WhatsApp
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-4 bg-brand-green text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Confirmar Agendamento
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
