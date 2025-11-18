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
    <div className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-verde-oscuro/30 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      {/* Imagen del producto (opcional) */}
      {imagen && (
        <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
          <Image
            src={imagen}
            alt={nombre}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-4">
        {/* Nombre del producto */}
        <h3 className="font-lato text-sm font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-verde-oscuro transition-colors duration-200">
          {nombre}
        </h3>
        
        {/* Descripción (si existe) */}
        {descripcion && (
          <p className="font-lato text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed flex-shrink-0">
            {descripcion}
          </p>
        )}

        {/* Precio y botón - Espaciado automático */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between gap-2">
            {/* Precio */}
            <div className="flex flex-col">
              <span className="font-lato text-lg font-bold text-verde-oscuro leading-none">
                ${precio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>

            {/* Botón minimalista */}
            {id ? (
              <a
                href={`/productos/${id}`}
                className="flex-shrink-0 px-3 py-1.5 bg-verde-oscuro hover:bg-verde-oscuro/90 text-white font-lato text-xs font-medium rounded-md transition-all duration-200 hover:shadow-sm"
              >
                Ver
              </a>
            ) : (
              <button className="flex-shrink-0 px-3 py-1.5 bg-verde-oscuro hover:bg-verde-oscuro/90 text-white font-lato text-xs font-medium rounded-md transition-all duration-200 hover:shadow-sm">
                +
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

