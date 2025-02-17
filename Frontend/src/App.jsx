import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"; 
import UserLogin from "./pages/UserLogin";  // Default export
import UserSignup from "./pages/UserSignup"; // Default export
import CaptainSignup from "./pages/captainSignup"; // Default export
import Captainlogin from "./pages/Captainlogin"; // Default export

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
      </Routes>
    </div>
  );
};

export default App;
