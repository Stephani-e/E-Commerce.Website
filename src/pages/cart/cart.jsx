import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const { cartItems, showCartModal, openCartModal, closeCartModal, clearCart, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div className="cartTitle">
                <h1>SHOPTECH '91</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) { return <CartItem data={product} /> }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <p>Subtotal: ${totalAmount.toFixed(2)}</p>
                    <div className="checkout-buttons">
                        <button className="checkout-continue" onClick={() => navigate("/")}>Continue Shopping</button>
                        <button onClick={openCartModal} className="checkout-clear">Clear Cart</button>
                        {showCartModal && (
                            <div className="modal-overlay">
                                <div className="modal">
                                    <h2>Are you sure you want to clear the cart?</h2>
                                    <div className="modal-buttons">
                                        <button onClick={clearCart} className="checkout-yes">Yes, Clear Cart</button>
                                        <button onClick={closeCartModal} className="checkout-no">No</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <button className="checkout-btnn">Checkout</button>
                    </div>
                </div>) : (
                <div className="empty-cart">
                    <h1>Your cart is empty</h1>
                    <button onClick={() => navigate("/")} className="checkout-continue">Continue Shopping</button>
                </div>
                )
            }
        </div>
    )
}