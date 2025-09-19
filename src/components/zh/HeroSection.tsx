import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
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

// import  '../../pages/index.module.css';
export function HeroSection() {
  const [swapAmount, setSwapAmount] = useState("");
  const [stakeAmount, setStakeAmount] = useState("");

  const features = [
    {
      icon: TrendingUp,
      title: "减少50%+交易损失",
      subtitle: "滑点减少",
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20",
    },
    {
      icon: Shield,
      title: "零无常损失",
      subtitle: "资金保护",
      color: "text-secondary",
      bgColor: "bg-secondary/5",
      borderColor: "border-secondary/20",
    },
    {
      icon: Zap,
      title: "降低50%+交易成本",
      subtitle: "手续费与Gas优化",
      color: "text-tertiary",
      bgColor: "bg-tertiary/5",
      borderColor: "border-tertiary/20",
    },
    {
      icon: Users,
      title: "全民参与",
      subtitle: "人人受益",
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
                革命性{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  DeFi
                </span>{" "}
                交易协议
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                恒定价值算法消除无常损失，降低50%+交易成本。
                人人都能参与的去中心化交易。
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
                  恒定价值交易公式
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      通过输入数量计算价值
                    </p>
                    <div className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                      公式1
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
                      通过价值计算输出数量
                    </p>
                    <div className="px-2 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-medium">
                      公式2
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
                    变量说明：
                  </span>
                  <span className="ml-2">
                    V: 市场价值 | Q: 代币数量 | a,b: 代币种类
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  革命性算法确保所有交易中的恒定价值保持
                </p>
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
                  快速交易
                </h3>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  实时
                </div>
              </div>

              <div className="space-y-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    卖出
                  </label>
                  <div className="flex space-x-0">
                    <Select defaultValue="eth">
                      <SelectTrigger className="w-24 bg-input-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="eth">ETH</SelectItem>
                        <SelectItem value="usdc">
                          USDC
                        </SelectItem>
                        <SelectItem value="btc">BTC</SelectItem>
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
                    买入
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
                        <SelectItem value="eth">ETH</SelectItem>
                        <SelectItem value="tts">TTS</SelectItem>
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
                    价格影响
                  </span>
                  <span className="text-primary font-medium">
                    ~0.01%
                  </span>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Zap className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  立即交易
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
                  快速质押
                </h3>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">
                    APY
                  </div>
                  <div className="text-lg font-bold text-secondary">
                    24.5%
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    质押数量
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
                      className="bg-input-background border-border focus:border-secondary/50"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    余额：12,345.67 TTS
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-3">
                  <div>
                    <div className="text-muted-foreground">
                      预计月收益
                    </div>
                    <div className="font-medium text-secondary">
                      +245 TTS
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">
                      锁定期
                    </div>
                    <div className="font-medium">灵活</div>
                  </div>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <TrendingUp className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  开始质押
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}