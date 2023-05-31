import React, { createContext, useState } from "react";
import productsJSON from "../common/product.json";
import { toast } from "react-hot-toast";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [product, setProduct] = useState(productsJSON);
  const [cart, setCart] = useState([]);
  const [onSale] = useState(
    productsJSON.filter((product) => product.quantity > 20)
  );
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
  const putDot = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  const addToCart = (id) => {
    if (product.find((product) => product.id === id).quantity === 0) {
      toast.error("There are no products in stock!");
    } else {
      setProduct(
        product.map((prod) => {
          if (prod.id === id) {
            return {
              ...prod,
              quantity: prod.quantity - 1,
            };
          } else {
            return prod;
          }
        })
      );
      setCart((prev) => [
        ...prev,
        {
          ...product.find((prod) => prod.id === id),
          quantityInCart: 1,
        },
      ]);
      toast.success("Successfully added to cart!");
    }
  };

  const deleteFromCart = (id) => {
    const quantityInCart = cart.find(
      (product) => product.id === id
    ).quantityInCart;
    setProduct(
      product.map((prod) => {
        if (prod.id === id) {
          return {
            ...prod,
            quantity: prod.quantity + quantityInCart,
          };
        } else {
          return prod;
        }
      })
    );
    setCart(() => {
      const newCart = cart.filter((product) => product.id !== id);
      return newCart;
    });
    toast.success("Successfully deleted from cart!");
  };

  const increase = (id) => {
    const prod = product.find((prod) => prod.id === id);
    if (prod.quantity > 0) {
      setProduct(
        product.map((p) => {
          if (p.id === id) {
            return {
              ...p,
              quantity: p.quantity - 1,
            };
          } else {
            return p;
          }
        })
      );
      setCart(
        cart.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantityInCart: product.quantityInCart + 1,
            };
          } else {
            return product;
          }
        })
      );
    } else {
      toast.error("There are no products in stock!");
    }
  };

  const decrease = (id) => {
    const prod = cart.find((product) => product.id === id);
    if (prod.quantityInCart === 1) {
      deleteFromCart(id);
    } else {
      setProduct(
        product.map((p) => {
          if (p.id === id) {
            return {
              ...p,
              quantity: p.quantity + 1,
            };
          } else {
            return p;
          }
        })
      );
      setCart(
        cart.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantityInCart: product.quantityInCart - 1,
            };
          } else {
            return product;
          }
        })
      );
    }
  };

  const values = {
    product,
    setProduct,
    cart,
    addToCart,
    deleteFromCart,
    increase,
    decrease,
    onSale,
    putDot,
    currencySign,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
