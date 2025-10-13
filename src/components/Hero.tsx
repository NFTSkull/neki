import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-crema artisan-pattern">
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-crema/80 to-crema/95"></div>
      
      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Texto principal */}
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-verde-oscuro mb-6 leading-tight">
          Sabores con{' '}
          <span className="text-dorado">historia</span>
        </h1>
        
        <p className="font-libre text-xl md:text-2xl text-verde-oscuro/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Productos con alma mexicana
        </p>
        
        <p className="font-lato text-lg text-verde-oscuro/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          Descubre la tradición artesanal que conecta generaciones. 
          Moles, dulces, bebidas y utensilios de cocina que cuentan 
          la historia de México en cada sabor.
        </p>

        {/* Botón CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/productos"
            className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-full transition-smooth shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explorar productos
          </Link>
          <Link
            href="/nosotros"
            className="border-2 border-verde-oscuro text-verde-oscuro hover:bg-verde-oscuro hover:text-white font-medium px-8 py-4 rounded-full transition-smooth"
          >
            Conocer nuestra historia
          </Link>
        </div>

        {/* Elementos decorativos sutiles */}
        <div className="absolute top-4 -left-6 w-20 h-20 border border-dorado/20 rounded-full opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border border-verde-oscuro/20 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 -left-2 w-8 h-8 bg-dorado/10 rounded-full opacity-70"></div>
        <div className="absolute top-1/3 -right-2 w-12 h-12 bg-verde-oscuro/5 rounded-full opacity-60"></div>
      </div>

      {/* Patrón de fondo adicional */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-verde-oscuro/5 to-transparent"></div>
    </section>
  );
}
