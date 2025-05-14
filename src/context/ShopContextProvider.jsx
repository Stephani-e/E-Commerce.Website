import React, { useState } from "react";
import { ShopContext } from "./shop-context";
import { PRODUCTS } from "../products";


const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] !== 0) {
                const itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }
    const [ showCartModal, setShowCartModal ] = useState(false);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    }
    
    const openCartModal = () => setShowCartModal(true);
    const closeCartModal = () => setShowCartModal(false);

    const clearCart = () => {
        const cleared = getDefaultCart();
        setCartItems(cleared);
        closeCartModal();
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        clearCart,
        showCartModal,
        setShowCartModal,
        openCartModal,
        closeCartModal,
        getTotalCartAmount,
        };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

