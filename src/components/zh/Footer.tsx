import { Button } from "../ui/button";
import { Input } from "../ui/input";
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
      { name: "交易", href: "#trade" },
      { name: "质押", href: "#stake" },
      { name: "治理", href: "#governance" },
      { name: "分析", href: "#analytics" },
    ],
    resources: [
      { name: "文档", href: "#docs" },
      { name: "白皮书", href: "#whitepaper" },
      { name: "API", href: "#api" },
      { name: "SDK", href: "#sdk" },
    ],
    community: [
      { name: "Discord", href: "#discord" },
      { name: "论坛", href: "#forum" },
      { name: "博客", href: "#blog" },
      { name: "订阅", href: "#newsletter" },
    ],
    company: [
      { name: "关于", href: "#about" },
      { name: "招聘", href: "#careers" },
      { name: "隐私", href: "#privacy" },
      { name: "条款", href: "#terms" },
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
    { name: "文档", icon: BookOpen, href: "#docs" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border/50">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold">订阅更新</h3>
            <p className="text-muted-foreground leading-relaxed">
              获取TTSwap开发、新功能和生态系统增长的最新更新
            </p>
            <div className="flex max-w-md mx-auto space-x-2">
              <Input
                placeholder="输入您的邮箱"
                className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                订阅
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <span className="text-white font-bold">
                    TT
                  </span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  TTSwap
                </span>
              </div>
              <p className="text-muted-foreground max-w-xs leading-relaxed">
                通过恒定价值算法消除无常损失并降低50%+交易成本的革命性DeFi协议。
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">产品</h4>
              <nav className="space-y-2">
                {navigation.product.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">资源</h4>
              <nav className="space-y-2">
                {navigation.resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Community Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">社区</h4>
              <nav className="space-y-2">
                {navigation.community.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">公司</h4>
              <nav className="space-y-2">
                {navigation.company.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300"
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
              © 2024 TTSwap. 保留所有权利。
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              {["隐私政策", "服务条款", "安全"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-primary transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}