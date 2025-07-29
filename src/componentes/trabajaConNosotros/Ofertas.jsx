import { Helmet } from "react-helmet";
function OfertaCard({ titulo, descripcion }) {
  return (
    <article
      tabIndex={0}
      aria-labelledby={`titulo-${titulo}`}
      className="bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 text-white rounded-3xl p-8 shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl outline-none"
    >
      <h2
        id={`titulo-${titulo}`}
        className="text-2xl font-extrabold mb-4 drop-shadow-lg"
      >
        {titulo}
      </h2>
      <p className="text-white/90 mb-6 leading-relaxed">{descripcion}</p>
      <button
        type="button"
        className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-indigo-50 transition-colors"
      >
        Aplicar ahora
      </button>
    </article>
  );
}

function Ofertas() {
  const ofertas = [
    {
      titulo: "Administrativo/a",
      descripcion:
        "Buscamos personal para tareas administrativas, gestión de documentos y atención al cliente.",
    },
    {
      titulo: "Consultoría",
      descripcion:
        "Incorpórate a nuestro equipo de consultores para asesorar a empresas en procesos estratégicos.",
    },
    {
      titulo: "Colaborador",
      descripcion:
        "Colabora con nosotros para poder ofrecer tu compañia a nuestros clientes.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ofertas de Trabajo | Únete a Nuestro Equipo</title>
        <meta
          name="description"
          content="Explora nuestras ofertas de trabajo para posiciones administrativas, consultoría y colaboración. ¡Aplica hoy y forma parte de nuestro equipo!"
        />
        <meta
          property="og:title"
          content="Ofertas de Trabajo | Únete a Nuestro Equipo"
        />
        <meta
          property="og:description"
          content="Explora nuestras ofertas de trabajo para posiciones administrativas, consultoría y colaboración. ¡Aplica hoy y forma parte de nuestro equipo!"
        />
      </Helmet>
      <main className="container mx-auto px-6 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-3 text-gray-900 dark:text-white">
            ¿Te gustaría trabajar con nosotros?
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Actualmente disponemos de las siguientes ofertas de trabajo:
          </p>
          <hr className="mt-6 border-gray-300 max-w-md mx-auto" />
        </header>

        <section
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-8"
          aria-label="Listado de ofertas de trabajo"
        >
          {ofertas.map(({ titulo, descripcion }) => (
            <OfertaCard
              key={titulo}
              titulo={titulo}
              descripcion={descripcion}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Ofertas;
