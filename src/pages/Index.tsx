import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import ProofSection from "@/components/ProofSection";
import CustomizationSection from "@/components/CustomizationSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* 1. Hero Section - Abertura Impactante */}
      <HeroSection />
      
      {/* 2. Problems Section - Conexão Emocional */}
      <ProblemsSection />
      
      {/* 3. Solution Section - A Solução IA */}
      <SolutionSection />
      
      {/* 4. Process Section - Como Funciona */}
      <ProcessSection />
      
      {/* 5. Proof Section - Credibilidade + Autoridade */}
      <ProofSection />
      
      {/* 6. Customization Section - Solução Personalizada */}
      <CustomizationSection />
      
      {/* 7. Final CTA Section - Garantia + Última Chamada */}
      <FinalCTASection />
    </div>
  );
};

export default Index;