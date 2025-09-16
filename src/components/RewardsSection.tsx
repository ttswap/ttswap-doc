import { Card } from "./ui/card";
import { Button } from "./ui/button";
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
      title: "Token Manager",
      subtitle: "First Token Adder",
      commission: "1%-3%",
      description:
        "When users first add a token to the platform, they become token managers, representing community-delegated token operations.",
      details: [
        "Community-delegated management",
        "2-year evaluation period for non-project tokens",
        "Enjoy 1%-3% commission from token trading",
        "Responsible for token community growth",
      ],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Droplets,
      title: "Liquidity Provider",
      subtitle: "Pool Liquidity Contributor",
      commission: "50%-80%",
      description:
        "Users who provide liquidity automatically become liquidity providers, sharing the majority of trading fees.",
      details: [
        "Automatic role after providing liquidity",
        "Share 50%-80% of trading fees",
        "Distribution based on contribution ratio",
        "No impermanent loss risk",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Headphones,
      title: "Service Provider",
      subtitle: "Trading & Investment Services",
      commission: "5%-25%",
      description:
        "Service providers who offer trading, investment and other DeFi services to users.",
      details: [
        "Provide trading and investment services",
        "Earn 5%-25% commission from facilitated trades",
        "Build reputation through quality services",
        "Scale income with user base expansion",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Share,
      title: "Referrer",
      subtitle: "User Referral",
      commission: "5%-10%",
      description:
        "Users who refer others to the platform can earn commissions from their referees' trading fees.",
      details: [
        "Earn from referee trading activity",
        "Get 5%-10% commission from referee fees",
        "Build passive income through network",
        "Unlimited referral potential",
      ],
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: User,
      title: "User",
      subtitle: "Platform Trader",
      commission: "10% Discount",
      description:
        "Regular users with referrers enjoy trading fee discounts on all trading activities.",
      details: [
        "Enjoy 10% trading fee discount with referrer",
        "Access to all platform features",
        "Potential to become other roles",
        "Participate in community governance",
      ],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Building,
      title: "Community",
      subtitle: "Technical Support",
      commission: "2%-8%",
      description:
        "Community provides technical support and development, earning platform fee share.",
      details: [
        "Provide technical support and development",
        "Earn 2%-8% of total platform fees",
        "Governance and protocol improvements",
        "Focus on long-term sustainability",
      ],
      gradient: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">
              Everyone Participates
            </span>
            , Everyone Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary role-based reward system ensures
            all platform participants fairly share trading fees
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
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "border-primary/50 bg-primary/5 glow-effect"
                    : "border-white/10 bg-card/80 hover:border-white/20"
                }`}
                onClick={() => setSelectedRole(index)}
              >
                <div className="text-center space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${role.gradient} flex items-center justify-center ${
                      isSelected ? "scale-110" : ""
                    } transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {role.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {role.subtitle}
                    </p>
                    <div
                      className={`text-lg font-bold bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent`}
                    >
                      {role.commission}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Selected Role Details */}
        <Card className="p-8 bg-card/80 border border-white/10 max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${roles[selectedRole].gradient} flex items-center justify-center`}
                >
                  {(() => {
                    const Icon = roles[selectedRole].icon;
                    return (
                      <Icon className="h-8 w-8 text-white" />
                    );
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    {roles[selectedRole].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {roles[selectedRole].subtitle}
                  </p>
                  <div
                    className={`text-xl font-bold bg-gradient-to-r ${roles[selectedRole].gradient} bg-clip-text text-transparent`}
                  >
                    {roles[selectedRole].commission}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground">
                {roles[selectedRole].description}
              </p>

              <Button
                className={`bg-gradient-to-r ${roles[selectedRole].gradient} hover:opacity-90`}
              >
                Become {roles[selectedRole].title}
              </Button>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">
                Key Benefits
              </h4>
              <ul className="space-y-3">
                {roles[selectedRole].details.map(
                  (detail, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${roles[selectedRole].gradient} mt-2 flex-shrink-0`}
                      />
                      <span className="text-sm text-muted-foreground">
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