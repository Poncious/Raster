import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Bem-vindo ao Raster!</h2>
      <p>Você está logado.</p>
      <button onClick={() => navigate("/dashboard-page")} style={styles.button}>
        OK
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Dashboard;