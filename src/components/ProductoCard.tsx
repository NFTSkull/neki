import Image from 'next/image';

interface ProductoCardProps {
  id?: string;
  nombre: string;
  precio: number;
  imagen?: string;
  descripcion?: string;
  categoria: string;
}

export default function ProductoCard({ 
  id, 
  nombre, 
  precio, 
  imagen, 
  descripcion
}: ProductoCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-verde-oscuro/10 hover:border-verde-oscuro/30 transition-all duration-500 hover:shadow-2xl hover:shadow-verde-oscuro/10">
      {/* Imagen del producto (opcional) */}
      {imagen && (
        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-verde-oscuro/5 to-crema">
          <Image
            src={imagen}
            alt={nombre}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay sutil al hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-verde-oscuro/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      )}

      {/* Contenido */}
      <div className="relative p-6 bg-white">
        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-verde-oscuro/10 to-transparent"></div>
        
        {/* Nombre del producto */}
        <h3 className="font-playfair text-xl md:text-2xl font-semibold text-verde-oscuro mb-3 leading-tight group-hover:text-verde-oscuro/90 transition-colors duration-300">
          {nombre}
        </h3>
        
        {/* Descripción (si existe) */}
        {descripcion && (
          <p className="font-lato text-sm text-verde-oscuro/60 mb-5 line-clamp-2 leading-relaxed">
            {descripcion}
          </p>
        )}

        {/* Precio y botón */}
        <div className="flex items-end justify-between gap-4 pt-4 border-t border-verde-oscuro/5">
          {/* Precio */}
          <div className="flex flex-col">
            <span className="font-libre text-2xl md:text-3xl font-bold text-dorado leading-none">
              ${precio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className="font-lato text-xs text-verde-oscuro/50 uppercase tracking-wider mt-1">
              MXN
            </span>
          </div>

          {/* Botón elegante */}
          {id ? (
            <a
              href={`/productos/${id}`}
              className="flex-shrink-0 px-5 py-2.5 bg-verde-oscuro hover:bg-verde-oscuro/90 text-crema font-lato text-sm font-medium rounded-full transition-all duration-300 shadow-md shadow-verde-oscuro/20 hover:shadow-lg hover:shadow-verde-oscuro/30 hover:-translate-y-0.5 group/btn"
            >
              <span className="flex items-center gap-2">
                Ver más
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ) : (
            <button className="flex-shrink-0 px-5 py-2.5 bg-verde-oscuro hover:bg-verde-oscuro/90 text-crema font-lato text-sm font-medium rounded-full transition-all duration-300 shadow-md shadow-verde-oscuro/20 hover:shadow-lg hover:shadow-verde-oscuro/30 hover:-translate-y-0.5 group/btn">
              <span className="flex items-center gap-2">
                Agregar
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Efecto de brillo sutil al hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-dorado/5 via-transparent to-transparent"></div>
      </div>
    </div>
  );
}

