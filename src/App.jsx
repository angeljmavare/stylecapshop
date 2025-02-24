import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Principal from './pages/Principal';
import Nosotros from './pages/Nosotros';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import CatalogoTopCurvas from './pages/CatalogoTopCurvas';
import CatalogoTopCerradas from './pages/CatalogoTopCerradas';
import CatalogoTopPlanas from './pages/CatalogoTopPlanas';
import CatalogoTopMultimarcas from './pages/CatalogoTopMultimarcas';
import CatalogoAaaAlevates from './pages/Catalogo3AAlevates';
import CatalogoAaaAlo from './pages/Catalogo3AAlo';
import CatalogoAaaBeisboleras from './pages/Catalogo3ABeisboleras';
import CatalogoAaaBelicas from './pages/Catalogo3ABelicas';
import CatalogoAaaCorral from './pages/Catalogo3ACorral';
import CatalogoAaaGamuzadas from './pages/Catalogo3AGamuzadas';
import CatalogoAaaGanaderas from './pages/Catalogo3AGanaderas';
import CatalogoAaaNinos from './pages/Catalogo3ANinos';
import CatalogoAaaKtmFox from './pages/Catalogo3AKtmFox';
import CatalogoAaaPlanas from './pages/Catalogo3APlanas';
import CatalogoAaaTommy from './pages/Catalogo3ATommy';
import CatalogoAaaVzla from './pages/Catalogo3AVzla';
import CatalogoAaaLacosteHugoBoss from './pages/Catalogo3ALacosteHugo';
import CatalogoAaaBurberryMonastery from './pages/Catalogo3ABurberryMonastery';
import CatalogoAaaWescolAmiri from './pages/Catalogo3AWescoltAmiri';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/catalogotopcurvas" element={<CatalogoTopCurvas />} />
          <Route path="/catalogotopcerradas" element={<CatalogoTopCerradas />} />
          <Route path="/catalogotopplanas" element={<CatalogoTopPlanas />} />
          <Route path="/catalogotopmultimarcas" element={<CatalogoTopMultimarcas />} /> 
          <Route path="/catalogoaaaalevates" element={<CatalogoAaaAlevates />} />
          <Route path="/catalogoaaaalo" element={<CatalogoAaaAlo />} />
          <Route path="/catalogoaaabeisboleras" element={<CatalogoAaaBeisboleras />} />
          <Route path="/catalogoaaabelicas" element={<CatalogoAaaBelicas />} />
          <Route path="/catalogoaaafullcorral" element={<CatalogoAaaCorral />} />
          <Route path="/catalogoaaagamuzadas" element={<CatalogoAaaGamuzadas />} />
          <Route path="/catalogoaaaganaderas" element={<CatalogoAaaGanaderas />} />
          <Route path="/catalogoaaaktmfox" element={<CatalogoAaaKtmFox />} />
          <Route path="/catalogoaaaninos" element={<CatalogoAaaNinos />} />
          <Route path="/catalogoaaaplanas" element={<CatalogoAaaPlanas />} />
          <Route path="/catalogoaaatommy" element={<CatalogoAaaTommy />} />
          <Route path="/catalogoaaavenezuela" element={<CatalogoAaaVzla />} />
          <Route path="/catalogoaaalacostehugoboss" element={<CatalogoAaaLacosteHugoBoss />} />
          <Route path="/catalogoaaaburberrymonastery" element={<CatalogoAaaBurberryMonastery />} />
          <Route path="/catalogoaaawescoltyamiri" element={<CatalogoAaaWescolAmiri />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;