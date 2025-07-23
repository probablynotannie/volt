import { motion } from "framer-motion";

export default function PartnersSection() {
  const empresas = [
    { nombre: "BASER", logo: "/empresas/baser.png" },
    { nombre: "Naturgy PYMEs", logo: "/empresas/naturgy.png" },
    { nombre: "Repsol Luz", logo: "/empresas/repsol.jpg" },
    { nombre: "Iberdrola Empresas", logo: "/empresas/iberdrola.png" },
    { nombre: "TotalEnergies", logo: "/empresas/totalEnergies.webp" },
  ];

  return (
    <section className="py-20 bg-white" id="partners">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {empresas.map((empresa, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={empresa.logo}
                alt={empresa.nombre}
                className="max-h-24 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
