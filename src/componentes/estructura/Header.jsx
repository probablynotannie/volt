import { Link } from "react-router-dom";
import Contacto from "./Contacto";
function Header() {
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
        <Contacto />
      </header>
    </>
  );
}

export default Header;
