export default function Grafica() {
  return (
    <section className="bg-white px-6 py-16" aria-labelledby="analisis-real-title">
      <div className="mx-auto max-w-4xl rounded-3xl border border-violet-100 bg-violet-50 p-8 text-center sm:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-800">Un análisis adaptado a tu negocio</p>
        <h2 id="analisis-real-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Cada factura cuenta una historia distinta
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-700">
          El consumo y las condiciones varían de una empresa a otra. Por eso revisamos tu factura de luz o gas y te explicamos las alternativas disponibles para tu caso, sin recurrir a ahorros estimados o comparativas genéricas.
        </p>
      </div>
    </section>
  );
}
