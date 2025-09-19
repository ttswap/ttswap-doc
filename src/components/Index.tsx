
import { HeroSection } from "./HeroSection";
import { ProblemsSection } from "./ProblemsSection";
import { LossReductionSection } from "./LossReductionSection";
import { ImpermanentLossSection } from "./ImpermanentLossSection";
import { CostReductionSection } from "./CostReductionSection";
import { RewardsSection } from "./RewardsSection";
import { TokenomicsSection } from "./TokenomicsSection";
import { LiquidityBenefitsSection } from "./LiquidityBenefitsSection";
import { Footer } from "./Footer";

// import '../css/index.css'
// import styles from './Component.module.css';
// import "../css/ttswap-docusaurus-isolated.css";
export function Index() {

  return (
    <div>
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
        <Footer />
      </div>
  );
}