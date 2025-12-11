import React from "react";

export default function ScholarshipCard({ item }) {
  if (!item) return null;

  const {
    title = "No Title",
    description = "No Description",
    image = null,
    applyLink = "#",
  } = item;

  // Render Backend
  const BASE_URL = "https://irg-8.onrender.com";

  return (
    <div style={styles.card}>

      {/* IMAGE */}
      {image ? (
  <img
    src={image}
    alt={title}
    style={styles.image}
  />
) : (
  <div style={styles.noImage}>No Image</div>
)}


      <h3 style={styles.title}>{title}</h3>
      <p style={styles.text}>{description}</p>

      <div style={styles.buttons}>
        <a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.officialBtn}
        >
          Official Website →
        </a>

        <button
          style={styles.readBtn}
          onClick={() => alert(description)}
        >
          Read More →
        </button>
      </div>

    </div>
  );
}

const styles = {
  card: {
    width: "320px",
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },

  image: {
    width: "100%",
    height: "190px",
    objectFit: "cover",
  },

  noImage: {
    width: "100%",
    height: "190px",
    background: "#e5e7eb",
    color: "#6b7280",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
  },

  title: {
    fontSize: "20px",
    fontWeight: "700",
    padding: "15px",
    margin: 0,
    color: "#1f2937",
  },

  text: {
    padding: "0 15px",
    fontSize: "14px",
    color: "#4b5563",
    lineHeight: "1.5",
    marginBottom: "15px",
  },

  buttons: {
    display: "flex",
    gap: "10px",
    padding: "0 15px 20px",
  },

  officialBtn: {
    flex: 1,
    padding: "10px",
    background: "#1e3a8a",
    color: "white",
    textAlign: "center",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
  },

  readBtn: {
    flex: 1,
    padding: "10px",
    background: "#374151",
    color: "white",
    textAlign: "center",
    borderRadius: "10px",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "600",
  },
};
