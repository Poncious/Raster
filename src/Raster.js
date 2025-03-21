import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Raster() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Credenciais fixas (substituir por autenticação real depois)
    const validEmail = "admin@raster";
    const validPassword = "admin";

    if (email === validEmail && password === validPassword) {
      navigate("/dashboard"); // Redireciona para o painel após login bem-sucedido
    } else {
      setError("E-mail ou senha inválidos!");
    }
  };

  return (
    <div style={styles.container}>
      {/* Área de Login */}
      <div style={styles.content}>
        <h1>Bem-vindo ao Raster</h1>
        <p>Monitoramento e rastreamento remoto</p>
        <p>Faça login para continuar.</p>

        <form style={styles.form} onSubmit={handleLogin}>
          {error && <p style={styles.error}>{error}</p>}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>
      </div>

      
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    padding: "20px",
  },
  content: {
    flex: 1,
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  input: {
    width: "90%",
    maxWidth: "300px",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "90%",
    maxWidth: "300px",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
  mapContainer: {
    width: "40%",
    height: "80vh",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
  },
};

export default Raster;