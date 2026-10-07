import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./estructura/Header";
import Footer from "./estructura/Footer";
import Landing from "./Landing";
import Ofertas from "./trabajaConNosotros/Ofertas";
import AvisoLegal from "./legales/AvisoLegal";
import PoliticaPrivacidad from "./legales/PoliticaPrivacidad";
import PoliticaCookies from "./legales/PoliticaCookies";

function ScrollToAnchor() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const timeoutId = window.setTimeout(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash]);
  return null;
}

function Rutas() {
  return (
    <>
      <Router>
        <ScrollToAnchor />
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/trabajaConNosotros" element={<Ofertas />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/cookies" element={<PoliticaCookies />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Rutas;
