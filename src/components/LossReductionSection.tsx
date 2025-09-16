import { Card } from "./ui/card";
import { ArrowDown, Layers, Zap } from "lucide-react";

export function LossReductionSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How We{" "}
            <span className="text-gradient">Reduce Trading Losses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two revolutionary methods to minimize trading losses and maximize trading efficiency
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Method 1: Liquidity Concentration */}
          <Card className="p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300 group card-shadow">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Concentrated Liquidity
                  </h3>
                  <p className="text-sm text-primary">Method One</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold">
                Concentrate Multi-Pool Liquidity into Single Pool
              </h4>

              <div className="space-y-4">
                {/* Before */}
                <div className="p-4 bg-background/50 rounded-lg border border-red-500/20">
                  <div className="text-sm text-muted-foreground mb-2">
                    Traditional AMM (Before)
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <div className="text-xs bg-red-500/20 px-2 py-1 rounded">
                      Pool A: 100K USDT
                    </div>
                    <div className="text-xs bg-red-500/20 px-2 py-1 rounded">
                      Pool B: 50K USDT
                    </div>
                    <div className="text-xs bg-red-500/20 px-2 py-1 rounded">
                      Pool C: 75K USDT
                    </div>
                  </div>
                  <div className="text-xs text-red-400 mt-2">
                    Fragmented Liquidity = Higher Slippage
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="h-6 w-6 text-primary animate-pulse" />
                </div>

                {/* After */}
                <div className="p-4 bg-background/50 rounded-lg border border-green-500/20">
                  <div className="text-sm text-muted-foreground mb-2">
                    TTSwap (After)
                  </div>
                  <div className="flex justify-center">
                    <div className="text-sm bg-green-500/20 px-4 py-2 rounded text-center">
                      Unified USDT Pool: 225K
                    </div>
                  </div>
                  <div className="text-xs text-green-400 mt-2 text-center">
                    Concentrated Liquidity = Lower Slippage
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <div className="text-sm font-semibold text-primary mb-1">
                  Result:
                </div>
                <div className="text-sm">
                  Significantly reduce slippage and trading costs through liquidity aggregation
                </div>
              </div>
            </div>
          </Card>

          {/* Method 2: Virtual Liquidity */}
          <Card className="p-8 bg-card border border-border hover:border-secondary/30 transition-all duration-300 group card-shadow">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Amplified Liquidity
                  </h3>
                  <p className="text-sm text-secondary">
                    Method Two
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold">
                Multiply Liquidity Exponentially
              </h4>

              <div className="space-y-4">
                {/* Real Liquidity */}
                <div className="p-4 bg-background/50 rounded-lg border border-blue-500/20">
                  <div className="text-sm text-muted-foreground mb-2">
                    Real Liquidity
                  </div>
                  <div className="w-full bg-blue-500/20 h-8 rounded flex items-center justify-center">
                    <span className="text-sm">$100K</span>
                  </div>
                </div>

                <div className="flex justify-center items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    ×
                  </span>
                  <div className="text-lg font-bold text-secondary">
                    5x Amplification
                  </div>
                  <span className="text-sm text-muted-foreground">
                    =
                  </span>
                </div>

                {/* Virtual Liquidity */}
                <div className="p-4 bg-background/50 rounded-lg border border-purple-500/20">
                  <div className="text-sm text-muted-foreground mb-2">
                    Effective Liquidity
                  </div>
                  <div className="w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 h-12 rounded flex items-center justify-center">
                    <span className="text-lg font-semibold">
                      $500K
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                <div className="text-sm font-semibold text-secondary mb-1">
                  Result:
                </div>
                <div className="text-sm">
                  Achieve 5x effective liquidity depth without additional capital requirements
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Combined Effect */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Liquidity Enhancement (20-2000x)
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  50%+
                </div>
                <div className="text-sm text-muted-foreground">
                  Slippage Reduction
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  1-50x
                </div>
                <div className="text-sm text-muted-foreground">
                  Effective Liquidity
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  75%
                </div>
                <div className="text-sm text-muted-foreground">
                  Better Price Impact
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}