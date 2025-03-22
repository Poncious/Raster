import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -23.55052,
  lng: -46.633308,
};

export default function Dashboard() {
  const [modelo, setModelo] = useState("");
  const [placa, setPlaca] = useState("");
  const [status, setStatus] = useState("Parado");
  const [vehicles, setVehicles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!modelo || !placa) return alert("Preencha todos os campos!");

    const novoVeiculo = {
      id: Date.now(),
      modelo,
      placa,
      status,
      lat: center.lat + (Math.random() - 0.5) * 0.02,
      lng: center.lng + (Math.random() - 0.5) * 0.02,
    };

    setVehicles([...vehicles, novoVeiculo]);
    setModelo("");
    setPlaca("");
    setStatus("Parado");
  };

  return (
    <div style={styles.container}>
      {/* Painel Esquerdo - Formulário */}
      <div style={styles.sidebar}>
        <h2>🚗 Cadastro de Veículo</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Placa"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            style={styles.input}
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={styles.input}
          >
            <option value="Parado">Parado</option>
            <option value="Em movimento">Em movimento</option>
          </select>
          <button type="submit" style={styles.button}>Cadastrar</button>
        </form>
      </div>

      {/* Painel Central - Lista de Veículos */}
      <div style={styles.listContainer}>
        <h3>📋 Veículos Cadastrados</h3>
        <ul style={styles.list}>
          {vehicles.length === 0 ? (
            <p>Nenhum veículo cadastrado.</p>
          ) : (
            vehicles.map((vehicle) => (
              <li key={vehicle.id} style={styles.listItem}>
                <strong>{vehicle.modelo}</strong> - {vehicle.placa} <br />
                <span>Status: {vehicle.status}</span>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Painel Direito - Mapa */}
      <div style={styles.mapContainer}>
        <h2>🗺️ Mapa de Veículos</h2>
        <LoadScript googleMapsApiKey="AIzaSyBISuV56lAvZM6xrocLrG6JJpCC3qPdOY0">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
            {vehicles.map((vehicle) => (
              <Marker key={vehicle.id} position={{ lat: vehicle.lat, lng: vehicle.lng }} />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  sidebar: {
    width: "30%",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  listContainer: {
    width: "25%",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderLeft: "1px solid #ddd",
    borderRight: "1px solid #ddd",
    overflowY: "auto",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "#f1f1f1",
    margin: "5px 0",
    padding: "10px",
    borderRadius: "5px",
  },
  mapContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
};