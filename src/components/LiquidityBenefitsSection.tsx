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

export function LiquidityBenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Liquidity Amplification Mechanism",
      subtitle: "Multi-fold fee commission",
      description:
        "Innovative liquidity amplification mechanism allows single liquidity to earn multi-fold fee returns, maximizing your capital efficiency",
      features: [
        "2-5x liquidity amplification",
        "Smart commission algorithm",
        "Real-time yield calculation",
        "No additional collateral required",
      ],
      color: "primary",
      multiplier: "2-63x",
      highlight: "Up to 63x amplification",
    },
    {
      icon: Coins,
      title: "Automatic TTS Token Mining",
      subtitle: "Earn governance token rewards",
      description:
        "Providing liquidity automatically participates in TTS token mining, earning platform governance token rewards and enjoying protocol growth dividends",
      features: [
        "Automatic mining rewards",
        "Governance rights acquisition",
        "Staking yield stacking",
        "Long-term value growth",
      ],
      color: "secondary",
      multiplier: "TTS",
      highlight: "Passive yield growth",
    },
    {
      icon: Gift,
      title: "Automatic Project Airdrops",
      subtitle: "Ecosystem rewards auto-collection",
      description:
        "Liquidity providers automatically qualify for partner project airdrops, enjoying ecosystem project rewards without additional operations",
      features: [
        "Partner project airdrops",
        "Ecosystem reward collection",
        "No additional operations required",
        "Multiple yield stacking",
      ],
      color: "accent",
      multiplier: "Airdrops",
      highlight: "Extra surprise yields",
    },
  ];

  const stats = [
    {
      label: "Average APY Improvement",
      value: "150%+",
      icon: TrendingUp,
      color: "primary",
      description: "vs Traditional AMM",
    },
    {
      label: "Active Liquidity Providers",
      value: "50K+",
      icon: Users,
      color: "secondary",
      description: "Active users count",
    },
    {
      label: "Total Rewards Distributed",
      value: "$10M+",
      icon: Coins,
      color: "tertiary",
      description: "Total reward value",
    },
    {
      label: "Partner Projects",
      value: "25+",
      icon: Gift,
      color: "accent",
      description: "Ecosystem partners",
    },
  ];

  const yieldBoosts = [
    {
      icon: Target,
      title: "Precise Yield Calculation",
      description: "Real-time display of expected returns with transparent yield distribution mechanism",
      color: "primary",
    },
    {
      icon: Award,
      title: "Tiered Reward System",
      description: "Different tier additional rewards based on liquidity contribution",
      color: "secondary",
    },
    {
      icon: PiggyBank,
      title: "Compound Growth Mechanism",
      description: "Rewards auto-compound for long-term compound growth benefits",
      color: "tertiary",
    },
    {
      icon: Rocket,
      title: "Early Participation Rewards",
      description: "Early liquidity providers enjoy additional launch rewards",
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
            Maximize Your
            <span className="text-gradient mx-3">
              Liquidity Yield
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TTSwap not only eliminates volatility losses but also significantly enhances the overall return on liquidity provision through innovative mechanisms,
            allowing every unit of liquidity to achieve its maximum value
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
                  <Button
                    className={`w-full transition-all duration-300 hover:scale-105 ${
                      index === 0
                        ? "bg-primary hover:bg-primary/90"
                        : index === 1
                          ? "bg-secondary hover:bg-secondary/90"
                          : "bg-accent hover:bg-accent/90"
                    }`}
                    variant="default"
                  >
                    Learn More
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Yield Boost Features */}
        <div className="mb-16 animate-fade-in-delay-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Multiple Yield Enhancement Mechanisms
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Through multi-tiered yield optimization strategies, ensure liquidity providers receive maximum returns
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
              Start Now
              <span className="text-gradient mx-2">High Yield</span>
              Liquidity Mining
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto group-hover:text-foreground/80 transition-colors duration-300">
              Join the TTSwap ecosystem, enjoy multiple yield stacking, and maximize your return on every unit of liquidity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 px-8 hover:scale-105 transition-all duration-300"
              >
                <Zap className="mr-2 h-5 w-5" />
                Provide Liquidity
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary/50 px-8 hover:scale-105 transition-all duration-300"
              >
                View Yield Calculator
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}