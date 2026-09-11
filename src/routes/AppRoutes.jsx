import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Pricing from "../pages/Pricing";
import Trending from "../pages/Trending";
import MyScripts from "../pages/MyScripts";
import Dashboard from "../pages/Dashboard";
import HowItWorks from "../components/HowItWorks";
import Settings from "../pages/Settings";
import ResetPassword from "../pages/ResetPassword";
import ProtectedRoute from "../assets/ProtectedRoute";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/trending" element={<Trending />} />
    
  <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/my-scripts"
  element={
    <ProtectedRoute>
      <MyScripts />
    </ProtectedRoute>
  }
/>

<Route
  path="/settings"
  element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}