import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Raster from "./Raster"; // 🔥 Importação correta

function App() {
  return (
    <Router basename="/Raster"> {/* 🔥 Adicionei o BrowserRouter para envolver as rotas */}
      <Routes>
        <Route path="/" element={<Raster />} /> {/* Raster como página inicial */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Raster" element={<Raster />} />
      </Routes>
    </Router>
  );
}

export default App;