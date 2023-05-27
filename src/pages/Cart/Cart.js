import React from "react";
import { AppContext } from "../../AppContext/AppCotext";
import { useContext } from "react";
import CartCards from "../../components/CartCads/CartCards";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Cart() {
  const { cart } = useContext(AppContext);

  return (
    <>
      {cart.length !== 0 ? (
        <div className="cartCards">
          {/* <p>producstii</p> */}
          <h1 style={{ textAlign: "center", borderBottom: "1px solid green" }}>
            Your cart
          </h1>
          {cart.map((product) => (
            <CartCards
              key={product.id}
              productImage={product.imageURL}
              productName={product.title}
              productPrice={product.price}
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
                color: "white",
                textDecoration: "none",
                fontWeight: "700",
              }}
              href="shop"
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
