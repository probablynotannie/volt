import { useState } from "react";
import ComoFunciona from "./apartados/ComoFuncino";
import Beneficios from "./apartados/Beneficios";
import LlamadoAccion from "./apartados/LlamadoAccion";
import Testimonios from "./apartados/Testimonios";
import Descripcion from "./apartados/Descripcion";
import "@fontsource/orbitron/800.css";
import { FaLightbulb } from "react-icons/fa";

function Landing() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <main>
        <section
          className="relative group bg-gradient-to-r from-primary via-purple-900 to-pink-800 animate-gradient-x pt-10 lg:pt-28 pb-16 p-5 gap-20 flex justify-between flex-col items-center overflow-hidden"
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

          <div className="w-3/4  lg:flex  cursor-default">
            <div className="flex justify-start text-start flex-col space-y-3">
              <span className="text-slate-200">
                ¿Y si te dijéramos que pagas más luz de la que deberías?
              </span>
              <h1 className="text-4xl lg:text-6xl text-white font-bold">
                Compara. Ahorra. Revisa cada año. Así de simple.
              </h1>
              <p className="text-white">
                Ayudamos a empresas a ahorrar en su factura de la luz.
                Analizamos su contrato actual, buscamos alternativas más
                competitivas en el mercado y nos encargamos de gestionar el
                cambio de compañía si es necesario. Todo con transparencia, sin
                permanencias, y con una revisión anual incluida.
              </p>
            </div>
            <div className="hidden lg:flex justify-center lg:justify-end items-center w-full mt-20 lg:m-0">
              <div
                className="relative w-64 h-64 rounded-full bg-primary/20 flex items-center justify-center
                       group cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300  transform"
              >
                <span className="absolute w-40 h-40 rounded-full bg-orange-200 opacity-30 blur-xl animate-pulse"></span>
                <FaLightbulb
                  className="relative text-white/40 text-9xl group-hover:text-white/50 transform group-hover:scale-110 transition duration-300"
                  aria-label="Lightbulb icon"
                />
              </div>
            </div>
          </div>
          <div className="bg-white/20 w-3/4 p-5 py-7 rounded-md border-2 border-white/80 flex justify-around flex-wrap flex-col sm:flex-row gap-5">
            <div className="w-full lg:w-fit flex justify-center items-center">
              <img src="/volt.png" className="w-32" alt="Volt Energia" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white/70 text-xs uppercase font-medium">
                permanencia
              </h3>
              <p className="text-white text-lg font-extrabold text-center">
                0 meses
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white/70 text-xs uppercase font-medium">
                Cambio
              </h3>
              <p className="text-white text-lg font-extrabold text-center">
                24/48 horas
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white/70 text-xs uppercase font-medium">
                revision
              </h3>
              <p className="text-white text-lg font-extrabold text-center">
                0€
              </p>
            </div>
            <button className="bg-white/30 hover:bg-white/40 transition duration-300 w-full lg:w-[200px] p-3 text-white rounded-lg font-extrabold">
              Conocemos
            </button>
          </div>
        </section>
      </main>
      <ComoFunciona />
      <Beneficios />
      <Testimonios />
      <LlamadoAccion />
    </>
  );
}

export default Landing;
