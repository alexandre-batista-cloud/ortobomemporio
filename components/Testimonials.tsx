"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Isaque Barbosa",
    age: "29 anos",
    location: "Rio de Janeiro/RJ",
    product: "Comprou Colchão Ouro Spring",
    text: "Os produtos Ortobom sempre trazem novidades no que se refere a designer tecnologia e conforto, a realidade superou minhas expectativas, nível excelente!",
  },
  {
    id: 2,
    name: "Jean Visconti",
    age: "34 anos",
    location: "São Paulo/SP",
    product: "Comprou Colchão Pró Saúde Visco + Base Elétrica",
    text: "Graças a Ortobom descobri depois de anos o que é dormir de verdade e acordar descansado, com fôlego para enfrentar o dia, e ansioso pra voltar pra cama a noite! Noite bem dormida e qualidade de vida 100%!",
  },
  {
    id: 3,
    name: "Maria Eduarda",
    age: "21 anos",
    location: "Niterói/RJ",
    product: "Comprou Kit Liberty",
    text: "Realizei o sonho de ter uma cama de hotel 5 estrelas!!! Extremamente confortável, jogo de cama e a cabeceira lindos! A entrega foi antes do esperado, as pessoas tb foram super gentis!",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-brand-beige py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy text-center mb-8">
          Depoimentos de nossos clientes
        </h2>

        <div className="relative">
          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-2 md:min-w-[50%] lg:min-w-[33.333%]"
                >
                  <div className="bg-brand-gray-light border border-brand-blue p-4 h-full">
                    <div className="mb-2">
                      <span className="text-brand-navy-dark font-semibold text-xs">
                        {testimonial.name},{" "}
                      </span>
                      <span className="text-brand-navy-dark font-semibold text-xs">
                        {testimonial.age}
                      </span>
                    </div>
                    <div className="text-brand-navy-dark font-semibold text-[15px] mb-2">
                      {testimonial.location}
                    </div>
                    <div className="text-brand-blue font-semibold text-base mb-4">
                      {testimonial.product}
                    </div>
                    <blockquote className="border-l-[7px] border-brand-navy pl-7 text-[#54595F] text-base leading-6">
                      {testimonial.text}
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] bg-brand-blue/55 hover:bg-brand-blue/75 flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-brand-gray-light" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] bg-brand-blue/55 hover:bg-brand-blue/75 flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-brand-gray-light" />
          </button>
        </div>
      </div>
    </section>
  );
}
