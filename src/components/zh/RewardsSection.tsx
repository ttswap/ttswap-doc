import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  Crown,
  Droplets,
  Headphones,
  Share,
  User,
  Building,
} from "lucide-react";
import { useState } from "react";

export function RewardsSection() {
  const [selectedRole, setSelectedRole] = useState(0);

  const roles = [
    {
      icon: Crown,
      title: "代币管理者",
      subtitle: "首个添加代币者",
      commission: "1%-3%",
      description:
        "当用户首次向平台添加代币时，他们将成为代币管理者，代表社区委托的代币操作。",
      details: [
        "社区委托管理",
        "非项目代币2年评估周期",
        "享受代币交易1%-3%分佣",
        "负责代币社区增长",
      ],
      to: "/zh/docs/community/tokenoperator",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Droplets,
      title: "流动性提供者",
      subtitle: "资金池流动性贡献者",
      commission: "50%-80%",
      description:
        "提供流动性的用户自动成为流动性提供者，分享大部分交易费用。",
      details: [
        "提供流动性后自动获得身份",
        "分享50%-80%的交易费用",
        "基于贡献比例分配",
        "无无常损失风险",
      ],
      to: "/zh/docs/community/liquidityprovider",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Headphones,
      title: "服务提供者",
      subtitle: "交易与投资服务",
      commission: "5%-25%",
      description:
        "为用户提供交易、投资和其他DeFi服务的服务提供者。",
      details: [
        "提供交易和投资服务",
        "从促成的交易中获得5%-25%分佣",
        "通过优质服务建立声誉",
        "随用户基数扩大收益",
      ],
      to: "/zh/docs/community/gate",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Share,
      title: "推荐人",
      subtitle: "用户推荐",
      commission: "5%-10%",
      description:
        "推荐他人使用平台的用户可从被推荐人的交易费用中获得分佣。",
      details: [
        "从被推荐人交易活动中获得收益",
        "获得被推荐人费用的5%-10%分佣",
        "通过网络建立被动收入",
        "无限推荐潜力",
      ],
      to: "/zh/docs/community/recommander",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: User,
      title: "用户",
      subtitle: "平台交易者",
      commission: "10%折扣",
      description:
        "添加推荐人的普通用户在所有交易活动中享受交易费折扣。",
      details: [
        "有推荐人时享受10%交易费折扣",
        "使用所有平台功能",
        "有潜力成为其他角色",
        "参与社区治理",
      ],
      to: null,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Building,
      title: "社区",
      subtitle: "技术支持",
      commission: "2%-8%",
      description: "社区提供技术支持和开发，获得平台费用分成。",
      details: [
        "提供技术支持和开发",
        "获得平台总费用的2%-8%",
        "治理和协议改进",
        "专注长期可持续性",
      ],
      to: "/zh/docs/community/builder",
      gradient: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">人人参与</span>
            ，人人受益
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            革命性的多角色分佣体系确保
            平台所有参与者公平分享交易费用
          </p>
        </div>

        {/* Role Selection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {roles.map((role, index) => {
            const Icon = role.icon;
            const isSelected = selectedRole === index;

            return (
              <Card
                key={index}
                className={`p-6 cursor-pointer transition-all duration-500 group overflow-hidden relative ${index === 0
                  ? "animate-fade-in-delay-1"
                  : index === 1
                    ? "animate-fade-in-delay-2"
                    : index === 2
                      ? "animate-fade-in-delay-3"
                      : index === 3
                        ? "animate-fade-in-delay-4"
                        : index === 4
                          ? "animate-fade-in-delay-5"
                          : index === 5
                            ? "animate-fade-in-delay-6"
                            : "animate-fade-in"
                  } ${isSelected
                    ? "border-primary/50 bg-primary/5 glow-effect shadow-xl scale-105"
                    : "border-white/10 bg-card/80 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02]"
                  }`}
                onClick={() => setSelectedRole(index)}
              >
                {/* Subtle background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative text-center space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${role.gradient} flex items-center justify-center ${isSelected
                      ? "scale-110 shadow-lg"
                      : "group-hover:scale-110 group-hover:shadow-md"
                      } transition-all duration-300 animate-pulse-soft`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <Icon
                      className={`h-8 w-8 text-white ${isSelected || "group-hover:scale-110"} transition-transform duration-300`}
                    />
                  </div>

                  <div>
                    <h3
                      className={`text-lg font-semibold mb-1 ${isSelected ? "text-primary" : "group-hover:text-primary/80"} transition-colors duration-300`}
                    >
                      {role.title}
                    </h3>
                    <p
                      className={`text-sm text-muted-foreground mb-2 ${isSelected || "group-hover:text-foreground/70"} transition-colors duration-300`}
                    >
                      {role.subtitle}
                    </p>
                    <div
                      className={`text-lg font-bold bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent ${isSelected || "group-hover:scale-105"} transition-transform duration-300`}
                    >
                      {role.commission}
                    </div>

                    {/* Selection indicator */}
                    <div
                      className={`mt-3 h-1 bg-gradient-to-r ${role.gradient} rounded-full transition-all duration-300 ${isSelected
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                        }`}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Selected Role Details */}
        <Card className="p-8 bg-card/80 border border-primary/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 group overflow-hidden relative max-w-4xl mx-auto animate-fade-in-delay-6">
          {/* Subtle background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${roles[selectedRole].gradient} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 animate-pulse-soft`}
                >
                  {(() => {
                    const Icon = roles[selectedRole].icon;
                    return (
                      <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    );
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary/90 transition-colors duration-300">
                    {roles[selectedRole].title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                    {roles[selectedRole].subtitle}
                  </p>
                  <div
                    className={`text-xl font-bold bg-gradient-to-r ${roles[selectedRole].gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                  >
                    {roles[selectedRole].commission}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                {roles[selectedRole].description}
              </p>
              {roles[selectedRole].to !== null ? (
                <Button
                  onClick={() => { location.href = roles[selectedRole].to; }}
                  className={`bg-gradient-to-r ${roles[selectedRole].gradient} hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300`}
                >
                  成为{roles[selectedRole].title}
                </Button>
              ) : null}
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold group-hover:text-primary/90 transition-colors duration-300">
                核心优势
              </h4>
              <ul className="space-y-3">
                {roles[selectedRole].details.map(
                  (detail, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 group/item hover:bg-primary/5 rounded-lg p-2 -mx-2 transition-all duration-300"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${roles[selectedRole].gradient} mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`}
                      />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground/80 transition-colors duration-300">
                        {detail}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}