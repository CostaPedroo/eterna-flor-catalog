import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '@/data/products';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Os Nossos Favoritos
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Descubra as criações mais amadas pelos nossos clientes. Cada peça é feita com 
            dedicação e atenção aos detalhes.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/catalogo">
              Ver Todo o Catálogo
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
