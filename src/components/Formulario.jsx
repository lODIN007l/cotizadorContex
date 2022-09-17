import { MARCAS, YEARS, PLANES } from "../constants";
import { Fragment } from "react";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {
  const { datos, handleChangeDatos, error, setError } = useCotizador();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(datos).includes("")) {
      // console.error("campos obligatorios");
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
  };

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            onChange={(e) => handleChangeDatos(e)}
            value={datos.marca}
            name="marca"
            className="w-full bg-white border-gray-200"
          >
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
          <select
            onChange={(e) => handleChangeDatos(e)}
            value={datos.year}
            name="year"
            className="w-full bg-white border-gray-200"
          >
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
                <input
                  onChange={(e) => handleChangeDatos(e)}
                  type="radio"
                  name="plan"
                  value={plan.id}
                />
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
