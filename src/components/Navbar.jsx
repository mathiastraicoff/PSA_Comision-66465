import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import useActiveLink from '../hook/useActiveLink';
import CartContext from '../context/CartContext'

const Navbar = ({ img }) => {
    const activeLink = useActiveLink();
    const { cart } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={img} alt="logoPsa" className="logo-img" />
                </Link>
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
                        <Link className={`nav-link ${activeLink === '/home' ? 'active' : ''}`} to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${activeLink === '/productos' ? 'active' : ''}`} to="/productos">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${activeLink === '/contacto' ? 'active' : ''}`} to="/contacto">Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <CartWidget /> 
                        <span className="cartItemCount">{cart.items.length}</span> 
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
