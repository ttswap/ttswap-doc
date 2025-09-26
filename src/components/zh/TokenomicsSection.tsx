import { Card } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";
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
      role: "创始人",
      percentage: 20,
      unlockRatio: "≤1/12",
      description: "承担巨大失败风险的项目发起者",
      color: "bg-primary",
      icon: Crown,
      gradient: "gradient-primary",
    },
    {
      role: "合伙人",
      percentage: 12,
      unlockRatio: "≤1/8",
      description: "在早期阶段坚持并相信项目的核心成员",
      color: "bg-secondary",
      icon: Handshake,
      gradient: "gradient-warm",
      subtypes: [
        {
          name: "A类型合伙人",
          description:
            "成员加入时确定初始价格，价格翻倍时解锁比例≤1/10，离开社区时未解锁部分不销毁",
        },
        {
          name: "B类型合伙人",
          description:
            "成员加入时确定初始价格，价格翻倍时解锁比例≤1/8，离开社区时未解锁部分销毁",
        },
      ],
    },
    {
      role: "价值贡献者",
      percentage: 44,
      unlockRatio: "≤1/6",
      description: "为社区建设贡献价值的成员",
      color: "bg-yellow-500",
      icon: Star,
      gradient: "gradient-energy",
      subtypes: [
        {
          name: "岗位贡献",
          description: "通过其职位贡献的全职和兼职员工",
        },
        {
          name: "员工期权",
          description: "给予关键员工和贡献者的股权激励",
        },
        {
          name: "活动",
          description: "参与社区活动和事件的奖励",
        },
        {
          name: "社区",
          description: "一般社区贡献者和活跃参与者",
        },
      ],
    },
    {
      role: "资本贡献者",
      percentage: 24,
      unlockRatio: "≤1/5",
      description: "提供财务支持的投资者",
      color: "bg-accent",
      icon: DollarSign,
      gradient: "gradient-secondary",
      subtypes: [
        {
          name: "资金投资",
          description: "提供资本的机构和战略投资者",
        },
        {
          name: "早期参与",
          description: "早期支持者和天使投资人",
        },
        {
          name: "公售募集",
          description: "具有完全解锁状态的公开销售参与者",
        },
      ],
    },
  ];

  const tokenRights = [
    {
      icon: Eye,
      title: "知情权",
      description: "了解所有社区决策的权利",
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "监督权",
      description: "监督所有社区行为的权利",
      color: "text-secondary",
    },
    {
      icon: Vote,
      title: "投票权",
      description: "对提案的投票权",
      color: "text-yellow-500",
    },
    {
      icon: Target,
      title: "提案权",
      description: "持有一定代币数量者的提案权",
      color: "text-accent",
    },
  ];

  const keyFeatures = [
    {
      icon: Lock,
      title: "初始锁定",
      value: "5000万代币",
      description: "全部处于锁定状态，仅在满足条件时解锁",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "年度增发",
      value: "2%*(2亿-已解锁)",
      description: "全部给予流动性提供者",
      color: "text-secondary",
    },
    {
      icon: Flame,
      title: "回购销毁",
      value: "100%收益",
      description: "所有社区收益用于购买代币销毁",
      color: "text-accent",
    },
    {
      icon: Calendar,
      title: "公告期",
      value: "30+天",
      description: "分配变更需要提前通知",
      color: "text-yellow-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">
              TTS代币经济模型
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            基于4C增长社区的创新代币经济协议，
            确保长期价值增长和公平分配
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
              代币分配
            </TabsTrigger>
            <TabsTrigger
              value="mechanism"
              className="hover:scale-105 transition-transform duration-300"
            >
              解锁机制
            </TabsTrigger>
            <TabsTrigger
              value="governance"
              className="hover:scale-105 transition-transform duration-300"
            >
              治理权利
            </TabsTrigger>
            <TabsTrigger
              value="economy"
              className="hover:scale-105 transition-transform duration-300"
            >
              经济模型
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="distribution"
            className="space-y-8"
          >
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                4C增长社区代币分配
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                基于社区贡献模型的公平透明代币分配
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
                              最大解锁：{item.unlockRatio}
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
                          分配
                        </span>
                        <span className="text-sm text-muted-foreground">
                          占5000万的{item.percentage}%
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
                        <span>5000万</span>
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
                            类别
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
                  分配总结
                </h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      5000万
                    </div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                      供应量
                    </div>
                  </div>
                  <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      4C
                    </div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                      分配模型
                    </div>
                  </div>
                  <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      翻倍解锁
                    </div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                      激励模型
                    </div>
                  </div>
                  <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gradient mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      回购销毁
                    </div>
                    <div className="text-sm text-muted-foreground group-hover/stat:text-foreground/80 transition-colors duration-300">
                      价值体现
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="mechanism" className="space-y-8">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                智能解锁机制
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                基于价格翻倍的分层解锁机制，确保代币价值稳定增长
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
                    解锁机制
                  </h3>
                </div>
                <div className="relative space-y-4">
                  <div className="p-4 bg-primary-soft rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group/item">
                    <h4 className="font-semibold text-primary mb-2 group-hover/item:scale-105 transition-transform duration-300">
                      解锁要求
                    </h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center space-x-2 group-hover/item:text-foreground/80 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
                        <span>解锁比例不能超过20%</span>
                      </li>
                      <li className="flex items-center space-x-2 group-hover/item:text-foreground/80 transition-colors duration-300">
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-pulse-soft"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <span>初始价格不能低于当前价格</span>
                      </li>
                      <li className="flex items-center space-x-2 group-hover/item:text-foreground/80 transition-colors duration-300">
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-pulse-soft"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <span>
                          价格翻倍时，解锁剩余部分 × 解锁比例
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg hover:bg-muted/80 hover:scale-[1.02] transition-all duration-300 group/calc">
                    <h4 className="font-semibold mb-2 group-hover/calc:text-primary/80 transition-colors duration-300">
                      计算示例
                    </h4>
                    <div className="text-sm text-muted-foreground space-y-1 group-hover/calc:text-foreground/70 transition-colors duration-300">
                      <p>
                        分配20,000代币，解锁比例18%，分配价格0.05
                      </p>
                      <p className="pl-4 border-l-2 border-primary/30">
                        价格达到0.05时，解锁：20,000×0.18 ={" "}
                        <span className="font-semibold text-primary">
                          3,600代币
                        </span>
                      </p>
                      <p className="pl-4 border-l-2 border-secondary/30">
                        价格达到0.1时，解锁：(20,000-3,600)×0.18
                        ={" "}
                        <span className="font-semibold text-secondary">
                          2,952代币
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
                    解锁比例（价格翻倍时）
                  </h3>
                </div>
                <div className="relative space-y-3">
                  <div className="flex items-center justify-between p-3 bg-accent-soft rounded-lg hover:bg-accent/10 hover:scale-[1.02] transition-all duration-300 group/ratio">
                    <span className="font-medium group-hover/ratio:text-accent transition-colors duration-300">
                      资本贡献者
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
                      价值贡献者
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
                      合伙人
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
                      创始人
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
                  详细解锁规则
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 border border-border rounded-lg hover:border-primary/40 hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group/rule">
                      <h4 className="font-semibold text-primary mb-2 group-hover/rule:scale-105 transition-transform duration-300">
                        A类型合伙人
                      </h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>成员加入时确定初始价格</span>
                        </li>
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>价格翻倍时解锁比例≤1/10</span>
                        </li>
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>离开社区时未解锁部分回收</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 border border-border rounded-lg hover:border-secondary/40 hover:bg-secondary/5 hover:scale-[1.02] transition-all duration-300 group/rule">
                      <h4 className="font-semibold text-secondary mb-2 group-hover/rule:scale-105 transition-transform duration-300">
                        B类型合伙人
                      </h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span>成员加入时确定初始价格</span>
                        </li>
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span>价格翻倍时解锁比例≤1/8</span>
                        </li>
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span>离开社区时回收未解锁部分</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 border border-border rounded-lg hover:border-tertiary/40 hover:bg-tertiary/5 hover:scale-[1.02] transition-all duration-300 group/rule">
                      <h4 className="font-semibold text-tertiary mb-2 group-hover/rule:scale-105 transition-transform duration-300">
                        价值贡献激励
                      </h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                          <span>初始价格高于分配价格</span>
                        </li>
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                          <span>价格翻倍时解锁比例≤1/6</span>
                        </li>
                        <li className="flex items-start space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-tertiary mt-1.5 flex-shrink-0" />
                          <span>
                            分配已解锁部分由社区根据效果调整，不再为社区服务时按当前价格收回
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 border border-border rounded-lg hover:border-accent/40 hover:bg-accent/5 hover:scale-[1.02] transition-all duration-300 group/rule">
                      <h4 className="font-semibold text-accent mb-2 group-hover/rule:scale-105 transition-transform duration-300">
                        资本贡献规则
                      </h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li className="flex items-center space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>公售部分完全解锁</span>
                        </li>
                        <li className="flex items-start space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          <span>
                            投资部分价格和解锁比例通过谈判确定，≤1/5
                          </span>
                        </li>
                        <li className="flex items-start space-x-2 group-hover/rule:text-foreground/70 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          <span>
                            空投部分由具体活动计划确定，≤1/5
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
                去中心化治理体系
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                代币持有者享有完整的知情权、监督权、投票权和提案权
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
                  社区治理流程
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 hover:scale-105 transition-all duration-300 group/flow">
                    <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4 group-hover/flow:scale-110 group-hover/flow:shadow-lg transition-all duration-300 animate-pulse-soft">
                      <Eye className="h-8 w-8 text-white group-hover/flow:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-semibold mb-2 group-hover/flow:text-primary transition-colors duration-300">
                      信息透明
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                      所有决策和行动都向代币持有者披露，确保透明度
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
                      提案机制
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                      持有一定数量代币的用户可以发起社区提案
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
                      投票决策
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                      所有代币持有者都可以参与提案投票决策
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="economy" className="space-y-8">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                可持续经济模型
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                通过回购销毁和价值增长机制，构建长期可持续的代币经济生态
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
                    价值增长机制
                  </h3>
                </div>
                <div className="relative space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group/item">
                    <CheckCircle className="h-5 w-5 text-primary group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-sm group-hover/item:text-foreground/80 transition-colors duration-300">
                      所有项目收益用于代币回购
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group/item">
                    <CheckCircle className="h-5 w-5 text-primary group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-sm group-hover/item:text-foreground/80 transition-colors duration-300">
                      代币持有者收益来自价值升值或项目贡献
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group/item">
                    <CheckCircle className="h-5 w-5 text-primary group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-sm group-hover/item:text-foreground/80 transition-colors duration-300">
                      不从损害任何参与者利益中获得收益
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group/item">
                    <CheckCircle className="h-5 w-5 text-primary group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-sm group-hover/item:text-foreground/80 transition-colors duration-300">
                      推荐关系在代币中维护，一旦确认不可修改
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
                    通缩机制
                  </h3>
                </div>
                <div className="relative space-y-4">
                  <div className="p-4 bg-accent-soft rounded-lg border border-accent/20 hover:border-accent/40 hover:bg-accent/5 hover:scale-[1.02] transition-all duration-300 group/item">
                    <h4 className="font-semibold text-accent mb-2 group-hover/item:scale-105 transition-transform duration-300">
                      回购销毁
                    </h4>
                    <p className="text-sm group-hover/item:text-foreground/80 transition-colors duration-300">
                      所有社区收益用于在市场购买官方代币进行销毁
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg hover:bg-muted/80 hover:scale-[1.02] transition-all duration-300 group/item">
                    <h4 className="font-semibold mb-2 group-hover/item:text-secondary/80 transition-colors duration-300">
                      年度增发逐年递减
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover/item:text-foreground/70 transition-colors duration-300">
                      年度新增代币数量 = (2亿 - 已解锁代币) ×
                      0.02
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-soft rounded-lg border border-yellow-500/20 hover:border-tertiary/40 hover:bg-tertiary/5 hover:scale-[1.02] transition-all duration-300 group/item">
                    <h4 className="font-semibold text-tertiary mb-2 group-hover/item:scale-105 transition-transform duration-300">
                      减少抛售量
                    </h4>
                    <p className="text-sm group-hover/item:text-foreground/80 transition-colors duration-300">
                      任何参与者只能在价格翻倍时按比例解锁
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
                  经济流向与收益分配
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="p-6 bg-primary-soft border border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-300 group/flow">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center group-hover/flow:scale-110 group-hover/flow:shadow-lg transition-all duration-300 animate-pulse-soft">
                        <TrendingUp className="h-8 w-8 text-white group-hover/flow:scale-110 transition-transform duration-300" />
                      </div>
                      <h4 className="font-semibold group-hover/flow:text-primary transition-colors duration-300">
                        交易收益
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                        平台交易费收益和协议收益产生
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
                        价值提升
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                        通过协议改进持续提升生态价值
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
                        回购销毁
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                        持续减少代币供应量
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
                        流动性激励
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover/flow:text-foreground/70 transition-colors duration-300">
                        为流动性提供者分配增发代币
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