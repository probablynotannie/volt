import { useState } from "react";
import { Link } from "react-router-dom";
import Contacto from "./Contacto";

const enlaces = [
  ["Cómo funciona", "/#como-funciona"],
  ["Beneficios", "/#beneficios"],
  ["Qué revisamos", "/#que-revisamos"],
  ["Preguntas frecuentes", "/#preguntas-frecuentes"],
];

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a href="#main-content" className="sr-only z-[100] rounded bg-white p-3 text-slate-900 focus:not-sr-only focus:absolute focus:left-3 focus:top-3">
        Saltar al contenido principal
      </a>
      <header className="relative">
        <nav aria-label="Navegación principal" className="relative z-50 flex w-full items-center justify-between bg-slate-900 px-5 py-3 sm:px-10 lg:px-16">
          <Link to="/" aria-label="Volt Energía, página de inicio" onClick={() => setMenuOpen(false)}>
            <img src="/volt.png" className="w-24 object-contain" alt="Volt Energía" />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white md:hidden"
            aria-controls="menu-movil"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="h-6 w-6" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
          <div className="hidden items-center gap-6 md:flex">
            {enlaces.map(([texto, destino]) => <Link key={destino} to={destino} className="text-sm font-medium text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">{texto}</Link>)}
            <Link to="/trabajaConNosotros" className="text-sm font-medium text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">Trabaja con nosotros</Link>
            <button type="button" onClick={() => setModalOpen(true)} className="rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white">Contacto</button>
          </div>
          <div id="menu-movil" className={`${menuOpen ? "block" : "hidden"} absolute left-0 top-full w-full bg-slate-900 shadow-lg md:hidden`}>
              <ul className="flex flex-col items-center gap-1 p-4">
                {enlaces.map(([texto, destino]) => (
                  <li key={destino}>
                    <Link to={destino} className="block rounded px-4 py-3 text-slate-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white" onClick={() => setMenuOpen(false)}>{texto}</Link>
                  </li>
                ))}
                <li><Link to="/trabajaConNosotros" className="block rounded px-4 py-3 text-slate-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white" onClick={() => setMenuOpen(false)}>Trabaja con nosotros</Link></li>
                <li><button type="button" onClick={() => { setMenuOpen(false); setModalOpen(true); }} className="rounded-lg bg-white/15 px-4 py-3 font-semibold text-white hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white">Contacto</button></li>
              </ul>
          </div>
        </nav>
      </header>
      <Contacto modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}

export default Header;
