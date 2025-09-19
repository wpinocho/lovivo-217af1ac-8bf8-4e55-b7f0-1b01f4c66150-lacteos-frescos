import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Milk, Award, Truck, Shield } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz para tienda de productos lácteos con diseño fresco y natural
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    blogs,
    loading,
    loadingCollections,
    loadingBlogs,
    searchTerm,
    selectedCollectionId,
    filteredProducts,
    setSearchTerm,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section className="dairy-gradient py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <div className="flex justify-center mb-6">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full animate-float">
                <Milk className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
              Productos Lácteos
              <span className="block text-primary">100% Naturales</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra selección premium de productos lácteos frescos, elaborados con la más alta calidad 
              y cuidado artesanal. De la granja a tu mesa.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Buscar productos lácteos..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="pl-10 h-12 text-lg bg-white/90 backdrop-blur-sm border-white/50 focus:bg-white"
              />
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4">
                <Award className="h-6 w-6 text-accent" />
                <span className="font-medium text-foreground">Calidad Premium</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4">
                <Truck className="h-6 w-6 text-accent" />
                <span className="font-medium text-foreground">Entrega Rápida</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4">
                <Shield className="h-6 w-6 text-accent" />
                <span className="font-medium text-foreground">100% Natural</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Nuestras Categorías
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explora nuestra amplia gama de productos lácteos organizados por categorías
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <div key={collection.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CollectionCard 
                    collection={collection} 
                    onViewProducts={handleViewCollectionProducts} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Productos'}` 
                  : 'Productos Destacados'
                }
              </h2>
              <p className="text-muted-foreground">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.description
                  : 'Los mejores productos lácteos seleccionados especialmente para ti'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Ver Todos los Productos
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.05}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-muted/50 rounded-full p-8 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <Milk className="h-16 w-16 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {searchTerm ? 'No encontramos productos' : 'No hay productos disponibles'}
              </h3>
              <p className="text-muted-foreground">
                {searchTerm 
                  ? 'Intenta con otros términos de búsqueda' 
                  : 'Pronto tendremos nuevos productos lácteos para ti'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="fresh-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Mantente al día con nuestras ofertas
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Recibe las mejores promociones y novedades de productos lácteos directamente en tu email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Tu email aquí..." 
              className="flex-1 h-12 bg-white/90 backdrop-blur-sm border-white/50"
            />
            <Button className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};