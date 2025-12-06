import { Instagram, Mail, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-xl font-semibold text-primary">
                Eterna Flor
              </h3>
              <p className="text-sm text-muted-foreground">
                Flores feitas à mão com amor
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cada flor é única, feita com dedicação e carinho para durar para sempre.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-base font-medium text-foreground">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Início
              </Link>
              <Link 
                to="/catalogo" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Catálogo
              </Link>
              <Link 
                to="/como-encomendar" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Como Encomendar
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-base font-medium text-foreground">
              Contactos
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/eternaflor.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-rose transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @eternaflor.pt
              </a>
              <a
                href="mailto:eternaflor.pt@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                eternaflor.pt@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Entrega em mãos: Gondomar e Ermesinde
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              Feito com <Heart className="h-3 w-3 fill-rose text-rose" /> em Portugal
            </p>
            <p>© {new Date().getFullYear()} Eterna Flor. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
