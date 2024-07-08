import React, { useState, useEffect } from "react";
import Produto from "../Produto";
import "./Comprar.css";

export const Comprar = ({ produtos, addProductToCart }) => {
  const [filteredProdutos, setFilteredProdutos] = useState(produtos);
  const [title, setTitle] = useState("Produtos");

  useEffect(() => {
    setFilteredProdutos(produtos);
  }, [produtos]);

  const handleFilterChange = (event) => {
    const selectedType = event.target.value;
    let newFilteredProdutos = [];

    if (selectedType === "todos") {
      setFilteredProdutos(produtos);
    } else {
      newFilteredProdutos = produtos.filter(
        (produto) => produto.tipo === selectedType
      );
      setFilteredProdutos(newFilteredProdutos);
    }
    if (selectedType === "medicamento") {
      setTitle("Medicamentos");
    } else if (selectedType === "vitamina") {
      setTitle("Vitaminas");
    } else if (selectedType === "suplemento") {
      setTitle("Suplementos");
    } else {
      setTitle("Produtos");
    }
  };

  return (
    <>
      <div className="filter__container">
        <div className="filter">
          <h1 className="filter__title">{title}</h1>
          <div className="filter__content">
            <div className="filter__group">
              <label htmlFor="filter__categoria">Categoria</label>
              <select id="filter__categoria" onChange={handleFilterChange}>
                <option value="todos">Todos</option>
                <option value="medicamento">Medicamentos</option>
                <option value="vitamina">Vitaminas</option>
                <option value="suplemento">Suplementos</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="produtos__container">
        <div className="produtos">
          <br />
          <div className="produtos__lista">
            {filteredProdutos.map((produto, num) => (
              <Produto key={num} {...produto} addProductToCart={addProductToCart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comprar;
