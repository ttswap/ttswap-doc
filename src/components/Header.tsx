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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold">
                TT
              </span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TTSwap
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Social Links & Connect Wallet Button */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Social Media Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-muted/50 text-muted-foreground transition-all duration-300 ${social.hoverColor} hover:scale-110 hover:shadow-md`}
                  title={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Separator */}
            <div className="w-px h-6 bg-border/50"></div>

            {/* Connect Wallet Button */}
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-muted/50 text-foreground hover:bg-muted transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 bg-background/95 backdrop-blur-xl">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-4 text-muted-foreground hover:text-primary hover:bg-muted/30 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-border/50">
                <div className="text-sm font-medium text-muted-foreground mb-3 px-4">
                  Follow Us
                </div>
                <div className="grid grid-cols-2 gap-2 px-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 p-3 rounded-lg bg-muted/30 text-muted-foreground transition-all duration-300 ${social.hoverColor} hover:bg-muted/50`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <social.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="px-4 pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-md">
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}