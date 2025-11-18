'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Precargar el video
      video.load();
      
      // Manejar cuando el video está listo
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        video.play().catch(() => {
          // Silenciar errores de autoplay
        });
      };

      video.addEventListener('canplaythrough', handleCanPlay);
      
      return () => {
        video.removeEventListener('canplaythrough', handleCanPlay);
      };
    }
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video de fondo - Cubre toda la pantalla */}
      <div className="absolute inset-0 z-0">
        {/* Fondo de respaldo mientras carga el video */}
        <div className={`absolute inset-0 bg-gradient-to-br from-verde-oscuro via-verde-oscuro/95 to-verde-oscuro transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
        
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            opacity: isVideoLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay oscuro múltiple para máxima legibilidad */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-verde-oscuro/95 via-verde-oscuro/92 to-verde-oscuro/95"></div>
      </div>
      
      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dorado/30 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dorado/20 to-transparent z-10"></div>
      
      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Subtítulo elegante */}
        <p className="font-lato text-sm md:text-base text-white uppercase tracking-[0.2em] mb-6 font-medium drop-shadow-lg">
          Tradición Artesanal Mexicana
        </p>
        
        {/* Texto principal - Tipografía más auténtica */}
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
          Sabores con{' '}
          <span className="text-white italic drop-shadow-2xl">historia</span>
        </h1>
        
        <p className="font-libre text-2xl md:text-3xl lg:text-4xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-xl">
          Productos con alma mexicana
        </p>
        
        {/* Descripción mejorada */}
        <p className="font-lato text-base md:text-lg lg:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
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
            className="group border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-lato font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base md:text-lg backdrop-blur-sm"
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
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-crema to-transparent z-10"></div>
    </section>
  );
}
