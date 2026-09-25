import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const datos = [
  { mes: "Ene", referencia: 20.28, comparativa: 16.22 },
  { mes: "Feb", referencia: 13.67, comparativa: 10.94 },
  { mes: "Mar", referencia: 20.28, comparativa: 16.22 },
  { mes: "Abr", referencia: 13.67, comparativa: 10.94 },
  { mes: "May", referencia: 32.27, comparativa: 25.82 },
  { mes: "Jun", referencia: 32.27, comparativa: 25.82 },
  { mes: "Jul", referencia: 32.27, comparativa: 25.82 },
  { mes: "Ago", referencia: 32.27, comparativa: 25.82 },
  { mes: "Sep", referencia: 32.27, comparativa: 25.82 },
  { mes: "Oct", referencia: 32.27, comparativa: 25.82 },
  { mes: "Nov", referencia: 104.43, comparativa: 83.54 },
  { mes: "Dic", referencia: 111.23, comparativa: 88.98 },
];

export default function Grafica() {
  return (
    <section className="bg-white px-6 py-16" aria-labelledby="analisis-real-title">
      <div className="mx-auto max-w-5xl rounded-3xl border border-violet-100 bg-violet-50 p-6 sm:p-10">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-800">Ejemplo visual</p>
          <h2 id="analisis-real-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Comparativa mensual de precios de luz
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Este gráfico está construido con valores de ejemplo introducidos manualmente. No representa tarifas contratadas, ofertas de Volt ni un ahorro real.
          </p>
        </div>

        <figure>
          <figcaption className="sr-only">
            Gráfico de líneas con valores ilustrativos por mes para una referencia y una comparativa.
          </figcaption>
          <div className="h-72 w-full sm:h-96" role="img" aria-label="Comparativa mensual ilustrativa en euros por megavatio hora. Consulta la tabla accesible debajo para ver los valores.">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={datos} accessibilityLayer margin={{ top: 10, right: 12, left: 0, bottom: 4 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
                <XAxis dataKey="mes" tick={{ fill: "#334155", fontSize: 12 }} />
                <YAxis unit=" €/MWh" width={78} tick={{ fill: "#334155", fontSize: 12 }} />
                <Tooltip formatter={(value) => [`${Number(value).toFixed(2)} €/MWh`]} />
                <Legend />
                <Line type="monotone" dataKey="referencia" name="Referencia (ejemplo)" stroke="#4f46e5" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="comparativa" name="Comparativa (ejemplo)" stroke="#0f766e" strokeWidth={3} strokeDasharray="6 4" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </figure>

        <details className="mt-6 rounded-xl border border-violet-200 bg-white p-4">
          <summary className="cursor-pointer font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-700">
            Consultar los valores del gráfico
          </summary>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Valores ilustrativos del gráfico en euros por megavatio hora</caption>
              <thead>
                <tr className="border-b border-slate-200 text-slate-800">
                  <th scope="col" className="px-3 py-2">Mes</th>
                  <th scope="col" className="px-3 py-2">Referencia de ejemplo (€/MWh)</th>
                  <th scope="col" className="px-3 py-2">Comparativa de ejemplo (€/MWh)</th>
                </tr>
              </thead>
              <tbody>
                {datos.map(({ mes, referencia, comparativa }) => (
                  <tr key={mes} className="border-b border-slate-100 text-slate-700">
                    <th scope="row" className="px-3 py-2 font-medium">{mes}</th>
                    <td className="px-3 py-2">{referencia.toFixed(2)}</td>
                    <td className="px-3 py-2">{comparativa.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </section>
  );
}
