import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { IoCartOutline } from "react-icons/io5";
import SidebarCart from "./SidebarCart";

export const Navbar = ({ showSidebar, setShowSidebar, selectedProduct, cartTotal, removeProductFromCart, addCartTotal }) => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <nav>
      <SidebarCart addCartTotal={addCartTotal} removeProductFromCart={removeProductFromCart} selectedProduct={selectedProduct} showSidebar={showSidebar} setShowSidebar={setShowSidebar} cartTotal={cartTotal} />
      <Link to="/" className="logo__container">
        <img src="../../img/logo.png" className="logo" alt="" />
        <h1>MedDelivery</h1>
      </Link>
      <div
        className="menu"
        onClick={() => {
          setopenMenu(!openMenu);
        }}
      >
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
        {/* <li>
          <NavLink to="/receita">Enviar Receita</NavLink>
        </li> */}
        <li>
          <NavLink to="/fidelidade">Fidelidade</NavLink>
        </li>
        <li>
          <NavLink to="/sobre">Sobre Nós</NavLink>
        </li>
        <li onClick={() => setShowSidebar(true)} className="text__cart">
          Carrinho
        </li>
      <div onClick={() => setShowSidebar(true)}
          className="cart__icon">
        <IoCartOutline
        />
      </div>
      </ul>
      
    </nav>
    
  );
};

export default Navbar;
