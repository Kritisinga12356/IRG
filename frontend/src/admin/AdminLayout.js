import React from "react";
import { Outlet, Link } from "react-router-dom";
import { LogOut, LayoutDashboard, PlusCircle, FolderKanban } from "lucide-react";
import "./AdminLayout.css";

const handleLogout = () => {
  localStorage.removeItem("admintoken");
  window.location.href = "/admin/login";
};


const AdminLayout = () => {
  return (
    <div className="admin-container">

      {/* ⭐ TOP NAVBAR (Modern + Glass + Shadow) */}
      <div className="admin-topbar">
        <h2 className="admin-title">🎓 Scholarship Admin</h2>
<Link
      to="/"
      style={{
        padding: "8px 16px",
        background: "#27ae60",
        color: "white",
        borderRadius: "6px",
        textDecoration: "none",
        fontSize: "15px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        marginLeft: "950px",
      }}
    >
      <span>⬅</span> Back to Home
    </Link>

        <div onClick={handleLogout} className="admin-right">
          <button className="logout-btn">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

     

      {/* MAIN AREA */}
      <div className="admin-main">

        {/* ⭐ LEFT SIDEBAR */}
        <div className="admin-sidebar">
          <Link to="/admin/dashboard">
            <LayoutDashboard size={18} /> Dashboard
          </Link>

          <Link to="/admin/scholarships/add">
            <PlusCircle size={18} /> Add Scholarship
          </Link>

          <Link to="/admin/scholarships">
            <FolderKanban size={18} /> Manage Scholarships
          </Link>
        </div>

        {/* ⭐ RIGHT CONTENT */}
        <div className="admin-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;
