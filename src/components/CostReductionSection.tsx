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
import Translate from "@docusaurus/Translate";

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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <Translate id="costReduction.title.first" description="First part of the section title">
              How We Reduce
            </Translate>{" "}
            <span className="text-gradient">
              <Translate id="costReduction.title.second" description="Second part of the section title">
                50% Trading Costs
              </Translate>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <Translate id="costReduction.subtitle" description="Subtitle of the cost reduction section">
              Revolutionary cost optimization through direct trading and gas fee optimization innovations
            </Translate>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Method 1: Direct Trading */}
          <Card className="p-8 bg-card border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-1">
            {/* Subtle background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <Route className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    <Translate id="costReduction.directTrading.title" description="Title for direct trading method">
                      Direct Token Trading, Reduce 50% Service Fees
                    </Translate>
                  </h3>
                  <p className="text-sm text-primary">
                    <Translate id="costReduction.method" description="Method label">
                      Method 1
                    </Translate>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Traditional Path */}
                <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20 group-hover:bg-red-500/20 group-hover:border-red-500/30 transition-all duration-300">
                  <div className="text-sm text-red-400 mb-3 font-semibold">
                    <Translate id="costReduction.traditionalPath" description="Label for traditional DEX path">
                      Traditional DEX Path
                    </Translate>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-red-500/20 px-2 py-1 rounded hover:bg-red-500/30 transition-colors duration-200">
                      TOKEN A
                    </span>
                    <ArrowRight className="h-4 w-4 text-red-400 animate-pulse" />
                    <span className="bg-red-500/20 px-2 py-1 rounded hover:bg-red-500/30 transition-colors duration-200">
                      WETH
                    </span>
                    <ArrowRight
                      className="h-4 w-4 text-red-400 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <span className="bg-red-500/20 px-2 py-1 rounded hover:bg-red-500/30 transition-colors duration-200">
                      USDC
                    </span>
                    <ArrowRight
                      className="h-4 w-4 text-red-400 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    <span className="bg-red-500/20 px-2 py-1 rounded hover:bg-red-500/30 transition-colors duration-200">
                      TOKEN B
                    </span>
                  </div>
                  <div className="text-xs text-red-400 mt-2 font-medium">
                    <Translate id="costReduction.multipleHops" description="Description of multiple hops in traditional DEX">
                      Multiple hops = Higher fees (0.1% × 3 = 0.3%)
                    </Translate>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="text-primary font-bold px-3 py-1 rounded-full bg-primary/10 border border-primary/20 animate-pulse-soft">
                    <Translate id="costReduction.vs" description="Versus label">
                      VS
                    </Translate>
                  </div>
                </div>

                {/* TTSwap Direct */}
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20 group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all duration-300">
                  <div className="text-sm text-green-400 mb-3 font-semibold">
                    <Translate id="costReduction.ttswapDirectPath" description="Label for TTSwap direct path">
                      TTSwap Direct Path
                    </Translate>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-xs">
                    <span className="bg-green-500/20 px-3 py-2 rounded hover:bg-green-500/30 hover:scale-105 transition-all duration-200">
                      TOKEN A
                    </span>
                    <ArrowRight className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="bg-green-500/20 px-3 py-2 rounded hover:bg-green-500/30 hover:scale-105 transition-all duration-200">
                      TOKEN B
                    </span>
                  </div>
                  <div className="text-xs text-green-400 mt-2 text-center font-medium">
                    <Translate id="costReduction.directSwap" description="Description of direct swap in TTSwap">
                      Direct swap = Lower fees (0.1%)
                    </Translate>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                <div className="text-sm font-semibold text-primary mb-1">
                  <Translate id="costReduction.serviceFeeReduction" description="Service fee reduction label">
                    Service Fee Reduction:
                  </Translate>
                </div>
                <div className="text-2xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">
                  <Translate id="costReduction.lowerBy" description="Percentage lower">
                    67% Lower
                  </Translate>
                </div>
                <div className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  <Translate id="costReduction.fromTo" description="Fee range">
                    From 0.3% to 0.1% per trade
                  </Translate>
                </div>
              </div>
            </div>
          </Card>

          {/* Method 2: Gas Optimization */}
          <Card className="p-8 bg-card border border-secondary/20 hover:border-secondary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-2">
            {/* Subtle background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-purple-500 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <Fuel className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    <Translate id="costReduction.optimizedComputing.title" description="Title for optimized computing method">
                      Optimized Computing, Reduce 50% Gas Fees
                    </Translate>
                  </h3>
                  <p className="text-sm text-secondary">
                    <Translate id="costReduction.method2" description="Method 2 label">
                      Method 2
                    </Translate>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-background/50 p-4 rounded-lg border border-white/10 group-hover:bg-background/70 group-hover:border-secondary/20 transition-all duration-300">
                  <h5 className="font-semibold mb-3">
                    <Translate id="costReduction.gasCostComparison" description="Gas cost comparison title">
                      Gas Cost Comparison
                    </Translate>
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
                  <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20 text-center hover:bg-red-500/20 hover:scale-105 transition-all duration-300 group/cost">
                    <div className="text-lg font-bold text-red-400 group-hover/cost:scale-110 transition-transform duration-300">
                      $5
                    </div>
                    <div className="text-xs text-muted-foreground group-hover/cost:text-foreground/80 transition-colors duration-300">
                      <Translate id="costReduction.traditionalDEX" description="Traditional DEX label">
                        Traditional DEX
                      </Translate>
                    </div>
                  </div>
                  <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20 text-center hover:bg-green-500/20 hover:scale-105 transition-all duration-300 group/cost">
                    <div className="text-lg font-bold text-green-400 group-hover/cost:scale-110 transition-transform duration-300">
                      $2
                    </div>
                    <div className="text-xs text-muted-foreground group-hover/cost:text-foreground/80 transition-colors duration-300">
                      <Translate id="costReduction.ttswap" description="TTSwap label">
                        TTSwap
                      </Translate>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 group-hover:bg-secondary/20 group-hover:border-secondary/30 transition-all duration-300">
                <div className="text-sm font-semibold text-secondary mb-1">
                  <Translate id="costReduction.gasFeeSavings" description="Gas fee savings label">
                    Gas Fee Savings:
                  </Translate>
                </div>
                <div className="text-2xl font-bold text-secondary group-hover:scale-105 transition-transform duration-300">
                  <Translate id="costReduction.lowerBy60" description="60% lower label">
                    60% Lower
                  </Translate>
                </div>
                <div className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  <Translate id="costReduction.optimizedExecution" description="Optimized smart contract execution">
                    Optimized smart contract execution
                  </Translate>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Total Cost Comparison */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-tertiary/20 hover:border-tertiary/40 hover:shadow-2xl transition-all duration-500 group overflow-hidden relative max-w-4xl mx-auto animate-fade-in-delay-3">
          {/* Subtle background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative text-center space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              <Translate id="costReduction.totalCostSavings" description="Total cost savings title">
                Total Cost Savings
              </Translate>
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 group/comparison">
                <h4 className="font-semibold text-red-400 group-hover/comparison:scale-105 transition-transform duration-300">
                  <Translate id="costReduction.traditionalDEX2" description="Traditional DEX label in comparison">
                    Traditional DEX
                  </Translate>
                </h4>
                <div className="space-y-2 text-sm bg-red-500/5 p-4 rounded-lg border border-red-500/10 group-hover/comparison:bg-red-500/10 transition-all duration-300">
                  <div className="flex justify-between hover:text-foreground/80 transition-colors duration-200">
                    <span>
                      <Translate id="costReduction.serviceFee" description="Service fee label">
                        Service Fee (0.3%)
                      </Translate>
                    </span>
                    <span>$3.00</span>
                  </div>
                  <div className="flex justify-between hover:text-foreground/80 transition-colors duration-200">
                    <span>
                      <Translate id="costReduction.gasFee" description="Gas fee label">
                        Gas Fee
                      </Translate>
                    </span>
                    <span>$5.00</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 flex justify-between font-bold text-red-400 group-hover/comparison:scale-105 transition-transform duration-300">
                    <span>
                      <Translate id="costReduction.total" description="Total label">
                        Total
                      </Translate>
                    </span>
                    <span>$8.00</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 group/comparison">
                <h4 className="font-semibold text-green-400 group-hover/comparison:scale-105 transition-transform duration-300">
                  <Translate id="costReduction.ttswap2" description="TTSwap label in comparison">
                    TTSwap
                  </Translate>
                </h4>
                <div className="space-y-2 text-sm bg-green-500/5 p-4 rounded-lg border border-green-500/10 group-hover/comparison:bg-green-500/10 transition-all duration-300">
                  <div className="flex justify-between hover:text-foreground/80 transition-colors duration-200">
                    <span>
                      <Translate id="costReduction.serviceFee2" description="Service fee label (0.1%)">
                        Service Fee (0.1%)
                      </Translate>
                    </span>
                    <span>$1.00</span>
                  </div>
                  <div className="flex justify-between hover:text-foreground/80 transition-colors duration-200">
                    <span>
                      <Translate id="costReduction.gasFee2" description="Gas fee label">
                        Gas Fee
                      </Translate>
                    </span>
                    <span>$2.00</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 flex justify-between font-bold text-green-400 group-hover/comparison:scale-105 transition-transform duration-300">
                    <span>
                      <Translate id="costReduction.total2" description="Total label">
                        Total
                      </Translate>
                    </span>
                    <span>$3.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-500 animate-pulse-soft">
              <div className="text-white">
                <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Translate id="costReduction.totalSavings" description="Total savings percentage">
                    Total 75% Savings
                  </Translate>
                </div>
                <div className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <Translate id="costReduction.saveAmount" description="Amount saved per trade">
                    Save $5 on every $1000 trade
                  </Translate>
                </div>
                {/* <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-center text-xs bg-white/20 rounded-full px-3 py-1">
                    <Zap className="w-3 h-3 mr-1" />
                    <Translate id="costReduction.experienceSavings" description="Experience savings text">
                      Experience Savings Now
                    </Translate>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}