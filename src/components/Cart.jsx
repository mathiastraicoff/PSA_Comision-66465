import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import { monedaLocal } from '../helpers/monedaLocal';

const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);
    const totalAmount = cart.items.reduce((total, item) => total + (item.quantity * item.price), 0);
    const handleCheckout = () => {
        dispatch({ type: 'CLEAR_CART' });
        localStorage.removeItem('cart');
        alert('¡Gracias por su compra!');
        window.location.href = '/';
    };

    return (
        <div className="container mt-4">
            <h2>Carrito de Compras</h2>
            <div className="row mt-4">
                <div className="col-md-8">
                    {cart.items.length === 0 ? (
                        <p>El carrito está vacío.</p>
                    ) : (
                        <div>
                            {cart.items.map((item) => (
                                <div key={item.id} className="row mb-3">
                                    <div className="col-md-2">
                                        <img src={item.image} alt={item.name} className="img-fluid" />
                                    </div>
                                    <div className="col-md-6">
                                        <h4>{item.name}</h4>
                                        <p>Precio unitario: {monedaLocal(item.price)}</p>
                                        <p>Cantidad: {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Resumen del Carrito</h5>
                            <hr />
                            <p>Total: {monedaLocal(totalAmount)}</p>
                            <button className="btn btn-primary" onClick={handleCheckout}>Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;