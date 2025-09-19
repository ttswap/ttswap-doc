import { Card } from "../ui/card";
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
            我们如何减少{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              50%交易损失
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            两种革命性方法最大化增加流动性,提升交易效率,最大化减少交易损失
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Method 1: Liquidity Concentration */}
          <Card className="p-8 bg-card border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-1">
            {/* Subtle background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Layers className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      集中流动性
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      集中多池流动性到单一池中
                    </p>
                  </div>
                </div>
                <div className="ml-auto px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
                  步骤1
                </div>
              </div>

              <div className="space-y-6">
                {/* Before */}
                <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    传统AMM（之前）
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-xs bg-red-100 text-red-700 px-3 py-2 rounded-lg text-center font-medium">
                      池A: 100万美元
                    </div>
                    <div className="text-xs bg-red-100 text-red-700 px-3 py-2 rounded-lg text-center font-medium">
                      池B: 50万美元
                    </div>
                    <div className="text-xs bg-red-100 text-red-700 px-3 py-2 rounded-lg text-center font-medium">
                      池C: 75万美元
                    </div>
                  </div>
                  <div className="text-xs text-red-600 mt-3 text-center font-medium">
                    流动性分散 = 滑点更高
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="p-2 rounded-full bg-primary/10">
                    <ArrowDown className="h-5 w-5 text-primary animate-pulse" />
                  </div>
                </div>

                {/* After */}
                <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    TTSwap（之后）
                  </div>
                  <div className="flex justify-center">
                    <div className="text-sm bg-green-100 text-green-700 px-6 py-3 rounded-lg text-center font-medium group-hover:scale-105 group-hover:bg-green-200 transition-all duration-300">
                      统一池: 225万美元
                    </div>
                  </div>
                  <div className="text-xs text-green-600 mt-3 text-center font-medium">
                    集中流动性 = 滑点更低
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <div className="text-sm font-semibold text-primary mb-2">
                  结果：
                </div>
                <div className="text-sm text-muted-foreground">
                  通过流动性聚合大幅降低滑点和交易成本
                </div>
              </div>
            </div>
          </Card>

          {/* Method 2: Virtual Liquidity */}
          <Card className="p-8 bg-card border border-secondary/20 hover:border-secondary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-2">
            {/* Subtle background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                    <Zap className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      放大流动性
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      成倍放大流动性深度
                    </p>
                  </div>
                </div>
                <div className="ml-auto px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold">
                  步骤2
                </div>
              </div>

              <div className="space-y-6">
                {/* Real Liquidity */}
                <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    真实流动性
                  </div>
                  <div className="w-full bg-blue-100 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-700">
                      100万美元
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <div className="px-4 py-2 bg-secondary/10 rounded-lg border border-secondary/20 group-hover:bg-secondary/20 transition-all duration-300 animate-pulse-soft">
                    <span className="text-lg font-bold text-secondary">
                      5倍放大
                    </span>
                  </div>
                </div>

                {/* Virtual Liquidity */}
                <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    有效流动性
                  </div>
                  <div className="w-full bg-purple-100 h-12 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-all duration-300">
                    <span className="text-lg font-bold text-purple-700 group-hover:scale-105 transition-transform duration-300">
                      500万美元
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                <div className="text-sm font-semibold text-secondary mb-2">
                  结果：
                </div>
                <div className="text-sm text-muted-foreground">
                  在无需额外资本要求下实现5倍有效流动性深度
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Combined Effect */}
        <div className="mt-16">
          <Card className="p-8 bg-card border border-tertiary/20 hover:border-tertiary/40 hover:shadow-2xl transition-all duration-500 group overflow-hidden relative max-w-4xl mx-auto animate-fade-in-delay-3">
            {/* Subtle background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-tertiary to-accent bg-clip-text text-transparent">
                  流动性提升（20-2000倍）
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
                    滑点减少
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                    通过集中流动性显著降低交易滑点
                  </p>
                </div>

                <div className="text-center group/stat">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4 group-hover/stat:scale-110 group-hover/stat:bg-secondary/20 transition-all duration-300">
                    <Zap className="h-8 w-8 text-secondary group-hover/stat:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2 group-hover/stat:scale-105 transition-transform duration-300">
                    1-50倍
                  </div>
                  <div className="text-sm font-medium text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                    有效流动性
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                    虚拟流动性放大实际可用资金深度
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
                    更好的价格影响
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                    大额交易对市场价格影响更小
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