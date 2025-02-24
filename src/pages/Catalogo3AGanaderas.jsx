import React, { useState, useEffect } from 'react';
import '../styles/Catalogo.css';
import BannerImage from '../assets/background2.jpg';
import { ListaGorras3AGanaderas } from '../helpers/ListaGorras3AGanaderas';
import { Link } from "react-router-dom";

function Catalogo3AGanaderas() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    const handleClick = (id, image, precio) => {
        const mensaje = `Hola, quiero comprar de la Categoría AAA (GANADERAS) el modelo ${id}, imagen del producto: ${encodeURIComponent('https://stylecapshop.vercel.app/' + image)} por ${precio}$ por favor.`;
        const url = `https://wa.me/584261654744?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = ListaGorras3AGanaderas.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(ListaGorras3AGanaderas.length / itemsPerPage);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const renderPageNumbers = () => {
        const maxPageNumbers = 3;
        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

        // Asegurar que siempre haya tres páginas visibles
        if (currentPage === totalPages && totalPages > 3) {
            startPage = totalPages - 2;
            endPage = totalPages;
        }

        return (
            <div className="pagination">
                <button className={`button-number ${currentPage === 1 ? 'disabled' : ''}`} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map(number => (
                    <button
                        key={number}
                        className={`button-number ${currentPage === number ? 'active' : ''}`}
                        onClick={() => handlePageChange(number)}
                    >
                        {number}
                    </button>
                ))}
                <button className={`button-number ${currentPage === totalPages ? 'disabled' : ''}`} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Siguiente</button>
            </div>
        );
    }

    return (
        <div className="catalogo" style={{ backgroundImage: `url(${BannerImage})` }}>
            <center>
                <div className='catalogotitle'>
                    <h1 className='text-glow'>AAA (GANADERAS)</h1>
                </div>
            </center>
            <div className="contenedorcat">
                {currentItems.map((val, key) => (
                    <div key={key} className="contenedorcat-item">
                        <h2>Modelo: {val.id}</h2>
                        <center>
                            <img className='image' src={val.image} alt={val.id} />
                        </center>
                        <p>${val.precio}</p>
                        <button className='button-solicitar' onClick={() => handleClick(val.id, val.image, val.precio)}>Solicitar</button>
                    </div>
                ))}
            </div>
            <div className="pagination-container">
                {renderPageNumbers()}
            </div>
            <Link to="/catalogo">
                <center>
                    <button className='button'>Volver</button>
                </center>
            </Link>
        </div>
    )
}

export default Catalogo3AGanaderas;