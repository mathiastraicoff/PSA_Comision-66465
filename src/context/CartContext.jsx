import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);

            if (existingItemIndex !== -1) {
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].quantity += 1;

                return { ...state, items: updatedItems };
            } else {
                return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
            }

        case 'REMOVE_ITEM':
            const filteredItems = state.items.filter(item => item.id !== action.payload.id);
            return { ...state, items: filteredItems };

        case 'CLEAR_CART':
            return { ...state, items: [] };

        default:
            return state;
    }
};


export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, { items: [] }, () => {
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : { items: [] };
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
