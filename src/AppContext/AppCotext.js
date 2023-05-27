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

  const values = { product, setProduct, cart, addToCart };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
