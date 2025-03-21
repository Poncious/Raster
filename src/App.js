import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardPage from "./pages/DashboardPage";
import Raster from "./Raster"; // 🔥 Importação correta

function App() {
  return (
    <Router> {/* 🔥 Adicionei o BrowserRouter para envolver as rotas */}
      <Routes>
        <Route path="/" element={<Raster />} /> {/* Raster como página inicial */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-page" element={<DashboardPage />} />
        <Route path="/Raster" element={<Raster />} />
      </Routes>
    </Router>
  );
}

export default App;