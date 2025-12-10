

import React, { useEffect, useState } from "react";
import ScholarshipCard from "../components/ScholarshipCard";



export default function Scholarships() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  


  const load = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/scholarships");
      const data = await res.json();

      console.log("API DATA =>", data);

      // If API returns { success, data }
      if (Array.isArray(data)) {
        setList(data);
      } else if (Array.isArray(data.data)) {
        setList(data.data);
      } else {
        setList([]); // fallback
      }
    } catch (err) {
      console.error(err);
      setList([]);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
  const load = async () => {
    const res = await fetch("http://localhost:5000/api/scholarships");
    const json = await res.json();

    console.log("API RESPONSE:", json);

    setList(json);  // ⭐ backend array भेज रहा है
    setLoading(false);
  };
  load();
}, []);



  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Government Scholarships (2025)
      </h1>

      <p className="text-gray-600 text-center mb-10">
        Find the best government scholarships from central and state schemes.
        Search, filter, and explore verified opportunities for your education.
      </p>

      

       
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 58,marginTop: 32,
          }}
        >
          {Array.isArray(list) &&
            list.map((item) => <ScholarshipCard key={item._id} item={item} />)}
        </div>
       

      )}
    </div>
   

  );
}


