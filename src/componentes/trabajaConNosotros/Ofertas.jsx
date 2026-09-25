import Seo from "../estructura/Seo";
import { FaArrowRight, FaRegLightbulb, FaUsers, FaHandshake } from "react-icons/fa";

const areas = [
  {
    icon: FaUsers,
    title: "Atención y asesoramiento",
    text: "Ayudar a empresas a entender sus contratos y sus opciones de suministro.",
  },
  {
    icon: FaRegLightbulb,
    title: "Análisis energético",
    text: "Revisar facturas de electricidad y gas con atención al detalle.",
  },
  {
    icon: FaHandshake,
    title: "Desarrollo de negocio",
    text: "Crear relaciones de confianza con empresas y profesionales.",
  },
];

function Ofertas() {
  return (
    <>
      <Seo
        title="Trabaja con nosotros | Volt Energía"
        description="¿Te interesa el sector energético y ayudar a empresas? Envíanos tu candidatura espontánea para trabajar con Volt Energía."
        canonical="https://volt-green.vercel.app/trabajaConNosotros"
      />
      <main id="main-content">
        <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-primary px-6 py-20 text-center text-white sm:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">Únete a Volt</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Trabaja con nosotros
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            Nos dedicamos a ayudar a empresas a revisar sus facturas de luz y gas.
            Si te interesa el sector energético y el trato con empresas, nos
            encantará conocerte.
          </p>
          <a
            href="mailto:voltenergia@voltenergia.com?subject=Candidatura%20espont%C3%A1nea%20-%20Volt%20Energ%C3%ADa"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-950"
          >
            Enviar candidatura <FaArrowRight aria-hidden="true" />
          </a>
          <p className="mt-3 text-sm text-slate-300">Candidatura espontánea · No implica que haya una vacante abierta</p>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-slate-900">Áreas en las que podrías aportar</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Estamos abiertos a conocer perfiles con experiencia e interés en estas áreas.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {areas.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-xl text-violet-800">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
              Para presentarte, escribe a <a className="font-medium text-violet-800 underline" href="mailto:voltenergia@voltenergia.com">voltenergia@voltenergia.com</a> con tu CV y unas líneas sobre el área que te interesa. No envíes información sensible que no sea necesaria para tu candidatura.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Ofertas;
