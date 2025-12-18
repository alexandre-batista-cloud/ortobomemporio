import { HeaderMarista } from "@/components/HeaderMarista";
import { HeroMarista } from "@/components/HeroMarista";
import { SleepQuiz } from "@/components/SleepQuiz";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { TestimonialsMarista } from "@/components/TestimonialsMarista";
import { OfferBlock } from "@/components/OfferBlock";
import { HowItWorks } from "@/components/HowItWorks";
import { MattressTable } from "@/components/MattressTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StoreCard } from "@/components/StoreCard";
import { FooterMarista } from "@/components/FooterMarista";
import { Calendar, MessageCircle } from "lucide-react";

export default function MaristaLanding() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <HeaderMarista />

      <HeroMarista />

      {/* Headline Section */}
      <div className="flex flex-col relative h-auto self-end m-auto mt-5" style={{ margin: "20px auto 0 0" }}>
        <blockquote style={{ margin: "0 0 0 40px", border: "none", padding: "0px" }}>
          <span style={{ fontSize: "48px", fontWeight: "700", textAlign: "center", color: "rgb(0, 0, 0)" }}>
            Seu colchão ideal começa com um bom&nbsp;
          </span>
          <span style={{ color: "rgb(243, 109, 18)", fontSize: "48px", fontWeight: "700", textAlign: "center" }}>
            diagnóstico do sono
          </span>
          <span style={{ fontSize: "48px", fontWeight: "700", textAlign: "center", color: "rgb(0, 0, 0)" }}>
            &nbsp;
          </span>
        </blockquote>
      </div>

      {/* Description Text */}
      <div className="text-center">
        Teste na loja Ortobom Marista com um Consultor do Sono.
      </div>

      {/* Promo Text */}
      <div className="inline font-semibold text-center">
        Sonhos de Natal: até 21x, frete grátis e travesseiro de brinde.
      </div>

      {/* CTA Buttons Section */}
      <div className="flex flex-col relative mt-5">
        <div className="gap-5 flex flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-1/2">
            <button
              onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg mr-auto" style={{ paddingBottom: "38px" }}
            >
              <Calendar className="w-5 h-5" />
              Agendar visita na loja
            </button>
          </div>

          <div className="flex flex-col w-full md:w-1/2" style={{ marginLeft: "20px" }}>
            <a
              href="https://wa.me/556233260765?text=Oi!%20Vim%20pela%20landing%20page%20da%20Ortobom%20Marista.%20Quero%20ajuda%20para%20escolher%20meu%20colch%C3%A3o%20ideal%20e%20entender%20as%20condi%C3%A7%C3%B5es%20do%20Sonhos%20de%20Natal%20%F0%9F%98%8A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-brand-green text-white font-bold rounded-lg hover:bg-green-700 transition-colors text-lg mr-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com consultor
            </a>
          </div>
        </div>
      </div>

      <SleepQuiz />

      <BenefitsGrid />

      <TestimonialsMarista />

      <OfferBlock />

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
