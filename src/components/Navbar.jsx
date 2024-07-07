import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <nav>
      <Link to="/" className="logo__container">
        <img src="../../img/logo.png" className="logo" alt="" />
        <h1>MedDelivery</h1>
      </Link>
      <div className="menu" onClick={()=>{
        setopenMenu(!openMenu);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={openMenu ? "open" : ""}>
        <li>
          <NavLink to="/inicio">Início</NavLink>
        </li>
        <li>
          <NavLink to="/comprar">Comprar</NavLink>
        </li>
        <li>
          <NavLink to="/receita">Enviar Receita</NavLink>
        </li>
        <li>
          <NavLink to="/fidelidade">Fidelidade</NavLink>
        </li>
        <li>
          <NavLink to="/sobre">Sobre Nós</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
