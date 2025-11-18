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
  descripcion, 
  categoria 
}: ProductoCardProps) {
  // Función para obtener un color de fondo según la categoría
  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      "Tlayudas": "bg-orange-100 text-orange-800",
      "Carnes y Quesos": "bg-amber-100 text-amber-800",
      "Moles": "bg-amber-900 text-amber-100",
      "Café y Chocolates": "bg-green-100 text-green-800",
      "Mermeladas & Mieles": "bg-yellow-100 text-yellow-800",
      "Chiles & Especias": "bg-red-100 text-red-800",
      "Dulces Tradicionales": "bg-pink-100 text-pink-800",
      "Otros": "bg-emerald-100 text-emerald-800",
      "Paquetes": "bg-blue-100 text-blue-800"
    };
    return colors[cat] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover border border-gray-100">
      {/* Imagen del producto (opcional) */}
      {imagen && (
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <Image
            src={imagen}
            alt={nombre}
            fill
            className="object-cover transition-smooth hover:scale-105"
          />
          <div className="absolute top-3 left-3 z-10">
            <span className={`${getCategoryColor(categoria)} text-xs px-2 py-1 rounded-full font-medium`}>
              {categoria}
            </span>
          </div>
        </div>
      )}

      {/* Contenido */}
      <div className={`p-6 ${!imagen ? 'pt-6' : ''}`}>
        {!imagen && (
          <div className="mb-3">
            <span className={`${getCategoryColor(categoria)} text-xs px-2 py-1 rounded-full font-medium inline-block`}>
              {categoria}
            </span>
          </div>
        )}
        
        <h3 className="font-playfair text-xl font-semibold text-verde-oscuro mb-2">
          {nombre}
        </h3>
        
        {descripcion && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {descripcion}
          </p>
        )}

        {/* Precio */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-libre text-2xl font-bold text-dorado">
            ${precio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>

        {/* Botón */}
        {id ? (
          <a
            href={`/productos/${id}`}
            className="block w-full bg-verde-oscuro hover:bg-verde-claro text-white text-center font-medium py-3 rounded-lg transition-smooth"
          >
            Ver más
          </a>
        ) : (
          <button className="block w-full bg-verde-oscuro hover:bg-verde-claro text-white text-center font-medium py-3 rounded-lg transition-smooth">
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
}

