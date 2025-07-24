import React from "react";

function Ofertas() {
  const ofertas = [
    {
      titulo: "Administrativo/a",
      descripcion:
        "Buscamos personal para tareas administrativas, gestión de documentos y atención al cliente.",
    },
    {
      titulo: "Consultoría",
      descripcion:
        "Incorpórate a nuestro equipo de consultores para asesorar a empresas en procesos estratégicos.",
    },
    {
      titulo: "Colaborador",
      descripcion:
        "Colabora con nosotros para poder ofrecer tu compañia a nuestros clientes.",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          ¿Te gustaría trabajar con nosotros?
        </h1>
        <p className="text-slate-600">
          Actualmente disponemos de las siguientes ofertas de trabajo:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {ofertas.map((oferta, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{oferta.titulo}</h2>
            <p className="text-slate-600">{oferta.descripcion}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Ofertas;
