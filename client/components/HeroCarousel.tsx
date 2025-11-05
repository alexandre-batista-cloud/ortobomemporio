import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b4492011d5cd35fdcf7a126d4d54ffb4257be7ef?width=3840",
    alt: "Conjunto Ortobom",
  },
  {
    id: 2,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/bef6f1530dc941d192ac69260a33f84da3fe74cf?width=3840",
    alt: "Produtos Ortobom",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 w-[25px] h-[25px] bg-brand-navy-dark/35 hover:bg-brand-navy-dark/50 flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-brand-gray-light" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 w-[25px] h-[25px] bg-brand-navy-dark/35 hover:bg-brand-navy-dark/50 flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-brand-gray-light" />
      </button>
    </div>
  );
}
