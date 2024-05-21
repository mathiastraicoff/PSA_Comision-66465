import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CartWidget from './CartWidget';

const Navbar = ({ img }) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="../index.html">
                    <img src={img} alt="logoPsa" className="logo-img" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="/index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/pages/quienes_somos.html">Quienes Somos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/pages/servicios.html">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/pages/productos.html">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/pages/contacto.html">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <CartWidget />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
