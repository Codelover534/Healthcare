import React from "react";
import { ConfigProvider } from "antd";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import WhyUsSection from "./components/sections/WhyUsSection";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthLayout from "./components/layout/AuthLayout";
import PatientPortal from "./pages/patient/PatientPortal";
import DoctorPortal from "./pages/doctor/DoctorPortal";
import InsurancePortal from "./pages/insurance/InsurancePortal";
import HospitalPortal from "./pages/hospital/HospitalPortal";
import "./index.css";

// Create a MainLayout component for the landing page
const MainLayout = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <WhyUsSection />
    </main>
    <Footer />
    <ScrollToTop />
  </>
);

const App = () => {
  // Custom theme configuration
  const theme = {
    token: {
      colorPrimary: "#129990", // Primary teal
      colorSecondary: "#90D1CA", // Secondary mint
      borderRadius: 12,
      fontFamily: "Poppins, sans-serif",
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <Router>
        <div className="min-h-screen bg-[#FFFBDE]">
          <Routes>
            {/* Main Landing Page */}
            <Route path="/" element={<MainLayout />} />

            {/* Auth Routes */}
            <Route
              path="/login"
              element={
                <AuthLayout>
                  <Login />
                </AuthLayout>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthLayout>
                  <Signup />
                </AuthLayout>
              }
            />

            {/* Portal Routes */}
            <Route path="/patient" element={<PatientPortal />} />
            <Route path="/doctor" element={<DoctorPortal />} />
            <Route path="/insurance" element={<InsurancePortal />} />
            <Route path="/hospital" element={<HospitalPortal />} />

            {/* Redirect unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  );
};

export default App;
