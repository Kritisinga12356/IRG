import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



// pages
import Home from "./pages/Home";
import Scholarships from "./pages/Scholarships";
import ScholarshipDetails from "./pages/ScholarshipDetails";

// admin
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import ManageScholarships from "./admin/ManageScholarships";
import AddScholarship from "./admin/AddScholarship";
import EditScholarship from "./admin/EditScholarship";
import AdminLogin from "./admin/AdminLogin";

import AdminProtectedRoute from "./components/AdminProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public/user routes */}
        <Route path="/" element={<Home />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/scholarship/:id" element={<ScholarshipDetails />} />

        {/* Admin login (public) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* All admin routes protected */}
        <Route
          path="/admin/*"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >
          {/* nested inside AdminLayout */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="scholarships" element={<ManageScholarships />} />
          <Route path="scholarships/add" element={<AddScholarship />} />
          <Route path="scholarships/edit/:id" element={<EditScholarship />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
