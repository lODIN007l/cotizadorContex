import { createContext, useState } from "react";

const CotizadorContex = createContext();

// provider donde vienen los datos
const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  // actualizar el state
  const handleChangeDatos = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <CotizadorContex.Provider value={{ datos, handleChangeDatos }}>
      {children}
    </CotizadorContex.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContex;
