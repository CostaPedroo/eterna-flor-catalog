import { Link, useLocation } from 'react-router-dom';
import { Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/catalogo', label: 'Catálogo' },
    { href: '/como-encomendar', label: 'Como Encomendar' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex flex-col">
            <span className="font-display text-xl font-semibold tracking-wide text-primary">
              Eterna Flor
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Flores Artesanais
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(link.href) 
                  ? "text-primary" 
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://instagram.com/eternaflor.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-rose"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 border-b border-border bg-background md:hidden animate-fade-in">
          <nav className="container flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary py-2",
                  isActive(link.href) 
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://instagram.com/eternaflor.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-rose py-2"
            >
              <Instagram className="h-5 w-5" />
              @eternaflor.pt
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
