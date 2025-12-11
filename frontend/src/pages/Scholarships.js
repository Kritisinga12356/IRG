import React, { useEffect, useState } from "react";
import ScholarshipCard from "../components/ScholarshipCard";
import API from "../api";

export default function Scholarships() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://irg-8.onrender.com";   // ⭐ Render Backend URL

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/scholarships`); // ⭐ FIXED
        const data = await res.json();

        console.log("API RESPONSE:", data);

        // Backend returns array
        if (Array.isArray(data)) {
          setList(data);
        } else if (Array.isArray(data.data)) {
          setList(data.data);
        } else {
          setList([]);
        }
      } catch (e) {
        console.log("Error fetching:", e);
        setList([]);
      } finally {
        setLoading(false);
      }
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
            gap: 58,
            marginTop: 32,
          }}
        >
          {Array.isArray(list) &&
            list.map((item) => <ScholarshipCard key={item._id} item={item} />)}
        </div>
      )}
    </div>
  );
}
