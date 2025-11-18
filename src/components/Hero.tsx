import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-verde-oscuro via-verde-oscuro/98 to-verde-oscuro overflow-hidden">
      {/* Patrón decorativo sutil */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(225, 155, 62, 0.4) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dorado/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dorado/20 to-transparent"></div>
      
      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Subtítulo elegante */}
        <p className="font-lato text-sm md:text-base text-dorado/90 uppercase tracking-[0.2em] mb-6 font-medium">
          Tradición Artesanal Mexicana
        </p>
        
        {/* Texto principal - Tipografía más auténtica */}
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-crema mb-6 leading-[1.1] tracking-tight">
          Sabores con{' '}
          <span className="text-dorado italic">historia</span>
        </h1>
        
        <p className="font-libre text-2xl md:text-3xl lg:text-4xl text-crema/95 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
          Productos con alma mexicana
        </p>
        
        {/* Descripción mejorada */}
        <p className="font-lato text-base md:text-lg lg:text-xl text-crema/85 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Descubre la tradición artesanal que conecta generaciones. 
          Moles, dulces, bebidas y utensilios de cocina que cuentan 
          la historia de México en cada sabor.
        </p>

        {/* Botones CTA mejorados */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/productos"
            className="group bg-dorado hover:bg-dorado/90 text-verde-oscuro font-lato font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-dorado/30 hover:shadow-xl hover:shadow-dorado/40 hover:-translate-y-1 text-base md:text-lg"
          >
            <span className="flex items-center gap-2">
              Explorar productos
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
          <Link
            href="/nosotros"
            className="group border-2 border-crema/30 hover:border-crema text-crema hover:bg-crema/10 font-lato font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base md:text-lg backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              Conocer nuestra historia
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-crema to-transparent"></div>
    </section>
  );
}
