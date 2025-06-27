import React from "react";

function Descripcion() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <section className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-primary mb-4">
          Energía limpia para un futuro mejor
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Ofrecemos soluciones innovadoras que permiten a empresas y comunidades
          prosperar de forma sostenible.
        </p>
        <a
          href="#soluciones"
          className="inline-block mt-8 bg-primary hover:bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold transition"
        >
          Ver Soluciones
        </a>
      </section>
      <section id="soluciones" className="grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-primary hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold mb-2">Energía Solar</h3>
          <p className="text-gray-600 text-sm">
            Aprovecha la energía del sol con paneles solares de alta eficiencia
            y soluciones de almacenamiento.
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-blue-500 hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold mb-2">Energía Eólica</h3>
          <p className="text-gray-600 text-sm">
            Genera electricidad con soluciones de turbinas eólicas escalables y
            rentables.
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-teal-500 hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold mb-2">Redes Inteligentes</h3>
          <p className="text-gray-600 text-sm">
            Moderniza tu infraestructura energética con redes inteligentes que
            optimizan el consumo y reducen costos.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Descripcion;
