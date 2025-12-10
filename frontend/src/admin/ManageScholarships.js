import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManageScholarships() {
  const [data, setData] = useState([]);

  // =============================
  // Load scholarships from backend
  // =============================
  const loadScholarships = async () => {
    const token = localStorage.getItem("adminToken"); // ✔ correct token key

    const res = await fetch("http://localhost:5000/api/scholarships", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await res.json();
    setData(result);
  };

  // Load data on page open
  useEffect(() => {
    loadScholarships();
  }, []);

  // =============================
  // Delete Scholarship
  // =============================
  const remove = async (id) => {
    if (!window.confirm("Are you sure you want to delete this scholarship?")) {
      return;
    }

    const token = localStorage.getItem("adminToken");

    const res = await fetch(`http://localhost:5000/api/scholarships/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await res.json();
    alert(result.message);

    loadScholarships(); // refresh list after delete
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📚 Manage Scholarships</h2>

      {data.length === 0 ? (
        <p style={styles.noData}>No scholarships added yet.</p>
      ) : (
        <div style={styles.grid}>
          {data.map((item) => (
            <div className="sch-card" key={item._id} style={styles.card}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.desc}>{item.description?.slice(0, 80)}...</p>

              <div style={styles.actions}>
                <Link
                  to={`/admin/scholarships/edit/${item._id}`}
                  style={styles.editBtn}
                >
                  ✏ Edit
                </Link>

                <button
                  onClick={() => remove(item._id)}
                  style={styles.deleteBtn}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "20px" },
  heading: {
    marginBottom: "20px",
    fontSize: "26px",
    fontWeight: "bold",
    textAlign: "center",
  },
  noData: { textAlign: "center", fontSize: "18px", color: "#777", marginTop: "30px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "15px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: { fontSize: "20px", marginBottom: "10px" },
  desc: { fontSize: "14px", color: "#555", marginBottom: "15px" },
  actions: { display: "flex", justifyContent: "space-between" },
  editBtn: {
    background: "#2e86de",
    color: "white",
    padding: "6px 12px",
    borderRadius: "6px",
    textDecoration: "none",
  },
  deleteBtn: {
    background: "#e74c3c",
    color: "white",
    padding: "6px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ManageScholarships;
