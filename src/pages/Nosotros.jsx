import React from 'react'
import BannerImage from '../assets/background2.webp'
import '../styles/Nosotros.css'

function Nosotros() {
  return (
    <div className="nosotros" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="contenedor">
            <div className="contenedor-item">
                <h2>Nuestra Historia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
            </div>
            <div className="contenedor-item">
                <h2>Misión y Visión</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
            </div>
            <div className="contenedor-item">
                <h2>Equipo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
            </div>
            <div className="separador">
            </div>
        </div>
      </div>
    
  )
}

export default Nosotros