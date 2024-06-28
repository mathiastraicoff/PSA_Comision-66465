import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.css'; 

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-background" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Cart Modal</h2>
                <p>Contenido del carrito aquí...</p>
                <Link to="/cart">Ver Carrito</Link>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default Modal;
