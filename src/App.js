import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CadastroVeiculo from "./pages/CadastroVeiculo";

function App() {
  const [veiculos, setVeiculos] = useState([
    { id: 1, modelo: "Honda CG 160", placa: "ABC-1234", status: "Em movimento" },
    { id: 2, modelo: "Yamaha Fazer 250", placa: "DEF-5678", status: "Parado" },
    { id: 3, modelo: "Fiat Uno", placa: "GHI-9012", status: "Em movimento" },
  ]);

  const adicionarVeiculo = (novoVeiculo) => {
    setVeiculos((prevVeiculos) => [...prevVeiculos, novoVeiculo]); // ✅ Atualiza corretamente a lista
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={<Dashboard veiculos={veiculos} adicionarVeiculo={adicionarVeiculo} />} 
        />
        <Route 
          path="/cadastro" 
          element={<CadastroVeiculo adicionarVeiculo={adicionarVeiculo} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;