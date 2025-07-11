import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./estructura/Header";
import Footer from "./estructura/Footer";
import Landing from "./Landing";

function Rutas() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Rutas;
