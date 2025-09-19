import { Card } from "../ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

export function ImpermanentLossSection() {
  // Sample data for comparison charts
  const priceMovementData = [
    { time: "0m", traditional: 0, ttswap: 0, price: 100 },
    { time: "6m", traditional: 5, ttswap: 0, price: 120 },
    { time: "12m", traditional: 12, ttswap: 0, price: 150 },
    { time: "18m", traditional: 8, ttswap: 0, price: 130 },
    { time: "24m", traditional: 15, ttswap: 0, price: 180 },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            我们如何保障{" "}
            <span className="text-gradient">零无常损失</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            革命性的资金池架构完全消除了
            困扰传统AMM协议的无常损失问题
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Traditional AMM Problems */}
          <Card className="p-8 bg-red-500/5 border border-red-500/20 hover:border-red-500/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-1">
            {/* Subtle background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                  <AlertTriangle className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    传统AMM
                  </h3>
                  <p className="text-sm text-red-400">
                    无常损失风险
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  当代币价格偏离其初始比例时，流动性提供者
                  相比单独持有代币会损失价值。
                </p>

                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20 group-hover:bg-red-500/20 group-hover:border-red-500/30 transition-all duration-300">
                  <h5 className="font-semibold text-red-400 mb-2">
                    示例场景：
                  </h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="hover:text-foreground/80 transition-colors duration-200">
                      • 代币A价格：$100 → $200 (+100%)
                    </li>
                    <li className="hover:text-foreground/80 transition-colors duration-200">
                      • 代币B价格：$100 → $50 (-50%)
                    </li>
                    <li className="hover:text-foreground/80 transition-colors duration-200 font-medium text-red-400">
                      • 无常损失：约20%
                    </li>
                  </ul>
                </div>

                <div className="bg-background/50 p-4 rounded-lg border border-white/10 group-hover:bg-background/70 group-hover:border-red-500/20 transition-all duration-300">
                  <h5 className="font-semibold mb-2">
                    损失可视化
                  </h5>
                  <ResponsiveContainer
                    width="100%"
                    height={200}
                  >
                    <AreaChart data={priceMovementData}>
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Area
                        type="monotone"
                        dataKey="traditional"
                        stroke="#ef4444"
                        fill="#ef4444"
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </Card>

          {/* TTSwap Solution */}
          <Card className="p-8 bg-green-500/5 border border-green-500/20 hover:border-green-500/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-2">
            {/* Subtle background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-600 transition-all duration-300">
                  <Shield className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    TTSwap协议
                  </h3>
                  <p className="text-sm text-green-400">
                    零无常损失
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  我们的恒定价值算法无论价格如何波动
                  都能维持比例价值，完全消除无常损失。
                </p>

                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20 group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all duration-300">
                  <h5 className="font-semibold text-green-400 mb-2">
                    示例场景：
                  </h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2 hover:text-foreground/80 transition-colors duration-200">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span>
                        投资代币时:代币A 100 个,代币B 200个
                      </span>
                    </li>
                    <li className="flex items-center space-x-2 hover:text-foreground/80 transition-colors duration-200">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span>
                        撤资代币时:代币A 100个,代币B 200个
                      </span>
                    </li>
                    <li className="flex items-center space-x-2 hover:text-foreground/80 transition-colors duration-200 font-medium text-green-400">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span>
                        撤资收益: 代币A 10个,代币B 15个
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-background/50 p-4 rounded-lg border border-white/10 group-hover:bg-background/70 group-hover:border-green-500/20 transition-all duration-300">
                  <h5 className="font-semibold mb-2">
                    零损失保障
                  </h5>
                  <ResponsiveContainer
                    width="100%"
                    height={200}
                  >
                    <LineChart data={priceMovementData}>
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Line
                        type="monotone"
                        dataKey="ttswap"
                        stroke="#22c55e"
                        strokeWidth={3}
                        dot={{
                          fill: "#22c55e",
                          strokeWidth: 2,
                          r: 4,
                        }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Technical Explanation */}
        <Card className="p-8 bg-card/80 border border-primary/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 group overflow-hidden relative max-w-4xl mx-auto animate-fade-in-delay-3">
          {/* Subtle background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative text-center space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
              技术实现
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3 group/step text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover/step:scale-110 group-hover/step:shadow-lg transition-all duration-300 animate-pulse-soft">
                  <span className="text-xl font-bold text-white group-hover/step:scale-110 transition-transform duration-300">
                    1
                  </span>
                </div>
                <h4 className="font-semibold group-hover/step:text-blue-500 transition-colors duration-300">
                  价值追踪
                </h4>
                <p className="text-sm text-muted-foreground group-hover/step:text-foreground/80 transition-colors duration-300">
                  实时持续监控资金池总价值
                </p>
                <div className="opacity-0 group-hover/step:opacity-100 transition-opacity duration-300">
                  <div className="inline-flex items-center text-xs font-medium text-blue-500">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    实时监控
                  </div>
                </div>
              </div>

              <div className="space-y-3 group/step text-center">
                <div
                  className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover/step:scale-110 group-hover/step:shadow-lg transition-all duration-300 animate-pulse-soft"
                  style={{ animationDelay: "0.5s" }}
                >
                  <span className="text-xl font-bold text-white group-hover/step:scale-110 transition-transform duration-300">
                    2
                  </span>
                </div>
                <h4 className="font-semibold group-hover/step:text-purple-500 transition-colors duration-300">
                  动态再平衡
                </h4>
                <p className="text-sm text-muted-foreground group-hover/step:text-foreground/80 transition-colors duration-300">
                  自动调整资金池比例以维持价值
                </p>
                <div className="opacity-0 group-hover/step:opacity-100 transition-opacity duration-300">
                  <div className="inline-flex items-center text-xs font-medium text-purple-500">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    自动调整
                  </div>
                </div>
              </div>

              <div className="space-y-3 group/step text-center">
                <div
                  className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center group-hover/step:scale-110 group-hover/step:shadow-lg transition-all duration-300 animate-pulse-soft"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-xl font-bold text-white group-hover/step:scale-110 transition-transform duration-300">
                    3
                  </span>
                </div>
                <h4 className="font-semibold group-hover/step:text-green-500 transition-colors duration-300">
                  损失预防
                </h4>
                <p className="text-sm text-muted-foreground group-hover/step:text-foreground/80 transition-colors duration-300">
                  数学保证零无常损失
                </p>
                <div className="opacity-0 group-hover/step:opacity-100 transition-opacity duration-300">
                  <div className="inline-flex items-center text-xs font-medium text-green-500">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    零损失保障
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}