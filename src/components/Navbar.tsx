'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-crema border-b border-verde-oscuro/10 sticky top-0 z-50 backdrop-blur-sm bg-crema/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo a la izquierda */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.jpg"
                alt="Neki Kua"
                width={40}
                height={40}
                className="rounded-full border-2 border-dorado"
              />
              <span className="font-playfair text-xl text-verde-oscuro font-bold">
                Neki Kua
              </span>
            </Link>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-verde-oscuro hover:text-dorado transition-smooth font-medium"
              >
                Inicio
              </Link>
              <Link
                href="/productos"
                className="text-verde-oscuro hover:text-dorado transition-smooth font-medium"
              >
                Productos
              </Link>
              <Link
                href="/nosotros"
                className="text-verde-oscuro hover:text-dorado transition-smooth font-medium"
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className="text-verde-oscuro hover:text-dorado transition-smooth font-medium"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-verde-oscuro hover:text-dorado focus:outline-none focus:text-dorado transition-smooth"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-crema border-t border-verde-oscuro/10">
              <Link
                href="/"
                className="text-verde-oscuro hover:text-dorado block px-3 py-2 text-base font-medium transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/productos"
                className="text-verde-oscuro hover:text-dorado block px-3 py-2 text-base font-medium transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link
                href="/nosotros"
                className="text-verde-oscuro hover:text-dorado block px-3 py-2 text-base font-medium transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className="text-verde-oscuro hover:text-dorado block px-3 py-2 text-base font-medium transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
