import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductoCard from '@/components/ProductoCard';
import { productosDestacados } from '@/data/productos';

export default function ProductosPage() {
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
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['Todos', 'Moles y Salsas', 'Dulces y Chocolates', 'Bebidas Artesanales', 'Productos de Cocina'].map((categoria) => (
              <button
                key={categoria}
                className={`px-6 py-3 rounded-full font-medium transition-smooth ${
                  categoria === 'Todos'
                    ? 'bg-verde-oscuro text-white'
                    : 'bg-white text-verde-oscuro hover:bg-verde-oscuro hover:text-white border border-verde-oscuro'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de productos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productosDestacados.map((producto) => (
              <ProductoCard
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                precio={producto.precio}
                imagen={producto.imagen}
                descripcion={producto.descripcion}
                categoria={producto.categoria}
              />
            ))}
          </div>

          {/* Mensaje de más productos */}
          <div className="text-center mt-16">
            <p className="font-lato text-lg text-gray-600 mb-6">
              ¿No encuentras lo que buscas?
            </p>
            <button className="bg-dorado hover:bg-dorado/90 text-white font-medium px-8 py-4 rounded-full transition-smooth">
              Contactar para pedido especial
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
