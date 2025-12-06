import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Eterna Flor | Flores Artesanais feitas à Mão</title>
        <meta 
          name="description" 
          content="Descubra flores artesanais únicas feitas à mão com amor. O presente perfeito que dura para sempre. Entrega em Gondomar e Ermesinde." 
        />
      </Helmet>
      <HeroSection />
      <FeaturedProducts />
      
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Porquê Eterna Flor?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Mais do que flores, criamos memórias que duram para sempre.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-card p-8 rounded-xl border border-border/50 shadow-card text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium text-foreground">
                Feito com Amor
              </h3>
              <p className="text-muted-foreground text-sm">
                Cada flor é criada à mão com dedicação e atenção aos mais pequenos detalhes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card p-8 rounded-xl border border-border/50 shadow-card text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-rose/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium text-foreground">
                Duram Para Sempre
              </h3>
              <p className="text-muted-foreground text-sm">
                Ao contrário das flores naturais, as nossas criações mantêm-se perfeitas ao longo do tempo.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card p-8 rounded-xl border border-border/50 shadow-card text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-peach flex items-center justify-center">
                <svg className="w-8 h-8 text-peach-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium text-foreground">
                Personalizável
              </h3>
              <p className="text-muted-foreground text-sm">
                Criamos arranjos personalizados à sua medida, com as cores e flores que preferir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
