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
import Translate from '@docusaurus/Translate';

export function RewardsSection() {
  const [selectedRole, setSelectedRole] = useState(0);

  const roles = [
    {
      icon: Crown,
      title: <Translate id="rewards.section.roles.tokenManager.title">Token Manager</Translate>,
      subtitle: <Translate id="rewards.section.roles.tokenManager.subtitle">First token contributor</Translate>,
      commission: "1%-3%",
      description: <Translate id="rewards.section.roles.tokenManager.description">
        When users first add a token to the platform, they become token managers, representing community-delegated token operations.
      </Translate>,
      details: [
        <Translate key="1" id="rewards.section.roles.tokenManager.details.1">Community-delegated management</Translate>,
        <Translate key="2" id="rewards.section.roles.tokenManager.details.2">Non-project tokens 2-year evaluation period</Translate>,
        <Translate key="3" id="rewards.section.roles.tokenManager.details.3">Enjoy 1%-3% commission from token trades</Translate>,
        <Translate key="4" id="rewards.section.roles.tokenManager.details.4">Responsible for token community growth</Translate>,
      ],
      to: "/docs/community/tokenoperator",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Droplets,
      title: <Translate id="rewards.section.roles.liquidityProvider.title">Liquidity Provider</Translate>,
      subtitle: <Translate id="rewards.section.roles.liquidityProvider.subtitle">Pool liquidity contributor</Translate>,
      commission: "50%-80%",
      description: <Translate id="rewards.section.roles.liquidityProvider.description">
        Users who provide liquidity automatically become liquidity providers, sharing the majority of trading fees.
      </Translate>,
      details: [
        <Translate key="1" id="rewards.section.roles.liquidityProvider.details.1">Automatically gain status after providing liquidity</Translate>,
        <Translate key="2" id="rewards.section.roles.liquidityProvider.details.2">Share 50%-80% of trading fees</Translate>,
        <Translate key="3" id="rewards.section.roles.liquidityProvider.details.3">Distribution based on contribution ratio</Translate>,
        <Translate key="4" id="rewards.section.roles.liquidityProvider.details.4">No impermanent loss risk</Translate>,
      ],
      to: "/docs/community/liquidityprovider",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Headphones,
      title: <Translate id="rewards.section.roles.serviceProvider.title">Service Provider</Translate>,
      subtitle: <Translate id="rewards.section.roles.serviceProvider.subtitle">Trading & investment services</Translate>,
      commission: "5%-25%",
      description: <Translate id="rewards.section.roles.serviceProvider.description">
        Service providers who offer trading, investment, and other DeFi services to users.
      </Translate>,
      details: [
        <Translate key="1" id="rewards.section.roles.serviceProvider.details.1">Provide trading and investment services</Translate>,
        <Translate key="2" id="rewards.section.roles.serviceProvider.details.2">Earn 5%-25% commission from facilitated trades</Translate>,
        <Translate key="3" id="rewards.section.roles.serviceProvider.details.3">Build reputation through quality service</Translate>,
        <Translate key="4" id="rewards.section.roles.serviceProvider.details.4">Revenue grows with user base</Translate>,
      ],
      to: "/docs/community/gate",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Share,
      title: <Translate id="rewards.section.roles.referrer.title">Referrer</Translate>,
      subtitle: <Translate id="rewards.section.roles.referrer.subtitle">User referral</Translate>,
      commission: "5%-10%",
      description: <Translate id="rewards.section.roles.referrer.description">
        Users who refer others to the platform can earn commission from their referees' trading fees.
      </Translate>,
      details: [
        <Translate key="1" id="rewards.section.roles.referrer.details.1">Earn from referee trading activities</Translate>,
        <Translate key="2" id="rewards.section.roles.referrer.details.2">Get 5%-10% commission from referee fees</Translate>,
        <Translate key="3" id="rewards.section.roles.referrer.details.3">Build passive income through network</Translate>,
        <Translate key="4" id="rewards.section.roles.referrer.details.4">Unlimited referral potential</Translate>,
      ],
      to: "/docs/community/recommander",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: User,
      title: <Translate id="rewards.section.roles.user.title">User</Translate>,
      subtitle: <Translate id="rewards.section.roles.user.subtitle">Platform trader</Translate>,
      commission: <Translate id="rewards.section.roles.user.commission">10% discount</Translate>,
      description: <Translate id="rewards.section.roles.user.description">
        Regular users who add referrers enjoy trading fee discounts on all trading activities.
      </Translate>,
      details: [
        <Translate key="1" id="rewards.section.roles.user.details.1">Enjoy 10% trading fee discount with referrer</Translate>,
        <Translate key="2" id="rewards.section.roles.user.details.2">Access to all platform features</Translate>,
        <Translate key="3" id="rewards.section.roles.user.details.3">Potential to become other roles</Translate>,
        <Translate key="4" id="rewards.section.roles.user.details.4">Participate in community governance</Translate>,
      ],
      to: null,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Building,
      title: <Translate id="rewards.section.roles.community.title">Community</Translate>,
      subtitle: <Translate id="rewards.section.roles.community.subtitle">Technical support</Translate>,
      commission: "2%-8%",
      description: <Translate id="rewards.section.roles.community.description">
        Community provides technical support and development, earning platform fee share.
      </Translate>,
      details: [
        <Translate key="1" id="rewards.section.roles.community.details.1">Provide technical support and development</Translate>,
        <Translate key="2" id="rewards.section.roles.community.details.2">Earn 2%-8% of total platform fees</Translate>,
        <Translate key="3" id="rewards.section.roles.community.details.3">Governance and protocol improvements</Translate>,
        <Translate key="4" id="rewards.section.roles.community.details.4">Focus on long-term sustainability</Translate>,
      ],
      to: "/docs/community/builder",
      gradient: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient"><Translate id="rewards.section.title.part1">Everyone Participates</Translate></span>
            <Translate id="rewards.section.title.part2">, Everyone Benefits</Translate>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <Translate id="rewards.section.description">
              Revolutionary multi-role commission system ensures
              all platform participants fairly share trading fees
            </Translate>
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
              {roles[selectedRole].to !== null ? (
                <Button
                  onClick={() => { location.href = roles[selectedRole].to; }}
                  className={`bg-gradient-to-r ${roles[selectedRole].gradient} hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300`}
                >
                  <Translate id="rewards.section.become.role" values={{role: roles[selectedRole].title}}>
                    {"Become {role}"}
                  </Translate>
                </Button>
              ) : null}

            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold group-hover:text-primary/90 transition-colors duration-300">
                <Translate id="rewards.section.coreBenefits">Core Benefits</Translate>
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