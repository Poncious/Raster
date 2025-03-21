import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -23.55052, // Latitude de exemplo (São Paulo)
  lng: -46.633308, // Longitude de exemplo (São Paulo)
};

function MapaRastreamento() {
  return (
    <LoadScript googleMapsApiKey= "AIzaSyD4fmQ2D5CRq8yMJ__696M4XEwhZUyNOMk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Adicione os veículos aqui como marcadores */}
        <Marker position={{ lat: -23.55052, lng: -46.633308 }} label="Carro A" />
        <Marker position={{ lat: -23.56052, lng: -46.643308 }} label="Moto B" />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapaRastreamento;