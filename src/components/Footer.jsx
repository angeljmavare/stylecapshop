import React from "react";
import "../styles/Footer.css";
import Link from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <p> &copy; 2025. Diseñado y Desarrollado por <Link to="https://github.com/AngelJMavare" >AngelJMavare</Link>.</p>
    </div>
  );
}

export default Footer;
