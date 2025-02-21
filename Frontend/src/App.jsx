import React, { useContext } from 'react'
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start"
import UserLogin from "./pages/UserLogin";  // Default export
import UserSignup from "./pages/UserSignup"; // Default export
import CaptainSignup from "./pages/captainSignup"; // Default export
import Captainlogin from "./pages/Captainlogin";
import Home from "./pages/Home" // Default export

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
