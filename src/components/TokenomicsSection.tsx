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
      description: "Project initiators who bear enormous failure risks",
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
            "Initial price determined when member joins, unlock ratio ≤1/10 when price doubles, unlocked portions not destroyed when leaving community",
        },
        {
          name: "Type B Partners",
          description:
            "Initial price determined when member joins, unlock ratio ≤1/8 when price doubles, unlocked portions destroyed when leaving community",
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
          description: "Full-time and part-time employees contributing through their positions",
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
          name: "Funding Investment",
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
      description: "Proposal rights for holders of certain token amounts",
      color: "text-accent",
    },
  ];

  const keyFeatures = [
    {
      icon: Lock,
      title: "Initial Lock",
      value: "50M Tokens",
      description: "All tokens locked, unlocked only when conditions are met",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Annual Issuance",
      value: "(200M-Unlocked)*0.02",
      description: "All given to liquidity providers",
      color: "text-secondary",
    },
    {
      icon: Flame,
      title: "Buyback & Burn",
      value: "100% Revenue",
      description: "All community revenue used to buy and burn tokens",
      color: "text-accent",
    },
    {
      icon: Calendar,
      title: "Notice Period",
      value: "30+ Days",
      description: "Distribution changes require advance notice",
      color: "text-yellow-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">
              TTS Token Economic Model
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
              className="p-6 text-center card-shadow hover:card-shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon
                    className={`h-8 w-8 ${feature.color}`}
                  />
                </div>
              </div>
              <h3 className="font-semibold mb-2">
                {feature.title}
              </h3>
              <div
                className={`text-2xl font-bold ${feature.color} mb-2`}
              >
                {feature.value}
              </div>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="distribution" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="distribution">
              Token Distribution
            </TabsTrigger>
            <TabsTrigger value="mechanism">
              Unlock Mechanism
            </TabsTrigger>
            <TabsTrigger value="governance">
              Governance Rights
            </TabsTrigger>
            <TabsTrigger value="economy">Economic Model</TabsTrigger>
          </TabsList>

          <TabsContent
            value="distribution"
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                4C Growth Community Token Distribution
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fair and transparent token distribution based on community contribution model
              </p>
            </div>

            {/* 2x2 Grid Layout */}
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {tokenDistribution.map((item, index) => (
                <Card
                  key={index}
                  className="p-8 card-shadow-lg hover:card-shadow-xl transition-all duration-500 group gradient-border"
                >
                  <div className="relative z-10 h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div
                            className={`w-16 h-16 rounded-2xl ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                          >
                            <item.icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-7 h-7 bg-background border-2 border-border rounded-full flex items-center justify-center shadow-md">
                            <span className="text-sm font-bold text-primary">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1">
                            {item.role}
                          </h4>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Unlock className="h-4 w-4" />
                            <span>
                              Max Unlock: {item.unlockRatio}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-3xl font-bold text-transparent bg-clip-text ${item.gradient}`}
                        >
                          {item.percentage}%
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Progress Visualization */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                          Distribution
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
            <Card className="p-8 bg-muted/20 border border-border/50 max-w-4xl mx-auto mt-12">
              <h4 className="text-xl font-bold text-center mb-6">
                Distribution Summary
              </h4>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    50M
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Supply
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    4C
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Distribution Model
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    Double Unlock
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Incentive Model
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    Buyback & Burn
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Value Realization
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="mechanism" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 card-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">
                    Initial Lock Mechanism
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-primary-soft rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">
                      Configuration Requirements
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Unlock ratio cannot exceed 20%</li>
                      <li>• Initial price cannot be lower than current price</li>
                      <li>
                        • When price doubles, unlock remaining portion × unlock ratio
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Calculation Example
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Allocated 20,000 tokens, unlock ratio 18%, allocation price 0.05
                      <br />
                      When price reaches 0.05, unlock: 20,000×0.18 =
                      3,600 tokens
                      <br />
                      When price reaches 0.1, unlock: (20,000-3,600)×0.18
                      = 2,952 tokens
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 card-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <Unlock className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-semibold">
                    Unlock Ratio (When Price Doubles)
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-accent-soft rounded-lg">
                    <span className="font-medium">
                      Capital Contributors
                    </span>
                    <Badge variant="outline">≤20%</Badge>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground mx-auto" />
                  <div className="flex items-center justify-between p-3 bg-yellow-soft rounded-lg">
                    <span className="font-medium">
                      Value Contributors
                    </span>
                    <Badge variant="outline">≤16.7%</Badge>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground mx-auto" />
                  <div className="flex items-center justify-between p-3 bg-secondary-soft rounded-lg">
                    <span className="font-medium">Partners</span>
                    <Badge variant="outline">≤12.5%</Badge>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground mx-auto" />
                  <div className="flex items-center justify-between p-3 bg-primary-soft rounded-lg">
                    <span className="font-medium">Founders</span>
                    <Badge variant="outline">≤8.3%</Badge>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 card-shadow">
              <h3 className="text-xl font-semibold mb-4">
                Detailed Unlock Rules
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">
                      Type A Partners
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Initial price determined when member joins</li>
                      <li>• Unlock ratio ≤1/10 when price doubles</li>
                      <li>• Unlocked portions recovered when leaving community</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-secondary mb-2">
                      Type B Partners
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Initial price determined when member joins</li>
                      <li>• Unlock ratio ≤1/8 when price doubles</li>
                      <li>• Unlocked portions recovered when leaving community</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-yellow-600 mb-2">
                      Value Contribution Incentives
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Initial price higher than allocation price</li>
                      <li>• Unlock ratio ≤1/6 when price doubles</li>
                      <li>
                        • Allocated unlocked portions adjusted by community based on performance,
                        recovered at current price when no longer serving community
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">
                      Capital Contribution Rules
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Public sale portion fully unlocked</li>
                      <li>
                        • Investment portion price and unlock ratio determined through negotiation,
                        ≤1/5
                      </li>
                      <li>
                        • Airdrop portion determined by specific activity plans, ≤1/5
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="governance" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {tokenRights.map((right, index) => (
                <Card
                  key={index}
                  className="p-6 card-shadow hover:card-shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <right.icon
                        className={`h-6 w-6 ${right.color}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {right.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {right.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 card-shadow">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Community Governance Process
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg border border-border">
                  <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">
                    Information Transparency
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    All decisions and actions are disclosed to token holders,
                    ensuring transparency
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg border border-border">
                  <div className="w-16 h-16 mx-auto rounded-full gradient-warm flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">
                    Proposal Mechanism
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Users holding certain amounts of tokens can initiate community proposals
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg border border-border">
                  <div className="w-16 h-16 mx-auto rounded-full gradient-secondary flex items-center justify-center mb-4">
                    <Vote className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">
                    Voting Decisions
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    All token holders can participate in proposal voting decisions
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="economy" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 card-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">
                    Value Growth Mechanism
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">
                      All project revenue used for token buybacks
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">
                      Token holder revenue comes from value appreciation or project contribution
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">
                      No revenue gained from harming any participant's interests
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm">
                      Referral relationships maintained in tokens, unmodifiable once confirmed
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 card-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <Flame className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-semibold">
                    Deflationary Mechanism
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-accent-soft rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-accent mb-2">
                      Buyback & Burn
                    </h4>
                    <p className="text-sm">
                      All community revenue used to purchase
                      official tokens in the market for burning
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Annual Issuance Decreases Yearly
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Annual new token amount = (200M - unlocked tokens) ×
                      0.02
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-soft rounded-lg border border-yellow-500/20">
                    <h4 className="font-semibold text-yellow-600 mb-2">
                      Reduce Selling Volume
                    </h4>
                    <p className="text-sm">
                      Any participant can only unlock proportionally when price doubles
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 card-shadow">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Economic Flow & Revenue Distribution
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 bg-primary-soft border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold">Trading Revenue</h4>
                    <p className="text-sm text-muted-foreground">
                      Platform trading fee revenue and protocol revenue generation
                    </p>
                  </div>
                </Card>

                <Card className="p-6 bg-yellow-soft border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full gradient-energy flex items-center justify-center">
                      <ArrowUp className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold">Value Enhancement</h4>
                    <p className="text-sm text-muted-foreground">
                      Continuously enhance ecosystem value through protocol improvements
                    </p>
                  </div>
                </Card>

                <Card className="p-6 bg-accent-soft border border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full gradient-secondary flex items-center justify-center">
                      <Flame className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold">Token Burning</h4>
                    <p className="text-sm text-muted-foreground">
                      Use all revenue to buy back and burn tokens from the market
                    </p>
                  </div>
                </Card>

                <Card className="p-6 bg-secondary-soft border border-secondary/20 hover:border-secondary/40 transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full gradient-warm flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold">Community Benefits</h4>
                    <p className="text-sm text-muted-foreground">
                      All participants share in ecosystem growth through token appreciation
                    </p>
                  </div>
                </Card>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}