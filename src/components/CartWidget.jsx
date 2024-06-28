import React, { useContext } from 'react';
import Cart from "../assets/Cart.svg";
import { useNavigate } from "react-router-dom";
import { DataFirebaseContext } from "../context/DataFirebaseContext";
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const navigate = useNavigate();
    const { dataCart } = useContext(DataFirebaseContext);
    const totalItems = Array.isArray(dataCart) ? dataCart.reduce((total, product) => total + product.quantity, 0) : 0;

    const handleClickCart = () => {
        navigate("/cart");
    };

    return (
        <Link to="/cart" className="cartButton" onClick={handleClickCart}>
            <img src={Cart} alt="cartIcon" className="cartIcon"/>
            <span className="cartItemCount">{totalItems}</span>
        </Link>
    );
};

export default CartWidget;
