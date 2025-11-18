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

// Función para obtener el emoji de la categoría
const getCategoryEmoji = (category: string) => {
  const emojis: Record<string, string> = {
    "Tlayudas": "🟧",
    "Carnes y Quesos": "🟫",
    "Moles": "🟤",
    "Café y Chocolates": "🟩",
    "Mermeladas & Mieles": "🟨",
    "Chiles & Especias": "🌶️",
    "Dulces Tradicionales": "🍬",
    "Otros": "🍃",
    "Paquetes": "🧺"
  };
  return emojis[category] || "📦";
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
      
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-verde-oscuro mb-6">
            Nuestros Productos
          </h1>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra colección completa de productos artesanales mexicanos, 
            cuidadosamente seleccionados para ofrecerte los sabores auténticos de México.
          </p>
        </div>
      </section>

      {/* Filtros de categoría */}
      <section className="py-8 bg-gray-50 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['Todos', ...categories].map((categoria) => (
              <button
                key={categoria}
                onClick={() => setSelectedCategory(categoria)}
                className={`px-6 py-3 rounded-full font-medium transition-smooth ${
                  selectedCategory === categoria
                    ? 'bg-verde-oscuro text-white'
                    : 'bg-white text-verde-oscuro hover:bg-verde-oscuro hover:text-white border border-verde-oscuro'
                }`}
              >
                {categoria === 'Todos' ? categoria : `${getCategoryEmoji(categoria)} ${categoria}`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Productos organizados por categoría */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((category) => {
            const categoryProducts = productsByCategory[category] || [];
            if (categoryProducts.length === 0) return null;

            return (
              <div key={category} className="mb-16 last:mb-0">
                {/* Título de categoría */}
                <div className="mb-8 pb-4 border-b-2 border-verde-oscuro">
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-verde-oscuro">
                    {getCategoryEmoji(category)} {category}
                  </h2>
                  <p className="font-lato text-gray-600 mt-2">
                    {categoryProducts.length} {categoryProducts.length === 1 ? 'producto' : 'productos'}
                  </p>
                </div>

                {/* Grid de productos de la categoría */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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

          {/* Mensaje de contacto */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <p className="font-lato text-lg text-gray-600 mb-6">
              ¿No encuentras lo que buscas?
            </p>
            <a
              href="/contacto"
              className="inline-block bg-dorado hover:bg-dorado/90 text-white font-medium px-8 py-4 rounded-full transition-smooth"
            >
              Contactar para pedido especial
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


