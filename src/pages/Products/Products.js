import React, { useState, useEffect, useContext } from "react";
import Cards from "../../components/Cards/Cards";
import "./Products.css";
import Currency from "../Products/Currency/Currency";
import Pagination from "@mui/material/Pagination";
import { AppContext } from "../../AppContext/AppCotext";
import { toast } from "react-hot-toast";
import DeleteButton from "../Products/DeleteButton";

export default function Products() {
  const { product, setProduct } = useContext(AppContext);
  const [currency, setCurrency] = useState(1);
  const [page, setPage] = useState(1);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

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
      default:
        return "";
    }
  };

  const productsPerPage = 15;
  const numOfPages = Math.ceil((product && product.length) / productsPerPage);

  const convertCurrency = (el) => {
    if (currency) {
      const price = el * currency;
      return Math.round(price);
    }
    return el;
  };

  const handleCurrencyChange = (curr) => {
    setCurrency(curr);
  };

  const handleCardClick = (id) => {
    setSelectedCardId(id);
    const updatedProduct = product.map((p) => {
      if (p.id === id && p.quantity > 0) {
        p.quantity--;
        toast.success("Successfully added to cart!");
      } else if (p.id === id) {
        toast.error("This didn't work.");
      }
      return p;
    });
    setProduct(updatedProduct);
  };

  useEffect(() => {
    setProduct(product);
  }, [currency]);

  return (
    <div className="product-body">
      <div className="set-currency">
        <Currency handleCurrencyChange={handleCurrencyChange} />
      </div>
      <div className="products-container">
        {product &&
          product
            .slice(
              (page - 1) * productsPerPage,
              (page - 1) * productsPerPage + productsPerPage
            )
            .map((e) => (
              <Cards
                key={e.id}
                productImage={e.imageURL}
                productName={e.title}
                productPrice={convertCurrency(e.price)}
                currencySign={currencySign(currency)}
                onClick={() => handleCardClick(e.id)}
              ></Cards>
            ))}
      </div>
      <div className="pagination">
        <Pagination
          size="large"
          count={numOfPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
