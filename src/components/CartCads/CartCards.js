import React from "react";
import "./CartCards.css";

export default function CartCards({ productName, productPrice, productImage }) {
  return (
    <div className="cart-card">
      <img className="product-image" src={productImage} alt={productName} />
      <div className="product-details">
        <h2 className="productName">Product: {productName}</h2>
        <p className="productPrice">Price: {productPrice}$</p>
        <p className="product-quantity">Quantity: </p>
      </div>
    </div>
  );
}
