import React from "react";
import Cards from "../../components/Cards/Cards";
import products from "../../common/product.json";
import "./Products.css";
import { useState } from "react";
import Currency from "../Products/Currency/Currency";

export default function Products() {
  const [product, setProduct] = useState(products);
  // const [currency, setCurrency] = useState(currency);
  return (
    <div className="product-body">
      <div className="set-currency">Set currency</div>
      <div className="products-container">
        {product.map((e) => (
          <Cards
            key={e.id}
            productImage={e.imageURL}
            productName={e.title}
            productPrice={e.price}
          />
        ))}
        <div></div>
      </div>
    </div>
  );
}
