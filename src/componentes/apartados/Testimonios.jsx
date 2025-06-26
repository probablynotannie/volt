export default function Testimonios() {
  return (
    <section className="bg-gray-100 py-16" id="testimonios">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Clientes satisfechos</h2>
        <p className="text-gray-600 mb-12">
          Historias reales de bares, comercios y empresas que ahora pagan menos por su energía.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700 italic">“Vinieron a mi bar, me explicaron todo con claridad y ahora ahorro más de 40€ al mes.”</p>
            <p className="mt-4 text-sm font-semibold text-primary">– Marta G., Bar en Madrid</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700 italic">“No tenía tiempo para cambiar de compañía, pero ellos lo gestionaron todo. ¡Un 10!”</p>
            <p className="mt-4 text-sm font-semibold text-primary">– Carlos R., Panadería en Valencia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
