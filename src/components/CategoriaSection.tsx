'use client';

import Link from 'next/link';
import { categories, products } from '@/data/products';

// Función para obtener la descripción de cada categoría
const getCategoryDescription = (category: string) => {
  const descriptions: Record<string, string> = {
    "Tlayudas": "Tlayudas artesanales de diferentes tamaños, base de la gastronomía oaxaqueña",
    "Carnes y Quesos": "Quesos tradicionales y carnes curadas con técnicas ancestrales",
    "Moles": "Moles tradicionales elaborados con recetas que han pasado de generación en generación",
    "Café y Chocolates": "Café de altura y chocolates artesanales mexicanos de la más alta calidad",
    "Mermeladas & Mieles": "Mermeladas naturales y mieles artesanales con sabores auténticos",
    "Chiles & Especias": "Chiles secos y especias tradicionales para dar sabor a tus platillos",
    "Dulces Tradicionales": "Dulces mexicanos artesanales que endulzan con tradición",
    "Otros": "Productos especiales y complementos para tu cocina tradicional",
    "Paquetes": "Paquetes especiales con todo lo necesario para disfrutar"
  };
  return descriptions[category] || "Productos artesanales de calidad";
};

// Función para obtener el color de fondo según la categoría
const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Tlayudas": "bg-gradient-to-br from-orange-500 to-orange-600",
    "Carnes y Quesos": "bg-gradient-to-br from-amber-600 to-amber-700",
    "Moles": "bg-gradient-to-br from-amber-900 to-amber-950",
    "Café y Chocolates": "bg-gradient-to-br from-green-600 to-green-700",
    "Mermeladas & Mieles": "bg-gradient-to-br from-yellow-400 to-yellow-500",
    "Chiles & Especias": "bg-gradient-to-br from-red-600 to-red-700",
    "Dulces Tradicionales": "bg-gradient-to-br from-pink-400 to-pink-500",
    "Otros": "bg-gradient-to-br from-emerald-500 to-emerald-600",
    "Paquetes": "bg-gradient-to-br from-blue-500 to-blue-600"
  };
  return colors[category] || "bg-gradient-to-br from-gray-400 to-gray-500";
};

// Función para contar productos por categoría
const getProductCount = (category: string) => {
  return products.filter(p => p.category === category).length;
};

// Seleccionar las 4 categorías más destacadas (con más productos)
const getFeaturedCategories = () => {
  const categoryCounts = categories.map(cat => ({
    name: cat,
    count: getProductCount(cat)
  }));
  
  // Ordenar por cantidad de productos y tomar las 4 principales
  return categoryCounts
    .sort((a, b) => b.count - a.count)
    .slice(0, 4)
    .map(item => item.name);
};

export default function CategoriaSection() {
  const featuredCategories = getFeaturedCategories();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de sección */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-verde-oscuro mb-4">
            Categorías Destacadas
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra colección de productos artesanales organizados por categorías
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((categoria) => {
            const productCount = getProductCount(categoria);
            
            return (
              <Link
                key={categoria}
                href={`/productos`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover border border-gray-100 h-full">
                  {/* Imagen de la categoría */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className={`w-full h-full ${getCategoryColor(categoria)} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-3 flex items-center justify-center border-2 border-white/30">
                          <span className="text-2xl font-bold font-playfair">
                            {categoria.charAt(0)}
                          </span>
                        </div>
                        <p className="text-sm font-medium opacity-90">{productCount} productos</p>
                      </div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-verde-oscuro mb-2 group-hover:text-dorado transition-smooth">
                      {categoria}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {getCategoryDescription(categoria)}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
