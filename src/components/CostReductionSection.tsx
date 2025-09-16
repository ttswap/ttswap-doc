import { Card } from "./ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Zap, Route, Fuel, ArrowRight } from "lucide-react";

export function CostReductionSection() {
  const gasComparisonData = [
    { name: "U**swap", cost: 100, color: "#ff6b6b" },
    { name: "S**swap", cost: 95, color: "#4ecdc4" },
    { name: "TTSwap", cost: 15, color: "#00d4ff" },
  ];

  const feeComparisonData = [
    {
      name: "Traditional DEX",
      service: 0.3,
      gas: 2.5,
      total: 2.8,
    },
    {
      name: "TTSwap Direct",
      service: 0.1,
      gas: 0.6,
      total: 0.7,
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Dramatically{" "}
            <span className="text-gradient">
              Reduce Trading Costs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Achieve revolutionary cost optimization through
            direct trading and gas fee optimization innovations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Method 1: Direct Trading */}
          <Card className="p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-cyan-500 flex items-center justify-center">
                  <Route className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Direct Token Trading
                  </h3>
                  <p className="text-sm text-primary">
                    Method One
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold">
                Direct Exchange Between Any Tokens
              </h4>

              <div className="space-y-4">
                {/* Traditional Path */}
                <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                  <div className="text-sm text-red-400 mb-3 font-semibold">
                    Traditional DEX Path
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-red-500/20 px-2 py-1 rounded">
                      TOKEN A
                    </span>
                    <ArrowRight className="h-4 w-4 text-red-400" />
                    <span className="bg-red-500/20 px-2 py-1 rounded">
                      WETH
                    </span>
                    <ArrowRight className="h-4 w-4 text-red-400" />
                    <span className="bg-red-500/20 px-2 py-1 rounded">
                      USDC
                    </span>
                    <ArrowRight className="h-4 w-4 text-red-400" />
                    <span className="bg-red-500/20 px-2 py-1 rounded">
                      TOKEN B
                    </span>
                  </div>
                  <div className="text-xs text-red-400 mt-2">
                    Multiple hops = Higher fees (0.1% × 3 = 0.3%)
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="text-primary font-bold">
                    VS
                  </div>
                </div>

                {/* TTSwap Direct */}
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="text-sm text-green-400 mb-3 font-semibold">
                    TTSwap Direct Path
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-xs">
                    <span className="bg-green-500/20 px-3 py-2 rounded">
                      TOKEN A
                    </span>
                    <ArrowRight className="h-4 w-4 text-green-400" />
                    <span className="bg-green-500/20 px-3 py-2 rounded">
                      TOKEN B
                    </span>
                  </div>
                  <div className="text-xs text-green-400 mt-2 text-center">
                    Direct exchange = Lower fees (0.1%)
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <div className="text-sm font-semibold text-primary mb-1">
                  Service Fee Reduction:
                </div>
                <div className="text-2xl font-bold text-primary">
                  67% Lower
                </div>
                <div className="text-xs text-muted-foreground">
                  From 0.3% to 0.1% per trade
                </div>
              </div>
            </div>
          </Card>

          {/* Method 2: Gas Optimization */}
          <Card className="p-8 bg-card border border-border hover:border-secondary/30 transition-all duration-300 card-shadow">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-purple-500 flex items-center justify-center">
                  <Fuel className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Gas Fee Optimization
                  </h3>
                  <p className="text-sm text-secondary">
                    Method Two
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold">
                Gas Fees Reduced by 50-90%
              </h4>

              <div className="space-y-4">
                <div className="bg-background/50 p-4 rounded-lg border border-white/10">
                  <h5 className="font-semibold mb-3">
                    Gas Cost Comparison
                  </h5>
                  <ResponsiveContainer
                    width="100%"
                    height={200}
                  >
                    <BarChart data={gasComparisonData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Bar
                        dataKey="cost"
                        fill="#8884d8"
                        radius={[4, 4, 0, 0]}
                      >
                        {gasComparisonData.map(
                          (entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={entry.color}
                            />
                          ),
                        )}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20 text-center">
                    <div className="text-lg font-bold text-red-400">
                      $5
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Traditional DEX
                    </div>
                  </div>
                  <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20 text-center">
                    <div className="text-lg font-bold text-green-400">
                      $2
                    </div>
                    <div className="text-xs text-muted-foreground">
                      TTSwap
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                <div className="text-sm font-semibold text-secondary mb-1">
                  Gas Fee Savings:
                </div>
                <div className="text-2xl font-bold text-secondary">
                  60% Lower
                </div>
                <div className="text-xs text-muted-foreground">
                  Optimized smart contract execution
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Total Cost Comparison */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">
              Total Cost Savings
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-red-400">
                  Traditional DEX
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Service Fee (0.3%)</span>
                    <span>$3.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gas Fee</span>
                    <span>$5.00</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 flex justify-between font-bold text-red-400">
                    <span>Total</span>
                    <span>$8.00</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-green-400">
                  TTSwap
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Service Fee (0.1%)</span>
                    <span>$1.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gas Fee</span>
                    <span>$2.00</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 flex justify-between font-bold text-green-400">
                    <span>Total</span>
                    <span>$3.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-lg">
              <div className="text-white">
                <div className="text-3xl font-bold mb-2">
                  Total Savings 60%
                </div>
                <div className="text-sm opacity-90">
                  Save $5 on every $1000 trade
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}