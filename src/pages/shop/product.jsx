import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = ({ data }) => {
  const { id, name, price, image, description } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems?.[id] || 0;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="desc">
        <h2>{name}</h2>
        <p>${price}</p>
        <p><b>{description}</b></p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <span>({cartItemAmount})</span>}
      </button>
    </div>
  );
};
