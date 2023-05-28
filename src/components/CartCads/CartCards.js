import React, { useContext } from "react";
import "./CartCards.css";
import DeleteBtn from "../../pages/Products/DeleteButton";
import { AppContext } from "../../AppContext/AppCotext";

export default function CartCards({
  id,
  productName,
  productPrice,
  productImage,
  quantityInCart,
}) {
  const { deleteFromCart, increase } = useContext(AppContext);
  return (
    <div className="cart-card">
      <img className="product-image" src={productImage} alt={productName} />
      <div className="product-details">
        <h2 className="productName">Product: {productName}</h2>
        <p className="productPrice">Price: {productPrice}$</p>
        <p className="product-quantity">Quantity: </p>
        <div style={{ position: "absolute", right: "10", top: "40" }}>
          <DeleteBtn
            onDelete={() => {
              deleteFromCart(id);
            }}
          ></DeleteBtn>
        </div>
        <div>
          <button></button>
        </div>
      </div>
    </div>
  );
}
