import { useContext } from "react";
import CotizadorContex from "../context/CotizadorProvider";
import { CotizadorProvider } from "../context/CotizadorProvider";

const useCotizador = () => {
  return useContext(CotizadorContex);
};

export default useCotizador;
