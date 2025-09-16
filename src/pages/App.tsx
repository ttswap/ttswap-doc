import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ProblemsSection } from "../components/ProblemsSection";
import { LossReductionSection } from "../components/LossReductionSection";
import { ImpermanentLossSection } from "../components/ImpermanentLossSection";
import { CostReductionSection } from "../components/CostReductionSection";
import { RewardsSection } from "../components/RewardsSection";
import { TokenomicsSection } from "../components/TokenomicsSection";
import { LiquidityBenefitsSection } from "../components/LiquidityBenefitsSection";
import { Footer } from "../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* First Screen - Hero with Features and Trading Interface */}
        <HeroSection />

        {/* Second Screen - Problem Solutions */}
        <ProblemsSection />

        {/* Third Screen - Loss Reduction Methods */}
        <LossReductionSection />

        {/* Fourth Screen - Impermanent Loss Elimination */}
        <ImpermanentLossSection />

        {/* Fifth Screen - Cost Reduction */}
        <CostReductionSection />

        {/* Sixth Screen - Role-based Rewards */}
        <RewardsSection />

        {/* Seventh Screen - TTS Token Economics */}
        <TokenomicsSection />

        {/* Eighth Screen - Liquidity Benefits */}
        <LiquidityBenefitsSection />
      </main>

      <Footer />
    </div>
  );
}