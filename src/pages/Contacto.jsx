import React from 'react'
import '../styles/Contacto.css'
import BannerImage from '../assets/background2.webp'
import { FaSquareWhatsapp, FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";


function Contacto() {
  return (
    <div className="contacto">
      <div className="leftSide" style={{ backgroundImage: `url(${BannerImage})` }}>

      </div>

      <div className="rightSide">
        <h1>Contactanos</h1>
        <div className="socialMedia">
          <div className='asesor'>
            <h2>Estamos aquí para ayudarte... <br /> No dudes en ponerte en contacto con nosotros a través del ícono de Whatsapp o Instagram.</h2>
          </div>
          <div className='redes'>
            <div className='whatsapp'>
              <Link to="https://wa.me/584261654744"><FaSquareWhatsapp /></Link>
            </div>
            <div className='instagram'>
              <Link to="https://instagram.com/style_cap_shop"><FaSquareInstagram /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto