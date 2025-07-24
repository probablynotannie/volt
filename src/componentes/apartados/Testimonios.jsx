import { useEffect, useRef } from "react";

export default function Testimonios() {
  const sliderRef = useRef(null);
  const scrollPosition = useRef(0);

  const clientes = [
    {
      persona: "Marta G., Dueña de Bar La Plaza (Madrid)",
      texto:
        "“Vinieron a mi bar, me explicaron todo con claridad y ahora ahorro más de 40€ al mes.”",
    },
    {
      persona: "David S., Gerente de Gimnasio VitalFit",
      texto:
        "“No tenía tiempo para cambiar de compañía, pero ellos lo gestionaron todo. ¡Un 10!”",
    },
    {
      persona: "Lucía R., Responsable de Oficina LegalConsult",
      texto:
        "“Antes pagábamos más de 800€/mes. Ahora hemos reducido la factura un 25% sin cambiar de proveedor.”",
    },
    {
      persona: "Jorge M., CEO de Panadería Artesana Madrid",
      texto:
        "“El proceso fue rápido y totalmente personalizado. Nos sorprendió el ahorro.”",
    },
    {
      persona: "Ana P., Administración de Clínica Dental SmilePro",
      texto:
        "“Gracias a ellos ahora tenemos más control sobre nuestro gasto energético. Muy recomendable.”",
    },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId;

    const scroll = () => {
      if (!slider) return;

      scrollPosition.current += 0.8; 
      if (scrollPosition.current >= slider.scrollWidth / 2) {
        scrollPosition.current = 0;
      }

      slider.scrollLeft = scrollPosition.current;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="bg-gray-100 py-20 overflow-hidden" id="testimonios">
      <div className="mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-4">
          Empresas que ya confían en nosotros
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Conoce algunos de los negocios que ya están ahorrando cientos de euros
          cada mes gracias a nuestras soluciones energéticas personalizadas.
        </p>

        <div className="flex gap-6 w-full overflow-x-hidden" ref={sliderRef}>
          {[...clientes, ...clientes].map((cliente, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-sm bg-white p-6 rounded-xl shadow-md flex-shrink-0"
            >
              <p className="text-gray-700 italic">"{cliente.texto}"</p>
              <p className="mt-4 font-semibold text-primary">
                {cliente.persona}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
