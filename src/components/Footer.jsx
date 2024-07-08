import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="download__options">
            <p>Baixe o app</p>
            <div>
                <img src="../../img/app-store.png" alt="" />
                <img src="../../img/play-store.png" alt="" />
            </div>
        </div>
        <div className="logo__footer">
            <img src="../../img/logo.png" alt="" />
        </div>
        <div className="footer__links">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a >Blog</a></li>
                <li><a >Políticas</a></li>
                <li><a >Torne-se afiliado</a></li>
            </ul>
        </div>
      </div>
      <div className="copyright">
        <p >
            Todos os direitos reservados &copy; 2024 MedDelivery
        </p>
        </div>
    </footer>
  )
}

export default Footer
