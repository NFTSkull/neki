'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <div className="min-h-screen bg-crema">
      <Navbar />
      
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-verde-oscuro mb-6">
            Contacto
          </h1>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes alguna pregunta o quieres hacer un pedido especial? 
            Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* Información de contacto y formulario */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-verde-oscuro mb-8">
                Información de Contacto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dorado/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dorado text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-verde-oscuro mb-1">
                      Ubicación
                    </h3>
                    <p className="font-lato text-gray-600">
                      Ciudad de México, México<br />
                      Zona Centro Histórico
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dorado/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dorado text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-verde-oscuro mb-1">
                      Email
                    </h3>
                    <p className="font-lato text-gray-600">
                      info@nekikua.com<br />
                      pedidos@nekikua.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dorado/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dorado text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-verde-oscuro mb-1">
                      Teléfono
                    </h3>
                    <p className="font-lato text-gray-600">
                      +52 55 1234 5678<br />
                      +52 55 8765 4321
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dorado/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dorado text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-verde-oscuro mb-1">
                      Horarios
                    </h3>
                    <p className="font-lato text-gray-600">
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Sábados: 10:00 - 16:00<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="mt-8">
                <h3 className="font-playfair text-lg font-semibold text-verde-oscuro mb-4">
                  Síguenos en redes sociales
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-verde-oscuro rounded-full flex items-center justify-center text-white hover:bg-dorado transition-smooth">
                    <span className="text-sm">f</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-verde-oscuro rounded-full flex items-center justify-center text-white hover:bg-dorado transition-smooth">
                    <span className="text-sm">ig</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-verde-oscuro rounded-full flex items-center justify-center text-white hover:bg-dorado transition-smooth">
                    <span className="text-sm">wa</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-verde-oscuro mb-8">
                Envíanos un mensaje
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block font-lato font-medium text-verde-oscuro mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dorado focus:border-transparent transition-smooth"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-lato font-medium text-verde-oscuro mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dorado focus:border-transparent transition-smooth"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block font-lato font-medium text-verde-oscuro mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dorado focus:border-transparent transition-smooth"
                    placeholder="+52 55 1234 5678"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block font-lato font-medium text-verde-oscuro mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dorado focus:border-transparent transition-smooth"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-dorado hover:bg-dorado/90 text-white font-medium py-4 rounded-lg transition-smooth"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
