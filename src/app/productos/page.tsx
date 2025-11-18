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

// Función para obtener el color de acento de la categoría
const getCategoryAccent = (category: string) => {
  const accents: Record<string, string> = {
    "Tlayudas": "from-orange-500/10 to-orange-600/5",
    "Carnes y Quesos": "from-amber-600/10 to-amber-700/5",
    "Moles": "from-amber-900/15 to-amber-950/10",
    "Café y Chocolates": "from-green-600/10 to-green-700/5",
    "Mermeladas & Mieles": "from-yellow-400/10 to-yellow-500/5",
    "Chiles & Especias": "from-red-600/10 to-red-700/5",
    "Dulces Tradicionales": "from-pink-400/10 to-pink-500/5",
    "Otros": "from-emerald-500/10 to-emerald-600/5",
    "Paquetes": "from-blue-500/10 to-blue-600/5"
  };
  return accents[category] || "from-gray-400/10 to-gray-500/5";
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

  // Filtrar productos según la categoría seleccionada
  const filteredCategories = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return categories;
    }
    return [selectedCategory];
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-crema">
      <Navbar />
      
      {/* Hero Section - Moderno y elegante */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-verde-oscuro via-verde-oscuro/95 to-verde-oscuro overflow-hidden">
        {/* Patrón decorativo sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(225, 155, 62, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dorado/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Número decorativo */}
            <div className="inline-block mb-6">
              <span className="font-playfair text-6xl md:text-7xl text-dorado/20 font-bold">01</span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-crema mb-6 leading-tight">
              Nuestros Productos
            </h1>
            
            <div className="w-24 h-0.5 bg-dorado mx-auto mb-8"></div>
            
            <p className="font-lato text-lg md:text-xl text-crema/90 max-w-2xl mx-auto leading-relaxed font-light">
              Descubre nuestra colección completa de productos artesanales mexicanos, 
              cuidadosamente seleccionados para ofrecerte los sabores auténticos de México.
            </p>
          </div>
        </div>
        
        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dorado/30 to-transparent"></div>
      </section>

      {/* Filtros de categoría - Diseño minimalista y elegante */}
      <section className="sticky top-0 z-20 bg-crema/95 backdrop-blur-md border-b border-verde-oscuro/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-3">
            {['Todos', ...categories].map((categoria) => (
              <button
                key={categoria}
                onClick={() => setSelectedCategory(categoria)}
                className={`relative px-6 py-2.5 rounded-full font-lato text-sm font-medium transition-all duration-300 ${
                  selectedCategory === categoria
                    ? 'bg-verde-oscuro text-crema shadow-lg shadow-verde-oscuro/20'
                    : 'bg-white/80 text-verde-oscuro hover:bg-verde-oscuro/5 border border-verde-oscuro/20 hover:border-verde-oscuro/40'
                }`}
              >
                {categoria}
                {selectedCategory === categoria && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-dorado rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Productos organizados por categoría - Diseño artístico */}
      <section className="py-20 bg-crema">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((category, categoryIndex) => {
            const categoryProducts = productsByCategory[category] || [];
            if (categoryProducts.length === 0) return null;

            return (
              <div 
                key={category} 
                className={`mb-24 last:mb-0 ${categoryIndex > 0 ? 'pt-16 border-t border-verde-oscuro/10' : ''}`}
              >
                {/* Header de categoría - Diseño sofisticado */}
                <div className="relative mb-12">
                  {/* Fondo sutil con gradiente */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryAccent(category)} rounded-2xl -z-10`}></div>
                  
                  <div className="relative px-8 py-6">
                    {/* Número de categoría */}
                    <div className="flex items-center gap-6 mb-4">
                      <span className="font-playfair text-4xl md:text-5xl text-verde-oscuro/20 font-bold">
                        {(categoryIndex + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-verde-oscuro/20 to-transparent"></div>
                    </div>
                    
                    {/* Título de categoría */}
                    <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-verde-oscuro mb-2 tracking-tight">
                      {category}
                    </h2>
                    
                    {/* Subtítulo elegante */}
                    <p className="font-lato text-sm text-verde-oscuro/60 uppercase tracking-wider font-medium">
                      {categoryProducts.length} {categoryProducts.length === 1 ? 'producto disponible' : 'productos disponibles'}
                    </p>
                  </div>
                </div>

                {/* Grid de productos - Espaciado elegante */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {categoryProducts.map((product) => (
                    <ProductoCard
                      key={generateId(product.name)}
                      id={generateId(product.name)}
                      nombre={product.name}
                      precio={product.price}
                      categoria={product.category}
                    />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Sección de contacto - Diseño minimalista */}
          <div className="mt-32 pt-16 border-t-2 border-verde-oscuro/20">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-verde-oscuro mb-4">
                ¿Buscas algo especial?
              </h3>
              <p className="font-lato text-lg text-verde-oscuro/70 mb-8 leading-relaxed">
                Si no encuentras lo que buscas, estamos aquí para ayudarte. 
                Contáctanos y crearemos una solución personalizada para ti.
              </p>
              <a
                href="/contacto"
                className="inline-flex items-center gap-3 bg-verde-oscuro hover:bg-verde-oscuro/90 text-crema font-lato font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-verde-oscuro/20 hover:shadow-xl hover:shadow-verde-oscuro/30 hover:-translate-y-0.5"
              >
                <span>Contactar para pedido especial</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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


