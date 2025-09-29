import { Card } from "./ui/card";
import {
  ArrowDown,
  Layers,
  Zap,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import Translate from "@docusaurus/Translate";

export function LossReductionSection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <Translate id="lossReduction.title.first" description="First part of section title">
              How We Reduce
            </Translate>{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              <Translate id="lossReduction.title.second" description="Second part of section title">
                50% Trading Loss
              </Translate>
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <Translate id="lossReduction.subtitle" description="Section subtitle">
              Two revolutionary methods to maximize liquidity, improve trading efficiency, and minimize trading losses
            </Translate>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Method 1: Liquidity Concentration */}
          <Card className="p-8 bg-card border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Layers className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      <Translate id="lossReduction.method1.title" description="Method 1 title">
                        Concentrated Liquidity
                      </Translate>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <Translate id="lossReduction.method1.subtitle" description="Method 1 subtitle">
                        Concentrate multi-pool liquidity into a single pool
                      </Translate>
                    </p>
                  </div>
                </div>
                <div className="ml-auto px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
                  <Translate id="lossReduction.method1.step" description="Method 1 step number">
                    Step 1
                  </Translate>
                </div>
              </div>

              <div className="space-y-6">
                {/* Before */}
                <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    <Translate id="lossReduction.method1.before.label" description="Before label">
                      Traditional AMM (Before)
                    </Translate>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-xs bg-red-100 text-red-700 px-3 py-2 rounded-lg text-center font-medium">
                      <Translate id="lossReduction.method1.before.poolA" description="Pool A value">
                        Pool A: $1M
                      </Translate>
                    </div>
                    <div className="text-xs bg-red-100 text-red-700 px-3 py-2 rounded-lg text-center font-medium">
                      <Translate id="lossReduction.method1.before.poolB" description="Pool B value">
                        Pool B: $0.5M
                      </Translate>
                    </div>
                    <div className="text-xs bg-red-100 text-red-700 px-3 py-2 rounded-lg text-center font-medium">
                      <Translate id="lossReduction.method1.before.poolC" description="Pool C value">
                        Pool C: $0.75M
                      </Translate>
                    </div>
                  </div>
                  <div className="text-xs text-red-600 mt-3 text-center font-medium">
                    <Translate id="lossReduction.method1.before.result" description="Before result">
                      Fragmented Liquidity = Higher Slippage
                    </Translate>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="p-2 rounded-full bg-primary/10">
                    <ArrowDown className="h-5 w-5 text-primary animate-pulse" />
                  </div>
                </div>

                <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    <Translate id="lossReduction.method1.after.label" description="After label">
                      TTSwap (After)
                    </Translate>
                  </div>
                  <div className="flex justify-center">
                    <div className="text-sm bg-green-100 text-green-700 px-6 py-3 rounded-lg text-center font-medium group-hover:scale-105 group-hover:bg-green-200 transition-all duration-300">
                      <Translate id="lossReduction.method1.after.unifiedPool" description="Unified pool value">
                        Unified Pool: $2.25M
                      </Translate>
                    </div>
                  </div>
                  <div className="text-xs text-green-600 mt-3 text-center font-medium">
                    <Translate id="lossReduction.method1.after.result" description="After result">
                      Concentrated Liquidity = Lower Slippage
                    </Translate>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <div className="text-sm font-semibold text-primary mb-2">
                  <Translate id="lossReduction.method1.result.label" description="Result label">
                    Result:
                  </Translate>
                </div>
                <div className="text-sm text-muted-foreground">
                  <Translate id="lossReduction.method1.result.description" description="Result description">
                    Significantly reduce slippage and trading costs through liquidity aggregation
                  </Translate>
                </div>
              </div>
            </div>
          </Card>

          {/* Method 2: Virtual Liquidity */}
          <Card className="p-8 bg-card border border-secondary/20 hover:border-secondary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-2">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                    <Zap className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      <Translate id="lossReduction.method2.title" description="Method 2 title">
                        Amplified Liquidity
                      </Translate>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <Translate id="lossReduction.method2.subtitle" description="Method 2 subtitle">
                        Multiply liquidity depth exponentially
                      </Translate>
                    </p>
                  </div>
                </div>
                <div className="ml-auto px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold">
                  <Translate id="lossReduction.method2.step" description="Method 2 step number">
                    Step 2
                  </Translate>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    <Translate id="lossReduction.method2.real.label" description="Real liquidity label">
                      Real Liquidity
                    </Translate>
                  </div>
                  <div className="w-full bg-blue-100 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-700">
                      <Translate id="lossReduction.method2.real.value" description="Real liquidity value">
                        $1M
                      </Translate>
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <div className="px-4 py-2 bg-secondary/10 rounded-lg border border-secondary/20 group-hover:bg-secondary/20 transition-all duration-300 animate-pulse-soft">
                    <span className="text-lg font-bold text-secondary">
                      <Translate id="lossReduction.method2.amplification" description="Amplification factor">
                        5x Amplification
                      </Translate>
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    <Translate id="lossReduction.method2.effective.label" description="Effective liquidity label">
                      Effective Liquidity
                    </Translate>
                  </div>
                  <div className="w-full bg-purple-100 h-12 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-all duration-300">
                    <span className="text-lg font-bold text-purple-700 group-hover:scale-105 transition-transform duration-300">
                      <Translate id="lossReduction.method2.effective.value" description="Effective liquidity value">
                        $5M
                      </Translate>
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                <div className="text-sm font-semibold text-secondary mb-2">
                  <Translate id="lossReduction.method2.result.label" description="Result label">
                    Result:
                  </Translate>
                </div>
                <div className="text-sm text-muted-foreground">
                  <Translate id="lossReduction.method2.result.description" description="Result description">
                    Achieve 5x effective liquidity depth without additional capital requirements
                  </Translate>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Combined Effect */}
        <div className="mt-16">
          <Card className="p-8 bg-card border border-tertiary/20 hover:border-tertiary/40 hover:shadow-2xl transition-all duration-500 group overflow-hidden relative max-w-4xl mx-auto animate-fade-in-delay-3">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-tertiary to-accent bg-clip-text text-transparent">
                  <Translate id="lossReduction.combined.title" description="Combined effect title">
                    Liquidity Enhancement (20-2000x)
                  </Translate>
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group/stat">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover/stat:scale-110 group-hover/stat:bg-primary/20 transition-all duration-300">
                    <TrendingUp className="h-8 w-8 text-primary group-hover/stat:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 group-hover/stat:scale-105 transition-transform duration-300">
                    <Translate id="lossReduction.combined.stat1.value" description="Stat 1 value">
                      50%+
                    </Translate>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                    <Translate id="lossReduction.combined.stat1.label" description="Stat 1 label">
                      Slippage Reduction
                    </Translate>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                    <Translate id="lossReduction.combined.stat1.description" description="Stat 1 description">
                      Significantly reduce trading slippage through concentrated liquidity
                    </Translate>
                  </p>
                </div>

                <div className="text-center group/stat">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4 group-hover/stat:scale-110 group-hover/stat:bg-secondary/20 transition-all duration-300">
                    <Zap className="h-8 w-8 text-secondary group-hover/stat:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2 group-hover/stat:scale-105 transition-transform duration-300">
                    <Translate id="lossReduction.combined.stat2.value" description="Stat 2 value">
                      1-50x
                    </Translate>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                    <Translate id="lossReduction.combined.stat2.label" description="Stat 2 label">
                      Effective Liquidity
                    </Translate>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                    <Translate id="lossReduction.combined.stat2.description" description="Stat 2 description">
                      Virtual liquidity amplifies actual available capital depth
                    </Translate>
                  </p>
                </div>

                <div className="text-center group/stat">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-4 group-hover/stat:scale-110 group-hover/stat:bg-tertiary/20 transition-all duration-300">
                    <BarChart3 className="h-8 w-8 text-tertiary group-hover/stat:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-tertiary mb-2 group-hover/stat:scale-105 transition-transform duration-300">
                    <Translate id="lossReduction.combined.stat3.value" description="Stat 3 value">
                      75%
                    </Translate>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                    <Translate id="lossReduction.combined.stat3.label" description="Stat 3 label">
                      Better Price Impact
                    </Translate>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                    <Translate id="lossReduction.combined.stat3.description" description="Stat 3 description">
                      Large trades have smaller impact on market prices
                    </Translate>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}