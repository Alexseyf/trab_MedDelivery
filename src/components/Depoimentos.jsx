import React from 'react'
import './Depoimentos.css'

const Depoimentos = () => {
  return (
    <div className='depoimentos__container'>
      <div className="depoimentos">
        <div className="depoimento">
            <p>"</p>
            <p>Muito fácil encomendar seus medicamentos através da plataforma.</p>
            <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p>Florinda</p>
        </div>
        <div className="depoimento">
            <p>"</p>
            <p>Recomendo.</p>
            <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p>Aristídes</p>
        </div>
        <div className="depoimento">
            <p>"</p>
            <p>Minha netinha me ajudou nas primeiras vezes. Hoje já faço minhas compras sozinha.</p>
            <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p>Maria das Dores</p>
        </div>
      </div>
    </div>
  )
}

export default Depoimentos
