// Products.js
import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import products from "../../common/product.json";
import "./Products.css";
import Currency from "../Products/Currency/Currency";

export default function Products() {
  const [product, setProduct] = useState(products);
  const [currency, setCurrency] = useState(1);
  const currencySign = (currency) => {
    switch (currency) {
      case 1:
        return "$";
      case 0.92:
        return "€";
      case 108.36:
        return "din";
      case 6.97:
        return "kn";
      case 1.81:
        return "KM";
    }
  };

  const convertCurrency = (el) => {
    if (currency) {
      const price = el * currency;
      return Math.round(price, 2);
    }
    return el;
  };

  const handleCurrencyChange = (curr) => {
    setCurrency(curr);
  };

  useEffect(() => {
    setProduct(products);
  }, [currency]);

  return (
    <div className="product-body">
      <div className="set-currency">
        Set currency
        <Currency handleCurrencyChange={handleCurrencyChange} />
      </div>
      <div className="products-container">
        {product.map((e) => (
          <Cards
            key={e.id}
            productImage={e.imageURL}
            productName={e.title}
            productPrice={convertCurrency(e.price)}
            currencySign={currencySign(currency)}
          />
        ))}
      </div>
    </div>
  );
}
