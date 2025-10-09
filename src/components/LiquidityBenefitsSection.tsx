import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Zap,
  Coins,
  Gift,
  ArrowUpRight,
  TrendingUp,
  Users,
  Target,
  Award,
  Calculator,
  Sparkles,
  PiggyBank,
  Rocket,
} from "lucide-react";
import Translate from "@docusaurus/Translate";
import { getUsernameFromCookie } from './FromCookie';


export function LiquidityBenefitsSection() {

  const benefits = [
    {
      icon: TrendingUp,
      title: <Translate id="liquidityBenefits.benefits.amplification.title" description="Liquidity amplification mechanism title">Liquidity Amplification Mechanism</Translate>,
      subtitle: <Translate id="liquidityBenefits.benefits.amplification.subtitle" description="Liquidity amplification subtitle">Multi-fold fee commission</Translate>,
      description: <Translate id="liquidityBenefits.benefits.amplification.description" description="Liquidity amplification description">Innovative liquidity amplification mechanism allows single liquidity to earn multi-fold fee returns, maximizing your capital efficiency</Translate>,
      features: [
        <Translate id="liquidityBenefits.benefits.amplification.features.1" description="Liquidity amplification feature 1">2-5x liquidity amplification</Translate>,
        <Translate id="liquidityBenefits.benefits.amplification.features.2" description="Liquidity amplification feature 2">Smart commission algorithm</Translate>,
        <Translate id="liquidityBenefits.benefits.amplification.features.3" description="Liquidity amplification feature 3">Real-time yield calculation</Translate>,
        <Translate id="liquidityBenefits.benefits.amplification.features.4" description="Liquidity amplification feature 4">No additional collateral required</Translate>,
      ],
      color: "primary",
      multiplier: <Translate id="liquidityBenefits.benefits.amplification.multiplier" description="Liquidity amplification multiplier">2-63x</Translate>,
      highlight: <Translate id="liquidityBenefits.benefits.amplification.highlight" description="Liquidity amplification highlight">Up to 63x amplification</Translate>,
    },
    {
      icon: Coins,
      title: <Translate id="liquidityBenefits.benefits.mining.title" description="Automatic TTS token mining title">Automatic TTS Token Mining</Translate>,
      subtitle: <Translate id="liquidityBenefits.benefits.mining.subtitle" description="Automatic TTS token mining subtitle">Earn governance token rewards</Translate>,
      description: <Translate id="liquidityBenefits.benefits.mining.description" description="Automatic TTS token mining description">Providing liquidity automatically participates in TTS token mining, earning platform governance token rewards and enjoying protocol growth dividends</Translate>,
      features: [
        <Translate id="liquidityBenefits.benefits.mining.features.1" description="TTS token mining feature 1">Automatic mining rewards</Translate>,
        <Translate id="liquidityBenefits.benefits.mining.features.2" description="TTS token mining feature 2">Governance rights acquisition</Translate>,
        <Translate id="liquidityBenefits.benefits.mining.features.3" description="TTS token mining feature 3">Staking yield stacking</Translate>,
        <Translate id="liquidityBenefits.benefits.mining.features.4" description="TTS token mining feature 4">Long-term value growth</Translate>,
      ],
      color: "secondary",
      multiplier: <Translate id="liquidityBenefits.benefits.mining.multiplier" description="TTS token mining multiplier">TTS</Translate>,
      highlight: <Translate id="liquidityBenefits.benefits.mining.highlight" description="TTS token mining highlight">Passive yield growth</Translate>,
    },
    {
      icon: Gift,
      title: <Translate id="liquidityBenefits.benefits.airdrops.title" description="Automatic project airdrops title">Automatic Project Airdrops</Translate>,
      subtitle: <Translate id="liquidityBenefits.benefits.airdrops.subtitle" description="Automatic project airdrops subtitle">Ecosystem rewards auto-collection</Translate>,
      description: <Translate id="liquidityBenefits.benefits.airdrops.description" description="Automatic project airdrops description">Liquidity providers automatically qualify for partner project airdrops, enjoying ecosystem project rewards without additional operations</Translate>,
      features: [
        <Translate id="liquidityBenefits.benefits.airdrops.features.1" description="Project airdrops feature 1">Partner project airdrops</Translate>,
        <Translate id="liquidityBenefits.benefits.airdrops.features.2" description="Project airdrops feature 2">Ecosystem reward collection</Translate>,
        <Translate id="liquidityBenefits.benefits.airdrops.features.3" description="Project airdrops feature 3">No additional operations required</Translate>,
        <Translate id="liquidityBenefits.benefits.airdrops.features.4" description="Project airdrops feature 4">Multiple yield stacking</Translate>,
      ],
      color: "accent",
      multiplier: <Translate id="liquidityBenefits.benefits.airdrops.multiplier" description="Project airdrops multiplier">Airdrops</Translate>,
      highlight: <Translate id="liquidityBenefits.benefits.airdrops.highlight" description="Project airdrops highlight">Extra surprise yields</Translate>,
    },
  ];

  const stats = [
    {
      label: <Translate id="liquidityBenefits.stats.apy.label" description="Average APY improvement label">Average APY Improvement</Translate>,
      value: <Translate id="liquidityBenefits.stats.apy.value" description="Average APY improvement value">150%+</Translate>,
      icon: TrendingUp,
      color: "primary",
      description: <Translate id="liquidityBenefits.stats.apy.description" description="Average APY improvement description">vs Traditional AMM</Translate>,
    },
    {
      label: <Translate id="liquidityBenefits.stats.providers.label" description="Active liquidity providers label">Active Liquidity Providers</Translate>,
      value: <Translate id="liquidityBenefits.stats.providers.value" description="Active liquidity providers value">50K+</Translate>,
      icon: Users,
      color: "secondary",
      description: <Translate id="liquidityBenefits.stats.providers.description" description="Active liquidity providers description">Active users count</Translate>,
    },
    {
      label: <Translate id="liquidityBenefits.stats.rewards.label" description="Total rewards distributed label">Total Rewards Distributed</Translate>,
      value: <Translate id="liquidityBenefits.stats.rewards.value" description="Total rewards distributed value">$10M+</Translate>,
      icon: Coins,
      color: "tertiary",
      description: <Translate id="liquidityBenefits.stats.rewards.description" description="Total rewards distributed description">Total reward value</Translate>,
    },
    {
      label: <Translate id="liquidityBenefits.stats.partners.label" description="Partner projects label">Partner Projects</Translate>,
      value: <Translate id="liquidityBenefits.stats.partners.value" description="Partner projects value">25+</Translate>,
      icon: Gift,
      color: "accent",
      description: <Translate id="liquidityBenefits.stats.partners.description" description="Partner projects description">Ecosystem partners</Translate>,
    },
  ];

  const yieldBoosts = [
    {
      icon: Target,
      title: <Translate id="liquidityBenefits.yieldBoosts.precise.title" description="Precise yield calculation title">Precise Yield Calculation</Translate>,
      description: <Translate id="liquidityBenefits.yieldBoosts.precise.description" description="Precise yield calculation description">Real-time display of expected returns with transparent yield distribution mechanism</Translate>,
      color: "primary",
    },
    {
      icon: Award,
      title: <Translate id="liquidityBenefits.yieldBoosts.tiered.title" description="Tiered reward system title">Tiered Reward System</Translate>,
      description: <Translate id="liquidityBenefits.yieldBoosts.tiered.description" description="Tiered reward system description">Different tier additional rewards based on liquidity contribution</Translate>,
      color: "secondary",
    },
    {
      icon: PiggyBank,
      title: <Translate id="liquidityBenefits.yieldBoosts.compound.title" description="Compound growth mechanism title">Compound Growth Mechanism</Translate>,
      description: <Translate id="liquidityBenefits.yieldBoosts.compound.description" description="Compound growth mechanism description">Rewards auto-compound for long-term compound growth benefits</Translate>,
      color: "tertiary",
    },
    {
      icon: Rocket,
      title: <Translate id="liquidityBenefits.yieldBoosts.early.title" description="Early participation rewards title">Early Participation Rewards</Translate>,
      description: <Translate id="liquidityBenefits.yieldBoosts.early.description" description="Early participation rewards description">Early liquidity providers enjoy additional launch rewards</Translate>,
      color: "accent",
    },
  ];

  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-24 h-24 bg-primary rounded-full blur-2xl animate-pulse-soft"></div>
        <div
          className="absolute bottom-32 right-20 w-32 h-32 bg-secondary rounded-full blur-2xl animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-tertiary rounded-full blur-3xl animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <Translate id="liquidityBenefits.title.first" description="First part of section title">Maximize Your</Translate>
            <span className="text-gradient mx-3">
              <Translate id="liquidityBenefits.title.second" description="Second part of section title">Liquidity Yield</Translate>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <Translate id="liquidityBenefits.subtitle" description="Section subtitle">
              TTSwap not only eliminates volatility losses but also significantly enhances the overall return on liquidity provision through innovative mechanisms,
              allowing every unit of liquidity to achieve its maximum value
            </Translate>
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className={`p-8 h-full border hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden relative ${
                  index === 0
                    ? "animate-fade-in-delay-1 border-primary/20 hover:border-primary/40"
                    : index === 1
                      ? "animate-fade-in-delay-2 border-secondary/20 hover:border-secondary/40"
                      : "animate-fade-in-delay-3 border-accent/20 hover:border-accent/40"
                }`}
              >
                {/* Subtle background gradient effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    index === 0
                      ? "bg-gradient-to-br from-primary/5 to-transparent"
                      : index === 1
                        ? "bg-gradient-to-br from-secondary/5 to-transparent"
                        : "bg-gradient-to-br from-accent/5 to-transparent"
                  }`}
                />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 shadow-lg animate-pulse-soft ${
                        index === 0
                          ? "gradient-primary"
                          : index === 1
                            ? "gradient-warm"
                            : "gradient-secondary"
                      }`}
                      style={{
                        animationDelay: `${index * 0.3}s`,
                      }}
                    >
                      <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <Badge
                      variant="outline"
                      className={`group-hover:scale-110 transition-transform duration-300 ${
                        index === 0
                          ? "border-primary/40 text-primary"
                          : index === 1
                            ? "border-secondary/40 text-secondary"
                            : "border-accent/40 text-accent"
                      }`}
                    >
                      {benefit.multiplier}
                    </Badge>
                  </div>

                  {/* Highlight Badge */}
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      index === 0
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : index === 1
                          ? "bg-secondary/10 text-secondary border border-secondary/20"
                          : "bg-accent/10 text-accent border border-accent/20"
                    }`}
                  >
                    <Zap className="w-3 h-3 mr-1" />
                    {benefit.highlight}
                  </div>

                  {/* Title & Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary/90 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <div
                      className={`text-sm font-semibold mb-3 ${
                        index === 0
                          ? "text-primary"
                          : index === 1
                            ? "text-secondary"
                            : "text-accent"
                      }`}
                    >
                      {benefit.subtitle}
                    </div>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {benefit.features.map(
                      (feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3 group/item hover:scale-[1.02] transition-transform duration-300"
                        >
                          <div
                            className={`w-2 h-2 rounded-full shadow-sm ${
                              index === 0
                                ? "gradient-primary"
                                : index === 1
                                  ? "gradient-warm"
                                  : "gradient-secondary"
                            }`}
                          ></div>
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground/70 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ),
                    )}
                  </div>

                  {/* Action Button */}
                  {/* <Button
                    className={`w-full transition-all duration-300 hover:scale-105 ${
                      index === 0
                        ? "bg-primary hover:bg-primary/90"
                        : index === 1
                          ? "bg-secondary hover:bg-secondary/90"
                          : "bg-accent hover:bg-accent/90"
                    }`}
                    variant="default"
                  >
                    <Translate id="liquidityBenefits.benefits.learnMore" description="Learn more button text">Learn More</Translate>
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button> */}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Yield Boost Features */}
        <div className="mb-16 animate-fade-in-delay-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              <Translate id="liquidityBenefits.yieldBoosts.title" description="Yield boost features title">
                Multiple Yield Enhancement Mechanisms
              </Translate>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              <Translate id="liquidityBenefits.yieldBoosts.subtitle" description="Yield boost features subtitle">
                Through multi-tiered yield optimization strategies, ensure liquidity providers receive maximum returns
              </Translate>
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fade-in-delay-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 ${
                    index === 0
                      ? "bg-primary/10"
                      : index === 1
                        ? "bg-secondary/10"
                        : index === 2
                          ? "bg-tertiary/10"
                          : "bg-accent/10"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 group-hover:scale-110 transition-transform duration-300 ${
                      index === 0
                        ? "text-primary"
                        : index === 1
                          ? "text-secondary"
                          : index === 2
                            ? "text-tertiary"
                            : "text-accent"
                    }`}
                  />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-medium mb-1 group-hover:text-primary/80 transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  {stat.description}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <Card className="p-8 text-center border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-6">
          {/* Subtle background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary/90 transition-colors duration-300">
              <Translate id="liquidityBenefits.cta.title.first" description="First part of CTA title">Start Now</Translate>
              <span className="text-gradient mx-2">
                <Translate id="liquidityBenefits.cta.title.second" description="Second part of CTA title">High Yield</Translate>
              </span>
              <Translate id="liquidityBenefits.cta.title.third" description="Third part of CTA title">Liquidity Mining</Translate>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto group-hover:text-foreground/80 transition-colors duration-300">
              <Translate id="liquidityBenefits.cta.description" description="CTA description">
                Join the TTSwap ecosystem, enjoy multiple yield stacking, and maximize your return on every unit of liquidity
              </Translate>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 px-8 hover:scale-105 transition-all duration-300"
                onClick={() => { window.open("https://app.ttswap.io/hoodiTestnet/ttswap/trade?"+getUsernameFromCookie()) }}
              >
                <Zap className="mr-2 h-5 w-5" />
                <Translate id="liquidityBenefits.cta.provideLiquidity" description="Provide liquidity button text">Provide Liquidity</Translate>
              </Button> */}
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary/50 px-8 hover:scale-105 transition-all duration-300"
                onClick={() => { window.open("https://app.ttswap.io/hoodiTestnet/ttswap/profile?"+getUsernameFromCookie()) }}
              >
                <Translate id="liquidityBenefits.cta.viewEarnings" description="View earnings button text">View Earnings</Translate>
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}