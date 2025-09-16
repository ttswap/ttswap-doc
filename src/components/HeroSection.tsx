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
} from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [swapAmount, setSwapAmount] = useState("");
  const [stakeAmount, setStakeAmount] = useState("");

  return (
    <section className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Features and Formula */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Next-Generation{" "}
                <span className="text-gradient">DeFi</span>{" "}
                Trading Protocol
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Revolutionary constant value trading protocol
                Reduces 50%+ trading losses, zero impermanent loss, lowers 50%+ trading costs
                Decentralized trading accessible to everyone.
              </p>
            </div>

            {/* Core Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted border border-border card-shadow hover:border-primary/30 transition-all duration-300">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span>Reduce 50%+ Trading Losses (Slippage)</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted border border-border card-shadow hover:border-primary/30 transition-all duration-300">
                <Shield className="h-6 w-6 text-primary" />
                <span>Zero Impermanent Loss</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted border border-border card-shadow hover:border-secondary/30 transition-all duration-300">
                <Zap className="h-6 w-6 text-secondary" />
                <span>Lower 50%+ Trading Costs (Fees + Gas)</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted border border-border card-shadow hover:border-accent/30 transition-all duration-300">
                <Users className="h-6 w-6 text-accent" />
                <span>Accessible to Everyone</span>
              </div>
            </div>

            {/* Formula Display */}
            <Card className="p-6 bg-card border border-border card-shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gradient">
                Constant Value Trading Formula
              </h3>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-sans">
                    Calculate value by input quantity:
                  </p>
                  <div className="p-4 bg-muted rounded-lg border border-border">
                    <div className="text-center">
                      ΔV = (V<sub>a</sub> / (Q<sub>a</sub> +
                      Δa/2)) × Δa
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-sans">
                    Calculate output quantity by value:
                  </p>
                  <div className="p-4 bg-muted rounded-lg border border-border">
                    <div className="text-center">
                      Δb = (Q<sub>b</sub> / (V<sub>b</sub> +
                      ΔV/2)) × ΔV
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Revolutionary algorithm ensures constant value maintenance across all trades. (V: Market Value; Q: Token Quantity; a,b: Token Types)
              </p>
            </Card>
          </div>

          {/* Right Side - Trading Interface */}
          <div className="space-y-6">
            {/* Swap Card */}
            <Card className="p-6 gradient-border card-shadow-lg">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">
                    Quick Trade
                  </h3>
                  <Zap className="h-5 w-5 text-secondary" />
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Sell
                    </label>
                    <div className="flex space-x-2">
                      <Select defaultValue="eth">
                        <SelectTrigger className="w-24 bg-input-background border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eth">
                            ETH
                          </SelectItem>
                          <SelectItem value="usdc">
                            USDC
                          </SelectItem>
                          <SelectItem value="btc">
                            BTC
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        placeholder="0.0"
                        value={swapAmount}
                        onChange={(e) =>
                          setSwapAmount(e.target.value)
                        }
                        className="bg-input-background border-border"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border hover:bg-muted"
                    >
                      <ArrowDownUp className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Buy
                    </label>
                    <div className="flex space-x-2">
                      <Select defaultValue="usdc">
                        <SelectTrigger className="w-24 bg-input-background border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usdc">
                            USDC
                          </SelectItem>
                          <SelectItem value="eth">
                            ETH
                          </SelectItem>
                          <SelectItem value="tts">
                            TTS
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

                  <Button className="w-full gradient-primary text-white hover:opacity-90 shadow-lg">
                    Trade Now
                  </Button>
                </div>
              </div>
            </Card>

            {/* Stake Card */}
            <Card className="p-6 bg-card border border-border card-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">
                  Quick Investment
                </h3>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">
                    APY
                  </div>
                  <div className="text-lg font-bold text-primary">
                    24.5%
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">
                    Investment Amount
                  </label>
                  <div className="flex space-x-2">
                    <Select defaultValue="tts">
                      <SelectTrigger className="w-24 bg-input-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tts">TTS</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="0.0"
                      value={stakeAmount}
                      onChange={(e) =>
                        setStakeAmount(e.target.value)
                      }
                      className="bg-input-background border-border"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Balance: 12,345.67 TTS
                  </div>
                </div>

                <Button className="w-full gradient-warm text-white hover:opacity-90 shadow-lg">
                  Invest TTS
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}