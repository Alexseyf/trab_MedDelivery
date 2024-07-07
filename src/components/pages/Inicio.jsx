import React from 'react'
import "./Inicio.css"
import Depoimentos from '../Depoimentos'

export const Inicio = () => {
  return (
    <>
    <div className='home__container'>
      <div className="home__left__side">
        <img className='home__img' src="../../img/banner.jpg" alt="" />
      </div>
      <div className="home__right__side">
      <h2>Seja bem-vindo ao MedDelivery</h2>
      <p>
        O <span>MedDelivery</span> é uma plataforma de delivery de medicamentos que visa facilitar a vida de seus clientes.
      </p>
      <p>
        Aqui você pode comprar medicamentos, enviar receitas, acumular pontos de fidelidade e muito mais.
      </p>
      <p>
        Acesse o menu para conhecer todas as funcionalidades.
      </p>
      </div>
    </div>
      <div className="depoimentos">
        <Depoimentos />
      </div>
      <div>
        {/* <Carousel /> */}
      </div>
      </>
  )
}

export default Inicio

