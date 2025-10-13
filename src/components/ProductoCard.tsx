import Link from 'next/link';
import Image from 'next/image';

interface ProductoCardProps {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
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
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover border border-gray-100">
      {/* Imagen del producto */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imagen}
          alt={nombre}
          fill
          className="object-cover transition-smooth hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-dorado text-white text-xs px-2 py-1 rounded-full font-medium">
            {categoria}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold text-verde-oscuro mb-2">
          {nombre}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {descripcion}
        </p>

        {/* Precio */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-libre text-2xl font-bold text-dorado">
            ${precio.toLocaleString('es-MX')}
          </span>
        </div>

        {/* Botón */}
        <Link
          href={`/productos/${id}`}
          className="block w-full bg-verde-oscuro hover:bg-verde-claro text-white text-center font-medium py-3 rounded-lg transition-smooth"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
