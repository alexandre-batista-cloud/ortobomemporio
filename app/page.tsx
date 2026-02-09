import { HeaderMarista } from "@/components/HeaderMarista";
import { HeroMarista } from "@/components/HeroMarista";
import { CampaignCTA } from "@/components/CampaignCTA";
import { SleepQuiz } from "@/components/SleepQuiz";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { TestimonialsMarista } from "@/components/TestimonialsMarista";
import { HowItWorks } from "@/components/HowItWorks";
import { MattressTable } from "@/components/MattressTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StoreCard } from "@/components/StoreCard";
import { FooterMarista } from "@/components/FooterMarista";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ortobom Goiânia - Colchões em Goiânia | Loja Marista e Brasil Park",
  description:
    "Loja Ortobom em Goiânia. Colchões com entrega em 1 dia, 4.9★ (122 avaliações Google), 20 anos no Marista. Consultores especializados, estacionamento coberto. WhatsApp: (62) 99614-8873",
  alternates: {
    canonical: "https://ortobomgoiania.com.br/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Onde comprar colchão Ortobom em Goiânia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Ortobom Goiânia está localizada na Av. 85, 2385 - Setor Marista, em frente ao Empório Prime. WhatsApp: (62) 99614-8873",
      },
    },
    {
      "@type": "Question",
      name: "Qual o horário de funcionamento da Ortobom Marista?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Segunda a Sexta: 09h às 19h. Sábado: 09h às 13h. Domingo: Fechado.",
      },
    },
    {
      "@type": "Question",
      name: "A Ortobom Goiânia faz entrega rápida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Entregamos em Goiânia em 1 dia útil. Produtos frescos direto da fábrica.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderMarista />
      <HeroMarista />
      <CampaignCTA />
      <SleepQuiz />
      <BenefitsGrid />
      <TestimonialsMarista />
      <HowItWorks />
      <MattressTable />
      <FAQAccordion />
      <div id="booking-form">
        <StoreCard />
      </div>
      <FooterMarista />
    </div>
  );
}
