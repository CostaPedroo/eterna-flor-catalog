import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Instagram, Search, MessageCircle, CreditCard, Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: Search,
    title: 'Explore o Catálogo',
    description: 'Navegue pelo nosso catálogo e descubra as flores perfeitas para si ou para oferecer.',
  },
  {
    icon: MessageCircle,
    title: 'Envie uma Mensagem',
    description: 'Clique em "Enviar Mensagem" no produto desejado para nos contactar via Instagram DM.',
  },
  {
    icon: CreditCard,
    title: 'Confirme os Detalhes',
    description: 'Acertamos os detalhes da sua encomenda, personalizações e forma de pagamento.',
  },
  {
    icon: Package,
    title: 'Receba a sua Encomenda',
    description: 'Entregamos em mãos em Gondomar e Ermesinde, ou combinamos a melhor forma de entrega.',
  },
];

const HowToOrder = () => {
  return (
    <>
      <Helmet>
        <title>Como Encomendar | Eterna Flor</title>
        <meta 
          name="description" 
          content="Saiba como encomendar flores artesanais da Eterna Flor. Processo simples via Instagram. Entrega em Gondomar e Ermesinde." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container text-center space-y-4">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Como Encomendar
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Encomendar as suas flores é simples e rápido. Siga os passos abaixo.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 items-start animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Step Number & Icon */}
                  <div className="shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="w-px h-12 bg-border mx-auto mt-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-3 pb-8">
                    <h3 className="font-display text-xl font-medium text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center space-y-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/catalogo">
                  Ver o Catálogo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                ou contacte-nos diretamente no Instagram
              </p>
              <Button variant="instagram" size="lg" asChild>
                <a
                  href="https://instagram.com/eternaflor.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  @eternaflor.pt
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Delivery Info */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container max-w-4xl">
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
                Informações de Entrega
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-medium text-foreground flex items-center gap-2">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Zona de Entrega
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Realizamos entregas em mãos nas zonas de <strong className="text-foreground">Gondomar</strong> e <strong className="text-foreground">Ermesinde</strong>. 
                    Para outras localizações, contacte-nos para avaliarmos a melhor solução.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium text-foreground flex items-center gap-2">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Prazo de Entrega
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    O tempo de preparação depende do tipo de encomenda. Geralmente, as encomendas ficam prontas 
                    entre <strong className="text-foreground">3 a 7 dias úteis</strong>.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium text-foreground flex items-center gap-2">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Pagamento
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Aceitamos <strong className="text-foreground">MBWay</strong> e <strong className="text-foreground">Transferência Bancária</strong>. 
                    O pagamento é feito após confirmação da encomenda.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium text-foreground flex items-center gap-2">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Personalizações
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Quer algo especial? Criamos arranjos personalizados com as suas cores e flores favoritas. 
                    Basta enviar-nos uma mensagem!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowToOrder;
