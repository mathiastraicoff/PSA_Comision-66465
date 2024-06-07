// import Cart from "../assets/Cart.svg";

// const CartWidget = () => {
//     return (
//         <button className="cartButton">
//             <img src={Cart} alt="cartIcon" className="cartIcon" />
//         </button>
//     );
// };

// export default CartWidget;


import React from 'react';
import Cart from "../assets/Cart.svg";
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <Link to="/Cart" className="cartButton">
            <img src={Cart} alt="cartIcon" className="cartIcon" />
        </Link>
    );
};

export default CartWidget;