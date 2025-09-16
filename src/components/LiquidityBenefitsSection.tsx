import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Zap,
  Coins,
  Gift,
  ArrowUpRight,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

export function LiquidityBenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Liquidity Amplification",
      subtitle: "Multi-fold Fee Distribution",
      description:
        "Innovative liquidity amplification mechanism allows single liquidity to earn multiple fee rewards, maximizing your capital efficiency",
      features: [
        "2-5x Liquidity Amplification",
        "Smart Distribution Algorithm",
        "Real-time Yield Calculation",
        "No Additional Collateral Required",
      ],
      gradient: "from-primary to-emerald-400",
      bgGradient: "from-primary/10 to-emerald-400/10",
      multiplier: "2-63x",
    },
    {
      icon: Coins,
      title: "Automatic TTS Token Mining",
      subtitle: "Earn Additional Rewards",
      description:
        "Provide liquidity to automatically participate in TTS token mining, earn platform governance token rewards, and enjoy protocol growth dividends",
      features: [
        "Automatic Mining Rewards",
        "Governance Rights Acquisition",
        "Staking Yield Stacking",
        "Long-term Value Growth",
      ],
      gradient: "from-yellow-400 to-secondary",
      bgGradient: "from-yellow-400/10 to-secondary/10",
      multiplier: "TTS",
    },
    {
      icon: Gift,
      title: "Automatic Project Airdrops",
      subtitle: "Get Extra Rewards",
      description:
        "Liquidity providers automatically qualify for partner project airdrops, enjoying ecosystem project rewards without additional operations",
      features: [
        "Partner Project Airdrops",
        "Ecosystem Reward Access",
        "No Additional Operations Required",
        "Multiple Yield Stacking",
      ],
      gradient: "from-secondary to-accent",
      bgGradient: "from-secondary/10 to-accent/10",
      multiplier: "Airdrop",
    },
  ];

  const stats = [
    {
      label: "Average APY Increase",
      value: "150%+",
      icon: TrendingUp,
    },
    { label: "Participating Liquidity Providers", value: "50K+", icon: Users },
    { label: "Total Rewards Distributed", value: "$10M+", icon: Coins },
    { label: "Partner Projects", value: "25+", icon: Gift },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-yellow-400 to-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Enhance
              <span className="text-gradient">
                Liquidity Provider
              </span>
              Returns
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TTSwap not only eliminates impermanent loss, but also significantly enhances the comprehensive yield of liquidity providers through innovative mechanisms,
              maximizing the value of every liquidity provision.
            </p>
          </motion.div>
        </div>

        {/* Benefits Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border border-border hover:border-primary/30 transition-all duration-300 group card-shadow hover:card-shadow-lg relative overflow-hidden">
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full bg-gradient-to-r ${benefit.gradient} text-white text-sm font-bold`}
                      >
                        {benefit.multiplier}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2">
                        {benefit.title}
                      </h3>
                      <div
                        className={`text-sm font-semibold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent mb-3`}
                      >
                        {benefit.subtitle}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {benefit.features.map(
                        (feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${benefit.gradient}`}
                            ></div>
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ),
                      )}
                    </div>

                    {/* Action Button */}
                    <Button
                      className={`w-full bg-gradient-to-r ${benefit.gradient} hover:opacity-90 transition-opacity duration-300`}
                      variant="default"
                    >
                      Learn More
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 via-yellow-400/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Start
              <span className="text-gradient">High-Yield</span>
              Liquidity Mining Now
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join the TTSwap ecosystem, enjoy multiple yield stacking, and maximize returns on every liquidity provision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 px-8"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Providing Liquidity
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary/50 px-8"
              >
                View Yield Calculator
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}