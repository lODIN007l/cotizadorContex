import useCotizador from "../hooks/useCotizador";

import React from "react";

const Error = () => {
  const { error } = useCotizador();
  return (
    <div className="border text-center border-red-400 bg-red-100 py-3 font-bold">
      <p>{error}</p>
    </div>
  );
};

export default Error;
