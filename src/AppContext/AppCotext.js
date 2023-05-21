import React, { createContext, useState } from "react";

const AppContext = createContext();
function ContextProvider({ children }) {
  const [currency, setCurrency] = useState("USD");
  const values = {
    currency,
    setCurrency,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export { AppContext, ContextProvider };
