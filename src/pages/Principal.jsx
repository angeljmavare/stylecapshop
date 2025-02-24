import React from 'react'
import '../styles/Principal.css'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/background2.jpg'

function Principal() {
  return (
    <div className="principal" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 className='text-glow'>Style Cap Shop </h1>
        <p>Si tienes un estilo único, somos la mejor opción para ti.</p>
        <Link to="/catalogo">
          <button> ¡ORDENA AHORA! </button>
        </Link>
      </div>
    </div>
  );
}

export default Principal
