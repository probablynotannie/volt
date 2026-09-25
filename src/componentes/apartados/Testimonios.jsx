import { FaFileInvoice, FaSearch, FaClipboardCheck } from "react-icons/fa";

const pasos = [
  {
    icon: FaFileInvoice,
    numero: "01",
    titulo: "Revisamos tu factura",
    texto: "Entendemos tu consumo y las condiciones de tu contrato actual.",
  },
  {
    icon: FaSearch,
    numero: "02",
    titulo: "Comparamos opciones",
    texto: "Buscamos alternativas del mercado que encajen con tu negocio.",
  },
  {
    icon: FaClipboardCheck,
    numero: "03",
    titulo: "Tú decides con claridad",
    texto: "Te explicamos las opciones y, si eliges cambiar, te acompañamos en el proceso.",
  },
];

export default function Testimonios() {
  return (
    <section className="bg-slate-950 py-20 text-white" id="servicio">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
            Un proceso claro, de principio a fin
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">Así te ayudamos</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Analizamos tu situación y te presentamos opciones para que puedas decidir con toda la información.
          </p>
        </div>

        <ol className="grid gap-5 md:grid-cols-3">
          {pasos.map(({ icon: Icon, numero, titulo, texto }) => (
            <li key={numero} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <div className="mb-7 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/15 text-xl text-violet-200">
                  <Icon aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold tracking-widest text-slate-500">{numero}</span>
              </div>
              <h3 className="text-xl font-semibold">{titulo}</h3>
              <p className="mt-3 leading-relaxed text-slate-300">{texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
