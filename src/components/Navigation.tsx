import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage, languages } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const { currentLanguage, setLanguage, t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'products', href: '#products' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-golden-primary/20 ${isRTL ? 'font-arabic' : 'font-latin'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/4f95bf68-a406-4c23-9f4e-314b3786331a.png" 
              alt="Golden Hen Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-primary-foreground">
              {isRTL ? 'الدجاجة الذهبية' : 'Golden Hen'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className={`flex ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-primary-foreground hover:text-golden-light transition-colors duration-200 font-medium"
                >
                  {t[item.key as keyof typeof t]}
                </a>
              ))}
            </div>
            
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-golden-light">
                  <Globe className="h-4 w-4 mr-2" />
                  {currentLanguage.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setLanguage(language)}
                    className={currentLanguage.code === language.code ? 'bg-accent' : ''}
                  >
                    {language.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary-foreground">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setLanguage(language)}
                    className={currentLanguage.code === language.code ? 'bg-accent' : ''}
                  >
                    {language.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-golden-primary/20 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-primary-foreground hover:text-golden-light transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t[item.key as keyof typeof t]}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;