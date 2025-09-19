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
      subtitle: "First token contributor",
      commission: "1%-3%",
      description:
        "When users first add a token to the platform, they become token managers, representing community-delegated token operations.",
      details: [
        "Community-delegated management",
        "Non-project tokens 2-year evaluation period",
        "Enjoy 1%-3% commission from token trades",
        "Responsible for token community growth",
      ],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Droplets,
      title: "Liquidity Provider",
      subtitle: "Pool liquidity contributor",
      commission: "50%-80%",
      description:
        "Users who provide liquidity automatically become liquidity providers, sharing the majority of trading fees.",
      details: [
        "Automatically gain status after providing liquidity",
        "Share 50%-80% of trading fees",
        "Distribution based on contribution ratio",
        "No impermanent loss risk",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Headphones,
      title: "Service Provider",
      subtitle: "Trading & investment services",
      commission: "5%-25%",
      description:
        "Service providers who offer trading, investment, and other DeFi services to users.",
      details: [
        "Provide trading and investment services",
        "Earn 5%-25% commission from facilitated trades",
        "Build reputation through quality service",
        "Revenue grows with user base",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Share,
      title: "Referrer",
      subtitle: "User referral",
      commission: "5%-10%",
      description:
        "Users who refer others to the platform can earn commission from their referees' trading fees.",
      details: [
        "Earn from referee trading activities",
        "Get 5%-10% commission from referee fees",
        "Build passive income through network",
        "Unlimited referral potential",
      ],
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: User,
      title: "User",
      subtitle: "Platform trader",
      commission: "10% discount",
      description:
        "Regular users who add referrers enjoy trading fee discounts on all trading activities.",
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
      subtitle: "Technical support",
      commission: "2%-8%",
      description: "Community provides technical support and development, earning platform fee share.",
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Everyone Participates</span>
            , Everyone Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary multi-role commission system ensures
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
                className={`p-6 cursor-pointer transition-all duration-500 group overflow-hidden relative ${
                  index === 0
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
                } ${
                  isSelected
                    ? "border-primary/50 bg-primary/5 glow-effect shadow-xl scale-105"
                    : "border-white/10 bg-card/80 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02]"
                }`}
                onClick={() => setSelectedRole(index)}
              >
                {/* Subtle background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative text-center space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${role.gradient} flex items-center justify-center ${
                      isSelected
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
                      className={`mt-3 h-1 bg-gradient-to-r ${role.gradient} rounded-full transition-all duration-300 ${
                        isSelected
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

              <Button
                className={`bg-gradient-to-r ${roles[selectedRole].gradient} hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300`}
              >
                Become {roles[selectedRole].title}
              </Button>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold group-hover:text-primary/90 transition-colors duration-300">
                Core Benefits
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