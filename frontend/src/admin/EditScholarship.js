// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function EditScholarship() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     provider: "",
//     eligibility: "",
//     deadline: "",
//     applyLink: "",
//   });

//   // Load old data from backend
//   useEffect(() => {
//     fetch(`http://localhost:5000/api/scholarships/${id}`)
//       .then((res) => res.json())
//       .then((data) => setForm(data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   // update form inputs
//   const change = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // update API call
//   const update = async () => {
//     await fetch(`http://localhost:5000/api/scholarships/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     alert("Updated Successfully!");
//     navigate("/admin/scholarships"); // back to manage page
//   };

//   return (
//     <div>
//       <h2>Edit Scholarship</h2>

//       <input name="title" value={form.title} onChange={change} />
//       <textarea name="description" value={form.description} onChange={change} />
//       <input name="provider" value={form.provider} onChange={change} />
//       <input name="eligibility" value={form.eligibility} onChange={change} />
//       <input name="deadline" value={form.deadline} onChange={change} />
//       <input name="applyLink" value={form.applyLink} onChange={change} />

//       <button onClick={update}>Updaee</button>
//     </div>
//   );
// }

// export default EditScholarship;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function EditScholarship() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     provider: "",
//     eligibility: "",
//     deadline: "",
//     applyLink: "",
//   });

//   const [loading, setLoading] = useState(true);

//   // Load existing scholarship
//   useEffect(() => {
//     const loadData = async () => {
//       const res = await fetch(`http://localhost:5000/api/scholarships/${id}`);
//       const data = await res.json();
//       setForm(data);
//       setLoading(false);
//     };
//     loadData();
//   }, [id]);

//   const change = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const update = async () => {
//     await fetch(`http://localhost:5000/api/scholarships/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     alert("Updated Successfully!");
//     navigate("/admin/scholarships");
//   };

//   if (loading) return <h2>Loading...</h2>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Edit Scholarship</h2>

//       <input
//         name="title"
//         value={form.title}
//         onChange={change}
//         placeholder="Title"
//         style={inputStyle}
//       />

//       <textarea
//         name="description"
//         value={form.description}
//         onChange={change}
//         placeholder="Description"
//         style={textareaStyle}
//       />

//       <input
//         name="provider"
//         value={form.provider}
//         onChange={change}
//         placeholder="Provider"
//         style={inputStyle}
//       />

//       <input
//         name="eligibility"
//         value={form.eligibility}
//         onChange={change}
//         placeholder="Eligibility"
//         style={inputStyle}
//       />

//       <input
//         name="deadline"
//         value={form.deadline}
//         onChange={change}
//         placeholder="Deadline"
//         style={inputStyle}
//       />

//       <input
//         name="applyLink"
//         value={form.applyLink}
//         onChange={change}
//         placeholder="Apply Link"
//         style={inputStyle}
//       />

//       <button onClick={update} style={btnStyle}>
//         Update Scholarship
//       </button>
//     </div>
//   );
// }

// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   margin: "10px 0",
//   borderRadius: "6px",
//   border: "1px solid #ccc",
// };

// const textareaStyle = {
//   ...inputStyle,
//   height: "100px",
// };

// const btnStyle = {
//   background: "#2ecc71",
//   color: "#fff",
//   padding: "10px 20px",
//   border: "none",
//   borderRadius: "6px",
//   cursor: "pointer",
//   marginTop: "10px",
// };

// export default EditScholarship;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditScholarship() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    applyLink: "",
  });

  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState("");
  const [loading, setLoading] = useState(true);

  // Load existing scholarship
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`http://localhost:5000/api/scholarships/${id}`);
      const data = await res.json();

      setForm({
        title: data.title,
        description: data.description,
        applyLink: data.applyLink,
      });

      setOldImage(data.image); // old image preview
      setLoading(false);
    };

    loadData();
  }, [id]);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const update = async () => {
    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("applyLink", form.applyLink);

    if (image) {
      formData.append("image", image);
    }

    await fetch(`http://localhost:5000/api/scholarships/${id}`, {
      method: "PUT",
      body: formData,
    });

    alert("✔ Updated Successfully!");
    navigate("/admin/scholarships");
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ marginBottom: "20px" }}>Edit Scholarship</h2>

      <input
        name="title"
        value={form.title}
        onChange={change}
        placeholder="Title"
        style={inputStyle}
      />

      <textarea
        name="description"
        value={form.description}
        onChange={change}
        placeholder="Description"
        style={textareaStyle}
      />

      <input
        name="applyLink"
        value={form.applyLink}
        onChange={change}
        placeholder="Apply Link"
        style={inputStyle}
      />

      {/* Show Old Image */}
      {oldImage && (
        <img
          src={`http://localhost:5000/uploads/${oldImage}`}
          alt="Old"
          style={{ width: "150px", marginTop: "10px", borderRadius: "8px" }}
        />
      )}

      {/* Upload New Image */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        style={inputStyle}
      />

      <button onClick={update} style={btnStyle}>
        Update Scholarship
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const textareaStyle = {
  ...inputStyle,
  height: "100px",
};

const btnStyle = {
  background: "#3498db",
  color: "#fff",
  padding: "12px 20px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "10px",
};

export default EditScholarship;
