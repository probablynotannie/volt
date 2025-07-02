import { useRef, useState, useEffect } from "react";
import { FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contacto({ modalOpen, setModalOpen }) {
  const form = useRef();
  const [loading, setLoading] = useState(false);

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
    <>
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6 sm:px-6 transition"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl animate-fadeInUp">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                Contáctanos
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition focus:outline-none"
                aria-label="Cerrar modal"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="px-6 py-6">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full mt-1 rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full mt-1 rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Escribe tu mensaje..."
                    className="w-full mt-1 rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm resize-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full p-3 text-white text-sm font-semibold rounded-lg transition ${
                    loading
                      ? "bg-purple-400 cursor-not-allowed"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`}
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </form>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center text-sm text-purple-700 font-medium">
              <a
                href="tel:943219732"
                className="flex items-center gap-2 hover:text-purple-900"
              >
                <FaPhone />
                943 21 97 32
              </a>
              <span className="text-gray-500 select-none">
                © {new Date().getFullYear()} VOLT
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
