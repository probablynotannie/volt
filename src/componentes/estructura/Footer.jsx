import "@fontsource/orbitron/800.css";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Contacto from "../estructura/Contacto";
function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="flex flex-col gap-5 justify-end items-end px-10 absolute right-0">
        <div className="relative inline-flex items-center justify-center group cursor-pointer">
          <span className="absolute w-16 h-16 rounded-full bg-purple-600 opacity-0 blur-xl scale-100 transition duration-300 group-hover:opacity-40 group-hover:scale-110"></span>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="relative z-10 bg-black/20 rounded-full text-white text-xl border-none  p-2 font-semibold transition duration-300"
          >
            <MdEmail />
          </button>
        </div>
        <Contacto modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <a
          href="https://www.instagram.com/probablynotannie"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center group cursor-pointer"
        >
          <span className="absolute w-16 h-16 rounded-full bg-red-600 opacity-0 blur-xl scale-100 transition duration-300 group-hover:opacity-40 group-hover:scale-110"></span>
          <button
            type="button"
            className="relative z-10 bg-black/20 rounded-full text-white text-xl border-none p-2 font-semibold transition duration-300"
          >
            <FaInstagram />
          </button>
        </a>
      </div>
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
