import React from 'react'
import '../styles/Catalogo.css'
import BannerImage from '../assets/background2.webp'
import imagentopcurvas from '../assets/topcurvas.webp'
import imagentopcerradas from '../assets/topcerradas.webp'
import imagentopmultimarcas from '../assets/topmultimarcas.webp'
import imagentopplanas from '../assets/topplanas.webp'
import imagen3Aalevate from '../assets/3Aalevates.webp'
import imagen3Aalo from '../assets/3Aalo.webp'
import imagen3ABeisboleras from '../assets/3Abeisboleras.webp'
import imagen3ABelicas from '../assets/3Abelicas.webp'
import imagen3ACorral from '../assets/3Acorral.webp'
import imagen3AGamuzadas from '../assets/3Agamuzadas.webp'
import imagen3AGanaderas from '../assets/3Aganaderas.webp'
import imagen3AKtmFox from '../assets/3Aktmfox.webp'
import imagen3ANinos from '../assets/3Aninos.webp'
import imagen3APlanas from '../assets/3Aplanas.webp'
import imagen3ATommy from '../assets/3Atommy.webp'
import imagen3AVzla from '../assets/3Avzla.webp'
import imagen3ALacoste from '../assets/3Alacoste.webp'
import imagen3ABurberry from '../assets/3Aburberry.webp'
import imagen3AWescolt from '../assets/3Awescolt.webp'
import { Link } from "react-router-dom";

function Catalogo() {
  return (
    <div className="catalogo" style={{ backgroundImage: `url(${BannerImage})` }}>


      <center>
        <div className='catalogotitle'>
          <h1 className='text-glow'>TOP QUALITY 1.1</h1>
        </div>
      </center>


      <div className="contenedorcat">
        <div className="contenedorcat-item ">
          <h2>CURVAS</h2>
          <center>
            <img className='imagen' src={imagentopcurvas} alt='' />
          </center>
          <Link to="/catalogotopcurvas">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>CERRADAS</h2>
          <center>
            <img className='imagen' src={imagentopcerradas} alt='' />
          </center>
          <Link to="/catalogotopcerradas">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>PLANAS</h2>
          <center>
            <img className='imagen' src={imagentopplanas} alt='' />
          </center>
          <Link to="/catalogotopplanas">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>MULTIMARCAS</h2>
          <center>
            <img className='imagen' src={imagentopmultimarcas} alt='' />
          </center>
          <Link to="/catalogotopmultimarcas">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>
      </div>



      <center>
        <div className='catalogotitle'>
          <h1 className='text-glow'>AAA</h1>
        </div>
      </center>

      <div className="contenedorcat">
        <div className="contenedorcat-item ">
          <h2>ALEVATES</h2>
          <center>
            <img className='imagen' src={imagen3Aalevate} alt='' />
          </center>
          <Link to="/catalogoaaaalevates">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>ALO</h2>
          <center>
            <img className='imagen' src={imagen3Aalo} alt='' />
          </center>
          <Link to="/catalogoaaaalo">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>BEISBOLERAS</h2>
          <center>
            <img className='imagen' src={imagen3ABeisboleras} alt='' />
          </center>
          <Link to="/catalogoaaabeisboleras">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>BELICAS</h2>
          <center>
            <img className='imagen' src={imagen3ABelicas} alt='' />
          </center>
          <Link to="/catalogoaaabelicas">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>FULL CORRAL</h2>
          <center>
            <img className='imagen' src={imagen3ACorral} alt='' />
          </center>
          <Link to="/catalogoaaafullcorral">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>GAMUZADAS</h2>
          <center>
            <img className='imagen' src={imagen3AGamuzadas} alt='' />
          </center>
          <Link to="/catalogoaaagamuzadas">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>GANADERAS</h2>
          <center>
            <img className='imagen' src= {imagen3AGanaderas} alt=''/>
          </center>
          <Link to="/catalogoaaaganaderas">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>KTM FOX</h2>
          <center>
            <img className='imagen' src={imagen3AKtmFox} alt='' />
          </center>
          <Link to="/catalogoaaaktmfox">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>NIÑOS</h2>
          <center>
            <img className='imagen' src= {imagen3ANinos} alt=''/>
          </center>
          <Link to="/catalogoaaaninos">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>PLANAS</h2>
          <center>
            <img className='imagen' src={imagen3APlanas} alt='' />
          </center>
          <Link to="/catalogoaaaplanas">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>
        <div className="contenedorcat-item ">
          <h2>TOMMY</h2>
          <center>
            <img className='imagen' src={imagen3ATommy} alt='' />
          </center>
          <Link to="/catalogoaaatommy">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>VENEZUELA</h2>
          <center>
            <img className='imagen' src={imagen3AVzla} alt='' />
          </center>
          <Link to="/catalogoaaavenezuela">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>LACOSTE Y HUGO BOSS</h2>
          <center>
            <img className='imagen' src={imagen3ALacoste} alt='' />
          </center>
          <Link to="/catalogoaaalacostehugoboss">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>BURBERRY Y MONASTERY</h2>
          <center>
            <img className='imagen' src={imagen3ABurberry} alt='' />
          </center>
          <Link to="/catalogoaaaburberrymonastery">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>

        <div className="contenedorcat-item ">
          <h2>WESCOLT Y AMIRI</h2>
          <center>
            <img className='imagen' src={imagen3AWescolt} alt='' />
          </center>
          <Link to="/catalogoaaawescoltyamiri">
            <button className='button-solicitar'>Ver más</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Catalogo
