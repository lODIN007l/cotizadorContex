import { MARCAS, YEARS, PLANES } from "../constants";
import { Fragment, useContext } from "react";
import CotizadorContex from "../context/CotizadorProvider";

const Formulario = () => {
  const { modal, cambiarState } = useContext(CotizadorContex);
  console.log(modal);

  return (
    <>
      <button onClick={cambiarState}>Cambiar valor de context </button>
      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select name="marca" className="w-full bg-white border-gray-200">
            <option value="">--Selecciona Marca--</option>
            {MARCAS.map((marca) => (
              <option value={marca.id} key={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        {/* año */}
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select name="marca" className="w-full bg-white border-gray-200">
            <option value="">--Selecciona Año--</option>
            {YEARS.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        {/* PLANES */}
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elije un plan
          </label>
          <div className="flex gap-3">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input type="radio" name="plan" value={plan.id} />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer p-3 font-bold uppercase transition-colors"
          value="Cotizar"
        />
      </form>
    </>
  );
};

export default Formulario;
