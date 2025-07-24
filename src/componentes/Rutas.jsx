import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./estructura/Header";
import Footer from "./estructura/Footer";
import Landing from "./Landing";
import Ofertas from "./trabajaConNosotros/Ofertas";
function Rutas() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/trabajaConNosotros" element={<Ofertas />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Rutas;
