import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  ArrowDownUp,
  Zap,
  TrendingUp,
  Shield,
  Users,
  Play,
  ArrowRight,
  Calculator,
} from "lucide-react";
import { useState } from "react";
import { MathFormula } from "./MathFormula";
import Translate from "@docusaurus/Translate";

export function HeroSection() {
  const [swapAmount, setSwapAmount] = useState("");
  const [stakeAmount, setStakeAmount] = useState("");

  const features = [
    {
      icon: TrendingUp,
      title: <Translate id="hero.features.slippageReduction.title" description="Slippage reduction feature title">Reduce 50%+ Trading Loss</Translate>,
      subtitle: <Translate id="hero.features.slippageReduction.subtitle" description="Slippage reduction feature subtitle">Slippage Reduction</Translate>,
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20",
    },
    {
      icon: Shield,
      title: <Translate id="hero.features.capitalProtection.title" description="Capital protection feature title">Zero Impermanent Loss</Translate>,
      subtitle: <Translate id="hero.features.capitalProtection.subtitle" description="Capital protection feature subtitle">Capital Protection</Translate>,
      color: "text-secondary",
      bgColor: "bg-secondary/5",
      borderColor: "border-secondary/20",
    },
    {
      icon: Zap,
      title: <Translate id="hero.features.feeOptimization.title" description="Fee optimization feature title">Lower 50%+ Trading Costs</Translate>,
      subtitle: <Translate id="hero.features.feeOptimization.subtitle" description="Fee optimization feature subtitle">Fee & Gas Optimization</Translate>,
      color: "text-tertiary",
      bgColor: "bg-tertiary/5",
      borderColor: "border-tertiary/20",
    },
    {
      icon: Users,
      title: <Translate id="hero.features.universalParticipation.title" description="Universal participation feature title">Universal Participation</Translate>,
      subtitle: <Translate id="hero.features.universalParticipation.subtitle" description="Universal participation feature subtitle">Everyone Benefits</Translate>,
      color: "text-accent",
      bgColor: "bg-accent/5",
      borderColor: "border-accent/20",
    },
  ];

  return (
    <section className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Features and Formula */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <Translate id="hero.title.first" description="First part of hero section title">Revolutionary</Translate>{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  <Translate id="hero.title.second" description="Second part of hero section title">DeFi</Translate>
                </span>{" "}
                <Translate id="hero.title.third" description="Third part of hero section title">Trading Protocol</Translate>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                <Translate id="hero.description" description="Hero section description">
                  Constant value algorithm eliminates impermanent loss, lowers 50%+ trading costs.
                  Everyone can participate in decentralized trading.
                </Translate>
              </p>
            </div>

            {/* Core Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl border ${feature.borderColor} ${feature.bgColor} hover:shadow-lg transition-all duration-300 group hover:scale-105`}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 rounded-lg ${feature.bgColor} border ${feature.borderColor}`}
                    >
                      <feature.icon
                        className={`h-5 w-5 ${feature.color}`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Formula Display */}
            <Card className="p-6 bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  <Translate id="hero.formula.title" description="Constant value trading formula title">
                    Constant Value Trading Formula
                  </Translate>
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      <Translate id="hero.formula.formula1.description" description="Description of formula 1">
                        Through input quantity to calculate value
                      </Translate>
                    </p>
                    <div className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                      <Translate id="hero.formula.formula1.label" description="Label for formula 1">
                        Formula 1
                      </Translate>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 overflow-x-auto">
                    <MathFormula
                      formula="formula1"
                      className="text-primary text-center"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      <Translate id="hero.formula.formula2.description" description="Description of formula 2">
                        Through value to calculate output quantity
                      </Translate>
                    </p>
                    <div className="px-2 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-medium">
                      <Translate id="hero.formula.formula2.label" description="Label for formula 2">
                        Formula 2
                      </Translate>
                    </div>
                  </div>
                  <div className="p-4 bg-secondary/5 rounded-xl border border-secondary/20 overflow-x-auto">
                    <MathFormula
                      formula="formula2"
                      className="text-secondary text-center"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted/30 rounded-xl border border-border/50">
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">
                    <Translate id="hero.formula.variableExplanation" description="Variable explanation label">
                      Variable Explanation：
                    </Translate>
                  </span>
                  <span className="ml-2">
                    <Translate id="hero.formula.variableDetails" description="Details of variables">
                      V: Market Value | Q: Token Quantity | a,b: Token Types
                    </Translate>
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side - Trading Interface */}
          <div className="space-y-6">
            {/* Swap Card */}
            <Card className="p-6 bg-card border border-border shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-1">
                    <ArrowDownUp className="h-4 w-4 text-primary" />
                  </div>
                  <Translate id="hero.swap.title" description="Quick trading title">
                    Quick Trading
                  </Translate>
                </h3>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <Translate id="hero.swap.realtime" description="Real-time label">
                    Real-time
                  </Translate>
                </div>
              </div>

              <div className="space-y-2">
                <img src="/img/swap-en.png" alt="Swap" className="w-full" />

                {/* <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    <Translate id="hero.swap.sell" description="Sell label">
                      Sell
                    </Translate>
                  </label>
                  <div className="flex space-x-0">
                    <Select defaultValue="eth">
                      <SelectTrigger className="w-24 bg-input-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="eth">
                          <Translate id="hero.swap.tokens.eth" description="ETH token">
                            ETH
                          </Translate>
                        </SelectItem>
                        <SelectItem value="usdc">
                          <Translate id="hero.swap.tokens.usdc" description="USDC token">
                            USDC
                          </Translate>
                        </SelectItem>
                        <SelectItem value="btc">
                          <Translate id="hero.swap.tokens.btc" description="BTC token">
                            BTC
                          </Translate>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="0.0"
                      value={swapAmount}
                      onChange={(e) =>
                        setSwapAmount(e.target.value)
                      }
                      className="bg-input-background border-border focus:border-primary/50"
                    />
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/5 text-primary"
                  >
                    <ArrowDownUp className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    <Translate id="hero.swap.buy" description="Buy label">
                      Buy
                    </Translate>
                  </label>
                  <div className="flex space-x-2">
                    <Select defaultValue="usdc">
                      <SelectTrigger className="w-24 bg-input-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usdc">
                          <Translate id="hero.swap.tokens.usdc2" description="USDC token">
                            USDC
                          </Translate>
                        </SelectItem>
                        <SelectItem value="eth">
                          <Translate id="hero.swap.tokens.eth2" description="ETH token">
                            ETH
                          </Translate>
                        </SelectItem>
                        <SelectItem value="tts">
                          <Translate id="hero.swap.tokens.tts" description="TTS token">
                            TTS
                          </Translate>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="0.0"
                      readOnly
                      className="bg-input-background border-border"
                      value="1,234.56"
                    />
                  </div>
                </div>

                <div className="flex justify-between text-sm py-2">
                  <span className="text-muted-foreground">
                    <Translate id="hero.swap.priceImpact" description="Price impact label">
                      Price Impact
                    </Translate>
                  </span>
                  <span className="text-primary font-medium">
                    ~0.01%
                  </span>
                </div> */}

                <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => { window.open("https://app.ttswap.io/hoodiTestnet/ttswap/trade?en") }}>
                  <Zap className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <Translate id="hero.swap.tradeButton" description="Immediate trading button">
                    Immediate Trading
                  </Translate>
                </Button>
              </div>
            </Card>

            {/* Stake Card */}
            <Card className="p-6 bg-card border border-border shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center mr-1">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                  </div>
                  <Translate id="hero.invest.title" description="Quick invest title">
                    Quick Invest
                  </Translate>
                </h3>
                {/* <div className="text-right">
                  <div className="text-sm text-muted-foreground">
                    <Translate id="hero.stake.apy" description="APY label">
                      APY
                    </Translate>
                  </div>
                  <div className="text-lg font-bold text-secondary">
                    24.5%
                  </div>
                </div> */}
              </div>

              <div className="space-y-4">
                <img src="/img/invest-en.png" alt="Swap" className="w-full" />

                {/* <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    <Translate id="hero.stake.quantity" description="Staking quantity label">
                      Staking Quantity
                    </Translate>
                  </label>
                  <div className="flex space-x-2">
                    <Select defaultValue="tts">
                      <SelectTrigger className="w-24 bg-input-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tts">
                          <Translate id="hero.stake.tokens.tts" description="TTS token">
                            TTS
                          </Translate>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="0.0"
                      value={stakeAmount}
                      onChange={(e) =>
                        setStakeAmount(e.target.value)
                      }
                      className="bg-input-background border-border focus:border-secondary/50"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <Translate id="hero.stake.balance" description="Balance information">
                      Balance: 12,345.67 TTS
                    </Translate>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-3">
                  <div>
                    <div className="text-muted-foreground">
                      <Translate id="hero.stake.expectedReturn" description="Expected monthly return label">
                        Expected Monthly Return
                      </Translate>
                    </div>
                    <div className="font-medium text-secondary">
                      +245 TTS
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">
                      <Translate id="hero.stake.lockupPeriod" description="Lock-up period label">
                        Lock-up Period
                      </Translate>
                    </div>
                    <div className="font-medium">
                      <Translate id="hero.stake.flexible" description="Flexible lock-up period">
                        Flexible
                      </Translate>
                    </div>
                  </div>
                </div> */}

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => { window.open("https://app.ttswap.io/hoodiTestnet/ttswap/trade?en") }}>
                  <TrendingUp className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <Translate id="hero.stake.investButton" description="Start invest button">
                    Start Invest
                  </Translate>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}