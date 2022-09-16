import Formulario from "./Formulario";
import CotizadorContex from "../context/CotizadorProvider";
import { useContext } from "react";

const AppSeguro = () => {
  const { modal, cambiarState } = useContext(CotizadorContex);
  // console.log(modal);

  return (
    <>
      <header className="my-10 ">
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador de Seguro de autos
        </h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Formulario />
      </main>
    </>
  );
};

export default AppSeguro;
