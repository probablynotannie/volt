export default function ComoFunciona() {
  return (
    <section className="bg-gray-50 py-16" id="como-funciona">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          ¿Cómo funciona?
        </h2>
        <p className="text-gray-600 mb-12">
          Un asesor visita tu negocio, revisa tu tarifa actual y te propone una
          mejor opción sin compromiso.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              1. Visita personalizada
            </h3>
            <p className="text-sm text-gray-700">
              Un experto analiza tu situación energética y recopila tu factura.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              2. Comparamos tarifas
            </h3>
            <p className="text-sm text-gray-700">
              Buscamos la mejor oferta entre compañías confiables.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              3. Empiezas a ahorrar
            </h3>
            <p className="text-sm text-gray-700">
              Nos encargamos de todo el papeleo. Tú empiezas a pagar menos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
