import React, { useState, useContext } from "react";
import Cards from "../../components/Cards/Cards";
import "./Products.css";
import Currency from "../Products/Currency/Currency";
import Pagination from "@mui/material/Pagination";
import { AppContext } from "../../AppContext/AppCotext";

export default function Products() {
  const { currencySign, product, addToCart, deleteFromCart } =
    useContext(AppContext);
  const [currency, setCurrency] = useState(1);
  const [page, setPage] = useState(1);
  const convertCurrency = (el) => {
    if (currency) {
      const price = el * currency;
      return Math.round(price);
    }
    return el;
  };
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const productsPerPage = 15;
  const numOfPages = Math.ceil(
    product.filter((product) => product.quantity <= 20).length / productsPerPage
  );

  const handleCurrencyChange = (curr) => {
    setCurrency(curr);
  };

  return (
    <>
      <div className="set-currency">
        <Currency handleCurrencyChange={handleCurrencyChange} />
      </div>
      <div className="products-container">
        {product
          .filter((product) => product.quantity <= 20)
          .map((product) => (
            <Cards
              key={product.id}
              id={product.id}
              productName={product.title}
              productPrice={convertCurrency(product.price)}
              currencySign={currencySign(currency)}
              productImage={product.imageURL}
              addToCart={() => {
                addToCart(product.id);
              }}
              deleteFromCart={() => {
                deleteFromCart(product.id);
              }}
            />
          ))
          .slice((page - 1) * productsPerPage, page * productsPerPage)}
      </div>
      <div className="pagination">
        <Pagination
          size="large"
          count={numOfPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
