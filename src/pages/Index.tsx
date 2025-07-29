import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
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
      
      {/* 4. Process Section - Como Funciona */}
      <ProcessSection />
      
      {/* 5. Proof Section - Credibilidade + Autoridade */}
      <div id="proof">
        <ProofSection />
      </div>
      
      {/* 6. Customization Section - Solução Personalizada */}
      <div id="customization">
        <CustomizationSection />
      </div>
      
      {/* 7. FAQ Section - Esclarecimentos */}
      <FAQSection />
      
      {/* 8. Final CTA Section - Garantia + Última Chamada */}
      <div id="final-cta">
        <FinalCTASection />
      </div>
    </div>
  );
};

export default Index;