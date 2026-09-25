import { useState } from "react";
import ComoFunciona from "./apartados/ComoFuncino";
import Beneficios from "./apartados/Beneficios";
import LlamadoAccion from "./apartados/LlamadoAccion";
import Testimonios from "./apartados/Testimonios";
import Contacto from "./estructura/Contacto";
import "@fontsource/orbitron/800.css";
import { FaArrowRight, FaLightbulb } from "react-icons/fa";
import Grafica from "./grafica/Grafica";
import Seo from "./estructura/Seo";
import Empresas from "./apartados/Empresas";
import RevisionYPreguntas from "./apartados/RevisionYPreguntas";
function Landing() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Seo
        title="Asesoramiento energético para empresas | Volt Energía"
        description="Revisamos facturas de electricidad y gas para empresas, comparamos alternativas y te acompañamos si decides cambiar. Sin coste ni compromiso."
        canonical="https://volt-green.vercel.app/"
      />
      <main id="main-content" className="relative">
        <section
          className="relative group bg-gradient-to-br from-slate-950 via-violet-950 to-primary pt-16 lg:pt-24 pb-14 px-5 flex flex-col items-center overflow-hidden"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('/noise.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
              zIndex: 0,
            }}
          />
          {isHovering && (
            <div
              className="pointer-events-none absolute w-80 h-80 rounded-full bg-white/20 blur-3xl opacity-50 transition-opacity duration-300"
              style={{
                top: mousePos.y - 160,
                left: mousePos.x - 160,
              }}
            />
          )}
          <div className="relative z-10 w-full max-w-6xl lg:flex lg:items-center lg:gap-16 cursor-default">
            <div className="flex flex-col items-start space-y-5 text-start lg:w-3/5">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-violet-100">
                Facturas de luz y gas para empresas
              </span>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                La energía de tu negocio, <span className="text-violet-200">con más claridad.</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                Revisamos tus facturas de electricidad y gas, comparamos
                alternativas para tu negocio y te explicamos cada opción. Si
                decides cambiar, te acompañamos durante la gestión, sin
                permanencia y con revisión anual.
              </p>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3.5 font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-950"
              >
                Solicita una revisión <FaArrowRight aria-hidden="true" />
              </button>
              <p className="text-sm text-slate-300">Sin coste y sin compromiso</p>
            </div>
            <div className="hidden lg:flex justify-center items-center lg:w-2/5">
              <div
                className="relative w-64 h-64 rounded-full bg-primary/20 flex items-center justify-center
                       group cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300  transform"
              >
                <span className="absolute w-40 h-40 rounded-full bg-orange-200 opacity-30 blur-xl animate-pulse"></span>
                <FaLightbulb
                  className="relative text-white/20 text-9xl group-hover:text-white/30 transform group-hover:scale-110 transition duration-300"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="relative z-10 mt-14 grid w-full max-w-6xl grid-cols-1 gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur sm:grid-cols-3 sm:p-6">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white/70 text-xs uppercase tracking-wider font-medium">
                Permanencia
              </h3>
              <p className="text-white text-lg font-bold text-center">
                Ninguna
              </p>
            </div>
            <div className="flex flex-col items-center justify-center border-y border-white/15 py-3 sm:border-x sm:border-y-0 sm:py-0">
              <h3 className="text-white/70 text-xs uppercase tracking-wider font-medium">
                Revisión
              </h3>
              <p className="text-white text-lg font-bold text-center">
                Sin coste
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white/70 text-xs uppercase tracking-wider font-medium">Seguimiento</h3>
              <p className="text-white text-lg font-bold text-center">Revisión anual</p>
            </div>
          </div>
          <Contacto modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </section>
      </main>
      <ComoFunciona />
      <Beneficios />
      <RevisionYPreguntas />
      <Grafica />
      <Testimonios />
      <Empresas />
      <LlamadoAccion />
    </>
  );
}

export default Landing;
