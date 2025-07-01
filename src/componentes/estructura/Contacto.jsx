import { useRef, useState, useEffect } from "react";
import { FaInfo, FaCode, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaXmark, FaFaceLaughBeam } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contacto() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_aulxgod", "template_2vydtus", form.current, {
        publicKey: "_U3DyehQC12K6Hti7",
      })
      .then(
        () => {
          Swal.fire({
            title: "Email enviado",
            text: "Se ha enviado correctamente :)",
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
          });
          setLoading(false);
          form.current.reset();
          setModalOpen(false);
        },
        (error) => {
          Swal.fire({
            title: "Error",
            text: "Hubo un error enviando el email, intenta nuevamente.",
            icon: "error",
          });
          setLoading(false);
          console.error("Error sending email:", error.text);
        }
      );
  };

  useEffect(() => {
    if (modalOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [modalOpen]);

  return (
    <div className="hidden  md:flex justify-centers items-center flex-col">
      <div className="relative inline-flex items-center justify-center group cursor-pointer">
        <span className="absolute w-16 h-16 rounded-full bg-purple-600 opacity-0 blur-xl scale-100 transition duration-300 group-hover:opacity-40 group-hover:scale-110"></span>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="relative z-10 text-white bg-transparent border-none px-6 py-2 font-semibold transition duration-300"
        >
          contacto
        </button>
      </div>
      {modalOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 p-4 px-10"
        >
          <div className="bg-white rounded-lg shadow-md w-full max-w-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-purple-600 text-xl" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Contáctanos
                </h3>
              </div>
              <button
                type="button"
                className="text-gray-600 hover:text-gray-900 rounded p-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={() => setModalOpen(false)}
                aria-label="Cerrar modal"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 gap-6">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block mb-1 text-gray-700 font-medium"
                  >
                    Nombre
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="user_email"
                    className="block mb-1 text-gray-700 font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-gray-700 font-medium"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Escribe tu mensaje..."
                    className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-purple-600 text-white font-semibold rounded py-2 transition ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-purple-700"
                  }`}
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </form>
            </div>
            <div className="p-4 border-t border-gray-200 flex justify-between items-center text-sm text-purple-700 font-semibold">
              <a
                href="tel:943219732"
                className="flex items-center gap-2 hover:text-purple-900"
              >
                <FaPhone />
                Llámanos (943 21 97 32)
              </a>
              <span className="select-none">
                © {new Date().getFullYear()} VOLT
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
