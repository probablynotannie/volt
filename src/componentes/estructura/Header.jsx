import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-purple-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* <div className="text-2xl font-extrabold tracking-tight select-none cursor-default">
          ⚡ Volt
        </div> */}
        <nav className="space-x-6 text-sm font-medium">
          <a
            href="/"
            className="hover:underline hover:text-gray-300 transition"
          >
            Inicio
          </a>
          <a
            href="#soluciones"
            className="hover:underline hover:text-gray-300 transition"
          >
            Soluciones
          </a>
          <a
            href="#nosotros"
            className="hover:underline hover:text-gray-300 transition"
          >
            Nosotros
          </a>
          <a
            href="#contacto"
            className="hover:underline hover:text-gray-300 transition"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
