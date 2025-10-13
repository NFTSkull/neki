import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-crema">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-verde-oscuro mb-6">
            Nuestra Historia
          </h1>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conoce la historia detrás de Neki Kua y nuestra pasión por preservar 
            las tradiciones culinarias mexicanas.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-verde-oscuro mb-6">
                Orígenes
              </h2>
              <p className="font-lato text-lg text-gray-600 mb-6 leading-relaxed">
                Neki Kua nació en 2020 del amor profundo por las tradiciones culinarias mexicanas. 
                Fundada por un grupo de chefs y antropólogos culinarios, nuestra misión es 
                preservar y compartir los sabores auténticos que han sido transmitidos de 
                generación en generación.
              </p>
              <p className="font-lato text-lg text-gray-600 leading-relaxed">
                El nombre "Neki Kua" proviene del náhuatl, significando "sabores que conectan", 
                reflejando nuestra filosofía de unir tradición y modernidad.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-verde-oscuro/20 to-dorado/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-verde-oscuro">
                  <div className="w-24 h-24 bg-dorado/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-verde-oscuro" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <p className="font-playfair text-lg">Tradición ancestral</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square bg-gradient-to-br from-dorado/20 to-verde-oscuro/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-verde-oscuro">
                  <div className="w-24 h-24 bg-verde-oscuro/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-verde-oscuro" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <p className="font-playfair text-lg">Comunidad de artesanos</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-playfair text-3xl font-bold text-verde-oscuro mb-6">
                Nuestra Misión
              </h2>
              <p className="font-lato text-lg text-gray-600 mb-6 leading-relaxed">
                Trabajamos directamente con más de 50 artesanos y productores locales 
                en diferentes regiones de México. Cada producto que ofrecemos cuenta 
                con certificación de origen y está elaborado siguiendo métodos tradicionales.
              </p>
              <p className="font-lato text-lg text-gray-600 leading-relaxed">
                Creemos que cada sabor tiene una historia que merece ser contada, 
                y cada ingrediente representa el trabajo y la pasión de quienes lo crean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-verde-oscuro mb-4">
              Nuestros Valores
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra identidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-dorado/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-verde-oscuro" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-verde-oscuro mb-4">
                Autenticidad
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                Cada producto mantiene su esencia original, respetando las recetas 
                y técnicas tradicionales que los hacen únicos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-verde-oscuro/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-verde-oscuro" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-verde-oscuro mb-4">
                Comercio Justo
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                Trabajamos directamente con productores, asegurando precios justos 
                y condiciones dignas para todas las comunidades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-dorado/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-verde-oscuro" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-verde-oscuro mb-4">
                Sustentabilidad
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                Promovemos prácticas agrícolas sostenibles y el uso de ingredientes 
                orgánicos y locales siempre que es posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
