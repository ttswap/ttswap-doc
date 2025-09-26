import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import {
  Coins,
  Shield,
  Users,
  TrendingUp,
  Lock,
  Unlock,
  Target,
  Vote,
  Eye,
  AlertTriangle,
  Crown,
  Handshake,
  Star,
  DollarSign,
  Flame,
  ArrowUp,
  ArrowRight,
  Calendar,
  CheckCircle,
  ChevronDown,
  Building,
  Award,
  Activity,
  UserCheck,
  Banknote,
  Clock,
  Zap,
  Droplets,
} from "lucide-react";

export function TokenomicsSection() {
  const tokenDistribution = [
    {
      role: "Founder",
      percentage: 20,
      unlockRatio: "≤1/12",
      description: "Project initiators who bear huge failure risks",
      color: "bg-primary",
      icon: Crown,
      gradient: "gradient-primary",
    },
    {
      role: "Partners",
      percentage: 12,
      unlockRatio: "≤1/8",
      description: "Core members who persisted and believed in the project during early stages",
      color: "bg-secondary",
      icon: Handshake,
      gradient: "gradient-warm",
      subtypes: [
        {
          name: "Type A Partners",
          description:
            "Initial price determined when member joins, unlock ratio ≤1/10 when price doubles, unlocked portion not destroyed when leaving community",
        },
        {
          name: "Type B Partners",
          description:
            "Initial price determined when member joins, unlock ratio ≤1/8 when price doubles, unlocked portion destroyed when leaving community",
        },
      ],
    },
    {
      role: "Value Contributors",
      percentage: 44,
      unlockRatio: "≤1/6",
      description: "Members who contribute value to community building",
      color: "bg-yellow-500",
      icon: Star,
      gradient: "gradient-energy",
      subtypes: [
        {
          name: "Position Contribution",
          description: "Full-time and part-time employees contributing through their roles",
        },
        {
          name: "Employee Options",
          description: "Equity incentives given to key employees and contributors",
        },
        {
          name: "Activities",
          description: "Rewards for participating in community activities and events",
        },
        {
          name: "Community",
          description: "General community contributors and active participants",
        },
      ],
    },
    {
      role: "Capital Contributors",
      percentage: 24,
      unlockRatio: "≤1/5",
      description: "Investors providing financial support",
      color: "bg-accent",
      icon: DollarSign,
      gradient: "gradient-secondary",
      subtypes: [
        {
          name: "Fund Investment",
          description: "Institutional and strategic investors providing capital",
        },
        {
          name: "Early Participation",
          description: "Early supporters and angel investors",
        },
        {
          name: "Public Sale",
          description: "Public sale participants with fully unlocked status",
        },
      ],
    },
  ];

  const tokenRights = [
    {
      icon: Eye,
      title: "Right to Information",
      description: "Right to know all community decisions",
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "Right to Supervision",
      description: "Right to supervise all community actions",
      color: "text-secondary",
    },
    {
      icon: Vote,
      title: "Voting Rights",
      description: "Voting rights on proposals",
      color: "text-yellow-500",
    },
    {
      icon: Target,
      title: "Proposal Rights",
      description: "Proposal rights for holders of certain token amounts",
      color: "text-accent",
    },
  ];

  const keyFeatures = [
    {
      icon: Lock,
      title: "Initial Lock",
      value: "50M tokens",
      description: "All in locked state, unlocked only when conditions are met",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Annual Issuance",
      value: "2%*(200M-unlocked)",
      description: "All given to liquidity providers",
      color: "text-secondary",
    },
    {
      icon: Flame,
      title: "Buyback & Burn",
      value: "100% profit",
      description: "All community profits used to buy and burn tokens",
      color: "text-accent",
    },
    {
      icon: Calendar,
      title: "Notice Period",
      value: "30+ days",
      description: "Distribution changes require advance notice",
      color: "text-yellow-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">
              TTS Token Economics Model
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative token economic protocol based on 4C growth community,
            ensuring long-term value growth and fair distribution
          </p>
        </div>

        {/* Token Basic Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyFeatures.map((feature, index) => (
            <Card
              key={index}
              className={`p-6 text-center border hover:shadow-xl hover:scale-105 transition-all duration-500 group overflow-hidden relative ${
                index === 0
                  ? "animate-fade-in-delay-1 border-primary/20 hover:border-primary/40"
                  : index === 1
                    ? "animate-fade-in-delay-2 border-secondary/20 hover:border-secondary/40"
                    : index === 2
                      ? "animate-fade-in-delay-3 border-accent/20 hover:border-accent/40"
                      : "animate-fade-in-delay-4 border-tertiary/20 hover:border-tertiary/40"
              }`}
            >
              {/* Subtle background gradient effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  index === 0
                    ? "bg-gradient-to-br from-primary/5 to-transparent"
                    : index === 1
                      ? "bg-gradient-to-br from-secondary/5 to-transparent"
                      : index === 2
                        ? "bg-gradient-to-br from-accent/5 to-transparent"
                        : "bg-gradient-to-br from-tertiary/5 to-transparent"
                }`}
              />

              <div className="relative mb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 ${
                    index === 0
                      ? "bg-primary/10"
                      : index === 1
                        ? "bg-secondary/10"
                        : index === 2
                          ? "bg-accent/10"
                          : "bg-tertiary/10"
                  }`}
                >
                  <feature.icon
                    className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary/80 transition-colors duration-300">
                {feature.title}
              </h3>
              <div
                className={`text-2xl font-bold ${feature.color} mb-2 group-hover:scale-105 transition-transform duration-300`}
              >
                {feature.value}
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <Tabs
          defaultValue="distribution"
          className="w-full animate-fade-in-delay-5"
        >
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger
              value="distribution"
              className="hover:scale-105 transition-transform duration-300"
            >
              Token Distribution
            </TabsTrigger>
            <TabsTrigger
              value="mechanism"
              className="hover:scale-105 transition-transform duration-300"
            >
              Unlock Mechanism
            </TabsTrigger>
            <TabsTrigger
              value="governance"
              className="hover:scale-105 transition-transform duration-300"
            >
              Governance Rights
            </TabsTrigger>
            <TabsTrigger
              value="economy"
              className="hover:scale-105 transition-transform duration-300"
            >
              Economic Model
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="distribution"
            className="space-y-8"
          >
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                4C Growth Community Token Distribution
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fair and transparent token distribution based on community contribution model
              </p>
            </div>

            {/* 2x2 Grid Layout (田字布局) */}
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {tokenDistribution.map((item, index) => (
                <Card
                  key={index}
                  className={`p-8 border hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden relative ${
                    index === 0
                      ? "animate-fade-in-delay-1 border-primary/20 hover:border-primary/40"
                      : index === 1
                        ? "animate-fade-in-delay-2 border-secondary/20 hover:border-secondary/40"
                        : index === 2
                          ? "animate-fade-in-delay-3 border-tertiary/20 hover:border-tertiary/40"
                          : "animate-fade-in-delay-4 border-accent/20 hover:border-accent/40"
                  }`}
                >
                  {/* Subtle background gradient effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      index === 0
                        ? "bg-gradient-to-br from-primary/5 to-transparent"
                        : index === 1
                          ? "bg-gradient-to-br from-secondary/5 to-transparent"
                          : index === 2
                            ? "bg-gradient-to-br from-tertiary/5 to-transparent"
                            : "bg-gradient-to-br from-accent/5 to-transparent"
                    }`}
                  />

                  <div className="relative z-10 h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div
                            className={`w-16 h-16 rounded-2xl ${item.gradient} flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 shadow-lg animate-pulse-soft`}
                            style={{
                              animationDelay: `${index * 0.2}s`,
                            }}
                          >
                            <item.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-7 h-7 bg-background border-2 border-border rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                            <span className="text-sm font-bold text-primary">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1 group-hover:text-primary/90 transition-colors duration-300">
                            {item.role}
                          </h4>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                            <Unlock className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                            <span>
                              Max Unlock: {item.unlockRatio}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-3xl font-bold text-transparent bg-clip-text ${item.gradient} group-hover:scale-110 transition-transform duration-300`}
                        >
                          {item.percentage}%
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Progress Visualization */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                          Allocation
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {item.percentage}% of 50M
                        </span>
                      </div>
                      <div className="relative">
                        <Progress
                          value={item.percentage}
                          className="h-4 bg-muted/50"
                        />
                        <div
                          className={`absolute inset-0 ${item.gradient} opacity-20 rounded-full`}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>0</span>
                        <span>50M</span>
                      </div>
                    </div>

                    {/* Subcategories */}
                    {item.subtypes && (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-4">
                          <div
                            className={`h-1 ${item.gradient} flex-1 rounded-full`}
                          ></div>
                          <h5 className="text-sm font-semibold text-muted-foreground px-2">
                            Categories
                          </h5>
                          <div
                            className={`h-1 ${item.gradient} flex-1 rounded-full`}
                          ></div>
                        </div>
                        <div className="grid gap-3">
                          {item.subtypes.map(
                            (subtype, subIndex) => (
                              <div
                                key={subIndex}
                                className="p-4 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/40 hover:bg-muted/50 transition-all duration-300"
                              >
                                <div className="flex items-start space-x-3">
                                  <div
                                    className={`w-3 h-3 rounded-full ${item.gradient} mt-1.5 flex-shrink-0 shadow-sm`}
                                  ></div>
                                  <div className="flex-1">
                                    <p className="font-medium mb-1 text-sm">
                                      {subtype.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                      {subtype.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Summary Statistics */}
            <Card className="p-8 bg-muted/20 border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative max-w-4xl mx-auto mt-12 animate-fade-in-delay-5">
              {/* Subtle background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <h4 className="text-xl font-bold text-center mb-6 group-hover:text-primary/90 transition-colors duration-300">
                  Distribution Summary
                </h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      50M
                    </div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                      Total Supply
                    </div>
                  </div>
                  <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      4C
                    </div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                      Distribution Model
                    </div>
                  </div>
                  <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      Double Unlock
                    </div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                      Incentive Model
                    </div>
                  </div>
                  <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      Buyback & Burn
                    </div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                      Value Capture
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="mechanism" className="space-y-8">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                Smart Unlock Mechanism
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Layered unlock mechanism based on price doubling to ensure stable token value growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border border-primary/20 hover:border-primary/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-1">
                {/* Subtle background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <Lock className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary/90 transition-colors duration-300">
                    Unlock Mechanism
                  </h3>
                </div>
                <div className="relative space-y-4">
                  <div className="p-4 bg-primary-soft rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group/item">
                    <h4 className="font-semibold text-primary mb-2 group-hover/item:scale-105 transition-transform duration-300">
                      Unlock Requirements
                    </h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center space-x-2 group-hover/item:text-foreground/80 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
                        <span>Unlock ratio cannot exceed 20%</span>
                      </li>
                      <li className="flex items-center space-x-2 group-hover/item:text-foreground/80 transition-colors duration-300">
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-pulse-soft"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <span>Initial price cannot be lower than current price</span>
                      </li>
                      <li className="flex items-center space-x-2 group-hover/item:text-foreground/80 transition-colors duration-300">
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-pulse-soft"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <span>
                          When price doubles, unlock remaining portion × unlock ratio
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg hover:bg-muted/80 hover:scale-[1.02] transition-all duration-300 group/calc">
                    <h4 className="font-semibold mb-2 group-hover/calc:text-primary/80 transition-colors duration-300">
                      Calculation Example
                    </h4>
                    <div className="text-sm text-muted-foreground space-y-1 group-hover/calc:text-foreground/70 transition-colors duration-300">
                      <p>
                        Allocate 20,000 tokens, unlock ratio 18%, allocation price 0.05
                      </p>
                      <p className="pl-4 border-l-2 border-primary/30">
                        When price reaches 0.05, unlock: 20,000×0.18 ={" "}
                        <span className="font-semibold text-primary">
                          3,600 tokens
                        </span>
                      </p>
                      <p className="pl-4 border-l-2 border-secondary/30">
                        When price reaches 0.1, unlock: (20,000-3,600)×0.18
                        ={" "}
                        <span className="font-semibold text-secondary">
                          2,952 tokens
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-secondary/20 hover:border-secondary/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-2">
                {/* Subtle background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <Unlock className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-secondary/90 transition-colors duration-300">
                    Unlock Ratio (when price doubles)
                  </h3>
                </div>
                <div className="relative space-y-3">
                  <div className="flex items-center justify-between p-3 bg-accent-soft rounded-lg hover:bg-accent/10 hover:scale-[1.02] transition-all duration-300 group/ratio">
                    <span className="font-medium group-hover/ratio:text-accent transition-colors duration-300">
                      Capital Contributors
                    </span>
                    <Badge
                      variant="outline"
                      className="group-hover/ratio:border-accent/40 group-hover/ratio:scale-110 transition-all duration-300"
                    >
                      ≤20%
                    </Badge>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground mx-auto animate-pulse-soft" />
                  <div className="flex items-center justify-between p-3 bg-yellow-soft rounded-lg hover:bg-tertiary/10 hover:scale-[1.02] transition-all duration-300 group/ratio">
                    <span className="font-medium group-hover/ratio:text-tertiary transition-colors duration-300">
                      Value Contributors
                    </span>
                    <Badge
                      variant="outline"
                      className="group-hover/ratio:border-tertiary/40 group-hover/ratio:scale-110 transition-all duration-300"
                    >
                      ≤16.7%
                    </Badge>
                  </div>
                  <ChevronDown
                    className="h-4 w-4 text-muted-foreground mx-auto animate-pulse-soft"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <div className="flex items-center justify-between p-3 bg-secondary-soft rounded-lg hover:bg-secondary/10 hover:scale-[1.02] transition-all duration-300 group/ratio">
                    <span className="font-medium group-hover/ratio:text-secondary transition-colors duration-300">
                      Partners
                    </span>
                    <Badge
                      variant="outline"
                      className="group-hover/ratio:border-secondary/40 group-hover/ratio:scale-110 transition-all duration-300"
                    >
                      ≤12.5%
                    </Badge>
                  </div>
                  <ChevronDown
                    className="h-4 w-4 text-muted-foreground mx-auto animate-pulse-soft"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div className="flex items-center justify-between p-3 bg-primary-soft rounded-lg hover:bg-primary/10 hover:scale-[1.02] transition-all duration-300 group/ratio">
                    <span className="font-medium group-hover/ratio:text-primary transition-colors duration-300">
                      Founder
                    </span>
                    <Badge
                      variant="outline"
                      className="group-hover/ratio:border-primary/40 group-hover/ratio:scale-110 transition-all duration-300"
                    >
                      ≤8.3%
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-3">
              {/* Subtle background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary/90 transition-colors duration-300">
                  Detailed Unlock Rules
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 border border-border rounded-lg hover:border-primary/40 hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group/rule">
                      <h4 className="font-semibold text-primary mb-2 group-hover/rule:scale-105 transition-transform duration-300">
                        Type A Partners
                      </h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>Member joins with initial price</span>
                        </li>
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>Unlock ratio ≤1/10 when price doubles</span>
                        </li>
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>Unlocked portion not destroyed when leaving community</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 border border-border rounded-lg hover:border-secondary/40 hover:bg-secondary/5 hover:scale-[1.02] transition-all duration-300 group/rule">
                      <h4 className="font-semibold text-secondary mb-2 group-hover/rule:scale-105 transition-transform duration-300">
                        Type B Partners
                      </h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span>Member joins with initial price</span>
                        </li>
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span>Unlock ratio ≤1/8 when price doubles</span>
                        </li>
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span>Unlocked portion destroyed when leaving community</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 border border-border rounded-lg hover:border-tertiary/40 hover:bg-tertiary/5 hover:scale-[1.02] transition-all duration-300 group/rule">
                      <h4 className="font-semibold text-tertiary mb-2 group-hover/rule:scale-105 transition-transform duration-300">
                        Value Contribution Incentives
                      </h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                          <span>Initial price higher than allocation price</span>
                        </li>
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                          <span>Unlock ratio ≤1/6 when price doubles</span>
                        </li>
                        <li className="flex items-start space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-tertiary mt-1.5 flex-shrink-0" />
                          <span>
                            Unlocked portion adjusted by community based on performance, no longer for community service when leaving
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 border border-border rounded-lg hover:border-accent/40 hover:bg-accent/5 hover:scale-[1.02] transition-all duration-300 group/rule">
                      <h4 className="font-semibold text-accent mb-2 group-hover/rule:scale-105 transition-transform duration-300">
                        Capital Contribution Rules
                      </h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>Public sale portion fully unlocked</span>
                        </li>
                        <li className="flex items-start space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          <span>
                            Investment portion price and unlock ratio determined through negotiation, ≤1/5
                          </span>
                        </li>
                        <li className="flex items-start space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          <span>
                            Airdrop portion determined by specific activity plans, ≤1/5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="governance" className="space-y-8">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                Decentralized Governance System
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Token holders enjoy full rights to information, supervision, voting, and proposal
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {tokenRights.map((right, index) => (
                <Card
                  key={index}
                  className={`p-6 border hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden relative ${
                    index === 0
                      ? "animate-fade-in-delay-1 border-primary/20 hover:border-primary/40"
                      : index === 1
                        ? "animate-fade-in-delay-2 border-secondary/20 hover:border-secondary/40"
                        : index === 2
                          ? "animate-fade-in-delay-3 border-tertiary/20 hover:border-tertiary/40"
                          : "animate-fade-in-delay-4 border-accent/20 hover:border-accent/40"
                  }`}
                >
                  {/* Subtle background gradient effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      index === 0
                        ? "bg-gradient-to-br from-primary/5 to-transparent"
                        : index === 1
                          ? "bg-gradient-to-br from-secondary/5 to-transparent"
                          : index === 2
                            ? "bg-gradient-to-br from-tertiary/5 to-transparent"
                            : "bg-gradient-to-br from-accent/5 to-transparent"
                    }`}
                  />

                  <div className="relative flex items-center space-x-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 ${
                        index === 0
                          ? "bg-primary/10"
                          : index === 1
                            ? "bg-secondary/10"
                            : index === 2
                              ? "bg-tertiary/10"
                              : "bg-accent/10"
                      }`}
                    >
                      <right.icon
                        className={`h-6 w-6 ${right.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary/90 transition-colors duration-300">
                        {right.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                        {right.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-5">
              {/* Subtle background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 text-center group-hover:text-primary/90 transition-colors duration-300">
                  Community Governance Process
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 hover:scale-105 transition-all duration-300 group/flow">
                    <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4 group-hover/flow:scale-110 group-hover/flow:shadow-lg transition-all duration-300 animate-pulse-soft">
                      <Eye className="h-8 w-8 text-white group-hover/flow:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold mb-2 group-hover/flow:text-primary transition-colors duration-300">
                      Information Transparency
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                      All decisions and actions disclosed to token holders to ensure transparency
                    </p>
                  </div>
                  <div className="text-center p-6 rounded-lg border border-border hover:border-secondary/40 hover:bg-secondary/5 hover:scale-105 transition-all duration-300 group/flow">
                    <div
                      className="w-16 h-16 mx-auto rounded-full gradient-warm flex items-center justify-center mb-4 group-hover/flow:scale-110 group-hover/flow:shadow-lg transition-all duration-300 animate-pulse-soft"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <Target className="h-8 w-8 text-white group-hover/flow:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold mb-2 group-hover/flow:text-secondary transition-colors duration-300">
                      Proposal Mechanism
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                      Users with a certain amount of tokens can initiate community proposals
                    </p>
                  </div>
                  <div className="text-center p-6 rounded-lg border border-border hover:border-accent/40 hover:bg-accent/5 hover:scale-105 transition-all duration-300 group/flow">
                    <div
                      className="w-16 h-16 mx-auto rounded-full gradient-secondary flex items-center justify-center mb-4 group-hover/flow:scale-110 group-hover/flow:shadow-lg transition-all duration-300 animate-pulse-soft"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <Vote className="h-8 w-8 text-white group-hover/flow:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold mb-2 group-hover/flow:text-accent transition-colors duration-300">
                      Voting Decision
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                      All token holders can participate in proposal voting decisions
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="economy" className="space-y-8">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                Sustainable Economic Model
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Through buyback and burn mechanisms, build a long-term sustainable token economic ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border border-primary/20 hover:border-primary/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-1">
                {/* Subtle background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <TrendingUp className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary/90 transition-colors duration-300">
                    Value Growth Mechanism
                  </h3>
                </div>
                <div className="relative space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group/item">
                    <CheckCircle className="h-5 w-5 text-primary group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-sm group-hover/item:text-foreground/80 transition-colors duration-300">
                      All project profits used for token buyback
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group/item">
                    <CheckCircle className="h-5 w-5 text-primary group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-sm group-hover/item:text-foreground/80 transition-colors duration-300">
                      Token holder income comes from value appreciation or project contributions
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group/item">
                    <CheckCircle className="h-5 w-5 text-primary group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-sm group-hover/item:text-foreground/80 transition-colors duration-300">
                      No profit from harming any participant
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group/item">
                    <CheckCircle className="h-5 w-5 text-primary group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-sm group-hover/item:text-foreground/80 transition-colors duration-300">
                      Recommendation relationships maintained in tokens, once confirmed cannot be modified
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-accent/20 hover:border-accent/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-2">
                {/* Subtle background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <Flame className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-accent/90 transition-colors duration-300">
                    Deflation Mechanism
                  </h3>
                </div>
                <div className="relative space-y-4">
                  <div className="p-4 bg-accent-soft rounded-lg border border-accent/20 hover:border-accent/40 hover:bg-accent/5 hover:scale-[1.02] transition-all duration-300 group/item">
                    <h4 className="font-semibold text-accent mb-2 group-hover/item:scale-105 transition-transform duration-300">
                      Buyback and Burn
                    </h4>
                    <p className="text-sm group-hover/item:text-foreground/80 transition-colors duration-300">
                      All community profits used to buy and burn tokens
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg hover:bg-muted/80 hover:scale-[1.02] transition-all duration-300 group/item">
                    <h4 className="font-semibold mb-2 group-hover/item:text-secondary/80 transition-colors duration-300">
                      Annual Issuance Decreasing
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover/item:text-foreground/70 transition-colors duration-300">
                      Annual new token quantity = (200M - unlocked) ×
                      0.02
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-soft rounded-lg border border-yellow-500/20 hover:border-tertiary/40 hover:bg-tertiary/5 hover:scale-[1.02] transition-all duration-300 group/item">
                    <h4 className="font-semibold text-tertiary mb-2 group-hover/item:scale-105 transition-transform duration-300">
                      Reduce Selling Volume
                    </h4>
                    <p className="text-sm group-hover/item:text-foreground/80 transition-colors duration-300">
                      Any participant can only unlock in proportion when price doubles
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-3">
              {/* Subtle background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 text-center group-hover:text-primary/90 transition-colors duration-300">
                  Economic Flow and Income Distribution
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="p-6 bg-primary-soft border border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-300 group/flow">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center group-hover/flow:scale-110 group-hover/flow:shadow-lg transition-all duration-300 animate-pulse-soft">
                        <TrendingUp className="h-8 w-8 text-white group-hover/flow:scale-110 transition-transform duration-300" />
                      </div>
                      <h4 className="font-semibold group-hover/flow:text-primary transition-colors duration-300">
                        Transaction Income
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                        Platform transaction fee income and protocol income generated
                      </p>
                    </div>
                  </Card>

                  <Card className="p-6 bg-yellow-soft border border-yellow-500/20 hover:border-tertiary/40 hover:scale-105 transition-all duration-300 group/flow">
                    <div className="text-center space-y-4">
                      <div
                        className="w-16 h-16 mx-auto rounded-full gradient-energy flex items-center justify-center group-hover/flow:scale-110 group-hover/flow:shadow-lg transition-all duration-300 animate-pulse-soft"
                        style={{ animationDelay: "0.1s" }}
                      >
                        <ArrowUp className="h-8 w-8 text-white group-hover/flow:scale-110 transition-transform duration-300" />
                      </div>
                      <h4 className="font-semibold group-hover/flow:text-tertiary transition-colors duration-300">
                        Value Enhancement
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                        Continuously improve ecosystem value through agreements
                      </p>
                    </div>
                  </Card>

                  <Card className="p-6 bg-accent-soft border border-accent/20 hover:border-accent/40 hover:scale-105 transition-all duration-300 group/flow">
                    <div className="text-center space-y-4">
                      <div
                        className="w-16 h-16 mx-auto rounded-full gradient-secondary flex items-center justify-center group-hover/flow:scale-110 group-hover/flow:shadow-lg transition-all duration-300 animate-pulse-soft"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <Flame className="h-8 w-8 text-white group-hover/flow:scale-110 transition-transform duration-300" />
                      </div>
                      <h4 className="font-semibold group-hover/flow:text-accent transition-colors duration-300">
                        Buyback and Burn
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                        Continuously reduce token supply
                      </p>
                    </div>
                  </Card>

                  <Card className="p-6 bg-secondary-soft border border-secondary/20 hover:border-secondary/40 hover:scale-105 transition-all duration-300 group/flow">
                    <div className="text-center space-y-4">
                      <div
                        className="w-16 h-16 mx-auto rounded-full gradient-warm flex items-center justify-center group-hover/flow:scale-110 group-hover/flow:shadow-lg transition-all duration-300 animate-pulse-soft"
                        style={{ animationDelay: "0.3s" }}
                      >
                        <Droplets className="h-8 w-8 text-white group-hover/flow:scale-110 transition-transform duration-300" />
                      </div>
                      <h4 className="font-semibold group-hover/flow:text-secondary transition-colors duration-300">
                        Liquidity Incentive
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                        Allocate additional tokens to liquidity providers
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}