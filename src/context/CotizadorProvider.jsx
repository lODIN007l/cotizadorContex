import { createContext, useState } from "react";

const CotizadorContex = createContext();

// provider donde vienen los datos
const CotizadorProvider = ({ children }) => {
  return (
    <CotizadorContex.Provider value={{}}>{children}</CotizadorContex.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContex;
