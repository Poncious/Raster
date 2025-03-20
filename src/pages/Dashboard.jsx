import { useNavigate } from "react-router-dom";

export default function Dashboard({ veiculos }) {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">🚗 Veículos Rastreados</h1>

      <button 
        onClick={() => navigate("/cadastro")}
        className="mb-4 p-2 bg-green-500 text-white rounded-lg"
      >
        ➕ Cadastrar Veículo
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {veiculos.length > 0 ? (
          veiculos.map((veiculo) => (
            <div key={veiculo.id} className="p-4 shadow-lg bg-white rounded-lg">
              <h2 className="text-xl font-bold">{veiculo.modelo}</h2>
              <p className="text-gray-600">Placa: {veiculo.placa}</p>
              <p className={`font-semibold ${veiculo.status === "Em movimento" ? "text-green-500" : "text-red-500"}`}>
                {veiculo.status}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Nenhum veículo cadastrado.</p>
        )}
      </div>

      <button 
        onClick={() => navigate("/")} 
        className="mt-6 p-2 bg-red-500 text-white rounded-lg"
      >
        Sair
      </button>
    </div>
  );
}
