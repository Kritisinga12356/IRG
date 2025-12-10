import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("adminToken", data.token);
      navigate("/admin/dashboard");
    } else {
      alert(data.message || "Invalid Login");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>🔐 Admin Login</h2>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button style={styles.button}>Login</button>

          {/* 🔙 Back Button (Login ke niche) */}
          <Link to="/" style={styles.backBtn}>
            ⬅ Back to Home
          </Link>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#eef2f7",
  },
  card: {
    width: "400px",
    padding: "30px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "26px",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    background: "#2e4a7d",
    color: "white",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  // Back Button styling
  backBtn: {
    marginTop: "10px",
    padding: "10px",
    textAlign: "center",
    background: "#27ae60",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "16px",
  },
};
