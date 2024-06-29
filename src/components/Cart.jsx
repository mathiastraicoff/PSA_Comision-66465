import React, { useContext, useEffect } from 'react';
import CartContext from '../context/CartContext';
import { monedaLocal } from '../helpers/monedaLocal';

const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            dispatch({ type: 'SET_CART', payload: JSON.parse(storedCart).items });
        }
    }, [dispatch]);

    const totalAmount = cart.items.reduce((total, item) => total + (item.quantity * item.price), 0);
    const handleRemoveItem = (itemId) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    };
    const handleCheckout = () => {
        dispatch({ type: 'CLEAR_CART' });
        localStorage.removeItem('cart');
        alert('¡Gracias por su compra!');
        window.location.href = '/';
    };
    return (
                <div className="">
                    <h2>Carrito</h2>
                    <div className="">
                        {cart.items.length === 0 ? (
                            <p>El carrito está vacío.</p>
                        ) : (
                            <div>
                                {cart.items.map((item) => (
                                    <div key={item.id} className="">
                                        <div className="">
                                            <img src={item.image} alt={item.name} className="img-fluid" />
                                        </div>
                                        <div className="">
                                            <h4>{item.name}</h4>
                                            <p>Precio unitario: {monedaLocal(item.price)}</p>
                                            <p>Cantidad: {item.quantity}</p>
                                            <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {cart.items.length > 0 && (
                            <div className="">
                                <div className="">
                                    <h5 className="">Resumen del Carrito</h5>
                                    <hr />
                                    <p>Total: {monedaLocal(totalAmount)}</p>
                                    <button className="btn btn-primary" onClick={handleCheckout}>Finalizar Compra</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
};


export default Cart;