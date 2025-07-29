export default function ComoFunciona() {
  const steps = [
    {
      title: "1. Visita personalizada",
      description:
        "Un experto analiza tu situación energética y recopila tu factura.",
    },
    {
      title: "2. Comparamos tarifas",
      description: "Buscamos la mejor oferta entre compañías confiables.",
    },
    {
      title: "3. Empiezas a ahorrar",
      description:
        "Nos encargamos de todo el papeleo. Tú solo disfrutas del ahorro.",
    },
  ];

  return (
    <section
      aria-label="Sección - proceso de ahorro"
      className="bg-white py-20"
      id="como-funciona"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">
          ¿Cómo funciona?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-base mb-12">
          Con nuestro proceso simple y transparente, cambiar a una tarifa mejor
          es rápido y sin complicaciones.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
