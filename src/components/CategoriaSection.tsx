import Link from 'next/link';

interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  color: string;
}

const categorias: Categoria[] = [
  {
    id: 'moles-salsas',
    nombre: 'Moles y Salsas',
    descripcion: 'Salsas tradicionales con recetas ancestrales',
    imagen: '/placeholder-moles.jpg',
    color: 'bg-verde-oscuro'
  },
  {
    id: 'dulces-chocolates',
    nombre: 'Dulces y Chocolates',
    descripcion: 'Dulces artesanales y chocolates mexicanos',
    imagen: '/placeholder-dulces.jpg',
    color: 'bg-dorado'
  },
  {
    id: 'bebidas',
    nombre: 'Bebidas Artesanales',
    descripcion: 'Aguas frescas y bebidas tradicionales',
    imagen: '/placeholder-bebidas.jpg',
    color: 'bg-verde-claro'
  },
  {
    id: 'utensilios',
    nombre: 'Productos de Cocina',
    descripcion: 'Utensilios e ingredientes tradicionales',
    imagen: '/placeholder-utensilios.jpg',
    color: 'bg-dorado-claro'
  }
];

export default function CategoriaSection() {
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
          {categorias.map((categoria) => (
            <Link
              key={categoria.id}
              href={`/productos?categoria=${categoria.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover border border-gray-100">
                {/* Imagen de la categoría */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  {/* Placeholder hasta tener imágenes reales */}
                  <div className={`w-full h-full ${categoria.color} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl font-bold">
                          {categoria.nombre.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm opacity-80">Próximamente</p>
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-verde-oscuro mb-2 group-hover:text-dorado transition-smooth">
                    {categoria.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {categoria.descripcion}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
