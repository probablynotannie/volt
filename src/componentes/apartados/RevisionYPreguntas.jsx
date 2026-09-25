import { FaFileInvoice, FaBolt, FaGasPump, FaScaleBalanced } from "react-icons/fa6";

const puntos = [
  {
    icon: FaFileInvoice,
    titulo: "Tu factura actual",
    texto: "La usamos para entender tu situación y revisar las condiciones de tu contrato.",
  },
  {
    icon: FaBolt,
    titulo: "Electricidad",
    texto: "Revisamos las opciones de suministro eléctrico disponibles para tu negocio.",
  },
  {
    icon: FaGasPump,
    titulo: "Gas",
    texto: "También podemos comparar alternativas para el suministro de gas.",
  },
  {
    icon: FaScaleBalanced,
    titulo: "Opciones y condiciones",
    texto: "Te explicamos las alternativas para que puedas valorar si te conviene cambiar.",
  },
];

const preguntas = [
  {
    pregunta: "¿Tengo que cambiar de compañía para pedir una revisión?",
    respuesta: "No. Revisamos tu situación y te explicamos las alternativas. Tú decides si quieres hacer un cambio.",
  },
  {
    pregunta: "¿Podéis revisar tanto la luz como el gas?",
    respuesta: "Sí. El servicio está dirigido a empresas que quieran revisar sus facturas de electricidad y gas.",
  },
  {
    pregunta: "¿Qué necesito para empezar?",
    respuesta: "Una factura reciente nos ayuda a conocer tu contrato actual. Puedes contactarnos y te indicaremos cómo compartirla.",
  },
  {
    pregunta: "¿La revisión tiene coste o compromiso?",
    respuesta: "La revisión se ofrece sin coste y sin compromiso. Puedes valorar las opciones antes de decidir.",
  },
  {
    pregunta: "¿Qué pasa si decido cambiar?",
    respuesta: "Si eliges una alternativa, te acompañamos durante la gestión del cambio.",
  },
];

export default function RevisionYPreguntas() {
  return (
    <>
      <section className="bg-white py-20" id="que-revisamos">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Luz y gas para tu empresa</p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">¿Qué revisamos?</h2>
            <p className="mt-4 leading-relaxed text-slate-600">Partimos de tu factura actual, comparamos alternativas y te explicamos las condiciones para que puedas decidir con claridad.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {puntos.map(({ icon: Icon, titulo, texto }) => (
              <article key={titulo} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-lg text-violet-800">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20" id="preguntas-frecuentes">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Resolvemos tus dudas</p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-3">
            {preguntas.map(({ pregunta, respuesta }) => (
              <details key={pregunta} className="group rounded-xl border border-slate-200 bg-white p-5 open:border-violet-200">
                <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-900 marker:hidden after:float-right after:-mr-8 after:text-violet-700 after:content-['+'] group-open:after:content-['−']">
                  {pregunta}
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
