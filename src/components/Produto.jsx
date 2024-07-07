import React from 'react'
import './Produto.css'

const Produto = ({
    farmaco,
    detentor,
    medicamento,
    registro,
    concentracao,
    valor,
    imagem,
  }) => {
  return (
    <div className="produto__container">
      <img className="produto__foto" src={`data/${imagem}`} alt={farmaco} />
      <h2>Medicamento: {medicamento}</h2>
      <p>Composição: {farmaco}</p>
      <p>Laboratório: {detentor}</p>
      <p>Registro: {registro}</p>
      <p>Concentração: {concentracao}</p>
      <p>Preço: {valor}</p>
      <div className="buttons__container">
        <button className="comprar__btn">Comprar Agora</button>
        <button className="carrinho__btn">Adicionar ao carrinho</button>
      </div>
    </div>
  )
}

export default Produto
