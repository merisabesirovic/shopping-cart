import React, { createContext, useState } from "react";
import productsJSON from "../common/product.json";

const AppContext = createContext();
function ContextProvider({ children }) {
  const [product, setProduct] = useState(productsJSON);
  const values = { product, setProduct };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export { AppContext, ContextProvider };
