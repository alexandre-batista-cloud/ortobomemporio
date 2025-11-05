import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, ChevronRight as ArrowRight, Truck } from "lucide-react";

interface ProductImage {
  url: string;
  alt: string;
}

interface ProductCardProps {
  title: string;
  images: ProductImage[];
  discount?: string;
  altura: string;
  largura: string;
  comprimento: string;
  rating?: number;
  description: string;
  hasVideo?: boolean;
  freeShipping?: boolean;
}

export function ProductCard({
  title,
  images,
  discount,
  altura,
  largura,
  comprimento,
  rating = 5,
  description,
  hasVideo = false,
  freeShipping = true,
}: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-gradient-to-r from-brand-gray-light to-brand-gray-medium p-2.5 rounded-sm relative">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-0 left-0 z-10 bg-gradient-to-r from-brand-navy to-[#4A5B7A] px-2.5 py-1.5 rounded-sm">
          <span className="text-brand-gray-light font-semibold text-base">
            {discount}
          </span>
        </div>
      )}

      {/* Main Image Carousel */}
      <div className="relative mb-4">
        <div className="relative h-[347px] overflow-hidden">
          <img
            src={images[currentImage].url}
            alt={images[currentImage].alt}
            className="w-full h-full object-cover border-3 border-brand-blue"
          />
        </div>

        {/* Image Navigation */}
        <button
          onClick={prevImage}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4 text-[#333333]" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4 text-[#333333]" />
        </button>

        {/* Thumbnail Gallery */}
        <div className="flex gap-1.5 mt-2 overflow-x-auto scrollbar-hide">
          {images.slice(0, 5).map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`flex-shrink-0 w-[83px] h-[83px] ${
                idx === currentImage ? "opacity-100" : "opacity-40"
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Video Badge */}
      {hasVideo && (
        <div className="mb-4">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="#333333">
            <path d="M10.5063 3H1.49375C0.66875 3 0 3.66875 0 4.49375V13.5063C0 14.3313 0.66875 15 1.49375 15H10.5063C11.3313 15 12 14.3313 12 13.5063V4.49375C12 3.66875 11.3313 3 10.5063 3ZM16.425 4.17812L13 6.54063V11.4594L16.425 13.8188C17.0875 14.275 18 13.8094 18 13.0125V4.98438C18 4.19063 17.0906 3.72187 16.425 4.17812Z" />
          </svg>
        </div>
      )}

      {/* Free Shipping Badge */}
      {freeShipping && (
        <div className="bg-[#E7EDF7] rounded-sm px-2 py-1.5 flex items-center gap-2 mb-4 w-fit mx-auto">
          <Truck className="w-3.5 h-3.5 text-brand-navy" />
          <span className="text-brand-navy-dark font-semibold text-base">
            Frete Grátis
          </span>
        </div>
      )}

      {/* Product Title */}
      <h3 className="text-brand-navy font-semibold text-[15px] text-center mb-3 leading-tight">
        {title}
      </h3>

      {/* Dimensions */}
      <div className="flex flex-wrap justify-center gap-2 mb-3 text-brand-navy text-sm">
        <span>Altura: {altura}</span>
        <span>Largura: {largura}</span>
        <span>Comprimento: {comprimento}</span>
      </div>

      {/* Rating */}
      <div className="text-center mb-4">
        <span className="text-brand-gold text-base">
          {"★".repeat(rating)}
        </span>
      </div>

      {/* Description */}
      <p className="text-brand-navy-dark text-center text-base leading-6 mb-6 line-clamp-4">
        {description}
      </p>

      {/* Action Buttons */}
      <div className="space-y-4">
        <a
          href="https://wa.me/552125300765"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-[3px] border border-brand-beige bg-gradient-to-r from-brand-green to-brand-green-light shadow-[5px_5px_5px_0_rgba(0,0,0,0.36)] hover:shadow-lg transition-shadow w-full"
        >
          <MessageCircle className="w-4 h-4 text-brand-gray-light" />
          <span className="text-brand-gray-light font-medium text-[15px]">
            Falar com um Consultor
          </span>
        </a>

        <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-[3px] border border-brand-beige bg-gradient-to-r from-brand-navy to-[#435A83] shadow-[5px_5px_5px_0_rgba(0,0,0,0.36)] hover:shadow-lg transition-shadow w-full">
          <ArrowRight className="w-4 h-4 text-brand-gray-light" />
          <span className="text-brand-gray-light font-medium text-[15px]">
            Detalhes do Produto
          </span>
        </button>
      </div>
    </div>
  );
}
