import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./LandiningPage/homePage.js";
import UserLogin from "./Login/UserLogin .js";
import SignUpPage from "./Signup/SignUpPage";
import HospitalDashboard from "./DashBoard/HospitalDashboard";
 // ✅ New import
import ProtectedRoute from "./components/ProtectedRoute";

import Header from "./company/Header";
import Footer from "./company/Footer";
import { ROLES } from "./Admin/roles"; // ✅ Roles
import AdminDashboard from "./Admin/AdminDashboard.js"

const PageWithLayout = ({ children }) => (
  <>
    <Header />
    <main className="flex-1 min-h-[calc(100vh-120px)] bg-gray-50">{children}</main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PageWithLayout>
              <HomePage />
            </PageWithLayout>
          }
        />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />

        {/* Role-Based Protected Routes */}
        <Route
          path="/HospitalDashboard"
          element={
            <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.DOCTOR]}>
              <HospitalDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AdminDashboard"
          element={
            <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
