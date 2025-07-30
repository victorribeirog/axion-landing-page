import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import AboutAxonSection from "@/components/AboutAxonSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import ProofSection from "@/components/ProofSection";
import CustomizationSection from "@/components/CustomizationSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section - Abertura Impactante */}
      <div id="hero">
        <HeroSection />
      </div>
      
      {/* 2. Problems Section - Conexão Emocional */}
      <ProblemsSection />
      
      {/* 3. Solution Section - A Solução IA */}
      <div id="solution">
        <SolutionSection />
      </div>
      
      {/* 4. Testimonials Section - Prova Social */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      
      {/* 5. Process Section - Como Funciona */}
      <ProcessSection />
      
      {/* 6. About AXON Section - Credibilidade */}
      <div id="about">
        <AboutAxonSection />
      </div>
      
      {/* 7. Target Audience Section - Para Quem É */}
      <div id="target">
        <TargetAudienceSection />
      </div>
      
      {/* 8. Proof Section - Autoridade */}
      <div id="proof">
        <ProofSection />
      </div>
      
      {/* 9. Customization Section - Solução Personalizada */}
      <div id="customization">
        <CustomizationSection />
      </div>
      
      {/* 10. FAQ Section - Esclarecimentos */}
      <FAQSection />
      
      {/* 11. Final CTA Section - Garantia + Última Chamada */}
      <div id="final-cta">
        <FinalCTASection />
      </div>
    </div>
  );
};

export default Index;