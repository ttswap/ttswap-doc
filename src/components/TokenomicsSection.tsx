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
      role: "Founders",
      percentage: 20,
      unlockRatio: "≤1/12",
      description:
        "Project initiators who bear enormous failure risks",
      color: "bg-primary",
      icon: Crown,
      gradient: "gradient-primary",
    },
    {
      role: "Partners",
      percentage: 12,
      unlockRatio: "≤1/8",
      description:
        "Core members who persist and believe in the project during early stages",
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
      description:
        "Members who contribute value to community building",
      color: "bg-yellow-500",
      icon: Star,
      gradient: "gradient-energy",
      subtypes: [
        {
          name: "Position Contribution",
          description:
            "Full-time and part-time employees contributing through their positions",
        },
        {
          name: "Employee Options",
          description:
            "Equity incentives for key employees and contributors",
        },
        {
          name: "Activities",
          description:
            "Rewards for participating in community activities and events",
        },
        {
          name: "Community",
          description:
            "General community contributors and active participants",
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
          name: "Capital Investment",
          description:
            "Institutional and strategic investors providing capital",
        },
        {
          name: "Early Participation",
          description: "Early supporters and angel investors",
        },
        {
          name: "Public Sale",
          description:
            "Public sale participants with fully unlocked status",
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
      title: "Supervision Rights",
      description: "Right to supervise all community behaviors",
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
      description:
        "Proposal rights for holders of certain token amounts",
      color: "text-accent",
    },
  ];

  const keyFeatures = [
    {
      icon: Lock,
      title: "Initial Lock",
      value: "50M Tokens",
      description:
        "All locked initially, unlock only when conditions are met",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Annual Issuance",
      value: "(200M-unlocked)*0.02",
      description: "All given to liquidity providers",
      color: "text-secondary",
    },
    {
      icon: Flame,
      title: "Buyback & Burn",
      value: "100% Revenue",
      description:
        "All community revenue used to buy and burn tokens",
      color: "text-accent",
    },
    {
      icon: Calendar,
      title: "Notice Period",
      value: "30+ Days",
      description:
        "Distribution changes require advance notice",
      color: "text-yellow-500",
    },
  ];

  const governanceProcess = [
    {
      step: 1,
      title: "Proposal Submission",
      description:
        "Token holders submit governance proposals through the official platform",
      icon: Target,
      color: "text-primary",
      detail:
        "Any holder with at least 1% of total supply can submit proposals for community consideration",
    },
    {
      step: 2,
      title: "Community Discussion",
      description:
        "Open discussion period for proposal review and feedback",
      icon: Users,
      color: "text-secondary",
      detail:
        "7-day discussion period where community members can provide feedback and suggestions",
    },
    {
      step: 3,
      title: "Voting Process",
      description:
        "Token holders vote on proposals using their governance tokens",
      icon: Vote,
      color: "text-yellow-500",
      detail:
        "Voting power proportional to token holdings, with quorum requirements for validity",
    },
    {
      step: 4,
      title: "Implementation",
      description:
        "Approved proposals are implemented by the development team",
      icon: CheckCircle,
      color: "text-accent",
      detail:
        "Proposals passing with >50% approval and minimum quorum are executed within 30 days",
    },
  ];

  const economicMechanisms = [
    {
      title: "Liquidity Mining",
      description:
        "Rewards for providing liquidity to trading pairs",
      icon: Droplets,
      color: "text-primary",
      features: [
        "Dynamic APY based on pool utilization",
        "Bonus rewards for long-term staking",
        "Auto-compounding for maximum efficiency",
      ],
    },
    {
      title: "Trading Fee Distribution",
      description:
        "Fee sharing mechanism for active participants",
      icon: Banknote,
      color: "text-secondary",
      features: [
        "0.3% trading fee shared with stakeholders",
        "Higher tier holders receive larger shares",
        "Monthly distribution in native tokens",
      ],
    },
    {
      title: "Governance Incentives",
      description:
        "Rewards for active governance participation",
      icon: Award,
      color: "text-yellow-500",
      features: [
        "Voting rewards for proposal participation",
        "Bonus tokens for proposal creators",
        "Delegation rewards for vote delegation",
      ],
    },
    {
      title: "Ecosystem Growth",
      description:
        "Sustainable economic model for long-term growth",
      icon: TrendingUp,
      color: "text-accent",
      features: [
        "Regular buyback and burn mechanisms",
        "Strategic partnerships and integrations",
        "Community treasury for ecosystem development",
      ],
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
            Innovative token economic protocol based on 4C
            growth community, ensuring long-term value growth
            and fair distribution
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
                Fair and transparent token distribution based on
                community contribution model
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
                      Supply
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
                      Value Realization
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
                Tiered unlock mechanism based on price doubling,
                ensuring stable token value growth
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
                    Initial Lock Mechanism
                  </h3>
                </div>
                <div className="relative space-y-4">
                  <div className="p-4 bg-primary-soft rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group/item">
                    <h4 className="font-semibold text-primary mb-2 group-hover/item:scale-105 transition-transform duration-300">
                      Configuration Requirements
                    </h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center space-x-2 group-hover/item:text-foreground/80 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
                        <span>
                          Unlock ratio cannot exceed 20%
                        </span>
                      </li>
                      <li className="flex items-center space-x-2 group-hover/item:text-foreground/80 transition-colors duration-300">
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-pulse-soft"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <span>
                          Initial price cannot be lower than
                          current price
                        </span>
                      </li>
                      <li className="flex items-center space-x-2 group-hover/item:text-foreground/80 transition-colors duration-300">
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-pulse-soft"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <span>
                          When price doubles, unlock remaining ×
                          unlock ratio
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
                        Allocate 20,000 tokens, unlock ratio
                        18%, allocation price 0.05
                      </p>
                      <p className="pl-4 border-l-2 border-primary/30">
                        When price reaches 0.05, unlock:
                        20,000×0.18 ={" "}
                        <span className="font-semibold text-primary">
                          3,600 tokens
                        </span>
                      </p>
                      <p className="pl-4 border-l-2 border-secondary/30">
                        When price reaches 0.1, unlock:
                        (20,000-3,600)×0.18 ={" "}
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
                    Unlock Ratio (When Price Doubles)
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
                      Founders
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

            {/* Additional mechanism details */}
            <Card className="p-8 bg-muted/20 border border-tertiary/20 hover:border-tertiary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-3">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <h4 className="text-xl font-bold text-center mb-6 text-gradient">
                  Price-Doubling Unlock Strategy
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center group/feature hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="font-semibold mb-2">
                      Progressive Unlock
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Tokens unlock progressively as price
                      milestones are achieved
                    </p>
                  </div>
                  <div className="text-center group/feature hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-gradient-secondary mx-auto mb-4 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="font-semibold mb-2">
                      Value Protection
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Mechanism protects against rapid token
                      dumps and maintains stability
                    </p>
                  </div>
                  <div className="text-center group/feature hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-gradient-energy mx-auto mb-4 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="font-semibold mb-2">
                      Fair Distribution
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Ensures long-term commitment and fair
                      token distribution
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="governance" className="space-y-8">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                Community Governance System
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Decentralized governance empowering token
                holders to shape the future of TTSwap
              </p>
            </div>

            {/* Token Rights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {tokenRights.map((right, index) => (
                <Card
                  key={index}
                  className={`p-6 text-center border hover:shadow-xl hover:scale-105 transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-${index + 1}`}
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <right.icon
                        className={`h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary/80 transition-colors duration-300">
                    {right.title}
                  </h4>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {right.description}
                  </p>
                </Card>
              ))}
            </div>

            {/* Community Governance Process */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-center text-gradient">
                Community Governance Process
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                {governanceProcess.map((step, index) => (
                  <Card
                    key={index}
                    className={`p-6 border hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-${index + 1}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-12 h-12 rounded-full ${
                            step.color === "text-primary"
                              ? "bg-primary/10"
                              : step.color === "text-secondary"
                                ? "bg-secondary/10"
                                : step.color ===
                                    "text-yellow-500"
                                  ? "bg-tertiary/10"
                                  : "bg-accent/10"
                          } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon
                            className={`h-6 w-6 ${step.color} group-hover:scale-110 transition-transform duration-300`}
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-primary text-white flex items-center justify-center text-sm font-bold mt-2 mx-auto">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold mb-2 group-hover:text-primary/80 transition-colors duration-300">
                          {step.title}
                        </h5>
                        <p className="text-muted-foreground text-sm mb-3 group-hover:text-foreground/80 transition-colors duration-300">
                          {step.description}
                        </p>
                        <p className="text-xs text-muted-foreground bg-muted/50 p-2 rounded-lg group-hover:bg-muted/80 transition-colors duration-300">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Governance Statistics */}
            <Card className="p-8 bg-muted/20 border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <h4 className="text-xl font-bold text-center mb-6 text-gradient">
                  Governance Participation
                </h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      1%
                    </div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                      Min Proposal Threshold
                    </div>
                  </div>
                  <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      7
                    </div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                      Discussion Days
                    </div>
                  </div>
                  <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      50%+
                    </div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                      Approval Required
                    </div>
                  </div>
                  <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      30
                    </div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                      Implementation Days
                    </div>
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
                Comprehensive economic framework designed for
                long-term sustainability and community growth
              </p>
            </div>

            {/* Economic Mechanisms */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {economicMechanisms.map((mechanism, index) => (
                <Card
                  key={index}
                  className={`p-6 border hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-${index + 1}`}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full ${
                        mechanism.color === "text-primary"
                          ? "bg-primary/10"
                          : mechanism.color === "text-secondary"
                            ? "bg-secondary/10"
                            : mechanism.color ===
                                "text-yellow-500"
                              ? "bg-tertiary/10"
                              : "bg-accent/10"
                      } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <mechanism.icon
                        className={`h-6 w-6 ${mechanism.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 group-hover:text-primary/80 transition-colors duration-300">
                        {mechanism.title}
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        {mechanism.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {mechanism.features.map(
                      (feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              mechanism.color === "text-primary"
                                ? "bg-primary"
                                : mechanism.color ===
                                    "text-secondary"
                                  ? "bg-secondary"
                                  : mechanism.color ===
                                      "text-yellow-500"
                                    ? "bg-tertiary"
                                    : "bg-accent"
                            } animate-pulse-soft`}
                            style={{
                              animationDelay: `${featureIndex * 0.1}s`,
                            }}
                          />
                          <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Economic Flow Revenue Distribution */}
            <Card className="p-8 bg-muted/20 border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500 group overflow-hidden relative animate-fade-in-delay-5 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <h4 className="text-xl font-bold text-center mb-8 text-gradient">
                  Economic Flow Revenue Distribution
                </h4>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Trading Revenue */}
                  <div className="text-center group/flow hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 mx-auto mb-4 flex items-center justify-center group-hover/flow:scale-110 group-hover/flow:bg-primary/20 group-hover/flow:shadow-lg group-hover/flow:border-primary/40 transition-all duration-300">
                      <TrendingUp className="h-8 w-8 text-primary group-hover/flow:scale-110 transition-transform duration-300" />
                    </div>
                    <h5 className="font-semibold mb-3 text-primary">
                      Trading Revenue
                    </h5>
                    <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/80 transition-colors duration-300">
                      Revenue distribution from platform trading
                      fees
                    </p>
                  </div>

                  {/* Value Enhancement */}
                  <div className="text-center group/flow hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 border-2 border-secondary/20 mx-auto mb-4 flex items-center justify-center group-hover/flow:scale-110 group-hover/flow:bg-secondary/20 group-hover/flow:shadow-lg group-hover/flow:border-secondary/40 transition-all duration-300">
                      <ArrowUp className="h-8 w-8 text-secondary group-hover/flow:scale-110 transition-transform duration-300" />
                    </div>
                    <h5 className="font-semibold mb-3 text-secondary">
                      Value Enhancement
                    </h5>
                    <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/80 transition-colors duration-300">
                      Enhance user value through token price
                      appreciation
                    </p>
                  </div>

                  {/* Buyback & Burn */}
                  <div className="text-center group/flow hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/20 mx-auto mb-4 flex items-center justify-center group-hover/flow:scale-110 group-hover/flow:bg-accent/20 group-hover/flow:shadow-lg group-hover/flow:border-accent/40 transition-all duration-300">
                      <Flame className="h-8 w-8 text-accent group-hover/flow:scale-110 transition-transform duration-300" />
                    </div>
                    <h5 className="font-semibold mb-3 text-accent">
                      Buyback & Burn
                    </h5>
                    <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/80 transition-colors duration-300">
                      Continuously reduce token market
                      circulation
                    </p>
                  </div>

                  {/* Liquidity Incentives */}
                  <div className="text-center group/flow hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-tertiary/10 border-2 border-tertiary/20 mx-auto mb-4 flex items-center justify-center group-hover/flow:scale-110 group-hover/flow:bg-tertiary/20 group-hover/flow:shadow-lg group-hover/flow:border-tertiary/40 transition-all duration-300">
                      <Droplets className="h-8 w-8 text-tertiary group-hover/flow:scale-110 transition-transform duration-300" />
                    </div>
                    <h5 className="font-semibold mb-3 text-tertiary">
                      Liquidity Incentives
                    </h5>
                    <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/80 transition-colors duration-300">
                      Allocate more tokens to liquidity
                      providers
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}