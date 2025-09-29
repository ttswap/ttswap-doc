import { Card } from "./ui/card";
import {
  TrendingDown,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import Translate from '@docusaurus/Translate';

export function ProblemsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <Translate id="problems.section.title.firstPart">Solving DeFi's</Translate>{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              <Translate id="problems.section.title.fourMajor">Four Major</Translate>
            </span>{" "}
            <Translate id="problems.section.title.painPoints">Pain Points</Translate>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <Translate id="problems.section.description">
              TTSwap solves fundamental challenges that plague traditional decentralized exchanges,
              providing unprecedented efficiency and user benefits.
            </Translate>
          </p>
        </div>

        {/* Individual Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Slippage Reduction */}
          <Card className="p-6 bg-card border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-1">
            {/* Subtle background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <TrendingDown className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="space-y-3">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  50%+
                </div>
                <div className="text-lg font-semibold text-foreground mb-3">
                  <Translate id="problems.section.slippageReduction.title">Slippage Reduction</Translate>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  <Translate id="problems.section.slippageReduction.description">
                    Innovative algorithms minimize slippage and maximize trading efficiency
                  </Translate>
                </p>
              </div>

              {/* Hover indicator */}
              {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="inline-flex items-center text-xs font-medium text-primary">
                  <Translate id="problems.section.learnMore">Learn More</Translate>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div> */}
            </div>
          </Card>

          {/* Card 2 - Impermanent Loss */}
          <Card className="p-6 bg-card border border-secondary/20 hover:border-secondary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-2">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                <Shield className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="space-y-3">
                <div className="text-4xl font-bold text-secondary mb-2 group-hover:scale-105 transition-transform duration-300">
                  0%
                </div>
                <div className="text-lg font-semibold text-foreground mb-3">
                  <Translate id="problems.section.impermanentLoss.title">Impermanent Loss</Translate>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  <Translate id="problems.section.impermanentLoss.description">
                    Revolutionary constant value formula completely eliminates AMM impermanent loss
                  </Translate>
                </p>
              </div>

              {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="inline-flex items-center text-xs font-medium text-secondary">
                  <Translate id="problems.section.learnMore">Learn More</Translate>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div> */}
            </div>
          </Card>

          {/* Card 3 - Gas Savings */}
          <Card className="p-6 bg-card border border-tertiary/20 hover:border-tertiary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-3">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-tertiary/20 transition-all duration-300">
                <Zap className="h-8 w-8 text-tertiary group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="space-y-3">
                <div className="text-4xl font-bold text-tertiary mb-2 group-hover:scale-105 transition-transform duration-300">
                  90%
                </div>
                <div className="text-lg font-semibold text-foreground mb-3">
                  <Translate id="problems.section.gasSavings.title">Gas Savings</Translate>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  <Translate id="problems.section.gasSavings.description">
                    Significantly reduce transaction fees through optimized contract architecture
                  </Translate>
                </p>
              </div>

              {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="inline-flex items-center text-xs font-medium text-tertiary">
                  <Translate id="problems.section.learnMore">Learn More</Translate>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div> */}
            </div>
          </Card>

          {/* Card 4 - Fair Distribution */}
          <Card className="p-6 bg-card border border-accent/20 hover:border-accent/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-4">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                <Users className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="space-y-3">
                <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-105 transition-transform duration-300">
                  100%
                </div>
                <div className="text-lg font-semibold text-foreground mb-3">
                  <Translate id="problems.section.fairDistribution.title">Fair Distribution</Translate>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  <Translate id="problems.section.fairDistribution.description">
                    Contribution-based transparent reward mechanism ensures fairness
                  </Translate>
                </p>
              </div>

              {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="inline-flex items-center text-xs font-medium text-accent">
                  <Translate id="problems.section.learnMore">Learn More</Translate>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div> */}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}