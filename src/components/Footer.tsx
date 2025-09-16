import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Github,
  Twitter,
  MessageCircle,
  BookOpen,
  Mail,
} from "lucide-react";

export function Footer() {
  const navigation = {
    product: [
      { name: "Trade", href: "#trade" },
      { name: "Stake", href: "#stake" },
      { name: "Governance", href: "#governance" },
      { name: "Analytics", href: "#analytics" },
    ],
    resources: [
      { name: "Docs", href: "#docs" },
      { name: "Whitepaper", href: "#whitepaper" },
      { name: "API", href: "#api" },
      { name: "SDK", href: "#sdk" },
    ],
    community: [
      { name: "Discord", href: "#discord" },
      { name: "Forum", href: "#forum" },
      { name: "Blog", href: "#blog" },
      { name: "Newsletter", href: "#newsletter" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#twitter" },
    {
      name: "Telegram",
      icon: MessageCircle,
      href: "#telegram",
    },
    { name: "Github", icon: Github, href: "#github" },
    { name: "Docs", icon: BookOpen, href: "#docs" },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold">Subscribe to Updates</h3>
            <p className="text-muted-foreground">
              Get the latest updates on TTSwap development, new features, and ecosystem growth
            </p>
            <div className="flex max-w-md mx-auto space-x-2">
              <Input
                placeholder="Enter your email"
                className="bg-input-background border-border"
              />
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-background font-bold">
                    TT
                  </span>
                </div>
                <span className="text-xl font-bold text-gradient">
                  TTSwap
                </span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                Revolutionary DeFi protocol that eliminates impermanent loss and reduces 50%+ trading costs
                through constant value algorithms.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <nav className="space-y-2">
                {navigation.product.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <nav className="space-y-2">
                {navigation.resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Community Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Community</h4>
              <nav className="space-y-2">
                {navigation.community.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <nav className="space-y-2">
                {navigation.company.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 TTSwap. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}