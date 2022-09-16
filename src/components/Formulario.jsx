const Formulario = () => {
  return (
    <>
      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select name="marca" className="w-full bg-white border-gray-200">
            <option value="">--Selecciona Marca--</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Formulario;
