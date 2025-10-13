'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para suscribir al newsletter
    setIsSubscribed(true);
    setEmail('');
    
    // Resetear el mensaje después de 3 segundos
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-verde-oscuro">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-crema mb-4">
            Mantente Conectado
          </h2>
          <p className="font-lato text-lg text-crema mb-8 leading-relaxed">
            Recibe recetas tradicionales, historias culturales y promociones exclusivas 
            directamente en tu correo electrónico.
          </p>

          {isSubscribed ? (
            <div className="bg-dorado text-white px-6 py-4 rounded-lg font-medium">
              ¡Gracias por suscribirte! Te enviaremos contenido especial muy pronto.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-dorado focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg transition-smooth whitespace-nowrap"
              >
                Suscribirse
              </button>
            </form>
          )}

          <p className="text-crema text-sm mt-4">
            No compartimos tu información. Cancela cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
}
