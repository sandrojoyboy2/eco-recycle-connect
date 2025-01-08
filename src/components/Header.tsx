import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Sessão Educativa", href: "/educativo" },
    { 
      label: "Loja de Componentes", 
      href: "#",
      badge: "Brevemente" 
    },
    { label: "Sobre Nós", href: "/sobre" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold text-primary flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            EcoRecycle
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
              >
                {item.label}
                {item.badge && (
                  <Badge variant="secondary" className="animate-pulse">
                    {item.badge}
                  </Badge>
                )}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between"
                >
                  {item.label}
                  {item.badge && (
                    <Badge variant="secondary" className="animate-pulse">
                      {item.badge}
                    </Badge>
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};