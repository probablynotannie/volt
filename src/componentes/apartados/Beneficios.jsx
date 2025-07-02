export default function Beneficios() {
  const beneficios = [
    {
      titulo: "Asesoramiento personal",
      descripcion:
        "Te visitamos en tu negocio y te explicamos todo de forma sencilla.",
      imagen: "/negocio.jpeg",
    },
    {
      titulo: "Sin coste para ti",
      descripcion: "Nuestro servicio es gratuito y sin compromiso.",
      imagen: "/cliente.webp",
    },
    {
      titulo: "Ahorro garantizado",
      descripcion: "Si no te ofrecemos algo mejor, no tienes que cambiar.",
      imagen:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gray-100" id="beneficios">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Beneficios de elegirnos
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {beneficios.map((b, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={b.imagen}
                  alt={b.titulo}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {b.titulo}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {b.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
