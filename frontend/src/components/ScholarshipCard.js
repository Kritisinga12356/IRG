// import React from "react";

// export default function ScholarshipCard({ item }) {
//   if (!item) return null;

//   return (
//     <div style={styles.card}>

//       {/* Image */}
//       {item.image && (
//         <img
//           src={`http://localhost:5000/uploads/${item.image}`}
//           alt={item.title}
//           style={styles.image}
//         />
//       )}

//       {/* Title */}
//       <div style={styles.headerBox}>
//         <h3 style={styles.title}>{item.title}</h3>
//       </div>

//       {/* Short Description */}
//       <p style={styles.description}>
//         {item.description?.slice(0, 120)}...
//       </p>

//       {/* Info Rows */}
//       <div style={styles.row}>
//         <span style={styles.label}>Provider:</span>
//         <span style={styles.value}>{item.provider}</span>
//       </div>

//       <div style={styles.row}>
//         <span style={styles.label}>Eligibility:</span>
//         <span style={styles.value}>{item.eligibility}</span>
//       </div>

//       <div style={styles.row}>
//         <span style={styles.label}>Deadline:</span>
//         <span style={styles.value}>{item.deadline}</span>
//       </div>

//       {/* Buttons */}
//       <div style={styles.buttonRow}>
//         <a
//           href={item.applyLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           style={styles.officialBtn}
//         >
//           Official Website →
//         </a>

//         <button
//           style={styles.readMoreBtn}
//           onClick={() => alert(item.description)}
//         >
//           Read More
//         </button>
//       </div>

//     </div>
//   );
// }

// const styles = {
//   card: {
//     width: "330px",
//     background: "#ffffff",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.12)",
//     border: "1px solid #e5e7eb",
//     display: "flex",
//     flexDirection: "column",
//     gap: "12px",
//   },

//   image: {
//     width: "100%",
//     height: "200px",
//     objectFit: "cover",
//     borderRadius: "10px",
//   },

//   headerBox: {
//     background: "#e7eefc",
//     padding: "10px",
//     borderRadius: "8px",
//   },

//   title: {
//     fontSize: "20px",
//     margin: 0,
//     color: "#1a3a8a",
//     fontWeight: "bold",
//   },

//   description: {
//     fontSize: "14px",
//     color: "#475569",
//     lineHeight: "1.4",
//   },

//   row: {
//     display: "flex",
//     justifyContent: "space-between",
//     fontSize: "14px",
//   },

//   label: {
//     fontWeight: "bold",
//     color: "#1f2937",
//   },

//   value: {
//     color: "#374151",
//   },

//   buttonRow: {
//     marginTop: "15px",
//     display: "flex",
//     justifyContent: "space-between",
//     gap: "10px",
//   },

//   officialBtn: {
//     flex: 1,
//     padding: "10px",
//     background: "#1e3a8a",
//     color: "white",
//     borderRadius: "8px",
//     textDecoration: "none",
//     fontWeight: "bold",
//     textAlign: "center",
//   },

//   readMoreBtn: {
//     flex: 1,
//     padding: "10px",
//     background: "#4b5563",
//     color: "white",
//     borderRadius: "8px",
//     border: "none",
//     fontWeight: "bold",
//     cursor: "pointer",
//   },
// };


import React from "react";

export default function ScholarshipCard({ item }) {
  const {
    title = "No Title",
    description = "No Description",
    image = null,
    applyLink = "#",
  } = item;

  const BASE_URL = "https://irg-8.onrender.com"; // ⭐ Render backend URL

  return (
    <div style={styles.card}>

      {/* IMAGE — Safe Fallback */}
      {image ? (
        <img
          src={`${BASE_URL}/uploads/${image}`}   // ⭐ FIXED URL
          alt={title}
          style={styles.image}
        />
      ) : (
        <div style={styles.noImage}>No Image</div>
      )}

      {/* TITLE */}
      <h3 style={styles.title}>{title}</h3>

      {/* PARAGRAPH */}
      <p style={styles.text}>{description}</p>

      {/* BUTTONS */}
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
    background: "#ffffff",
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
