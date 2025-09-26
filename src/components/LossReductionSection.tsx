import { Card } from "./ui/card";
import {
  ArrowDown,
  Layers,
  Zap,
  TrendingUp,
  BarChart3,
} from "lucide-react";

export function LossReductionSection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How We Reduce{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              50% Trading Loss
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Two revolutionary methods to maximize liquidity, improve trading efficiency, and minimize trading losses
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
                      Concentrated Liquidity
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Concentrate multi-pool liquidity into a single pool
                    </p>
                  </div>
                </div>
                <div className="ml-auto px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
                  Step 1
                </div>
              </div>

              <div className="space-y-6">
                {/* Before */}
                <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    Traditional AMM (Before)
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-xs bg-red-100 text-red-700 px-3 py-2 rounded-lg text-center font-medium">
                      Pool A: $1M
                    </div>
                    <div className="text-xs bg-red-100 text-red-700 px-3 py-2 rounded-lg text-center font-medium">
                      Pool B: $0.5M
                    </div>
                    <div className="text-xs bg-red-100 text-red-700 px-3 py-2 rounded-lg text-center font-medium">
                      Pool C: $0.75M
                    </div>
                  </div>
                  <div className="text-xs text-red-600 mt-3 text-center font-medium">
                    Fragmented Liquidity = Higher Slippage
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="p-2 rounded-full bg-primary/10">
                    <ArrowDown className="h-5 w-5 text-primary animate-pulse" />
                  </div>
                </div>

                <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    TTSwap (After)
                  </div>
                  <div className="flex justify-center">
                    <div className="text-sm bg-green-100 text-green-700 px-6 py-3 rounded-lg text-center font-medium group-hover:scale-105 group-hover:bg-green-200 transition-all duration-300">
                      Unified Pool: $2.25M
                    </div>
                  </div>
                  <div className="text-xs text-green-600 mt-3 text-center font-medium">
                    Concentrated Liquidity = Lower Slippage
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <div className="text-sm font-semibold text-primary mb-2">
                  Result:
                </div>
                <div className="text-sm text-muted-foreground">
                  Significantly reduce slippage and trading costs through liquidity aggregation
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
                      Amplified Liquidity
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Multiply liquidity depth exponentially
                    </p>
                  </div>
                </div>
                <div className="ml-auto px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold">
                  Step 2
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    Real Liquidity
                  </div>
                  <div className="w-full bg-blue-100 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-700">
                      $1M
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <div className="px-4 py-2 bg-secondary/10 rounded-lg border border-secondary/20 group-hover:bg-secondary/20 transition-all duration-300 animate-pulse-soft">
                    <span className="text-lg font-bold text-secondary">
                      5x Amplification
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    Effective Liquidity
                  </div>
                  <div className="w-full bg-purple-100 h-12 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-all duration-300">
                    <span className="text-lg font-bold text-purple-700 group-hover:scale-105 transition-transform duration-300">
                      $5M
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                <div className="text-sm font-semibold text-secondary mb-2">
                  Result:
                </div>
                <div className="text-sm text-muted-foreground">
                  Achieve 5x effective liquidity depth without additional capital requirements
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
                  Liquidity Enhancement (20-2000x)
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group/stat">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover/stat:scale-110 group-hover/stat:bg-primary/20 transition-all duration-300">
                    <TrendingUp className="h-8 w-8 text-primary group-hover/stat:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 group-hover/stat:scale-105 transition-transform duration-300">
                    50%+
                  </div>
                  <div className="text-sm font-medium text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                    Slippage Reduction
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                    Significantly reduce trading slippage through concentrated liquidity
                  </p>
                </div>

                <div className="text-center group/stat">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4 group-hover/stat:scale-110 group-hover/stat:bg-secondary/20 transition-all duration-300">
                    <Zap className="h-8 w-8 text-secondary group-hover/stat:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2 group-hover/stat:scale-105 transition-transform duration-300">
                    1-50x
                  </div>
                  <div className="text-sm font-medium text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                    Effective Liquidity
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                    Virtual liquidity amplifies actual available capital depth
                  </p>
                </div>

                <div className="text-center group/stat">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-4 group-hover/stat:scale-110 group-hover/stat:bg-tertiary/20 transition-all duration-300">
                    <BarChart3 className="h-8 w-8 text-tertiary group-hover/stat:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-tertiary mb-2 group-hover/stat:scale-105 transition-transform duration-300">
                    75%
                  </div>
                  <div className="text-sm font-medium text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                    Better Price Impact
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                    Large trades have smaller impact on market prices
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