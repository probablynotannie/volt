import { Link } from "react-router-dom";
import Contacto from "./Contacto";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="p-3 bg-slate-900 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-16 lg:px-32 gap-4 sm:gap-0">
        <Link to={"/"}>
          <img
            src="/volt.png"
            className="w-24 object-contain mx-auto sm:mx-0"
            alt="Volt Energia"
          />
        </Link>
        <div className="hidden md:flex gap-2 justify-center">
          <div className="relative inline-flex items-center justify-center group cursor-pointer">
            <span className="absolute w-16 h-16 rounded-full bg-purple-600 opacity-0 blur-xl scale-100 transition duration-300 group-hover:opacity-40 group-hover:scale-110"></span>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="relative z-10 bg-white/20 rounded-full text-white text-xl border-none  p-2 font-semibold transition duration-300"
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
              className="relative z-10 bg-white/20 rounded-full text-white text-xl border-none p-2 font-semibold transition duration-300"
            >
              <FaInstagram />
            </button>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
