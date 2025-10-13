export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
  categoria: string;
  destacado?: boolean;
}

export const productosDestacados: Producto[] = [
  {
    id: 'mole-poblano-tradicional',
    nombre: 'Mole Poblano Tradicional',
    precio: 450,
    imagen: '/placeholder-mole.svg',
    descripcion: 'Mole poblano elaborado con más de 20 ingredientes siguiendo la receta tradicional de generaciones.',
    categoria: 'Moles y Salsas',
    destacado: true
  },
  {
    id: 'chocolate-oaxaqueno',
    nombre: 'Chocolate Oaxaqueño',
    precio: 280,
    imagen: '/placeholder-chocolate.svg',
    descripcion: 'Chocolate artesanal de Oaxaca con cacao criollo y especias tradicionales.',
    categoria: 'Dulces y Chocolates',
    destacado: true
  },
  {
    id: 'agua-jamaica',
    nombre: 'Agua de Jamaica Artesanal',
    precio: 120,
    imagen: '/placeholder-jamaica.svg',
    descripcion: 'Concentrado de flor de jamaica natural, perfecto para preparar agua fresca tradicional.',
    categoria: 'Bebidas Artesanales',
    destacado: true
  },
  {
    id: 'metate-piedra',
    nombre: 'Metate de Piedra Volcánica',
    precio: 850,
    imagen: '/placeholder-metate.svg',
    descripcion: 'Metate tradicional de piedra volcánica para moler maíz, cacao y especias.',
    categoria: 'Productos de Cocina',
    destacado: true
  },
  {
    id: 'salsa-verde-tomatillo',
    nombre: 'Salsa Verde de Tomatillo',
    precio: 180,
    imagen: '/placeholder-salsa-verde.svg',
    descripcion: 'Salsa verde tradicional con tomatillo, chile serrano y cilantro fresco.',
    categoria: 'Moles y Salsas',
    destacado: true
  },
  {
    id: 'cajeta-celaya',
    nombre: 'Cajeta de Celaya',
    precio: 320,
    imagen: '/placeholder-cajeta.svg',
    descripcion: 'Cajeta tradicional de leche de cabra, endulzada con piloncillo.',
    categoria: 'Dulces y Chocolates',
    destacado: true
  }
];
