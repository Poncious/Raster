import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -23.55052,
  lng: -46.633308,
};

function DashboardPage() {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);

  // Simulando veículos logados
  useEffect(() => {
    const mockVehicles = [
      { id: 1, name: "Caminhão 01", lat: -23.55052, lng: -46.633308 },
      { id: 2, name: "Moto Entrega", lat: -23.55252, lng: -46.638308 },
      { id: 3, name: "Carro Logístico", lat: -23.55352, lng: -46.631308 },
    ];
    setVehicles(mockVehicles);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Mapa de Veículos Logados</h2>

      {/* Mapa do Google */}
      <LoadScript googleMapsApiKey="AIzaSyD4fmQ2D5CRq8yMJ__696M4XEwhZUyNOMk">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
          {vehicles.map((vehicle) => (
            <Marker key={vehicle.id} position={{ lat: vehicle.lat, lng: vehicle.lng }} />
          ))}
        </GoogleMap>
      </LoadScript>

      {/* Botão de Voltar */}
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Voltar
      </button>
    </div>
  );
}

export default DashboardPage;