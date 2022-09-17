import { createContext, useState } from "react";
import {
  obtenerDiferenciaYear,
  calcularmarca,
  calcularPlan,
  formatearDinero,
} from "../helpers/index.js";
const CotizadorContex = createContext();

// provider donde vienen los datos
const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState("");

  // actualizar el state
  const handleChangeDatos = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const cotizarSeguro = () => {
    console.log("cotizando");
    // console.log(datos.year);
    //una base
    let resultado = 2000;
    //obtener diferencia de años
    const diferecia = obtenerDiferenciaYear(parseInt(datos.year));
    // console.log(diferecia);
    //hay que restar el 3 por año
    resultado -= (diferecia * 3 * resultado) / 100;
    // console.log(resultado);
    //Europeo 30%
    //americano 15%
    //Latino 5%
    resultado *= calcularmarca(datos.marca);
    // console.log(resultado);

    resultado *= calcularPlan(datos.plan);
    // resultado = resultado.toFixed(2);
    // Formateamos el dinero
    resultado = formatearDinero(resultado);
    console.log(resultado);
    setResultado(resultado);
  };

  return (
    <CotizadorContex.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
      }}
    >
      {children}
    </CotizadorContex.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContex;
