import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
    return (
        <header className="Nav">
            <div className="Nav-inner">
                <div className="Nav-brand">
                    <h1>SHOPTECH &#39;91</h1>
                </div>

                <nav className="Nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/cart" className="Nav-cart-link">
                        <ShoppingCart size={18} />
                        <span>Cart</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
};
