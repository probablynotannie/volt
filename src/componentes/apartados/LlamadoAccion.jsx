import { useState } from "react";
import Contacto from "../estructura/Contacto";
export default function LlamadoAccion() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-primary text-white py-16 text-center px-7">
        <h2 className="text-3xl font-bold mb-4">
          ¿Quieres ahorrar en tu factura?
        </h2>
        <p className="text-lg mb-8">
          Nuestro equipo puede ayudarte a encontrar una mejor tarifa hoy mismo.
        </p>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Solicita una visita gratuita
        </button>
      </section>
      <Contacto modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}
