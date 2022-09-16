import { createContext } from "react";

const CotizadorContex = createContext();

const hola = "holmundo";
const fholamundo = () => {
  console.log("hola desde la funcion");
};
// provider donde vienen los datos
const CotizadorProvider = ({ children }) => {
  return (
    <CotizadorContex.Provider value={{ hola: hola, fholamundo }}>
      {children}
    </CotizadorContex.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContex;
