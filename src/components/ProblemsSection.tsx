import { Card } from "./ui/card";
import { TrendingDown, Shield, Zap, Users } from "lucide-react";

export function ProblemsSection() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Reduce Trading Losses",
      subtitle: "50%+ Reduction",
      description: "Innovative algorithms minimize slippage and maximize trading efficiency",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Shield,
      title: "Zero Impermanent Loss",
      subtitle: "100% Protection",
      description: "Revolutionary pool design eliminates traditional AMM impermanent loss",
      gradient: "from-primary to-emerald-400",
    },
    {
      icon: Zap,
      title: "Lower Trading Costs",
      subtitle: "50-90% Savings",
      description: "Optimized gas usage and reduced fees through direct token exchanges",
      gradient: "from-yellow-400 to-secondary",
    },
    {
      icon: Users,
      title: "Universal Participation",
      subtitle: "Everyone Benefits",
      description:
        "Role-based reward system ensures fair rewards for all participants",
      gradient: "from-secondary to-accent",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Solving Core <span className="text-gradient">DeFi</span>
            Problems
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TTSwap addresses the fundamental challenges that plague traditional decentralized exchanges,
            providing unprecedented efficiency and user benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border border-border hover:border-primary/30 transition-all duration-300 group card-shadow hover:card-shadow-lg"
              >
                <div className="text-center space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${problem.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {problem.title}
                    </h3>
                    <div
                      className={`text-sm font-bold bg-gradient-to-r ${problem.gradient} bg-clip-text text-transparent`}
                    >
                      {problem.subtitle}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">
              50%+
            </div>
            <div className="text-sm text-muted-foreground">
              Loss Reduction
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">
              0%
            </div>
            <div className="text-sm text-muted-foreground">
              Impermanent Loss
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">
              90%
            </div>
            <div className="text-sm text-muted-foreground">
              Gas Savings
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">
              100%
            </div>
            <div className="text-sm text-muted-foreground">
              Fair Distribution
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}