import React from "react";
import Produto from "../Produto";
import "./Comprar.css";

export const Comprar = ({ produtos }) => {
  return (
    <>
      <div className="produtos__container">
        <div className="produtos">
        <h1 className="produtos__title">Medicamentos</h1>
        <br />
        <div className="produtos__lista">
          {produtos.map((produto, num) => (
            <Produto key={num} {...produto} />
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default Comprar;
