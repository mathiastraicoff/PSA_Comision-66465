import Cart from "../assets/Cart.svg";

const CartWidget = () => {
    return (
        <>
            <img src={Cart} alt="cartIcon" className="cartIcon" />
            <img className="numeroCart" src="https://c0.klipartz.com/pngpicture/767/753/gratis-png-3-ilustraciones-numero-3-blanco-en-circulo-naranja-thumbnail.png" alt="numeroCart" />
        </>
    );
};

export default CartWidget;
