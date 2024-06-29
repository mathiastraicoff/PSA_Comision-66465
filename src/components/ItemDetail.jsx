import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import CartContext from '../context/CartContext';
import { monedaLocal } from "../helpers/monedaLocal";

const ItemDetail = () => {
    const { id } = useParams();
    const { dispatch } = useContext(CartContext);
    const [producto, setProducto] = useState(null);
    const [cargandoProducto, setCargandoProducto] = useState(true);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const docRef = doc(db, "products.psa", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProducto({ id: docSnap.id, ...docSnap.data() });
                }
            } catch (error) {
                console.error(error);
            } finally {
                setCargandoProducto(false);
            }
        };

        fetchProducto();
    }, [id]);

    const addToCart = () => {
        const cartItem = {
            id: producto.id,
            name: producto.product,
            price: producto.price,
            quantity: cantidad,
            image: producto.image,
        };

        dispatch({ type: 'ADD_TO_CART', payload: cartItem });
        alert("Producto agregado al carrito");
    };

    const increaseQuantity = () => {
        setCantidad(cantidad + 1);
    };

    const decreaseQuantity = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="item-detail-container">
            {cargandoProducto ? (
                <div>Cargando producto...</div>
            ) : producto ? (
                <div className="item-detail-content">
                    <h2 className="h2Products">{producto.product}</h2>
                    <img className="imgProductos" src={producto.image} alt={producto.product} />
                    <h3>{monedaLocal(producto.price)}</h3>
                    <p className="PDescription">{producto.description}</p>
                    
                    <div className="quantity-container">
                        <button className="quantity-button" onClick={decreaseQuantity}>-</button>
                        <div className="quantity">{cantidad}</div>
                        <button className="quantity-button" onClick={increaseQuantity}>+</button>
                    </div>

                    <button className="cartButton" onClick={addToCart}>Agregar al carrito</button>
                </div>
            ) : (
                <div>No se encontró el producto.</div>
            )}
        </div>
    );
};

export default ItemDetail;
