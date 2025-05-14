import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import './navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar">
           <div className="links">
                <Link to="/">Home</Link>
                <Link to="/cart"><ShoppingCart size={16}/>Cart</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="logo">
                <h1>My E-commerce Store</h1>
           </div>
        </div>
    )
}