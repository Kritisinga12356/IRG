import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [apps, setApps] = useState([]);

  const load = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/applications");
    setApps(res.data);
  };

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/admin/application/${id}`, {
      status
    });
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Dashboard</h2>

      {apps.map((a) => (
        <div key={a._id} style={{ border: "1px solid gray", padding: 15, margin: 10 }}>
          <h3>{a.proposalTitle}</h3>
          <p>Applicant: {a?.applicant?.fullName}</p>
          <p>Status: {a.status}</p>

          <button onClick={() => updateStatus(a._id, "Approved")}>Approve</button>
          <button onClick={() => updateStatus(a._id, "Rejected")}>Reject</button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
