import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const STORE_IMAGES = [
  {
    id: 1,
    url: "https://lh3.googleusercontent.com/p/AF1QipO2tXijZ2qZ0iR73-vHsQHMHTEMvC8EwIbBxZix=w1200-h800-k-no",
    alt: "Loja Ortobom Marista - Fachada",
  },
  {
    id: 2,
    url: "https://lh3.googleusercontent.com/p/AF1QipM9BilRnO7sapylVQLaNZGVm3lya5eSa--i7aQT=w1200-h800-k-no",
    alt: "Loja Ortobom Marista - Entrada",
  },
  {
    id: 3,
    url: "https://lh3.googleusercontent.com/p/AF1QipPTkSMFVOASN8jtIWfWyxu7ltgFgi8sOixYFNQw=w1200-h800-k-no",
    alt: "Loja Ortobom Marista - Interior",
  },
];

export function StoreGallery() {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedImage = STORE_IMAGES.find((img) => img.id === selectedImageId);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? STORE_IMAGES.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === STORE_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {STORE_IMAGES.map((image) => (
          <button
            key={image.id}
            onClick={() => {
              setSelectedImageId(image.id);
              setCurrentIndex(STORE_IMAGES.findIndex((img) => img.id === image.id));
            }}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImageId(null)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl w-full">
            {/* Main Image */}
            <div className="relative bg-black rounded-lg overflow-hidden">
              <img
                src={STORE_IMAGES[currentIndex].url}
                alt={STORE_IMAGES[currentIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* Navigation Buttons */}
            {STORE_IMAGES.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="text-center mt-4 text-white text-sm">
              {currentIndex + 1} / {STORE_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
