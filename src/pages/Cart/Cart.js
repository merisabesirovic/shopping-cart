import React from "react";
import { useContext, useState } from "react";
import Currency from "../Products/Currency/Currency";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { AppContext } from "../../AppContext/AppCotext";
import CartCards from "../../components/CartCads/CartCards";
import "./Cart.css";

export default function Cart() {
  const { cart, currencySign } = useContext(AppContext);
  const [currency, setCurrency] = useState(1);
  const totalPrice = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantityInCart,
    0
  );
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

  return (
    <>
      <div className="set-currency">
        <Currency handleCurrencyChange={handleCurrencyChange} />
      </div>
      {cart.length !== 0 ? (
        <div className="cartCards">
          <div className="cartCardsContainer">
            <h1 className="korpa"> Your cart</h1>
            <h1 className="korpa-k">
              Total price in your cart:
              {convertCurrency(totalPrice)}
              {currencySign(currency)}
            </h1>
          </div>
          {cart.map((product) => (
            <CartCards
              key={product.id}
              id={product.id}
              productImage={product.imageURL}
              productName={product.title}
              productPrice={convertCurrency(product.price)}
              currencySign={currencySign(currency)}
              quantity={product.quantityInCart}
            />
          ))}
        </div>
      ) : (
        <div>
          <div
            style={{
              height: "70vh",
              backgroundImage: `url("https://www.adasglobal.com/img/empty-cart.png")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "50vw",
            }}
          ></div>
          <IconButton
            style={{
              marginTop: "-40px",
              backgroundColor: "green",
              borderRadius: "5px",
            }}
            color=""
            aria-label="add to shopping cart"
          >
            <a
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: "700",
              }}
              href="products"
            >
              Go shopping
            </a>
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      )}
    </>
  );
}
