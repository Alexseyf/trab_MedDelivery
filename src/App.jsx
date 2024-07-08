import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Inicio, Comprar, Receita,  } from "./components/pages";
import Fidelidade from "./components/pages/Fidelidade";
import Sobre from "./components/pages/Sobre";
import Footer from "./components/Footer";

function App() {
  const [produtos, setProdutos] = React.useState([])

  React.useEffect(() => {
    fetch('../data/produtos.json')
    .then((res) =>res.json())
    .then((data) => setProdutos(data.produtos))
  }
  , [])

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/comprar" element={<Comprar produtos={produtos} setProdutos={setProdutos}/>} />
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
