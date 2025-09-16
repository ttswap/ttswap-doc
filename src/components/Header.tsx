import { Button } from "./ui/button";
import {
  Wallet,
  Menu,
  X,
  MessageCircle,
  Github,
  Twitter,
  BookOpen,
  Mail,
  Send,
} from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Trade", href: "#trade" },
    { name: "Features", href: "#features" },
    { name: "Economics", href: "#economics" },
    { name: "Community", href: "#community" },
  ];

  const socialLinks = [
    {
      name: "Discord",
      href: "https://discord.gg/ttswap",
      icon: MessageCircle,
      hoverColor: "hover:text-[#5865F2]",
    },
    {
      name: "Telegram",
      href: "https://t.me/ttswap",
      icon: Send,
      hoverColor: "hover:text-[#26A5E4]",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/ttswap",
      icon: Twitter,
      hoverColor: "hover:text-foreground",
    },
    {
      name: "GitHub",
      href: "https://x.com/ttswap",
      icon: Github,
      hoverColor: "hover:text-foreground",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Connect Wallet Button */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground transition-colors duration-200 ${social.hoverColor} hover:scale-110 transform`}
                  title={social.name}
                >
                  <span className="text-lg">
                    {typeof social.icon === 'string' ? (
                      social.icon
                    ) : (
                      <social.icon className="h-5 w-5" />
                    )}
                  </span>
                </a>
              ))}
            </div>

            {/* Separator */}
            <div className="w-px h-6 bg-border"></div>

            {/* Connect Wallet Button */}
            <Button className="gradient-primary text-white hover:opacity-90 shadow-lg">
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground mb-3">
                  Follow Us
                </div>
                <div className="flex items-center space-x-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-muted-foreground transition-colors duration-200 ${social.hoverColor} flex items-center space-x-2`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-lg">
                        {typeof social.icon === 'string' ? (
                          social.icon
                        ) : (
                          <social.icon className="h-5 w-5" />
                        )}
                      </span>
                      <span className="text-sm">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 mt-4">
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}