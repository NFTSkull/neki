import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CategoriaSection from '@/components/CategoriaSection';
import ProductoCard from '@/components/ProductoCard';
import Newsletter from '@/components/Newsletter';
import { products } from '@/data/products';

// Función para generar un ID único basado en el nombre
const generateId = (name: string) => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Seleccionar productos destacados de diferentes categorías
const getFeaturedProducts = () => {
  const featured: typeof products = [];
  
  // Seleccionar productos representativos de cada categoría principal
  const categoriesToFeature = ["Moles", "Café y Chocolates", "Carnes y Quesos", "Tlayudas", "Mermeladas & Mieles", "Chiles & Especias"];
  
  categoriesToFeature.forEach(category => {
    const categoryProducts = products.filter(p => p.category === category);
    if (categoryProducts.length > 0) {
      // Tomar el primer producto de cada categoría (o el más representativo)
      featured.push(categoryProducts[0]);
    }
  });
  
  // Limitar a 6 productos destacados
  return featured.slice(0, 6);
};

export default function Home() {
  const productosDestacados = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-crema">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Categorías Destacadas */}
      <CategoriaSection />

      {/* Productos Destacados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header mejorado */}
          <div className="text-center mb-16">
            <p className="font-lato text-sm text-dorado uppercase tracking-wider mb-3 font-medium">
              Selección Especial
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-verde-oscuro mb-5 tracking-tight">
              Productos Destacados
            </h2>
            <div className="w-20 h-0.5 bg-dorado mx-auto mb-6"></div>
            <p className="font-lato text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Descubre nuestros productos más populares, elaborados con técnicas tradicionales que han pasado de generación en generación
            </p>
          </div>

          {/* Grid de productos mejorado */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
            {productosDestacados.map((producto) => (
              <ProductoCard
                key={generateId(producto.name)}
                id={generateId(producto.name)}
                nombre={producto.name}
                precio={producto.price}
                categoria={producto.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Franja de cita cultural */}
      <section className="py-16 bg-verde-oscuro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-libre text-2xl md:text-3xl text-crema leading-relaxed">
            &ldquo;Pensar en sabores es pensar en la historia que existe detrás de ellos.&rdquo;
          </blockquote>
          <p className="font-playfair text-lg text-dorado mt-4">
            — Neki Kua
          </p>
        </div>
      </section>

      {/* Sección Conócenos */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-verde-oscuro via-transparent to-dorado"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-verde-oscuro mb-6">
                Conócenos
              </h2>
              <p className="font-lato text-lg text-gray-600 mb-6 leading-relaxed">
                Neki Kua nace del amor por preservar las tradiciones culinarias mexicanas. 
                Cada producto que ofrecemos cuenta una historia, cada sabor conecta generaciones.
              </p>
              <p className="font-lato text-lg text-gray-600 mb-8 leading-relaxed">
                Trabajamos directamente con artesanos y productores locales para 
                garantizar la autenticidad y calidad de cada ingrediente.
              </p>
              <a
                href="/nosotros"
                className="inline-flex items-center bg-dorado hover:bg-dorado/90 text-white font-medium px-8 py-4 rounded-full transition-smooth"
              >
                Leer más
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="relative">
              {/* Placeholder para imagen */}
              <div className="aspect-square bg-gradient-to-br from-verde-oscuro/20 to-dorado/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-verde-oscuro">
                  <div className="w-24 h-24 bg-dorado/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">🍃</span>
                  </div>
                  <p className="font-playfair text-lg">Imagen de artesanos</p>
                  <p className="text-sm opacity-70">Próximamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      <Footer />
    </div>
  );
}
