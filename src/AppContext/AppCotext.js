import React, { createContext, useState } from "react";
import productsJSON from "../common/product.json";
import { toast } from "react-hot-toast";

const AppContext = createContext();
function ContextProvider({ children }) {
  const [product, setProduct] = useState(productsJSON);
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    if (product.find((product) => product.id === id).quantity === 0) {
      toast.error("There are no product in stock!");
    } else {
      setProduct(
        product.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          } else return product;
        })
      );
      setCart((prev) => [
        ...prev,
        {
          ...product.find((product) => product.id === id),
          quantityInCart: 1,
        },
      ]);
      toast.success("Successfully added to cart!");
    }
  };
  const values = { product, setProduct };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export { AppContext, ContextProvider };
