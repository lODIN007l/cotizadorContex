import { createContext, useState } from "react";

const CotizadorContex = createContext();

// provider donde vienen los datos
const CotizadorProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  // 2forma
  // funcion intermedia
  const cambiarState = () => {
    setModal(!modal);
  };
  return (
    <CotizadorContex.Provider value={{ modal, cambiarState }}>
      {children}
    </CotizadorContex.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContex;
