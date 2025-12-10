import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";  // 🎓 SCHOLARSHIP ICON
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <h2 className="nav-title">
        <FaGraduationCap style={{ marginRight: "10px" }} />
        Scholarship Finder
      </h2>

      <div className="nav-links">
        <Link to="/scholarships">Scholarships</Link>
        <Link to="/apply">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/admin/login">Admin</Link>
        </div>
    </nav>
  );
}

export default Navbar;
