import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import SidebarProduct from "./SidebarProduct";
import "./SidebarCart.css";
import { Link } from "react-router-dom";

const SidebarCart = ({showSidebar, setShowSidebar, selectedProduct, cartTotal, removeProductFromCart, addCartTotal}) => {
  return (
    <aside className={`sidebar__cart ${showSidebar && "show"} `}>
      <div className="top">
        <h3>Seu carrinho</h3>
        <button>
          <IoCloseOutline onClick={()=> setShowSidebar(false)} />
        </button>
      </div>
      <div className="sidebar__list">
        {selectedProduct.map((produto) => (
          <SidebarProduct key={produto.id} {...produto} removeProductFromCart={removeProductFromCart} addCartTotal={addCartTotal} />
        ))}
      </div>
      <div className="total__container">
        <b>Total: </b> {(cartTotal).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
      <Link to="/cart/checkout" className="btn__icon">
      <span>Pagar Agora</span>
        </Link>
        {selectedProduct.length < 1 ? <p>Seu carrinho está vazio</p> : null}
      </div>
    </aside>
  );
};

export default SidebarCart;
