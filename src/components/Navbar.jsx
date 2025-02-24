import React from 'react'
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TfiAlignJustify } from "react-icons/tfi";
import '../styles/Navbar.css';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    useEffect(() => {
        const links = document.querySelectorAll('.navbar a');
        links.forEach(link => {
            if (link.getAttribute('href') === location.pathname) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, [location]);

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} alt="" />
                <div className="hiddenLinks">
                    <Link to="/"> Principal </Link>
                    <Link to="/nosotros"> Nosotros </Link>
                    <Link to="/catalogo"> Catalogo </Link>
                    <Link to="/contacto"> Contacto </Link>
                </div>
            </div>
            <div className="rightSide">
                <div>
                    <Link to="/"> Principal </Link>
                    <Link to="/nosotros"> Nosotros </Link>
                    <Link to="/catalogo"> Catalogo </Link>
                    <Link to="/contacto"> Contacto </Link>
                </div>
                <button onClick={toggleNavbar}>
                    <TfiAlignJustify />
                </button>
            </div>
        </div >
    )
}

export default Navbar