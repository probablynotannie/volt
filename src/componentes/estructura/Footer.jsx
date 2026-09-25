import "@fontsource/orbitron/800.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <img src="/volt.png" className="w-16" alt="Volt Energia" />
          <p className="text-sm mt-2">
            Asesoramiento energético para ayudar a empresas a entender y comparar sus opciones.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-white">Enlaces rápidos</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link to="/#como-funciona" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">
                Cómo funciona
              </Link>
            </li>
            <li>
              <Link to="/#beneficios" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">
                Beneficios
              </Link>
            </li>
            <li>
              <Link to="/trabajaConNosotros" className="hover:underline">
                Trabaja con nosotros
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white">Contacto</h2>

          <p className="text-sm mt-2">Correo: <a className="underline hover:text-white" href="mailto:voltenergia@voltenergia.com">voltenergia@voltenergia.com</a></p>
          <p className="text-sm">Teléfono: <a className="underline hover:text-white" href="tel:+34631694540">+34 631 69 45 40</a></p>
        </div>
      </div>
      <div className="text-center text-xs mt-6 text-gray-400">
        © {new Date().getFullYear()} VoltEnergia. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
