import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '@/components/ProductCard';
import { products, type Product } from '@/data/products';
import { cn } from '@/lib/utils';

type Category = 'all' | Product['category'];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'bouquets', label: 'Ramos' },
  { value: 'singles', label: 'Flores Individuais' },
  { value: 'arrangements', label: 'Arranjos' },
  { value: 'special', label: 'Especiais' },
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Catálogo | Eterna Flor - Flores Artesanais</title>
        <meta 
          name="description" 
          content="Explore o nosso catálogo completo de flores artesanais. Ramos, arranjos e flores individuais feitas à mão com amor." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container text-center space-y-4">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              O Nosso Catálogo
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Descubra a nossa coleção de flores artesanais. Cada peça é única e feita com amor.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border/50">
          <div className="container py-4">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                    selectedCategory === category.value
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8 md:py-12">
          <div className="container">
            <p className="text-sm text-muted-foreground mb-6">
              A mostrar {filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  Não foram encontrados produtos nesta categoria.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Catalog;
