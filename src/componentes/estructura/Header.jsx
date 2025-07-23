import { Link } from "react-router-dom";
import Contacto from "./Contacto";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <header className="relative">
      <nav className="bg-slate-900 flex justify-between w-full sm:px-10 md:px-16 lg:px-32 gap-4 sm:gap-0 p-2 px-5 relative z-50">
        <div className="w-full flex flex-wrap items-center justify-between">
          <Link to={"/"}>
            <img
              src="/volt.png"
              className="w-24 object-contain mx-auto sm:mx-0"
              alt="Volt Energia"
            />
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  md:dark:bg-gray-900 dark:border-gray-700">
              <li>
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
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 z-40 shadow-md">
          <ul className="flex flex-col items-center gap-4 p-4">
            {["About", "Services", "Pricing", "Contact"].map((text) => (
              <li key={text}>
                <a
                  href="#"
                  className="block py-2 px-3 text-slate-300 rounded-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {text}
                </a>
              </li>
            ))}

            <li>
              <div className="relative inline-flex items-center group cursor-pointer">
                <span className="absolute w-16 h-16 rounded-full bg-purple-600 opacity-0 blur-xl scale-100 transition duration-300 group-hover:opacity-40 group-hover:scale-110"></span>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="relative z-10 bg-white/20 rounded-full text-white text-xl border-none p-2 font-semibold transition duration-300"
                >
                  <MdEmail />
                </button>
              </div>
              <Contacto modalOpen={modalOpen} setModalOpen={setModalOpen} />
            </li>
            <li>
              <a
                href="https://www.instagram.com/probablynotannie"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center group cursor-pointer"
              >
                <span className="absolute w-16 h-16 rounded-full bg-red-600 opacity-0 blur-xl scale-100 transition duration-300 group-hover:opacity-40 group-hover:scale-110"></span>
                <button
                  type="button"
                  className="relative z-10 bg-white/20 rounded-full text-white text-xl border-none p-2 font-semibold transition duration-300"
                >
                  <FaInstagram />
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
