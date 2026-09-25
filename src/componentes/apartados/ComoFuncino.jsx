export default function ComoFunciona() {
  const steps = [
    {
      title: "1. Visita personalizada",
      description:
        "Revisamos tus facturas de electricidad y gas y entendemos cómo consume tu negocio.",
    },
    {
      title: "2. Comparamos tarifas",
      description: "Comparamos alternativas de suministro que pueden encajar con tu empresa.",
    },
    {
      title: "3. Empiezas a ahorrar",
      description:
        "Te explicamos las condiciones y te acompañamos con la gestión si decides cambiar.",
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
          Un proceso sencillo para entender tus contratos de luz y gas y valorar tus opciones con claridad.
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
