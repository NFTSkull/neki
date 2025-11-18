'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductoCard from '@/components/ProductoCard';
import { products, categories } from '@/data/products';

// Función para generar un ID único basado en el nombre
const generateId = (name: string) => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export default function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // Agrupar productos por categoría
  const productsByCategory = useMemo(() => {
    const grouped: Record<string, typeof products> = {};
    products.forEach(product => {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    });
    return grouped;
  }, []);

  // Obtener todos los productos filtrados
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return products;
    }
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  // Contar productos por categoría
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach(cat => {
      counts[cat] = products.filter(p => p.category === cat).length;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header limpio y profesional */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-verde-oscuro mb-4 tracking-tight">
              Nuestros Productos
            </h1>
            <p className="font-lato text-base md:text-lg text-gray-600 leading-relaxed">
              Productos artesanales mexicanos seleccionados con cuidado para ofrecerte sabores auténticos
            </p>
          </div>
        </div>
      </section>

      {/* Filtros de categoría - Diseño profesional */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Filtros */}
            <div className="flex flex-wrap gap-2 flex-1">
              <button
                onClick={() => setSelectedCategory('Todos')}
                className={`px-4 py-2 rounded-lg font-lato text-sm font-medium transition-all duration-200 ${
                  selectedCategory === 'Todos'
                    ? 'bg-verde-oscuro text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todos
                <span className="ml-2 text-xs opacity-75">({products.length})</span>
              </button>
              {categories.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setSelectedCategory(categoria)}
                  className={`px-4 py-2 rounded-lg font-lato text-sm font-medium transition-all duration-200 ${
                    selectedCategory === categoria
                      ? 'bg-verde-oscuro text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {categoria}
                  <span className="ml-2 text-xs opacity-75">({categoryCounts[categoria] || 0})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid de productos - Diseño profesional de ecommerce */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Información de resultados */}
          <div className="mb-8 flex items-center justify-between">
            <p className="font-lato text-sm text-gray-600">
              Mostrando <span className="font-semibold text-verde-oscuro">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'producto' : 'productos'}
              {selectedCategory !== 'Todos' && (
                <span className="ml-2">en <span className="font-semibold">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          {/* Grid de productos - Layout profesional */}
          {selectedCategory === 'Todos' ? (
            // Vista por categorías cuando se selecciona "Todos"
            <div className="space-y-16">
              {categories.map((category) => {
                const categoryProducts = productsByCategory[category] || [];
                if (categoryProducts.length === 0) return null;

                return (
                  <div key={category} className="space-y-6">
                    {/* Título de categoría minimalista */}
                    <div className="flex items-center gap-4">
                      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-verde-oscuro">
                        {category}
                      </h2>
                      <div className="flex-1 h-px bg-gray-200"></div>
                      <span className="font-lato text-sm text-gray-500">
                        {categoryProducts.length} {categoryProducts.length === 1 ? 'producto' : 'productos'}
                      </span>
                    </div>

                    {/* Grid de productos de la categoría */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                      {categoryProducts.map((product) => (
                        <ProductoCard
                          key={generateId(product.name)}
                          id={generateId(product.name)}
                          nombre={product.name}
                          precio={product.price}
                          categoria={product.category}
                          imagen={product.image}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Vista de grid simple cuando se filtra por categoría
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductoCard
                  key={generateId(product.name)}
                  id={generateId(product.name)}
                  nombre={product.name}
                  precio={product.price}
                  categoria={product.category}
                  imagen={product.image}
                />
              ))}
            </div>
          )}

          {/* Sección de contacto */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-lato text-lg text-gray-600 mb-6">
                No se encontraron productos en esta categoría.
              </p>
              <button
                onClick={() => setSelectedCategory('Todos')}
                className="inline-flex items-center gap-2 bg-verde-oscuro hover:bg-verde-oscuro/90 text-white font-lato font-medium px-6 py-3 rounded-lg transition-all duration-200"
              >
                Ver todos los productos
              </button>
            </div>
          )}

          {/* CTA final */}
          <div className="mt-20 pt-12 border-t border-gray-200">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-verde-oscuro mb-3">
                ¿Buscas algo especial?
              </h3>
              <p className="font-lato text-base text-gray-600 mb-6 leading-relaxed">
                Si no encuentras lo que buscas, contáctanos y crearemos una solución personalizada para ti.
              </p>
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 bg-verde-oscuro hover:bg-verde-oscuro/90 text-white font-lato font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span>Contactar</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


