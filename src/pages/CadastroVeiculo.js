import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroVeiculo({ adicionarVeiculo }) {
  const navigate = useNavigate();
  const [modelo, setModelo] = useState("");
  const [placa, setPlaca] = useState("");
  const [status, setStatus] = useState("Parado");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!modelo || !placa) return alert("Preencha todos os campos!");

    const novoVeiculo = {
      id: Date.now(),
      modelo,
      placa,
      status,
    };

    adicionarVeiculo(novoVeiculo); // ✅ Agora está correto!
    navigate("/dashboard"); // Redireciona após cadastro
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">🚗 Cadastro de Veículo</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <input
          type="text"
          placeholder="Modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          className="w-full p-2 mb-3 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          className="w-full p-2 mb-3 border rounded-lg"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 mb-3 border rounded-lg"
        >
          <option value="Parado">Parado</option>
          <option value="Em movimento">Em movimento</option>
        </select>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">
          Cadastrar Veículo
        </button>
      </form>
    </div>
  );
}
