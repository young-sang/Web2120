import React, { useState } from "react";
import Login from "./Login";
import "../style/FP.css";
import Web2 from "./Web2.js";

function FP() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  return (
    <div className="FP">
      {isLoggedIn ? <Web2 /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default FP;
