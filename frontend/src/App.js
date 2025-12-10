

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// User Pages
import Home from "./pages/Home";
import ApplyGrant from "./pages/ApplyGrant";
import Scholarships from "./pages/Scholarships";
import ScholarshipDetails from "./pages/ScholarshipDetails";

// Admin Pages
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import ManageScholarships from "./admin/ManageScholarships";
import AddScholarship from "./admin/AddScholarship";
import EditScholarship from "./admin/EditScholarship";
import AdminLogin from "./admin/AdminLogin";

// Protected Route
import ProtectedRoute from "./admin/ProtectedRoute";

function AppContent() {
  const location = useLocation();

  // Check if current page is admin
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Hide user navbar on admin pages */}
      {!isAdminPage && <Navbar />}

      <Routes>

        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyGrant />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/scholarship/:id" element={<ScholarshipDetails />} />

        {/* Admin Login (Public) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="scholarships" element={<ManageScholarships />} />
          <Route path="scholarships/add" element={<AddScholarship />} />
          <Route path="scholarships/edit/:id" element={<EditScholarship />} />
        </Route>

      </Routes>

      {/* Hide footer on admin pages */}
      {!isAdminPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
