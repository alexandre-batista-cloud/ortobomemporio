import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    neighborhood: "Bairro Marista",
    before: "Acordava cansada e com dor nas costas",
    after: "Agora acordo descansada e pronta para o dia",
    rating: 5,
  },
  {
    id: 2,
    name: "João Santos",
    neighborhood: "Setor Bueno",
    before: "Tinha insônia constante",
    after: "Durmo profundamente toda noite",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Costa",
    neighborhood: "Água Branca",
    before: "Ombro doía ao acordar",
    after: "Sem dor, muito mais conforto",
    rating: 5,
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    neighborhood: "Jardim Goiás",
    before: "Testava colchões em várias lojas",
    after: "Encontrei o perfeito com ajuda do consultor",
    rating: 5,
  },
];

export function TestimonialsMarista() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-2">
          Histórias Reais de Goiânia
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Veja como mudamos o sono de clientes como você
        </p>

        {/* Testimonial Card */}
        <div className="bg-gradient-to-br from-brand-blue to-brand-navy text-white rounded-lg p-8 md:p-12 mb-8">
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(current.rating)].map((_, i) => (
              <span key={i} className="text-brand-orange text-xl">★</span>
            ))}
          </div>

          {/* Name & Location */}
          <h3 className="text-2xl font-bold mb-2">{current.name}</h3>
          <p className="text-brand-gray-light text-sm mb-6">📍 {current.neighborhood}</p>

          {/* Before/After */}
          <div className="space-y-4 mb-8">
            <div>
              <p className="text-sm text-brand-gray-light mb-1">ANTES:</p>
              <p className="text-lg">😴 {current.before}</p>
            </div>
            <div className="text-3xl text-center">→</div>
            <div>
              <p className="text-sm text-brand-gray-light mb-1">AGORA:</p>
              <p className="text-lg">✨ {current.after}</p>
            </div>
          </div>

          <a
            href="https://wa.me/556233260765?text=Quero%20esse%20atendimento%20que%20muda%20vidas!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Quero esse atendimento
          </a>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={prev}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-brand-navy" />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-brand-blue w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-brand-navy" />
          </button>
        </div>
      </div>
    </section>
  );
}
