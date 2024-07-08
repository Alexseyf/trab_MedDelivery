import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./SidebarProduct.css";

const SidebarProduct = ({
  id,
    farmaco,
    valor,
    imagem,
    removeProductFromCart,
    addCartTotal,
}) => {
  const [quantidade, setQuantidade] = React.useState(1)
  const [soma, setSoma] = React.useState(valor)



  return (
    <div className="sidebar__product">
      <div className="left__side">
        <button onClick={()=>{removeProductFromCart(id)}} className="remove__product">
          <IoCloseOutline />
        </button>
        <div className="datails">
        <h4>{farmaco}</h4>
        <p>R$ {valor}</p>
        <input type="number" min={1} max={100} value={quantidade}
        onChange={(e) => {
          setQuantidade(e.target.value)
          addCartTotal(valor * e.target.value - soma)
          setSoma(valor * e.target.value)
        }}
        />
        {quantidade > 1 ? <p>Total: R$ {(soma).toLocaleString("pt-br", { minimumFractionDigits: 2 })}</p> : null}
      </div>
      </div>
      <div className="right__side">
          <img src={`../data/${imagem}`} alt={farmaco} />
      </div>
    </div>
  );
};

export default SidebarProduct;
