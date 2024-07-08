import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Inicio, Comprar, Receita,  } from "./components/pages";
import Fidelidade from "./components/pages/Fidelidade";
import Sobre from "./components/pages/Sobre";
import Footer from "./components/Footer";
import Produto from "./components/Produto";

function App() {
  const [produtos, setProdutos] = React.useState([])
  const [showSidebar, setShowSidebar] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState([])
  const [cartTotal, setCartTotal] = React.useState(0)

  const addCartTotal = (valor) => {
    setCartTotal(cartTotal + valor)
  }

  React.useEffect(() => {
    fetch('../data/produtos.json')
    .then((res) =>res.json())
    .then((data) => setProdutos(data.produtos))
  }
  , [])

  const addProductToCart = (id) => {
  const productToAdd = produtos.filter((produto) => produto.id === id)[0]
  if(selectedProduct.includes(productToAdd)) return
  setSelectedProduct([...selectedProduct, productToAdd]);
  setCartTotal(cartTotal + productToAdd.valor)
  }

  const removeProductFromCart = (id) => {
    const newSelectedProduct = selectedProduct.filter((produto) => produto.id !== id)
    setSelectedProduct(newSelectedProduct)
  }
  
  return (
    <>
      <div className="App">
        <Navbar removeProductFromCart={removeProductFromCart} selectedProduct={selectedProduct}
        showSidebar={showSidebar} setShowSidebar={setShowSidebar} cartTotal={cartTotal} addCartTotal={addCartTotal} />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/comprar" element={<Comprar addProductToCart={addProductToCart} produtos={produtos} setProdutos={setProdutos}/>} />
          <Route path="/receita" element={<Receita />} />
          <Route path="/fidelidade" element={<Fidelidade />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
