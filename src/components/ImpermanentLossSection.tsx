import { Card } from "./ui/card";
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Zero Impermanent Loss</span>{" "}
            Protection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary pool architecture completely eliminates
            the impermanent loss problem that plagues traditional AMM protocols
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Traditional AMM Problems */}
          <Card className="p-8 bg-red-500/5 border border-red-500/20">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Traditional AMM
                  </h3>
                  <p className="text-sm text-red-400">
                    Impermanent Loss Risk
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">
                  What is Impermanent Loss?
                </h4>
                <p className="text-sm text-muted-foreground">
                  When token prices deviate from their initial ratio, liquidity providers
                  lose value compared to simply holding the tokens separately.
                </p>

                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                  <h5 className="font-semibold text-red-400 mb-2">
                    Example Scenario:
                  </h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Token A price: $100 → $200 (+100%)</li>
                    <li>• Token B price: $100 → $50 (-50%)</li>
                    <li>• Impermanent Loss: ~20%</li>
                  </ul>
                </div>

                <div className="bg-background/50 p-4 rounded-lg border border-white/10">
                  <h5 className="font-semibold mb-2">
                    Loss Visualization
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
          <Card className="p-8 bg-green-500/5 border border-green-500/20">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    TTSwap Protocol
                  </h3>
                  <p className="text-sm text-green-400">
                    Zero Impermanent Loss
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">
                  How We Eliminate Impermanent Loss
                </h4>
                <p className="text-sm text-muted-foreground">
                  Our constant value algorithm maintains proportional value
                  regardless of price volatility, completely eliminating impermanent loss.
                </p>

                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                  <h5 className="font-semibold text-green-400 mb-2">
                    Example Scenario:
                  </h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>When investing: 100 Token A, 200 Token B</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>When withdrawing: 100 Token A, 200 Token B</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Withdrawal rewards: 10 Token A, 15 Token B</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-background/50 p-4 rounded-lg border border-white/10">
                  <h5 className="font-semibold mb-2">
                    Zero Loss Guarantee
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
        <Card className="p-8 bg-card/80 border border-white/10 max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Technical Implementation</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    1
                  </span>
                </div>
                <h4 className="font-semibold">Value Tracking</h4>
                <p className="text-sm text-muted-foreground">
                  Real-time continuous monitoring of total pool value
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    2
                  </span>
                </div>
                <h4 className="font-semibold">Dynamic Rebalancing</h4>
                <p className="text-sm text-muted-foreground">
                  Automatically adjust pool ratios to maintain value
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    3
                  </span>
                </div>
                <h4 className="font-semibold">Loss Prevention</h4>
                <p className="text-sm text-muted-foreground">
                  Mathematical guarantee of zero impermanent loss
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}