import "@fontsource/orbitron/800.css";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
        <img src="/volt.png" className="w-16" alt="Volt Energia" />

          <p className="text-sm mt-2">
            Impulsando el futuro con soluciones energéticas limpias e
            inteligentes.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Enlaces rápidos</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href="#soluciones" className="hover:underline">
                Soluciones
              </a>
            </li>
            <li>
              <a href="#equipo" className="hover:underline">
                Nuestro Equipo
              </a>
            </li>
            <li>
              <a href="#carreras" className="hover:underline">
                Carreras
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contacto</h4>
          <p className="text-sm mt-2">Correo: voltenergia@voltenergia.com</p>
          <p className="text-sm">Teléfono: +34 631 69 45 40</p>
        </div>
      </div>
      <div className="text-center text-xs mt-6 text-gray-500">
        © {new Date().getFullYear()} VoltEnergia. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
