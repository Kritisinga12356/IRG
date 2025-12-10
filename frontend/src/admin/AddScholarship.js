// import React, { useState } from "react";

// const AddScholarship = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [provider, setProvider] = useState("");
//   const [eligibility, setEligibility] = useState("");
//   const [deadline, setDeadline] = useState("");
//   const [applyLink, setApplyLink] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       title,
//       description,
//       provider,
//       eligibility,
//       deadline,
//       applyLink,
//     };

//     const res = await fetch("http://localhost:5000/api/scholarships", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();
//     alert("Scholarship Added Successfully!");
//   };

//   return (
//     <div>
//       <h2>Add Scholarship</h2>

//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Title"
//           value={title} onChange={(e) => setTitle(e.target.value)} />

//         <textarea placeholder="Description"
//           value={description} onChange={(e) => setDescription(e.target.value)} />

//         <input type="text" placeholder="Provider"
//           value={provider} onChange={(e) => setProvider(e.target.value)} />

//         <input type="text" placeholder="Eligibility"
//           value={eligibility} onChange={(e) => setEligibility(e.target.value)} />

//         <input type="text" placeholder="Deadline"
//           value={deadline} onChange={(e) => setDeadline(e.target.value)} />

//         <input type="text" placeholder="Apply Link"
//           value={applyLink} onChange={(e) => setApplyLink(e.target.value)} />

//         <button type="submit">Add Scholarship</button>
//       </form>
//     </div>
//   );
// };

// export default AddScholarship;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AddScholarship = () => {
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [provider, setProvider] = useState("");
//   const [eligibility, setEligibility] = useState("");
//   const [deadline, setDeadline] = useState("");
//   const [applyLink, setApplyLink] = useState("");
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("adminToken");

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("provider", provider);
//     formData.append("eligibility", eligibility);
//     formData.append("deadline", deadline);
//     formData.append("applyLink", applyLink);

//     // ⭐ Only append image if user selects file
//     if (image) {
//       formData.append("image", image);
//     }

//     const res = await fetch("http://localhost:5000/api/scholarships", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         // ❌ DON'T ADD Content-Type (browser sets it automatically in FormData)
//       },
//       body: formData,
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       alert("❌ Error: " + (data.error || "Failed to add scholarship"));
//       return;
//     }

//     alert("🎉 Scholarship Added Successfully!");
//     navigate("/admin/scholarships");
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>➕ Add New Scholarship</h2>

//         <form onSubmit={handleSubmit} style={styles.form}>
          
//           <input
//             type="text"
//             placeholder="Scholarship Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             style={styles.input}
//             required
//           />

//           <textarea
//             placeholder="Short Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             style={styles.textarea}
//             required
//           />

//           <input
//             type="text"
//             placeholder="Provider / Organization Name"
//             value={provider}
//             onChange={(e) => setProvider(e.target.value)}
//             style={styles.input}
//             required
//           />

//           <input
//             type="text"
//             placeholder="Eligibility Criteria"
//             value={eligibility}
//             onChange={(e) => setEligibility(e.target.value)}
//             style={styles.input}
//             required
//           />

//           <input
//             type="text"
//             placeholder="Application Deadline"
//             value={deadline}
//             onChange={(e) => setDeadline(e.target.value)}
//             style={styles.input}
//             required
//           />

//           <input
//             type="text"
//             placeholder="Official Apply Link"
//             value={applyLink}
//             onChange={(e) => setApplyLink(e.target.value)}
//             style={styles.input}
//             required
//           />

//           {/* ⭐ Image Upload */}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])}
//             style={styles.input}
//             required
//           />

//           <button type="submit" style={styles.button}>
//             Add Scholarship
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   page: {
//     display: "flex",
//     justifyContent: "center",
//     padding: "50px",
//     background: "#f3f6fb",
//     minHeight: "100vh",
//   },
//   card: {
//     width: "500px",
//     padding: "30px",
//     borderRadius: "15px",
//     background: "#ffffff",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "28px",
//     fontWeight: "bold",
//     color: "#2e4a7d",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   input: {
//     padding: "12px",
//     borderRadius: "8px",
//     border: "1px solid #cbd5e1",
//     fontSize: "16px",
//   },
//   textarea: {
//     padding: "12px",
//     height: "120px",
//     borderRadius: "8px",
//     border: "1px solid #cbd5e1",
//     fontSize: "16px",
//   },
//   button: {
//     marginTop: "10px",
//     padding: "12px",
//     background: "#2e4a7d",
//     color: "white",
//     fontSize: "18px",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "0.3s",
//   },
// };

// export default AddScholarship;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddScholarship = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [applyLink, setApplyLink] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("adminToken");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("applyLink", applyLink);

    if (image) {
      formData.append("image", image);
    }

    const res = await fetch("http://localhost:5000/api/scholarships", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      alert("❌ Error: " + (data.error || "Failed to add scholarship"));
      return;
    }

    alert("🎉 Scholarship Added Successfully!");
    navigate("/admin/scholarships");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>➕ Add New Scholarship</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          
          <input
            type="text"
            placeholder="Scholarship Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />

          <textarea
            placeholder="Short Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
            required
          />

          <input
            type="text"
            placeholder="Official Apply Link"
            value={applyLink}
            onChange={(e) => setApplyLink(e.target.value)}
            style={styles.input}
            required
          />

          {/* Upload Image */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Add Scholarship
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    padding: "50px",
    background: "#f3f6fb",
    minHeight: "100vh",
  },
  card: {
    width: "500px",
    padding: "30px",
    borderRadius: "15px",
    background: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "bold",
    color: "#2e4a7d",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
  },
  textarea: {
    padding: "12px",
    height: "120px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    background: "#2e4a7d",
    color: "white",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default AddScholarship;
