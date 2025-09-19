import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { HeroSection } from "../../components/zh/HeroSection";
import { ProblemsSection } from "../../components/zh/ProblemsSection";
import { LossReductionSection } from "../../components/zh/LossReductionSection";
import { ImpermanentLossSection } from "../../components/zh/ImpermanentLossSection";
import { CostReductionSection } from "../../components/zh/CostReductionSection";
import { RewardsSection } from "../../components/zh/RewardsSection";
import { TokenomicsSection } from "../../components/zh/TokenomicsSection";
import { LiquidityBenefitsSection } from "../../components/zh/LiquidityBenefitsSection";
import { Footer } from "../../components/zh/Footer";
import { TTSwapWrapper } from "../../components/zh/TTSwapWrapper";
import "../../css/ttswap-isolated.css";


export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="TTSwap - 去中心化交易协议"
      description="创新的Web3交易解决方案，消除无常损失，降低交易成本"
      wrapperClassName="ttswap-docusaurus-wrapper"
    >
      <div className="ttswap-app">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
    </Layout>
  );
}
