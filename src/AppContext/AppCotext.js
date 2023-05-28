import React, { createContext, useState, useEffect } from "react";
import productsJSON from "../common/product.json";
import { toast } from "react-hot-toast";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [product, setProduct] = useState(productsJSON);
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const selectedProduct = product.find((product) => product.id === id);

    if (!selectedProduct) {
      toast.error("Product not found!");
      return;
    }

    if (selectedProduct.quantity === 0) {
      toast.error("There are no products in stock!");
      return;
    }

    setProduct((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        } else {
          return product;
        }
      })
    );

    const productToAddToCart = {
      ...selectedProduct,
      quantityInCart: 1,
    };

    setCart((prev) => [...prev, productToAddToCart]);

    toast.success("Successfully added to cart!");
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const deleteFromCart = (id) => {
    const quantityInCart = cart.find(
      (product) => product.id === id
    ).quantityInCart;
    setProduct((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + quantityInCart,
          };
        } else {
          return product;
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
    const product = product.find((product) => product.id === id);
    if (product.quantity > 0) {
      setProduct((product) =>
        product.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          } else {
            return product;
          }
        })
      );
      setCart(
        cart.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          } else {
            return product;
          }
        })
      );
    } else {
      toast.error("There are no product in stock");
    }
  };
  const decrease = (id) => {
    const product = cart.find((product) => product.id === id);
    if (product.quantityInCart === 1) {
      deleteFromCart(id);
    } else {
      setProduct(
        product.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          } else {
            return product;
          }
        })
      );
      setCart(
        cart.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity - 1,
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
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
