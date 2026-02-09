import { HeroCarousel } from "@/components/HeroCarousel";
import { CategoryHighlights } from "@/components/CategoryHighlights";
import { ProductCard } from "@/components/ProductCard";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { ContactInfo } from "@/components/ContactInfo";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const colchoesProducts = [
  {
    title: "Colchão Pró Saúde Super Pocket Casal",
    images: [
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/ed5325bde59145e9f2bcfe99769af3de9082c670?width=694",
        alt: "Colchão Pró Saúde Super Pocket Casal",
      },
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/b723eaca3ad0226720b72372e2ad083864bd4edd?width=166",
        alt: "Vista alternativa 1",
      },
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/22d595e8961f23938b88e7bd389015f38010a09e?width=166",
        alt: "Vista alternativa 2",
      },
    ],
    discount: "24% OFF",
    altura: "25",
    largura: "138",
    comprimento: "188",
    description:
      "Bem-vindo ao mundo do colchão Pró-Saúde Superpocket da Ortobom! Este colchão, projetado para oferecer a melhor experiência de sono, combina tecnologia avançada e conforto excepcional. Se você está em busca de uma noite de sono revigorante e tranquila, o colchão Pró-Saúde Superpocket é a escolha ideal para garantir o descanso que você merece....",
  },
  {
    title: "Colchão Only Casal",
    images: [
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/0c66ec1290dfb6bef88d596b06e36f6011380c71?width=694",
        alt: "Colchão Only Casal",
      },
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/0855ac95810b1dd76798c274d974bb5f0e929461?width=166",
        alt: "Vista alternativa 1",
      },
    ],
    discount: "24% OFF",
    altura: "25",
    largura: "138",
    comprimento: "188",
    hasVideo: true,
    description:
      "O Colchão Only da Ortobom é a escolha perfeita para quem busca o equilíbrio ideal entre conforto e suporte. Ele é o prim...",
  },
  {
    title: "Colchão Ouro Spring Casal",
    images: [
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/09f302543f6fd89089d6de0e839d0afd6bec118f?width=694",
        alt: "Colchão Ouro Spring Casal",
      },
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/5e91955e9c225101baf0bb793880994fc02b4618?width=166",
        alt: "Vista alternativa 1",
      },
    ],
    discount: "24% OFF",
    altura: "31",
    largura: "138",
    comprimento: "188",
    hasVideo: true,
    description:
      "Descubra o conforto supremo do Colchão Ouro Spring da Ortobom, projetado para oferecer uma experiência de sono excepcion...",
  },
  {
    title: "Colchão Liberty Casal",
    images: [
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/98cdef40d50328be6ff2d2b378295ffd7b594074?width=694",
        alt: "Colchão Liberty Casal",
      },
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/63a986a4f8ef5df5df8bd5ebaeb7082c923e451c?width=166",
        alt: "Vista alternativa 1",
      },
    ],
    discount: "24% OFF",
    altura: "31",
    largura: "138",
    comprimento: "188",
    description:
      "O Colchão Liberty é um dos produtos mais vendidos da Ortobom, oferecendo uma combinação perfeita de conforto, tecnologia...",
  },
];

const roupasDeCamaProducts = [
  {
    title: "Jogo de Lençol 400 Fios Plissado 50 cm Casal",
    images: [
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/040dededd5a8716d2eab38d3d1eb791eef7d57e8?width=693",
        alt: "Jogo de Lençol 400 Fios",
      },
    ],
    discount: "24% OFF",
    altura: "2",
    largura: "140",
    comprimento: "190",
    description:
      "Suavidade a ada momento Descubra o conforto e a elegância do Jogo de Lençol Ortobom Plissado Percal 400 Fios, confeccionado em tecido 100% algodão....",
  },
  {
    title: "Protetor Impermeável 30 cm 18 Casal",
    images: [
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/00c899926df08e805121d2d26c5f3e561ed4eb9e?width=694",
        alt: "Protetor Impermeável",
      },
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/088ff9f5153d887ccd81efb305a4b9c4da4bd3e2?width=166",
        alt: "Vista alternativa 1",
      },
    ],
    discount: "24% OFF",
    altura: "30",
    largura: "140",
    comprimento: "190",
    description:
      "Noites Tranquilas. Proteja seu colchão e aproveite noites de sono tranquilas com o Protetor de Colchão. Sua malha de alta gramatura, combinada com a...",
  },
  {
    title: "Pillow Percal 200 Fios Casal",
    images: [
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/76301300448d8e36c3f04536029adfa30eff33f1?width=694",
        alt: "Pillow Percal 200 Fios",
      },
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/63ba512c4cb5c1ac3bb7252a05b9d15c4cc11fc8?width=166",
        alt: "Vista alternativa 1",
      },
    ],
    discount: "24% OFF",
    altura: "25",
    largura: "138",
    comprimento: "188",
    hasVideo: true,
    description:
      "O Pillow Percal 200 Fios é a escolha ideal para quem busca um toque de sofisticação e conforto em suas noites de sono. Disponível nos tamanhos Solteiro,...",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel />

      <CategoryHighlights />

      {/* Colchões Section */}
      <section id="colchoes" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy text-center mb-8">
            Colchões
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colchoesProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CTASection />

      {/* Roupas de Cama Section */}
      <section id="roupas" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy text-center mb-8">
            Roupas de Cama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roupasDeCamaProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <ContactInfo />

      {/* Map Section */}
      <section className="relative h-[300px] bg-[#E5E3DF]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.6647424!2d-43.2245!3d-22.9668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU4JzAwLjUiUyA0M8KwMTMnMjguMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
          width="100%"
          height="300"
          style={{ border: "2px solid #1A73E8" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Ortobom"
        />
      </section>

      <WhatsAppButton />
    </div>
  );
}
