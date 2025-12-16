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

export default function MaristaLanding() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderMarista />

      <HeroMarista />

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
