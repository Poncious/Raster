import React, { useState, useEffect } from "react";

function MapaRastreamento() {
  const [veiculos, setVeiculos] = useState([]); // Inicializa como array vazio

  useEffect(() => {
    // Simulação de carregamento de dados
    setTimeout(() => {
      setVeiculos([{ id: 1, nome: "Carro A" }, { id: 2, nome: "Moto B" }]);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Mapa de Rastreamento</h2>
      {veiculos.length > 0 ? (
        veiculos.map((veiculo) => (
          <div key={veiculo.id}>{veiculo.nome}</div>
        ))
      ) : (
        <p>Carregando veículos...</p>
      )}
    </div>
  );
}

export default MapaRastreamento;